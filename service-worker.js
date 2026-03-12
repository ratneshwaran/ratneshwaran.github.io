/**
 * Service Worker — Cache-first strategy for offline / low-bandwidth resilience
 * Precaches core assets on install; serves from cache when available,
 * falls back to network and caches new responses.
 */

var CACHE_NAME = 'ratnesh-site-v1';

// Core assets to precache on install (keep small — PDF is large, fetched on demand)
var PRECACHE_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  // Activate immediately without waiting for existing tabs to close
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  // Remove old cache versions
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  // Only intercept GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(function (cached) {
      // Serve from cache if available
      if (cached) return cached;

      // Otherwise fetch from network and cache the response
      return fetch(event.request).then(function (response) {
        // Only cache valid same-origin responses
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        var responseToCache = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(function () {
        // If offline and not cached, return a minimal offline fallback
        if (event.request.headers.get('accept') &&
            event.request.headers.get('accept').indexOf('text/html') !== -1) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
