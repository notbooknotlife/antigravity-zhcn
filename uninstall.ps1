$ErrorActionPreference = "Stop"
$pluginRoot = Split-Path -Parent $MyInvocation.MyCommand.Path

# 停止可能正在运行的守护进程
$pidFile = Join-Path $pluginRoot "antigravity-zhcn.pid"
if (Test-Path $pidFile) {
  try {
    $daemonPid = [int](Get-Content $pidFile).Trim()
    Stop-Process -Id $daemonPid -Force -ErrorAction SilentlyContinue
  } catch {}
  Remove-Item -LiteralPath $pidFile -Force -ErrorAction SilentlyContinue
}

$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Antigravity-ZhCN.lnk"
if (Test-Path $shortcutPath) { Remove-Item -LiteralPath $shortcutPath -Force }

# 清理旧版本可能创建过的开机启动项；新版本不会再创建它。
$startupDir = [Environment]::GetFolderPath("Startup")
$legacyStartupShortcutPath = Join-Path $startupDir "Antigravity-ZhCN-Daemon.lnk"
if (Test-Path $legacyStartupShortcutPath) { Remove-Item -LiteralPath $legacyStartupShortcutPath -Force }

$statePath = Join-Path $pluginRoot "install-state.json"
if (Test-Path $statePath) { Remove-Item -LiteralPath $statePath -Force }

Write-Host "已停止汉化守护进程并移除快捷方式。官方 Antigravity 未被修改。"
