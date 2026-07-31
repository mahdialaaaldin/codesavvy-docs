/**
 * CodeSavvy Docs — Theme Manager
 * Handles light/dark theme toggle with localStorage persistence.
 * Applies theme immediately (synchronous) to prevent flash of incorrect theme.
 *
 * Default: dark (the docs' default aesthetic).
 * Privacy page exception is handled via its own CSS variable logic.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'cs-docs-theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    // ── Apply saved theme immediately (before paint) to prevent FOUC ─────────
    const saved = localStorage.getItem(STORAGE_KEY);
    // If no saved preference, default to dark (matches the docs' dark aesthetic)
    const theme = saved || DARK;
    document.documentElement.setAttribute('data-theme', theme);

    // ── Inject toggle button after DOM is ready ───────────────────────────────
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.createElement('button');
        btn.id = 'cs-theme-toggle';
        btn.setAttribute('aria-label', 'Toggle light/dark theme');
        btn.setAttribute('title', 'Toggle Light / Dark Theme');
        updateBtn(btn, theme);

        btn.addEventListener('click', function () {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === LIGHT ? DARK : LIGHT;
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem(STORAGE_KEY, next);
            updateBtn(btn, next);
        });

        document.body.appendChild(btn);
    });

    /**
     * Updates the button emoji and aria-label for the given theme.
     * @param {HTMLButtonElement} btn
     * @param {string} theme - 'light' | 'dark'
     */
    function updateBtn(btn, theme) {
        // Show opposite icon (what you'll switch TO on click)
        btn.textContent = theme === LIGHT ? '🌙' : '☀️';
        btn.setAttribute('aria-label', theme === LIGHT ? 'Switch to dark theme' : 'Switch to light theme');
    }
})();
