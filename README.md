# CodeSavvy — Official Documentation & Live Testing Sandbox (v2.4.4.10)

🌐 **Live Portal:** [https://mahdialaaaldin.github.io/codesavvy-docs/](https://mahdialaaaldin.github.io/codesavvy-docs/)  
🛒 **Chrome Web Store:** [Install CodeSavvy](https://chromewebstore.google.com/detail/codesavvy/jenendhnlcnokliclhccikgeohdgfhml)

This repository hosts the official **Interactive User Guide & Live Testing Sandbox**, **Release Changelog**, and **Privacy Policy** for the **CodeSavvy** Chrome Extension (`v2.4.4.10`).

---

## 📂 Portal Architecture

* 🧪 **[`index.html`](https://mahdialaaaldin.github.io/codesavvy-docs/index.html) — Interactive User Guide & Live Testing Sandbox**
  * Features **16 live, reactive testing arenas** with real-time DOM `MutationObserver` and event listeners that turn green (`✓`) the moment CodeSavvy modifies them.
  * Includes a **3-Step Quick Start & Keyboard Shortcut Setup Guide** with 1-click copy for `chrome://extensions/shortcuts`.
  * Covers **Zero-Setup Free AI** (50 requests/day, 5 requests/minute burst limit) + Google Gemini Pro/Flash, **Floating Selection Toolbar**, **Persistent Per-Site Element Zapper** (`document_start` auto-hide & Spotlight Preview), **DOM & Restriction Unlockers** (including Open Shadow DOM penetration), **Arabic ↔ English Keyboard Fixer**, **CSS & Box Inspector**, **Color Studio**, **Smart Dark Mode**, and **AI Page Studio**.
* 📜 **[`changelog.html`](https://mahdialaaaldin.github.io/codesavvy-docs/changelog.html) — Release Changelog (`v1.0.0` – `v2.4.4.10`)**
  * Searchable, filterable timeline of all major releases, architectural upgrades, and security improvements.
* 🛡️ **[`privacy.html`](https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html) / [`PRIVACY_POLICY.md`](PRIVACY_POLICY.md) — Privacy Policy & Permissions Disclosure**
  * Documents CodeSavvy's local-first storage, Dual AI architecture, and ultra-minimal **5-permission footprint** (`activeTab`, `scripting`, `storage`, `contextMenus`, `clipboardWrite`) with zero host permissions.
* 🎨 **`theme.css` & `theme.js` — Unified Theme & Accent Engine**
  * Shared across all pages with zero-flicker preload, supporting **Dark Mode & Light Mode** (`html[data-theme]`) and all **7 Accent Palettes** (`html[data-accent]`).

---

## ⌨️ Recommended Keyboard Shortcuts Setup

Because Chrome often leaves extension shortcuts unassigned by default to prevent conflicts, open `chrome://extensions/shortcuts` (or click the `⌨️` icon in the CodeSavvy popup) to assign your preferred keys:

| Action | Recommended Windows / Linux | Recommended macOS |
| :--- | :--- | :--- |
| **Run Favorite AI Action (`★`)** | `Ctrl + Shift + L` | `Cmd + Shift + L` |
| **Unlock Disabled Page Elements** | `Ctrl + Shift + E` | `Cmd + Shift + E` |
| **Toggle Live Edit Mode (`designMode`)** | `Ctrl + Shift + Y` | `Cmd + Shift + Y` |
| **Hard Reload & Bypass Cache** | `Ctrl + Shift + R` | `Cmd + Shift + R` |

---

## 💻 Local Development

No build step or external dependencies required. Clone the repository and open `index.html` in Chrome (or serve locally):

```bash
git clone https://github.com/mahdialaaaldin/codesavvy-docs.git
cd codesavvy-docs
npx serve .
```
