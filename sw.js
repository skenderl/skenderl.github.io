//ServiceWorker File For Notifications!
self.addEventListener('notificationclick', function (event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://github.com/skenderl')
  );
});

//Add PWA
var cacheName = 'skenderl-cache';
var filesToCache = [
  '/',
  '/resume.pdf',
  '/index.html',
  '/experience.html',
  '/about.html',

  '/assets/layouts/index.css',
  '/assets/layouts/home.css',
  '/assets/layouts/experience.css',
  '/assets/layouts/about.css',

  '/assets/fonts/neon-tube-wide.ttf',

  '/assets/imgs/socials/email.svg',
  '/assets/imgs/socials/github.svg',
  '/assets/imgs/socials/linkedin.svg',
  '/assets/imgs/socials/play_store.svg',
  '/assets/imgs/socials/resume.svg',

  '/assets/imgs/favicon.png',
  '/assets/imgs/512x512.png',
  '/assets/imgs/maskable_icon.png',

  '/assets/scripts/main.js',
  '/assets/scripts/push.js',

  'https://simpleicons.org/icons/flutter.svg',
  'https://simpleicons.org/icons/firebase.svg',
  'https://simpleicons.org/icons/php.svg',
  'https://simpleicons.org/icons/bootstrap.svg',
  'https://simpleicons.org/icons/css3.svg',
  'https://simpleicons.org/icons/deno.svg',
  'https://simpleicons.org/icons/nodedotjs.svg',
  'https://simpleicons.org/icons/mongodb.svg',
  'https://simpleicons.org/icons/express.svg',
  'https://simpleicons.org/icons/typescript.svg',
  'https://simpleicons.org/icons/react.svg',
  'https://simpleicons.org/icons/tailwindcss.svg',
  'https://simpleicons.org/icons/i18next.svg',
  'https://simpleicons.org/icons/sentry.svg',
  'https://simpleicons.org/icons/codemagic.svg',
  'https://simpleicons.org/icons/antdesign.svg',
  'https://simpleicons.org/icons/leaflet.svg',
  'https://simpleicons.org/icons/swagger.svg',
  'https://simpleicons.org/icons/jest.svg',
  'https://simpleicons.org/icons/mocha.svg',
  'https://simpleicons.org/icons/docker.svg',
  'https://simpleicons.org/icons/android.svg',
  'https://simpleicons.org/icons/kotlin.svg',
  'https://simpleicons.org/icons/django.svg',
  'https://simpleicons.org/icons/jquery.svg',
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
