/**
 * CodeSavvy Docs & Interactive Guide — Theme Manager
 * Provides zero-FOUC theme application, persistent storage, and reactive toggling.
 */
(function () {
    'use strict';

    const STORAGE_KEY = 'cs-docs-theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    // Apply theme immediately before render to prevent flash of wrong theme
    const saved = localStorage.getItem(STORAGE_KEY);
    const initialTheme = saved === LIGHT ? LIGHT : DARK;
    document.documentElement.setAttribute('data-theme', initialTheme);

    window.CodeSavvyTheme = {
        get: function () {
            return document.documentElement.getAttribute('data-theme') || DARK;
        },
        set: function (theme) {
            const next = theme === LIGHT ? LIGHT : DARK;
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem(STORAGE_KEY, next);
            updateToggleBtns(next);
            window.dispatchEvent(new CustomEvent('codesavvy-theme-change', { detail: { theme: next } }));
        },
        toggle: function () {
            const current = this.get();
            const next = current === LIGHT ? DARK : LIGHT;
            this.set(next);
            return next;
        }
    };

    function updateToggleBtns(theme) {
        // Navbar pill buttons (contain text)
        document.querySelectorAll('.cs-theme-toggle-btn').forEach(btn => {
            btn.innerHTML = theme === LIGHT ? '🌙 <span class="theme-label">Dark</span>' : '☀️ <span class="theme-label">Light</span>';
            btn.setAttribute('aria-label', theme === LIGHT ? 'Switch to Dark Mode' : 'Switch to Light Mode');
            btn.setAttribute('title', theme === LIGHT ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        });

        // Floating circular buttons (EMOJI ONLY — never inject text)
        document.querySelectorAll('#cs-theme-toggle, .cs-theme-floating-toggle').forEach(btn => {
            btn.textContent = theme === LIGHT ? '🌙' : '☀️';
            btn.setAttribute('aria-label', theme === LIGHT ? 'Switch to Dark Mode' : 'Switch to Light Mode');
            btn.setAttribute('title', theme === LIGHT ? 'Switch to Dark Mode' : 'Switch to Light Mode');
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        // Wire any pre-existing theme toggle buttons
        document.querySelectorAll('.cs-theme-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => window.CodeSavvyTheme.toggle());
        });

        // Only create a floating circular button if NO navbar theme button exists on the page
        if (!document.querySelector('.cs-theme-toggle-btn') && !document.getElementById('cs-theme-toggle')) {
            const floatBtn = document.createElement('button');
            floatBtn.id = 'cs-theme-toggle';
            floatBtn.className = 'cs-theme-floating-toggle';
            floatBtn.addEventListener('click', () => window.CodeSavvyTheme.toggle());
            document.body.appendChild(floatBtn);
        }

        updateToggleBtns(window.CodeSavvyTheme.get());
    });
})();
