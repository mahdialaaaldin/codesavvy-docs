# CodeSavvy Documentation, Guide & Interactive Testing Suite <img src="assets/icons/icon48.png" width="32" height="32" align="center" alt="CodeSavvy logo">

Welcome to the public documentation, architectural guide, and interactive live testing portal for **CodeSavvy**, an advanced browser extension toolbox built for developers, QA engineers, and designers.

🌐 **Live Deployment:** [https://mahdialaaaldin.github.io/codesavvy-docs/](https://mahdialaaaldin.github.io/codesavvy-docs/)

---

## 🔗 Official Links & Resources

* 🛒 **Chrome Web Store:** [Install CodeSavvy on Chrome Web Store](https://chromewebstore.google.com/detail/codesavvy/jenendhnlcnokliclhccikgeohdgfhml)
* 📖 **Interactive Guide & Testing Lab:** [index.html](https://mahdialaaaldin.github.io/codesavvy-docs/index.html)
* 🛡️ **Chrome Web Store Privacy Policy:** [privacy.html](https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html) / [PRIVACY_POLICY.md](PRIVACY_POLICY.md)
* ✉️ **Contact & Support:** [malaadin192+codesavvy@gmail.com](mailto:malaadin192+codesavvy@gmail.com)

---

## 🚀 Key Extension Highlights

1. **🛠️ DOM Manipulation & Debugging:**
   * **Unlock Elements (`Ctrl+Shift+E`):** Strips `disabled`, `readonly`, `aria-disabled`, removes disabled class tokens, and forces `pointer-events: auto`.
   * **Remove Limits:** Clears artificial `maxlength` and `minlength` constraints on forms and inputs.
   * **Reveal Passwords:** Safely unmasks hidden text inside password inputs.
   * **Element Zapper with Live Undo:** Vaporize sticky banners, modal walls, and overlays with live <kbd>Ctrl+Z</kbd> restoration and root safety guards.
   * **Non-Destructive CSS & Box Model Inspector:** Glassmorphic HUD overlay displaying computed dimensions, font stacks, margins, paddings, colors, and 1-click CSS snippet copy.
   * **Smart Dark Mode:** Intelligent high-contrast dark theme with counter-inversion for images, SVGs, canvases, and media.

2. **✍️ Typography & Content Prototyping:**
   * **Design Mode (`Ctrl+Shift+Y`):** Toggles in-browser text editing across any webpage.
   * **Custom Font Injection:** Injects 30+ Google Fonts and system typefaces across 5 curated categories.

3. **🛡️ Security & Anti-User Bypasses:**
   * **Force Right-Click:** Overrides `contextmenu` event blockers.
   * **Force Text Selection:** Bypasses `user-select: none` across standard DOM and deeply penetrates open **Shadow DOM** roots.
   * **Force Copy & Paste:** Bypasses clipboard interception scripts on forms and protected containers.

4. **🎨 Color Studio & Native Eyedropper:**
   * 0ms screen color sampler using the native Chromium `EyeDropper` API.
   * 10 curated designer palette presets.
   * Multi-format conversion & 1-click copy: HEX, RGB, HSL, and CSS Variables (`--color: #...`).

5. **⚡ Developer & Media Utilities:**
   * **Offline QR Code Generator:** 100% offline client-side QR generation for active tab URLs with 1-click PNG download.
   * **Media & Asset Extractor:** Deep scans pages for images, SVGs, background-image styles, and videos with batch download.
   * **Site Storage Wiper:** 1-click purge of `localStorage`, `sessionStorage`, and domain cookies strictly for the active hostname.
   * **Clear Cache & Hard Reload (`Ctrl+Shift+R`):** Instantly purges browser cache via `chrome.browsingData`.

6. **🧠 AI Page Studio & Intelligence (Google Gemini):**
   * **Page Studio:** TL;DR Summaries, Key Takeaways, Tech Stack Breakdowns, ELI5, and Custom Q&A.
   * **Context Menu AI Presets (`Ctrl+Shift+L`):** Improve Text, Advanced Edit, Professional, Roasted Mode, and Prompt Engineer.
   * **Case Converters:** UPPERCASE, lowercase, Title Case, camelCase, kebab-case, snake_case, PascalCase, Reverse text.

7. **📋 Data Ownership & Customization:**
   * **Incognito Mode:** Pause history recording anytime.
   * **Portability:** Export to JSON or import backups with automatic deduplication.
   * **7 Accent Themes:** Classic Indigo, Solar Orange, Electric Yellow, Emerald Green, Cyber Cyan, Neon Violet, Electric Rose.

---

## 🧪 Testing Every Feature Live

The documentation site (`index.html`) is structured as both a comprehensive guide and an **interactive testing suite**:
* Each tool card has a self-contained, live interactive fixture.
* Test DOM unlocking against real disabled buttons, readonly inputs, and pointer-events blockers.
* Test character limit removal against 5-character restricted fields.
* Test password revealing on pre-filled secret inputs.
* Test element zapping on sticky banners and restore them using <kbd>Ctrl+Z</kbd>.
* Test CSS inspection on diverse box model targets.
* Test right-click and selection blockers, including deep **Shadow DOM** boundaries.
* Seed dummy storage to test the Site Storage Wiper with real-time counters.
* Test AI Page Studio against a realistic technical benchmark article.
* Use the master **"Reset All Tests"** button or individual fixture reset buttons to test over and over again.

---

## 🛠️ Local Development

To run the documentation portal locally:
```bash
# Clone the repository
git clone https://github.com/mahdialaaaldin/codesavvy-docs.git

# Navigate into the folder
cd codesavvy-docs

# Open index.html directly in any modern browser, or use a local dev server:
npx serve .
# or
python -m http.server 8080
```

---

## 📜 License

Created with ❤️ by [Mahdi Al-Alaaldin](https://github.com/mahdialaaaldin). Released under the MIT License.
