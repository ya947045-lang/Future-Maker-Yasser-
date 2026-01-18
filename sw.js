
self.addEventListener('install',e=>{
 e.waitUntil(
  caches.open('fm-cache').then(c=>c.addAll([
   'index.html','projects.html','css/style.css','js/script.js'
  ]))
 );
});
self.addEventListener('fetch',e=>{
 e.respondWith(
  caches.match(e.request).then(r=>r||fetch(e.request))
 );
});
