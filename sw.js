//ServiceWorker File For Notifications!
self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://github.com/skenderl')
  );
});

//Add PWA
var cacheName = 'skender-lahdhiri';
var filesToCache = [
  '/',
  '/assets/fonts/neon-tube-wide.ttf',
  '/assets/imgs/favicon.png',
  '/index.html',
  '/resume.pdf',
  '/assets/layouts/index.css',
  '/assets/scripts/main.js',
  '/assets/scripts/push.js',
];
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(caches.match(e.request).then(function (response) {
    return response || fetch(e.request);
  })
  );
});
