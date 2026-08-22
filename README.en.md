# 🚀 GlanceMD

<p align="center">
  <a href="README.md">简体中文</a> · <b>English</b>
</p>

<p align="center">
  <a href="https://github.com/VastNext/GlanceMD/releases/latest"><img src="https://img.shields.io/github/v/release/VastNext/GlanceMD?style=flat-square&logo=github&color=a855f7" alt="release"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-ec4899?style=flat-square" alt="license"></a>
  <a href="https://github.com/VastNext/GlanceMD/stargazers"><img src="https://img.shields.io/github/stars/VastNext/GlanceMD?style=flat-square&color=f59e0b" alt="stars"></a>
  <img src="https://img.shields.io/badge/platform-Windows-0078D6?style=flat-square&logo=windows11" alt="platform">
  <img src="https://img.shields.io/badge/built%20with-Rust-DEA584?style=flat-square&logo=rust" alt="rust">
  <img src="https://img.shields.io/github/last-commit/VastNext/GlanceMD?style=flat-square&color=8b5cf6" alt="last commit">
</p>

A lightweight native Windows markdown viewer and editor. Notepad-fast startup, Obsidian-pretty rendering — in a single ~900 KB executable.

Built with Rust + WebView2. No installer, no runtime dependencies, no Electron.

GlanceMD is deeply developed from the open-source project **[Peekdown](https://github.com/Mockitup/Peekdown)** (by Mockitup), with the preview typography theme from the **[Marco](https://github.com/Ranrar/Marco)** reader. See [Acknowledgments](#-acknowledgments).

<p align="center">
  <img src="screenshot-preview.png" alt="GlanceMD preview (light theme)" width="820">
</p>

<p align="center">
  <img src="screenshot-preview_dark.png" alt="GlanceMD preview (dark theme)" width="820">
</p>

## ✅ Features

- **Instant startup** ⚡ — native window, no framework overhead
- **Live preview** 👀 — rendered markdown with full GFM support (tables, task lists, footnotes)
- **Marco rendering** 🎨 — signature Astro/Space preview style: left-aligned gradient headings, full-width content and tables
- **Split view** ↔️ — side-by-side editor and preview with live sync (Ctrl+\\)
- **Syntax highlighting** 🌈 — 30+ languages via highlight.js
- **Multi-tab** 📑 — open multiple files, auto-hides tab bar for single files
- **Dark/Light themes** 🌙/☀️ — toggle with one click
- **Find in document** 🔍 — Ctrl+F with match highlighting and navigation
- **Table of Contents** 🧭 — auto-generated outline sidebar (Ctrl+Shift+O)
- **Zoom** 🔎 — Ctrl+/- or Ctrl+scroll, with level indicator
- **Drag & drop** 📥 — drop `.md` files to open, drop multiple to open tabs
- **Adjustable preview width** 📐 — drag the edge to resize
- **Recent files** 🕘 — quick-open panel on empty tabs
- **Cross-mode selection** 🔄 — selected text stays selected when toggling edit/preview
- **File associations** 📄 — use as default `.md` viewer via "Open With"
- **Single executable** 💾 — everything embedded, nothing to install

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| Ctrl+O | Open file |
| Ctrl+S | Save |
| Ctrl+Shift+S | Save As |
| Ctrl+N | New tab |
| Ctrl+W | Close tab |
| Ctrl+Tab | Next tab |
| Ctrl+Shift+Tab | Previous tab |
| Ctrl+E | Toggle edit/preview |
| Ctrl+\\ | Toggle split view |
| Ctrl+F | Find in document |
| Ctrl+Shift+O | Toggle outline |
| Ctrl+= / Ctrl+- | Zoom in/out |
| Ctrl+0 | Reset zoom |

## 🛠️ Build

Requires Rust and the WebView2 runtime (pre-installed on Windows 10/11).

```bash
cargo build --release
```

Output: `target/release/GlanceMD.exe`

### 🚦 Release via GitHub Actions

Push a `v*` tag to automatically build and publish a release:

```bash
git tag v1.3.6 && git push origin v1.3.6
```

```bash
target/x86_64-pc-windows-msvc/release/GlanceMD.exe
```

## ⚙️ Tech Stack

- **Rust** — window management, file I/O, IPC ([tao](https://github.com/niceshell/niceshell) + [wry](https://github.com/niceshell/niceshell))
- **WebView2** — rendering engine (Edge, pre-installed on Win10/11)
- **marked.js** — markdown to HTML
- **highlight.js** — code syntax highlighting
- **No Electron, no Node, no bundler** — all frontend assets are embedded at compile time via `include_str!`

## 🙏 Acknowledgments

This project is built on top of, and deeply indebted to:

- **[Peekdown](https://github.com/Mockitup/Peekdown)** (by Mockitup) — the project this fork originated from. Window management, file I/O, multi-tab architecture and the overall product shape all come from it
- **[Marco](https://github.com/Ranrar/Marco)** / [marco-core](https://github.com/Ranrar/marco-core) (by Kim Skov Rasmussen, MIT) — the preview typography theme is derived from Marco's Astro/Space theme: gradient headings, full-width layout, striped tables and more

Thank you both for open-sourcing your work! 🚀

## 📄 License

MIT — see [LICENSE](LICENSE)