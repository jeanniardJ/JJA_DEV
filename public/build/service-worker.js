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
define(['./workbox-a85c92f5'], (function (workbox) { 'use strict';

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
    "revision": "5afa69eb1d81152dded4a89213bb7459"
  }, {
    "url": "/build/admin.js",
    "revision": "6bd08ee1280a40d67358284db114156f"
  }, {
    "url": "/build/app.js",
    "revision": "a50ca37d80156f0de5f1b81a465369d9"
  }, {
    "url": "/build/appCss.css",
    "revision": "44a8d750d65ef075a0c9936a7f491610"
  }, {
    "url": "/build/assets__layouts_modals_js.js",
    "revision": "ca59056df556b9f05cb10938eb4d0dd3"
  }, {
    "url": "/build/assets__layouts_toasts_js.js",
    "revision": "132d9c94f076e044884bc9d58b8fe178"
  }, {
    "url": "/build/assets__layouts_validationForm_js.js",
    "revision": "60e25c07e5533bf6b73ee9a792a0f2db"
  }, {
    "url": "/build/blog.css",
    "revision": "8022cfb3640609e8ada1641e7018a614"
  }, {
    "url": "/build/contact.css",
    "revision": "8b7e12c3680ed2b56446c0b3b70ad011"
  }, {
    "url": "/build/fonts/bootstrap-icons.39795c0b.woff",
    "revision": null
  }, {
    "url": "/build/fonts/bootstrap-icons.b7bcc075.woff2",
    "revision": null
  }, {
    "url": "/build/home.css",
    "revision": "3832381d415b21fbc980865988680616"
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
    "url": "/build/images/code.852f8a34.jpg",
    "revision": null
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
    "revision": "823a0625210e2e69c7f0c029bdbd3cbb"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26.css",
    "revision": "458d53b0b91f589a310f9d363ec6fdf0"
  }, {
    "url": "/build/node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26.js",
    "revision": "35dd558fbfa264802f77b88f6fe28345"
  }, {
    "url": "/build/privatepolicy.css",
    "revision": "7dac27de3dfce471e8df75aec51e4b34"
  }, {
    "url": "/build/runtime.js",
    "revision": "63fda8dfdb0f34659935ab8e6e7f292f"
  }, {
    "url": "/build/sitemap.css",
    "revision": "6c10b4683c95d821d5ef2d2a316cc0b1"
  }, {
    "url": "/build/vendor_symfony_ux-autocomplete_assets_dist_controller_js.js",
    "revision": "61e903bbb15419d62df3108b0b066b15"
  }, {
    "url": "/build/vendor_symfony_ux-react_assets_dist_render_controller_js.js",
    "revision": "c72161a4ea503f28b02fd1d7f2c6eb32"
  }, {
    "url": "/build/vendor_symfony_ux-typed_assets_dist_controller_js.js",
    "revision": "a041409c5c49f47c0d251ed7c8536b43"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_src_-cef498.css",
    "revision": "a892448d6be0c33aac1c45a5601a5b32"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_src_-cef498.js",
    "revision": "b470a23e6d811636b3f14abc60f4b363"
  }, {
    "url": "/build/vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js.js",
    "revision": "1148758209d9958735163edc2875763e"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-0b536d.css",
    "revision": "e8ef9341ff765320770811539b3023b3"
  }, {
    "url": "/build/vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-0b536d.js",
    "revision": "73462f7f7be29107073031aee1cf3504"
  }, {
    "url": "/build/vendors-node_modules_react-dom_index_js.js",
    "revision": "0681b5f72f5f6fd32e5a9321e081a4bb"
  }, {
    "url": "/build/vendors-node_modules_tom-select_dist_js_tom-select_complete_js-node_modules_core-js_modules_e-e6ca75.js",
    "revision": "eeee4460446bb629c323eef467b4bacf"
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
