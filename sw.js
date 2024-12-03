const CACHE_NAME = "portfolio-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/images/icon-192x192.png",
  "/images/icon-512x512.png"
];

// Instalación del service worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Archivos en caché.");
      return cache.addAll(urlsToCache);
    })
  );
});

// Activación del service worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Cache eliminado:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});

// Intercepción de solicitudes
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
