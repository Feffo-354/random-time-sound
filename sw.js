const CACHE_NAME = 'audio-player-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Installa il service worker e mette in cache le risorse della shell dell'app
 self.addEventListener('install', e => {
   e.waitUntil(
     caches.open(CACHE_NAME).then(cache => {
       return cache.addAll(ASSETS);
     })
   );
 });

// Rende l'applicazione disponibile offline
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
