/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-3380be71'], (function (workbox) { 'use strict';

  workbox.setCacheNameDetails({
    prefix: "jja-dev-cache-v1"
  });
  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "/build/admin.css",
    "revision": "3d902e9c352d79bd0bb4bf04105fb7fa"
  }, {
    "url": "/build/admin.js",
    "revision": "bcc7ff6a69116295629b126af38212ab"
  }, {
    "url": "/build/app.css",
    "revision": "d3f18149afad10d5a719f91024397327"
  }, {
    "url": "/build/app.js",
    "revision": "8b4b0ba6d46751eee028870fc1266462"
  }, {
    "url": "/build/assets__layouts_modals_js.js",
    "revision": "7b2e3f121785fdba5c2c6830ca5eda0e"
  }, {
    "url": "/build/assets__layouts_toasts_js.js",
    "revision": "23b0d02c4ca44fc179d0bc305ee7f4b1"
  }, {
    "url": "/build/assets__layouts_validationForm_js.js",
    "revision": "a2ab63528f5dbb82d7fd7effe47911bc"
  }, {
    "url": "/build/contact.css",
    "revision": "4e7bd76525acfedb30789ecc93f6d971"
  }, {
    "url": "/build/fonts/bootstrap-icons.1295669c.woff",
    "revision": null
  }, {
    "url": "/build/fonts/bootstrap-icons.92ea18a8.woff2",
    "revision": null
  }, {
    "url": "/build/home.css",
    "revision": "ec6356fbb74b94123baa70a4bbccf85c"
  }, {
    "url": "/build/images/Capture.png",
    "revision": "8ca76147bf1265fbe0e50c914278b62c"
  }, {
    "url": "/build/images/about.jpg",
    "revision": "a869b0f507c325aa2fa402e13a387354"
  }, {
    "url": "/build/images/blank/40x40.png",
    "revision": "9d1eb25a4e68a9807841995667a4af57"
  }, {
    "url": "/build/images/code.jpg",
    "revision": "2b1c92607993ba9641b978e46fb86de9"
  }, {
    "url": "/build/images/logo_jjadev.png",
    "revision": "455a51060630176218823644efef3ba6"
  }, {
    "url": "/build/images/logo_jjadev_512x512.png",
    "revision": "28a2d52762e3fb53cac259d22c62ca50"
  }, {
    "url": "/build/images/maintenance.532290f0.jpg",
    "revision": null
  }, {
    "url": "/build/images/maintenance.jpg",
    "revision": "c998e0093fa89602b3f796b5d81c820b"
  }, {
    "url": "/build/images/maskable_icon.png",
    "revision": "0bb21d6bd3df3561a24d9988928b5d28"
  }, {
    "url": "/build/images/modules/automation.svg",
    "revision": "a09edf7b94ef3128b19653c7d8a91528"
  }, {
    "url": "/build/images/modules/automation_scripts.png",
    "revision": "5c7acd039dd2ecd0b199a5d07d625d3c"
  }, {
    "url": "/build/images/modules/notes.svg",
    "revision": "8581461aa556565920656104d4ae2e33"
  }, {
    "url": "/build/images/modules/security.svg",
    "revision": "be4b15a77a1b3f1b0701c0f81e393ea9"
  }, {
    "url": "/build/images/modules/security_scans.png",
    "revision": "a09e92bfd706cadfa4d51bb56d5a5c9c"
  }, {
    "url": "/build/images/modules/symfony.png",
    "revision": "3949e4cff480eba60b8ceb258142ab33"
  }, {
    "url": "/build/images/modules/symfony.svg",
    "revision": "57ff89856ba2498f24ad097937f04289"
  }, {
    "url": "/build/images/modules/symfony_test.png",
    "revision": "30f31bcd47d5fac7d45eab2766e0334e"
  }, {
    "url": "/build/images/modules/technical_notes.png",
    "revision": "cb0f314272e6f84858a93cd35301ec13"
  }, {
    "url": "/build/images/profile_jj_picture_ssans_fond.png",
    "revision": "c52665acb4c3256ae24ab90765511c5c"
  }, {
    "url": "/build/images/svg/wave-haikei-bottom.svg",
    "revision": "b7a7f61b9ab4f5c9ccfe50b3dc7a6e79"
  }, {
    "url": "/build/images/svg/wave-haikei-top.svg",
    "revision": "7d1139bb5fd50f6866aa77adcf192b92"
  }, {
    "url": "/build/images/svg/wave-haikei.svg",
    "revision": "316af5ec704e84b195a4bfbe418f2606"
  }, {
    "url": "/build/legalnotice.css",
    "revision": "316d3f58dd75d2ca6130165eb7ea5565"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-node_modu-1d1703.css",
    "revision": "7dfc3f3b722dab41b4d0a1dee5f50ae9"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-node_modu-1d1703.js",
    "revision": "456bb069bba9e19170da9387ef5301c6"
  }, {
    "url": "/build/privatepolicy.css",
    "revision": "48cc74e4be4375f0ebf5c5d9b5e7e457"
  }, {
    "url": "/build/runtime.js",
    "revision": "e2b9913a5357ce40ea9f063e2244ff53"
  }, {
    "url": "/build/sitemap.css",
    "revision": "f41182eb75b74be138e800ae5ad3f6ac"
  }, {
    "url": "/build/vendor_symfony_ux-autocomplete_assets_dist_controller_js.js",
    "revision": "22632736f459cc7e257edfb0a006b428"
  }, {
    "url": "/build/vendor_symfony_ux-react_assets_dist_render_controller_js.js",
    "revision": "43d72aa8c38d5b1b7f61e6963e295906"
  }, {
    "url": "/build/vendor_symfony_ux-typed_assets_dist_controller_js.js",
    "revision": "e4a23f58753a6cb507879f6ae9309216"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_src_-cef498.css",
    "revision": "fb26b74b03633fda45047caf7acd0707"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_src_-cef498.js",
    "revision": "0776ebda4b9462f549755113df9c1f29"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js.js",
    "revision": "fbd2aa90bf7c42ab230fa01d54429f83"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_js_dist_collapse_js-node_modules_bootstrap_js_dist_dropdown_js-6598a3.js",
    "revision": "e2f1979df6eed82165b4bdc594ec735f"
  }, {
    "url": "/build/vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_weak-se-98be17.js",
    "revision": "8f49f1ed2dd63480f411a1d807689b49"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c.css",
    "revision": "3091032b9063ecb2795e453b70a80a0d"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c.js",
    "revision": "1254d0037988822e69985e3dbd8147c9"
  }, {
    "url": "/build/vendors-node_modules_react-dom_index_js.js",
    "revision": "4544ea71a2ae7ec2dc5047b3fa6de2b9"
  }, {
    "url": "/build/vendors-node_modules_typed_js_dist_typed_module_js.js",
    "revision": "bea1abdcbe443eada5646a19dff52799"
  }], {});
  workbox.registerRoute(/\.(?:js|css|png|webp|jpg|svg)$/, new workbox.StaleWhileRevalidate({
    "cacheName": "assets-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 100,
      maxAgeSeconds: 604800
    })]
  }), 'GET');

}));
//# sourceMappingURL=service-worker.js.map
