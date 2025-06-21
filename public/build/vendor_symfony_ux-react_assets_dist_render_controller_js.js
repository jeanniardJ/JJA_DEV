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
  if (false) // removed by dead control flow
{} else {
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
      this._renderReactElement(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_14__.createElement(component, props, null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtcmVhY3RfYXNzZXRzX2Rpc3RfcmVuZGVyX2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUN0QjtBQUNTO0FBRW5DLElBQUlHLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFFZixJQUFJQyxpQkFBaUI7QUFFckIsU0FBU0MsYUFBYUEsQ0FBQSxFQUFJO0VBQ3pCLElBQUlELGlCQUFpQixFQUFFLE9BQU9ELE1BQU07RUFDcENDLGlCQUFpQixHQUFHLENBQUM7RUFFckIsSUFBSUUsQ0FBQyxHQUFHSix1Q0FBVTtFQUNsQixJQUFJSyxLQUFxQyxFQUFFO0FBQUEsRUFHMUMsTUFBTTtJQUNMLElBQUlLLENBQUMsR0FBR04sQ0FBQyxDQUFDTyxrREFBa0Q7SUFDNURWLE1BQU0sQ0FBQ08sVUFBVSxHQUFHLFVBQVNJLENBQUMsRUFBRUMsQ0FBQyxFQUFFO01BQ2pDSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLElBQUk7TUFDOUIsSUFBSTtRQUNGLE9BQU9WLENBQUMsQ0FBQ0ksVUFBVSxDQUFDSSxDQUFDLEVBQUVDLENBQUMsQ0FBQztNQUMzQixDQUFDLFNBQVM7UUFDUkgsQ0FBQyxDQUFDSSxxQkFBcUIsR0FBRyxLQUFLO01BQ2pDO0lBQ0YsQ0FBQztJQUNEYixNQUFNLENBQUNRLFdBQVcsR0FBRyxVQUFTRyxDQUFDLEVBQUVHLENBQUMsRUFBRUYsQ0FBQyxFQUFFO01BQ3JDSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLElBQUk7TUFDOUIsSUFBSTtRQUNGLE9BQU9WLENBQUMsQ0FBQ0ssV0FBVyxDQUFDRyxDQUFDLEVBQUVHLENBQUMsRUFBRUYsQ0FBQyxDQUFDO01BQy9CLENBQUMsU0FBUztRQUNSSCxDQUFDLENBQUNJLHFCQUFxQixHQUFHLEtBQUs7TUFDakM7SUFDRixDQUFDO0VBQ0g7RUFDQSxPQUFPYixNQUFNO0FBQ2Q7QUFFQSxJQUFJZSxhQUFhLEdBQUdiLGFBQWEsQ0FBQyxDQUFDO0FBQUMsSUFFOUJjLFNBQVMsMEJBQUFDLFdBQUE7RUFBQSxTQUFBRCxVQUFBO0lBQUFFLGVBQUEsT0FBQUYsU0FBQTtJQUFBLE9BQUFHLFVBQUEsT0FBQUgsU0FBQSxFQUFBSSxTQUFBO0VBQUE7RUFBQUMsU0FBQSxDQUFBTCxTQUFBLEVBQUFDLFdBQUE7RUFBQSxPQUFBSyxZQUFBLENBQUFOLFNBQUE7SUFBQU8sR0FBQTtJQUFBQyxLQUFBLEVBQ1gsU0FBQUMsT0FBT0EsQ0FBQSxFQUFHO01BQ04sSUFBTUMsS0FBSyxHQUFHLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHLElBQUk7TUFDdEQsSUFBSSxDQUFDQyxhQUFhLENBQUMsU0FBUyxFQUFFO1FBQUVDLFNBQVMsRUFBRSxJQUFJLENBQUNDLGNBQWM7UUFBRUosS0FBSyxFQUFFQTtNQUFNLENBQUMsQ0FBQztNQUMvRSxJQUFJLENBQUMsSUFBSSxDQUFDSSxjQUFjLEVBQUU7UUFDdEIsTUFBTSxJQUFJQyxLQUFLLENBQUMseUJBQXlCLENBQUM7TUFDOUM7TUFDQSxJQUFNRixTQUFTLEdBQUdHLE1BQU0sQ0FBQ0MscUJBQXFCLENBQUMsSUFBSSxDQUFDSCxjQUFjLENBQUM7TUFDbkUsSUFBSSxDQUFDSSxtQkFBbUIsY0FBQ3BDLGlEQUFtQixDQUFDK0IsU0FBUyxFQUFFSCxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7TUFDckUsSUFBSSxDQUFDRSxhQUFhLENBQUMsT0FBTyxFQUFFO1FBQ3hCUSxhQUFhLEVBQUUsSUFBSSxDQUFDTixjQUFjO1FBQ2xDRCxTQUFTLEVBQUVBLFNBQVM7UUFDcEJILEtBQUssRUFBRUE7TUFDWCxDQUFDLENBQUM7SUFDTjtFQUFDO0lBQUFILEdBQUE7SUFBQUMsS0FBQSxFQUNELFNBQUFhLFVBQVVBLENBQUEsRUFBRztNQUNULElBQUksSUFBSSxDQUFDQyxjQUFjLEVBQUU7UUFDckI7TUFDSjtNQUNBLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO01BQzNCLElBQUksQ0FBQ2IsYUFBYSxDQUFDLFNBQVMsRUFBRTtRQUMxQkMsU0FBUyxFQUFFLElBQUksQ0FBQ0MsY0FBYztRQUM5QkosS0FBSyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxHQUFHO01BQy9DLENBQUMsQ0FBQztJQUNOO0VBQUM7SUFBQUosR0FBQTtJQUFBQyxLQUFBLEVBQ0QsU0FBQVUsbUJBQW1CQSxDQUFDUSxZQUFZLEVBQUU7TUFDOUIsSUFBTUgsT0FBTyxHQUFHLElBQUksQ0FBQ0EsT0FBTztNQUM1QixJQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBSSxFQUFFO1FBQ2ZELE9BQU8sQ0FBQ0MsSUFBSSxHQUFHekIsYUFBYSxDQUFDUixVQUFVLENBQUMsSUFBSSxDQUFDZ0MsT0FBTyxDQUFDO01BQ3pEO01BQ0FBLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDRyxNQUFNLENBQUNELFlBQVksQ0FBQztJQUNyQztFQUFDO0lBQUFuQixHQUFBO0lBQUFDLEtBQUEsRUFDRCxTQUFBSSxhQUFhQSxDQUFDZ0IsSUFBSSxFQUFFQyxPQUFPLEVBQUU7TUFDekIsSUFBSSxDQUFDQyxRQUFRLENBQUNGLElBQUksRUFBRTtRQUFFRyxNQUFNLEVBQUVGLE9BQU87UUFBRUcsTUFBTSxFQUFFO01BQVEsQ0FBQyxDQUFDO0lBQzdEO0VBQUM7QUFBQSxFQWxDbUJuRCwyREFBVTtBQW9DbENtQixTQUFTLENBQUNpQyxNQUFNLEdBQUc7RUFDZnBCLFNBQVMsRUFBRXFCLE1BQU07RUFDakJ4QixLQUFLLEVBQUV5QixNQUFNO0VBQ2JDLFNBQVMsRUFBRTtJQUFFQyxJQUFJLEVBQUVDLE9BQU87SUFBRUMsT0FBTyxFQUFFO0VBQU07QUFDL0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYS1kZXYvLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVxdWlyZSQkMCBmcm9tICdyZWFjdC1kb20nO1xuXG52YXIgY2xpZW50ID0ge307XG5cbnZhciBoYXNSZXF1aXJlZENsaWVudDtcblxuZnVuY3Rpb24gcmVxdWlyZUNsaWVudCAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZENsaWVudCkgcmV0dXJuIGNsaWVudDtcblx0aGFzUmVxdWlyZWRDbGllbnQgPSAxO1xuXG5cdHZhciBtID0gcmVxdWlyZSQkMDtcblx0aWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcblx0ICBjbGllbnQuY3JlYXRlUm9vdCA9IG0uY3JlYXRlUm9vdDtcblx0ICBjbGllbnQuaHlkcmF0ZVJvb3QgPSBtLmh5ZHJhdGVSb290O1xuXHR9IGVsc2Uge1xuXHQgIHZhciBpID0gbS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblx0ICBjbGllbnQuY3JlYXRlUm9vdCA9IGZ1bmN0aW9uKGMsIG8pIHtcblx0ICAgIGkudXNpbmdDbGllbnRFbnRyeVBvaW50ID0gdHJ1ZTtcblx0ICAgIHRyeSB7XG5cdCAgICAgIHJldHVybiBtLmNyZWF0ZVJvb3QoYywgbyk7XG5cdCAgICB9IGZpbmFsbHkge1xuXHQgICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdCAgY2xpZW50Lmh5ZHJhdGVSb290ID0gZnVuY3Rpb24oYywgaCwgbykge1xuXHQgICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuXHQgICAgdHJ5IHtcblx0ICAgICAgcmV0dXJuIG0uaHlkcmF0ZVJvb3QoYywgaCwgbyk7XG5cdCAgICB9IGZpbmFsbHkge1xuXHQgICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuXHQgICAgfVxuXHQgIH07XG5cdH1cblx0cmV0dXJuIGNsaWVudDtcbn1cblxudmFyIGNsaWVudEV4cG9ydHMgPSByZXF1aXJlQ2xpZW50KCk7XG5cbmNsYXNzIGRlZmF1bHRfMSBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGNvbnN0IHByb3BzID0gdGhpcy5wcm9wc1ZhbHVlID8gdGhpcy5wcm9wc1ZhbHVlIDogbnVsbDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjb25uZWN0JywgeyBjb21wb25lbnQ6IHRoaXMuY29tcG9uZW50VmFsdWUsIHByb3BzOiBwcm9wcyB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudFZhbHVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBvbmVudCBzcGVjaWZpZWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50ID0gd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCh0aGlzLmNvbXBvbmVudFZhbHVlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyUmVhY3RFbGVtZW50KFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcywgbnVsbCkpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ21vdW50Jywge1xuICAgICAgICAgICAgY29tcG9uZW50TmFtZTogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogY29tcG9uZW50LFxuICAgICAgICAgICAgcHJvcHM6IHByb3BzLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucGVybWFuZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNsaWVudEV4cG9ydHMuY3JlYXRlUm9vdCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucm9vdC5yZW5kZXIocmVhY3RFbGVtZW50KTtcbiAgICB9XG4gICAgZGlzcGF0Y2hFdmVudChuYW1lLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2gobmFtZSwgeyBkZXRhaWw6IHBheWxvYWQsIHByZWZpeDogJ3JlYWN0JyB9KTtcbiAgICB9XG59XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIGNvbXBvbmVudDogU3RyaW5nLFxuICAgIHByb3BzOiBPYmplY3QsXG4gICAgcGVybWFuZW50OiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJSZWFjdCIsInJlcXVpcmUkJDAiLCJjbGllbnQiLCJoYXNSZXF1aXJlZENsaWVudCIsInJlcXVpcmVDbGllbnQiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiY3JlYXRlUm9vdCIsImh5ZHJhdGVSb290IiwiaSIsIl9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEIiwiYyIsIm8iLCJ1c2luZ0NsaWVudEVudHJ5UG9pbnQiLCJoIiwiY2xpZW50RXhwb3J0cyIsImRlZmF1bHRfMSIsIl9Db250cm9sbGVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29ubmVjdCIsInByb3BzIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnQiLCJjb21wb25lbnRWYWx1ZSIsIkVycm9yIiwid2luZG93IiwicmVzb2x2ZVJlYWN0Q29tcG9uZW50IiwiX3JlbmRlclJlYWN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjb21wb25lbnROYW1lIiwiZGlzY29ubmVjdCIsInBlcm1hbmVudFZhbHVlIiwiZWxlbWVudCIsInJvb3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicmVuZGVyIiwibmFtZSIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsInZhbHVlcyIsIlN0cmluZyIsIk9iamVjdCIsInBlcm1hbmVudCIsInR5cGUiLCJCb29sZWFuIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=