$ErrorActionPreference = "Stop"
$pluginRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$appRoot = "C:\Users\zy\AppData\Local\Programs\antigravity"
$exe = Join-Path $appRoot "Antigravity.exe"
$wscript = Join-Path $env:SystemRoot "System32\wscript.exe"

if (-not (Test-Path $exe)) {
  throw "Antigravity.exe not found at $exe"
}

$version = (Get-Item $exe).VersionInfo.ProductVersion
$state = [ordered]@{
  installedAt = (Get-Date).ToString("o")
  appPath = $exe
  appVersion = $version
  pluginRoot = $pluginRoot
}
$state | ConvertTo-Json | Set-Content -Encoding UTF8 (Join-Path $pluginRoot "install-state.json")

$desktop = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Antigravity-ZhCN.lnk"
$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $wscript
$shortcut.Arguments = "`"" + (Join-Path $pluginRoot "start-silent.vbs") + "`""
$shortcut.WorkingDirectory = $pluginRoot
$shortcut.IconLocation = "$exe,0"
$shortcut.Description = "Antigravity 简体中文版 (后台静默注入守护)"
$shortcut.Save()

# 从桌面快捷方式启动 Antigravity 与汉化守护进程；不写入开机启动项。
Start-Process -FilePath $wscript -ArgumentList "`"$pluginRoot\start-silent.vbs`"" -WorkingDirectory $pluginRoot

Write-Host "================================================="
Write-Host "已成功安装并启动 Antigravity 简体中文插件！"
Write-Host "桌面快捷方式: $shortcutPath (无黑框启动)"
Write-Host "开机自启: 未设置（汉化进程随 Antigravity 启动和退出）"
Write-Host "守护进程已在后台运行，并绑定当前 Antigravity 生命周期。"
Write-Host "特性: 多窗口自动注入、动态断线重连、设置左边汉化右边原文。"
Write-Host "================================================="
