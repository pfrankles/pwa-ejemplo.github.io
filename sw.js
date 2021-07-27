var chacheName = "holamundo-pwa";
var fileToCache = ["/", "/index.html", "/css/style.css", "js/main.js"];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(chacheName).then(function (cache) {
      return cache.addAll(fileToCache);
    })
  );
});

self.addEventListener("fecth", function (e) {
  e.responseWith(
    caches.match(e.request).then(function (response) {
      return response || e.fetch(e.request);
    })
  );
});