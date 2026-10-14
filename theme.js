/**
 * CodeSavvy Documentation — Unified Theme, Accent & UI Utility Engine (v2.4.4.5)
 * Synchronizes Dark/Light mode (html[data-theme]) and 7 Accent Palettes (html[data-accent])
 * across index.html, changelog.html, and privacy.html with zero flicker.
 * Defaults automatically to the user's device/system theme preference.
 */
(function () {
    const THEME_KEY = 'codesavvy_docs_theme';
    const ACCENT_KEY = 'codesavvy_theme_accent';
    const VALID_ACCENTS = ['indigo', 'orange', 'yellow', 'emerald', 'cyan', 'violet', 'rose'];

    function getSystemTheme() {
        try {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return 'light';
            }
        } catch (e) {}
        return 'dark';
    }

    function getPreferredTheme() {
        try {
            const saved = localStorage.getItem(THEME_KEY);
            if (saved === 'light' || saved === 'dark') return saved;
        } catch (e) {}
        return getSystemTheme();
    }

    function getPreferredAccent() {
        try {
            const saved = localStorage.getItem(ACCENT_KEY);
            if (VALID_ACCENTS.includes(saved)) return saved;
        } catch (e) {}
        return 'indigo';
    }

    function applyTheme(theme, save = true) {
        document.documentElement.setAttribute('data-theme', theme);
        if (save) {
            try {
                localStorage.setItem(THEME_KEY, theme);
            } catch (e) {}
        }
        updateThemeButtons(theme);
    }

    function applyAccent(accent) {
        const normalized = VALID_ACCENTS.includes(accent) ? accent : 'indigo';
        document.documentElement.setAttribute('data-accent', normalized);
        try {
            localStorage.setItem(ACCENT_KEY, normalized);
        } catch (e) {}
        updateAccentButtons(normalized);
    }

    function updateThemeButtons(theme) {
        document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
            const isLight = theme === 'light';
            btn.innerHTML = isLight
                ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg><span class="theme-btn-label">Dark</span>`
                : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg><span class="theme-btn-label">Light</span>`;
            btn.setAttribute('title', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
            btn.setAttribute('aria-label', isLight ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        });
    }

    function updateAccentButtons(accent) {
        document.querySelectorAll('[data-accent-choice]').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-accent-choice') === accent);
        });
    }

    // Apply immediately before DOM paint (device default unless overridden)
    applyTheme(getPreferredTheme(), false);
    applyAccent(getPreferredAccent());

    // Listen for device system theme changes if user hasn't set an explicit preference
    try {
        if (window.matchMedia) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                try {
                    if (!localStorage.getItem(THEME_KEY)) {
                        applyTheme(e.matches ? 'dark' : 'light', false);
                    }
                } catch (err) {}
            });
        }
    } catch (e) {}

    window.toggleDocsTheme = function () {
        const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next, true);
        window.showDocsToast(`Switched to ${next === 'light' ? 'Light' : 'Dark'} Mode`, next === 'light' ? '☀️' : '🌙');
    };

    window.setDocsAccent = function (accent, silent) {
        applyAccent(accent);
        if (!silent) {
            window.showDocsToast(`Accent theme set to ${accent.toUpperCase()}`, '🎨');
        }
    };

    let toastTimer = null;
    window.showDocsToast = function (message, icon = '✨') {
        let toast = document.getElementById('docsGlobalToast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'docsGlobalToast';
            toast.className = 'docs-toast';
            toast.innerHTML = `<span id="docsToastIcon">✨</span><span id="docsToastMsg"></span>`;
            document.body.appendChild(toast);
        }
        const iconEl = document.getElementById('docsToastIcon');
        const msgEl = document.getElementById('docsToastMsg');
        if (iconEl) iconEl.textContent = icon;
        if (msgEl) msgEl.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    };

    window.copyDocsText = function (text, successMessage) {
        function fallbackCopy(str) {
            try {
                const ta = document.createElement('textarea');
                ta.value = str;
                ta.style.position = 'fixed';
                ta.style.left = '-9999px';
                ta.style.top = '-9999px';
                ta.setAttribute('readonly', '');
                document.body.appendChild(ta);
                ta.focus();
                ta.select();
                const success = document.execCommand('copy');
                document.body.removeChild(ta);
                if (success) {
                    window.showDocsToast(successMessage || 'Copied to clipboard!', '📋');
                } else {
                    window.showDocsToast('Clipboard copy failed', '⚠️');
                }
            } catch (err) {
                window.showDocsToast('Clipboard copy failed', '⚠️');
            }
        }

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(text).then(() => {
                window.showDocsToast(successMessage || 'Copied to clipboard!', '📋');
            }).catch(() => {
                fallbackCopy(text);
            });
        } else {
            fallbackCopy(text);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        updateThemeButtons(getPreferredTheme());
        updateAccentButtons(getPreferredAccent());

        document.querySelectorAll('[data-accent-choice]').forEach(btn => {
            btn.addEventListener('click', () => {
                window.setDocsAccent(btn.getAttribute('data-accent-choice'));
            });
        });
    });
})();
