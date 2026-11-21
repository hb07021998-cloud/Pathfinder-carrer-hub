'use strict';
const CACHE_NAME = 'pathfinder-career-hub-v23';
const BASE = new URL('./', self.registration.scope);
const APP_SHELL = [
  new URL('./', BASE).href,
  new URL('./index.html', BASE).href,
  new URL('./manifest.webmanifest', BASE).href,
  new URL('./privacy-policy.html', BASE).href,
  new URL('./icons/icon-192.png', BASE).href,
  new URL('./icons/icon-512.png', BASE).href,
  new URL('./icons/icon-512-maskable.png', BASE).href
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('pathfinder-career-hub-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response && response.ok) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
    }
    return response;
  }).catch(() => caches.match(new URL('./index.html', BASE).href))));
});
