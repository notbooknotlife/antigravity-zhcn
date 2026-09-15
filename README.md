# Antigravity 简体中文插件 (v0.4.0)

适用于 Windows 环境下的 Antigravity 安装。

## 本次优化特性

1. **伴随式守护与动态端口发现**：从桌面快捷方式启动 Antigravity 与汉化守护进程，自动捕获 DevTools 端口并注入；关闭 Antigravity 后守护进程自动退出。
2. **后台静默运行**：使用无黑框后台守护，不再弹出命令行黑窗口。
3. **设置界面专项优化（左侧汉化，右侧可切换）**：
   - 设置左侧导航菜单全汉化（常规、应用、外观、模型、自定义、浏览器、项目外配置、对话、快捷键、提供反馈等）；
   - 设置右侧具体参数配置面板默认显示中文；
   - 在侧边栏“快捷键”正上方提供“中 / 英”滑动开关，英文模式只恢复右侧详情原文，不影响左侧导航和主界面。
4. **多窗口/新 Tab 自动注入**：支持多个对话窗口与独立面板同时生效。
5. **支持动态模式匹配与 Web Components (Shadow DOM) 穿透**。

## 安装

在 PowerShell 中运行：

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\install.ps1
```

安装后会创建桌面快捷方式，并立即在后台启动 Antigravity 与汉化服务。汉化守护进程只跟随当前 Antigravity 实例运行，Antigravity 关闭后会自动退出，不会设置开机自启。

## 卸载

```powershell
Set-ExecutionPolicy -Scope Process Bypass
.\uninstall.ps1
```

插件不会修改任何 `app.asar` 核心文件，也不影响用户账号与项目数据。卸载脚本同时会清理旧版本可能创建的开机启动项。
