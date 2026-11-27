// 오프라인에서도 열리도록 캐시. 내용을 고치면 VERSION 숫자를 올리세요.
const VERSION = 'v10';
const FILES = ['./', 'index.html', 'styles.css?v=9', 'data.js?v=4', 'app.js?v=6', 'manifest.webmanifest',
  'apple-touch-icon.png', 'icon-192.png', 'icon-512.png', 'toeic.js?v=7'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// 네트워크 우선 → 실패하면 캐시 (업데이트가 바로 반영되도록)
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./')))
  );
});
