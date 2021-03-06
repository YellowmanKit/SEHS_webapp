"use strict";
var precacheConfig = [["/index.html", "56f6c6becf7b4b686328a0bcb333b6db"], ["/static/css/main.efac1c69.css", "d85a7e8bb43289dd6ff716dcf56a15c3"], ["/static/js/main.981ff6bc.js", "a9ef66fcde6eebc10cdc72c3c86afb11"], ["/static/media/bedsideassistance_loginbg.5fa2b595.png", "5fa2b595633bf72aa0d5eba9fab24cb0"], ["/static/media/bg.8cf9f78d.png", "8cf9f78d6bb9660ab483d785198bb520"], ["/static/media/login_failed_message.78fe136d.png", "78fe136dfa5ec6fbe7a7d74709597c64"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function addDirectoryIndex(e, t) {
  var n = new URL(e);return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString();
},
    cleanResponse = function cleanResponse(e) {
  return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function (t) {
    return new Response(t, { headers: e.headers, status: e.status, statusText: e.statusText });
  }) : Promise.resolve(e);
},
    createCacheKey = function createCacheKey(e, t, n, r) {
  var a = new URL(e);return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString();
},
    isPathWhitelisted = function isPathWhitelisted(e, t) {
  if (0 === e.length) return !0;var n = new URL(t).pathname;return e.some(function (e) {
    return n.match(e);
  });
},
    stripIgnoredUrlParameters = function stripIgnoredUrlParameters(e, t) {
  var n = new URL(e);return n.hash = "", n.search = n.search.slice(1).split("&").map(function (e) {
    return e.split("=");
  }).filter(function (e) {
    return t.every(function (t) {
      return !t.test(e[0]);
    });
  }).map(function (e) {
    return e.join("=");
  }).join("&"), n.toString();
},
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
  var t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);return [r.toString(), a];
}));function setOfCachedUrls(e) {
  return e.keys().then(function (e) {
    return e.map(function (e) {
      return e.url;
    });
  }).then(function (e) {
    return new Set(e);
  });
}self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(function (e) {
    return setOfCachedUrls(e).then(function (t) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (n) {
        if (!t.has(n)) {
          var r = new Request(n, { credentials: "same-origin" });return fetch(r).then(function (t) {
            if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);return cleanResponse(t).then(function (t) {
              return e.put(n, t);
            });
          });
        }
      }));
    });
  }).then(function () {
    return self.skipWaiting();
  }));
}), self.addEventListener("activate", function (e) {
  var t = new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function (e) {
    return e.keys().then(function (n) {
      return Promise.all(n.map(function (n) {
        if (!t.has(n.url)) return e.delete(n);
      }));
    });
  }).then(function () {
    return self.clients.claim();
  }));
}), self.addEventListener("fetch", function (e) {
  if ("GET" === e.request.method) {
    var t,
        n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching),
        r = "index.html";(t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, r), t = urlsToCacheKeys.has(n));var a = "/index.html";!t && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (n = new URL(a, self.location).toString(), t = urlsToCacheKeys.has(n)), t && e.respondWith(caches.open(cacheName).then(function (e) {
      return e.match(urlsToCacheKeys.get(n)).then(function (e) {
        if (e) return e;throw Error("The cached response that was expected is missing.");
      });
    }).catch(function (t) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request);
    }));
  }
});
//# sourceMappingURL=service-worker.js.map