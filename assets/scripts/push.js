var d = new Date();
var n = d.toLocaleTimeString();
if(Notification.permission == 'default' ) {
Notification.requestPermission(function(result) {
    if (result === 'granted') {
      navigator.serviceWorker.ready.then(function(registration) {
        registration.showNotification('Skender Lahdhiri', {
          body: 'Notifications Accepted!',
          icon: 'https://avatars0.githubusercontent.com/u/44686277',
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: 'vibration-sample',
          data: {
          dateOfArrival: Date.now(),
          primaryKey: 1
        }
        });
      });
    }
  }); }
  else if(Notification.permission == 'granted' ) {
    navigator.serviceWorker.ready.then(function(registration) {
      registration.showNotification('Skender Lahdhiri', {
        body: 'Welcome ! '.concat(n),
        icon: 'https://avatars0.githubusercontent.com/u/44686277',
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: 'vibration-sample',
        data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
      });
    });
  }
