(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");






/*
 * Copyright (c) 2023. Tous droits réservés.
 * Aucun élément de ce site web ne peut être reproduit, affiché, modifié ou distribué sans la permission écrite préalable du titulaire du droit d'auteur.
 * Ce site web, son contenu et tous les produits créés par JJA DEV sont protégés par les lois sur les droits d'auteur et la propriété intellectuelle. Tous les droits sont réservés à JJA DEV.
 *
 * L'utilisation non autorisée de tout élément de ce site, y compris, mais sans s'y limiter, le texte, les images, les dessins, les graphiques, les logos et les marques de commerce, peut constituer une violation des lois sur le droit d'auteur, des lois sur les marques de commerce ou d'autres lois applicables et peut entraîner des poursuites judiciaires.
 *
 * Pour obtenir la permission d'utiliser du contenu de ce site, veuillez contacter JJA DEV.
 *
 * Merci de votre compréhension et de votre respect envers notre travail créatif et nos droits de propriété intellectuelle.
 */


// Import Bootstrap JS components for front office functionality




// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import jQuery

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

// Import the main CSS file - OBLIGATOIRE pour avoir les styles !


__webpack_require__.e(/*! import() */ "assets__layouts_modals_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/modals */ "./assets/_layouts/modals.js"));
__webpack_require__.e(/*! import() */ "assets__layouts_toasts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/toasts */ "./assets/_layouts/toasts.js"));

// ===========================
// FRONT OFFICE FUNCTIONALITY
// ===========================

// Main DOMContentLoaded event
document.addEventListener("DOMContentLoaded", function () {
  console.log("Front Office JS loaded");

  // Smooth scrolling pour les liens ancres
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      if (targetId === "#") return;
      var targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});

// Vérifiez si le navigateur supporte les services workers
if ("serviceWorker" in navigator) {
  // Enregistrez le service worker
  navigator.serviceWorker.register("/build/service-worker.js").then(function (registration) {
    console.debug("Service Worker enregistré avec succès");
  }).catch(function (err) {
    console.debug("L'enregistrement du Service Worker a échoué : ", err);
  });
}
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_6__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   app: function() { return /* binding */ app; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!********************************************************************************************************************!*\
  !*** ./assets/controllers/app/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers/app sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$":
/*!**********************************************************!*\
  !*** ./assets/react/controllers/app/ sync \.(j%7Ct)sx?$ ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Nav.jsx": "./assets/react/controllers/app/Nav.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/react/controllers/app/Nav.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/app/Nav.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_15__);














function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



/**
 * Navigation component for JJA DEV
 * Handles scroll state and mobile menu toggle using React state management
 */
var Nav = function Nav(_ref) {
  var link_home = _ref.link_home,
    logo = _ref.logo;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMobileMenuOpen = _useState4[0],
    setIsMobileMenuOpen = _useState4[1];

  // Optimized scroll handler with useCallback
  var handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(function () {
    var scrolled = window.scrollY > 5;
    setIsScrolled(scrolled);
  }, []);

  // Handle mobile menu toggle
  var handleMobileMenuToggle = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(function () {
    setIsMobileMenuOpen(function (prev) {
      return !prev;
    });
  }, []);

  // Close mobile menu when clicking outside or on links
  var handleLinkClick = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(function () {
    setIsMobileMenuOpen(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(function () {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    // Cleanup on unmount
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  // Generate navbar classes based on state
  var navbarClasses = ["navbar", "navbar-expand-lg", "fixed-top", "navbar-custom", (isScrolled || isMobileMenuOpen) && "scrolled"].filter(Boolean).join(" ");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("nav", {
    className: navbarClasses
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    id: "jjadev_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "navbar-brand d-flex align-items-center",
    href: link_home,
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles dans le Jura",
    onClick: handleLinkClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("img", {
    src: logo,
    srcSet: logo,
    width: 40,
    height: 40,
    alt: "Logo de l'entreprise",
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "ms-3"
  }, "JJA DEV"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    onClick: handleMobileMenuToggle,
    "aria-controls": "navbarNav",
    "aria-expanded": isMobileMenuOpen,
    "aria-label": "Basculer la navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("div", {
    className: "collapse navbar-collapse justify-content-end ".concat(isMobileMenuOpen ? "show" : ""),
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "navbar-nav me-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link",
    "aria-current": "page",
    href: link_home,
    title: "Retour \xE0 l'accueil",
    onClick: handleLinkClick
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link",
    href: "".concat(link_home, "#about"),
    title: "En savoir plus sur JJA DEV",
    onClick: handleLinkClick
  }, "\xC0 propos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link",
    href: "https://github.com/jerome-jutteau",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Voir mes projets sur GitHub",
    onClick: handleLinkClick
  }, "Github")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link",
    href: "".concat(link_home, "#contact"),
    title: "Me contacter",
    onClick: handleLinkClick
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "navbar-nav ms-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "nav-link dropdown-toggle",
    href: "#",
    id: "crmDropdown",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    title: "Acc\xE8s CRM"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("i", {
    className: "fas fa-user-circle",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("span", {
    className: "visually-hidden"
  }, "Menu utilisateur")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("ul", {
    className: "dropdown-menu dropdown-menu-end",
    "aria-labelledby": "crmDropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "dropdown-item",
    href: "/admin"
  }, "Se connecter")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14___default().createElement("a", {
    className: "dropdown-item",
    href: "/admin/logout"
  }, "Se d\xE9connecter"))))))));
};

// PropTypes for type checking
Nav.propTypes = {
  link_home: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string).isRequired,
  logo: (prop_types__WEBPACK_IMPORTED_MODULE_15___default().string).isRequired
};

// Default props
Nav.defaultProps = {
  link_home: "/",
  logo: "/build/images/logo_jjadev.png"
};
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/app/hello_controller.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _default; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }













function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c","vendors-node_modules_bootstrap_js_dist_collapse_js-node_modules_bootstrap_js_dist_dropdown_js-b6afdb","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQUFHLFVBQUEsT0FBQUgsUUFBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxRQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFFBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBVUksU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBSSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsR0FBRyxtRUFBbUU7SUFDbEc7RUFBQztBQUFBLEVBSHdCWiwyREFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL2pqYS1kZXYvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FwcC8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hcHAvTmF2LmpzeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz85MGFkIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL2hlbGxvX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDIzLiBUb3VzIGRyb2l0cyByw6lzZXJ2w6lzLlxyXG4gKiBBdWN1biDDqWzDqW1lbnQgZGUgY2Ugc2l0ZSB3ZWIgbmUgcGV1dCDDqnRyZSByZXByb2R1aXQsIGFmZmljaMOpLCBtb2RpZmnDqSBvdSBkaXN0cmlidcOpIHNhbnMgbGEgcGVybWlzc2lvbiDDqWNyaXRlIHByw6lhbGFibGUgZHUgdGl0dWxhaXJlIGR1IGRyb2l0IGQnYXV0ZXVyLlxyXG4gKiBDZSBzaXRlIHdlYiwgc29uIGNvbnRlbnUgZXQgdG91cyBsZXMgcHJvZHVpdHMgY3LDqcOpcyBwYXIgSkpBIERFViBzb250IHByb3TDqWfDqXMgcGFyIGxlcyBsb2lzIHN1ciBsZXMgZHJvaXRzIGQnYXV0ZXVyIGV0IGxhIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLiBUb3VzIGxlcyBkcm9pdHMgc29udCByw6lzZXJ2w6lzIMOgIEpKQSBERVYuXHJcbiAqXHJcbiAqIEwndXRpbGlzYXRpb24gbm9uIGF1dG9yaXPDqWUgZGUgdG91dCDDqWzDqW1lbnQgZGUgY2Ugc2l0ZSwgeSBjb21wcmlzLCBtYWlzIHNhbnMgcyd5IGxpbWl0ZXIsIGxlIHRleHRlLCBsZXMgaW1hZ2VzLCBsZXMgZGVzc2lucywgbGVzIGdyYXBoaXF1ZXMsIGxlcyBsb2dvcyBldCBsZXMgbWFycXVlcyBkZSBjb21tZXJjZSwgcGV1dCBjb25zdGl0dWVyIHVuZSB2aW9sYXRpb24gZGVzIGxvaXMgc3VyIGxlIGRyb2l0IGQnYXV0ZXVyLCBkZXMgbG9pcyBzdXIgbGVzIG1hcnF1ZXMgZGUgY29tbWVyY2Ugb3UgZCdhdXRyZXMgbG9pcyBhcHBsaWNhYmxlcyBldCBwZXV0IGVudHJhw65uZXIgZGVzIHBvdXJzdWl0ZXMganVkaWNpYWlyZXMuXHJcbiAqXHJcbiAqIFBvdXIgb2J0ZW5pciBsYSBwZXJtaXNzaW9uIGQndXRpbGlzZXIgZHUgY29udGVudSBkZSBjZSBzaXRlLCB2ZXVpbGxleiBjb250YWN0ZXIgSkpBIERFVi5cclxuICpcclxuICogTWVyY2kgZGUgdm90cmUgY29tcHLDqWhlbnNpb24gZXQgZGUgdm90cmUgcmVzcGVjdCBlbnZlcnMgbm90cmUgdHJhdmFpbCBjcsOpYXRpZiBldCBub3MgZHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLlxyXG4gKi9cclxuaW1wb3J0IHsgcmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIH0gZnJvbSBcIkBzeW1mb255L3V4LXJlYWN0XCI7XHJcblxyXG4vLyBJbXBvcnQgQm9vdHN0cmFwIEpTIGNvbXBvbmVudHMgZm9yIGZyb250IG9mZmljZSBmdW5jdGlvbmFsaXR5XHJcbmltcG9ydCBcImJvb3RzdHJhcC9qcy9kaXN0L2NvbGxhcHNlXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9qcy9kaXN0L2Ryb3Bkb3duXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9qcy9kaXN0L21vZGFsXCI7XHJcblxyXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXHJcbi8vIGFzc2V0cy9hcHAuanNcclxuY29uc3QgJCA9IHJlcXVpcmUoXCJqcXVlcnlcIik7IC8vIGltcG9ydCBqUXVlcnlcclxuXHJcbnJlcXVpcmUoXCJib290c3RyYXBcIik7XHJcblxyXG4vLyBJbXBvcnQgdGhlIG1haW4gQ1NTIGZpbGUgLSBPQkxJR0FUT0lSRSBwb3VyIGF2b2lyIGxlcyBzdHlsZXMgIVxyXG5pbXBvcnQgXCIuL3N0eWxlcy9hcHAuc2Nzc1wiO1xyXG5pbXBvcnQgXCIuL2Jvb3RzdHJhcC5qc1wiO1xyXG5cclxuaW1wb3J0KFwiLi9fbGF5b3V0cy9tb2RhbHNcIik7XHJcbmltcG9ydChcIi4vX2xheW91dHMvdG9hc3RzXCIpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZST05UIE9GRklDRSBGVU5DVElPTkFMSVRZXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLy8gTWFpbiBET01Db250ZW50TG9hZGVkIGV2ZW50XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRnJvbnQgT2ZmaWNlIEpTIGxvYWRlZFwiKTtcclxuXHJcbiAgICAvLyBTbW9vdGggc2Nyb2xsaW5nIHBvdXIgbGVzIGxpZW5zIGFuY3Jlc1xyXG4gICAgY29uc3QgYW5jaG9yTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZePVwiI1wiXScpO1xyXG4gICAgYW5jaG9yTGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICBpZiAodGFyZ2V0SWQgPT09IFwiI1wiKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXRJZCk7XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KHtcclxuICAgICAgICAgICAgICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICAgICAgICAgICAgICBibG9jazogXCJzdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFbDqXJpZmlleiBzaSBsZSBuYXZpZ2F0ZXVyIHN1cHBvcnRlIGxlcyBzZXJ2aWNlcyB3b3JrZXJzXHJcbmlmIChcInNlcnZpY2VXb3JrZXJcIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgIC8vIEVucmVnaXN0cmV6IGxlIHNlcnZpY2Ugd29ya2VyXHJcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlclxyXG4gICAgICAgIC5yZWdpc3RlcihcIi9idWlsZC9zZXJ2aWNlLXdvcmtlci5qc1wiKVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWdpc3RyYXRpb24pIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlNlcnZpY2UgV29ya2VyIGVucmVnaXN0csOpIGF2ZWMgc3VjY8Ooc1wiKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJMJ2VucmVnaXN0cmVtZW50IGR1IFNlcnZpY2UgV29ya2VyIGEgw6ljaG91w6kgOiBcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dChcIi4vcmVhY3QvY29udHJvbGxlcnMvYXBwXCIsIHRydWUsIC9cXC4oanx0KXN4PyQvKSk7XHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnXHJcblxyXG4vLyBSZWdpc3RlcnMgU3RpbXVsdXMgY29udHJvbGxlcnMgZnJvbSBjb250cm9sbGVycy5qc29uIGFuZCBpbiB0aGUgY29udHJvbGxlcnMvIGRpcmVjdG9yeVxyXG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChcclxuICAgIHJlcXVpcmUuY29udGV4dChcclxuICAgICAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycy9hcHAnLFxyXG4gICAgICAgIHRydWUsXHJcbiAgICAgICAgL1xcLltqdF1zeD8kL1xyXG4gICAgKVxyXG4pXHJcblxyXG4vLyByZWdpc3RlciBhbnkgY3VzdG9tLCAzcmQgcGFydHkgY29udHJvbGxlcnMgaGVyZVxyXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XHJcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMvYXBwIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL05hdi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hcHAvTmF2LmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcblxyXG4vKipcclxuICogTmF2aWdhdGlvbiBjb21wb25lbnQgZm9yIEpKQSBERVZcclxuICogSGFuZGxlcyBzY3JvbGwgc3RhdGUgYW5kIG1vYmlsZSBtZW51IHRvZ2dsZSB1c2luZyBSZWFjdCBzdGF0ZSBtYW5hZ2VtZW50XHJcbiAqL1xyXG5jb25zdCBOYXYgPSAoeyBsaW5rX2hvbWUsIGxvZ28gfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzU2Nyb2xsZWQsIHNldElzU2Nyb2xsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTW9iaWxlTWVudU9wZW4sIHNldElzTW9iaWxlTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIC8vIE9wdGltaXplZCBzY3JvbGwgaGFuZGxlciB3aXRoIHVzZUNhbGxiYWNrXHJcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IDU7XHJcbiAgICAgICAgc2V0SXNTY3JvbGxlZChzY3JvbGxlZCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIG1vYmlsZSBtZW51IHRvZ2dsZVxyXG4gICAgY29uc3QgaGFuZGxlTW9iaWxlTWVudVRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRJc01vYmlsZU1lbnVPcGVuKChwcmV2KSA9PiAhcHJldik7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy8gQ2xvc2UgbW9iaWxlIG1lbnUgd2hlbiBjbGlja2luZyBvdXRzaWRlIG9yIG9uIGxpbmtzXHJcbiAgICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNNb2JpbGVNZW51T3BlbihmYWxzZSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAvLyBBZGQgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIC8vIENsZWFudXAgb24gdW5tb3VudFxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtoYW5kbGVTY3JvbGxdKTtcclxuXHJcbiAgICAvLyBHZW5lcmF0ZSBuYXZiYXIgY2xhc3NlcyBiYXNlZCBvbiBzdGF0ZVxyXG4gICAgY29uc3QgbmF2YmFyQ2xhc3NlcyA9IFtcclxuICAgICAgICBcIm5hdmJhclwiLFxyXG4gICAgICAgIFwibmF2YmFyLWV4cGFuZC1sZ1wiLFxyXG4gICAgICAgIFwiZml4ZWQtdG9wXCIsXHJcbiAgICAgICAgXCJuYXZiYXItY3VzdG9tXCIsXHJcbiAgICAgICAgKGlzU2Nyb2xsZWQgfHwgaXNNb2JpbGVNZW51T3BlbikgJiYgXCJzY3JvbGxlZFwiLFxyXG4gICAgXVxyXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcclxuICAgICAgICAuam9pbihcIiBcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtuYXZiYXJDbGFzc2VzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJqamFkZXZfbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGlua19ob21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkpKQSBERVYgLSBDcsOpYXRpb24gZGUgc2l0ZXMgd2ViIGV0IGFwcGxpY2F0aW9ucyBtb2JpbGVzIGRhbnMgbGUgSnVyYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja31cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyY1NldD17bG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dvIGRlIGwnZW50cmVwcmlzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkpKQSBERVYgLSBDcsOpYXRpb24gZGUgc2l0ZXMgd2ViIGV0IGFwcGxpY2F0aW9ucyBtb2JpbGVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXMtM1wiPkpKQSBERVY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNb2JpbGVNZW51VG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2lzTW9iaWxlTWVudU9wZW59XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkJhc2N1bGVyIGxhIG5hdmlnYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmQgJHtpc01vYmlsZU1lbnVPcGVuID8gXCJzaG93XCIgOiBcIlwifWB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYXZiYXJOYXZcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1lLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWN1cnJlbnQ9XCJwYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtsaW5rX2hvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZXRvdXIgw6AgbCdhY2N1ZWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaW5rQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjdWVpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake2xpbmtfaG9tZX0jYWJvdXRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRW4gc2F2b2lyIHBsdXMgc3VyIEpKQSBERVZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDDgCBwcm9wb3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2plcm9tZS1qdXR0ZWF1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVm9pciBtZXMgcHJvamV0cyBzdXIgR2l0SHViXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMaW5rQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2l0aHViXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7bGlua19ob21lfSNjb250YWN0YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk1lIGNvbnRhY3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTGlua0NsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtcy1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBkcm9wZG93blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGluayBkcm9wZG93bi10b2dnbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNybURyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWNjw6hzIENSTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItY2lyY2xlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPk1lbnUgdXRpbGlzYXRldXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LWVuZFwiIGFyaWEtbGFiZWxsZWRieT1cImNybURyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkcm9wZG93bi1pdGVtXCIgaHJlZj1cIi9hZG1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2UgY29ubmVjdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZHJvcGRvd24taXRlbVwiIGhyZWY9XCIvYWRtaW4vbG9nb3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZSBkw6ljb25uZWN0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuLy8gUHJvcFR5cGVzIGZvciB0eXBlIGNoZWNraW5nXHJcbk5hdi5wcm9wVHlwZXMgPSB7XHJcbiAgICBsaW5rX2hvbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGxvZ286IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbi8vIERlZmF1bHQgcHJvcHNcclxuTmF2LmRlZmF1bHRQcm9wcyA9IHtcclxuICAgIGxpbmtfaG9tZTogXCIvXCIsXHJcbiAgICBsb2dvOiBcIi9idWlsZC9pbWFnZXMvbG9nb19qamFkZXYucG5nXCIsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xyXG5cclxuLypcclxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXHJcbiAqXHJcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXHJcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxyXG4gKiBoZWxsb19jb250cm9sbGVyLmpzIC0+IFwiaGVsbG9cIlxyXG4gKlxyXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XHJcbiAgICBjb25uZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC50ZXh0Q29udGVudCA9ICdIZWxsbyBTdGltdWx1cyEgRWRpdCBtZSBpbiBhc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyc7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImFuY2hvckxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJsaW5rIiwiZSIsInRhcmdldElkIiwiZ2V0QXR0cmlidXRlIiwidGFyZ2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwcmV2ZW50RGVmYXVsdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJkZWJ1ZyIsImNhdGNoIiwiZXJyIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJQcm9wVHlwZXMiLCJOYXYiLCJfcmVmIiwibGlua19ob21lIiwibG9nbyIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2Nyb2xsZWQiLCJzZXRJc1Njcm9sbGVkIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJpc01vYmlsZU1lbnVPcGVuIiwic2V0SXNNb2JpbGVNZW51T3BlbiIsImhhbmRsZVNjcm9sbCIsInNjcm9sbGVkIiwid2luZG93Iiwic2Nyb2xsWSIsImhhbmRsZU1vYmlsZU1lbnVUb2dnbGUiLCJwcmV2IiwiaGFuZGxlTGlua0NsaWNrIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJuYXZiYXJDbGFzc2VzIiwiZmlsdGVyIiwiQm9vbGVhbiIsImpvaW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaWQiLCJocmVmIiwidGl0bGUiLCJvbkNsaWNrIiwic3JjIiwic3JjU2V0Iiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJ0eXBlIiwiY29uY2F0IiwidGFyZ2V0IiwicmVsIiwicm9sZSIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJkZWZhdWx0UHJvcHMiLCJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJlbGVtZW50IiwidGV4dENvbnRlbnQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==