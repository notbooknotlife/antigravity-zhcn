$ErrorActionPreference = "Stop"

$pluginRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$appPathCandidates = @(
  (Join-Path $pluginRoot "Antigravity.exe"),
  (Join-Path (Split-Path -Parent $pluginRoot) "Antigravity.exe")
)
$appPath = $appPathCandidates |
  Where-Object { Test-Path -LiteralPath $_ -PathType Leaf } |
  Select-Object -First 1
$vbsPath = Join-Path $pluginRoot "start-silent.vbs"
$wscript = Join-Path $env:SystemRoot "System32\wscript.exe"
$taskName = "Antigravity-ZhCN-Listener"
$legacyStartupScriptPath = Join-Path ([Environment]::GetFolderPath("Startup")) "Antigravity-ZhCN.vbs"
$localAppData = if ($env:LOCALAPPDATA) { $env:LOCALAPPDATA } else { Join-Path $env:USERPROFILE "AppData\Local" }

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

function Register-ListenerTask {
  param(
    [Parameter(Mandatory = $true)][string]$TaskName,
    [Parameter(Mandatory = $true)][string]$WscriptPath,
    [Parameter(Mandatory = $true)][string]$VbsScriptPath
  )

  try {
    $service = New-Object -ComObject "Schedule.Service"
    $service.Connect()
    $folder = $service.GetFolder("\")
    try { $folder.DeleteTask($TaskName, 0) } catch {}

    $definition = $service.NewTask(0)
    $definition.RegistrationInfo.Description = "Antigravity 简体中文插件监听器"
    $definition.Settings.Enabled = $true
    $definition.Settings.StartWhenAvailable = $true
    $definition.Settings.DisallowStartIfOnBatteries = $false
    $definition.Settings.StopIfGoingOnBatteries = $false
    $definition.Settings.MultipleInstances = 2

    $currentUser = "$env:USERDOMAIN\$env:USERNAME"
    $definition.Principal.UserId = $currentUser
    $definition.Principal.LogonType = 3
    $definition.Principal.RunLevel = 0

    $trigger = $definition.Triggers.Create(9)
    $trigger.UserId = $currentUser

    $action = $definition.Actions.Create(0)
    $action.Path = $WscriptPath
    $action.Arguments = "//B //Nologo `"$VbsScriptPath`""
    $action.WorkingDirectory = Split-Path -Parent $VbsScriptPath

    $folder.RegisterTaskDefinition("\$TaskName", $definition, 6, $null, $null, 3, $null) | Out-Null
    return $true
  } catch {
    Show-InstallError -Message "无法创建登录启动监听任务。`r`n`r`n错误：$($_.Exception.Message)`r`n`r`n请确认当前用户有权使用 Windows 任务计划程序，然后重试。"
    return $false
  }
}

if (-not $appPath) {
  $message = "未找到 Antigravity.exe。`r`n`r`n请将本插件文件夹放在 Antigravity 安装目录内，例如：`r`nC:\...\antigravity\antigravity-zhcn\"
  Show-InstallError -Message $message
  throw "Antigravity.exe was not found beside or above the plugin folder."
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

if (-not (Register-ListenerTask -TaskName $taskName -WscriptPath $wscript -VbsScriptPath $vbsPath)) {
  throw "Unable to register the Antigravity listener task."
}

# Remove persistence files created by older revisions. This version creates no shortcuts.
$desktopShortcut = Join-Path ([Environment]::GetFolderPath("Desktop")) "Antigravity-ZhCN.lnk"
$legacyStartupShortcut = Join-Path ([Environment]::GetFolderPath("Startup")) "Antigravity-ZhCN-Daemon.lnk"
foreach ($legacyPath in @($desktopShortcut, $legacyStartupShortcut, $legacyStartupScriptPath)) {
  if (Test-Path -LiteralPath $legacyPath) {
    Remove-Item -LiteralPath $legacyPath -Force -ErrorAction SilentlyContinue
  }
}

Start-Process -FilePath $wscript -ArgumentList "//B", "//Nologo", "`"$vbsPath`"" -WorkingDirectory $pluginRoot -WindowStyle Hidden

Write-Host "Antigravity 简体中文插件已安装。"
Write-Host "Node.js: $($node.Version)"
Write-Host "登录启动任务: $taskName"
Write-Host "监听目标: $appPath"
Write-Host "不会创建快捷方式，也不会修改官方 Antigravity.exe。"
