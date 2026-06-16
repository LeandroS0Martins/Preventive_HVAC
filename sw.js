const CACHE_NAME = 'hvac-preventiva-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './jspdf.umd.min.js',
  './icons/icon-192x192.png',
  './icons/icon-512x512.png'
];

// Instalação do Service Worker e cache dos arquivos
self.addEventListener('install', (event) => {
  console.log('Service Worker v2 instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Cache v2 criado');
      return cache.addAll(ASSETS);
    }).catch(err => console.error('Erro ao cachear:', err))
  );
  self.skipWaiting(); // Força ativação imediata
});

// Ativação e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  console.log('Service Worker v2 ativando...');
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => {
          console.log('Deletando cache antigo:', key);
          return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim(); // Toma controle imediato de todas as abas
});

// Estratégia de Cache: Network First, falling back to Cache
// Isso garante que o navegador sempre tente buscar a versão mais nova
self.addEventListener('fetch', (event) => {
  // Ignora requisições não-GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se conseguiu buscar da internet, salva no cache
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // Se não conseguiu buscar da internet, usa o cache
        return caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || new Response('Offline - arquivo não encontrado', {
            status: 503,
            statusText: 'Service Unavailable',
            headers: new Headers({
              'Content-Type': 'text/plain'
            })
          });
        });
      })
  );
});
