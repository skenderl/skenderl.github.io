const timestamp = new Date().getTime() + 5 * 1000;
if (Notification.permission == 'default') {
  Notification.requestPermission(function (result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function (registration) {
        registration.showNotification('Skender Lahdhiri', {
          body: 'Notifications Accepted!',
          icon: 'https://avatars0.githubusercontent.com/u/44686277',
          image: 'https://avatars0.githubusercontent.com/u/44686277',
          badge: 'https://avatars0.githubusercontent.com/u/44686277',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: timestamp,
          renotify: true,
          timestamp: timestamp,
          data: {
            dateOfArrival: timestamp,
            url: window.location.href
          }
        });
      });
    }
  });
}
else if (Notification.permission == 'granted') {
  navigator.serviceWorker.ready.then(function (registration) {
    registration.showNotification('Skender Lahdhiri', {
      body: "Boom shakalaka, here comes another notification !\n" + new Date().toLocaleTimeString(),
      icon: 'https://avatars0.githubusercontent.com/u/44686277',
      image: 'https://avatars0.githubusercontent.com/u/44686277',
      badge: 'https://avatars0.githubusercontent.com/u/44686277',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: timestamp,
      renotify: true,
      timestamp: timestamp,
      data: {
        dateOfArrival: timestamp,
        url: window.location.href
      }
    });
  });
}
