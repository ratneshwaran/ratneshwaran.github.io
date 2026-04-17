/**
 * Site script — TypeScript source
 * Handles: dark/light theme toggle, footer year, service worker registration, scroll reveals
 *
 * Compiled to script.js (ES5-compatible, no build tools required at runtime).
 * To recompile: npx tsc script.ts --target ES5 --outFile script.js --strict
 */

(function (): void {
  'use strict';

  type Theme = 'light' | 'dark';

  const root: HTMLElement = document.documentElement;
  const toggle = document.getElementById('theme-toggle') as HTMLButtonElement | null;
  const STORAGE_KEY = 'theme-preference';

  function getPreference(): Theme {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme: Theme): void {
    root.setAttribute('data-theme', theme);
    toggle?.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  function flipTheme(): void {
    const current = (root.getAttribute('data-theme') as Theme) ?? getPreference();
    const next: Theme = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply saved/system theme immediately (before paint)
  applyTheme(getPreference());
  toggle?.addEventListener('click', flipTheme);

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl != null) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Register service worker for offline/low-bandwidth support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', (): void => {
      navigator.serviceWorker.register('./service-worker.js').catch((): void => {
        // Silent fail — service worker is a progressive enhancement
      });
    });
  }

  // Scroll reveal animation
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]): void => {
        entries.forEach((entry: IntersectionObserverEntry): void => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el: Element): void => {
      revealObserver.observe(el);
    });
  } else {
    reveals.forEach((el: Element): void => {
      el.classList.add('visible');
    });
  }
})();
