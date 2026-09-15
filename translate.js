"use strict";

// 1. 全局基础 UI 静态文案映射表（用于主界面、聊天、全局侧边栏和设置左侧导航）
const globalTranslations = {
  Antigravity: "Antigravity",
  "Starting A New Chat": "开始新对话",
  "Loading Antigravity": "正在加载 Antigravity",
  "New Conversation": "新建对话",
  "New Conversation in Project": "在项目中新建对话",
  "Conversation History": "对话历史",
  "Scheduled Tasks": "计划任务",
  "New Scheduled Task": "新建计划任务",
  "Archive Conversation": "归档对话",
  "Outside of Project": "项目外",
  "More Actions": "更多操作",
  Idle: "空闲",
  Updated: "更新于",
  Schedule: "执行计划",
  Hourly: "每小时",
  Daily: "每天",
  Weekly: "每周",
  Custom: "自定义",
  around: "大约",
  Prompt: "提示词",
  "Enter scheduled task name...": "输入计划任务名称…",
  "Enter a prompt for the agent to run...": "输入要让代理执行的提示词…",
  "All scheduled tasks run as Flash.": "所有计划任务均以 Flash 模型运行。",
  "All scheduled tasks run as Flash": "所有计划任务均以 Flash 模型运行",
  "All scheduled tasks will run as Flash.": "所有计划任务均以 Flash 模型运行。",
  "All scheduled tasks will run as Flash": "所有计划任务均以 Flash 模型运行",
  "Add Scheduled Task": "添加计划任务",
  Restart: "重启",
  "Conversation Log": "对话日志",
  "Starting A New Conversation": "正在开始新对话",
  "No more older messages": "没有更早的消息了",
  "Project + Worktree": "项目 / 工作树",
  "Last 7 days": "最近 7 天",
  Scheduled: "计划任务",
  "Group By": "分组方式",
  None: "无",
  "Sort Conversations": "对话排序",
  "Last Updated": "最近更新",
  "Last Prompt": "最近提问",
  "Alphabetical (A-Z)": "按字母排序",
  "Date Added": "添加日期",
  Subtitles: "副标题",
  Worktree: "工作树",
  "No Subtitle": "无副标题",
  Filter: "筛选",
  "Install IDE": "安装 IDE",
  "New Editor Window": "新建编辑器窗口",
  "Close Tab": "关闭标签页",
  "Toggle Auxiliary Pane": "切换辅助面板",
  "Display Options": "显示选项",
  "Zoom In": "放大",
  "Zoom Out": "缩小",
  "Reset Zoom": "重置缩放",
  "Create New Project": "创建新项目",
  "New Project": "新建项目",
  "Quick Start": "快速开始",
  "No Project": "不使用项目",
  "Copy Project Name": "复制项目名称",
  "Project Settings": "项目设置",
  "More options": "更多选项",
  "Pin conversation": "置顶对话",
  "Archive conversation": "归档对话",
  "More actions": "更多操作",
  "Undo changes up to this point": "撤销到此处的更改",
  "Good response": "满意",
  "Bad response": "不满意",
  "Message input": "消息输入框",
  Subagents: "子代理",
  "Files Changed": "文件变更",
  Artifacts: "生成内容",
  Uploads: "上传内容",
  "Background Tasks": "后台任务",
  Terminals: "终端",
  "Open in New Window": "在新窗口中打开",
  "Open Folder": "打开文件夹",
  "Open Workspace": "打开工作区",
  "Open Workspaces": "打开多个工作区",
  "New Window": "新建窗口",
  Window: "窗口",
  Minimize: "最小化",
  Maximize: "最大化",
  File: "文件",
  Edit: "编辑",
  View: "查看",
  Help: "帮助",
  Docs: "文档",
  Settings: "设置",
  Account: "账户",
  Overview: "概览",
  Review: "审查",
  Permissions: "权限",
  General: "常规",
  Application: "应用",
  Appearance: "外观",
  Editor: "编辑器",
  Browser: "浏览器",
  Notifications: "通知",
  "Maximize Pane": "最大化面板",
  "Toggle Sidebar": "切换侧边栏",
  "Add Terminal": "添加终端",
  "Provide Feedback": "提供反馈",
  Customizations: "自定义",
  Models: "模型",
  App: "应用",
  "Project General": "项目常规",
  "Project Folders": "项目文件夹",
  "Project Agent": "项目代理",
  "Not in Project": "非项目配置",
  "Not in project": "非项目配置",
  "In Project": "项目内配置",
  "In project": "项目内配置",
  Shortcuts: "快捷键",
  Labs: "实验功能",
  Developer: "开发者",
  Language: "语言",
  Theme: "主题",
  Light: "浅色",
  Dark: "深色",
  System: "跟随系统",
  Save: "保存",
  Cancel: "取消",
  Close: "关闭",
  Apply: "应用",
  Reset: "重置",
  Remove: "移除",
  Delete: "删除",
  Rename: "重命名",
  "Mark Unread": "标记为未读",
  Pin: "置顶",
  Unpin: "取消置顶",
  Archive: "归档",
  Split: "拆分",
  Search: "搜索",
  Refresh: "刷新",
  Reload: "重新加载",
  Copy: "复制",
  "Conversation Name": "对话名称",
  "Conversation ID": "对话编号",
  "Project Name": "项目名称",
  "Split Right": "向右拆分",
  "Split Down": "向下拆分",
  "Replace With New": "替换为新对话",
  Copied: "已复制",
  Paste: "粘贴",
  Undo: "撤销",
  Redo: "重做",
  Back: "返回",
  Next: "下一步",
  Continue: "继续",
  Done: "完成",
  Submit: "提交",
  Send: "发送",
  Stop: "停止",
  Run: "运行",
  Retry: "重试",
  Dismiss: "忽略",
  "Create Project": "创建项目",
  "Command Palette": "命令面板",
  High: "高",
  "Gemini 3.8 Flash": "Gemini 3.8 Flash",
  Error: "错误",
  Warning: "警告",
  Loading: "加载中",
  "No results": "无结果",
  "No conversations yet": "暂无对话",
  "No agents running": "没有正在运行的代理",
  "Worked for 1s": "运行了 1 秒",
  Quote: "引用",
  "Agent terminated due to error": "代理因错误而终止",
  "You can prompt the model to try again or start a new conversation if the error persists.": "如果问题仍然存在，你可以让模型重试或开始新对话。",
  "See our": "请参阅",
  "troubleshooting guide": "故障排除指南",
  "for more help.": "以获取更多帮助。",
  "Copy debug info": "复制调试信息",
  "Error ID:": "错误 ID：",
  Quit: "退出",
  "Confirm Quit": "确认退出",
  "Are you sure you want to quit?": "确定要退出吗？",
  "There may be agents or background tasks running.": "可能仍有代理或后台任务正在运行。",
  "Check for Updates": "检查更新",
  "Checking for updates…": "正在检查更新…",
  "Update available": "有可用更新",
  "Up to date": "已是最新版本",
  "Install Update": "安装更新",
  "Restart to Update": "重启并更新",
  "Create a new conversation": "创建新对话",
  "Start a new chat": "开始新聊天",
  "Ask anything": "请输入问题",
  "Ask anything, @ to mention, / for actions": "请输入内容，使用 @ 提及，使用 / 执行操作",
  "No more older messages, showing 3 of 3": "没有更早的消息了，当前显示 3 条，共 3 条",
  "Your current account is not eligible for Gemini Code Assist for individuals because it is not currently available in your location.": "你当前的账号不符合 Gemini Code Assist 个人版的使用条件，因为该服务目前尚未在你所在的位置提供。",
  "Send a message": "发送消息",
  "Type a message": "输入消息",
  Workspace: "工作区",
  Project: "项目",
  Projects: "项目",
  Conversation: "对话",
  Conversations: "对话",
  Agent: "代理",
  Agents: "代理",
  Task: "任务",
  Tasks: "任务",
  Terminal: "终端",
  "Browser Preview": "浏览器预览",
  "Open Browser": "打开浏览器",
  Files: "文件",
  "Search files": "搜索文件",
  "Select a folder": "选择文件夹",
  "Choose a folder": "选择文件夹",
  "No folder selected": "未选择文件夹",
  "Add folder": "添加文件夹",
  "Remove folder": "移除文件夹",
  Enable: "启用",
  Disable: "停用",
  Enabled: "已启用",
  Disabled: "已停用",
  On: "开",
  Off: "关",
  Default: "默认",
  Name: "名称",
  Description: "描述",
  Version: "版本",
  Status: "状态",
  Unknown: "未知",
  "Permission required": "需要权限",
  Allow: "允许",
  Deny: "拒绝",
  "Sign in": "登录",
  "Sign out": "退出登录",
  "Learn more": "了解更多"
};

// 2. 动态正则模式替换规则（用于主界面动态变量）
const dynamicPatterns = [
  { regex: "^Updated\\s+(.+)$", flags: "", replace: "更新于 $1" },
  { regex: "^Worked for (\\d+)m(?:\\s*(\\d+)s)?$", flags: "", replace: "运行了 $1 分钟$2 秒" },
  { regex: "^Worked for (\\d+)s$", flags: "", replace: "运行了 $1 秒" },
  { regex: "^Ran (\\d+) commands?$", flags: "", replace: "执行了 $1 个命令" },
  { regex: "^Explored (\\d+) files?, (\\d+) folders?$", flags: "", replace: "探索了 $1 个文件，$2 个文件夹" },
  { regex: "^Explored (\\d+) files?$", flags: "", replace: "探索了 $1 个文件" },
  { regex: "^Thought for (\\d+)m(?:\\s*(\\d+)s)?$", flags: "", replace: "思考了 $1 分钟$2 秒" },
  { regex: "^Thought for (\\d+)s$", flags: "", replace: "思考了 $1 秒" },
  { regex: "^No more older messages, showing (\\d+) of (\\d+)$", flags: "", replace: "没有更早的消息了，当前显示 $1 条，共 $2 条" }
];

// 3. 设置右侧专用详细汉化字典（正向：英 -> 中）
const settingsEnToZh = {
  // General & Execution
  "Configure agent execution, queued message delivery, and permissions.": "配置代理执行、排队消息发送以及权限。",
  "Execution": "执行",
  "Queued Messages": "排队消息",
  "Configure when follow-up messages are sent.": "配置后续消息的发送时机。",
  "Queue": "排队",
  "Send Immediately": "立即发送",
  "Keyboard shortcuts": "键盘快捷键",
  "Agent Settings": "代理设置",
  "Security Preset": "安全预设",
  "Controls the actions the agent can take.": "控制代理可执行的操作。",
  "Outside of folders file access policy": "文件夹外文件访问策略",
  "Configures how the agent tries to access files outside of its working folders.": "配置代理访问工作目录以外文件的行为规则。",
  "Terminal Command Auto Execution": "终端命令自动执行",
  "Controls whether terminal commands require your approval before running.": "控制终端命令运行前是否需要你的审批。",
  "Enable Sandbox Mode (Preview)": "启用沙箱模式（预览版）",
  "Restricts agent tools to a secure, isolated local sandbox.": "将代理工具限制在安全隔离的本地沙箱环境内。",
  "Learn more about Full machine": "了解更多关于完全本机权限",
  "Full Machine": "完全访问",
  "Full machine": "完全访问",
  "Tool Permissions": "工具权限",
  "Modify permissions for file, terminal, and MCP tools.": "修改文件、终端和 MCP 工具的权限。",
  "Open": "打开",
  "Agent Behavior": "代理行为",
  "Artifact Review Policy": "制品审查策略",
  "Whether the agent asks you to review its documents.": "代理在生成或修改文档时是否请求您审查。",
  "Always Ask": "总是询问",
  "Require Review": "需要审核",
  "Proceed in Sandbox": "沙箱执行",
  "Always Proceed": "直接执行",
  "Request Review": "请求审查",
  "Network Permissions": "网络权限",
  "Network Access Rules": "网络访问规则",
  "Read URLs": "读取网址",
  "Block all browser JavaScript execution.": "阻止所有浏览器 JavaScript 执行。",
  "Prompt for approval before running browser scripts.": "运行浏览器脚本前请求审批。",
  "Allow full browser script execution without prompting.": "允许完整执行浏览器脚本，无需提示。",
  "Allow/deny agent read access to specific URLs or domains.": "允许 / 拒绝代理读取指定网址或域名。",
  "Configure allowed and denied URLs for reading.": "配置允许和禁止读取的 URL。",
  "Terminal & Tooling Permissions": "终端与工具权限",
  "Allow/deny specific terminal commands.": "允许 / 拒绝指定终端命令。",
  "Commands Outside Sandbox": "沙箱外命令",
  "Allow/deny agent command execution outside the sandbox.": "允许 / 拒绝代理在沙箱外执行命令。",
  "Configure allowed commands outside the sandbox.": "配置在沙箱外部允许运行的命令。",
  "External tools the agent can call via Model Context Protocol.": "代理可通过模型上下文协议调用的外部工具。",

  // Browser
  "Configure the browser subagent. It requires": "配置浏览器子代理。需要安装",
  "Google Chrome": "Google Chrome",
  "to be installed.": "。",
  "The browser subagent can be invoked by typing /browser in the conversation input box.": "可在对话输入框中输入 /browser 调用浏览器子代理。",
  "Browser Javascript Execution Policy": "浏览器 JavaScript 执行策略",
  "Controls whether the agent can run custom JavaScript to automate complex browser actions.": "控制代理是否可以运行自定义 JavaScript 以自动化复杂的浏览器操作。",
  "Browser Actuation Rules": "浏览器操作规则",
  "Browser Actuation Permissions": "浏览器操作权限",
  "Execute URLs": "执行网址",
  "Allow/deny agent browser actuation access to specific URLs.": "允许 / 拒绝代理对指定网址执行浏览器操作。",
  "Configure allowed and denied URLs for browser actuation.": "配置允许和禁止浏览器操作的 URL。",
  "Browser Settings": "浏览器设置",
  "Browser settings have moved": "浏览器设置已移动",
  "Browser settings have moved to the Browser section of General settings.": "浏览器设置已移动至常规设置的“浏览器”部分。",
  "Go to General settings": "前往常规设置",
  "Jetski Chat": "Jetski 聊天",
  "Configure a chat bot so you can use Jetski directly from Google Chat.": "配置聊天机器人，以便直接从 Google Chat 使用 Jetski。",
  "Bot Name": "机器人名称",
  "Avatar URL": "头像 URL",
  "Setup Jetski Chat": "设置 Jetski 聊天",

  // Appearance
  "Configure the agent's visual theme and display preferences.": "配置代理的视觉主题和显示偏好。",
  "Chat Settings": "聊天设置",
  "Verbose Agent Chat": "详细代理聊天",
  "Display and preserve intermediate thinking steps.": "显示并保留中间思考步骤。",
  "Conversation Width": "对话宽度",
  "Configure the maximum width of the conversation panel.": "配置对话面板的最大宽度。",
  "Narrow": "紧凑",
  "Default": "默认",
  "Wide": "宽屏",
  "Theme": "主题",
  "Light Theme": "浅色主题",
  "Dark Theme": "深色主题",
  "Preset": "预设",
  "Default Light": "默认浅色",
  "Default Dark": "默认深色",
  "Background": "背景色",
  "Foreground": "前景色",
  "Accent": "强调色",

  // Editor
  "Editor Settings": "编辑器设置",
  "Configure editor-specific behaviors and shortcuts.": "配置编辑器特有的行为与快捷键。",
  "Marketplace": "插件市场",
  "Marketplace Item URL": "插件市场项目 URL",
  "Changes the base URL on each extension page. You must restart Antigravity to use the new marketplace after changing this value.": "更改每个扩展页面的基础 URL。更改此值后必须重启 Antigravity 才能生效。",
  "Marketplace Gallery URL": "插件市场画廊 URL",
  "Changes the base URL for marketplace search results. You must restart Antigravity to use the new marketplace after changing this value.": "更改插件市场搜索结果的基础 URL。更改此值后必须重启 Antigravity 才能生效。",
  "Selection Actions": "选择操作",
  "Show Selection Actions": "显示选择操作",
  "Show \"Edit\" and \"Chat\" buttons when selecting text in the editor.": "在编辑器中选择文本时显示“编辑”和“聊天”按钮。",
  "To modify editor settings, open Settings within the editor window.": "要修改编辑器设置，请在编辑器窗口中打开“设置”。",
  "Open Editor Settings": "打开编辑器设置",
  "Tab": "制表符",
  "Configure tab completion, suggestions, and navigation behavior.": "配置 Tab 补全、代码建议与导航行为。",

  // Customizations
  "Configure default behaviors, skills, and MCP servers.": "配置默认行为、技能和 MCP 服务器。",
  "Token Usage": "Token 使用量",
  "The breakdown below shows token usage from customizations like skills, rules, and MCP. If the budget is exceeded, large customizations will be truncated automatically.": "下方明细显示了来自技能、规则和 MCP 等自定义项的 Token 使用量。如果超出配额，较大的自定义项将被自动截断。",
  "There are no customizations enabled.": "当前未启用任何自定义项。",
  "Installed MCP Servers": "已安装的 MCP 服务器",
  "Add MCP": "添加 MCP",
  "Open MCP Config": "打开 MCP 配置",
  "No MCP servers installed": "未安装任何 MCP 服务器",
  "Use Add MCP to browse the store, or add a custom server via the MCP config.": "点击“添加 MCP”浏览商店，或通过 MCP 配置文件添加自定义服务器。",
  "Plugins": "插件",
  "Build With Google Plugins": "Build With Google 插件",
  "Browse and enable plugins from the Build With Google catalog.": "浏览并启用来自 Build With Google 目录的插件。",
  "Customize": "自定义",
  "Global": "全局",

  // App
  "Manage Antigravity app settings.": "管理 Antigravity 应用程序设置。",
  "Prevent Sleep": "阻止休眠",
  "Prevent the computer from sleeping while the app is running.": "在应用程序运行时阻止计算机进入休眠状态。",
  "Keep In Menu Bar": "保留在托盘 / 菜单栏",
  "Keep the app accessible from the menu bar and running in the background when all windows are closed.": "在关闭所有窗口时，使应用保留在托盘并继续在后台运行。",
  "Remote Control": "远程控制",
  "Enable Remote Control": "启用远程控制",
  "Work with local agents from another device.": "从另一台设备连接并使用本地代理。",
  "Notification Settings": "通知设置",
  "To modify notification settings, open your operating system's system preferences.": "要修改通知设置，请打开您操作系统的系统设置。",
  "Open System Preferences": "打开系统偏好设置",
  "App version": "应用版本",
  "Advanced Settings": "高级设置",
  "Automatic Check for Updates": "自动检查更新",
  "Automatically prompt you to restart the app when a new update is available. When disabled, you can check for updates manually from the app menu.": "有新版本时自动提示重启应用。禁用后，可在应用菜单手动检查更新。",

  // Models & Usage
  "Models & Usage": "模型与用量",
  "Manage your model quota and credits.": "管理您的模型配额与额度。",
  "Plan": "方案套餐",
  "Model Credits": "模型额度",
  "Enable AI Credit Overages": "启用 AI 额度超额使用",
  "When toggled on, Antigravity will use your AI credits to fulfill model requests once you're out of model quota. Antigravity will always use your model quota first before using AI credits.": "开启后，当模型配额用尽时，Antigravity 将使用您的 AI 额度来继续满足请求。系统始终优先使用常规模型配额。",
  "Gemini Models": "Gemini 模型",
  "Weekly Limit Remaining": "每周剩余限额",
  "Five Hour Limit Remaining": "5 小时剩余限额",
  "Claude and GPT models": "Claude 与 GPT 模型",

  // Shortcuts
  "Keyboard shortcuts for quick navigation and control.": "用于快速导航和控制的键盘快捷键。",
  "Recommended": "推荐",
  "Open Conversation Picker": "打开对话选择器",
  "Open File Search": "打开文件搜索",
  "Focus Input": "聚焦输入框",
  "Navigation": "导航",
  "File Picker": "文件选择器",
  "Select Previous Conversation": "选择上一个对话",
  "Select Next Conversation": "选择下一个对话",
  "Previous Pane Tab": "上一个面板标签",
  "Next Pane Tab": "下一个面板标签",
  "Open Settings": "打开设置",
  "Toggle Model Selector": "切换模型选择器",
  "Toggle Voice Recording": "切换语音录制",
  "Find in Pane": "在面板中查找",
  "Add to Chat/Quote": "添加到聊天 / 引用",
  "Layout Controls": "布局控制",
  "Toggle Sidebar": "切换侧边栏",
  "Toggle Terminal": "切换终端",

  // Provide Feedback
  "Feedback Type": "反馈类型",
  "Bug Report": "缺陷报告",
  "Feature Request": "功能需求",
  "Auth and Billing": "认证与账单",
  "Remote Control Issue": "远程控制问题",
  "General Feedback": "常规反馈",
  "Please describe the issue in detail. The more actionable your feedback, the quicker our team can address your request. Some helpful information includes:": "请详细描述该问题。反馈越具体，我们的团队就能越快处理您的请求。建议包含的信息：",
  "Steps to reproduce the issue": "复现该问题的步骤",
  "Expected behavior": "预期行为",
  "Actual behavior": "实际行为",
  "Any error messages": "任何错误信息",
  "Any relevant information": "其他相关信息",
  "Steps to Reproduce": "复现步骤",
  "Attach a screenshot (optional)": "附加屏幕截图（可选）",
  "Attach Antigravity server logs": "附加 Antigravity 服务器日志",
  "We recommend attaching logs. Attaching logs will help the Antigravity team act on and prioritize your feedback.": "我们建议附带日志。附带日志将有助于 Antigravity 团队更快定位并处理您的反馈。",

  // Account
  "Manage your plan, credentials, and general preferences.": "管理您的方案、凭据和常规偏好。",
  "Enable Telemetry": "启用遥测数据收集",
  "When toggled on, Antigravity collects usage data to help Google enhance performance and features.": "开启后，Antigravity 将收集使用数据以帮助 Google 提升性能与功能。",
  "Marketing Emails": "营销邮件",
  "Receive product updates, tips, and promotions from Google Antigravity via email.": "通过电子邮件接收来自 Google Antigravity 的产品更新、提示和促销信息。",
  "You can upgrade to a Google AI Ultra plan to receive higher rate limits.": "您可以升级到 Google AI Ultra 方案以获得更高的速率限制。",
  "Upgrade": "升级",
  "Sign Out": "退出登录",
  "By using this app, you agree to its Terms of Service": "使用本应用即表示您同意其服务条款",

  // Common UI words inside Settings
  "Edit": "编辑",
  "Submit": "提交",
  "Description": "描述",
  "Version": "版本",
  "Notifications": "通知",
  "General": "常规",
  "Appearance": "外观",
  "Browser": "浏览器",
  "Conversations": "对话",
  "Shortcuts": "快捷键",
  "Customizations": "自定义",
  "Models": "模型",
  "Application": "应用",
  "Feedback": "反馈",

  //Build With Google
  "Build with Antigravity Plugins": "使用 Antigravity 插件构建",
  "Plugins are packaged collections of skills and MCPs to help the Agent in Antigravity work with Google developer products. You can always change your choices in Settings.": "插件是技能与 MCP 的打包集合，用于帮助 Antigravity 中的代理使用谷歌开发产品。你可随时在设置中修改选择。",
  "Download": "下载",
  "Core tools and knowledge required to develop for Android": "Android 开发所需的核心工具与知识",
  "Keep your coding agent up to date with the latest web best practices.": "让你的代码代理掌握最新的 Web 最佳实践。",
  "Using the Antigravity Python SDK to build AI agents": "使用 Antigravity Python SDK 构建 AI 代理",
  "Curated collection of agent skills for science.": "精选的科学领域代理技能集合。",
  "Prototype, build & run modern apps users love with Firebase's backend, AI, and operational infrastructure.": "借助 Firebase 的后端、AI 与运维基础设施，原型搭建、构建并运行用户喜爱的现代应用。",
  "Reliable automation, in-depth debugging, and performance analysis in Chrome using Chrome DevTools and Puppeteer": "利用 Chrome DevTools 和 Puppeteer 在 Chrome 中实现可靠自动化、深度调试与性能分析",
  "Skills providing tailored instructions for happy path Dart and Flutter development workflows.": "为 Dart 与 Flutter 正常开发流程提供定制指令的技能。",
  "Build and prototype location-aware applications with Google Maps Platform. Integrate interactive maps, search and inspect Places details, calculate optimal routes.": "使用 Google Maps Platform 构建并制作位置感知应用原型。集成交互式地图，搜索与查看地点详情，计算最优路线。",
  "Specialized suite of skills for data engineers and database practitioners on Google Cloud": "面向 Google Cloud 上数据工程师与数据库从业者的专用技能套件",
  "Build applications with the Gemini Interactions API and Live API, including text generation, multi-turn chat, streaming, function calling, managed agents, and real-time audio/video.": "通过 Gemini Interactions API 和 Live API 开发应用，支持文本生成、多轮对话、流式输出、函数调用、托管代理以及实时音频/视频。",
};

// Add MCP Servers
Object.assign(settingsEnToZh, {
  "Back": "返回",
  "Add MCP Servers": "添加 MCP 服务器",
  "Search MCP servers by name": "按名称搜索 MCP 服务器",
  "Refresh MCP servers": "刷新 MCP 服务器",
  "The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the us-central1 region.": "Cloud Audit Manager 远程 MCP 服务器允许你在 us-central1 区域注册项目、生成审计和范围报告，并检查资源注册状态。",
  "The Cloud Audit Manager remote MCP server allows you to enroll projects, generate audit and scope reports, and check resource enrollment statuses in the europe-west1 region.": "Cloud Audit Manager 远程 MCP 服务器允许你在 europe-west1 区域注册项目、生成审计和范围报告，并检查资源注册状态。",
  "Investigate and fix software issues using AI-powered root cause analysis. This MCP server connects to your Antimetal account to search issues, read investigative reports with causal graphs, retrieve observability artifacts (logs, traces, metrics), and apply remediations—directly from your AI tools.": "使用 AI 驱动的根因分析调查并修复软件问题。此 MCP 服务器连接到你的 Antimetal 账户，可搜索问题、读取带有因果图的调查报告、获取可观测性产物（日志、跟踪、指标），并直接从 AI 工具应用修复措施。",
  "Query and act on your marketing, analytics, CRM, e-commerce, and warehouse data across 325+ connectors (Meta Ads, Google Ads, TikTok Ads, GA4, HubSpot, Salesforce, Shopify, Stripe, BigQuery, Snowflake, and more) using natural language. Read live data and write changes back (pause or enable campaigns, set budgets, upload conversions) with no SQL and no custom integrations.": "使用自然语言查询并操作营销、分析、CRM、电商和数据仓库数据，支持 Meta Ads、Google Ads、TikTok Ads、GA4、HubSpot、Salesforce、Shopify、Stripe、BigQuery、Snowflake 等 325 多个连接器。可读取实时数据并写回更改（暂停或启用广告系列、设置预算、上传转化数据），无需 SQL 或自定义集成。",
  "Query your GitLab SDLC as a knowledge graph. Orbit indexes groups, projects, source code, merge requests, pipelines, work items, and security findings into a single graph so agents can answer blast radius, onboarding, and dependency mapping questions by traversing real relationships instead of grepping across separate systems.": "将你的 GitLab SDLC 作为知识图谱进行查询。Orbit 会将群组、项目、源代码、合并请求、流水线、工作项和安全发现编入同一图谱，让代理通过真实关系遍历图谱，回答影响范围、入门和依赖映射问题，无需在分散的系统中逐一搜索。",
  "Enable Antigravity to deploy apps to Google Cloud Run.": "启用 Antigravity，将应用部署到 Google Cloud Run。",
  "Ask questions. Get answers. The MCP is a server your coding agent talks to. Ask a question in English. It runs the query against your PostHog data. The answer lands in your editor. No SQL. No dashboards. No tabs full of charts you forgot you opened. Try things like: - \"How many unique users signed up in the last 7 days, broken down by day?\" - \"Create an A/B test for our pricing page that measures conversion to checkout.\" - \"What are the top 5 errors in my project this week?\"": "提出问题，获取答案。MCP 是代码代理用来交互的服务器。用英文提出问题，它会针对你的 PostHog 数据运行查询，并将答案返回到编辑器。无需 SQL、仪表板或堆满图表的标签页。试试这些问题：- \"过去 7 天每天注册的独立用户数是多少？\" - \"为我们的定价页创建一个衡量结账转化率的 A/B 测试。\" - \"本周项目中最常见的 5 个错误是什么？\"",
  "Search and reference over 600,000 real-world app screens, user flows, and UI patterns from Mobbin directly within your AI tools.": "直接在 AI 工具中搜索和参考 Mobbin 提供的 60 多万个真实应用界面、用户流程和 UI 模式。",
  "Build, edit, deploy, and manage full-stack web apps with Lovable, the AI-powered app builder, using natural language. This MCP server connects your AI client to Lovable so you can create projects and workspaces, send build instructions to the Lovable agent, inspect generated code via diffs and file trees, read and write project knowledge, manage Postgres databases and connectors, and deploy apps directly from your AI tools.": "使用自然语言，通过 AI 应用构建工具 Lovable 构建、编辑、部署和管理全栈 Web 应用。此 MCP 服务器将你的 AI 客户端连接到 Lovable，让你可以创建项目和工作区、向 Lovable 代理发送构建指令、通过差异和文件树检查生成的代码、读写项目知识、管理 Postgres 数据库和连接器，并直接从 AI 工具部署应用。",
  "Let your agents talk to your Splunk data. Ask what broke, why, and what changed -- in plain English -- and agents search your events, surface the saved searches and lookups that matter, and write the SPL for you.": "让代理访问你的 Splunk 数据。用自然语言询问哪里出了问题、原因是什么以及发生了哪些变化，代理会搜索事件、找出相关的已保存搜索和查找结果，并为你编写 SPL。",
  "The GKE remote MCP server provides read write access to your GKE Kubernetes resources. It allows an AI agent to inspect and observe your environment.": "GKE 远程 MCP 服务器提供对 GKE Kubernetes 资源的读写访问，允许 AI 代理检查和观察你的环境。",
  "The Dart and Flutter MCP server exposes Dart (and Flutter) development tool actions to compatible AI-assistant clients.": "Dart 和 Flutter MCP 服务器向兼容的 AI 助手客户端提供 Dart（以及 Flutter）开发工具操作。",
  "The Firebase Model Context Protocol (MCP) Server gives AI-powered development tools the ability to work with your Firebase projects and your app's codebase.": "Firebase 模型上下文协议（MCP）服务器让 AI 开发工具能够处理你的 Firebase 项目和应用代码库。",
  "The Genkit Model Context Protocol (MCP) Server gives AI-powered development tools the ability to build, debug and inspect your Genkit app.": "Genkit 模型上下文协议（MCP）服务器让 AI 开发工具能够构建、调试和检查你的 Genkit 应用。",
  "The gopls Model Context Protocol (MCP) server provides tools for semantic code analysis, live diagnostics, and transformation of your Go codebase.": "gopls 模型上下文协议（MCP）服务器提供语义代码分析、实时诊断和 Go 代码库转换工具。",
  "Interact with your BigQuery data using natural language. This MCP server allows you to securely connect to your datasets to search the datasets, inspect table metadata, execute SQL queries, generate time-series forecasts, and perform contribution analysis directly from your AI tools.": "使用自然语言处理你的 BigQuery 数据。此 MCP 服务器可让你安全连接数据集、搜索数据集、检查表元数据、执行 SQL 查询、生成时间序列预测，并直接从 AI 工具执行贡献度分析。",
  "The AlloyDB for PostgreSQL remote MCP server lets you access and run AlloyDB tools to manage AlloyDB clusters and instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.": "AlloyDB for PostgreSQL 远程 MCP 服务器让你可以访问并运行 AlloyDB 工具，管理 AlloyDB 集群和实例、管理用户、创建和恢复备份、维护用户、导入导出数据，并在支持 AI 的开发环境和 AI 代理平台中运行 SQL 查询。",
  "The Bigtable Admin remote MCP server lets you manage Bigtable resources.": "Bigtable Admin 远程 MCP 服务器让你可以管理 Bigtable 资源。",
  "Manage Google Cloud resources with gcloud and bq CLI tools in a remote sandbox environment": "在远程沙箱环境中使用 gcloud 和 bq 命令行工具管理 Google Cloud 资源。",
  "The Cloud SQL remote MCP server lets you access and run Cloud SQL tools to manage Cloud SQL instances, manage users, create and restore backups, administer users, import and export data, and run SQL queries from your AI-enabled development environments and AI agent platforms.": "Cloud SQL 远程 MCP 服务器让你可以访问并运行 Cloud SQL 工具，管理 Cloud SQL 实例、管理用户、创建和恢复备份、维护用户、导入导出数据，并在支持 AI 的开发环境和 AI 代理平台中运行 SQL 查询。",
  "The Spanner remote MCP server lets you access and run Spanner tools to create, manage, and query Spanner resources from your AI-enabled development environments and AI agent platforms.": "Spanner 远程 MCP 服务器让你可以在支持 AI 的开发环境和 AI 代理平台中访问并运行 Spanner 工具，以创建、管理和查询 Spanner 资源。",
  "The Apigee API hub remote MCP server lets you manage the APIs, versions, specs, operations, deployments, attributes, external APIs, and dependencies registered in your API hub instance - including creating, reading, updating, and deleting them - and search across resources, using natural language.": "Apigee API hub 远程 MCP 服务器让你可以使用自然语言管理 API 中心实例中注册的 API、版本、规范、操作、部署、属性、外部 API 和依赖项，包括创建、读取、更新和删除这些资源，并跨资源进行搜索。",
  "Connect your AI assistants to Looker business intelligence. This MCP server enables data exploration and content management by allowing you to execute natural language queries, run saved Looks, create and manage dashboards, and perform instance health checks within your Looker environment.": "将 AI 助手连接到 Looker 商业智能。此 MCP 服务器支持数据探索和内容管理，让你可以在 Looker 环境中执行自然语言查询、运行已保存的 Look、创建和管理仪表板，并检查实例运行状况。",
  "Connect your AI assistants to the Knowledge Catalog (formerly known as Dataplex). This MCP server enables data discovery and governance by allowing you to search for data assets, retrieve detailed metadata such as schemas and ownership, and explore aspect types across your distributed data.": "将 AI 助手连接到 Knowledge Catalog（原名 Dataplex）。此 MCP 服务器支持数据发现和治理，让你可以搜索数据资产、获取架构和所有者等详细元数据，并探索分布式数据中的方面类型。",
  "The MCP Toolbox for Databases is an open-source MCP server designed to simplify and secure the development of tools for interacting with databases.": "MCP Toolbox for Databases 是一个开源 MCP 服务器，旨在简化并保障数据库交互工具的开发。",
  "Interact with your Oracle Database data using natural language. This MCP server allows you to securely connect to your databases for executing SQL queries, inspecting table schemas, and troubleshooting database performance issues directly from your AI tools.": "使用自然语言处理 Oracle Database 数据。此 MCP 服务器可让你安全连接数据库，并直接从 AI 工具执行 SQL 查询、检查表结构以及排查数据库性能问题。",
  "The Dev Mode MCP Server brings Figma directly into your workflow by providing important design information and context to AI agents generating code from Figma design files.": "Dev Mode MCP 服务器将 Figma 直接带入你的工作流，为根据 Figma 设计文件生成代码的 AI 代理提供重要的设计信息和上下文。",
  "The GitHub MCP Server is a Model Context Protocol (MCP) server that provides seamless integration with GitHub APIs, enabling advanced automation and interaction capabilities for developers and tools.": "GitHub MCP 服务器是一个模型上下文协议（MCP）服务器，可与 GitHub API 无缝集成，为开发者和工具提供高级自动化与交互能力。",
  "The Google Home Developer MCP server allows you to search through Google Home documentation, OpenThread and Matter specifications documentation.": "Google Home Developer MCP 服务器允许你搜索 Google Home 文档，以及 OpenThread 和 Matter 规范文档。",
  "Manage your Neon backend with the Neon MCP Server: Lakebase Postgres, branching, Object Storage, Functions, and the AI Gateway": "使用 Neon MCP 服务器管理 Neon 后端，包括 Lakebase Postgres、分支、对象存储、函数和 AI Gateway。",
  "The Stripe Model Context Protocol server allows you to integrate with Stripe APIs through function calling. This protocol supports various tools to interact with different Stripe services.": "Stripe 模型上下文协议服务器允许你通过函数调用集成 Stripe API，并提供与不同 Stripe 服务交互的多种工具。",
  "Interact with Redis key-value stores": "与 Redis 键值存储交互。",
  "A Model Context Protocol server for interacting with MongoDB Atlas.": "用于与 MongoDB Atlas 交互的模型上下文协议服务器。",
  "Official Notion MCP Server that allows interaction with Notion workspaces, pages, databases, and comments via the Notion API.": "官方 Notion MCP 服务器，可通过 Notion API 与工作区、页面、数据库和评论交互。",
  "Official Linear.app MCP Server for interacting with Linear projects, issues, and workflows.": "官方 Linear.app MCP 服务器，用于与 Linear 项目、问题和工作流交互。",
  "An MCP server implementation that integrates the Perplexity Sonar API to provide real-time, web-wide research capabilities.": "一个集成 Perplexity Sonar API 的 MCP 服务器实现，可提供实时的全网研究能力。",
  "Official PayPal MCP Server that allows integration with PayPal APIs for payment processing, transaction management, and account operations.": "官方 PayPal MCP 服务器，可集成 PayPal API，用于处理支付、管理交易。",
  "The Heroku Platform MCP Server enables seamless interaction with Heroku Platform resources, allowing LLMs to read, manage, and operate applications, add-ons, databases, and more.": "Heroku Platform MCP 服务器支持与 Heroku 平台资源无缝交互，让大语言模型能够读取、管理和操作应用、附加组件、数据库等资源。",
  "The Pinecone MCP Server enables AI tools to search Pinecone documentation, configure indexes, generate code informed by your index configuration, and upsert/search data in your Pinecone indexes.": "Pinecone MCP 服务器让 AI 工具能够搜索 Pinecone 文档、配置索引、根据索引配置生成代码，并在 Pinecone 索引中写入或搜索数据。",
  "Connect your Supabase projects to AI assistants. This MCP server allows managing tables, fetching config, executing SQL queries, managing edge functions, and working with database schema in your Supabase projects.": "将 Supabase 项目连接到 AI 助手。此 MCP 服务器支持管理表、获取配置、执行 SQL 查询、管理边缘函数，以及处理 Supabase 项目中的数据库架构。",
  "The Prisma MCP Server enables AI tools to interact with Prisma for creating and managing Postgres databases easily.": "Prisma MCP 服务器让 AI 工具能够通过 Prisma 轻松创建和管理 Postgres 数据库。",
  "The Locofy MCP Server enables Locofy.ai code to be integrated and extended with your IDE.": "Locofy MCP 服务器支持将 Locofy.ai 代码集成到 IDE 中并进行扩展。",
  "Airweave lets agents search any app.": "Airweave 让代理可以搜索任意应用。",
  "Atlassian MCP Server for interacting with Atlassian products.": "用于与 Atlassian 产品交互的 Atlassian MCP 服务器。",
  "Interact with your Harness account using natural language. This MCP server lets AI agents inspect and manage CI/CD pipelines, executions, services, environments, connectors, feature flags, cloud costs, security findings, chaos experiments, and other Harness platform resources.": "使用自然语言处理你的 Harness 账户。此 MCP 服务器让 AI 代理能够检查和管理 CI/CD 流水线、执行记录、服务、环境、连接器、功能开关、云成本、安全发现、混沌实验及其他 Harness 平台资源。",
  "SonarQube MCP Server enables AI assistants to interact with SonarQube instances for code quality analysis, project management, and quality gate operations.": "SonarQube MCP 服务器让 AI 助手能够与 SonarQube 实例交互，执行代码质量分析、项目管理和质量门操作。",
  "Netlify MCP Server enables AI assistants to interact with Netlify's platform for managing sites, deployments, domains, and other web development workflows.": "Netlify MCP 服务器让 AI 助手能够与 Netlify 平台交互，管理站点、部署、域名和其他 Web 开发流程。",
  "A Model Context Protocol server that provides structured thinking and reasoning capabilities for LLM conversations.": "一个为大语言模型对话提供结构化思考和推理能力的模型上下文协议服务器。",
  "Sonatype MCP server for interacting with our dependency management and security intelligence platform.": "用于与 Sonatype 依赖管理和安全情报平台交互的 MCP 服务器。",
  "The Google Maps Platform Code Assist MCP server provides your favorite AI coding assistant with up-to-date, official Google Maps Platform documentation, code samples, and best practices. By grounding your AI assistant in our official resources, it can generate more accurate, reliable, and useful code.": "Google Maps Platform Code Assist MCP 服务器为你常用的 AI 编程助手提供最新的官方 Google Maps Platform 文档、代码示例和最佳实践。基于这些官方资源，AI 助手可以生成更准确、可靠且实用的代码。",
  "This MCP server provides your LLM with docs and examples to instrument your AI apps with Arize AX. It also provides access to Arize support. Connect it to your IDE or LLM and get curated tracing examples, best practices and Arize support!": "此 MCP 服务器为你的大语言模型提供使用 Arize AX 为 AI 应用添加埋点所需的文档和示例，同时提供 Arize 支持。将其连接到 IDE 或大语言模型，即可获取精选的跟踪示例、最佳实践和 Arize 支持！",
  "The Postman MCP Server connects Postman to AI tools, giving AI agents and assistants the ability to access workspaces, manage collections and environments, evaluate APIs, and automate workflows through natural language interactions.": "Postman MCP 服务器将 Postman 连接到 AI 工具，让 AI 代理和助手能够访问工作区、管理集合和环境、评估 API，并通过自然语言交互实现工作流自动化。",
  "The Stitch MCP server enables AI assistants to interact with Stitch for vibe design: generating UI designs from text and images, and accessing project and screen details. See https://stitch.withgoogle.com/docs for more details.": "Stitch MCP 服务器让 AI 助手能够与 Stitch 交互，进行氛围设计，包括根据文本和图像生成 UI 设计，以及访问项目和界面详情。详情请参阅 https://stitch.withgoogle.com/docs。",
  "The Google Developer Knowledge MCP server gives AI-powered development tools the ability to search Google's official developer documentation and retrieve information for Google's products such as Firebase, Google Cloud, Android, Maps, and more. By connecting your AI application straight to our official library of documentation, it ensures the code and guidance you receive are up-to-date and based on authoritative context.": "Google Developer Knowledge MCP 服务器让 AI 开发工具能够搜索 Google 官方开发者文档，并获取 Firebase、Google Cloud、Android、Maps 等 Google 产品的信息。将 AI 应用直接连接到官方文档库，可确保获得的代码和指导保持最新，并基于权威上下文。",
  "The ClickHouse MCP server enables agents to securely interact with ClickHouse databases. It provides a universal interface to execute SQL, explore data, and view backup & billing details, allowing agentic tooling to leverage ClickHouse's high-performance analytical capabilities.": "ClickHouse MCP 服务器让代理能够安全地与 ClickHouse 数据库交互。它提供执行 SQL、探索数据以及查看备份和账单详情的通用接口，让代理工具充分利用 ClickHouse 的高性能分析能力。",
  "Perform a range of infrastructure management tasks, including: manage virtual machine (VM) instances, manage instance group managers and instance templates, manage disks and snapshots, retrieve information about reservations and commitments.": "执行多种基础设施管理任务，包括管理虚拟机（VM）实例、实例组管理器和实例模板，管理磁盘和快照，以及获取预留和承诺使用量信息。",
  "Access enterprise mobility data using natural language queries about device fleets, automated auditing of policy compliance, and the integration of device management data into broader automated workflows.": "通过自然语言查询设备群组、自动审计策略合规性，并将设备管理数据接入更广泛的自动化工作流，以访问企业移动设备数据。",
  "Search your Google Cloud projects using natural language.": "使用自然语言搜索你的 Google Cloud 项目。",
  "Perform searches on ingested data in Google-owned data stores.": "在已导入 Google 数据存储的数据中执行搜索。",
  "Interact with documents stored in a Firestore database using natural language.": "使用自然语言处理存储在 Firestore 数据库中的文档。",
  "Access resources in the Cloud Logging platform using natural language.": "使用自然语言访问 Cloud Logging 平台中的资源。",
  "Manage clusters for Managed Service for Apache Kafka and Kafka Connect using natural language.": "使用自然语言管理 Managed Service for Apache Kafka 和 Kafka Connect 集群。",
  "Access resources in the Cloud Monitoring platform using natural language.": "使用自然语言访问 Cloud Monitoring 平台中的资源。",
  "Manage Pub/Sub resources and publish messages. Create, list, get, update, and delete Pub/Sub topics, subscriptions, and snapshots, as well as publish messages to topics.": "管理 Pub/Sub 资源并发布消息。创建、列出、获取、更新和删除 Pub/Sub 主题、订阅和快照，也可以向主题发布消息。",
  "The Cloud Quotas MCP server allows you to view quota allocations, request quota increases, and manage Quota Adjuster configurations.": "Cloud Quotas MCP 服务器允许你查看配额分配、申请提高配额，并管理 Quota Adjuster 配置。",
  "Access Personalized Service Health events impacting Google Cloud products and services relevant to your projects using natural language.": "使用自然语言访问影响项目相关 Google Cloud 产品和服务的 Personalized Service Health 事件。",
  "The Unified Maintenance MCP server allows you to discover and query planned disruptive maintenance events across Google Cloud resources.": "Unified Maintenance MCP 服务器允许你发现并查询 Google Cloud 资源中计划进行的中断性维护事件。",
  "Enable Antigravity to control and inspect a live Chrome browser, with access to the full power of Chrome DevTools for reliable automation, in-depth debugging, and performance analysis.": "启用 Antigravity 控制和检查实时 Chrome 浏览器，使用完整的 Chrome DevTools 能力实现可靠自动化、深度调试和性能分析。"
});

// 右侧设置面板中的通用控件词。与全局字典分开，保证英文模式只影响右侧详情。
Object.assign(settingsEnToZh, {
  "Advanced": "高级",
  "Advanced Settings": "高级设置",
  "Appearance Settings": "外观设置",
  "Conversation Settings": "对话设置",
  "Model Settings": "模型设置",
  "Project Settings": "项目设置",
  "Manage project folders, agent settings, and permissions.": "管理项目文件夹、代理设置和权限。",
  "All scheduled tasks run as Flash.": "所有计划任务均以 Flash 模型运行。",
  "All scheduled tasks run as Flash": "所有计划任务均以 Flash 模型运行",
  "All scheduled tasks will run as Flash.": "所有计划任务均以 Flash 模型运行。",
  "All scheduled tasks will run as Flash": "所有计划任务均以 Flash 模型运行",
  "Folders": "文件夹",
  "Add Folder": "添加文件夹",
  "Danger Zone": "危险区域",
  "Delete Project": "删除项目",
  "Permanently delete": "永久删除",
  "Account Settings": "账户设置",
  "Chat": "聊天",
  "Input": "输入",
  "Voice": "语音",
  "Audio": "音频",
  "Privacy": "隐私",
  "Security": "安全",
  "Permissions": "权限",
  "Enabled": "已启用",
  "Disabled": "已停用",
  "Enable": "启用",
  "Disable": "停用",
  "On": "开",
  "Off": "关",
  "Yes": "是",
  "No": "否",
  "None": "无",
  "Automatic": "自动",
  "Never": "从不",
  "Always": "始终",
  "Manage": "管理",
  "Configure": "配置",
  "Close": "关闭",
  "Save Changes": "保存更改",
  "Reset to Default": "恢复默认值",
  "Select": "选择",
  "Custom": "自定义",
  "Name": "名称",
  "Value": "值",
  "Path": "路径",
  "URL": "URL",
  "No options": "无可用选项",
  "Not configured": "未配置",
  "Coming soon": "即将推出",
  "Learn more about": "了解更多关于",
  "Optional": "可选",
  "Required": "必填",
  "Your Plan": "当前方案",
  "Your Plan:": "当前方案：",
  "Email": "电子邮件",
  "Skills": "技能",
  "Global": "全局",
  "Send feedback": "发送反馈",
  "Agent settings and permissions for conversations outside of projects.": "项目外对话的代理设置和权限。",
  "Inherit General": "沿用常规",
  "Inherits your General settings when working in this project.": "在此项目中工作时沿用常规设置。",
  "Requires manual review for all terminal commands and file accesses outside of the working folders.": "工作文件夹以外的所有终端命令和文件访问都需要手动审核。",
  "All terminal commands require review. The agent can read or write to any file in the machine.": "所有终端命令都需要审核。代理可以读取或写入本机中的任意文件。",
  "Turbo mode": "极速模式",
  "Disables all safety barriers for maximal iteration velocity.": "关闭所有安全限制，以实现最快迭代速度。",
  "Manually customize individual settings.": "手动自定义各项设置。",
  "Local Permissions": "本地权限",
  "Also includes global settings when working in this project.": "在此项目中工作时还包括全局设置。",
  "Modified in": "修改于",
  "Outside of Project": "项目外",
  "File Access Rules": "文件访问规则",
  "File Permissions": "文件权限",
  "File Reads": "文件读取",
  "Allow/deny agent read access to specific files or directories.": "允许 / 拒绝代理读取指定文件或目录。",
  "File Writes": "文件写入",
  "Allow/deny agent write access to specific files or directories.": "允许 / 拒绝代理写入指定文件或目录。",
  "Add": "添加",
  "allow": "允许",
  "ask": "询问",
  "deny": "拒绝", 
  "Configure allowed and denied paths for file reads and writes.": "配置文件读写允许和禁止的路径。",
  "Terminal Commands": "终端命令",
  "Configure allowed terminal commands.": "配置允许执行的终端命令。",
  "MCP Tools": "MCP 工具",
  "Configure external tools via Model Context Protocol.": "通过模型上下文协议配置外部工具。",
  "Your Plan: Google AI Pro": "当前方案：Google AI Pro",
  "By using this app, you agree to its": "使用本应用即表示您同意其",
  "Terms of Service": "服务条款",
  "By using this app, you agree to its Terms of Service": "使用本应用即表示您同意其服务条款",
  "Send feedback as": "以以下身份发送反馈",
  "Comprehensive guide and reference for the Antigravity Customization System. Use to explain how customizations work, their loading priority, discovery mechanisms, and to guide the creation of skills, rules, plugins, hooks, and MCP servers.": "Antigravity 自定义系统的综合指南与参考。用于说明自定义项的工作方式、加载优先级和发现机制，并指导创建技能、规则、插件、钩子和 MCP 服务器。",
  "Provides a comprehensive guide, quick reference, and sitemap for Google Antigravity (AGY), including the Antigravity CLI (agy), Antigravity 2.0, Antigravity IDE, Python SDK, slash commands, keybindings, and customizations (skills, rules, MCP, sidecars). Activate this skill when the user asks questions about how to use, configure, or customize Antigravity, AGY, the agy CLI, the Antigravity IDE, or Antigravity 2.0.": "提供 Google Antigravity (AGY) 的综合指南、快速参考和站点地图，内容包括 Antigravity CLI (agy)、Antigravity 2.0、Antigravity IDE、Python SDK、斜杠命令、按键绑定和自定义项（技能、规则、MCP、sidecar）。当用户询问如何使用、配置或自定义 Antigravity、AGY、agy CLI、Antigravity IDE 或 Antigravity 2.0 时启用此技能。",
  "How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich content beyond plain text and markdown.": "说明如何在聊天中以内嵌方式渲染丰富的交互式 HTML 小组件，或将其作为独立制品呈现。当您需要向用户展示图表、数据可视化、交互控件、教学演示或纯文本和 Markdown 之外的丰富内容时，启用此技能。",
  "How to render rich interactive HTML widgets inline in the chat or as standalone artifacts. Use this skill when you want to show the user diagrams, data visualizations, interactive controls, educational walkthroughs, or any rich visual content beyond plain text and markdown.": "说明如何在聊天中以内嵌方式渲染丰富的交互式 HTML 小组件，或将其作为独立制品呈现。当您需要向用户展示图表、数据可视化、交互控件、教学演示或纯文本和 Markdown 之外的丰富视觉内容时，启用此技能。",
  "Automatically migrate legacy workflows to modern skills across global and workspace configurations. Scans for existing workflows, creates target SKILL.md files, and safely archives old workflow files.": "在全局和工作区配置之间，将旧版工作流自动迁移到现代技能。扫描现有工作流，创建目标 SKILL.md 文件，并安全归档旧工作流文件。",
  "Guidelines for interacting with GitHub and request permissions from the user when commands fail due to restrictions in the agent environment.": "与 GitHub 交互的指南；当命令因代理环境限制而失败时，向用户请求所需权限。"
});

const settingsDynamicPatterns = [
  { regex: "^Your Plan:\\s*(.+)$", flags: "", replace: "当前方案：$1" },
  { regex: "^You have used some of your weekly limit, it will fully refresh in (\\d+) days?, (\\d+) hours?\\.$", flags: "", replace: "您已使用部分每周限额，将在 $1 天 $2 小时后完全刷新。" },
  { regex: "^You have used some of your weekly limit, it will fully refresh in (\\d+) days?, (\\d+) hours?, (\\d+) minutes?\\.$", flags: "", replace: "您已使用部分每周限额，将在 $1 天 $2 小时 $3 分钟后完全刷新。" },
  { regex: "^You have used some of your weekly limit, it will fully refresh in (\\d+) hours?\\.$", flags: "", replace: "您已使用部分每周限额，将在 $1 小时后完全刷新。" },
  { regex: "^You have used some of your weekly limit, it will fully refresh in (\\d+) hours?, (\\d+) minutes?\\.$", flags: "", replace: "您已使用部分每周限额，将在 $1 小时 $2 分钟后完全刷新。" },
  { regex: "^You have used some of your 5-hour limit, it will fully refresh in (\\d+) days?, (\\d+) hours?\\.$", flags: "", replace: "您已使用部分 5 小时限额，将在 $1 天 $2 小时后完全刷新。" },
  { regex: "^You have used some of your 5-hour limit, it will fully refresh in (\\d+) days?, (\\d+) hours?, (\\d+) minutes?\\.$", flags: "", replace: "您已使用部分 5 小时限额，将在 $1 天 $2 小时 $3 分钟后完全刷新。" },
  { regex: "^You have used some of your 5-hour limit, it will fully refresh in (\\d+) hours?\\.$", flags: "", replace: "您已使用部分 5 小时限额，将在 $1 小时后完全刷新。" },
  { regex: "^You have used some of your 5-hour limit, it will fully refresh in (\\d+) hours?, (\\d+) minutes?\\.$", flags: "", replace: "您已使用部分 5 小时限额，将在 $1 小时 $2 分钟后完全刷新。" },
  { regex: "^Permanently delete (.+)\\.$", flags: "", replace: "永久删除 $1。" },
  { regex: "^Send feedback as (.+)$", flags: "", replace: "以 $1 的身份发送反馈" }
];

// 4. 设置右侧专用反向字典（反向：中 -> 英，用于英文模式绝对纯净还原）
const settingsZhToEn = {};
for (const [en, zh] of Object.entries(settingsEnToZh)) {
  settingsZhToEn[zh] = en;
}
// 补充一些之前可能被误翻译残存的词条反向
settingsZhToEn["常规"] = "General";
settingsZhToEn["应用"] = "Application";
settingsZhToEn["外观"] = "Appearance";
settingsZhToEn["模型"] = "Models";
settingsZhToEn["自定义"] = "Customizations";
settingsZhToEn["浏览器"] = "Browser";
settingsZhToEn["对话"] = "Conversations";
settingsZhToEn["快捷键"] = "Shortcuts";
settingsZhToEn["提供反馈"] = "Provide Feedback";
settingsZhToEn["非项目配置"] = "Not in Project";
settingsZhToEn["项目外配置"] = "Not in Project";
settingsZhToEn["项目内配置"] = "In Project";
settingsZhToEn["设置"] = "Settings";
settingsZhToEn["默认"] = "Default";
settingsZhToEn["主题"] = "Theme";
settingsZhToEn["编辑"] = "Edit";
settingsZhToEn["提交"] = "Submit";
settingsZhToEn["通知"] = "Notifications";
settingsZhToEn["版本"] = "Version";
settingsZhToEn["描述"] = "Description";
settingsZhToEn["浅色"] = "Light";
settingsZhToEn["深色"] = "Dark";
settingsZhToEn["跟随系统"] = "System";

function buildTranslationScript() {
  return `(() => {
    const previous = window.__ANTIGRAVITY_ZHCN__;
    const hasPreviousInjector = Boolean(previous);
    if (previous && typeof previous.destroy === "function") previous.destroy();

    const globalMap = ${JSON.stringify(globalTranslations)};
    const globalExact = new Map(Object.entries(globalMap));
    const dynamicRules = ${JSON.stringify(dynamicPatterns)}.map(p => ({
      regex: new RegExp(p.regex, p.flags),
      replace: p.replace,
    }));
    const settingsDynamicRules = ${JSON.stringify(settingsDynamicPatterns)}.map(p => ({
      regex: new RegExp(p.regex, p.flags),
      replace: p.replace,
    }));
    const globalZhToEn = {};
    for (const [en, zh] of Object.entries(globalMap)) {
      if (!globalZhToEn[zh]) globalZhToEn[zh] = en;
    }

    const settingsEnToZh = __SETTINGS_EN_TO_ZH__;
    const settingsZhToEn = __SETTINGS_ZH_TO_EN__;

    const skipTags = new Set(["SCRIPT", "STYLE", "PRE", "CODE", "TEXTAREA", "INPUT", "OPTION"]);
    const ignoredClasses = ["monaco", "cm-editor", "code-editor", "terminal"];
    const globalTextCache = new WeakMap();
    const globalAttrCache = new WeakMap();
    const globalCompositeCache = new WeakMap();
    const globalTrackedTextNodes = new Set();
    const globalTrackedAttrElements = new Set();
    const globalTrackedCompositeElements = new Set();
    const initialDocumentTitle = document.title;
    const documentTitleState = {
      original: globalZhToEn[initialDocumentTitle] || initialDocumentTitle,
      lastApplied: initialDocumentTitle,
    };
    const settingsTextCache = new WeakMap();
    let observer = null;
    let updateTimer = null;
    let isDestroyed = false;

    // 用户语言偏好持久化（默认中文模式 "zh"，可选英文模式 "en"）
    const getSettingsLangMode = () => {
      try {
        const stored = localStorage.getItem("antigravity_zhcn_settings_mode");
        if (stored === "en" || stored === "zh") return stored;
      } catch (_) {}
      return "zh"; // 默认中文模式
    };

    const setSettingsLangMode = (mode) => {
      try {
        localStorage.setItem("antigravity_zhcn_settings_mode", mode);
      } catch (_) {}
    };

    const getSettingsRightPane = () => {
      const container = document.querySelector(".settings-modal-container");
      if (!container) return null;
      const sidebar = container.querySelector(".bg-sidebar");
      if (!sidebar) return null;

      // Antigravity 的左侧导航包了两层容器，不能假设 .bg-sidebar 是左右分栏的直接子节点。
      // 从导航向上寻找第一个同时包含“左侧区域”和“右侧区域”的 flex 行。
      let current = sidebar;
      while (current && current !== container) {
        const parent = current.parentElement;
        if (!parent) break;
        const children = [...parent.children];
        const leftRegion = children.find((child) => child === current || child.contains(sidebar));
        if (children.length >= 2 && leftRegion) {
          const rightRegion = children.find((child) => child !== leftRegion && !child.contains(sidebar));
          if (rightRegion) return rightRegion;
        }
        current = parent;
      }
      return null;
    };

    // 判断元素是否处于设置模态框的右侧内容详情面板
    const isSettingsRightPane = (node) => {
      const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!element) return false;
      const rightPane = getSettingsRightPane();
      return Boolean(rightPane && (element === rightPane || rightPane.contains(element)));
    };

    const isSettingsOverlay = (node) => {
      const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!element || !document.querySelector(".settings-modal-container")) return false;
      return Boolean(element.closest('[role="listbox"], [role="menu"]'));
    };

    const isGlobalSkipped = (node) => {
      const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      if (!element) return true;
      if (skipTags.has(element.tagName)) return true;
      if (element.isContentEditable) return true;

      // 严格边界隔离：右侧详情面板完全不参与全局翻译逻辑！
      if (isSettingsRightPane(node) || isSettingsOverlay(node)) return true;

      const className = typeof element.className === "string" ? element.className : "";
      return ignoredClasses.some((val) => className.includes(val));
    };

    // 全局主界面文本翻译函数
    const globalTranslate = (value) => {
      if (typeof value !== "string") return null;
      const match = value.match(/^(\\s*)([\\s\\S]*?)(\\s*)$/);
      if (!match) return null;
      const leading = match[1];
      const core = match[2].trim();
      const trailing = match[3];
      if (!core) return null;

      if (globalExact.has(core)) return leading + globalExact.get(core) + trailing;
      const normalized = core.replace(/\\s+/g, " ");
      if (globalExact.has(normalized)) return leading + globalExact.get(normalized) + trailing;

      for (let i = 0; i < dynamicRules.length; i += 1) {
        const p = dynamicRules[i];
        if (p.regex.test(normalized)) {
          return leading + normalized.replace(p.regex, p.replace) + trailing;
        }
      }
      return null;
    };

    const getGlobalOriginalText = (node, raw) => {
      const cached = globalTextCache.get(node);
      if (!cached) {
        const normalized = raw.replace(/\\s+/g, " ").trim();
        const compositeOriginal = node.parentElement?.getAttribute("data-zhcn-global-original");
        const recovered = compositeOriginal || (hasPreviousInjector ? globalZhToEn[normalized] : null) || raw;
        const entry = { original: recovered, lastApplied: raw };
        globalTextCache.set(node, entry);
        globalTrackedTextNodes.add(node);
        return recovered;
      }
      if (raw === cached.lastApplied) return cached.original;
      cached.original = raw;
      cached.lastApplied = raw;
      return raw;
    };

    const setGlobalText = (node, value, original) => {
      const cached = globalTextCache.get(node) || { original, lastApplied: original };
      cached.original = original;
      cached.lastApplied = value;
      globalTextCache.set(node, cached);
      globalTrackedTextNodes.add(node);
      if (node.nodeValue !== value) node.nodeValue = value;
    };

    const getGlobalAttrEntry = (element, attr, value) => {
      let entries = globalAttrCache.get(element);
      if (!entries) {
        entries = {};
        globalAttrCache.set(element, entries);
      }
      let entry = entries[attr];
      if (!entry) {
        const normalized = value.trim().replace(/\\s+/g, " ");
        entry = {
          original: (hasPreviousInjector ? globalZhToEn[normalized] : null) || value,
          lastApplied: value,
        };
        entries[attr] = entry;
      } else if (value !== entry.lastApplied) {
        entry.original = value;
        entry.lastApplied = value;
      }
      globalTrackedAttrElements.add(element);
      return entry;
    };

    const applyGlobalTextNode = (node, mode) => {
      if (!node || isGlobalSkipped(node)) return;
      const raw = node.nodeValue || "";
      const original = getGlobalOriginalText(node, raw);
      const translated = globalTranslate(original);
      const next = mode === "zh" && translated ? translated : original;
      setGlobalText(node, next, original);
    };

    // 计划任务说明有时会被界面拆成多个文本节点，按完整元素文本补一次翻译。
    const applyCompositeGlobalText = (root, mode) => {
      if (!root?.querySelectorAll) return;
      const candidates = root.querySelectorAll("p, span, div, h1, h2, h3, h4");
      for (const element of candidates) {
        if (isGlobalSkipped(element) || skipTags.has(element.tagName) || element.isContentEditable) continue;
        const raw = element.textContent || "";
        const normalized = raw.replace(/\\s+/g, " ").trim();
        const cached = globalCompositeCache.get(element);
        const original = cached && raw === cached.lastApplied
          ? cached.original
          : ((hasPreviousInjector ? globalZhToEn[normalized] : null) || normalized);
        if (!/^All scheduled tasks (?:will )?run as Flash\\.?$/.test(original)) continue;

        const translated = globalTranslate(original);
        const next = mode === "zh" && translated ? translated : original;
        if (element.textContent !== next) element.textContent = next;
        globalCompositeCache.set(element, { original, lastApplied: next });
        globalTrackedCompositeElements.add(element);
        element.setAttribute("data-zhcn-global-original", original);
        element.setAttribute("data-zhcn-global-last", next);
      }
    };

    // 全局常规 DOM 遍历
    const globalVisit = (root, mode) => {
      if (isDestroyed) return;
      if (!root || isGlobalSkipped(root)) return;

      if (root.nodeType === Node.TEXT_NODE) {
        applyGlobalTextNode(root, mode);
        return;
      }

      applyCompositeGlobalText(root, mode);

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let current;
      while (current = walker.nextNode()) nodes.push(current);
      for (const node of nodes) applyGlobalTextNode(node, mode);

      const elements = root.querySelectorAll ? root.querySelectorAll("[aria-label], [title], [placeholder]") : [];
      for (const element of elements) {
        if (isGlobalSkipped(element)) continue;
        for (const attr of ["aria-label", "title", "placeholder"]) {
          const value = element.getAttribute(attr);
          if (value === null) continue;
          const entry = getGlobalAttrEntry(element, attr, value);
          const translated = globalTranslate(entry.original);
          const next = mode === "zh" && translated ? translated : entry.original;
          entry.lastApplied = next;
          if (value !== next) element.setAttribute(attr, next);
        }
      }

      // 穿透 Shadow DOM
      const allDesc = root.querySelectorAll ? root.querySelectorAll("*") : [];
      for (let i = 0; i < allDesc.length; i += 1) {
        const d = allDesc[i];
        if (d.shadowRoot && !isGlobalSkipped(d)) globalVisit(d.shadowRoot, mode);
      }
    };

    const restoreGlobalLanguage = () => {
      for (const element of globalTrackedCompositeElements) {
        const cached = globalCompositeCache.get(element);
        if (!cached) continue;
        element.textContent = cached.original;
        cached.lastApplied = cached.original;
        element.removeAttribute("data-zhcn-global-original");
        element.removeAttribute("data-zhcn-global-last");
      }
      for (const node of globalTrackedTextNodes) {
        const cached = globalTextCache.get(node);
        if (cached && node.nodeValue === cached.lastApplied) node.nodeValue = cached.original;
      }
      for (const element of globalTrackedAttrElements) {
        const entries = globalAttrCache.get(element);
        if (!entries) continue;
        for (const attr of ["aria-label", "title", "placeholder"]) {
          const entry = entries[attr];
          if (entry && element.getAttribute(attr) === entry.lastApplied) {
            element.setAttribute(attr, entry.original);
          }
        }
      }
      if (document.title !== documentTitleState.original) document.title = documentTitleState.original;
      documentTitleState.lastApplied = documentTitleState.original;
    };

    const applyDocumentTitle = (mode) => {
      const current = document.title;
      if (current !== documentTitleState.lastApplied) documentTitleState.original = current;
      const translated = globalTranslate(documentTitleState.original);
      const next = mode === "zh" && translated ? translated : documentTitleState.original;
      if (current !== next) document.title = next;
      documentTitleState.lastApplied = next;
    };

    // ----------------------------------------------------
    // 设置右侧面板：严格边界约束的中/英处理引擎
    // ----------------------------------------------------
    const normalizeSettingsText = (value) => value.replace(/\\s+/g, " ").trim();
    const translateSettingsText = (value) => {
      const normalized = normalizeSettingsText(value);
      if (!normalized) return null;
      if (settingsEnToZh[normalized]) return settingsEnToZh[normalized];
      if (globalExact.has(normalized)) return globalExact.get(normalized);
      for (const rule of settingsDynamicRules) {
        if (rule.regex.test(normalized)) return normalized.replace(rule.regex, rule.replace);
      }
      for (const rule of dynamicRules) {
        if (rule.regex.test(normalized)) return normalized.replace(rule.regex, rule.replace);
      }
      return null;
    };

    // 部分详情说明会被框架拆成多个文本节点，只对完整命中的叶子元素合并处理。
    const applyCompositeSettingsText = (root, mode) => {
      if (!root?.querySelectorAll) return;
      const candidates = root.querySelectorAll("p, span, div, h1, h2, h3, h4");
      for (const element of candidates) {
        if (element.children.length > 0 || skipTags.has(element.tagName) || element.isContentEditable) continue;

        const raw = element.textContent || "";
        const originalKey = "data-zhcn-composite-original";
        const lastKey = "data-zhcn-composite-last";
        let original = element.getAttribute(originalKey);
        const lastApplied = element.getAttribute(lastKey);
        if (original === null || (raw !== original && raw !== lastApplied)) original = raw;

        const translated = translateSettingsText(original);
        if (!translated) continue;

        const next = mode === "zh" ? translated : original;
        element.setAttribute(originalKey, original);
        element.setAttribute(lastKey, next);
        if (element.textContent !== next) element.textContent = next;
      }
    };

    // 处理设置说明中的内嵌链接，保留链接结构并调整中文语序。
    const applyStructuredSettingsText = (root, mode) => {
      if (!root?.querySelectorAll) return;

      const localPermissionHints = root.querySelectorAll("div.text-xs.text-muted-foreground.leading-relaxed");
      for (const element of localPermissionHints) {
        const line = element.firstElementChild;
        if (!line || line.tagName !== "SPAN") continue;

        const directNodes = [...line.childNodes];
        const textNodes = directNodes.filter((node) => node.nodeType === Node.TEXT_NODE);
        const globalLink = directNodes.find((node) =>
          node.nodeType === Node.ELEMENT_NODE &&
          node.tagName === "SPAN" &&
          node !== line &&
          !node.querySelector("a")
        );
        const learnMoreLink = directNodes.find((node) =>
          node.nodeType === Node.ELEMENT_NODE && node.tagName === "A"
        );
        if (!globalLink || !learnMoreLink || textNodes.length < 6) continue;

        const normalized = normalizeSettingsText(line.textContent || "").replace("了解更多", "Learn more");
        const originalKey = "data-zhcn-structured-original";
        const originalValue = element.getAttribute(originalKey);
        if (normalized !== "Also includes global settings when working in this project. Learn more." && !originalValue) continue;

        let original;
        try {
          original = originalValue ? JSON.parse(originalValue) : null;
        } catch (_) {
          original = null;
        }
        if (!original) {
          original = {
            text: textNodes.map((node) => node.nodeValue),
            global: globalLink.textContent,
            learnMore: learnMoreLink.textContent,
          };
        }

        const nextText = mode === "zh"
          ? ["在此项目中工作时还包括", "", "", "", "。", "。"]
          : original.text;
        textNodes.forEach((node, index) => {
          node.nodeValue = nextText[index] ?? node.nodeValue;
        });
        globalLink.textContent = mode === "zh" ? "全局设置" : original.global;
        learnMoreLink.textContent = mode === "zh" ? "了解更多" : original.learnMore;
        element.setAttribute(originalKey, JSON.stringify(original));
      }

      const modifiedHints = root.querySelectorAll('span.inline-block');
      for (const element of modifiedHints) {
        const scopeButton = element.querySelector('[data-testid="artifact-review-overrides-trigger"]');
        const prefixNode = [...element.childNodes].find((node) => node.nodeType === Node.TEXT_NODE);
        if (!scopeButton || !prefixNode) continue;

        const originalKey = "data-zhcn-modified-original";
        const originalValue = element.getAttribute(originalKey);
        const currentSource = String(prefixNode.nodeValue || "") + String(scopeButton.textContent || "");
        if (currentSource !== "Modified in Outside of Project" && !originalValue) continue;

        let original;
        try {
          original = originalValue ? JSON.parse(originalValue) : null;
        } catch (_) {
          original = null;
        }
        if (!original) {
          original = {
            prefix: prefixNode.nodeValue,
            scope: scopeButton.textContent,
          };
        }

        prefixNode.nodeValue = mode === "zh" ? "修改于" : original.prefix;
        scopeButton.textContent = mode === "zh" ? "项目外" : original.scope;
        element.setAttribute(originalKey, JSON.stringify(original));
      }
    };

    const getOriginalText = (node, raw) => {
      const cached = settingsTextCache.get(node);
      if (!cached) {
        const normalized = normalizeSettingsText(raw);
        const recovered = /[\\u4e00-\\u9fa5]/.test(normalized) && (settingsZhToEn[normalized] || globalZhToEn[normalized])
          ? (settingsZhToEn[normalized] || globalZhToEn[normalized])
          : raw;
        settingsTextCache.set(node, { original: recovered, lastApplied: raw });
        return recovered;
      }
      if (raw === cached.lastApplied) return cached.original;
      // 框架复用文本节点时，值已变成新的英文源文案，更新缓存避免串译。
      cached.original = raw;
      cached.lastApplied = raw;
      return raw;
    };

    const setSettingsText = (node, value, original) => {
      const cached = settingsTextCache.get(node) || { original, lastApplied: original };
      cached.original = original;
      cached.lastApplied = value;
      settingsTextCache.set(node, cached);
      if (node.nodeValue !== value) node.nodeValue = value;
    };

    const applySettingsTextRoot = (root, mode) => {
      if (!root) return;

      applyStructuredSettingsText(root, mode);
      applyCompositeSettingsText(root, mode);

      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      const nodes = [];
      let node;
      while (node = walker.nextNode()) nodes.push(node);

      for (const textNode of nodes) {
        const element = textNode.parentElement;
        if (!element || skipTags.has(element.tagName) || element.isContentEditable) continue;
        const raw = textNode.nodeValue || "";
        const match = raw.match(/^(\\s*)([\\s\\S]*?)(\\s*)$/);
        if (!match || !match[2].trim()) continue;

        const original = getOriginalText(textNode, raw);
        const originalMatch = original.match(/^(\\s*)([\\s\\S]*?)(\\s*)$/);
        const originalCore = originalMatch ? originalMatch[2].trim() : original.trim();
        const translated = translateSettingsText(originalCore);
        const next = mode === "zh" && translated
          ? (originalMatch ? originalMatch[1] + translated + originalMatch[3] : translated)
          : original;
        setSettingsText(textNode, next, original);
      }

      const attrElements = root.querySelectorAll("[placeholder], [title], [aria-label]");
      for (const element of attrElements) {
        for (const attr of ["placeholder", "title", "aria-label"]) {
          const value = element.getAttribute(attr);
          if (value === null) continue;
          const originalKey = "data-zhcn-original-" + attr;
          const lastKey = "data-zhcn-last-" + attr;
          let original = element.getAttribute(originalKey) || element.getAttribute("data-zhcn-orig-" + attr);
          const lastApplied = element.getAttribute(lastKey);
          if (original === null || (value !== original && value !== lastApplied)) {
            const normalized = value.trim();
            original = /[\\u4e00-\\u9fa5]/.test(normalized) && (settingsZhToEn[normalized] || globalZhToEn[normalized])
              ? (settingsZhToEn[normalized] || globalZhToEn[normalized])
              : value;
          }
          const translated = translateSettingsText(original.trim());
          const next = mode === "zh" && translated ? translated : original;
          element.setAttribute(originalKey, original);
          element.setAttribute(lastKey, next);
          if (value !== next) element.setAttribute(attr, next);
        }
      }
    };

    const applySettingsRightPane = (mode) => {
      applySettingsTextRoot(getSettingsRightPane(), mode);
      // 下拉菜单通过 portal 挂到 body，按设置专用 listbox/menu 边界单独处理。
      document.querySelectorAll('[role="listbox"], [role="menu"]').forEach((overlay) => {
        if (isSettingsOverlay(overlay)) applySettingsTextRoot(overlay, mode);
      });
    };

    // ----------------------------------------------------
    // 在侧边栏快捷键正上方渲染滑动切换按钮（中/英）
    // ----------------------------------------------------
    const renderLanguageToggleSwitch = () => {
      const container = document.querySelector(".settings-modal-container");
      if (!container) return;

      const shortcutsBtn = container.querySelector('[data-testid="settings-nav-item-Shortcuts"]');
      if (!shortcutsBtn || !shortcutsBtn.parentElement) return;

      const currentMode = getSettingsLangMode();
      let toggleWrapper = document.getElementById("antigravity-zhcn-lang-toggle");

      if (!toggleWrapper) {
        toggleWrapper = document.createElement("div");
        toggleWrapper.id = "antigravity-zhcn-lang-toggle";
        toggleWrapper.className = "flex items-center justify-between transition-colors select-none";
        shortcutsBtn.parentElement.insertBefore(toggleWrapper, shortcutsBtn);
        toggleWrapper.innerHTML = [
          '<span id="antigravity-zhcn-toggle-label" class="select-none" style="font-family:inherit;font-size:14px;font-weight:400;line-height:20px;color:#4b5563">语言切换</span>',
          '<button type="button" id="antigravity-zhcn-switch-track" role="switch" aria-checked="true" aria-label="切换设置详情中文/英文模式" class="select-none" style="position:relative;display:block;box-sizing:border-box;flex:0 0 60px;width:60px;height:28px;margin:0;padding:0;overflow:hidden;appearance:none;border-radius:9999px;cursor:pointer;background:#ffffff;border:0;box-shadow:inset 3px 3px 6px rgba(0,0,0,.14),inset -3px -3px 6px rgba(255,255,255,.95);transition:box-shadow .2s ease" title="切换设置详情中文/英文模式">',
          '  <span id="antigravity-zhcn-switch-thumb" aria-hidden="true" style="position:absolute;top:3px;left:3px;right:auto;width:24px;height:22px;border-radius:9999px;background:#b8b8b8;box-shadow:3px 3px 6px rgba(0,0,0,.22),-2px -2px 5px rgba(255,255,255,.9);transition:left .2s ease,right .2s ease"></span>',
          '  <span id="antigravity-zhcn-switch-label" aria-hidden="true" style="position:absolute;top:0;right:5px;left:auto;width:25px;height:28px;display:flex;align-items:center;justify-content:center;color:#4b5563;font:700 10px/1 sans-serif;letter-spacing:0;pointer-events:none;transition:left .2s ease,right .2s ease">中</span>',
          '</button>'
        ].join("");

        // 只绑定一次，避免每次 DOM 刷新都重建开关并触发观察器循环。
        const track = toggleWrapper.querySelector("#antigravity-zhcn-switch-track");
        track.onclick = (event) => {
          event.stopPropagation();
          const nextMode = getSettingsLangMode() === "zh" ? "en" : "zh";
          if (nextMode !== getSettingsLangMode()) {
            setSettingsLangMode(nextMode);
            updateLanguageToggle(nextMode);
            updateAll();
          }
        };
        track.onkeydown = (event) => {
          if (event.key !== "Enter" && event.key !== " ") return;
          event.preventDefault();
          track.click();
        };
      }

      updateLanguageToggle(currentMode);
    };

    const updateLanguageToggle = (mode) => {
      const toggleWrapper = document.getElementById("antigravity-zhcn-lang-toggle");
      if (!toggleWrapper) return;
      const thumb = toggleWrapper.querySelector("#antigravity-zhcn-switch-thumb");
      const track = toggleWrapper.querySelector("#antigravity-zhcn-switch-track");
      const label = toggleWrapper.querySelector("#antigravity-zhcn-switch-label");
      const toggleLabel = toggleWrapper.querySelector("#antigravity-zhcn-toggle-label");
      const shortcutsBtn = toggleWrapper.closest(".settings-modal-container")?.querySelector('[data-testid="settings-nav-item-Shortcuts"]');
      const shortcutColor = shortcutsBtn
        ? getComputedStyle([...shortcutsBtn.querySelectorAll("span, p, label")].find((element) => element.textContent.trim()) || shortcutsBtn).color
        : null;
      if (shortcutsBtn) {
        const referenceStyle = getComputedStyle(shortcutsBtn);
        const referenceRect = shortcutsBtn.getBoundingClientRect();
        toggleWrapper.style.boxSizing = "border-box";
        toggleWrapper.style.width = String(referenceRect.width) + "px";
        toggleWrapper.style.height = String(referenceRect.height) + "px";
        toggleWrapper.style.marginTop = referenceStyle.marginTop;
        toggleWrapper.style.marginRight = referenceStyle.marginRight;
        toggleWrapper.style.marginBottom = referenceStyle.marginBottom;
        toggleWrapper.style.marginLeft = referenceStyle.marginLeft;
        toggleWrapper.style.paddingTop = referenceStyle.paddingTop;
        toggleWrapper.style.paddingRight = referenceStyle.paddingRight;
        toggleWrapper.style.paddingBottom = referenceStyle.paddingBottom;
        toggleWrapper.style.paddingLeft = referenceStyle.paddingLeft;
        toggleWrapper.style.fontFamily = referenceStyle.fontFamily;
        toggleWrapper.style.fontSize = referenceStyle.fontSize;
        toggleWrapper.style.fontWeight = referenceStyle.fontWeight;
        toggleWrapper.style.lineHeight = referenceStyle.lineHeight;
        toggleWrapper.style.letterSpacing = referenceStyle.letterSpacing;
        toggleWrapper.style.color = referenceStyle.color;
      }
      if (toggleLabel && shortcutsBtn) {
        const referenceStyle = getComputedStyle(shortcutsBtn);
        toggleLabel.style.fontFamily = referenceStyle.fontFamily;
        const referenceFontSize = parseFloat(referenceStyle.fontSize);
        toggleLabel.style.fontSize = Number.isFinite(referenceFontSize)
          ? Math.max(12, referenceFontSize - 2) + "px"
          : "14px";
        toggleLabel.style.fontWeight = referenceStyle.fontWeight;
        toggleLabel.style.lineHeight = referenceStyle.lineHeight;
        toggleLabel.style.letterSpacing = referenceStyle.letterSpacing;
        toggleLabel.style.color = shortcutColor || referenceStyle.color;
      }
      if (thumb) {
        thumb.style.left = mode === "zh" ? "3px" : "auto";
        thumb.style.right = mode === "en" ? "3px" : "auto";
        thumb.style.top = "3px";
      }
      if (label) {
        label.textContent = mode === "zh" ? "中" : "EN";
        label.style.right = mode === "zh" ? "6px" : "auto";
        label.style.left = mode === "en" ? "6px" : "auto";
        label.style.top = "0";
      }
      if (toggleLabel) toggleLabel.textContent = mode === "zh" ? "语言切换" : "Language";
      if (track) {
        track.setAttribute("aria-checked", String(mode === "zh"));
        track.setAttribute("aria-label", mode === "zh" ? "切换设置详情中文/英文模式" : "Switch settings details between Chinese and English");
        track.setAttribute("title", mode === "zh" ? "切换设置详情中文/英文模式" : "Switch settings details between Chinese and English");
      }
      document.documentElement.lang = mode === "zh" ? "zh-CN" : "en";
    };

    // 综合刷新逻辑
    const updateAll = () => {
      if (isDestroyed) return;
      const mode = getSettingsLangMode();
      // 1. 全局页面汉化
      globalVisit(document.body || document.documentElement, mode);
      applyDocumentTitle(mode);

      // 2. 若设置模态框已打开，渲染滑动开关并执行右侧面板语言应用
      const container = document.querySelector(".settings-modal-container");
      if (container) {
        renderLanguageToggleSwitch();
        applySettingsRightPane(mode);
      }
    };

    const scheduleUpdate = () => {
      if (isDestroyed || updateTimer !== null) return;
      updateTimer = setTimeout(() => {
        updateTimer = null;
        updateAll();
      }, 0);
    };

    const destroy = () => {
      isDestroyed = true;
      if (updateTimer !== null) clearTimeout(updateTimer);
      observer?.disconnect();
      restoreGlobalLanguage();
      document.getElementById("antigravity-zhcn-lang-toggle")?.remove();
    };

    document.documentElement.lang = "zh-CN";

    window.__ANTIGRAVITY_ZHCN__ = {
      version: "0.4.0",
      updateAll,
      setSettingsLangMode,
      getSettingsLangMode,
      destroy,
    };

    // 实时监听 DOM 变动与 Tab 切换。所有整页刷新都合并到一个微任务，
    // 并忽略本脚本自己产生的文本和开关节点变动，避免重复渲染循环。
    observer = new MutationObserver((records) => {
      if (isDestroyed) return;
      let hasSettingsChange = false;
      for (const record of records) {
        if (record.target?.closest?.("#antigravity-zhcn-lang-toggle")) continue;

        if (record.type === "characterData") {
          const settingsCache = settingsTextCache.get(record.target);
          const globalCache = globalTextCache.get(record.target);
          if ((settingsCache && settingsCache.lastApplied === record.target.nodeValue) ||
              (globalCache && globalCache.lastApplied === record.target.nodeValue)) continue;
          if (!isGlobalSkipped(record.target)) {
            applyGlobalTextNode(record.target, getSettingsLangMode());
          } else if (isSettingsRightPane(record.target) || isSettingsOverlay(record.target)) {
            hasSettingsChange = true;
          }
          continue;
        }

        for (const node of record.addedNodes) {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id === "antigravity-zhcn-lang-toggle" || node.closest?.("#antigravity-zhcn-lang-toggle")) continue;
            if (node.classList?.contains("settings-modal-container") || node.querySelector?.(".settings-modal-container")) {
              hasSettingsChange = true;
            } else if (isSettingsRightPane(node) || isSettingsOverlay(node)) {
              hasSettingsChange = true;
            } else {
              globalVisit(node, getSettingsLangMode());
            }
          } else if (node.nodeType === Node.TEXT_NODE && !isGlobalSkipped(node)) {
            applyGlobalTextNode(node, getSettingsLangMode());
          }
        }
      }

      if (hasSettingsChange || document.querySelector(".settings-modal-container")) scheduleUpdate();
    });
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true });

    updateAll();
  })();`
    .replace("__SETTINGS_EN_TO_ZH__", () => JSON.stringify(settingsEnToZh))
    .replace("__SETTINGS_ZH_TO_EN__", () => JSON.stringify(settingsZhToEn));
}

module.exports = { buildTranslationScript, globalTranslations, dynamicPatterns, settingsEnToZh, settingsZhToEn };
