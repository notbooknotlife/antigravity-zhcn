$ErrorActionPreference = "Stop"

$pluginRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$appPath = Join-Path $pluginRoot "Antigravity.exe"
$vbsPath = Join-Path $pluginRoot "start-silent.vbs"
$runKey = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Run"
$runName = "Antigravity-ZhCN"
$wscript = Join-Path $env:SystemRoot "System32\wscript.exe"
$localAppData = if ($env:LOCALAPPDATA) { $env:LOCALAPPDATA } else { Join-Path $env:USERPROFILE "AppData\Local" }
$runtimeRoot = Join-Path $localAppData "Antigravity-ZhCN"
$backupPath = Join-Path $runtimeRoot "previous-run-value.txt"

if (-not (Test-Path -LiteralPath $appPath -PathType Leaf)) {
  throw "Antigravity.exe must be in the same folder as install.ps1: $appPath"
}
if (-not (Test-Path -LiteralPath $vbsPath -PathType Leaf)) {
  throw "start-silent.vbs is missing: $vbsPath"
}

$nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
$nodePathCandidates = @()
if ($nodeCommand) { $nodePathCandidates += $nodeCommand.Source }
$nodePathCandidates += Join-Path $env:ProgramFiles "nodejs\node.exe"
$nodePathCandidates += Join-Path $localAppData "Programs\nodejs\node.exe"
$nodePathCandidates += Join-Path ${env:ProgramFiles(x86)} "nodejs\node.exe"
$nodeCandidates = $nodePathCandidates |
  Where-Object { $_ -and (Test-Path -LiteralPath $_ -PathType Leaf) } |
  Select-Object -First 1

if (-not $nodeCandidates) {
  throw "Node.js was not found. Install Node.js and run install.ps1 again."
}

New-Item -ItemType Directory -Path $runtimeRoot -Force | Out-Null
New-Item -Path $runKey -Force | Out-Null

$runCommand = "`"$wscript`" //B //Nologo `"$vbsPath`""
$currentValue = (Get-ItemProperty -Path $runKey -Name $runName -ErrorAction SilentlyContinue).$runName
if ($currentValue -and $currentValue -ne $runCommand -and -not (Test-Path -LiteralPath $backupPath)) {
  Set-Content -LiteralPath $backupPath -Value $currentValue -Encoding UTF8
}
Set-ItemProperty -Path $runKey -Name $runName -Value $runCommand -Type String

# Remove shortcuts created by older revisions. This version intentionally creates none.
$desktopShortcut = Join-Path ([Environment]::GetFolderPath("Desktop")) "Antigravity-ZhCN.lnk"
$legacyStartupShortcut = Join-Path ([Environment]::GetFolderPath("Startup")) "Antigravity-ZhCN-Daemon.lnk"
foreach ($legacyPath in @($desktopShortcut, $legacyStartupShortcut)) {
  if (Test-Path -LiteralPath $legacyPath) {
    Remove-Item -LiteralPath $legacyPath -Force -ErrorAction SilentlyContinue
  }
}

Start-Process -FilePath $wscript -ArgumentList "//B", "//Nologo", "`"$vbsPath`"" -WorkingDirectory $pluginRoot -WindowStyle Hidden

Write-Host "Antigravity 简体中文插件已安装。"
Write-Host "监听启动项: HKCU\Software\Microsoft\Windows\CurrentVersion\Run\$runName"
Write-Host "监听目标: $appPath"
Write-Host "不会创建桌面快捷方式，也不会修改官方 Antigravity.exe。"
