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

function Show-InstallError {
  param(
    [Parameter(Mandatory = $true)][string]$Message,
    [string]$Title = "Antigravity 简体中文插件"
  )

  try {
    Add-Type -AssemblyName System.Windows.Forms
    [System.Windows.Forms.MessageBox]::Show(
      $Message,
      $Title,
      [System.Windows.Forms.MessageBoxButtons]::OK,
      [System.Windows.Forms.MessageBoxIcon]::Error
    ) | Out-Null
  } catch {
    Write-Host "[错误] $Message" -ForegroundColor Red
  }
}

function Find-NodeExecutable {
  $nodeCommand = Get-Command node.exe -ErrorAction SilentlyContinue
  $nodePathCandidates = @()
  if ($nodeCommand) { $nodePathCandidates += $nodeCommand.Source }
  $nodePathCandidates += Join-Path $env:ProgramFiles "nodejs\node.exe"
  $nodePathCandidates += Join-Path $localAppData "Programs\nodejs\node.exe"
  $nodePathCandidates += Join-Path ${env:ProgramFiles(x86)} "nodejs\node.exe"

  foreach ($candidate in ($nodePathCandidates | Where-Object { $_ } | Select-Object -Unique)) {
    if (-not (Test-Path -LiteralPath $candidate -PathType Leaf)) { continue }
    try {
      $version = & $candidate --version 2>$null
      if ($LASTEXITCODE -eq 0 -and $version) {
        return [ordered]@{ Path = $candidate; Version = $version.Trim() }
      }
    } catch {}
  }

  return $null
}

if (-not (Test-Path -LiteralPath $appPath -PathType Leaf)) {
  throw "Antigravity.exe must be in the same folder as install.ps1: $appPath"
}
if (-not (Test-Path -LiteralPath $vbsPath -PathType Leaf)) {
  throw "start-silent.vbs is missing: $vbsPath"
}

$node = Find-NodeExecutable
if (-not $node) {
  $message = "未检测到可用的 Node.js。`r`n`r`n安装前务必先安装 Node.js，它是本插件监听器的运行环境。`r`n安装完成后，请重新运行 install.ps1。"
  Show-InstallError -Message $message
  throw "Node.js was not found or could not be executed."
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
Write-Host "Node.js: $($node.Version)"
Write-Host "监听启动项: HKCU\Software\Microsoft\Windows\CurrentVersion\Run\$runName"
Write-Host "监听目标: $appPath"
Write-Host "不会创建桌面快捷方式，也不会修改官方 Antigravity.exe。"
