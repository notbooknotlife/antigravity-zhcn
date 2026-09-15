"use strict";

const fs = require("fs");
const path = require("path");
const { execFile } = require("child_process");
const { CdpClient, findAllPageTargets } = require("./cdp-client");
const { buildTranslationScript } = require("./translate");

// The package is installed beside Antigravity.exe.
const ROOT = __dirname;
const APP = path.resolve(process.env.ANTIGRAVITY_EXE || path.join(ROOT, "Antigravity.exe"));
const APP_NAME = path.basename(APP);
const DEFAULT_PORT = Number(process.env.ANTIGRAVITY_ZHCN_PORT || 9229);
const POLL_INTERVAL_MS = Number(process.env.ANTIGRAVITY_ZHCN_POLL_INTERVAL || 1500);
const APP_DATA = process.env.LOCALAPPDATA || path.join(process.env.USERPROFILE || ROOT, "AppData", "Local");
const RUNTIME_ROOT = path.join(APP_DATA, "Antigravity-ZhCN");
const LOG_FILE = path.join(RUNTIME_ROOT, "antigravity-zhcn.log");
const PID_FILE = path.join(RUNTIME_ROOT, "antigravity-zhcn.pid");
const ACTIVE_PORT_FILES = [
  path.join(process.env.APPDATA || path.join(process.env.USERPROFILE || ROOT, "AppData", "Roaming"), "Antigravity", "DevToolsActivePort"),
  path.join(APP_DATA, "Antigravity", "DevToolsActivePort"),
];

let shuttingDown = false;

function ensureRuntimeRoot() {
  fs.mkdirSync(RUNTIME_ROOT, { recursive: true });
}

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  process.stdout.write(`${line}\n`);
  try {
    ensureRuntimeRoot();
    if (fs.existsSync(LOG_FILE) && fs.statSync(LOG_FILE).size > 1024 * 1024) {
      fs.renameSync(LOG_FILE, `${LOG_FILE}.old`);
    }
    fs.appendFileSync(LOG_FILE, `${line}\n`, "utf8");
  } catch (_) {
    // Logging must never stop the monitor.
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isPidRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (_) {
    return false;
  }
}

function ensureSingleInstance() {
  ensureRuntimeRoot();

  if (fs.existsSync(PID_FILE)) {
    try {
      const oldPid = Number(fs.readFileSync(PID_FILE, "utf8").trim());
      if (Number.isInteger(oldPid) && oldPid !== process.pid && isPidRunning(oldPid)) {
        log(`Another listener is already running with PID ${oldPid}.`);
        return false;
      }
    } catch (_) {}
  }

  fs.writeFileSync(PID_FILE, String(process.pid), "utf8");
  const removeOwnPid = () => {
    try {
      if (fs.existsSync(PID_FILE) && fs.readFileSync(PID_FILE, "utf8").trim() === String(process.pid)) {
        fs.unlinkSync(PID_FILE);
      }
    } catch (_) {}
  };
  process.once("exit", removeOwnPid);
  return true;
}

function closeClients(activeClients) {
  for (const session of activeClients.values()) {
    try { session.client.close(); } catch (_) {}
  }
  activeClients.clear();
}

function powerShellLiteral(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function runPowerShell(script) {
  const encoded = Buffer.from(script, "utf16le").toString("base64");
  return new Promise((resolve) => {
    execFile(
      "powershell.exe",
      ["-NoProfile", "-NonInteractive", "-ExecutionPolicy", "Bypass", "-EncodedCommand", encoded],
      { windowsHide: true, maxBuffer: 1024 * 1024 },
      (error, stdout) => resolve(error ? "" : stdout.trim()),
    );
  });
}

// Use the executable path, not only the process name, so another installation is ignored.
async function findRunningApp() {
  const script = [
    `$targetPath = ${powerShellLiteral(APP)};`,
    `$targetName = ${powerShellLiteral(APP_NAME)};`,
    "$process = Get-CimInstance -ClassName Win32_Process -ErrorAction SilentlyContinue |",
    "  Where-Object { $_.Name -ieq $targetName -and $_.ExecutablePath -and $_.ExecutablePath -ieq $targetPath } |",
    "  Select-Object -First 1 ProcessId,ExecutablePath;",
    "if ($process) { $process | ConvertTo-Json -Compress }",
  ].join(" ");

  const output = await runPowerShell(script);
  if (!output) return null;

  try {
    const result = JSON.parse(output);
    const pid = Number(result.ProcessId);
    return Number.isInteger(pid) && pid > 0 ? { pid, path: result.ExecutablePath } : null;
  } catch (_) {
    return null;
  }
}

async function findPortTargets(port) {
  try {
    const targets = await findAllPageTargets(port);
    return targets.length > 0 ? targets : null;
  } catch (_) {
    return null;
  }
}

async function resolveCurrentPort() {
  const candidates = [];
  if (Number.isInteger(DEFAULT_PORT) && DEFAULT_PORT > 0) candidates.push(DEFAULT_PORT);

  for (const file of ACTIVE_PORT_FILES) {
    try {
      if (!fs.existsSync(file)) continue;
      const port = Number(fs.readFileSync(file, "utf8").split(/\r?\n/)[0].trim());
      if (Number.isInteger(port) && port > 0) candidates.unshift(port);
    } catch (_) {}
  }

  const checked = new Set();
  for (const port of candidates) {
    if (checked.has(port)) continue;
    checked.add(port);
    const targets = await findPortTargets(port);
    if (targets) return { port, targets };
  }
  return null;
}

async function injectIntoTarget(target) {
  const client = await new CdpClient(target.webSocketDebuggerUrl).connect();
  const source = buildTranslationScript();
  await client.command("Page.enable");
  await client.command("Page.addScriptToEvaluateOnNewDocument", { source });
  await client.command("Runtime.evaluate", {
    expression: source,
    awaitPromise: false,
    returnByValue: false,
  });
  return client;
}

async function syncTargets(targets, activeClients) {
  const currentTargetIds = new Set(targets.map((target) => target.id));

  for (const [id, session] of activeClients.entries()) {
    if (!currentTargetIds.has(id)) {
      try { session.client.close(); } catch (_) {}
      activeClients.delete(id);
    }
  }

  for (const target of targets) {
    const existing = activeClients.get(target.id);
    if (existing && existing.url !== target.url) {
      try { existing.client.close(); } catch (_) {}
      activeClients.delete(target.id);
    }

    if (activeClients.has(target.id)) continue;

    try {
      const client = await injectIntoTarget(target);
      activeClients.set(target.id, { client, url: target.url });
      log(`Attached to Antigravity page: ${target.url}`);
    } catch (error) {
      log(`Failed to attach to target ${target.id}: ${error.message}`);
    }
  }
}

async function main() {
  if (!fs.existsSync(APP)) {
    log(`Antigravity.exe was not found beside the plugin: ${APP}`);
    return;
  }

  if (!ensureSingleInstance()) return;
  log(`Listener started for ${APP}`);

  const activeClients = new Map();
  let observedPid = null;
  let activePort = null;
  let waitingForPortPid = null;
  let waitingForAppLogged = false;

  while (!shuttingDown) {
    try {
      const app = await findRunningApp();

      if (!app) {
        if (observedPid !== null) {
          log(`Antigravity exited (PID ${observedPid}); closing injection sessions.`);
          closeClients(activeClients);
          observedPid = null;
          activePort = null;
          waitingForPortPid = null;
        }
        if (!waitingForAppLogged) {
          log("Waiting for Antigravity.exe...");
          waitingForAppLogged = true;
        }
        await sleep(POLL_INTERVAL_MS);
        continue;
      }

      waitingForAppLogged = false;

      if (observedPid !== app.pid) {
        closeClients(activeClients);
        observedPid = app.pid;
        activePort = null;
        waitingForPortPid = null;
        log(`Antigravity detected (PID ${app.pid}).`);
      }

      const resolved = await resolveCurrentPort();
      if (!resolved) {
        if (waitingForPortPid !== app.pid) {
          log("Antigravity is running, but no CDP endpoint is available yet.");
          waitingForPortPid = app.pid;
        }
        closeClients(activeClients);
        activePort = null;
        await sleep(POLL_INTERVAL_MS);
        continue;
      }

      if (activePort !== resolved.port) {
        closeClients(activeClients);
        activePort = resolved.port;
        log(`Connected to Antigravity CDP port ${activePort}.`);
      }

      await syncTargets(resolved.targets, activeClients);
    } catch (error) {
      log(`Listener loop notice: ${error.message}`);
    }

    await sleep(POLL_INTERVAL_MS);
  }

  closeClients(activeClients);
}

function shutdown() {
  shuttingDown = true;
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
process.on("uncaughtException", (error) => {
  log(`Fatal listener error: ${error.stack || error.message}`);
  shutdown();
});
process.on("unhandledRejection", (error) => {
  log(`Unhandled listener error: ${error?.stack || error}`);
});

main().catch((error) => {
  log(`Fatal listener error: ${error.stack || error.message}`);
  process.exitCode = 1;
});
