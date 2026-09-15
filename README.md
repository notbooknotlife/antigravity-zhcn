# Antigravity 简体中文插件 (v0.4.0)

适用于 Windows 环境下、与 `Antigravity.exe` 放在同一目录的便携式汉化插件。

## 工作方式

安装后，插件通过当前用户的启动项监听原始 `Antigravity.exe`：

- 不替换或修改官方 `Antigravity.exe`。
- 不创建桌面快捷方式。
- 不设置系统级服务，不需要管理员权限。
- Antigravity 启动后建立 CDP 连接并注入汉化。
- Antigravity 关闭后释放页面连接。
- 监听器继续等待下一次启动，这是为了支持用户下次直接启动原始 exe。

## 功能

1. 动态发现 DevTools 端口并自动注入。
2. 后台静默运行，不显示命令行窗口。
3. 支持多窗口、新 Tab、动态页面和 Web Components。
4. 设置界面左侧汉化，右侧面板支持中英文切换。

## 文件

```text
install.ps1       安装当前用户启动监听
uninstall.ps1     停止监听、还原启动设置并删除插件文件
launcher.js       监听 Antigravity.exe 并管理注入生命周期
cdp-client.js     CDP HTTP/WebSocket 通信
translate.js      汉化字典和页面注入脚本
start-silent.vbs  静默启动 Node.js 监听器
README.md         使用说明
```

## 安装

将七个文件放到 `Antigravity.exe` 所在目录的第一层，然后在 PowerShell 中运行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

电脑需要已安装 Node.js。安装脚本只写入当前用户的：

```text
HKCU\Software\Microsoft\Windows\CurrentVersion\Run\Antigravity-ZhCN
```

安装完成后，用户仍然直接启动原始 `Antigravity.exe` 即可。插件不会自动启动或重启官方程序。

## 卸载

建议先关闭 Antigravity，然后运行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\uninstall.ps1
```

卸载会停止监听器、移除当前用户启动项、还原安装前已有的同名启动设置，并删除本插件的脚本文件。官方 `Antigravity.exe` 不会被删除。

日志和 PID 位于 `%LOCALAPPDATA%\Antigravity-ZhCN`，不写入软件目录。

## 注意

监听器需要 Antigravity 提供可访问的 CDP 端点。它会读取 `DevToolsActivePort` 或尝试默认端口 `9229`；如果当前软件没有开放 CDP，插件只会等待，不会修改官方程序。
