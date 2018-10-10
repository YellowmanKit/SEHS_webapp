"use strict";
var precacheConfig = [["/index.html", "a07057cbe19cfd5f832cb52130d8b306"], ["/static/css/main.c161d6f6.css", "85fbd8acb075230f7b3049dda12f795e"], ["/static/js/main.e2297000.js", "eace191adf44422a749cc7c2f9043ee5"], ["/static/media/FAC003.d90e716f.png", "d90e716f8e8b7c15e45e11f8ddc3b66b"], ["/static/media/FAC009.ea66a45a.png", "ea66a45a2d809fef18ebfb4b54e10b59"], ["/static/media/FAC010.bf7e47c9.png", "bf7e47c9d479018d6595a39f6dbb7ceb"], ["/static/media/FAC011.60fa2480.png", "60fa248045890ca7a7f617a7fd0b1880"], ["/static/media/FAC032.883ea806.png", "883ea806ee3afd153d89d8b0ae2fc4bc"], ["/static/media/FAL001.0a6ecc1a.png", "0a6ecc1ace4984b0ff10059791f14296"], ["/static/media/activity_icon.bf54e7d4.png", "bf54e7d44bd5eaa4f53c04c07b4943d2"], ["/static/media/favicon.620c9343.ico", "620c9343cae80488d8f5854ce59c7ef4"], ["/static/media/meal_icon.16969440.png", "1696944093e7a76618734b8c358a0103"], ["/static/media/photo_icon.2196a338.png", "2196a338e6aa4157f3dd6461dccacd55"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function addDirectoryIndex(e, t) {
  var n = new URL(e);return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
},
    cleanResponse = function cleanResponse(t) {
  return t.redirected ? ("body" in t ? Promise.resolve(t.body) : t.blob()).then(function (e) {
    return new Response(e, { headers: t.headers, status: t.status, statusText: t.statusText });
  }) : Promise.resolve(t);
},
    createCacheKey = function createCacheKey(e, t, n, a) {
  var r = new URL(e);return a && r.pathname.match(a) || (r.search += (r.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), r.toString();
},
    isPathWhitelisted = function isPathWhitelisted(e, t) {
  if (0 === e.length) return !0;var n = new URL(t).pathname;return e.some(function (e) {
    return n.match(e);
  });
},
    stripIgnoredUrlParameters = function stripIgnoredUrlParameters(e, n) {
  var t = new URL(e);return t.hash = "", t.search = t.search.slice(1).split("&").map(function (e) {
    return e.split("=");
  }).filter(function (t) {
    return n.every(function (e) {
      return !e.test(t[0]);
    });
  }).map(function (e) {
    return e.join("=");
  }).join("&"), t.toString();
},
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
  var t = e[0],
      n = e[1],
      a = new URL(t, self.location),
      r = createCacheKey(a, hashParamName, n, /\.\w{8}\./);return [a.toString(), r];
}));function setOfCachedUrls(e) {
  return e.keys().then(function (e) {
    return e.map(function (e) {
      return e.url;
    });
  }).then(function (e) {
    return new Set(e);
  });
}self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(function (a) {
    return setOfCachedUrls(a).then(function (n) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (t) {
        if (!n.has(t)) {
          var e = new Request(t, { credentials: "same-origin" });return fetch(e).then(function (e) {
            if (!e.ok) throw new Error("Request for " + t + " returned a response with status " + e.status);return cleanResponse(e).then(function (e) {
              return a.put(t, e);
            });
          });
        }
      }));
    });
  }).then(function () {
    return self.skipWaiting();
  }));
}), self.addEventListener("activate", function (e) {
  var n = new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function (t) {
    return t.keys().then(function (e) {
      return Promise.all(e.map(function (e) {
        if (!n.has(e.url)) return t.delete(e);
      }));
    });
  }).then(function () {
    return self.clients.claim();
  }));
}), self.addEventListener("fetch", function (t) {
  if ("GET" === t.request.method) {
    var e,
        n = stripIgnoredUrlParameters(t.request.url, ignoreUrlParametersMatching),
        a = "index.html";(e = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, a), e = urlsToCacheKeys.has(n));var r = "/index.html";!e && "navigate" === t.request.mode && isPathWhitelisted(["^(?!\\/__).*"], t.request.url) && (n = new URL(r, self.location).toString(), e = urlsToCacheKeys.has(n)), e && t.respondWith(caches.open(cacheName).then(function (e) {
      return e.match(urlsToCacheKeys.get(n)).then(function (e) {
        if (e) return e;throw Error("The cached response that was expected is missing.");
      });
    }).catch(function (e) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', t.request.url, e), fetch(t.request);
    }));
  }
});
//# sourceMappingURL=service-worker.js.map