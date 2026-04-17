/**
 * Site script — compiled from script.ts (ES5-compatible)
 * Handles: dark/light theme toggle, footer year, service worker registration, scroll reveals
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');
  var STORAGE_KEY = 'theme-preference';

  function getPreference() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (toggle) toggle.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  function flipTheme() {
    var current = root.getAttribute('data-theme') || getPreference();
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  }

  // Apply saved/system theme immediately (before paint)
  applyTheme(getPreference());
  if (toggle) toggle.addEventListener('click', flipTheme);

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl != null) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Register service worker for offline/low-bandwidth support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./service-worker.js').catch(function () {
        // Silent fail — service worker is a progressive enhancement
      });
    });
  }

  // Scroll reveal animation
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    for (var i = 0; i < reveals.length; i++) {
      revealObserver.observe(reveals[i]);
    }
  } else {
    for (var j = 0; j < reveals.length; j++) {
      reveals[j].classList.add('visible');
    }
  }
})();
