/* Retire the previous Serwist worker. */
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 await Promise.all((await caches.keys()).map(key=>caches.delete(key)));
 await self.registration.unregister();
 const windows=await self.clients.matchAll({type:'window'});
 await Promise.all(windows.map(client=>client.navigate(client.url)));
})()));
