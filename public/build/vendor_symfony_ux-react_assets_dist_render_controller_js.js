"use strict";
(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["vendor_symfony_ux-react_assets_dist_render_controller_js"],{

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ default_1; }
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
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



var client = {};
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client;
  hasRequiredClient = 1;
  var m = react_dom__WEBPACK_IMPORTED_MODULE_15__;
  if (false) {} else {
    var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    client.createRoot = function (c, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.createRoot(c, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
    client.hydrateRoot = function (c, h, o) {
      i.usingClientEntryPoint = true;
      try {
        return m.hydrateRoot(c, h, o);
      } finally {
        i.usingClientEntryPoint = false;
      }
    };
  }
  return client;
}
var clientExports = requireClient();
var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    _classCallCheck(this, default_1);
    return _callSuper(this, default_1, arguments);
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      if (this.permanentValue) {
        return;
      }
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = clientExports.createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);
default_1.values = {
  component: String,
  props: Object,
  permanent: {
    type: Boolean,
    default: false
  }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtcmVhY3RfYXNzZXRzX2Rpc3RfcmVuZGVyX2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUN0QjtBQUNTO0FBRW5DLElBQUlHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixJQUFJQyxpQkFBaUI7QUFFckIsU0FBU0MsYUFBYUEsQ0FBQSxFQUFJO0VBQ3pCLElBQUlELGlCQUFpQixFQUFFLE9BQU9ELE1BQU07RUFDcENDLGlCQUFpQixHQUFHLENBQUM7RUFFckIsSUFBSUUsQ0FBQyxHQUFHSix1Q0FBVTtFQUNsQixJQUFJSyxLQUFxQyxFQUFFLEVBRzFDLE1BQU07SUFDTCxJQUFJSyxDQUFDLEdBQUdOLENBQUMsQ0FBQ08sa0RBQWtEO0lBQzVEVixNQUFNLENBQUNPLFVBQVUsR0FBRyxVQUFTSSxDQUFDLEVBQUVDLENBQUMsRUFBRTtNQUNqQ0gsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxJQUFJO01BQzlCLElBQUk7UUFDRixPQUFPVixDQUFDLENBQUNJLFVBQVUsQ0FBQ0ksQ0FBQyxFQUFFQyxDQUFDLENBQUM7TUFDM0IsQ0FBQyxTQUFTO1FBQ1JILENBQUMsQ0FBQ0kscUJBQXFCLEdBQUcsS0FBSztNQUNqQztJQUNGLENBQUM7SUFDRGIsTUFBTSxDQUFDUSxXQUFXLEdBQUcsVUFBU0csQ0FBQyxFQUFFRyxDQUFDLEVBQUVGLENBQUMsRUFBRTtNQUNyQ0gsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxJQUFJO01BQzlCLElBQUk7UUFDRixPQUFPVixDQUFDLENBQUNLLFdBQVcsQ0FBQ0csQ0FBQyxFQUFFRyxDQUFDLEVBQUVGLENBQUMsQ0FBQztNQUMvQixDQUFDLFNBQVM7UUFDUkgsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxLQUFLO01BQ2pDO0lBQ0YsQ0FBQztFQUNIO0VBQ0EsT0FBT2IsTUFBTTtBQUNkO0FBRUEsSUFBSWUsYUFBYSxHQUFHYixhQUFhLENBQUMsQ0FBQztBQUFDLElBRTlCYyxTQUFTLDBCQUFBQyxXQUFBO0VBQUEsU0FBQUQsVUFBQTtJQUFBRSxlQUFBLE9BQUFGLFNBQUE7SUFBQSxPQUFBRyxVQUFBLE9BQUFILFNBQUEsRUFBQUksU0FBQTtFQUFBO0VBQUFDLFNBQUEsQ0FBQUwsU0FBQSxFQUFBQyxXQUFBO0VBQUEsT0FBQUssWUFBQSxDQUFBTixTQUFBO0lBQUFPLEdBQUE7SUFBQUMsS0FBQSxFQUNYLFNBQUFDLFFBQUEsRUFBVTtNQUNOLElBQU1DLEtBQUssR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRyxJQUFJO01BQ3RELElBQUksQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUFFQyxTQUFTLEVBQUUsSUFBSSxDQUFDQyxjQUFjO1FBQUVKLEtBQUssRUFBRUE7TUFBTSxDQUFDLENBQUM7TUFDL0UsSUFBSSxDQUFDLElBQUksQ0FBQ0ksY0FBYyxFQUFFO1FBQ3RCLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO01BQzlDO01BQ0EsSUFBTUYsU0FBUyxHQUFHRyxNQUFNLENBQUNDLHFCQUFxQixDQUFDLElBQUksQ0FBQ0gsY0FBYyxDQUFDO01BQ25FLElBQUksQ0FBQ0ksbUJBQW1CLGVBQUNwQyxpREFBbUIsQ0FBQytCLFNBQVMsRUFBRUgsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQ3JFLElBQUksQ0FBQ0UsYUFBYSxDQUFDLE9BQU8sRUFBRTtRQUN4QlEsYUFBYSxFQUFFLElBQUksQ0FBQ04sY0FBYztRQUNsQ0QsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCSCxLQUFLLEVBQUVBO01BQ1gsQ0FBQyxDQUFDO0lBQ047RUFBQztJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBYSxXQUFBLEVBQWE7TUFDVCxJQUFJLElBQUksQ0FBQ0MsY0FBYyxFQUFFO1FBQ3JCO01BQ0o7TUFDQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNiLGFBQWEsQ0FBQyxTQUFTLEVBQUU7UUFDMUJDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGNBQWM7UUFDOUJKLEtBQUssRUFBRSxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNBLFVBQVUsR0FBRztNQUMvQyxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFKLEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFVLG9CQUFvQlEsWUFBWSxFQUFFO01BQzlCLElBQU1ILE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87TUFDNUIsSUFBSSxDQUFDQSxPQUFPLENBQUNDLElBQUksRUFBRTtRQUNmRCxPQUFPLENBQUNDLElBQUksR0FBR3pCLGFBQWEsQ0FBQ1IsVUFBVSxDQUFDLElBQUksQ0FBQ2dDLE9BQU8sQ0FBQztNQUN6RDtNQUNBQSxPQUFPLENBQUNDLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxZQUFZLENBQUM7SUFDckM7RUFBQztJQUFBbkIsR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQUksY0FBY2dCLElBQUksRUFBRUMsT0FBTyxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsUUFBUSxDQUFDRixJQUFJLEVBQUU7UUFBRUcsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0FBQUEsRUFsQ21CbkQsMkRBQVU7QUFvQ2xDbUIsU0FBUyxDQUFDaUMsTUFBTSxHQUFHO0VBQ2ZwQixTQUFTLEVBQUVxQixNQUFNO0VBQ2pCeEIsS0FBSyxFQUFFeUIsTUFBTTtFQUNiQyxTQUFTLEVBQUU7SUFBRUMsSUFBSSxFQUFFQyxPQUFPO0lBQUVDLE9BQU8sRUFBRTtFQUFNO0FBQy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamEtZGV2Ly4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVuZGVyX2NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlcXVpcmUkJDAgZnJvbSAncmVhY3QtZG9tJztcblxudmFyIGNsaWVudCA9IHt9O1xuXG52YXIgaGFzUmVxdWlyZWRDbGllbnQ7XG5cbmZ1bmN0aW9uIHJlcXVpcmVDbGllbnQgKCkge1xuXHRpZiAoaGFzUmVxdWlyZWRDbGllbnQpIHJldHVybiBjbGllbnQ7XG5cdGhhc1JlcXVpcmVkQ2xpZW50ID0gMTtcblxuXHR2YXIgbSA9IHJlcXVpcmUkJDA7XG5cdGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG5cdCAgY2xpZW50LmNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG5cdCAgY2xpZW50Lmh5ZHJhdGVSb290ID0gbS5oeWRyYXRlUm9vdDtcblx0fSBlbHNlIHtcblx0ICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cdCAgY2xpZW50LmNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG5cdCAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IHRydWU7XG5cdCAgICB0cnkge1xuXHQgICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuXHQgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcblx0ICAgIH1cblx0ICB9O1xuXHQgIGNsaWVudC5oeWRyYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIGgsIG8pIHtcblx0ICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHJldHVybiBtLmh5ZHJhdGVSb290KGMsIGgsIG8pO1xuXHQgICAgfSBmaW5hbGx5IHtcblx0ICAgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSBmYWxzZTtcblx0ICAgIH1cblx0ICB9O1xuXHR9XG5cdHJldHVybiBjbGllbnQ7XG59XG5cbnZhciBjbGllbnRFeHBvcnRzID0gcmVxdWlyZUNsaWVudCgpO1xuXG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0KCkge1xuICAgICAgICBjb25zdCBwcm9wcyA9IHRoaXMucHJvcHNWYWx1ZSA/IHRoaXMucHJvcHNWYWx1ZSA6IG51bGw7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIHsgY29tcG9uZW50OiB0aGlzLmNvbXBvbmVudFZhbHVlLCBwcm9wczogcHJvcHMgfSk7XG4gICAgICAgIGlmICghdGhpcy5jb21wb25lbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wb25lbnQgc3BlY2lmaWVkLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHdpbmRvdy5yZXNvbHZlUmVhY3RDb21wb25lbnQodGhpcy5jb21wb25lbnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlclJlYWN0RWxlbWVudChSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMsIG51bGwpKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdtb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcbiAgICAgICAgICAgIHByb3BzOiBwcm9wcyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnBlcm1hbmVudFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LnJvb3QudW5tb3VudCgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3VubW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsXG4gICAgICAgICAgICBwcm9wczogdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9yZW5kZXJSZWFjdEVsZW1lbnQocmVhY3RFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICAgIGlmICghZWxlbWVudC5yb290KSB7XG4gICAgICAgICAgICBlbGVtZW50LnJvb3QgPSBjbGllbnRFeHBvcnRzLmNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxuICAgIHBlcm1hbmVudDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUmVhY3QiLCJyZXF1aXJlJCQwIiwiY2xpZW50IiwiaGFzUmVxdWlyZWRDbGllbnQiLCJyZXF1aXJlQ2xpZW50IiwibSIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsImNyZWF0ZVJvb3QiLCJoeWRyYXRlUm9vdCIsImkiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiaCIsImNsaWVudEV4cG9ydHMiLCJkZWZhdWx0XzEiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJwcm9wcyIsInByb3BzVmFsdWUiLCJkaXNwYXRjaEV2ZW50IiwiY29tcG9uZW50IiwiY29tcG9uZW50VmFsdWUiLCJFcnJvciIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsImRpc2Nvbm5lY3QiLCJwZXJtYW5lbnRWYWx1ZSIsImVsZW1lbnQiLCJyb290IiwidW5tb3VudCIsInJlYWN0RWxlbWVudCIsInJlbmRlciIsIm5hbWUiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJ2YWx1ZXMiLCJTdHJpbmciLCJPYmplY3QiLCJwZXJtYW5lbnQiLCJ0eXBlIiwiQm9vbGVhbiIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9