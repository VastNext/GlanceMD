# 🚀 GlanceMD

<p align="center">
  <b>简体中文</b> · <a href="README.en.md">English</a>
</p>

<p align="center">
  <a href="https://github.com/VastNext/GlanceMD/releases/latest"><img src="https://img.shields.io/github/v/release/VastNext/GlanceMD?style=flat-square&logo=github&color=a855f7" alt="release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-ec4899?style=flat-square" alt="license"></a>
  <a href="https://github.com/VastNext/GlanceMD/stargazers"><img src="https://img.shields.io/github/stars/VastNext/GlanceMD?style=flat-square&color=f59e0b" alt="stars"></a>
  <img src="https://img.shields.io/badge/platform-Windows-0078D6?style=flat-square&logo=windows11" alt="platform">
  <img src="https://img.shields.io/badge/built%20with-Rust-DEA584?style=flat-square&logo=rust" alt="rust">
  <img src="https://img.shields.io/github/last-commit/VastNext/GlanceMD?style=flat-square&color=8b5cf6" alt="last commit">
</p>

一款轻量级的原生 Windows Markdown 查看器与编辑器。启动速度媲美记事本，渲染效果媲美 Obsidian —— 全部打包在约 900 KB 的单文件可执行程序中。

使用 Rust + WebView2 构建。无需安装器、无运行时依赖、不含 Electron。

本项目基于开源项目 **[Peekdown](https://github.com/Mockitup/Peekdown)**（by Mockitup）深度开发而来，并采用 **[Marco](https://github.com/Ranrar/Marco)** 阅读器的排版主题。详见[致谢](#-致谢)。

<p align="center">
  <img src="screenshot-preview.png" alt="GlanceMD 预览（浅色主题）" width="820">
</p>

<p align="center">
  <img src="screenshot-preview_dark.png" alt="GlanceMD 预览（深色主题）" width="820">
</p>

## 🎨 默认 Marco 排版

默认采用 **Marco / Polo** 阅读器的 Marco 排版风格（Astro/Space 主题）：

- **标题居左对齐**，带紫→粉渐变配色（`#a855f7 → #ec4899`）✨
- **内容铺满整个屏幕**，不再受固定宽度限制 📐
- **表格铺满全宽**，斑马纹 + 行悬停高亮
- 无衬线字体（Segoe UI），16px / 1.6 行高，阅读舒适
- 代码块带边框圆角与**语言标签**，深色/浅色两套配色自动适配 🌙/☀️

## ✅ 功能特性

- **极速启动** ⚡ — 原生窗口，无框架开销
- **实时预览** 👀 — 完整 GFM 支持（表格、任务列表、脚注）
- **分屏模式** ↔️ — 编辑器与预览并排，实时同步（Ctrl+\）
- **语法高亮** 🌈 — 30+ 种语言（highlight.js）
- **多标签页** 📑 — 打开多个文件，单文件时自动隐藏标签栏
- **深色/浅色主题** 🌙/☀️ — 一键切换
- **文档内查找** 🔍 — Ctrl+F，高亮匹配并支持导航
- **目录侧栏** 🧭 — 自动生成大纲（Ctrl+Shift+O）
- **缩放** 🔎 — Ctrl+/- 或 Ctrl+滚轮，带缩放指示
- **拖放打开** 📥 — 拖入 `.md` 文件即打开，可多选
- **可调预览宽度** 📐 — 拖动边缘调整
- **最近文件** 🕘 — 空标签页快速打开面板
- **跨模式选区保持** 🔄 — 切换编辑/预览时选中文本不丢失
- **文件关联** 📄 — 通过"打开方式"设为默认 `.md` 查看器
- **单文件可执行** 💾 — 所有资源内嵌，无需安装

## ⌨️ 键盘快捷键

| 快捷键 | 功能 |
|---|---|
| Ctrl+O | 打开文件 |
| Ctrl+S | 保存 |
| Ctrl+Shift+S | 另存为 |
| Ctrl+N | 新建标签页 |
| Ctrl+W | 关闭标签页 |
| Ctrl+Tab | 下一个标签页 |
| Ctrl+Shift+Tab | 上一个标签页 |
| Ctrl+E | 切换编辑/预览 |
| Ctrl+\ | 切换分屏视图 |
| Ctrl+F | 文档内查找 |
| Ctrl+Shift+O | 切换大纲侧栏 |
| Ctrl+= / Ctrl+- | 放大 / 缩小 |
| Ctrl+0 | 重置缩放 |

## 🛠️ 构建

需要 Rust 和 WebView2 运行时（Windows 10/11 预装）。

```bash
cargo build --release
```

输出：`target/release/GlanceMD.exe`

### 🚦 GitHub Actions 发布

推送 `v*` 标签即自动构建并发布 Release：

```bash
git tag v1.3.5 && git push origin v1.3.5
```

构建产物：`target/x86_64-pc-windows-msvc/release/GlanceMD.exe`

## ⚙️ 技术栈

- **Rust** — 窗口管理、文件读写、进程通信（[tao](https://github.com/niceshell/niceshell) + [wry](https://github.com/niceshell/niceshell)）
- **WebView2** — 渲染引擎（Edge，Windows 10/11 预装）
- **marked.js** — Markdown 转 HTML
- **highlight.js** — 代码语法高亮
- **不含 Electron、不含 Node、不含打包器** — 全部前端资源通过 `include_str!` 在编译期嵌入

## 🙏 致谢

本项目基于以下开源项目构建，并从中汲取了大量养分：

- **[Peekdown](https://github.com/Mockitup/Peekdown)**（by Mockitup）— 本项目的前身。窗口管理、文件 I/O、多标签架构与整体产品形态均源自它
- **[Marco](https://github.com/Ranrar/Marco)** / [marco-core](https://github.com/Ranrar/marco-core)（by Kim Skov Rasmussen，MIT）— 预览排版主题来自 Marco 的 Astro/Space 主题：渐变标题、铺满全屏、表格斑马纹等

感谢两位作者的开源精神！🚀

## 📄 许可证

MIT（见 [LICENSE](LICENSE)）