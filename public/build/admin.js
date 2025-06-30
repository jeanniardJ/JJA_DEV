(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["admin"],{

/***/ "./assets/admin.js":
/*!*************************!*\
  !*** ./assets/admin.js ***!
  \*************************/
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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_icons_font_bootstrap_icons_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-icons/font/bootstrap-icons.css */ "./node_modules/bootstrap-icons/font/bootstrap-icons.css");
/* harmony import */ var bootstrap_js_src_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/js/src/modal */ "./node_modules/bootstrap/js/src/modal.js");
/* harmony import */ var bootstrap_js_src_collapse__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap/js/src/collapse */ "./node_modules/bootstrap/js/src/collapse.js");
/* harmony import */ var bootstrap_js_src_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/js/src/alert */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var bootstrap_js_src_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap/js/src/button */ "./node_modules/bootstrap/js/src/button.js");
/* harmony import */ var bootstrap_js_src_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/js/src/dropdown */ "./node_modules/bootstrap/js/src/dropdown.js");
/* harmony import */ var bootstrap_js_src_tab__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! bootstrap/js/src/tab */ "./node_modules/bootstrap/js/src/tab.js");
/* harmony import */ var bootstrap_js_src_toast__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/js/src/toast */ "./node_modules/bootstrap/js/src/toast.js");
/* harmony import */ var bootstrap_js_src_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! bootstrap/js/src/tooltip */ "./node_modules/bootstrap/js/src/tooltip.js");
/* harmony import */ var bootstrap_js_src_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! bootstrap/js/src/popover */ "./node_modules/bootstrap/js/src/popover.js");
/* harmony import */ var bootstrap_js_src_util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! bootstrap/js/src/util */ "./node_modules/bootstrap/js/src/util/index.js");
/* harmony import */ var _styles_admin_admin_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./styles/admin/admin.scss */ "./assets/styles/admin/admin.scss");
/* harmony import */ var _bootstrap_admin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./bootstrap-admin */ "./assets/bootstrap-admin.js");





/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// assets/app.js

// any CSS you import will output into a single css file (app.css in this case)

__webpack_require__(/*! bootstrap-table/src/bootstrap-table */ "./node_modules/bootstrap-table/src/bootstrap-table.js");
__webpack_require__(/*! bootstrap-table/src/extensions/mobile/bootstrap-table-mobile */ "./node_modules/bootstrap-table/src/extensions/mobile/bootstrap-table-mobile.js");
__webpack_require__(/*! bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar */ "./node_modules/bootstrap-table/src/extensions/addrbar/bootstrap-table-addrbar.js");
__webpack_require__(/*! bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh */ "./node_modules/bootstrap-table/src/extensions/auto-refresh/bootstrap-table-auto-refresh.js");
__webpack_require__(/*! bootstrap-table/src/locale/bootstrap-table-fr-FR */ "./node_modules/bootstrap-table/src/locale/bootstrap-table-fr-FR.js");












var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"), __webpack_require__.e("assets__layouts_modals_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/modals */ "./assets/_layouts/modals.js"));
Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js"), __webpack_require__.e("assets__layouts_toasts_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/toasts */ "./assets/_layouts/toasts.js"));
__webpack_require__.e(/*! import() */ "assets__layouts_validationForm_js").then(__webpack_require__.t.bind(__webpack_require__, /*! ./_layouts/validationForm */ "./assets/_layouts/validationForm.js", 23));
//import('./devis.js')

/***/ }),

/***/ "./assets/bootstrap-admin.js":
/*!***********************************!*\
  !*** ./assets/bootstrap-admin.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   admin: function() { return /* binding */ admin; }
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");



// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var admin = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_1__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!**********************************************************************************************************************!*\
  !*** ./assets/controllers/admin/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \**********************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./userCount_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/admin/userCount_controller.js"
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
webpackContext.id = "./assets/controllers/admin sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$":
/*!************************************************************!*\
  !*** ./assets/react/controllers/admin/ sync \.(j%7Ct)sx?$ ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./Admin.jsx": "./assets/react/controllers/admin/Admin.jsx",
	"./DarkModeSwitch.jsx": "./assets/react/controllers/admin/DarkModeSwitch.jsx",
	"./Nav.jsx": "./assets/react/controllers/admin/Nav.jsx",
	"./NavTabs.jsx": "./assets/react/controllers/admin/NavTabs.jsx",
	"./User.jsx": "./assets/react/controllers/admin/User.jsx",
	"./calendar.jsx": "./assets/react/controllers/admin/calendar.jsx"
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
webpackContext.id = "./assets/react/controllers/admin sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./assets/react/controllers/admin/Admin.jsx":
/*!**************************************************!*\
  !*** ./assets/react/controllers/admin/Admin.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Admin; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Admin() {
  return;
}

/***/ }),

/***/ "./assets/react/controllers/admin/DarkModeSwitch.jsx":
/*!***********************************************************!*\
  !*** ./assets/react/controllers/admin/DarkModeSwitch.jsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);













function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

var DarkModeSwitch = function DarkModeSwitch() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(function () {
      var localTheme = localStorage.getItem('dark-mode');
      return localTheme ? JSON.parse(localTheme) : false;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    isDarkMode = _useState2[0],
    setIsDarkMode = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-bs-theme', 'light');
    }
  }, [isDarkMode]);
  var toggleDarkMode = function toggleDarkMode() {
    setIsDarkMode(function (prevMode) {
      return !prevMode;
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "form-check form-switch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("input", {
    className: "form-check-input",
    type: "checkbox",
    role: "switch",
    id: "darkModeSwitch",
    checked: isDarkMode,
    onChange: toggleDarkMode
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (DarkModeSwitch);

/***/ }),

/***/ "./assets/react/controllers/admin/Nav.jsx":
/*!************************************************!*\
  !*** ./assets/react/controllers/admin/Nav.jsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





function Nav(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("aside", {
    className: "d-flex flex-column flex-shrink-0 p-3 shadow-lg h-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.admin.path,
    className: "col-10 mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: "".concat(props.admin.icon, " fs-4 me-2")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", {
    className: "fs-4"
  }, props.admin.trans.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("button", {
    type: "button",
    className: "d-inline d-sm-none btn-close btn-close-white",
    "data-bs-dismiss": "offcanvas",
    "aria-label": "Close",
    "data-bs-target": "#menuOffcan"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("hr", {
    className: "text-bg-dark"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", {
    className: "nav nav-pills flex-column mb-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.admin.path,
    className: "nav-link text-white ".concat(props.menuActive === 'home' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: "".concat(props.dashboard.icon, " pe-1")
  }), props.admin.trans.home)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item dropdown text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    className: "nav-link dropdown-toggle text-white ".concat(props.menuActive === 'modules' ? 'active' : ''),
    "data-bs-toggle": "dropdown",
    role: "button",
    "aria-expanded": "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: props.module.icon
  }), " ", props.module.trans.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(NavModules, {
    modules: props.modules,
    subMenuActive: props.subMenuActive
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.user.path,
    className: "nav-link text-white ".concat(props.menuActive === 'user' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: "bi bi-people pe-1"
  }), props.user.trans.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    href: props.contact.path,
    className: "nav-link text-white ".concat(props.menuActive === 'contact' ? 'active' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: "bi bi-envelope-at"
  }), " Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("hr", {
    className: "text-bg-dark"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
    className: "nav-item dropdown text-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
    className: "nav-link dropdown-toggle text-white ".concat(props.menuActive === 'config' ? 'active' : ''),
    "data-bs-toggle": "dropdown",
    role: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
    className: props.setting.icon
  }), " ", props.setting.trans.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(NavParameters, {
    settings: props.settings,
    subMenuActive: props.subMenuActive
  }))));
}
function NavModules(_ref) {
  var modules = _ref.modules,
    subMenuActive = _ref.subMenuActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", {
    className: "dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark"
  }, Object.values(modules).map(function (module) {
    if (module.isGranted === false) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
      className: "dropdown-item mt-1 mb-1 ".concat(subMenuActive === module.name ? 'active' : ''),
      key: module.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
      href: module.path,
      className: "d-inline-flex text-white text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
      className: "".concat(module.icon, " me-2")
    }), module.trans.title));
  }));
}
function NavParameters(_ref2) {
  var settings = _ref2.settings,
    subMenuActive = _ref2.subMenuActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("ul", {
    className: "dropdown-menu pb-1 list-unstyled w-100 dropdown-menu-dark"
  }, Object.values(settings).map(function (setting) {
    if (setting.isGranted === false) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("li", {
      className: "dropdown-item mt-1 mb-1 ".concat(subMenuActive === setting.name ? 'active' : ''),
      key: setting.path
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("a", {
      href: setting.path,
      className: "d-inline-flex text-white text-decoration-none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("i", {
      className: "".concat(setting.icon, " me-2")
    }), setting.trans.title));
  }));
}

/***/ }),

/***/ "./assets/react/controllers/admin/NavTabs.jsx":
/*!****************************************************!*\
  !*** ./assets/react/controllers/admin/NavTabs.jsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NavTabs; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }






function NavTabLi(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
    className: 'nav-link ' + (props.isActive ? 'active' : ''),
    href: props.route
  }, props.name));
}
function NavTabs(props) {
  var navTabs = props.navTabs;
  var navTabActive = props.navTabActive;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("ul", {
    className: "nav nav-tabs mb-3"
  }, Object.values(navTabs).map(function (tab, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(NavTabLi, _extends({
      key: key,
      isActive: tab.id === navTabActive
    }, tab));
  }));
}

/***/ }),

/***/ "./assets/react/controllers/admin/User.jsx":
/*!*************************************************!*\
  !*** ./assets/react/controllers/admin/User.jsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  return props.users;
}

/***/ }),

/***/ "./assets/react/controllers/admin/calendar.jsx":
/*!*****************************************************!*\
  !*** ./assets/react/controllers/admin/calendar.jsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Calendar; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/react */ "./node_modules/@fullcalendar/react/dist/index.js");
/* harmony import */ var _fullcalendar_bootstrap5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/bootstrap5 */ "./node_modules/@fullcalendar/bootstrap5/index.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/index.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/index.js");






function Calendar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fullcalendar_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
    plugins: [_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_3__["default"], _fullcalendar_bootstrap5__WEBPACK_IMPORTED_MODULE_4__["default"], _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__["default"]],
    initialView: "timeGridWeek",
    locale: 'fr',
    titleFormat: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      hour12: false
    },
    events: props.path,
    weekends: false,
    themeSystem: "bootstrap5",
    slotMinTime: '09:00:00',
    slotMaxTime: '18:00:00',
    height: "650px"
  });
}
function eventDidMount(info) {
  return new (bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default().Tooltip)(info.el, {
    title: info.event.title + '<br>' + info.event.extendedProps.content,
    placement: 'top',
    trigger: 'hover',
    html: true
  });
}

/***/ }),

/***/ "./assets/styles/admin/admin.scss":
/*!****************************************!*\
  !*** ./assets/styles/admin/admin.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-c1a19c","vendors-node_modules_react-dom_index_js","vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-node_modules_bootstrap_js_src_-cef498","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-node_modu-1d1703"], function() { return __webpack_exec__("./assets/admin.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFDTixDOzs7Ozs7Ozs7Ozs7QUM5Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL2FkbWluLmpzIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvYm9vdHN0cmFwLWFkbWluLmpzIiwid2VicGFjazovL2pqYS1kZXYvIFxcLltqdF1zeD9jNjJmIiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vIHN5bmMgXFwuKGolN0N0KXN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vQWRtaW4uanN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vRGFya01vZGVTd2l0Y2guanN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vTmF2LmpzeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL05hdlRhYnMuanN4Iiwid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vVXNlci5qc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9jYWxlbmRhci5qc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9zdHlsZXMvYWRtaW4vYWRtaW4uc2Nzcz82NGJhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcclxuICpcclxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxyXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxyXG4gKi9cclxuLy8gYXNzZXRzL2FwcC5qc1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG5pbXBvcnQgJ2Jvb3RzdHJhcC1pY29ucy9mb250L2Jvb3RzdHJhcC1pY29ucy5jc3MnXHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAtdGFibGUvc3JjL2Jvb3RzdHJhcC10YWJsZScpXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC10YWJsZS9zcmMvZXh0ZW5zaW9ucy9tb2JpbGUvYm9vdHN0cmFwLXRhYmxlLW1vYmlsZScpXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC10YWJsZS9zcmMvZXh0ZW5zaW9ucy9hZGRyYmFyL2Jvb3RzdHJhcC10YWJsZS1hZGRyYmFyJylcclxucmVxdWlyZSgnYm9vdHN0cmFwLXRhYmxlL3NyYy9leHRlbnNpb25zL2F1dG8tcmVmcmVzaC9ib290c3RyYXAtdGFibGUtYXV0by1yZWZyZXNoJylcclxucmVxdWlyZSgnYm9vdHN0cmFwLXRhYmxlL3NyYy9sb2NhbGUvYm9vdHN0cmFwLXRhYmxlLWZyLUZSJylcclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9tb2RhbCdcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL2NvbGxhcHNlJ1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvYWxlcnQnXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9idXR0b24nXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy9kcm9wZG93bidcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3RhYidcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3RvYXN0J1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9qcy9zcmMvdG9vbHRpcCdcclxuaW1wb3J0ICdib290c3RyYXAvanMvc3JjL3BvcG92ZXInXHJcbmltcG9ydCAnYm9vdHN0cmFwL2pzL3NyYy91dGlsJ1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlcy9hZG1pbi9hZG1pbi5zY3NzJ1xyXG5cclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC1hZG1pbidcclxuXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKVxyXG5cclxuaW1wb3J0KCcuL19sYXlvdXRzL21vZGFscycpXHJcbmltcG9ydCgnLi9fbGF5b3V0cy90b2FzdHMnKVxyXG5pbXBvcnQoJy4vX2xheW91dHMvdmFsaWRhdGlvbkZvcm0nKVxyXG4vL2ltcG9ydCgnLi9kZXZpcy5qcycpXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0J1xyXG5cclxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcclxuZXhwb3J0IGNvbnN0IGFkbWluID0gc3RhcnRTdGltdWx1c0FwcChcclxuICAgIHJlcXVpcmUuY29udGV4dChcclxuICAgICAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi9jb250cm9sbGVycy9hZG1pbicsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICAgICAvXFwuW2p0XXN4PyQvXHJcbiAgICApXHJcbilcclxuXHJcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhcclxuICAgIHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycy9hZG1pbicsIHRydWUsIC9cXC4oanx0KXN4PyQvKVxyXG4pXHJcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXHJcbi8vIGFwcC5yZWdpc3Rlcignc29tZV9jb250cm9sbGVyX25hbWUnLCBTb21lSW1wb3J0ZWRDb250cm9sbGVyKTtcclxuIiwidmFyIG1hcCA9IHtcblx0XCIuL3VzZXJDb3VudF9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYWRtaW4vdXNlckNvdW50X2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMvYWRtaW4gc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuW2p0XXN4PyRcIjsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vQWRtaW4uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4vQWRtaW4uanN4XCIsXG5cdFwiLi9EYXJrTW9kZVN3aXRjaC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9EYXJrTW9kZVN3aXRjaC5qc3hcIixcblx0XCIuL05hdi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9OYXYuanN4XCIsXG5cdFwiLi9OYXZUYWJzLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL05hdlRhYnMuanN4XCIsXG5cdFwiLi9Vc2VyLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FkbWluL1VzZXIuanN4XCIsXG5cdFwiLi9jYWxlbmRhci5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hZG1pbi9jYWxlbmRhci5qc3hcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWRtaW4gc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xyXG4gICAgcmV0dXJuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRGFya01vZGVTd2l0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbaXNEYXJrTW9kZSwgc2V0SXNEYXJrTW9kZV0gPSB1c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbG9jYWxUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrLW1vZGUnKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxUaGVtZSA/IEpTT04ucGFyc2UobG9jYWxUaGVtZSkgOiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmstbW9kZScsIEpTT04uc3RyaW5naWZ5KGlzRGFya01vZGUpKTtcclxuICAgICAgICBpZiAoaXNEYXJrTW9kZSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2RhcmsnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLXRoZW1lJywgJ2xpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lzRGFya01vZGVdKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEYXJrTW9kZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc0RhcmtNb2RlKHByZXZNb2RlID0+ICFwcmV2TW9kZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrIGZvcm0tc3dpdGNoXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cInN3aXRjaFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRhcmtNb2RlU3dpdGNoXCJcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzRGFya01vZGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dG9nZ2xlRGFya01vZGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFya01vZGVTd2l0Y2g7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtc2hyaW5rLTAgcC0zIHNoYWRvdy1sZyBoLTEwMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e3Byb3BzLmFkbWluLnBhdGh9IGNsYXNzTmFtZT1cImNvbC0xMCBtYi0zIG1iLW1kLTAgbWUtbWQtYXV0byB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcm9wcy5hZG1pbi5pY29ufSBmcy00IG1lLTJgfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZnMtNFwiPntwcm9wcy5hZG1pbi50cmFucy50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1pbmxpbmUgZC1zbS1ub25lIGJ0bi1jbG9zZSBidG4tY2xvc2Utd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtZGlzbWlzcz1cIm9mZmNhbnZhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNtZW51T2ZmY2FuXCJcclxuICAgICAgICAgICAgICAgID48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWJnLWRhcmtcIiAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBmbGV4LWNvbHVtbiBtYi1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy5hZG1pbi5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayB0ZXh0LXdoaXRlICR7cHJvcHMubWVudUFjdGl2ZSA9PT0gJ2hvbWUnID8gJ2FjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgJHtwcm9wcy5kYXNoYm9hcmQuaWNvbn0gcGUtMWB9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmFkbWluLnRyYW5zLmhvbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2BuYXYtaXRlbSBkcm9wZG93biB0ZXh0LXdoaXRlYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgZHJvcGRvd24tdG9nZ2xlIHRleHQtd2hpdGUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1lbnVBY3RpdmUgPT09ICdtb2R1bGVzJyA/ICdhY3RpdmUnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17cHJvcHMubW9kdWxlLmljb259PjwvaT4ge3Byb3BzLm1vZHVsZS50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdk1vZHVsZXMgbW9kdWxlcz17cHJvcHMubW9kdWxlc30gc3ViTWVudUFjdGl2ZT17cHJvcHMuc3ViTWVudUFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtwcm9wcy51c2VyLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rIHRleHQtd2hpdGUgJHtwcm9wcy5tZW51QWN0aXZlID09PSAndXNlcicgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJiaSBiaS1wZW9wbGUgcGUtMVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnVzZXIudHJhbnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb3BzLmNvbnRhY3QucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgdGV4dC13aGl0ZSAke3Byb3BzLm1lbnVBY3RpdmUgPT09ICdjb250YWN0JyA/ICdhY3RpdmUnIDogJyd9YH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWVudmVsb3BlLWF0XCI+PC9pPiBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJ0ZXh0LWJnLWRhcmtcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17YG5hdi1pdGVtIGRyb3Bkb3duIHRleHQtd2hpdGVgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayBkcm9wZG93bi10b2dnbGUgdGV4dC13aGl0ZSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubWVudUFjdGl2ZSA9PT0gJ2NvbmZpZycgPyAnYWN0aXZlJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e3Byb3BzLnNldHRpbmcuaWNvbn0+PC9pPiB7cHJvcHMuc2V0dGluZy50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZQYXJhbWV0ZXJzIHNldHRpbmdzPXtwcm9wcy5zZXR0aW5nc30gc3ViTWVudUFjdGl2ZT17cHJvcHMuc3ViTWVudUFjdGl2ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9hc2lkZT5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gTmF2TW9kdWxlcyh7IG1vZHVsZXMsIHN1Yk1lbnVBY3RpdmUgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudSBwYi0xIGxpc3QtdW5zdHlsZWQgdy0xMDAgZHJvcGRvd24tbWVudS1kYXJrXCI+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG1vZHVsZXMpLm1hcCgobW9kdWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kdWxlLmlzR3JhbnRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLWl0ZW0gbXQtMSBtYi0xICR7c3ViTWVudUFjdGl2ZSA9PT0gbW9kdWxlLm5hbWUgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9kdWxlLnBhdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXttb2R1bGUucGF0aH0gY2xhc3NOYW1lPVwiZC1pbmxpbmUtZmxleCB0ZXh0LXdoaXRlIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2Ake21vZHVsZS5pY29ufSBtZS0yYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge21vZHVsZS50cmFucy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE5hdlBhcmFtZXRlcnMoeyBzZXR0aW5ncywgc3ViTWVudUFjdGl2ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51IHBiLTEgbGlzdC11bnN0eWxlZCB3LTEwMCBkcm9wZG93bi1tZW51LWRhcmtcIj5cclxuICAgICAgICAgICAge09iamVjdC52YWx1ZXMoc2V0dGluZ3MpLm1hcCgoc2V0dGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmcuaXNHcmFudGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24taXRlbSBtdC0xIG1iLTEgJHtzdWJNZW51QWN0aXZlID09PSBzZXR0aW5nLm5hbWUgPyAnYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c2V0dGluZy5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17c2V0dGluZy5wYXRofSBjbGFzc05hbWU9XCJkLWlubGluZS1mbGV4IHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7c2V0dGluZy5pY29ufSBtZS0yYH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NldHRpbmcudHJhbnMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIE5hdlRhYkxpKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9eyduYXYtbGluayAnICsgKHByb3BzLmlzQWN0aXZlID8gJ2FjdGl2ZScgOiAnJyl9IGhyZWY9e3Byb3BzLnJvdXRlfT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5uYW1lfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9saT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2VGFicyhwcm9wcykge1xyXG4gICAgbGV0IG5hdlRhYnMgPSBwcm9wcy5uYXZUYWJzXHJcbiAgICBsZXQgbmF2VGFiQWN0aXZlID0gcHJvcHMubmF2VGFiQWN0aXZlXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBtYi0zXCI+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKG5hdlRhYnMpLm1hcCgodGFiLCBrZXkpID0+IChcclxuICAgICAgICAgICAgICAgIDxOYXZUYWJMaSBrZXk9e2tleX0gaXNBY3RpdmU9e3RhYi5pZCA9PT0gbmF2VGFiQWN0aXZlfSB7Li4udGFifSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgIHJldHVybiBwcm9wcy51c2VycztcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBGdWxsQ2FsZW5kYXIgZnJvbSAnQGZ1bGxjYWxlbmRhci9yZWFjdCdcclxuaW1wb3J0IGJvb3RzdHJhcDVQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci9ib290c3RyYXA1J1xyXG5pbXBvcnQgdGltZUdyaWRQbHVnaW4gZnJvbSAnQGZ1bGxjYWxlbmRhci90aW1lZ3JpZCdcclxuaW1wb3J0IGJvb3RzdHJhcCBmcm9tICdib290c3RyYXAvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qcydcclxuaW1wb3J0IGludGVyYWN0aW9uUGx1Z2luIGZyb20gJ0BmdWxsY2FsZW5kYXIvaW50ZXJhY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxlbmRhcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RnVsbENhbGVuZGFyXHJcbiAgICAgICAgICAgIHBsdWdpbnM9e1t0aW1lR3JpZFBsdWdpbiwgYm9vdHN0cmFwNVBsdWdpbiwgaW50ZXJhY3Rpb25QbHVnaW5dfVxyXG4gICAgICAgICAgICBpbml0aWFsVmlldz1cInRpbWVHcmlkV2Vla1wiXHJcbiAgICAgICAgICAgIGxvY2FsZT17J2ZyJ31cclxuICAgICAgICAgICAgdGl0bGVGb3JtYXQ9e3tcclxuICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgaGVhZGVyVG9vbGJhcj17e1xyXG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXI6ICd0aXRsZScsXHJcbiAgICAgICAgICAgICAgICByaWdodDogJ3RpbWVHcmlkV2Vlayx0aW1lR3JpZERheScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHNsb3RMYWJlbEZvcm1hdD17e1xyXG4gICAgICAgICAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgICAgICAgICBvbWl0WmVyb01pbnV0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBob3VyMTI6IGZhbHNlLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBldmVudHM9e3Byb3BzLnBhdGh9XHJcbiAgICAgICAgICAgIHdlZWtlbmRzPXtmYWxzZX1cclxuICAgICAgICAgICAgdGhlbWVTeXN0ZW09XCJib290c3RyYXA1XCJcclxuICAgICAgICAgICAgc2xvdE1pblRpbWU9eycwOTowMDowMCd9XHJcbiAgICAgICAgICAgIHNsb3RNYXhUaW1lPXsnMTg6MDA6MDAnfVxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI2NTBweFwiXHJcbiAgICAgICAgLz5cclxuICAgIClcclxufVxyXG5cclxuZnVuY3Rpb24gZXZlbnREaWRNb3VudChpbmZvKSB7XHJcbiAgICByZXR1cm4gbmV3IGJvb3RzdHJhcC5Ub29sdGlwKGluZm8uZWwsIHtcclxuICAgICAgICB0aXRsZTogaW5mby5ldmVudC50aXRsZSArICc8YnI+JyArIGluZm8uZXZlbnQuZXh0ZW5kZWRQcm9wcy5jb250ZW50LFxyXG4gICAgICAgIHBsYWNlbWVudDogJ3RvcCcsXHJcbiAgICAgICAgdHJpZ2dlcjogJ2hvdmVyJyxcclxuICAgICAgICBodG1sOiB0cnVlLFxyXG4gICAgfSlcclxufVxyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsicmVxdWlyZSIsIiQiLCJzdGFydFN0aW11bHVzQXBwIiwicmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzIiwiYWRtaW4iLCJjb250ZXh0IiwiUmVhY3QiLCJBZG1pbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRGFya01vZGVTd2l0Y2giLCJfdXNlU3RhdGUiLCJsb2NhbFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzRGFya01vZGUiLCJzZXRJc0RhcmtNb2RlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidG9nZ2xlRGFya01vZGUiLCJwcmV2TW9kZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0eXBlIiwicm9sZSIsImlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiTmF2IiwicHJvcHMiLCJocmVmIiwicGF0aCIsImNvbmNhdCIsImljb24iLCJ0cmFucyIsInRpdGxlIiwibWVudUFjdGl2ZSIsImRhc2hib2FyZCIsImhvbWUiLCJtb2R1bGUiLCJOYXZNb2R1bGVzIiwibW9kdWxlcyIsInN1Yk1lbnVBY3RpdmUiLCJ1c2VyIiwiY29udGFjdCIsInNldHRpbmciLCJOYXZQYXJhbWV0ZXJzIiwic2V0dGluZ3MiLCJfcmVmIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiaXNHcmFudGVkIiwibmFtZSIsImtleSIsIl9yZWYyIiwiTmF2VGFiTGkiLCJpc0FjdGl2ZSIsInJvdXRlIiwiTmF2VGFicyIsIm5hdlRhYnMiLCJuYXZUYWJBY3RpdmUiLCJ0YWIiLCJfZXh0ZW5kcyIsInVzZXJzIiwiRnVsbENhbGVuZGFyIiwiYm9vdHN0cmFwNVBsdWdpbiIsInRpbWVHcmlkUGx1Z2luIiwiYm9vdHN0cmFwIiwiaW50ZXJhY3Rpb25QbHVnaW4iLCJDYWxlbmRhciIsInBsdWdpbnMiLCJpbml0aWFsVmlldyIsImxvY2FsZSIsInRpdGxlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsInNsb3RMYWJlbEZvcm1hdCIsImhvdXIiLCJtaW51dGUiLCJvbWl0WmVyb01pbnV0ZSIsImhvdXIxMiIsImV2ZW50cyIsIndlZWtlbmRzIiwidGhlbWVTeXN0ZW0iLCJzbG90TWluVGltZSIsInNsb3RNYXhUaW1lIiwiaGVpZ2h0IiwiZXZlbnREaWRNb3VudCIsImluZm8iLCJUb29sdGlwIiwiZWwiLCJldmVudCIsImV4dGVuZGVkUHJvcHMiLCJjb250ZW50IiwicGxhY2VtZW50IiwidHJpZ2dlciIsImh0bWwiXSwic291cmNlUm9vdCI6IiJ9