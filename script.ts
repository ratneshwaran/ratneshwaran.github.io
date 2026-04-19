/**
 * Site script — TypeScript source
 * Handles: footer year, service worker registration, scroll reveals
 *
 * Compiled to script.js (ES5-compatible, no build tools required at runtime).
 * To recompile: npx tsc script.ts --target ES5 --outFile script.js --strict
 */

(function (): void {
  'use strict';

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
