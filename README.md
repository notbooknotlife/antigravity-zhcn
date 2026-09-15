# Antigravity 简体中文插件 (v0.4.0)

适用于 Windows 环境下、放在 `Antigravity.exe` 所在安装目录内的便携式汉化插件。

## 工作方式

> **安装前务必安装 Node.js。** Node.js 为插件监听器提供运行环境；如果未安装或无法运行，`install.ps1` 会弹窗提示并终止安装。

安装后，插件通过 Windows 任务计划程序的当前用户登录任务监听原始 `Antigravity.exe`：

- 不替换或修改官方 `Antigravity.exe`。
- 不创建桌面快捷方式或启动文件夹快捷方式。
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

将七个文件放到 `Antigravity.exe` 所在目录内，推荐使用独立子目录：

```text
antigravity\
├─ Antigravity.exe
└─ antigravity-zhcn\
   ├─ install.ps1
   ├─ uninstall.ps1
   ├─ launcher.js
   ├─ cdp-client.js
   ├─ translate.js
   ├─ start-silent.vbs
   └─ README.md
```

然后在 PowerShell 中进入 `antigravity-zhcn` 目录并运行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

电脑需要已安装 Node.js。安装脚本只创建当前用户的登录任务：

```text
Antigravity-ZhCN-Listener
```

该任务只在当前用户登录时启动监听器，不需要管理员权限。安装完成后，用户仍然直接启动原始 `Antigravity.exe` 即可。插件不会自动启动或重启官方程序。

## 卸载

建议先关闭 Antigravity，然后运行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\uninstall.ps1
```

卸载会停止监听器、删除登录启动任务，并删除本插件的脚本文件。官方 `Antigravity.exe` 不会被删除。

日志和 PID 位于 `%LOCALAPPDATA%\Antigravity-ZhCN`，不写入软件目录。

## 注意

监听器需要 Antigravity 提供可访问的 CDP 端点。它会读取 `DevToolsActivePort` 或尝试默认端口 `9229`；如果当前软件没有开放 CDP，插件只会等待，不会修改官方程序。
