const CACHE_NAME = 'clicktrauma-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/js/app.js',
  '/js/controllers.js',
  '/js/routes.js',
  '/backend-prototipo/perguntas.json',
  '/backend-prototipo/usuarios.json',
  '/templates/cadastro.html',
  '/templates/quiz.html',
  '/templates/resposta.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
