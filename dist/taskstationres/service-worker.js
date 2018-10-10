"use strict";
var precacheConfig = [["/index.html", "b8104aa959ebb8e901bdba50ef73e74f"], ["/static/css/main.65027555.css", "41e5e45b9b5d9ecaa09b72c11eed3386"], ["/static/js/main.c9820d38.js", "a427fe8ef27b1362e63c5dfd161e01e8"], ["/static/media/alert.f353d275.png", "f353d275bf378d532438a909748eb69d"], ["/static/media/arrowAndTarget.da781016.png", "da781016f6b04ffd3b450f5f585a23c0"], ["/static/media/backBtn.7a17c070.png", "7a17c0700eb731c49c667c6a592f5dc5"], ["/static/media/background2.f778cd34.jpg", "f778cd3475d799a5ad13d8308fe50912"], ["/static/media/background3.c0687541.jpg", "c0687541c92f04680f6c6490916a80b5"], ["/static/media/box2.959a9e53.png", "959a9e53dc15ffc91e0d6ca4df3a26a4"], ["/static/media/circleTick.f227cd34.png", "f227cd34ccae88172b1f97073b530423"], ["/static/media/closet.ba4c0838.png", "ba4c08383ca070bdaa396fdd308c0a0d"], ["/static/media/coins.a263af31.png", "a263af3114ac1580d8b40466f26eb624"], ["/static/media/continue.f8217421.png", "f8217421f5eefa58809be6989e18a17d"], ["/static/media/dimsum.0ec58893.png", "0ec588934952144a3e0cf04efec27fad"], ["/static/media/everydayMission.9a98e152.png", "9a98e152e6f5222e83cdf55cce1b8b9f"], ["/static/media/fruit.1e54f056.png", "1e54f056fed7af5f7d914e65fbf804ff"], ["/static/media/gameController.51bd73ab.png", "51bd73ab9eadfd8f98cfb25eefb0c480"], ["/static/media/goldenFish.a6ba13c9.png", "a6ba13c99fe39bd038f330bebd0c5f21"], ["/static/media/heartFace.e19c9883.png", "e19c9883504635d4fbeaab01be92a548"], ["/static/media/hint_contactNurse.dc9658ba.png", "dc9658ba2cede8ceb3d6635b6beffd09"], ["/static/media/hint_missionAccepted.4a236ba5.png", "4a236ba55ca8ac9b50b6351aa5ac3f54"], ["/static/media/hint_score.75d1a248.png", "75d1a24804295107a9ef3799a2cd0d84"], ["/static/media/howToLvUp.e1d6c5f6.png", "e1d6c5f627687e7e5c783ecc76b430ad"], ["/static/media/lastAndThisSeasonScore.581baa92.png", "581baa9242c8219ab8977fc266dedf2c"], ["/static/media/leftArrowCircle.fa81a890.png", "fa81a890d6bb08699b3f9d6db76aa7e6"], ["/static/media/logout.9f124023.png", "9f12402396c743008573ef11f53e7dd7"], ["/static/media/lvBlueDiamond.041bedc6.png", "041bedc6c64d595419ec1f62d9e9ed43"], ["/static/media/lvCopper.453da206.png", "453da206940f770605869e2bb0489207"], ["/static/media/lvGold.1cd64947.png", "1cd64947fa01a14533af1e7f0965da76"], ["/static/media/lvGreenCrystal.c5aa50b0.png", "c5aa50b01c656815a1af3c91143844e3"], ["/static/media/lvGreenJade.7e0ad6ec.png", "7e0ad6ec9391f5b269795300c165431d"], ["/static/media/lvIron.1e658d61.png", "1e658d616f1adbd9516406161c91c4d3"], ["/static/media/lvOrangeDiamond.678d71ae.png", "678d71aec577287c6fd3bbeb98d3e2ae"], ["/static/media/lvPinkCrystal.d1923960.png", "d19239608b81939016cfcbd1d14fde91"], ["/static/media/lvPurpleCrystal.f8a5a376.png", "f8a5a3769c6f7871faf349669cfe7018"], ["/static/media/lvPurpleDiamond.9cf66951.png", "9cf6695181fb7f19b875ef944fb926fe"], ["/static/media/lvRedDiamond.2e8265f1.png", "2e8265f16b9833b1afa519e8fa4611e2"], ["/static/media/lvRedJade.370aa6d3.png", "370aa6d3ec8c332550f116b901bddb69"], ["/static/media/lvSilver.a3ebe930.png", "a3ebe930a1be5ec7216f3e5ea4b47f75"], ["/static/media/lvWhiteDiamond.32f0f085.png", "32f0f0851f749caf276d2d143908c380"], ["/static/media/lvYellowJade.d6116db4.png", "d6116db4d1c662c2f528d3f09c2f7341"], ["/static/media/music.6d2e9430.png", "6d2e943074d43b02291c78c7cea2034a"], ["/static/media/nextMission.951ddbf2.png", "951ddbf2eda3e82dbd76baab2dcb2f7d"], ["/static/media/nfcEntryHint.9dff897a.png", "9dff897a593988c7e892f74ffb9a2759"], ["/static/media/nurse.b69f5aaf.png", "b69f5aaf801423af787b030dacc6738d"], ["/static/media/peopleIcon1.096e5e6c.png", "096e5e6c1bad3d4dd32c7130de6bb34b"], ["/static/media/peopleIcon2.eccf4e4e.png", "eccf4e4ec25f4246f741a485f4bdc3a7"], ["/static/media/peopleIcon3.ed975084.png", "ed975084dceaafcd4464acbc1028d87b"], ["/static/media/peopleIcon4.4eb71b42.png", "4eb71b421705d4aac48866a2045c49af"], ["/static/media/peoplePlayingSolitaire.88ccd064.png", "88ccd064c0f42408da54ffe0728eeee8"], ["/static/media/peopleTalkAboutWeather.b2a98e60.png", "b2a98e6098aaaa3feda613ba1a595538"], ["/static/media/peopleTalking.7258268a.png", "7258268af308a044e84bf01dd1be2ba4"], ["/static/media/peopleTalking2.fabc14a7.png", "fabc14a7d8c1cb0708d6a9ab1f06501f"], ["/static/media/personExesicing.acbc8672.png", "acbc86724de91f317a074a7bf5fe3478"], ["/static/media/personRaisingHand.11933cc5.png", "11933cc5305cac3085fc12c033886a30"], ["/static/media/personTakingSelfie.1a5239e5.png", "1a5239e5e12ecd30ad919befc47d886c"], ["/static/media/personUsingSkype.53488c90.png", "53488c90bac60d34d7f720b7aeeb2235"], ["/static/media/photo.141e110f.png", "141e110f19a088ee948caab64b7208b6"], ["/static/media/pinnedNote.75d28a4f.png", "75d28a4fb73dfb0f74683d7a17063432"], ["/static/media/rightArrowCircle.8fd1e345.png", "8fd1e3459f4d4960f04908350b06045a"], ["/static/media/scoreBlue.4c3f2411.png", "4c3f2411be3ea6b3332b9b031a372a9f"], ["/static/media/scoreIcon.d40dd224.png", "d40dd2241f6a2c43e05cc1bffb9a323d"], ["/static/media/scoreMissionScale1.c2c481c1.png", "c2c481c1aed06ee85ceec549624e5d9f"], ["/static/media/scoreMissionScale2.027f94db.png", "027f94dbc43b578e1f648d8c35453090"], ["/static/media/scoreOrange.94bff74f.png", "94bff74f3bd156182b76cd365ec46493"], ["/static/media/scorePink.7f88b9dd.png", "7f88b9dd17f48312ed382f1532d678ba"], ["/static/media/scorePurple.3ef6a2c4.png", "3ef6a2c469eef796180fd92efb99c2ff"], ["/static/media/scoreRecord.d0cf7aad.png", "d0cf7aadac135171a90e7c2cbf3a772e"], ["/static/media/scoreSky.bc0f8ec3.png", "bc0f8ec3d84b83b34f7ca384fb1d4e5f"], ["/static/media/scoreYellow.68335760.png", "68335760ee2d23cc3df272b635c55c19"], ["/static/media/shapes.96adbc58.png", "96adbc58915f46a73b77c37bfad8fd3d"], ["/static/media/slideShow.19c13c82.png", "19c13c82cb45328b3e3640aa074905af"], ["/static/media/startMission.ae5db9f7.png", "ae5db9f7edba6cc018c6696763d5668d"], ["/static/media/tShirt.30f91c3f.png", "30f91c3f50bf24cd80a05386fa97a5f5"], ["/static/media/titleBar.5ee04f83.png", "5ee04f83cd7c6b3c2e251ef604bc4724"], ["/static/media/weather.bf876f19.png", "bf876f1976cc86f183e77e5281417d12"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function addDirectoryIndex(e, a) {
  var c = new URL(e);return "/" === c.pathname.slice(-1) && (c.pathname += a), c.toString();
},
    cleanResponse = function cleanResponse(a) {
  return a.redirected ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function (e) {
    return new Response(e, { headers: a.headers, status: a.status, statusText: a.statusText });
  }) : Promise.resolve(a);
},
    createCacheKey = function createCacheKey(e, a, c, t) {
  var d = new URL(e);return t && d.pathname.match(t) || (d.search += (d.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(c)), d.toString();
},
    isPathWhitelisted = function isPathWhitelisted(e, a) {
  if (0 === e.length) return !0;var c = new URL(a).pathname;return e.some(function (e) {
    return c.match(e);
  });
},
    stripIgnoredUrlParameters = function stripIgnoredUrlParameters(e, c) {
  var a = new URL(e);return a.hash = "", a.search = a.search.slice(1).split("&").map(function (e) {
    return e.split("=");
  }).filter(function (a) {
    return c.every(function (e) {
      return !e.test(a[0]);
    });
  }).map(function (e) {
    return e.join("=");
  }).join("&"), a.toString();
},
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
  var a = e[0],
      c = e[1],
      t = new URL(a, self.location),
      d = createCacheKey(t, hashParamName, c, /\.\w{8}\./);return [t.toString(), d];
}));function setOfCachedUrls(e) {
  return e.keys().then(function (e) {
    return e.map(function (e) {
      return e.url;
    });
  }).then(function (e) {
    return new Set(e);
  });
}self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(cacheName).then(function (t) {
    return setOfCachedUrls(t).then(function (c) {
      return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (a) {
        if (!c.has(a)) {
          var e = new Request(a, { credentials: "same-origin" });return fetch(e).then(function (e) {
            if (!e.ok) throw new Error("Request for " + a + " returned a response with status " + e.status);return cleanResponse(e).then(function (e) {
              return t.put(a, e);
            });
          });
        }
      }));
    });
  }).then(function () {
    return self.skipWaiting();
  }));
}), self.addEventListener("activate", function (e) {
  var c = new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function (a) {
    return a.keys().then(function (e) {
      return Promise.all(e.map(function (e) {
        if (!c.has(e.url)) return a.delete(e);
      }));
    });
  }).then(function () {
    return self.clients.claim();
  }));
}), self.addEventListener("fetch", function (a) {
  if ("GET" === a.request.method) {
    var e,
        c = stripIgnoredUrlParameters(a.request.url, ignoreUrlParametersMatching),
        t = "index.html";(e = urlsToCacheKeys.has(c)) || (c = addDirectoryIndex(c, t), e = urlsToCacheKeys.has(c));var d = "/index.html";!e && "navigate" === a.request.mode && isPathWhitelisted(["^(?!\\/__).*"], a.request.url) && (c = new URL(d, self.location).toString(), e = urlsToCacheKeys.has(c)), e && a.respondWith(caches.open(cacheName).then(function (e) {
      return e.match(urlsToCacheKeys.get(c)).then(function (e) {
        if (e) return e;throw Error("The cached response that was expected is missing.");
      });
    }).catch(function (e) {
      return console.warn('Couldn\'t serve response for "%s" from cache: %O', a.request.url, e), fetch(a.request);
    }));
  }
});
//# sourceMappingURL=service-worker.js.map