@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo [错误] 需要安装 Node.js 才能运行汉化注入器。
  pause
  exit /b 1
)

if "%1"=="--foreground" (
  node launcher.js
) else (
  start "" wscript.exe "%~dp0start-silent.vbs"
  echo [信息] Antigravity 与汉化守护进程已在后台启动，关闭 Antigravity 后守护进程会自动退出。
)
endlocal
