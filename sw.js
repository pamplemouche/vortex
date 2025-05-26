self.addEventListener('push', event =>
  {
    const notification = event.data.json();
    self.registration.showNotification(notification.title,{
      body: notification.message,
      icon: notification.icon,
    });
  });
self.addEventListener(notificationclick', event =>{
  event.notification.close();
  clients.openWindow('https://pamplemouche.github.io/vortex')
}
