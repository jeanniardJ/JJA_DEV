"use strict";
(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["vendor_symfony_ux-autocomplete_assets_dist_controller_js"],{

/***/ "./vendor/symfony/ux-autocomplete/assets/dist/controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-autocomplete/assets/dist/controller.js ***!
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
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "./node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/js/tom-select.complete.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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




































/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
var _default_1_instances, _default_1_getCommonConfig, _default_1_createAutocomplete, _default_1_createAutocompleteWithHtmlContents, _default_1_createAutocompleteWithRemoteData, _default_1_stripTags, _default_1_mergeObjects, _default_1_createTomSelect;
var default_1 = /*#__PURE__*/function (_Controller) {
  function default_1() {
    var _this;
    _classCallCheck(this, default_1);
    _this = _callSuper(this, default_1, arguments);
    _default_1_instances.add(_this);
    _this.isObserving = false;
    _this.hasLoadedChoicesPreviously = false;
    _this.originalOptions = [];
    return _this;
  }
  _inherits(default_1, _Controller);
  return _createClass(default_1, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;
      if (!this.mutationObserver) {
        this.mutationObserver = new MutationObserver(function (mutations) {
          _this2.onMutations(mutations);
        });
      }
    }
  }, {
    key: "connect",
    value: function connect() {
      if (this.selectElement) {
        this.originalOptions = this.createOptionsDataStructure(this.selectElement);
      }
      this.initializeTomSelect();
    }
  }, {
    key: "initializeTomSelect",
    value: function initializeTomSelect() {
      if (this.selectElement) {
        this.selectElement.setAttribute('data-skip-morph', '');
      }
      if (this.urlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithRemoteData).call(this, this.urlValue, this.hasMinCharactersValue ? this.minCharactersValue : null);
        return;
      }
      if (this.optionsAsHtmlValue) {
        this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocompleteWithHtmlContents).call(this);
        return;
      }
      this.tomSelect = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createAutocomplete).call(this);
      this.startMutationObserver();
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.stopMutationObserver();
      var currentSelectedValues = [];
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          currentSelectedValues = Array.from(this.selectElement.options).filter(function (option) {
            return option.selected;
          }).map(function (option) {
            return option.value;
          });
        } else {
          currentSelectedValues = [this.selectElement.value];
        }
      }
      this.tomSelect.destroy();
      if (this.selectElement) {
        if (this.selectElement.multiple) {
          Array.from(this.selectElement.options).forEach(function (option) {
            option.selected = currentSelectedValues.includes(option.value);
          });
        } else {
          this.selectElement.value = currentSelectedValues[0];
        }
      }
    }
  }, {
    key: "urlValueChanged",
    value: function urlValueChanged() {
      this.resetTomSelect();
    }
  }, {
    key: "getMaxOptions",
    value: function getMaxOptions() {
      return this.selectElement ? this.selectElement.options.length : 50;
    }
  }, {
    key: "selectElement",
    get: function get() {
      if (!(this.element instanceof HTMLSelectElement)) {
        return null;
      }
      return this.element;
    }
  }, {
    key: "formElement",
    get: function get() {
      if (!(this.element instanceof HTMLInputElement) && !(this.element instanceof HTMLSelectElement)) {
        throw new Error('Autocomplete Stimulus controller can only be used on an <input> or <select>.');
      }
      return this.element;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'autocomplete'
      });
    }
  }, {
    key: "preload",
    get: function get() {
      if (!this.hasPreloadValue) {
        return 'focus';
      }
      if (this.preloadValue === 'false') {
        return false;
      }
      if (this.preloadValue === 'true') {
        return true;
      }
      return this.preloadValue;
    }
  }, {
    key: "resetTomSelect",
    value: function resetTomSelect() {
      if (this.tomSelect) {
        this.dispatchEvent('before-reset', {
          tomSelect: this.tomSelect
        });
        this.stopMutationObserver();
        var currentHtml = this.element.innerHTML;
        var currentValue = this.tomSelect.getValue();
        this.tomSelect.destroy();
        this.element.innerHTML = currentHtml;
        this.initializeTomSelect();
        this.tomSelect.setValue(currentValue);
      }
    }
  }, {
    key: "changeTomSelectDisabledState",
    value: function changeTomSelectDisabledState(isDisabled) {
      this.stopMutationObserver();
      if (isDisabled) {
        this.tomSelect.disable();
      } else {
        this.tomSelect.enable();
      }
      this.startMutationObserver();
    }
  }, {
    key: "startMutationObserver",
    value: function startMutationObserver() {
      if (!this.isObserving && this.mutationObserver) {
        this.mutationObserver.observe(this.element, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: true,
          attributeOldValue: true
        });
        this.isObserving = true;
      }
    }
  }, {
    key: "stopMutationObserver",
    value: function stopMutationObserver() {
      if (this.isObserving && this.mutationObserver) {
        this.mutationObserver.disconnect();
        this.isObserving = false;
      }
    }
  }, {
    key: "onMutations",
    value: function onMutations(mutations) {
      var _this3 = this;
      var changeDisabledState = false;
      var requireReset = false;
      mutations.forEach(function (mutation) {
        switch (mutation.type) {
          case 'attributes':
            if (mutation.target === _this3.element && mutation.attributeName === 'disabled') {
              changeDisabledState = true;
              break;
            }
            if (mutation.target === _this3.element && mutation.attributeName === 'multiple') {
              var isNowMultiple = _this3.element.hasAttribute('multiple');
              var wasMultiple = mutation.oldValue === 'multiple';
              if (isNowMultiple !== wasMultiple) {
                requireReset = true;
              }
              break;
            }
            break;
        }
      });
      var newOptions = this.selectElement ? this.createOptionsDataStructure(this.selectElement) : [];
      var areOptionsEquivalent = this.areOptionsEquivalent(newOptions);
      if (!areOptionsEquivalent || requireReset) {
        this.originalOptions = newOptions;
        this.resetTomSelect();
      }
      if (changeDisabledState) {
        this.changeTomSelectDisabledState(this.formElement.disabled);
      }
    }
  }, {
    key: "createOptionsDataStructure",
    value: function createOptionsDataStructure(selectElement) {
      return Array.from(selectElement.options).map(function (option) {
        return {
          value: option.value,
          text: option.text
        };
      });
    }
  }, {
    key: "areOptionsEquivalent",
    value: function areOptionsEquivalent(newOptions) {
      var filteredOriginalOptions = this.originalOptions.filter(function (option) {
        return option.value !== '';
      });
      var filteredNewOptions = newOptions.filter(function (option) {
        return option.value !== '';
      });
      var originalPlaceholderOption = this.originalOptions.find(function (option) {
        return option.value === '';
      });
      var newPlaceholderOption = newOptions.find(function (option) {
        return option.value === '';
      });
      if (originalPlaceholderOption && newPlaceholderOption && originalPlaceholderOption.text !== newPlaceholderOption.text) {
        return false;
      }
      if (filteredOriginalOptions.length !== filteredNewOptions.length) {
        return false;
      }
      var normalizeOption = function normalizeOption(option) {
        return "".concat(option.value, "-").concat(option.text);
      };
      var originalOptionsSet = new Set(filteredOriginalOptions.map(normalizeOption));
      var newOptionsSet = new Set(filteredNewOptions.map(normalizeOption));
      return originalOptionsSet.size === newOptionsSet.size && _toConsumableArray(originalOptionsSet).every(function (option) {
        return newOptionsSet.has(option);
      });
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_33__.Controller);
_default_1_instances = new WeakSet(), _default_1_getCommonConfig = function _default_1_getCommonConfig() {
  var _this4 = this;
  var plugins = {};
  var isMultiple = !this.selectElement || this.selectElement.multiple;
  if (!this.formElement.disabled && !isMultiple) {
    plugins.clear_button = {
      title: ''
    };
  }
  if (isMultiple) {
    plugins.remove_button = {
      title: ''
    };
  }
  if (this.urlValue) {
    plugins.virtual_scroll = {};
  }
  var render = {
    no_results: function no_results() {
      return "<div class=\"no-results\">".concat(_this4.noResultsFoundTextValue, "</div>");
    },
    option_create: function option_create(data, escapeData) {
      return "<div class=\"create\">".concat(_this4.createOptionTextValue.replace('%placeholder%', "<strong>".concat(escapeData(data.input), "</strong>")), "</div>");
    }
  };
  var config = {
    render: render,
    plugins: plugins,
    onItemAdd: function onItemAdd() {
      _this4.tomSelect.setTextboxValue('');
    },
    closeAfterSelect: true,
    onOptionAdd: function onOptionAdd(value, data) {
      var parentElement = _this4.tomSelect.input;
      var optgroupData = null;
      var optgroup = data[_this4.tomSelect.settings.optgroupField];
      if (optgroup && _this4.tomSelect.optgroups) {
        optgroupData = _this4.tomSelect.optgroups[optgroup];
        if (optgroupData) {
          var optgroupElement = parentElement.querySelector("optgroup[label=\"".concat(optgroupData.label, "\"]"));
          if (optgroupElement) {
            parentElement = optgroupElement;
          }
        }
      }
      var optionElement = document.createElement('option');
      optionElement.value = value;
      optionElement.text = data[_this4.tomSelect.settings.labelField];
      var optionOrder = data.$order;
      var orderedOption = null;
      for (var _i = 0, _Object$entries = Object.entries(_this4.tomSelect.options); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          tomSelectOption = _Object$entries$_i[1];
        if (tomSelectOption.$order === optionOrder) {
          orderedOption = parentElement.querySelector(":scope > option[value=\"".concat(CSS.escape(tomSelectOption[_this4.tomSelect.settings.valueField]), "\"]"));
          break;
        }
      }
      if (orderedOption) {
        orderedOption.insertAdjacentElement('afterend', optionElement);
      } else if (optionOrder >= 0) {
        parentElement.append(optionElement);
      } else {
        parentElement.prepend(optionElement);
      }
    }
  };
  if (!this.selectElement && !this.urlValue) {
    config.shouldLoad = function () {
      return false;
    };
  }
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, config, this.tomSelectOptionsValue);
}, _default_1_createAutocomplete = function _default_1_createAutocomplete() {
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this), {
    maxOptions: this.getMaxOptions()
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithHtmlContents = function _default_1_createAutocompleteWithHtmlContents() {
  var _commonConfig$labelFi,
    _this5 = this;
  var commonConfig = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this);
  var labelField = (_commonConfig$labelFi = commonConfig.labelField) !== null && _commonConfig$labelFi !== void 0 ? _commonConfig$labelFi : 'text';
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, commonConfig, {
    maxOptions: this.getMaxOptions(),
    score: function score(search) {
      var scoringFunction = _this5.tomSelect.getScoreFunction(search);
      return function (item) {
        return scoringFunction(_objectSpread(_objectSpread({}, item), {}, {
          text: __classPrivateFieldGet(_this5, _default_1_instances, "m", _default_1_stripTags).call(_this5, item[labelField])
        }));
      };
    },
    render: {
      item: function item(_item) {
        return "<div>".concat(_item[labelField], "</div>");
      },
      option: function option(item) {
        return "<div>".concat(item[labelField], "</div>");
      }
    }
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_createAutocompleteWithRemoteData = function _default_1_createAutocompleteWithRemoteData(autocompleteEndpointUrl, minCharacterLength) {
  var _commonConfig$labelFi2,
    _this7 = this;
  var commonConfig = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_getCommonConfig).call(this);
  var labelField = (_commonConfig$labelFi2 = commonConfig.labelField) !== null && _commonConfig$labelFi2 !== void 0 ? _commonConfig$labelFi2 : 'text';
  var config = __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_mergeObjects).call(this, commonConfig, {
    firstUrl: function firstUrl(query) {
      var separator = autocompleteEndpointUrl.includes('?') ? '&' : '?';
      return "".concat(autocompleteEndpointUrl).concat(separator, "query=").concat(encodeURIComponent(query));
    },
    load: function load(query, callback) {
      var _this6 = this;
      var url = this.getUrl(query);
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (json) {
        _this6.setNextUrl(query, json.next_page);
        callback(json.results.options || json.results, json.results.optgroups || []);
      }).catch(function () {
        return callback([], []);
      });
    },
    shouldLoad: function shouldLoad(query) {
      if (null !== minCharacterLength) {
        return query.length >= minCharacterLength;
      }
      if (_this7.hasLoadedChoicesPreviously) {
        return true;
      }
      if (query.length > 0) {
        _this7.hasLoadedChoicesPreviously = true;
      }
      return query.length >= 3;
    },
    optgroupField: 'group_by',
    score: function score(search) {
      return function (item) {
        return 1;
      };
    },
    render: {
      option: function option(item) {
        return "<div>".concat(item[labelField], "</div>");
      },
      item: function item(_item2) {
        return "<div>".concat(_item2[labelField], "</div>");
      },
      loading_more: function loading_more() {
        return "<div class=\"loading-more-results\">".concat(_this7.loadingMoreTextValue, "</div>");
      },
      no_more_results: function no_more_results() {
        return "<div class=\"no-more-results\">".concat(_this7.noMoreResultsTextValue, "</div>");
      },
      no_results: function no_results() {
        return "<div class=\"no-results\">".concat(_this7.noResultsFoundTextValue, "</div>");
      },
      option_create: function option_create(data, escapeData) {
        return "<div class=\"create\">".concat(_this7.createOptionTextValue.replace('%placeholder%', "<strong>".concat(escapeData(data.input), "</strong>")), "</div>");
      }
    },
    preload: this.preload
  });
  return __classPrivateFieldGet(this, _default_1_instances, "m", _default_1_createTomSelect).call(this, config);
}, _default_1_stripTags = function _default_1_stripTags(string) {
  return string.replace(/(<([^>]+)>)/gi, '');
}, _default_1_mergeObjects = function _default_1_mergeObjects(object1, object2) {
  return _objectSpread(_objectSpread({}, object1), object2);
}, _default_1_createTomSelect = function _default_1_createTomSelect(options) {
  var preConnectPayload = {
    options: options
  };
  this.dispatchEvent('pre-connect', preConnectPayload);
  var tomSelect = new tom_select__WEBPACK_IMPORTED_MODULE_34__(this.formElement, options);
  var connectPayload = {
    tomSelect: tomSelect,
    options: options
  };
  this.dispatchEvent('connect', connectPayload);
  return tomSelect;
};
default_1.values = {
  url: String,
  optionsAsHtml: Boolean,
  loadingMoreText: String,
  noResultsFoundText: String,
  noMoreResultsText: String,
  createOptionText: String,
  minCharacters: Number,
  tomSelectOptions: Object,
  preload: String
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtYXV0b2NvbXBsZXRlX2Fzc2V0c19kaXN0X2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNFLHNCQUFzQkEsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsQ0FBQyxFQUFFO0VBQ3RELElBQUlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLE1BQU0sSUFBSUMsU0FBUyxDQUFDLCtDQUErQyxDQUFDO0VBQzVGLElBQUksT0FBT0gsS0FBSyxLQUFLLFVBQVUsR0FBR0QsUUFBUSxLQUFLQyxLQUFLLElBQUksQ0FBQ0UsQ0FBQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0ksR0FBRyxDQUFDTCxRQUFRLENBQUMsRUFBRSxNQUFNLElBQUlJLFNBQVMsQ0FBQywwRUFBMEUsQ0FBQztFQUNsTCxPQUFPRixJQUFJLEtBQUssR0FBRyxHQUFHQyxDQUFDLEdBQUdELElBQUksS0FBSyxHQUFHLEdBQUdDLENBQUMsQ0FBQ0csSUFBSSxDQUFDTixRQUFRLENBQUMsR0FBR0csQ0FBQyxHQUFHQSxDQUFDLENBQUNJLEtBQUssR0FBR04sS0FBSyxDQUFDTyxHQUFHLENBQUNSLFFBQVEsQ0FBQztBQUNqRztBQUVBLE9BQU9TLGVBQWUsS0FBSyxVQUFVLEdBQUdBLGVBQWUsR0FBRyxVQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO0VBQzVGLElBQUlDLENBQUMsR0FBRyxJQUFJQyxLQUFLLENBQUNGLE9BQU8sQ0FBQztFQUMxQixP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ekssU0FBUyxHQUFHLElBQUluRCx3Q0FBUyxDQUFDLElBQUksQ0FBQ2dILFdBQVcsRUFBRWxELE9BQU8sQ0FBQztFQUMxRCxJQUFNK0osY0FBYyxHQUFHO0lBQUUxSyxTQUFTLEVBQVRBLFNBQVM7SUFBRVcsT0FBTyxFQUFQQTtFQUFRLENBQUM7RUFDN0MsSUFBSSxDQUFDZSxhQUFhLENBQUMsU0FBUyxFQUFFZ0osY0FBYyxDQUFDO0VBQzdDLE9BQU8xSyxTQUFTO0FBQ3BCLENBQUM7QUFDRHpCLFNBQVMsQ0FBQ29NLE1BQU0sR0FBRztFQUNmcEIsR0FBRyxFQUFFcUIsTUFBTTtFQUNYQyxhQUFhLEVBQUVDLE9BQU87RUFDdEJDLGVBQWUsRUFBRUgsTUFBTTtFQUN2Qkksa0JBQWtCLEVBQUVKLE1BQU07RUFDMUJLLGlCQUFpQixFQUFFTCxNQUFNO0VBQ3pCTSxnQkFBZ0IsRUFBRU4sTUFBTTtFQUN4Qk8sYUFBYSxFQUFFQyxNQUFNO0VBQ3JCQyxnQkFBZ0IsRUFBRWhFLE1BQU07RUFDeEJnRCxPQUFPLEVBQUVPO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYS1kZXYvLi92ZW5kb3Ivc3ltZm9ueS91eC1hdXRvY29tcGxldGUvYXNzZXRzL2Rpc3QvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmltcG9ydCBUb21TZWxlY3QgZnJvbSAndG9tLXNlbGVjdCc7XG5cbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxuXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlLCBTdXBwcmVzc2VkRXJyb3IsIFN5bWJvbCAqL1xuXG5cbmZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59XG5cbnR5cGVvZiBTdXBwcmVzc2VkRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IFN1cHByZXNzZWRFcnJvciA6IGZ1bmN0aW9uIChlcnJvciwgc3VwcHJlc3NlZCwgbWVzc2FnZSkge1xuICAgIHZhciBlID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XG59O1xuXG52YXIgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoSHRtbENvbnRlbnRzLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhLCBfZGVmYXVsdF8xX3N0cmlwVGFncywgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0O1xuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9kZWZhdWx0XzFfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pc09ic2VydmluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JpZ2luYWxPcHRpb25zID0gW107XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigobXV0YXRpb25zKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbk11dGF0aW9ucyhtdXRhdGlvbnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE9wdGlvbnMgPSB0aGlzLmNyZWF0ZU9wdGlvbnNEYXRhU3RydWN0dXJlKHRoaXMuc2VsZWN0RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplVG9tU2VsZWN0KCk7XG4gICAgfVxuICAgIGluaXRpYWxpemVUb21TZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2tpcC1tb3JwaCcsICcnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy51cmxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSkuY2FsbCh0aGlzLCB0aGlzLnVybFZhbHVlLCB0aGlzLmhhc01pbkNoYXJhY3RlcnNWYWx1ZSA/IHRoaXMubWluQ2hhcmFjdGVyc1ZhbHVlIDogbnVsbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub3B0aW9uc0FzSHRtbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b21TZWxlY3QgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUpLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuc3RhcnRNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgIHRoaXMuc3RvcE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICAgICAgbGV0IGN1cnJlbnRTZWxlY3RlZFZhbHVlcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkVmFsdWVzID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucylcbiAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24uc2VsZWN0ZWQpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWxlY3RlZFZhbHVlcyA9IFt0aGlzLnNlbGVjdEVsZW1lbnQudmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9tU2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20odGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RWxlbWVudC52YWx1ZSA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxWYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMucmVzZXRUb21TZWxlY3QoKTtcbiAgICB9XG4gICAgZ2V0TWF4T3B0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0RWxlbWVudCA/IHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zLmxlbmd0aCA6IDUwO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0RWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBnZXQgZm9ybUVsZW1lbnQoKSB7XG4gICAgICAgIGlmICghKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F1dG9jb21wbGV0ZSBTdGltdWx1cyBjb250cm9sbGVyIGNhbiBvbmx5IGJlIHVzZWQgb24gYW4gPGlucHV0PiBvciA8c2VsZWN0Pi4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBkaXNwYXRjaEV2ZW50KG5hbWUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaChuYW1lLCB7IGRldGFpbDogcGF5bG9hZCwgcHJlZml4OiAnYXV0b2NvbXBsZXRlJyB9KTtcbiAgICB9XG4gICAgZ2V0IHByZWxvYWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNQcmVsb2FkVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiAnZm9jdXMnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZWxvYWRWYWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVsb2FkVmFsdWU7XG4gICAgfVxuICAgIHJlc2V0VG9tU2VsZWN0KCkge1xuICAgICAgICBpZiAodGhpcy50b21TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnYmVmb3JlLXJlc2V0JywgeyB0b21TZWxlY3Q6IHRoaXMudG9tU2VsZWN0IH0pO1xuICAgICAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEh0bWwgPSB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFZhbHVlID0gdGhpcy50b21TZWxlY3QuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBjdXJyZW50SHRtbDtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRvbVNlbGVjdCgpO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3Quc2V0VmFsdWUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VUb21TZWxlY3REaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZGlzYWJsZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgc3RhcnRNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPYnNlcnZpbmcgJiYgdGhpcy5tdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc3VidHJlZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNPYnNlcnZpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0b3BNdXRhdGlvbk9ic2VydmVyKCkge1xuICAgICAgICBpZiAodGhpcy5pc09ic2VydmluZyAmJiB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB0aGlzLmlzT2JzZXJ2aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25NdXRhdGlvbnMobXV0YXRpb25zKSB7XG4gICAgICAgIGxldCBjaGFuZ2VEaXNhYmxlZFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGxldCByZXF1aXJlUmVzZXQgPSBmYWxzZTtcbiAgICAgICAgbXV0YXRpb25zLmZvckVhY2goKG11dGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKG11dGF0aW9uLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnRhcmdldCA9PT0gdGhpcy5lbGVtZW50ICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdkaXNhYmxlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZURpc2FibGVkU3RhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnRhcmdldCA9PT0gdGhpcy5lbGVtZW50ICYmIG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdtdWx0aXBsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTm93TXVsdGlwbGUgPSB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2FzTXVsdGlwbGUgPSBtdXRhdGlvbi5vbGRWYWx1ZSA9PT0gJ211bHRpcGxlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05vd011bHRpcGxlICE9PSB3YXNNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVSZXNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSB0aGlzLnNlbGVjdEVsZW1lbnQgPyB0aGlzLmNyZWF0ZU9wdGlvbnNEYXRhU3RydWN0dXJlKHRoaXMuc2VsZWN0RWxlbWVudCkgOiBbXTtcbiAgICAgICAgY29uc3QgYXJlT3B0aW9uc0VxdWl2YWxlbnQgPSB0aGlzLmFyZU9wdGlvbnNFcXVpdmFsZW50KG5ld09wdGlvbnMpO1xuICAgICAgICBpZiAoIWFyZU9wdGlvbnNFcXVpdmFsZW50IHx8IHJlcXVpcmVSZXNldCkge1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbE9wdGlvbnMgPSBuZXdPcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5yZXNldFRvbVNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFuZ2VEaXNhYmxlZFN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUodGhpcy5mb3JtRWxlbWVudC5kaXNhYmxlZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUoc2VsZWN0RWxlbWVudCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShzZWxlY3RFbGVtZW50Lm9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUsXG4gICAgICAgICAgICAgICAgdGV4dDogb3B0aW9uLnRleHQsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXJlT3B0aW9uc0VxdWl2YWxlbnQobmV3T3B0aW9ucykge1xuICAgICAgICBjb25zdCBmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucyA9IHRoaXMub3JpZ2luYWxPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09ICcnKTtcbiAgICAgICAgY29uc3QgZmlsdGVyZWROZXdPcHRpb25zID0gbmV3T3B0aW9ucy5maWx0ZXIoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlICE9PSAnJyk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24gPSB0aGlzLm9yaWdpbmFsT3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gJycpO1xuICAgICAgICBjb25zdCBuZXdQbGFjZWhvbGRlck9wdGlvbiA9IG5ld09wdGlvbnMuZmluZCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09ICcnKTtcbiAgICAgICAgaWYgKG9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24gJiZcbiAgICAgICAgICAgIG5ld1BsYWNlaG9sZGVyT3B0aW9uICYmXG4gICAgICAgICAgICBvcmlnaW5hbFBsYWNlaG9sZGVyT3B0aW9uLnRleHQgIT09IG5ld1BsYWNlaG9sZGVyT3B0aW9uLnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyZWRPcmlnaW5hbE9wdGlvbnMubGVuZ3RoICE9PSBmaWx0ZXJlZE5ld09wdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgbm9ybWFsaXplT3B0aW9uID0gKG9wdGlvbikgPT4gYCR7b3B0aW9uLnZhbHVlfS0ke29wdGlvbi50ZXh0fWA7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsT3B0aW9uc1NldCA9IG5ldyBTZXQoZmlsdGVyZWRPcmlnaW5hbE9wdGlvbnMubWFwKG5vcm1hbGl6ZU9wdGlvbikpO1xuICAgICAgICBjb25zdCBuZXdPcHRpb25zU2V0ID0gbmV3IFNldChmaWx0ZXJlZE5ld09wdGlvbnMubWFwKG5vcm1hbGl6ZU9wdGlvbikpO1xuICAgICAgICByZXR1cm4gKG9yaWdpbmFsT3B0aW9uc1NldC5zaXplID09PSBuZXdPcHRpb25zU2V0LnNpemUgJiZcbiAgICAgICAgICAgIFsuLi5vcmlnaW5hbE9wdGlvbnNTZXRdLmV2ZXJ5KChvcHRpb24pID0+IG5ld09wdGlvbnNTZXQuaGFzKG9wdGlvbikpKTtcbiAgICB9XG59XG5fZGVmYXVsdF8xX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcoKSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IHt9O1xuICAgIGNvbnN0IGlzTXVsdGlwbGUgPSAhdGhpcy5zZWxlY3RFbGVtZW50IHx8IHRoaXMuc2VsZWN0RWxlbWVudC5tdWx0aXBsZTtcbiAgICBpZiAoIXRoaXMuZm9ybUVsZW1lbnQuZGlzYWJsZWQgJiYgIWlzTXVsdGlwbGUpIHtcbiAgICAgICAgcGx1Z2lucy5jbGVhcl9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAoaXNNdWx0aXBsZSkge1xuICAgICAgICBwbHVnaW5zLnJlbW92ZV9idXR0b24gPSB7IHRpdGxlOiAnJyB9O1xuICAgIH1cbiAgICBpZiAodGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBwbHVnaW5zLnZpcnR1YWxfc2Nyb2xsID0ge307XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlciA9IHtcbiAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibm8tcmVzdWx0c1wiPiR7dGhpcy5ub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25fY3JlYXRlOiAoZGF0YSwgZXNjYXBlRGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwiY3JlYXRlXCI+JHt0aGlzLmNyZWF0ZU9wdGlvblRleHRWYWx1ZS5yZXBsYWNlKCclcGxhY2Vob2xkZXIlJywgYDxzdHJvbmc+JHtlc2NhcGVEYXRhKGRhdGEuaW5wdXQpfTwvc3Ryb25nPmApfTwvZGl2PmA7XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIHJlbmRlcixcbiAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgb25JdGVtQWRkOiAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRUZXh0Ym94VmFsdWUoJycpO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZUFmdGVyU2VsZWN0OiB0cnVlLFxuICAgICAgICBvbk9wdGlvbkFkZDogKHZhbHVlLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBsZXQgcGFyZW50RWxlbWVudCA9IHRoaXMudG9tU2VsZWN0LmlucHV0O1xuICAgICAgICAgICAgbGV0IG9wdGdyb3VwRGF0YSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdCBvcHRncm91cCA9IGRhdGFbdGhpcy50b21TZWxlY3Quc2V0dGluZ3Mub3B0Z3JvdXBGaWVsZF07XG4gICAgICAgICAgICBpZiAob3B0Z3JvdXAgJiYgdGhpcy50b21TZWxlY3Qub3B0Z3JvdXBzKSB7XG4gICAgICAgICAgICAgICAgb3B0Z3JvdXBEYXRhID0gdGhpcy50b21TZWxlY3Qub3B0Z3JvdXBzW29wdGdyb3VwXTtcbiAgICAgICAgICAgICAgICBpZiAob3B0Z3JvdXBEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGdyb3VwRWxlbWVudCA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcihgb3B0Z3JvdXBbbGFiZWw9XCIke29wdGdyb3VwRGF0YS5sYWJlbH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGdyb3VwRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudCA9IG9wdGdyb3VwRWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dCA9IGRhdGFbdGhpcy50b21TZWxlY3Quc2V0dGluZ3MubGFiZWxGaWVsZF07XG4gICAgICAgICAgICBjb25zdCBvcHRpb25PcmRlciA9IGRhdGEuJG9yZGVyO1xuICAgICAgICAgICAgbGV0IG9yZGVyZWRPcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgZm9yIChjb25zdCBbLCB0b21TZWxlY3RPcHRpb25dIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMudG9tU2VsZWN0Lm9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvbVNlbGVjdE9wdGlvbi4kb3JkZXIgPT09IG9wdGlvbk9yZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyZWRPcHRpb24gPSBwYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYDpzY29wZSA+IG9wdGlvblt2YWx1ZT1cIiR7Q1NTLmVzY2FwZSh0b21TZWxlY3RPcHRpb25bdGhpcy50b21TZWxlY3Quc2V0dGluZ3MudmFsdWVGaWVsZF0pfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3JkZXJlZE9wdGlvbikge1xuICAgICAgICAgICAgICAgIG9yZGVyZWRPcHRpb24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3B0aW9uT3JkZXIgPj0gMCkge1xuICAgICAgICAgICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5wcmVwZW5kKG9wdGlvbkVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKCF0aGlzLnNlbGVjdEVsZW1lbnQgJiYgIXRoaXMudXJsVmFsdWUpIHtcbiAgICAgICAgY29uZmlnLnNob3VsZExvYWQgPSAoKSA9PiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBjb25maWcsIHRoaXMudG9tU2VsZWN0T3B0aW9uc1ZhbHVlKTtcbn0sIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUoKSB7XG4gICAgY29uc3QgY29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZykuY2FsbCh0aGlzKSwge1xuICAgICAgICBtYXhPcHRpb25zOiB0aGlzLmdldE1heE9wdGlvbnMoKSxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMoKSB7XG4gICAgY29uc3QgY29tbW9uQ29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnKS5jYWxsKHRoaXMpO1xuICAgIGNvbnN0IGxhYmVsRmllbGQgPSBjb21tb25Db25maWcubGFiZWxGaWVsZCA/PyAndGV4dCc7XG4gICAgY29uc3QgY29uZmlnID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIGNvbW1vbkNvbmZpZywge1xuICAgICAgICBtYXhPcHRpb25zOiB0aGlzLmdldE1heE9wdGlvbnMoKSxcbiAgICAgICAgc2NvcmU6IChzZWFyY2gpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNjb3JpbmdGdW5jdGlvbiA9IHRoaXMudG9tU2VsZWN0LmdldFNjb3JlRnVuY3Rpb24oc2VhcmNoKTtcbiAgICAgICAgICAgIHJldHVybiAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBzY29yaW5nRnVuY3Rpb24oeyAuLi5pdGVtLCB0ZXh0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9zdHJpcFRhZ3MpLmNhbGwodGhpcywgaXRlbVtsYWJlbEZpZWxkXSkgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgIGl0ZW06IChpdGVtKSA9PiBgPGRpdj4ke2l0ZW1bbGFiZWxGaWVsZF19PC9kaXY+YCxcbiAgICAgICAgICAgIG9wdGlvbjogKGl0ZW0pID0+IGA8ZGl2PiR7aXRlbVtsYWJlbEZpZWxkXX08L2Rpdj5gLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKGF1dG9jb21wbGV0ZUVuZHBvaW50VXJsLCBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcbiAgICBjb25zdCBjb21tb25Db25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyk7XG4gICAgY29uc3QgbGFiZWxGaWVsZCA9IGNvbW1vbkNvbmZpZy5sYWJlbEZpZWxkID8/ICd0ZXh0JztcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29tbW9uQ29uZmlnLCB7XG4gICAgICAgIGZpcnN0VXJsOiAocXVlcnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGF1dG9jb21wbGV0ZUVuZHBvaW50VXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyc7XG4gICAgICAgICAgICByZXR1cm4gYCR7YXV0b2NvbXBsZXRlRW5kcG9pbnRVcmx9JHtzZXBhcmF0b3J9cXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWA7XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWQ6IGZ1bmN0aW9uIChxdWVyeSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXJsKHF1ZXJ5KTtcbiAgICAgICAgICAgIGZldGNoKHVybClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TmV4dFVybChxdWVyeSwganNvbi5uZXh0X3BhZ2UpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGpzb24ucmVzdWx0cy5vcHRpb25zIHx8IGpzb24ucmVzdWx0cywganNvbi5yZXN1bHRzLm9wdGdyb3VwcyB8fCBbXSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBjYWxsYmFjayhbXSwgW10pKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvdWxkTG9hZDogKHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAobnVsbCAhPT0gbWluQ2hhcmFjdGVyTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFyYWN0ZXJMZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5oYXNMb2FkZWRDaG9pY2VzUHJldmlvdXNseSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBxdWVyeS5sZW5ndGggPj0gMztcbiAgICAgICAgfSxcbiAgICAgICAgb3B0Z3JvdXBGaWVsZDogJ2dyb3VwX2J5JyxcbiAgICAgICAgc2NvcmU6IChzZWFyY2gpID0+IChpdGVtKSA9PiAxLFxuICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgIG9wdGlvbjogKGl0ZW0pID0+IGA8ZGl2PiR7aXRlbVtsYWJlbEZpZWxkXX08L2Rpdj5gLFxuICAgICAgICAgICAgaXRlbTogKGl0ZW0pID0+IGA8ZGl2PiR7aXRlbVtsYWJlbEZpZWxkXX08L2Rpdj5gLFxuICAgICAgICAgICAgbG9hZGluZ19tb3JlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwibG9hZGluZy1tb3JlLXJlc3VsdHNcIj4ke3RoaXMubG9hZGluZ01vcmVUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBub19tb3JlX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuby1tb3JlLXJlc3VsdHNcIj4ke3RoaXMubm9Nb3JlUmVzdWx0c1RleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vX3Jlc3VsdHM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCI+JHt0aGlzLm5vUmVzdWx0c0ZvdW5kVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uX2NyZWF0ZTogKGRhdGEsIGVzY2FwZURhdGEpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjcmVhdGVcIj4ke3RoaXMuY3JlYXRlT3B0aW9uVGV4dFZhbHVlLnJlcGxhY2UoJyVwbGFjZWhvbGRlciUnLCBgPHN0cm9uZz4ke2VzY2FwZURhdGEoZGF0YS5pbnB1dCl9PC9zdHJvbmc+YCl9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByZWxvYWQ6IHRoaXMucHJlbG9hZCxcbiAgICB9KTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0KS5jYWxsKHRoaXMsIGNvbmZpZyk7XG59LCBfZGVmYXVsdF8xX3N0cmlwVGFncyA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfc3RyaXBUYWdzKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKDwoW14+XSspPikvZ2ksICcnKTtcbn0sIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMob2JqZWN0MSwgb2JqZWN0Mikge1xuICAgIHJldHVybiB7IC4uLm9iamVjdDEsIC4uLm9iamVjdDIgfTtcbn0sIF9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0ID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3Qob3B0aW9ucykge1xuICAgIGNvbnN0IHByZUNvbm5lY3RQYXlsb2FkID0geyBvcHRpb25zIH07XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdwcmUtY29ubmVjdCcsIHByZUNvbm5lY3RQYXlsb2FkKTtcbiAgICBjb25zdCB0b21TZWxlY3QgPSBuZXcgVG9tU2VsZWN0KHRoaXMuZm9ybUVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGNvbm5lY3RQYXlsb2FkID0geyB0b21TZWxlY3QsIG9wdGlvbnMgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCBjb25uZWN0UGF5bG9hZCk7XG4gICAgcmV0dXJuIHRvbVNlbGVjdDtcbn07XG5kZWZhdWx0XzEudmFsdWVzID0ge1xuICAgIHVybDogU3RyaW5nLFxuICAgIG9wdGlvbnNBc0h0bWw6IEJvb2xlYW4sXG4gICAgbG9hZGluZ01vcmVUZXh0OiBTdHJpbmcsXG4gICAgbm9SZXN1bHRzRm91bmRUZXh0OiBTdHJpbmcsXG4gICAgbm9Nb3JlUmVzdWx0c1RleHQ6IFN0cmluZyxcbiAgICBjcmVhdGVPcHRpb25UZXh0OiBTdHJpbmcsXG4gICAgbWluQ2hhcmFjdGVyczogTnVtYmVyLFxuICAgIHRvbVNlbGVjdE9wdGlvbnM6IE9iamVjdCxcbiAgICBwcmVsb2FkOiBTdHJpbmcsXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0XzEgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJUb21TZWxlY3QiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsInZhbHVlIiwiZ2V0IiwiU3VwcHJlc3NlZEVycm9yIiwiZXJyb3IiLCJzdXBwcmVzc2VkIiwibWVzc2FnZSIsImUiLCJFcnJvciIsIm5hbWUiLCJfZGVmYXVsdF8xX2luc3RhbmNlcyIsIl9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnIiwiX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUiLCJfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMiLCJfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhIiwiX2RlZmF1bHRfMV9zdHJpcFRhZ3MiLCJfZGVmYXVsdF8xX21lcmdlT2JqZWN0cyIsIl9kZWZhdWx0XzFfY3JlYXRlVG9tU2VsZWN0IiwiZGVmYXVsdF8xIiwiX0NvbnRyb2xsZXIiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJhZGQiLCJpc09ic2VydmluZyIsImhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5Iiwib3JpZ2luYWxPcHRpb25zIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaW5pdGlhbGl6ZSIsIl90aGlzMiIsIm11dGF0aW9uT2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25zIiwib25NdXRhdGlvbnMiLCJjb25uZWN0Iiwic2VsZWN0RWxlbWVudCIsImNyZWF0ZU9wdGlvbnNEYXRhU3RydWN0dXJlIiwiaW5pdGlhbGl6ZVRvbVNlbGVjdCIsInNldEF0dHJpYnV0ZSIsInVybFZhbHVlIiwidG9tU2VsZWN0IiwiaGFzTWluQ2hhcmFjdGVyc1ZhbHVlIiwibWluQ2hhcmFjdGVyc1ZhbHVlIiwib3B0aW9uc0FzSHRtbFZhbHVlIiwic3RhcnRNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsInN0b3BNdXRhdGlvbk9ic2VydmVyIiwiY3VycmVudFNlbGVjdGVkVmFsdWVzIiwibXVsdGlwbGUiLCJBcnJheSIsImZyb20iLCJvcHRpb25zIiwiZmlsdGVyIiwib3B0aW9uIiwic2VsZWN0ZWQiLCJtYXAiLCJkZXN0cm95IiwiZm9yRWFjaCIsImluY2x1ZGVzIiwidXJsVmFsdWVDaGFuZ2VkIiwicmVzZXRUb21TZWxlY3QiLCJnZXRNYXhPcHRpb25zIiwibGVuZ3RoIiwiZWxlbWVudCIsIkhUTUxTZWxlY3RFbGVtZW50IiwiSFRNTElucHV0RWxlbWVudCIsImRpc3BhdGNoRXZlbnQiLCJwYXlsb2FkIiwiZGlzcGF0Y2giLCJkZXRhaWwiLCJwcmVmaXgiLCJoYXNQcmVsb2FkVmFsdWUiLCJwcmVsb2FkVmFsdWUiLCJjdXJyZW50SHRtbCIsImlubmVySFRNTCIsImN1cnJlbnRWYWx1ZSIsImdldFZhbHVlIiwic2V0VmFsdWUiLCJjaGFuZ2VUb21TZWxlY3REaXNhYmxlZFN0YXRlIiwiaXNEaXNhYmxlZCIsImRpc2FibGUiLCJlbmFibGUiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImF0dHJpYnV0ZXMiLCJjaGFyYWN0ZXJEYXRhIiwiYXR0cmlidXRlT2xkVmFsdWUiLCJfdGhpczMiLCJjaGFuZ2VEaXNhYmxlZFN0YXRlIiwicmVxdWlyZVJlc2V0IiwibXV0YXRpb24iLCJ0eXBlIiwidGFyZ2V0IiwiYXR0cmlidXRlTmFtZSIsImlzTm93TXVsdGlwbGUiLCJoYXNBdHRyaWJ1dGUiLCJ3YXNNdWx0aXBsZSIsIm9sZFZhbHVlIiwibmV3T3B0aW9ucyIsImFyZU9wdGlvbnNFcXVpdmFsZW50IiwiZm9ybUVsZW1lbnQiLCJkaXNhYmxlZCIsInRleHQiLCJmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucyIsImZpbHRlcmVkTmV3T3B0aW9ucyIsIm9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24iLCJmaW5kIiwibmV3UGxhY2Vob2xkZXJPcHRpb24iLCJub3JtYWxpemVPcHRpb24iLCJjb25jYXQiLCJvcmlnaW5hbE9wdGlvbnNTZXQiLCJTZXQiLCJuZXdPcHRpb25zU2V0Iiwic2l6ZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImV2ZXJ5IiwiV2Vha1NldCIsIl90aGlzNCIsInBsdWdpbnMiLCJpc011bHRpcGxlIiwiY2xlYXJfYnV0dG9uIiwidGl0bGUiLCJyZW1vdmVfYnV0dG9uIiwidmlydHVhbF9zY3JvbGwiLCJyZW5kZXIiLCJub19yZXN1bHRzIiwibm9SZXN1bHRzRm91bmRUZXh0VmFsdWUiLCJvcHRpb25fY3JlYXRlIiwiZGF0YSIsImVzY2FwZURhdGEiLCJjcmVhdGVPcHRpb25UZXh0VmFsdWUiLCJyZXBsYWNlIiwiaW5wdXQiLCJjb25maWciLCJvbkl0ZW1BZGQiLCJzZXRUZXh0Ym94VmFsdWUiLCJjbG9zZUFmdGVyU2VsZWN0Iiwib25PcHRpb25BZGQiLCJwYXJlbnRFbGVtZW50Iiwib3B0Z3JvdXBEYXRhIiwib3B0Z3JvdXAiLCJzZXR0aW5ncyIsIm9wdGdyb3VwRmllbGQiLCJvcHRncm91cHMiLCJvcHRncm91cEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibGFiZWwiLCJvcHRpb25FbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwibGFiZWxGaWVsZCIsIm9wdGlvbk9yZGVyIiwiJG9yZGVyIiwib3JkZXJlZE9wdGlvbiIsIl9pIiwiX09iamVjdCRlbnRyaWVzIiwiT2JqZWN0IiwiZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsIl9zbGljZWRUb0FycmF5IiwidG9tU2VsZWN0T3B0aW9uIiwiQ1NTIiwiZXNjYXBlIiwidmFsdWVGaWVsZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsImFwcGVuZCIsInByZXBlbmQiLCJzaG91bGRMb2FkIiwidG9tU2VsZWN0T3B0aW9uc1ZhbHVlIiwibWF4T3B0aW9ucyIsIl9jb21tb25Db25maWckbGFiZWxGaSIsIl90aGlzNSIsImNvbW1vbkNvbmZpZyIsInNjb3JlIiwic2VhcmNoIiwic2NvcmluZ0Z1bmN0aW9uIiwiZ2V0U2NvcmVGdW5jdGlvbiIsIml0ZW0iLCJfb2JqZWN0U3ByZWFkIiwiYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwiLCJtaW5DaGFyYWN0ZXJMZW5ndGgiLCJfY29tbW9uQ29uZmlnJGxhYmVsRmkyIiwiX3RoaXM3IiwiZmlyc3RVcmwiLCJxdWVyeSIsInNlcGFyYXRvciIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvYWQiLCJjYWxsYmFjayIsIl90aGlzNiIsInVybCIsImdldFVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldE5leHRVcmwiLCJuZXh0X3BhZ2UiLCJyZXN1bHRzIiwiY2F0Y2giLCJsb2FkaW5nX21vcmUiLCJsb2FkaW5nTW9yZVRleHRWYWx1ZSIsIm5vX21vcmVfcmVzdWx0cyIsIm5vTW9yZVJlc3VsdHNUZXh0VmFsdWUiLCJwcmVsb2FkIiwic3RyaW5nIiwib2JqZWN0MSIsIm9iamVjdDIiLCJwcmVDb25uZWN0UGF5bG9hZCIsImNvbm5lY3RQYXlsb2FkIiwidmFsdWVzIiwiU3RyaW5nIiwib3B0aW9uc0FzSHRtbCIsIkJvb2xlYW4iLCJsb2FkaW5nTW9yZVRleHQiLCJub1Jlc3VsdHNGb3VuZFRleHQiLCJub01vcmVSZXN1bHRzVGV4dCIsImNyZWF0ZU9wdGlvblRleHQiLCJtaW5DaGFyYWN0ZXJzIiwiTnVtYmVyIiwidG9tU2VsZWN0T3B0aW9ucyIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9