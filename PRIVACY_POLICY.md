# Privacy Policy for CodeSavvy

**Effective Date:** June 13, 2026  
**Last Updated:** September 6, 2026  
**Extension Name:** CodeSavvy  
**Extension ID / Chrome Web Store URL:** [CodeSavvy on Chrome Web Store](https://chromewebstore.google.com/detail/codesavvy/jenendhnlcnokliclhccikgeohdgfhml)  
**Developer / Publisher:** Mahdi Al-Alaaldin ([mahdialaaaldin](https://github.com/mahdialaaaldin))  
**Contact Email:** [malaadin192+codesavvy@gmail.com](mailto:malaadin192+codesavvy@gmail.com)  
**Online Web Version:** [https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html](https://mahdialaaaldin.github.io/codesavvy-docs/privacy.html)

---

## 1. Executive Summary & Core Philosophy

**CodeSavvy is engineered with a strict privacy-first, local-only architecture.** 

* **Zero External Developer Servers:** We do not operate any tracking servers, remote analytics databases, or logging infrastructure.
* **Zero Telemetry or Tracking:** CodeSavvy does not collect, sell, monetize, transmit, or analyze your browsing history, clicks, search queries, or personal information.
* **100% Local Browser Execution:** All DOM manipulation tools, CSS inspection, QR code generation, media extraction, storage wiping, and settings persistence run locally within your browser sandbox.
* **Direct Client-to-API Communication:** When you choose to utilize AI-powered features (powered by Google Gemini), communication occurs directly from your browser's background service worker to Google's official API endpoints using your personal, locally stored API key.

---

## 2. Information Handled & How It Is Used

CodeSavvy accesses and processes only the minimum data strictly required to deliver its functionality:

### A. Local Extension Settings & API Keys (`chrome.storage.local`)
* **What is stored:**
  * User interface preferences (Light / Dark / System theme, chosen accent color palette, quote visibility).
  * Custom prompt presets and custom keyboard shortcut preferences.
  * Your personal Google Gemini API Key (if provided by you).
  * Transformation history logs (stored only if you enable history logging).
* **How it is used:** Persists your settings locally across browser sessions and authenticates direct API requests to Google Gemini.
* **Security & Storage Location:** Stored exclusively on your device within the isolated `chrome.storage.local` sandbox allocated by Chromium to CodeSavvy. This data is never transmitted to the developer or any unauthorized party.

### B. Selected Text for AI Text Actions (Context Menu)
* **What is accessed:** When you highlight text on any webpage, right-click, and select an AI enhancement (e.g., "Improve Text", "Make Casual", "Roasted Mode", or a custom user prompt), the extension reads only the highlighted string.
* **How it is used:** The text string is packaged into a secure API payload and sent directly to Google Gemini's official endpoint (`https://generativelanguage.googleapis.com/`) to execute the requested rewrite.
* **Destinations:** Sent directly from your browser's service worker to Google LLC. It never touches any intermediary server or proxy. Please consult the [Google Privacy Policy](https://policies.google.com/privacy) and the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy).

### C. Active Webpage Content for AI Page Studio
* **What is accessed:** When you open the popup and click "AI Page Studio" (for TL;DR Summary, Key Takeaways, Tech Stack Breakdown, ELI5, or Ask Page), CodeSavvy extracts the visible article/main text of the active tab (filtering out ads, scripts, nav, and footers).
* **How it is used:** Sent directly to Google Gemini using your API key to generate the requested summary or answer your question.
* **Destinations:** Sent directly to Google Gemini. No page text is stored permanently or sent to any developer server.

### D. Transformation History & Portability
* **User Control:** You have absolute control over your transformation history. You can:
  * Enable or Disable history logging at any time.
  * Activate **Incognito Mode** via the popup header icon to temporarily suspend history recording.
  * Configure an **Auto-Retention Policy** (e.g., auto-delete records older than 1 day, 3 days, 1 week, or 1 month).
  * Export your history to a standard `.json` backup file or import/merge past backup files with automatic deduplication.
  * Clear all transformation logs instantly with the 1-click "Clear All" action.

---

## 3. Chrome Web Store Permissions Justification

In strict adherence to Google's **Single Purpose Policy** and the **Principle of Least Privilege**, CodeSavvy requests only the permissions necessary for its advertised features:

| Permission | Technical Purpose & Justification |
| :--- | :--- |
| **`activeTab`** | Grants temporary, user-initiated permission to interact with the current webpage when you click the extension action or trigger a keyboard shortcut. Required to unlock elements, inspect CSS, zap banners, toggle design mode, and inject fonts. |
| **`scripting`** | Allows the extension to execute utility scripts (such as removing `disabled` attributes, stripping `maxlength`, toggling `document.designMode`, and attaching the non-destructive CSS Inspector HUD) into the active tab upon user command. |
| **`storage`** | Enables saving your local preferences, theme choices, custom AI prompt presets, your Gemini API key, and transformation history locally via `chrome.storage.local`. |
| **`browsingData`** | Required exclusively for the "Clear Cache & Hard Reload" feature (`Ctrl+Shift+R`), which invokes `chrome.browsingData.remove({ since: 0 }, { cache: true })` to purge cached files on demand. |
| **`contextMenus`** | Used to create right-click context menu items for AI text enhancements (e.g., Improve Text, Advanced Edit, Roast) and offline case transformations (UPPERCASE, lowercase, camelCase, snake_case). |
| **`notifications`** | Displays brief, non-intrusive desktop status alerts (such as confirming that browser cache was purged or notifying if an API key is missing). |
| **`downloads`** | Permits saving screenshot images captured with the "Screenshot" tool, PNG files generated by the offline QR Code generator, and JSON backup exports directly to your local downloads folder. |

### Data Minimization Commitment
> **CodeSavvy intentionally does NOT request the broad `tabs` permission or `<all_urls>` background host permissions.**  
> CodeSavvy cannot monitor your general browsing history, view background tabs, or track your activity across the web. Access is restricted strictly to the active tab upon your explicit invocation.

---

## 4. Third-Party Services & Google Gemini API

CodeSavvy integrates with the Google Gemini API to deliver AI intelligence features:
* **User-Owned Credentials:** You provide your own Google Gemini API key obtained from Google AI Studio.
* **Direct Network Calls:** Requests are dispatched directly from the extension's background service worker (`src/background/background.js`) to `https://generativelanguage.googleapis.com/`. 
* **Host Page Isolation:** Host webpages cannot inspect or steal your API key because network requests occur inside the isolated extension service worker context.
* **Google's Policies:** Use of the Gemini API is governed by Google's terms. Learn more by reviewing:
  * [Google Privacy Policy](https://policies.google.com/privacy)
  * [Google Gemini API Terms of Service](https://ai.google.dev/terms)

---

## 5. Chrome Web Store Limited Use Policy Disclosure

CodeSavvy's use and transfer to any other app of information received from Google APIs adheres to the **Chrome Web Store User Data Policy**, including the **Limited Use** requirements:
1. We only use access to user data to provide or improve user-facing features that are prominent in the extension's user interface.
2. We do not transfer the data to third parties, other than to Google Gemini API endpoints as explicitly initiated by the user for text processing.
3. We do not use or transfer the data to serve personalized, re-targeted, or interest-based advertising.
4. We do not allow humans to read the data unless you have given explicit affirmative agreement for specific troubleshooting or as required by law.

---

## 6. Security of Your Data

We employ industry best practices to safeguard your information:
* **Manifest V3 Architecture:** Built entirely on Manifest V3 with zero remote code execution (`unsafe-eval` and remote scripts are completely prohibited).
* **Local Sandboxing:** API keys and preferences are stored in Chromium's isolated storage sandbox.
* **Zero Analytics / Trackers:** No Google Analytics, Mixpanel, Sentry, Facebook Pixel, or tracking scripts are bundled with or loaded by the extension.
* **Offline-Ready Capabilities:** Offline tools (QR Code Generator, CSS Inspector, Element Zapper, DOM Unlocker, Font Switcher, Color Studio, Storage Wiper) function 100% offline without any internet connection.

---

## 7. Children's Privacy

CodeSavvy is a technical developer tool and does not address or knowingly collect data from children under the age of 13.

---

## 8. Updates to This Policy

We may update this Privacy Policy from time to time to reflect changes in our extension features or legal requirements. When updates occur, the "Last Updated" date at the top of this document will be updated. We encourage users to periodically review this page.

---

## 9. Contact & Inquiries

If you have questions, concerns, or feedback regarding this Privacy Policy or CodeSavvy's data practices, please contact:

* **Developer:** Mahdi Al-Alaaldin
* **Contact & Support Email:** [malaadin192+codesavvy@gmail.com](mailto:malaadin192+codesavvy@gmail.com)
* **Documentation & Sandbox Portal:** [https://mahdialaaaldin.github.io/codesavvy-docs/](https://mahdialaaaldin.github.io/codesavvy-docs/)
