(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["app"],{

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


/***/ }),

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
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");





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


// any CSS you import will output into a single css file (app.css in this case)
// assets/app.js
var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // import jQuery

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");

//import './styles/app.scss' // import the main css file

__webpack_require__.e(/*! import() */ "assets__layouts_modals_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/modals */ "./assets/_layouts/modals.js"));
__webpack_require__.e(/*! import() */ "assets__layouts_toasts_js").then(__webpack_require__.bind(__webpack_require__, /*! ./_layouts/toasts */ "./assets/_layouts/toasts.js"));
function random() {
  return Math.random();
}

/* Génère 50 bulles aléatoires */
for (var i = 0; i < 10; i++) {
  var bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.classList.add('bubble' + (i % 5 + 1));
  bubble.style.top = random() * 100 + '%';
  bubble.style.left = random() * 100 + '%';
  bubble.style.transform = 'scale(calc(0.5 + 5 * ' + random() + '))';
  document.body.appendChild(bubble);
}

// Vérifiez si le navigateur supporte les services workers
if ('serviceWorker' in navigator) {
  // Enregistrez le service worker
  navigator.serviceWorker.register('/build/service-worker.js').then(function (registration) {
    console.debug('Service Worker enregistré avec succès');
  }).catch(function (err) {
    console.debug("L'enregistrement du Service Worker a échoué : ", err);
  });
}
(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_5__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers/app sync recursive \\.(j%7Ct)sx?$"));

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

/***/ "./assets/react/controllers/app/Nav.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/app/Nav.jsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }
/* harmony export */ });
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
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_11__);
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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isScrolled = _useState2[0],
    setIsScrolled = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    show = _useState4[0],
    setShow = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(function () {
    var onScroll = function onScroll() {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Ajoute l'écouteur d'événement lors du montage du composant
    window.addEventListener('scroll', onScroll);
    var navbar = document.querySelector('.navbar-toggler');
    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === 'aria-expanded') {
          var isExpanded = navbar.getAttribute('aria-expanded') === 'true';
          setShow(isExpanded);
        }
      });
    });
    observer.observe(navbar, {
      attributes: true
    });

    // Nettoie l'écouteur lors du démontage du composant
    return function () {
      window.removeEventListener('scroll', onScroll), observer.disconnect();
    };
  }, []);

  // Ajoute 'bg-dark' de Bootstrap si isScrolled est true ou si le menu est affiché
  var menuClassName = "navbar navbar-expand-lg fixed-top ".concat(isScrolled || show ? ' bg-dark' : '');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("nav", {
    className: "".concat(menuClassName)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    id: "jjadev_logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "navbar-brand d-flex align-items-center",
    href: props.link_home,
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles dans le Jura"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("img", {
    src: props.logo,
    srcSet: props.logo,
    width: 40,
    height: 40,
    alt: "Logo de l'entreprise",
    title: "JJA DEV - Cr\xE9ation de sites web et applications mobiles"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
    className: "ms-3"
  }, "JJA DEV"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("div", {
    className: "collapse navbar-collapse justify-content-end",
    id: "navbarNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("ul", {
    className: "navbar-nav mr-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    "aria-current": "page",
    href: props.link_home,
    title: "Retour \xE0 l\\'accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: props.link_home + '#services',
    title: "Aller \xE0 la section \"Services\""
  }, "Services")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: props.link_home + '#contact',
    title: "Aller \xE0 la section \"Contact\""
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: props.link_blog,
    title: "Aller sur le blog"
  }, "Blog"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("ul", {
    className: "navbar-nav ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("a", {
    className: "nav-link",
    href: "https://www.facebook.com/jjadevweb",
    "aria-label": "Lien vers la page facebook de l'entreprise",
    title: "Aller sur la page facebook de l'entreprise"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_13___default().createElement("i", {
    className: "bi bi-facebook"
  })))))));
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js","vendors-node_modules_popperjs_core_lib_index_js-node_modules_symfony_stimulus-bridge_dist_ind-0b536d","node_modules_symfony_stimulus-bridge_dist_webpack_loader_js_assets_controllers_json-vendor_sy-4f8c26"], function() { return __webpack_exec__("./assets/app.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQzBDLFNBQVU7SUFDdEJSLEtBQUssRUFBQztFQUFtQixHQUM1QixNQUVFLENBQ0gsQ0FDSixDQUFDLGVBQ0xyQywyREFBQTtJQUFJaUMsU0FBUyxFQUFDO0VBQW9CLGdCQUM5QmpDLDJEQUFBO0lBQUlpQyxTQUFTLEVBQUM7RUFBVSxnQkFDcEJqQywyREFBQTtJQUNJaUMsU0FBUyxFQUFDLFVBQVU7SUFDcEJFLElBQUksRUFBQyxvQ0FBb0M7SUFDekMsY0FBVyw0Q0FBNEM7SUFDdkRFLEtBQUssRUFBQztFQUE0QyxnQkFFbERyQywyREFBQTtJQUFHaUMsU0FBUyxFQUFDO0VBQWdCLENBQUksQ0FDbEMsQ0FDSCxDQUNKLENBQ0gsQ0FDSixDQUNKLENBQUM7QUFFZCIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYS1kZXYvIFxcLltqdF1zeCIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FwcC8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9jb250cm9sbGVycy9hcHAvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL2Jvb3RzdHJhcC5qcyIsIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FwcC9OYXYuanN4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9oZWxsb19jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvYXBwL2hlbGxvX2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMvYXBwIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL05hdi5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hcHAvTmF2LmpzeFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9hcHAgc3luYyByZWN1cnNpdmUgXFxcXC4oaiU3Q3Qpc3g/JFwiOyIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuXG4vKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIFN0aW11bHVzIGNvbnRyb2xsZXIhXG4gKlxuICogQW55IGVsZW1lbnQgd2l0aCBhIGRhdGEtY29udHJvbGxlcj1cImhlbGxvXCIgYXR0cmlidXRlIHdpbGwgY2F1c2VcbiAqIHRoaXMgY29udHJvbGxlciB0byBiZSBleGVjdXRlZC4gVGhlIG5hbWUgXCJoZWxsb1wiIGNvbWVzIGZyb20gdGhlIGZpbGVuYW1lOlxuICogaGVsbG9fY29udHJvbGxlci5qcyAtPiBcImhlbGxvXCJcbiAqXG4gKiBEZWxldGUgdGhpcyBmaWxlIG9yIGFkYXB0IGl0IGZvciB5b3VyIHVzZSFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gU3RpbXVsdXMhIEVkaXQgbWUgaW4gYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMnO1xuICAgIH1cbn1cbiIsIi8qXHJcbiAqIENvcHlyaWdodCAoYykgMjAyMy4gVG91cyBkcm9pdHMgcsOpc2VydsOpcy5cclxuICogQXVjdW4gw6lsw6ltZW50IGRlIGNlIHNpdGUgd2ViIG5lIHBldXQgw6p0cmUgcmVwcm9kdWl0LCBhZmZpY2jDqSwgbW9kaWZpw6kgb3UgZGlzdHJpYnXDqSBzYW5zIGxhIHBlcm1pc3Npb24gw6ljcml0ZSBwcsOpYWxhYmxlIGR1IHRpdHVsYWlyZSBkdSBkcm9pdCBkJ2F1dGV1ci5cclxuICogQ2Ugc2l0ZSB3ZWIsIHNvbiBjb250ZW51IGV0IHRvdXMgbGVzIHByb2R1aXRzIGNyw6nDqXMgcGFyIEpKQSBERVYgc29udCBwcm90w6lnw6lzIHBhciBsZXMgbG9pcyBzdXIgbGVzIGRyb2l0cyBkJ2F1dGV1ciBldCBsYSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS4gVG91cyBsZXMgZHJvaXRzIHNvbnQgcsOpc2VydsOpcyDDoCBKSkEgREVWLlxyXG4gKlxyXG4gKiBMJ3V0aWxpc2F0aW9uIG5vbiBhdXRvcmlzw6llIGRlIHRvdXQgw6lsw6ltZW50IGRlIGNlIHNpdGUsIHkgY29tcHJpcywgbWFpcyBzYW5zIHMneSBsaW1pdGVyLCBsZSB0ZXh0ZSwgbGVzIGltYWdlcywgbGVzIGRlc3NpbnMsIGxlcyBncmFwaGlxdWVzLCBsZXMgbG9nb3MgZXQgbGVzIG1hcnF1ZXMgZGUgY29tbWVyY2UsIHBldXQgY29uc3RpdHVlciB1bmUgdmlvbGF0aW9uIGRlcyBsb2lzIHN1ciBsZSBkcm9pdCBkJ2F1dGV1ciwgZGVzIGxvaXMgc3VyIGxlcyBtYXJxdWVzIGRlIGNvbW1lcmNlIG91IGQnYXV0cmVzIGxvaXMgYXBwbGljYWJsZXMgZXQgcGV1dCBlbnRyYcOubmVyIGRlcyBwb3Vyc3VpdGVzIGp1ZGljaWFpcmVzLlxyXG4gKlxyXG4gKiBQb3VyIG9idGVuaXIgbGEgcGVybWlzc2lvbiBkJ3V0aWxpc2VyIGR1IGNvbnRlbnUgZGUgY2Ugc2l0ZSwgdmV1aWxsZXogY29udGFjdGVyIEpKQSBERVYuXHJcbiAqXHJcbiAqIE1lcmNpIGRlIHZvdHJlIGNvbXByw6loZW5zaW9uIGV0IGRlIHZvdHJlIHJlc3BlY3QgZW52ZXJzIG5vdHJlIHRyYXZhaWwgY3LDqWF0aWYgZXQgbm9zIGRyb2l0cyBkZSBwcm9wcmnDqXTDqSBpbnRlbGxlY3R1ZWxsZS5cclxuICovXHJcbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0J1xyXG5cclxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxyXG4vLyBhc3NldHMvYXBwLmpzXHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKSAvLyBpbXBvcnQgalF1ZXJ5XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKVxyXG5cclxuLy9pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJyAvLyBpbXBvcnQgdGhlIG1haW4gY3NzIGZpbGVcclxuaW1wb3J0ICcuL2Jvb3RzdHJhcC5qcydcclxuXHJcbmltcG9ydCgnLi9fbGF5b3V0cy9tb2RhbHMnKVxyXG5pbXBvcnQoJy4vX2xheW91dHMvdG9hc3RzJylcclxuXHJcbmZ1bmN0aW9uIHJhbmRvbSgpIHtcclxuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpXHJcbn1cclxuXHJcbi8qIEfDqW7DqHJlIDUwIGJ1bGxlcyBhbMOpYXRvaXJlcyAqL1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgIGxldCBidWJibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnViYmxlLmNsYXNzTGlzdC5hZGQoJ2J1YmJsZScpXHJcbiAgICBidWJibGUuY2xhc3NMaXN0LmFkZCgnYnViYmxlJyArICgoaSAlIDUpICsgMSkpXHJcbiAgICBidWJibGUuc3R5bGUudG9wID0gcmFuZG9tKCkgKiAxMDAgKyAnJSdcclxuICAgIGJ1YmJsZS5zdHlsZS5sZWZ0ID0gcmFuZG9tKCkgKiAxMDAgKyAnJSdcclxuICAgIGJ1YmJsZS5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoY2FsYygwLjUgKyA1ICogJyArIHJhbmRvbSgpICsgJykpJ1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChidWJibGUpXHJcbn1cclxuXHJcbi8vIFbDqXJpZmlleiBzaSBsZSBuYXZpZ2F0ZXVyIHN1cHBvcnRlIGxlcyBzZXJ2aWNlcyB3b3JrZXJzXHJcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAvLyBFbnJlZ2lzdHJleiBsZSBzZXJ2aWNlIHdvcmtlclxyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXJcclxuICAgICAgICAucmVnaXN0ZXIoJy9idWlsZC9zZXJ2aWNlLXdvcmtlci5qcycpXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKCdTZXJ2aWNlIFdvcmtlciBlbnJlZ2lzdHLDqSBhdmVjIHN1Y2PDqHMnKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIkwnZW5yZWdpc3RyZW1lbnQgZHUgU2VydmljZSBXb3JrZXIgYSDDqWNob3XDqSA6IFwiLCBlcnIpXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxucmVnaXN0ZXJSZWFjdENvbnRyb2xsZXJDb21wb25lbnRzKHJlcXVpcmUuY29udGV4dCgnLi9yZWFjdC9jb250cm9sbGVycy9hcHAnLCB0cnVlLCAvXFwuKGp8dClzeD8kLykpXHJcbiIsImltcG9ydCB7IHN0YXJ0U3RpbXVsdXNBcHAgfSBmcm9tICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UnXG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChcbiAgICByZXF1aXJlLmNvbnRleHQoXG4gICAgICAgICdAc3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlciEuL2NvbnRyb2xsZXJzL2FwcCcsXG4gICAgICAgIHRydWUsXG4gICAgICAgIC9cXC5banRdc3g/JC9cbiAgICApXG4pXG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpc1Njcm9sbGVkLCBzZXRJc1Njcm9sbGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDUpIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsZWQodHJ1ZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNldElzU2Nyb2xsZWQoZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQWpvdXRlIGwnw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnQgbG9ycyBkdSBtb250YWdlIGR1IGNvbXBvc2FudFxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyLXRvZ2dsZXInKVxyXG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnYXJpYS1leHBhbmRlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0V4cGFuZGVkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2YmFyLmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSdcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93KGlzRXhwYW5kZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG5hdmJhciwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gTmV0dG9pZSBsJ8OpY291dGV1ciBsb3JzIGR1IGTDqW1vbnRhZ2UgZHUgY29tcG9zYW50XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKSxcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKVxyXG4gICAgXHJcbiAgICAvLyBBam91dGUgJ2JnLWRhcmsnIGRlIEJvb3RzdHJhcCBzaSBpc1Njcm9sbGVkIGVzdCB0cnVlIG91IHNpIGxlIG1lbnUgZXN0IGFmZmljaMOpXHJcbiAgICBjb25zdCBtZW51Q2xhc3NOYW1lID0gYG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIGZpeGVkLXRvcCAke1xyXG4gICAgICAgIGlzU2Nyb2xsZWQgfHwgc2hvdyA/ICcgYmctZGFyaycgOiAnJ1xyXG4gICAgfWBcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17YCR7bWVudUNsYXNzTmFtZX1gfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJqamFkZXZfbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ob21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkpKQSBERVYgLSBDcsOpYXRpb24gZGUgc2l0ZXMgd2ViIGV0IGFwcGxpY2F0aW9ucyBtb2JpbGVzIGRhbnMgbGUgSnVyYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNTZXQ9e3Byb3BzLmxvZ299XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nbyBkZSBsJ2VudHJlcHJpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJKSkEgREVWIC0gQ3LDqWF0aW9uIGRlIHNpdGVzIHdlYiBldCBhcHBsaWNhdGlvbnMgbW9iaWxlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1zLTNcIj5KSkEgREVWPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJOYXZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJOYXZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIGp1c3RpZnktY29udGVudC1lbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmF2YmFyTmF2XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jdXJyZW50PVwicGFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ob21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmV0b3VyIMOgIGxcXCdhY2N1ZWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2N1ZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ob21lICsgJyNzZXJ2aWNlcyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9J0FsbGVyIMOgIGxhIHNlY3Rpb24gXCJTZXJ2aWNlc1wiJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ob21lICsgJyNjb250YWN0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nQWxsZXIgw6AgbGEgc2VjdGlvbiBcIkNvbnRhY3RcIidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cHJvcHMubGlua19ibG9nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWxsZXIgc3VyIGxlIGJsb2dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJsb2dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdi1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2pqYWRldndlYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkxpZW4gdmVycyBsYSBwYWdlIGZhY2Vib29rIGRlIGwnZW50cmVwcmlzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBbGxlciBzdXIgbGEgcGFnZSBmYWNlYm9vayBkZSBsJ2VudHJlcHJpc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWZhY2Vib29rXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJfZGVmYXVsdCIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImRlZmF1bHQiLCJyZWdpc3RlclJlYWN0Q29udHJvbGxlckNvbXBvbmVudHMiLCIkIiwicmVxdWlyZSIsInJhbmRvbSIsIk1hdGgiLCJpIiwiYnViYmxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJ0b3AiLCJsZWZ0IiwidHJhbnNmb3JtIiwiYm9keSIsImFwcGVuZENoaWxkIiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIiwidGhlbiIsInJlZ2lzdHJhdGlvbiIsImNvbnNvbGUiLCJkZWJ1ZyIsImNhdGNoIiwiZXJyIiwiY29udGV4dCIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJvcHMiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0Iiwic2hvdyIsInNldFNob3ciLCJvblNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwibmF2YmFyIiwicXVlcnlTZWxlY3RvciIsIm9ic2VydmVyIiwiTXV0YXRpb25PYnNlcnZlciIsIm11dGF0aW9ucyIsImZvckVhY2giLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJpc0V4cGFuZGVkIiwiZ2V0QXR0cmlidXRlIiwib2JzZXJ2ZSIsImF0dHJpYnV0ZXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGlzY29ubmVjdCIsIm1lbnVDbGFzc05hbWUiLCJjb25jYXQiLCJjbGFzc05hbWUiLCJpZCIsImhyZWYiLCJsaW5rX2hvbWUiLCJ0aXRsZSIsInNyYyIsImxvZ28iLCJzcmNTZXQiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInR5cGUiLCJsaW5rX2Jsb2ciXSwic291cmNlUm9vdCI6IiJ9