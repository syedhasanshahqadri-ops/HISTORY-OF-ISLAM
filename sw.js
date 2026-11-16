/* History of Islam | service worker
   Caches the whole site (hub + all three archives) on first visit so that
   everything opens offline once the app is installed or has been opened once.

   WHEN YOU CHANGE ANY FILE: raise the number in VERSION below, so installed
   copies download the new files. If you add a new file, add it to CORE too. */
const VERSION = "history-of-islam-v1";

const CORE = [
 "css/style.css",
 "fonts/JameelNooriNastaleeq.woff",
 "fonts/Lora-italic-latin.woff",
 "fonts/Lora-latin.woff",
 "icons/icon-192.png",
 "icons/icon-512.png",
 "icons/icon-maskable-512.png",
 "images/apple-touch-icon.png",
 "images/favicon.png",
 "images/shs-logo.png",
 "index.html",
 "js/app.js",
 "manifest.webmanifest",
 "og/og-image.jpg",
 "ottoman-empire/README.md",
 "ottoman-empire/css/style.css",
 "ottoman-empire/images/ottoman-empire-og.jpg",
 "ottoman-empire/images/shs-logo.png",
 "ottoman-empire/index.html",
 "ottoman-empire/js/app.js",
 "ottoman-empire/js/data.js",
 "ottoman-empire/js/data2.js",
 "ottoman-empire/js/data3.js",
 "ottoman-empire/js/data4.js",
 "ottoman-empire/js/roster.js",
 "rashidun-caliphate/README.md",
 "rashidun-caliphate/css/style.css",
 "rashidun-caliphate/images/shs-logo.png",
 "rashidun-caliphate/index.html",
 "rashidun-caliphate/js/app.js",
 "rashidun-caliphate/js/data.js",
 "rashidun-caliphate/js/roster.js",
 "umayyad-caliphate/README.md",
 "umayyad-caliphate/css/style.css",
 "umayyad-caliphate/images/shs-logo.png",
 "umayyad-caliphate/index.html",
 "umayyad-caliphate/js/app.js",
 "umayyad-caliphate/js/data.js",
 "umayyad-caliphate/js/roster.js"
];

/* The archives load these Google fonts; we keep a copy for offline use (best effort). */
const FONT_CSS = [
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Lora:wght@400;600&family=Noto+Nastaliq+Urdu:wght@400;600&display=swap"
];

/* Folder addresses must resolve to their index.html when offline. */
const FOLDERS = ["./", "rashidun-caliphate/", "umayyad-caliphate/", "ottoman-empire/"];

self.addEventListener("install", function (event) {
  event.waitUntil((async function () {
    const cache = await caches.open(VERSION);
    await cache.addAll(CORE.map(function (u) { return new Request(u, { cache: "reload" }); }));
    for (const f of FOLDERS) {
      const hit = await cache.match(new URL(f + "index.html", self.registration.scope).href);
      if (hit) await cache.put(new URL(f, self.registration.scope).href, hit.clone());
    }
    for (const css of FONT_CSS) {
      try {
        const res = await fetch(css);
        if (!res.ok) continue;
        await cache.put(css, res.clone());
        const text = await res.text();
        const urls = Array.from(text.matchAll(/url\((https:[^)]+)\)/g)).map(function (m) { return m[1]; });
        await Promise.all(urls.map(function (u) {
          return fetch(u).then(function (r) { if (r.ok) return cache.put(u, r); }).catch(function () {});
        }));
      } catch (e) { /* offline during install: fonts fall back to system fonts */ }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    const names = await caches.keys();
    await Promise.all(names.filter(function (n) { return n.indexOf("history-of-islam-") === 0 && n !== VERSION; })
      .map(function (n) { return caches.delete(n); }));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const same = url.origin === self.location.origin;
  const font = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!same && !font) return;

  event.respondWith((async function () {
    const cache = await caches.open(VERSION);
    let hit = await cache.match(req, { ignoreSearch: same });
    if (hit) return hit;

    if (req.mode === "navigate" && same) {
      const path = url.pathname.endsWith("/") ? url.pathname + "index.html" : url.pathname;
      hit = await cache.match(new URL(path, url.origin).href);
      if (hit) return hit;
    }
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
      return res;
    } catch (err) {
      if (req.mode === "navigate") {
        const home = await cache.match(new URL("index.html", self.registration.scope).href);
        if (home) return home;
      }
      return new Response("Offline", { status: 503, statusText: "Offline" });
    }
  })());
});
