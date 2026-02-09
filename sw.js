const CACHE_NAME = 'budget-v1';

self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // Logic for offline support can be added here
  event.respondWith(fetch(event.request));
});