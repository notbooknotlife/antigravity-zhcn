'use strict';

const http = require('http');
const net = require('net');

function requestJson(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
    });
    req.setTimeout(1500, () => req.destroy(new Error('CDP request timed out')));
    req.on('error', reject);
  });
}

function readWebSocketFrame(buffer) {
  if (buffer.length < 2) return null;
  const first = buffer[0];
  const second = buffer[1];
  const opcode = first & 0x0f;
  const masked = (second & 0x80) !== 0;
  let length = second & 0x7f;
  let offset = 2;
  if (length === 126) {
    if (buffer.length < 4) return null;
    length = buffer.readUInt16BE(2);
    offset = 4;
  } else if (length === 127) {
    if (buffer.length < 10) return null;
    const high = buffer.readUInt32BE(2);
    const low = buffer.readUInt32BE(6);
    if (high !== 0) throw new Error('CDP frame is too large');
    length = low;
    offset = 10;
  }
  const maskOffset = masked ? 4 : 0;
  const end = offset + maskOffset + length;
  if (buffer.length < end) return null;
  const mask = masked ? buffer.subarray(offset, offset + 4) : null;
  const payloadStart = offset + maskOffset;
  const payload = Buffer.from(buffer.subarray(payloadStart, end));
  if (mask) {
    for (let index = 0; index < payload.length; index += 1) {
      payload[index] ^= mask[index % 4];
    }
  }
  return { opcode, payload, consumed: end };
}

function encodeWebSocketFrame(text) {
  const payload = Buffer.from(text, 'utf8');
  const mask = Buffer.from([0x5a, 0xa3, 0x17, 0xc9]);
  const maskedPayload = Buffer.alloc(payload.length);
  for (let index = 0; index < payload.length; index += 1) {
    maskedPayload[index] = payload[index] ^ mask[index % 4];
  }
  let header;
  if (payload.length < 126) {
    header = Buffer.from([0x81, 0x80 | payload.length]);
  } else if (payload.length < 65536) {
    header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 0x80 | 126;
    header.writeUInt16BE(payload.length, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x81;
    header[1] = 0x80 | 127;
    header.writeUInt32BE(0, 2);
    header.writeUInt32BE(payload.length, 6);
  }
  return Buffer.concat([header, mask, maskedPayload]);
}

class CdpClient {
  constructor(webSocketUrl) {
    this.webSocketUrl = webSocketUrl;
    this.socket = null;
    this.buffer = Buffer.alloc(0);
    this.nextId = 1;
    this.pending = new Map();
    this.events = new Map();
  }

  async connect() {
    const url = new URL(this.webSocketUrl);
    const key = Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
    this.socket = net.createConnection({ host: url.hostname, port: Number(url.port) });
    this.socket.setTimeout(3000);
    await new Promise((resolve, reject) => {
      let settled = false;
      const finish = (callback, value) => {
        if (settled) return;
        settled = true;
        this.socket.setTimeout(0);
        this.socket.off('timeout', onTimeout);
        callback(value);
      };
      const onError = (error) => {
        this.socket.off('connect', onConnect);
        finish(reject, error);
      };
      const onTimeout = () => finish(reject, new Error('CDP WebSocket connection timed out'));
      const onConnect = () => {
        this.socket.off('error', onError);
        const path = `${url.pathname}${url.search}`;
        this.socket.write(
          `GET ${path} HTTP/1.1\r\n` +
          `Host: ${url.host}\r\n` +
          `Upgrade: websocket\r\n` +
          `Connection: Upgrade\r\n` +
          `Sec-WebSocket-Key: ${key}\r\n` +
          `Sec-WebSocket-Version: 13\r\n\r\n`,
        );
        let handshake = '';
        const onData = (chunk) => {
          handshake += chunk.toString('binary');
          if (!handshake.includes('\r\n\r\n')) return;
          this.socket.off('data', onData);
          if (!handshake.startsWith('HTTP/1.1 101')) {
            finish(reject, new Error(`CDP WebSocket handshake failed: ${handshake.split('\r\n')[0]}`));
            return;
          }
          const separator = Buffer.from('\r\n\r\n', 'binary');
          const raw = Buffer.from(handshake, 'binary');
          const remainder = raw.subarray(raw.indexOf(separator) + separator.length);
          if (remainder.length) this.handleData(remainder);
          this.socket.on('data', (data) => this.handleData(data));
          this.socket.on('close', () => this.rejectPending(new Error('CDP connection closed')));
          this.socket.on('error', (error) => this.rejectPending(error));
          finish(resolve);
        };
        this.socket.on('data', onData);
      };
      this.socket.once('error', onError);
      this.socket.once('timeout', onTimeout);
      this.socket.once('connect', onConnect);
    });
    return this;
  }

  handleData(data) {
    this.buffer = Buffer.concat([this.buffer, data]);
    while (true) {
      const frame = readWebSocketFrame(this.buffer);
      if (!frame) return;
      this.buffer = this.buffer.subarray(frame.consumed);
      if (frame.opcode === 0x8) {
        this.socket.end();
        this.rejectPending(new Error('CDP WebSocket closed'));
        return;
      }
      if (frame.opcode === 0x9) {
        this.socket.write(Buffer.from([0x8a, 0]));
        continue;
      }
      if (frame.opcode !== 0x1) continue;
      let message;
      try {
        message = JSON.parse(frame.payload.toString('utf8'));
      } catch (_) {
        continue;
      }
      if (message.id && this.pending.has(message.id)) {
        const { resolve, reject } = this.pending.get(message.id);
        this.pending.delete(message.id);
        if (message.error) reject(new Error(message.error.message || 'CDP command failed'));
        else resolve(message.result);
      }
      for (const handler of this.events.get(message.method) || []) handler(message.params);
    }
  }

  rejectPending(error) {
    for (const { reject } of this.pending.values()) reject(error);
    this.pending.clear();
  }

  command(method, params = {}) {
    const id = this.nextId++;
    const promise = new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
    this.socket.write(encodeWebSocketFrame(JSON.stringify({ id, method, params })));
    return promise;
  }

  on(method, handler) {
    const handlers = this.events.get(method) || [];
    handlers.push(handler);
    this.events.set(method, handlers);
  }

  close() {
    this.socket?.end();
  }
}

async function findPageTarget(port) {
  const targets = await findAllPageTargets(port);
  return targets[0] || null;
}

async function findAllPageTargets(port) {
  try {
    const targets = await requestJson(`http://127.0.0.1:${port}/json/list`);
    return Array.isArray(targets)
      ? targets.filter((target) => target.type === 'page' && target.webSocketDebuggerUrl)
      : [];
  } catch (_) {
    return [];
  }
}

module.exports = { CdpClient, findPageTarget, findAllPageTargets, requestJson };
