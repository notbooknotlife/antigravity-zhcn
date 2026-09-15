"use strict";

const fs = require("fs");
const path = require("path");
const { execFile, spawn } = require("child_process");
const { CdpClient, findAllPageTargets } = require("./cdp-client");
const { buildTranslationScript } = require("./translate");

const STATE_FILE = path.join(__dirname, "install-state.json");
const configuredAppPath = (() => {
  try {
    const state = JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
    return typeof state.appPath === "string" ? state.appPath : null;
  } catch (_) {
    return null;
  }
})();
const APP = process.env.ANTIGRAVITY_EXE || configuredAppPath || path.join(
  process.env.LOCALAPPDATA || path.join(process.env.USERPROFILE || "", "AppData", "Local"),
  "Programs",
  "antigravity",
  "Antigravity.exe",
);
const DEFAULT_PORT = Number(process.env.ANTIGRAVITY_ZHCN_PORT || 9229);
const STARTUP_TIMEOUT_MS = Number(process.env.ANTIGRAVITY_ZHCN_STARTUP_TIMEOUT || 30000);
const ROOT = __dirname;
const LOG = path.join(ROOT, "antigravity-zhcn.log");
const PID_FILE = path.join(ROOT, "antigravity-zhcn.pid");
const ACTIVE_PORT_FILE = path.join(
  process.env.APPDATA || path.join(process.env.USERPROFILE || "", "AppData", "Roaming"),
  "Antigravity",
  "DevToolsActivePort"
);

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  process.stdout.write(`${line}\n`);
  try {
    // 限制日志大小不超过 1MB
    if (fs.existsSync(LOG) && fs.statSync(LOG).size > 1024 * 1024) {
      fs.renameSync(LOG, LOG + ".old");
    }
    fs.appendFileSync(LOG, `${line}\n`);
  } catch (_) {}
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// 检查 PID 是否仍在运行
function isPidRunning(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (_) {
    return false;
  }
}

function isAntigravityRunning() {
  const imageName = path.basename(APP);
  return new Promise((resolve) => {
    execFile("tasklist.exe", ["/FI", `IMAGENAME eq ${imageName}`, "/FO", "CSV", "/NH"], {
      windowsHide: true,
    }, (error, stdout) => {
      if (error) return resolve(false);
      resolve(stdout.toLowerCase().includes(`"${imageName.toLowerCase()}"`));
    });
  });
}

// 确保单实例运行
function ensureSingleInstance() {
  if (fs.existsSync(PID_FILE)) {
    try {
      const oldPid = Number(fs.readFileSync(PID_FILE, "utf8").trim());
      if (Number.isInteger(oldPid) && oldPid !== process.pid && isPidRunning(oldPid)) {
        log(`Another instance of launcher.js is already running with PID ${oldPid}. Exiting current.`);
        process.exit(0);
      }
    } catch (_) {}
  }
  fs.writeFileSync(PID_FILE, String(process.pid), "utf8");
  process.on("exit", () => {
    try {
      if (fs.existsSync(PID_FILE) && fs.readFileSync(PID_FILE, "utf8").trim() === String(process.pid)) {
        fs.unlinkSync(PID_FILE);
      }
    } catch (_) {}
  });
}

// 读取当前运行中的 CDP 端口
async function resolveCurrentPort() {
  try {
    if (fs.existsSync(ACTIVE_PORT_FILE)) {
      const port = Number(fs.readFileSync(ACTIVE_PORT_FILE, "utf8").split(/\r?\n/)[0].trim());
      if (Number.isInteger(port) && port > 0) {
        const targets = await findAllPageTargets(port);
        if (targets.length > 0) return port;
      }
    }
  } catch (_) {}

  // 尝试默认端口
  try {
    const targets = await findAllPageTargets(DEFAULT_PORT);
    if (targets.length > 0) return DEFAULT_PORT;
  } catch (_) {}

  return null;
}

// 向页面目标注入汉化脚本
async function injectIntoTarget(target) {
  const client = await new CdpClient(target.webSocketDebuggerUrl).connect();
  await client.command("Page.enable");
  await client.command("Page.addScriptToEvaluateOnNewDocument", {
    source: buildTranslationScript(),
  });
  await client.command("Runtime.evaluate", {
    expression: buildTranslationScript(),
    awaitPromise: false,
    returnByValue: false,
  });
  return client;
}

async function main() {
  ensureSingleInstance();
  log("Antigravity Simplified Chinese Guardian Daemon starting...");

  // 只在 Antigravity 尚未运行时由桌面入口一起拉起，避免重复启动官方程序。
  let activePort = await resolveCurrentPort();
  if (!activePort) {
    if (!await isAntigravityRunning() && fs.existsSync(APP)) {
      log(`Antigravity not detected, launching: ${APP}`);
      spawn(APP, [`--remote-debugging-port=${DEFAULT_PORT}`], {
        cwd: path.dirname(APP),
        detached: true,
        stdio: "ignore",
        windowsHide: true,
      }).unref();
    } else if (!fs.existsSync(APP)) {
      log(`Antigravity executable not found: ${APP}`);
      return;
    }
  }

  const activeClients = new Map(); // targetId -> { client, url }
  let lastReportedPort = null;
  let isWaitingLogged = false;
  const startedAt = Date.now();
  let connectedOnce = false;

  // 永不退出的常驻守护主循环
  while (true) {
    try {
      const port = await resolveCurrentPort();

      if (!port) {
        // Antigravity 当前没有活动窗口
        if (activeClients.size > 0) {
          log("Antigravity closed or restarted. Cleaning up active CDP sessions...");
          for (const [id, session] of activeClients.entries()) {
            try { session.client.close(); } catch (_) {}
          }
          activeClients.clear();
        }
        if (connectedOnce) {
          log("Antigravity closed or lost its CDP endpoint. Exiting guardian daemon.");
          break;
        }
        if (Date.now() - startedAt >= STARTUP_TIMEOUT_MS) {
          log("Antigravity did not expose a CDP endpoint before the startup timeout. Exiting guardian daemon.");
          break;
        }
        if (!isWaitingLogged) {
          log("Waiting for Antigravity instance to be detected...");
          isWaitingLogged = true;
          lastReportedPort = null;
        }
        await sleep(2000);
        continue;
      }

      isWaitingLogged = false;
      connectedOnce = true;

      // 如果端口发生变更（比如重启后生成了新端口）
      if (lastReportedPort !== port) {
        log(`Connected to Antigravity on CDP port ${port}`);
        lastReportedPort = port;
        for (const [id, session] of activeClients.entries()) {
          try { session.client.close(); } catch (_) {}
        }
        activeClients.clear();
      }

      // 获取当前所有可注入页面
      const targets = await findAllPageTargets(port);
      const currentTargetIds = new Set(targets.map((t) => t.id));

      // 清理已关闭的 target
      for (const [id, session] of activeClients.entries()) {
        if (!currentTargetIds.has(id)) {
          log(`Target closed: ${session.url}`);
          try { session.client.close(); } catch (_) {}
          activeClients.delete(id);
        }
      }

      // 注入新出现的 target
      for (const target of targets) {
        const existing = activeClients.get(target.id);
        // Antigravity 会复用同一个 CDP target 完成页面导航；URL 变化时，
        // 原来的 document 已经销毁，需要重新挂载新文档脚本。
        if (existing && existing.url !== target.url) {
          log(`Target navigated: ${existing.url} -> ${target.url}`);
          try { existing.client.close(); } catch (_) {}
          activeClients.delete(target.id);
        }
        if (!activeClients.has(target.id)) {
          try {
            const client = await injectIntoTarget(target);
            activeClients.set(target.id, { client, url: target.url });
            log(`Simplified Chinese injector attached to: ${target.url}`);
          } catch (err) {
            log(`Failed to attach to target ${target.id}: ${err.message}`);
          }
        }
      }
    } catch (loopError) {
      log(`Daemon loop notice: ${loopError.message}`);
    }

    await sleep(1500);
  }
}

main().catch((error) => {
  log(`Fatal daemon error: ${error.stack || error.message}`);
  process.exitCode = 1;
});
