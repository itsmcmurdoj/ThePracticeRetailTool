/**
 * THE PRACTICE • SERVICE WORKER (sw.js)
 * High-reliability fleet caching for iPad POS & 3D Showroom Digital Twin
 * Implements Network-First for catalog data (products.js) to guarantee instant fleet sync
 */

const CACHE_NAME = 'the-practice-retail-v23-cafe-modifiers-rocksolid';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './products.js',
  './product_embeddings.js',
  './manifest.json',
  './icon.png',
  './icon-192.png',
  './apple-touch-icon.png',
  './assets/the_practice_logo.png',
  './assets/the_practice_symbol.png',
  './assets/apple-touch-icon.png',
  './assets/optima-regular.woff2',
  './assets/optima-regular.woff'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Caching app shell...');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Network-First for products.js and HTML documents to guarantee instant catalog sync
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // Catalog data, scripts, or main document: Network first, fallback to cache
  if (url.includes('products.js') || url.includes('widget.js') || url.includes('app.js') || event.request.mode === 'navigate' || url.endsWith('/') || url.includes('index.html')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // All other assets: Cache first, background revalidate
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  if (event.data === 'PURGE_CACHES') {
    caches.keys().then((keys) => Promise.all(keys.map((k) => caches.delete(k))));
  }
});
