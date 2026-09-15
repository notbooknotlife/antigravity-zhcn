$ErrorActionPreference = "Stop"

$pluginRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$taskName = "Antigravity-ZhCN-Listener"
$startupScriptPath = Join-Path ([Environment]::GetFolderPath("Startup")) "Antigravity-ZhCN.vbs"
$localAppData = if ($env:LOCALAPPDATA) { $env:LOCALAPPDATA } else { Join-Path $env:USERPROFILE "AppData\Local" }
$runtimeRoot = Join-Path $localAppData "Antigravity-ZhCN"
$pidPath = Join-Path $runtimeRoot "antigravity-zhcn.pid"

try {
  $service = New-Object -ComObject "Schedule.Service"
  $service.Connect()
  $folder = $service.GetFolder("\")
  $folder.DeleteTask($taskName, 0)
} catch {}

if (Test-Path -LiteralPath $pidPath) {
  try {
    $listenerPid = [int](Get-Content -LiteralPath $pidPath -Raw).Trim()
    if ($listenerPid -gt 0) {
      Stop-Process -Id $listenerPid -Force -ErrorAction SilentlyContinue
    }
  } catch {}
}

if (Test-Path -LiteralPath $startupScriptPath) {
  Remove-Item -LiteralPath $startupScriptPath -Force -ErrorAction SilentlyContinue
}

$legacyPaths = @(
  (Join-Path ([Environment]::GetFolderPath("Desktop")) "Antigravity-ZhCN.lnk"),
  (Join-Path ([Environment]::GetFolderPath("Startup")) "Antigravity-ZhCN-Daemon.lnk")
)
foreach ($legacyPath in $legacyPaths) {
  if (Test-Path -LiteralPath $legacyPath) {
    Remove-Item -LiteralPath $legacyPath -Force -ErrorAction SilentlyContinue
  }
}

# The cleanup process starts after this script exits, so it can remove uninstall.ps1 too.
$filesToRemove = @(
  "launcher.js",
  "cdp-client.js",
  "translate.js",
  "install.ps1",
  "uninstall.ps1",
  "start-silent.vbs",
  "README.md",
  "start-antigravity-zhcn.cmd",
  "package.json",
  "install-state.json",
  "antigravity-zhcn.log",
  "antigravity-zhcn.log.old",
  "antigravity-zhcn.pid"
) | ForEach-Object { Join-Path $pluginRoot $_ }

$pathArray = ($filesToRemove | ForEach-Object { "'" + $_.Replace("'", "''") + "'" }) -join ","
$runtimeLiteral = "'" + $runtimeRoot.Replace("'", "''") + "'"
$cleanupScript = @"
Start-Sleep -Seconds 2
foreach (`$target in @($pathArray)) {
  Remove-Item -LiteralPath `$target -Force -ErrorAction SilentlyContinue
}
Remove-Item -LiteralPath $runtimeLiteral -Recurse -Force -ErrorAction SilentlyContinue
"@
$encodedCleanup = [Convert]::ToBase64String([Text.Encoding]::Unicode.GetBytes($cleanupScript))
Start-Process -FilePath "powershell.exe" -ArgumentList @(
  "-NoProfile",
  "-NonInteractive",
  "-WindowStyle",
  "Hidden",
  "-EncodedCommand",
  $encodedCleanup
) -WorkingDirectory $pluginRoot -WindowStyle Hidden

Write-Host "Antigravity 简体中文插件已卸载。"
Write-Host "已移除启动监听并安排清理插件文件；官方 Antigravity.exe 未被删除。"
