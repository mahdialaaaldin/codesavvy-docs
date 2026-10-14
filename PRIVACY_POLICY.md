# Privacy Policy for CodeSavvy (Chrome Extension)

**Effective Date:** June 2, 2026  
**Last Updated:** October 14, 2026  
**Version:** 2.4.4.5  
**Online Web Version:** [https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html](https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html)

---

## 1. Executive Summary

**CodeSavvy** is a privacy-first AI writing assistant, persistent element zapper, webpage unlocker, and developer toolkit for Google Chrome.

* **Zero Browsing History or Telemetry:** We do not use analytics scripts, tracking pixels, or telemetry SDKs.
* **100% Local Storage:** All settings, custom AI presets, per-website Element Zapper rules, transformation history, and optional API keys are stored exclusively on your device via `chrome.storage.local` and `localStorage`.
* **Minimal 5-Permission Footprint:** CodeSavvy requests only 5 essential permissions (`activeTab`, `scripting`, `storage`, `contextMenus`, `clipboardWrite`) and **zero host permissions** (`<all_urls>` is not requested).

---

## 2. Information Stored Locally on Your Device

CodeSavvy stores the following data locally inside your browser:

1. **Preferences & Themes:** Your chosen theme mode (Light, Dark, System), 7 accent color palettes, and UI language preference (22 supported locales).
2. **AI Configuration & Optional API Key:** Your selected AI mode (Zero-Setup Free AI vs. Personal Google Gemini API Key), custom context-menu prompts, Protected Terms dictionary, and custom global instructions. Personal API keys are automatically excluded when exporting JSON settings backups.
3. **Persistent Element Zapper Rules:** Domain-scoped CSS selectors for page elements you choose to hide permanently across visits.
4. **Transformation History:** Local history of text transformations. You can pause history logging anytime using **Incognito Mode**, set auto-delete retention windows, or clear all logs in one click.

---

## 3. How AI Features Process Text (Dual AI Architecture)

CodeSavvy never reads or transmits webpage text in the background. Text is processed **only** when you explicitly trigger an AI Writing action or AI Page Studio tool:

* **Zero-Setup Free AI Tier (Default):** Selected text and prompt instructions are sent over encrypted HTTPS to the stateless CodeSavvy Cloud Worker (`https://codesavvy-ai.malaadin192.workers.dev`) to generate the response. The worker enforces anonymous rate limits (**50 requests/day** and **5 requests/minute burst limit**; developer quotes are unlimited) and never logs, stores, or retains prompts or responses.
* **Personal Google Gemini API Key Tier:** When you supply your own Google Gemini API key, requests go directly from your browser to Google's official API endpoint (`https://generativelanguage.googleapis.com`) over HTTPS (`x-goog-api-key` header) with zero intermediate servers.

---

## 4. Chrome Permissions Justification (v2.4.4.5)

| Permission | Justification |
| :--- | :--- |
| **`activeTab`** | Grants temporary access to the active tab strictly when you invoke a tool via the popup, context menu, or keyboard shortcut. |
| **`scripting`** | Injects on-demand DOM utilities (Element Zapper, Unlock Elements, Smart Dark Mode, CSS Inspector, Font Switcher) and registers per-domain Zapper CSS rules. |
| **`storage`** | Stores user settings, custom prompts, per-site Zapper rules, and local transformation history on your device. |
| **`contextMenus`** | Adds the right-click "CodeSavvy" menu for selected text transformations and case/keyboard conversions. |
| **`clipboardWrite`** | Copies AI-refined text, sampled color codes, CSS snippets, and QR code links to your clipboard on click. |

*(Note: Legacy `downloads`, `browsingData`, and `notifications` permissions were completely removed in v2.4.4.5 in favor of pure client-side Anchor/Blob downloads, `chrome.tabs.reload({ bypassCache: true })`, and in-page Shadow DOM toasts.)*

---

## 5. Contact & Support

* **Documentation & Interactive Sandbox:** [https://mahdialaaaldin.github.io/codesavvy-docs/](https://mahdialaaaldin.github.io/codesavvy-docs/)
* **GitHub Repository:** [https://github.com/mahdialaaaldin/codesavvy-docs](https://github.com/mahdialaaaldin/codesavvy-docs)
