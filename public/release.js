/* Retire the previous PWA cache; contact drafts and consent storage are retained. */
(()=>{
 if(!('serviceWorker' in navigator))return;
 navigator.serviceWorker.getRegistrations().then(async registrations=>{
  for(const registration of registrations)await registration.unregister();
  if(registrations.length&&'caches' in window){const keys=await caches.keys();await Promise.all(keys.map(key=>caches.delete(key)));}
 }).catch(()=>{});
})();
