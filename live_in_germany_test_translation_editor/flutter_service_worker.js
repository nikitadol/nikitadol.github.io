'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ab22022ba77911912a7b33a40965491d",
"index.html": "d86c9afd7682f311004e272f1a92f708",
"/": "d86c9afd7682f311004e272f1a92f708",
"main.dart.js": "6cf156341559f4bf6aba4d6a115d017d",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8d2b16c692fb938ef12d718c33bf7656",
"main.dart.js_1.part.js": "c735a076da77fa1ef0ba2e9ae34f1cbd",
"drift_worker.dart.js": "595fdbe03561e208d449ab4cace94121",
"assets/AssetManifest.json": "ce5bc3dde442e026b3f3cdf6a93573f2",
"assets/NOTICES": "3b60659b49fa972ff5340a69b955a77c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/live_in_germany_test/assets/images/original_img_48": "e525f013d2860956f751f934ab61225b",
"assets/packages/live_in_germany_test/assets/images/original_img_41": "b0b3e73c57f28e186a3d11307ddd10ed",
"assets/packages/live_in_germany_test/assets/images/original_img_46": "78de377a2f899459beff42c8f2df261f",
"assets/packages/live_in_germany_test/assets/images/original_img_12": "475cc3e589b60423d1ec51872f10bf8b",
"assets/packages/live_in_germany_test/assets/images/original_img_15": "0eb43c2e179f7339a3aa93d343d2a2bf",
"assets/packages/live_in_germany_test/assets/images/original_img_23": "019c297c2fd94f424e137ba3f7d518be",
"assets/packages/live_in_germany_test/assets/images/original_img_24": "3041ebd159fa845f2c77ac7ef3c68354",
"assets/packages/live_in_germany_test/assets/images/original_img_47": "b692eea3834aaf68b0f4695a3678f7d9",
"assets/packages/live_in_germany_test/assets/images/original_img_40": "25b05d115bc399c99a98891f7d2b4b41",
"assets/packages/live_in_germany_test/assets/images/original_img_49": "3eedb23e63f86cb6bb68da67bead08af",
"assets/packages/live_in_germany_test/assets/images/original_img_25": "8db92c80492f2c15ecc0f1885c3eff3b",
"assets/packages/live_in_germany_test/assets/images/original_img_22": "c5432f5e19241063dcce637b613b8310",
"assets/packages/live_in_germany_test/assets/images/original_img_14": "53b6e493ca0559a97e7cf2f7cf8afa34",
"assets/packages/live_in_germany_test/assets/images/original_img_13": "3a07f79e833000f5daf50917bd2cb933",
"assets/packages/live_in_germany_test/assets/images/original_img_8": "df21d1df36dc25e9270ef33c2a681c7a",
"assets/packages/live_in_germany_test/assets/images/original_img_1": "7c2f4f638055b682302f036df05f9652",
"assets/packages/live_in_germany_test/assets/images/original_img_6": "9b87ff155e415997355ae9ffd2489a97",
"assets/packages/live_in_germany_test/assets/images/original_img_7": "2b3a76cdebe33b6a54c3c29dd89cbb5d",
"assets/packages/live_in_germany_test/assets/images/original_img_9": "ba6078289881172b46d3c80cc0452974",
"assets/packages/live_in_germany_test/assets/images/original_img_31": "2f2d1b3c9ae818bdb4c91e4e6888bf60",
"assets/packages/live_in_germany_test/assets/images/original_img_36": "828645477892a8495a46ecd524bfe623",
"assets/packages/live_in_germany_test/assets/images/original_img_38": "212fd8343801e86ddbb0b20df08c79c7",
"assets/packages/live_in_germany_test/assets/images/original_img_53": "a35b72c168381e868f5845e4fb9df83c",
"assets/packages/live_in_germany_test/assets/images/original_img_54": "fc16ec644277bb6409c0755aff6533e1",
"assets/packages/live_in_germany_test/assets/images/original_img_39": "e8a54eecaa40027c13ff7c8529336db7",
"assets/packages/live_in_germany_test/assets/images/original_img_37": "54888ccedd7e6ef751eb9ed97d419d67",
"assets/packages/live_in_germany_test/assets/images/original_img_30": "10788a02766779f60e911104ac89fbb4",
"assets/packages/live_in_germany_test/assets/images/original_img_55": "69cee3ff8a28f4890f326fe8a204dd0b",
"assets/packages/live_in_germany_test/assets/images/original_img_52": "4554923bb5ac366427906fab6cf7e7b3",
"assets/packages/live_in_germany_test/assets/images/original_img_16": "93a6bdaacff9a8999ae034c50f799508",
"assets/packages/live_in_germany_test/assets/images/original_img_29": "df2e75b1a2d20a63e5ec7c804a180f56",
"assets/packages/live_in_germany_test/assets/images/original_img_11": "a29c41745b036669e48ba77b9e89e386",
"assets/packages/live_in_germany_test/assets/images/original_img_27": "0cff3726cb5e8539c101bdc3b9308aa1",
"assets/packages/live_in_germany_test/assets/images/original_img_18": "6d2bb1e2b842dc559f16b3a061d19987",
"assets/packages/live_in_germany_test/assets/images/original_img_20": "fc14591566b26566ccf814eb182adb76",
"assets/packages/live_in_germany_test/assets/images/original_img_45": "8ecfcec91c1b9e84dfdebb6bca46d73e",
"assets/packages/live_in_germany_test/assets/images/original_img_42": "403abb3dd4686fc244c7241b33cdcb27",
"assets/packages/live_in_germany_test/assets/images/original_img_21": "b8d6ad9a727c57b53697f6caa1904155",
"assets/packages/live_in_germany_test/assets/images/original_img_26": "27e48ad10107ac5303ef503a4ce24fe4",
"assets/packages/live_in_germany_test/assets/images/original_img_19": "0b253938d78bb625539006b72fec3582",
"assets/packages/live_in_germany_test/assets/images/original_img_10": "212ddde300d78e68793d8b689f9cec0e",
"assets/packages/live_in_germany_test/assets/images/original_img_17": "02bda25ef442d292e0ef19a0c3b690fb",
"assets/packages/live_in_germany_test/assets/images/original_img_28": "5918133e25f8d2fbc1b2d0b8eb659403",
"assets/packages/live_in_germany_test/assets/images/original_img_43": "43ed6fd116f68d001df8021446d912bc",
"assets/packages/live_in_germany_test/assets/images/original_img_44": "f51326c71e9800d19481cdeecab4984c",
"assets/packages/live_in_germany_test/assets/images/original_img_5": "974a20e88f727f5aee45bed1e8dd8597",
"assets/packages/live_in_germany_test/assets/images/original_img_2": "eb2ffb9d6cc82ca8d8463ce62efc1c68",
"assets/packages/live_in_germany_test/assets/images/original_img_3": "570668060e588d4ee5e39cdcf105c2da",
"assets/packages/live_in_germany_test/assets/images/original_img_4": "31790eaa8cd0fec1939dcbd1f0766a38",
"assets/packages/live_in_germany_test/assets/images/original_img_50": "eea7e3162af1cfc71b4be5befbd4e1b7",
"assets/packages/live_in_germany_test/assets/images/original_img_35": "d388ea7c3d5ae1319b52583c90620a1b",
"assets/packages/live_in_germany_test/assets/images/original_img_32": "1808942e4e44d6713f24bf2624132f58",
"assets/packages/live_in_germany_test/assets/images/original_img_51": "3caf5fcd4c3d994810342245adb776ed",
"assets/packages/live_in_germany_test/assets/images/original_img_33": "5e5581493f7ee6db7e86cf3ccc1f7a14",
"assets/packages/live_in_germany_test/assets/images/original_img_34": "c712a8fe8e4bf31637b21096fecbe0e3",
"assets/packages/live_in_germany_test/assets/raw/app_db": "ff72ff8001140e99cbae6d7316f71517",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "1a71e4370f15d83ee1a0c852ea24abed",
"assets/fonts/MaterialIcons-Regular.otf": "d901bc47fbe281d6766d73d235c59189",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
