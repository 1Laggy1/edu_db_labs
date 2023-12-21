/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b4097e34bc9cfab310784751bff69dbd"
  },
  {
    "url": "assets/css/0.styles.198b48a5.css",
    "revision": "a437869e21ce82a51633cd4021cbdf45"
  },
  {
    "url": "assets/img/Delete2.9251e9f5.png",
    "revision": "9251e9f56afd5ace1ef6af0fbc11c055"
  },
  {
    "url": "assets/img/Get2.3e0dc619.png",
    "revision": "3e0dc619839ab30726580f6fb7ec76f2"
  },
  {
    "url": "assets/img/Patch1.faee0de9.png",
    "revision": "faee0de94cd765d133f8dda735465c47"
  },
  {
    "url": "assets/img/Patch2.46d0b997.png",
    "revision": "46d0b997b7d82af2e42e7669c4b43095"
  },
  {
    "url": "assets/img/Post1.d148825e.png",
    "revision": "d148825e019de3715af55a8cb0296e19"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e4a28a40.js",
    "revision": "80aaab96ad6ab18e96d46461012d792c"
  },
  {
    "url": "assets/js/11.cd73acb7.js",
    "revision": "a1f338796abe60033184676c021a7852"
  },
  {
    "url": "assets/js/12.affbcd87.js",
    "revision": "6806e487ff88cbbae142fc792354a053"
  },
  {
    "url": "assets/js/13.c3079998.js",
    "revision": "9f9bd739a9d8d0067147c9442d98840a"
  },
  {
    "url": "assets/js/14.d49e5e6c.js",
    "revision": "ff626dbe852c426ef8efa396749586a1"
  },
  {
    "url": "assets/js/15.e95cea43.js",
    "revision": "c94694e6e1fc16111b405a0051bb6b46"
  },
  {
    "url": "assets/js/16.789669b8.js",
    "revision": "2ae4b4a2ba92fc15ac6d9b8019faaf6d"
  },
  {
    "url": "assets/js/17.1babde77.js",
    "revision": "977e72fb43e44fba0014862f4a5fa46c"
  },
  {
    "url": "assets/js/18.efe82e0f.js",
    "revision": "2c896d80801f3ffd30e4d8540b6198ff"
  },
  {
    "url": "assets/js/19.4bc6ea83.js",
    "revision": "d947a11f262b741db97581a23d41db4f"
  },
  {
    "url": "assets/js/2.7fad78fe.js",
    "revision": "25d972c91c77d23008ccf680a05c3d7a"
  },
  {
    "url": "assets/js/20.06c065f7.js",
    "revision": "8071275dc3a0de23cc992b688839edf0"
  },
  {
    "url": "assets/js/21.8b94622b.js",
    "revision": "e19e57e0ae9bcd25ee3a467f57027600"
  },
  {
    "url": "assets/js/22.b6531c1e.js",
    "revision": "bdcc5c54f7474d5b3f24c720bc8ae6d3"
  },
  {
    "url": "assets/js/23.00d8ce8d.js",
    "revision": "e73f27956682797477971be40bd74187"
  },
  {
    "url": "assets/js/24.3e8002e9.js",
    "revision": "80be309cafc9307caf42040b07ddc325"
  },
  {
    "url": "assets/js/26.e9b62908.js",
    "revision": "2325aeb3d4dd0e62a5f55331cd0e812f"
  },
  {
    "url": "assets/js/3.340d50e3.js",
    "revision": "125b3a8f0b592cf937777def387bd838"
  },
  {
    "url": "assets/js/4.6efec927.js",
    "revision": "a5635cfd08f1bd732f118aeb604774a2"
  },
  {
    "url": "assets/js/5.f1459669.js",
    "revision": "adf26fb7b36ed36e6f91a2bf61ee9257"
  },
  {
    "url": "assets/js/6.67987de7.js",
    "revision": "f71ff5ed3cc8e022cbd84b7db7928cf2"
  },
  {
    "url": "assets/js/7.ab5feb56.js",
    "revision": "49e9e682693fa3614d2ab9c7cdf71064"
  },
  {
    "url": "assets/js/8.4daa97b2.js",
    "revision": "69bb6ca0482016e39bb881d6abdf9418"
  },
  {
    "url": "assets/js/9.70d95627.js",
    "revision": "8349caf903b696c3c5fc5d527b9633cc"
  },
  {
    "url": "assets/js/app.aa7537a1.js",
    "revision": "776849d9912b4ff70014f6062a74dc3d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d34d2b6aa8dd63824edbbcf0f1c27877"
  },
  {
    "url": "design/index.html",
    "revision": "d332f54f9a66ac60f9b93b496a3203a4"
  },
  {
    "url": "index.html",
    "revision": "3f097d02cb2d95bf36316384406b7de5"
  },
  {
    "url": "intro/index.html",
    "revision": "998a370ffdef65cb5020ca5013c7cdcd"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "ebe7fa30d677e1489e3613cbb48f2866"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "fa91a3fcdc6d1e7fc7a380485ea449b3"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9f4bc2d133610de79ce62b0e9ce25da2"
  },
  {
    "url": "software/index.html",
    "revision": "728597d1caf66ff147fd879e25454f4e"
  },
  {
    "url": "test/index.html",
    "revision": "a46c58404d92ab5370950609e8f834b6"
  },
  {
    "url": "use cases/index.html",
    "revision": "726e10dce6bf7fd1dc8562c4470838c3"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
