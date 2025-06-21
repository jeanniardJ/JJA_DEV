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
/* harmony import */ var tom_select__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! tom-select */ "./node_modules/tom-select/dist/esm/tom-select.complete.js");
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
  var tomSelect = new tom_select__WEBPACK_IMPORTED_MODULE_34__["default"](this.formElement, options);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yX3N5bWZvbnlfdXgtYXV0b2NvbXBsZXRlX2Fzc2V0c19kaXN0X2NvbnRyb2xsZXJfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDYjs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNFLHNCQUFzQkEsQ0FBQ0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBRUMsQ0FBQyxFQUFFO0VBQ3RELElBQUlELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQ0MsQ0FBQyxFQUFFLE1BQU0sSUFBSUMsU0FBUyxDQUFDLCtDQUErQyxDQUFDO0VBQzVGLElBQUksT0FBT0gsS0FBSyxLQUFLLFVBQVUsR0FBR0QsUUFBUSxLQUFLQyxLQUFLLElBQUksQ0FBQ0UsQ0FBQyxHQUFHLENBQUNGLEtBQUssQ0FBQ0ksR0FBRyxDQUFDTCxRQUFRLENBQUMsRUFBRSxNQUFNLElBQUlJLFNBQVMsQ0FBQywwRUFBMEUsQ0FBQztFQUNsTCxPQUFPRixJQUFJLEtBQUssR0FBRyxHQUFHQyxDQUFDLEdBQUdELElBQUksS0FBSyxHQUFHLEdBQUdDLENBQUMsQ0FBQ0csSUFBSSxDQUFDTixRQUFRLENBQUMsR0FBR0csQ0FBQyxHQUFHQSxDQUFDLENBQUNJLEtBQUssR0FBR04sS0FBSyxDQUFDTyxHQUFHLENBQUNSLFFBQVEsQ0FBQztBQUNqRztBQUVBLE9BQU9TLGVBQWUsS0FBSyxVQUFVLEdBQUdBLGVBQWUsR0FBRyxVQUFVQyxLQUFLLEVBQUVDLFVBQVUsRUFBRUMsT0FBTyxFQUFFO0VBQzVGLElBQUlDLENBQUMsR0FBRyxJQUFJQyxLQUFLLENBQUNGLE9BQU8sQ0FBQztFQUMxQixP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QyxPQUFPO0FBQ25DLENBQUMsRUFBRWxNLDBCQUEwQixHQUFHLFNBQVNBLDBCQUEwQkEsQ0FBQ3FDLE9BQU8sRUFBRTtFQUN6RSxJQUFNOEosaUJBQWlCLEdBQUc7SUFBRTlKLE9BQU8sRUFBUEE7RUFBUSxDQUFDO0VBQ3JDLElBQUksQ0FBQ2UsYUFBYSxDQUFDLGFBQWEsRUFBRStJLGlCQUFpQixDQUFDO0VBQ3BELElBQU16SyxTQUFTLEdBQUcsSUFBSW5ELG1EQUFTLENBQUMsSUFBSSxDQUFDZ0gsV0FBVyxFQUFFbEQsT0FBTyxDQUFDO0VBQzFELElBQU0rSixjQUFjLEdBQUc7SUFBRTFLLFNBQVMsRUFBVEEsU0FBUztJQUFFVyxPQUFPLEVBQVBBO0VBQVEsQ0FBQztFQUM3QyxJQUFJLENBQUNlLGFBQWEsQ0FBQyxTQUFTLEVBQUVnSixjQUFjLENBQUM7RUFDN0MsT0FBTzFLLFNBQVM7QUFDcEIsQ0FBQztBQUNEekIsU0FBUyxDQUFDb00sTUFBTSxHQUFHO0VBQ2ZwQixHQUFHLEVBQUVxQixNQUFNO0VBQ1hDLGFBQWEsRUFBRUMsT0FBTztFQUN0QkMsZUFBZSxFQUFFSCxNQUFNO0VBQ3ZCSSxrQkFBa0IsRUFBRUosTUFBTTtFQUMxQkssaUJBQWlCLEVBQUVMLE1BQU07RUFDekJNLGdCQUFnQixFQUFFTixNQUFNO0VBQ3hCTyxhQUFhLEVBQUVDLE1BQU07RUFDckJDLGdCQUFnQixFQUFFaEUsTUFBTTtFQUN4QmdELE9BQU8sRUFBRU87QUFDYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamphLWRldi8uL3ZlbmRvci9zeW1mb255L3V4LWF1dG9jb21wbGV0ZS9hc3NldHMvZGlzdC9jb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAaG90d2lyZWQvc3RpbXVsdXMnO1xuaW1wb3J0IFRvbVNlbGVjdCBmcm9tICd0b20tc2VsZWN0JztcblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXG5cblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1Jcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXG5cblxuZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn1cblxudHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XG4gICAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgcmV0dXJuIGUubmFtZSA9IFwiU3VwcHJlc3NlZEVycm9yXCIsIGUuZXJyb3IgPSBlcnJvciwgZS5zdXBwcmVzc2VkID0gc3VwcHJlc3NlZCwgZTtcbn07XG5cbnZhciBfZGVmYXVsdF8xX2luc3RhbmNlcywgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhIdG1sQ29udGVudHMsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEsIF9kZWZhdWx0XzFfc3RyaXBUYWdzLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cywgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3Q7XG5jbGFzcyBkZWZhdWx0XzEgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX2RlZmF1bHRfMV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmlzT2JzZXJ2aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbE9wdGlvbnMgPSBbXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uTXV0YXRpb25zKG11dGF0aW9ucyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IHRoaXMuY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUodGhpcy5zZWxlY3RFbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVUb21TZWxlY3QoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZVRvbVNlbGVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0RWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1za2lwLW1vcnBoJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZVdpdGhSZW1vdGVEYXRhKS5jYWxsKHRoaXMsIHRoaXMudXJsVmFsdWUsIHRoaXMuaGFzTWluQ2hhcmFjdGVyc1ZhbHVlID8gdGhpcy5taW5DaGFyYWN0ZXJzVmFsdWUgOiBudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zQXNIdG1sVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRvbVNlbGVjdCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5zdGFydE11dGF0aW9uT2JzZXJ2ZXIoKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5zdG9wTXV0YXRpb25PYnNlcnZlcigpO1xuICAgICAgICBsZXQgY3VycmVudFNlbGVjdGVkVmFsdWVzID0gW107XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEVsZW1lbnQubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U2VsZWN0ZWRWYWx1ZXMgPSBBcnJheS5mcm9tKHRoaXMuc2VsZWN0RWxlbWVudC5vcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi5zZWxlY3RlZClcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgob3B0aW9uKSA9PiBvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFNlbGVjdGVkVmFsdWVzID0gW3RoaXMuc2VsZWN0RWxlbWVudC52YWx1ZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RFbGVtZW50Lm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLnNlbGVjdEVsZW1lbnQub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGN1cnJlbnRTZWxlY3RlZFZhbHVlcy5pbmNsdWRlcyhvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RFbGVtZW50LnZhbHVlID0gY3VycmVudFNlbGVjdGVkVmFsdWVzWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVybFZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5yZXNldFRvbVNlbGVjdCgpO1xuICAgIH1cbiAgICBnZXRNYXhPcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RFbGVtZW50ID8gdGhpcy5zZWxlY3RFbGVtZW50Lm9wdGlvbnMubGVuZ3RoIDogNTA7XG4gICAgfVxuICAgIGdldCBzZWxlY3RFbGVtZW50KCkge1xuICAgICAgICBpZiAoISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBmb3JtRWxlbWVudCgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkgJiYgISh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQXV0b2NvbXBsZXRlIFN0aW11bHVzIGNvbnRyb2xsZXIgY2FuIG9ubHkgYmUgdXNlZCBvbiBhbiA8aW5wdXQ+IG9yIDxzZWxlY3Q+LicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQ7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdhdXRvY29tcGxldGUnIH0pO1xuICAgIH1cbiAgICBnZXQgcHJlbG9hZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc1ByZWxvYWRWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuICdmb2N1cyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZFZhbHVlID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZFZhbHVlID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZWxvYWRWYWx1ZTtcbiAgICB9XG4gICAgcmVzZXRUb21TZWxlY3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRvbVNlbGVjdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdiZWZvcmUtcmVzZXQnLCB7IHRvbVNlbGVjdDogdGhpcy50b21TZWxlY3QgfSk7XG4gICAgICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SHRtbCA9IHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLnRvbVNlbGVjdC5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgdGhpcy50b21TZWxlY3QuZGVzdHJveSgpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9IGN1cnJlbnRIdG1sO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVG9tU2VsZWN0KCk7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5zZXRWYWx1ZShjdXJyZW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZCkge1xuICAgICAgICB0aGlzLnN0b3BNdXRhdGlvbk9ic2VydmVyKCk7XG4gICAgICAgIGlmIChpc0Rpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5kaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvbVNlbGVjdC5lbmFibGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0YXJ0TXV0YXRpb25PYnNlcnZlcigpO1xuICAgIH1cbiAgICBzdGFydE11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09ic2VydmluZyAmJiB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubXV0YXRpb25PYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc09ic2VydmluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RvcE11dGF0aW9uT2JzZXJ2ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT2JzZXJ2aW5nICYmIHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPYnNlcnZpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbk11dGF0aW9ucyhtdXRhdGlvbnMpIHtcbiAgICAgICAgbGV0IGNoYW5nZURpc2FibGVkU3RhdGUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHJlcXVpcmVSZXNldCA9IGZhbHNlO1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAobXV0YXRpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2F0dHJpYnV0ZXMnOlxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2Rpc2FibGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGlzYWJsZWRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQgJiYgbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ211bHRpcGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNOb3dNdWx0aXBsZSA9IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ211bHRpcGxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3YXNNdWx0aXBsZSA9IG11dGF0aW9uLm9sZFZhbHVlID09PSAnbXVsdGlwbGUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTm93TXVsdGlwbGUgIT09IHdhc011bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZVJlc2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV3T3B0aW9ucyA9IHRoaXMuc2VsZWN0RWxlbWVudCA/IHRoaXMuY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUodGhpcy5zZWxlY3RFbGVtZW50KSA6IFtdO1xuICAgICAgICBjb25zdCBhcmVPcHRpb25zRXF1aXZhbGVudCA9IHRoaXMuYXJlT3B0aW9uc0VxdWl2YWxlbnQobmV3T3B0aW9ucyk7XG4gICAgICAgIGlmICghYXJlT3B0aW9uc0VxdWl2YWxlbnQgfHwgcmVxdWlyZVJlc2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsT3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VG9tU2VsZWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZURpc2FibGVkU3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlVG9tU2VsZWN0RGlzYWJsZWRTdGF0ZSh0aGlzLmZvcm1FbGVtZW50LmRpc2FibGVkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjcmVhdGVPcHRpb25zRGF0YVN0cnVjdHVyZShzZWxlY3RFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHNlbGVjdEVsZW1lbnQub3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0OiBvcHRpb24udGV4dCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhcmVPcHRpb25zRXF1aXZhbGVudChuZXdPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkT3JpZ2luYWxPcHRpb25zID0gdGhpcy5vcmlnaW5hbE9wdGlvbnMuZmlsdGVyKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSAhPT0gJycpO1xuICAgICAgICBjb25zdCBmaWx0ZXJlZE5ld09wdGlvbnMgPSBuZXdPcHRpb25zLmZpbHRlcigob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgIT09ICcnKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbiA9IHRoaXMub3JpZ2luYWxPcHRpb25zLmZpbmQoKG9wdGlvbikgPT4gb3B0aW9uLnZhbHVlID09PSAnJyk7XG4gICAgICAgIGNvbnN0IG5ld1BsYWNlaG9sZGVyT3B0aW9uID0gbmV3T3B0aW9ucy5maW5kKChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gJycpO1xuICAgICAgICBpZiAob3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbiAmJlxuICAgICAgICAgICAgbmV3UGxhY2Vob2xkZXJPcHRpb24gJiZcbiAgICAgICAgICAgIG9yaWdpbmFsUGxhY2Vob2xkZXJPcHRpb24udGV4dCAhPT0gbmV3UGxhY2Vob2xkZXJPcHRpb24udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucy5sZW5ndGggIT09IGZpbHRlcmVkTmV3T3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBub3JtYWxpemVPcHRpb24gPSAob3B0aW9uKSA9PiBgJHtvcHRpb24udmFsdWV9LSR7b3B0aW9uLnRleHR9YDtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxPcHRpb25zU2V0ID0gbmV3IFNldChmaWx0ZXJlZE9yaWdpbmFsT3B0aW9ucy5tYXAobm9ybWFsaXplT3B0aW9uKSk7XG4gICAgICAgIGNvbnN0IG5ld09wdGlvbnNTZXQgPSBuZXcgU2V0KGZpbHRlcmVkTmV3T3B0aW9ucy5tYXAobm9ybWFsaXplT3B0aW9uKSk7XG4gICAgICAgIHJldHVybiAob3JpZ2luYWxPcHRpb25zU2V0LnNpemUgPT09IG5ld09wdGlvbnNTZXQuc2l6ZSAmJlxuICAgICAgICAgICAgWy4uLm9yaWdpbmFsT3B0aW9uc1NldF0uZXZlcnkoKG9wdGlvbikgPT4gbmV3T3B0aW9uc1NldC5oYXMob3B0aW9uKSkpO1xuICAgIH1cbn1cbl9kZWZhdWx0XzFfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZygpIHtcbiAgICBjb25zdCBwbHVnaW5zID0ge307XG4gICAgY29uc3QgaXNNdWx0aXBsZSA9ICF0aGlzLnNlbGVjdEVsZW1lbnQgfHwgdGhpcy5zZWxlY3RFbGVtZW50Lm11bHRpcGxlO1xuICAgIGlmICghdGhpcy5mb3JtRWxlbWVudC5kaXNhYmxlZCAmJiAhaXNNdWx0aXBsZSkge1xuICAgICAgICBwbHVnaW5zLmNsZWFyX2J1dHRvbiA9IHsgdGl0bGU6ICcnIH07XG4gICAgfVxuICAgIGlmIChpc011bHRpcGxlKSB7XG4gICAgICAgIHBsdWdpbnMucmVtb3ZlX2J1dHRvbiA9IHsgdGl0bGU6ICcnIH07XG4gICAgfVxuICAgIGlmICh0aGlzLnVybFZhbHVlKSB7XG4gICAgICAgIHBsdWdpbnMudmlydHVhbF9zY3JvbGwgPSB7fTtcbiAgICB9XG4gICAgY29uc3QgcmVuZGVyID0ge1xuICAgICAgICBub19yZXN1bHRzOiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJuby1yZXN1bHRzXCI+JHt0aGlzLm5vUmVzdWx0c0ZvdW5kVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbl9jcmVhdGU6IChkYXRhLCBlc2NhcGVEYXRhKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJjcmVhdGVcIj4ke3RoaXMuY3JlYXRlT3B0aW9uVGV4dFZhbHVlLnJlcGxhY2UoJyVwbGFjZWhvbGRlciUnLCBgPHN0cm9uZz4ke2VzY2FwZURhdGEoZGF0YS5pbnB1dCl9PC9zdHJvbmc+YCl9PC9kaXY+YDtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgcmVuZGVyLFxuICAgICAgICBwbHVnaW5zLFxuICAgICAgICBvbkl0ZW1BZGQ6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9tU2VsZWN0LnNldFRleHRib3hWYWx1ZSgnJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlQWZ0ZXJTZWxlY3Q6IHRydWUsXG4gICAgICAgIG9uT3B0aW9uQWRkOiAodmFsdWUsIGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxldCBwYXJlbnRFbGVtZW50ID0gdGhpcy50b21TZWxlY3QuaW5wdXQ7XG4gICAgICAgICAgICBsZXQgb3B0Z3JvdXBEYXRhID0gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGdyb3VwID0gZGF0YVt0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy5vcHRncm91cEZpZWxkXTtcbiAgICAgICAgICAgIGlmIChvcHRncm91cCAmJiB0aGlzLnRvbVNlbGVjdC5vcHRncm91cHMpIHtcbiAgICAgICAgICAgICAgICBvcHRncm91cERhdGEgPSB0aGlzLnRvbVNlbGVjdC5vcHRncm91cHNbb3B0Z3JvdXBdO1xuICAgICAgICAgICAgICAgIGlmIChvcHRncm91cERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0Z3JvdXBFbGVtZW50ID0gcGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKGBvcHRncm91cFtsYWJlbD1cIiR7b3B0Z3JvdXBEYXRhLmxhYmVsfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0Z3JvdXBFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50ID0gb3B0Z3JvdXBFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0ID0gZGF0YVt0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy5sYWJlbEZpZWxkXTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbk9yZGVyID0gZGF0YS4kb3JkZXI7XG4gICAgICAgICAgICBsZXQgb3JkZXJlZE9wdGlvbiA9IG51bGw7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFssIHRvbVNlbGVjdE9wdGlvbl0gb2YgT2JqZWN0LmVudHJpZXModGhpcy50b21TZWxlY3Qub3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9tU2VsZWN0T3B0aW9uLiRvcmRlciA9PT0gb3B0aW9uT3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JkZXJlZE9wdGlvbiA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcihgOnNjb3BlID4gb3B0aW9uW3ZhbHVlPVwiJHtDU1MuZXNjYXBlKHRvbVNlbGVjdE9wdGlvblt0aGlzLnRvbVNlbGVjdC5zZXR0aW5ncy52YWx1ZUZpZWxkXSl9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmRlcmVkT3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgb3JkZXJlZE9wdGlvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgb3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcHRpb25PcmRlciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbGVtZW50LnByZXBlbmQob3B0aW9uRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBpZiAoIXRoaXMuc2VsZWN0RWxlbWVudCAmJiAhdGhpcy51cmxWYWx1ZSkge1xuICAgICAgICBjb25maWcuc2hvdWxkTG9hZCA9ICgpID0+IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzKS5jYWxsKHRoaXMsIGNvbmZpZywgdGhpcy50b21TZWxlY3RPcHRpb25zVmFsdWUpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGUgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSgpIHtcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfZGVmYXVsdF8xX2luc3RhbmNlcywgXCJtXCIsIF9kZWZhdWx0XzFfZ2V0Q29tbW9uQ29uZmlnKS5jYWxsKHRoaXMpLCB7XG4gICAgICAgIG1heE9wdGlvbnM6IHRoaXMuZ2V0TWF4T3B0aW9ucygpLFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cyA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cygpIHtcbiAgICBjb25zdCBjb21tb25Db25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWcpLmNhbGwodGhpcyk7XG4gICAgY29uc3QgbGFiZWxGaWVsZCA9IGNvbW1vbkNvbmZpZy5sYWJlbEZpZWxkID8/ICd0ZXh0JztcbiAgICBjb25zdCBjb25maWcgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMpLmNhbGwodGhpcywgY29tbW9uQ29uZmlnLCB7XG4gICAgICAgIG1heE9wdGlvbnM6IHRoaXMuZ2V0TWF4T3B0aW9ucygpLFxuICAgICAgICBzY29yZTogKHNlYXJjaCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2NvcmluZ0Z1bmN0aW9uID0gdGhpcy50b21TZWxlY3QuZ2V0U2NvcmVGdW5jdGlvbihzZWFyY2gpO1xuICAgICAgICAgICAgcmV0dXJuIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjb3JpbmdGdW5jdGlvbih7IC4uLml0ZW0sIHRleHQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX3N0cmlwVGFncykuY2FsbCh0aGlzLCBpdGVtW2xhYmVsRmllbGRdKSB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgaXRlbTogKGl0ZW0pID0+IGA8ZGl2PiR7aXRlbVtsYWJlbEZpZWxkXX08L2Rpdj5gLFxuICAgICAgICAgICAgb3B0aW9uOiAoaXRlbSkgPT4gYDxkaXY+JHtpdGVtW2xhYmVsRmllbGRdfTwvZGl2PmAsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdCkuY2FsbCh0aGlzLCBjb25maWcpO1xufSwgX2RlZmF1bHRfMV9jcmVhdGVBdXRvY29tcGxldGVXaXRoUmVtb3RlRGF0YSA9IGZ1bmN0aW9uIF9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEoYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwsIG1pbkNoYXJhY3Rlckxlbmd0aCkge1xuICAgIGNvbnN0IGNvbW1vbkNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX2dldENvbW1vbkNvbmZpZykuY2FsbCh0aGlzKTtcbiAgICBjb25zdCBsYWJlbEZpZWxkID0gY29tbW9uQ29uZmlnLmxhYmVsRmllbGQgPz8gJ3RleHQnO1xuICAgIGNvbnN0IGNvbmZpZyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX2RlZmF1bHRfMV9pbnN0YW5jZXMsIFwibVwiLCBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cykuY2FsbCh0aGlzLCBjb21tb25Db25maWcsIHtcbiAgICAgICAgZmlyc3RVcmw6IChxdWVyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gYXV0b2NvbXBsZXRlRW5kcG9pbnRVcmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgICAgICAgIHJldHVybiBgJHthdXRvY29tcGxldGVFbmRwb2ludFVybH0ke3NlcGFyYXRvcn1xdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZDogZnVuY3Rpb24gKHF1ZXJ5LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdGhpcy5nZXRVcmwocXVlcnkpO1xuICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0VXJsKHF1ZXJ5LCBqc29uLm5leHRfcGFnZSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soanNvbi5yZXN1bHRzLm9wdGlvbnMgfHwganNvbi5yZXN1bHRzLCBqc29uLnJlc3VsdHMub3B0Z3JvdXBzIHx8IFtdKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGNhbGxiYWNrKFtdLCBbXSkpO1xuICAgICAgICB9LFxuICAgICAgICBzaG91bGRMb2FkOiAocXVlcnkpID0+IHtcbiAgICAgICAgICAgIGlmIChudWxsICE9PSBtaW5DaGFyYWN0ZXJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnkubGVuZ3RoID49IG1pbkNoYXJhY3Rlckxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmhhc0xvYWRlZENob2ljZXNQcmV2aW91c2x5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocXVlcnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHF1ZXJ5Lmxlbmd0aCA+PSAzO1xuICAgICAgICB9LFxuICAgICAgICBvcHRncm91cEZpZWxkOiAnZ3JvdXBfYnknLFxuICAgICAgICBzY29yZTogKHNlYXJjaCkgPT4gKGl0ZW0pID0+IDEsXG4gICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgb3B0aW9uOiAoaXRlbSkgPT4gYDxkaXY+JHtpdGVtW2xhYmVsRmllbGRdfTwvZGl2PmAsXG4gICAgICAgICAgICBpdGVtOiAoaXRlbSkgPT4gYDxkaXY+JHtpdGVtW2xhYmVsRmllbGRdfTwvZGl2PmAsXG4gICAgICAgICAgICBsb2FkaW5nX21vcmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJsb2FkaW5nLW1vcmUtcmVzdWx0c1wiPiR7dGhpcy5sb2FkaW5nTW9yZVRleHRWYWx1ZX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vX21vcmVfcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLW1vcmUtcmVzdWx0c1wiPiR7dGhpcy5ub01vcmVSZXN1bHRzVGV4dFZhbHVlfTwvZGl2PmA7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9fcmVzdWx0czogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cIm5vLXJlc3VsdHNcIj4ke3RoaXMubm9SZXN1bHRzRm91bmRUZXh0VmFsdWV9PC9kaXY+YDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25fY3JlYXRlOiAoZGF0YSwgZXNjYXBlRGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNyZWF0ZVwiPiR7dGhpcy5jcmVhdGVPcHRpb25UZXh0VmFsdWUucmVwbGFjZSgnJXBsYWNlaG9sZGVyJScsIGA8c3Ryb25nPiR7ZXNjYXBlRGF0YShkYXRhLmlucHV0KX08L3N0cm9uZz5gKX08L2Rpdj5gO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlbG9hZDogdGhpcy5wcmVsb2FkLFxuICAgIH0pO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9kZWZhdWx0XzFfaW5zdGFuY2VzLCBcIm1cIiwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QpLmNhbGwodGhpcywgY29uZmlnKTtcbn0sIF9kZWZhdWx0XzFfc3RyaXBUYWdzID0gZnVuY3Rpb24gX2RlZmF1bHRfMV9zdHJpcFRhZ3Moc3RyaW5nKSB7XG4gICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oPChbXj5dKyk+KS9naSwgJycpO1xufSwgX2RlZmF1bHRfMV9tZXJnZU9iamVjdHMgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX21lcmdlT2JqZWN0cyhvYmplY3QxLCBvYmplY3QyKSB7XG4gICAgcmV0dXJuIHsgLi4ub2JqZWN0MSwgLi4ub2JqZWN0MiB9O1xufSwgX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QgPSBmdW5jdGlvbiBfZGVmYXVsdF8xX2NyZWF0ZVRvbVNlbGVjdChvcHRpb25zKSB7XG4gICAgY29uc3QgcHJlQ29ubmVjdFBheWxvYWQgPSB7IG9wdGlvbnMgfTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ3ByZS1jb25uZWN0JywgcHJlQ29ubmVjdFBheWxvYWQpO1xuICAgIGNvbnN0IHRvbVNlbGVjdCA9IG5ldyBUb21TZWxlY3QodGhpcy5mb3JtRWxlbWVudCwgb3B0aW9ucyk7XG4gICAgY29uc3QgY29ubmVjdFBheWxvYWQgPSB7IHRvbVNlbGVjdCwgb3B0aW9ucyB9O1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnY29ubmVjdCcsIGNvbm5lY3RQYXlsb2FkKTtcbiAgICByZXR1cm4gdG9tU2VsZWN0O1xufTtcbmRlZmF1bHRfMS52YWx1ZXMgPSB7XG4gICAgdXJsOiBTdHJpbmcsXG4gICAgb3B0aW9uc0FzSHRtbDogQm9vbGVhbixcbiAgICBsb2FkaW5nTW9yZVRleHQ6IFN0cmluZyxcbiAgICBub1Jlc3VsdHNGb3VuZFRleHQ6IFN0cmluZyxcbiAgICBub01vcmVSZXN1bHRzVGV4dDogU3RyaW5nLFxuICAgIGNyZWF0ZU9wdGlvblRleHQ6IFN0cmluZyxcbiAgICBtaW5DaGFyYWN0ZXJzOiBOdW1iZXIsXG4gICAgdG9tU2VsZWN0T3B0aW9uczogT2JqZWN0LFxuICAgIHByZWxvYWQ6IFN0cmluZyxcbn07XG5cbmV4cG9ydCB7IGRlZmF1bHRfMSBhcyBkZWZhdWx0IH07XG4iXSwibmFtZXMiOlsiQ29udHJvbGxlciIsIlRvbVNlbGVjdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwidmFsdWUiLCJnZXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJlcnJvciIsInN1cHByZXNzZWQiLCJtZXNzYWdlIiwiZSIsIkVycm9yIiwibmFtZSIsIl9kZWZhdWx0XzFfaW5zdGFuY2VzIiwiX2RlZmF1bHRfMV9nZXRDb21tb25Db25maWciLCJfZGVmYXVsdF8xX2NyZWF0ZUF1dG9jb21wbGV0ZSIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aEh0bWxDb250ZW50cyIsIl9kZWZhdWx0XzFfY3JlYXRlQXV0b2NvbXBsZXRlV2l0aFJlbW90ZURhdGEiLCJfZGVmYXVsdF8xX3N0cmlwVGFncyIsIl9kZWZhdWx0XzFfbWVyZ2VPYmplY3RzIiwiX2RlZmF1bHRfMV9jcmVhdGVUb21TZWxlY3QiLCJkZWZhdWx0XzEiLCJfQ29udHJvbGxlciIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NhbGxTdXBlciIsImFyZ3VtZW50cyIsImFkZCIsImlzT2JzZXJ2aW5nIiwiaGFzTG9hZGVkQ2hvaWNlc1ByZXZpb3VzbHkiLCJvcmlnaW5hbE9wdGlvbnMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJpbml0aWFsaXplIiwiX3RoaXMyIiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJtdXRhdGlvbnMiLCJvbk11dGF0aW9ucyIsImNvbm5lY3QiLCJzZWxlY3RFbGVtZW50IiwiY3JlYXRlT3B0aW9uc0RhdGFTdHJ1Y3R1cmUiLCJpbml0aWFsaXplVG9tU2VsZWN0Iiwic2V0QXR0cmlidXRlIiwidXJsVmFsdWUiLCJ0b21TZWxlY3QiLCJoYXNNaW5DaGFyYWN0ZXJzVmFsdWUiLCJtaW5DaGFyYWN0ZXJzVmFsdWUiLCJvcHRpb25zQXNIdG1sVmFsdWUiLCJzdGFydE11dGF0aW9uT2JzZXJ2ZXIiLCJkaXNjb25uZWN0Iiwic3RvcE11dGF0aW9uT2JzZXJ2ZXIiLCJjdXJyZW50U2VsZWN0ZWRWYWx1ZXMiLCJtdWx0aXBsZSIsIkFycmF5IiwiZnJvbSIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJvcHRpb24iLCJzZWxlY3RlZCIsIm1hcCIsImRlc3Ryb3kiLCJmb3JFYWNoIiwiaW5jbHVkZXMiLCJ1cmxWYWx1ZUNoYW5nZWQiLCJyZXNldFRvbVNlbGVjdCIsImdldE1heE9wdGlvbnMiLCJsZW5ndGgiLCJlbGVtZW50IiwiSFRNTFNlbGVjdEVsZW1lbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZGlzcGF0Y2hFdmVudCIsInBheWxvYWQiLCJkaXNwYXRjaCIsImRldGFpbCIsInByZWZpeCIsImhhc1ByZWxvYWRWYWx1ZSIsInByZWxvYWRWYWx1ZSIsImN1cnJlbnRIdG1sIiwiaW5uZXJIVE1MIiwiY3VycmVudFZhbHVlIiwiZ2V0VmFsdWUiLCJzZXRWYWx1ZSIsImNoYW5nZVRvbVNlbGVjdERpc2FibGVkU3RhdGUiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZSIsImVuYWJsZSIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiYXR0cmlidXRlcyIsImNoYXJhY3RlckRhdGEiLCJhdHRyaWJ1dGVPbGRWYWx1ZSIsIl90aGlzMyIsImNoYW5nZURpc2FibGVkU3RhdGUiLCJyZXF1aXJlUmVzZXQiLCJtdXRhdGlvbiIsInR5cGUiLCJ0YXJnZXQiLCJhdHRyaWJ1dGVOYW1lIiwiaXNOb3dNdWx0aXBsZSIsImhhc0F0dHJpYnV0ZSIsIndhc011bHRpcGxlIiwib2xkVmFsdWUiLCJuZXdPcHRpb25zIiwiYXJlT3B0aW9uc0VxdWl2YWxlbnQiLCJmb3JtRWxlbWVudCIsImRpc2FibGVkIiwidGV4dCIsImZpbHRlcmVkT3JpZ2luYWxPcHRpb25zIiwiZmlsdGVyZWROZXdPcHRpb25zIiwib3JpZ2luYWxQbGFjZWhvbGRlck9wdGlvbiIsImZpbmQiLCJuZXdQbGFjZWhvbGRlck9wdGlvbiIsIm5vcm1hbGl6ZU9wdGlvbiIsImNvbmNhdCIsIm9yaWdpbmFsT3B0aW9uc1NldCIsIlNldCIsIm5ld09wdGlvbnNTZXQiLCJzaXplIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiZXZlcnkiLCJXZWFrU2V0IiwiX3RoaXM0IiwicGx1Z2lucyIsImlzTXVsdGlwbGUiLCJjbGVhcl9idXR0b24iLCJ0aXRsZSIsInJlbW92ZV9idXR0b24iLCJ2aXJ0dWFsX3Njcm9sbCIsInJlbmRlciIsIm5vX3Jlc3VsdHMiLCJub1Jlc3VsdHNGb3VuZFRleHRWYWx1ZSIsIm9wdGlvbl9jcmVhdGUiLCJkYXRhIiwiZXNjYXBlRGF0YSIsImNyZWF0ZU9wdGlvblRleHRWYWx1ZSIsInJlcGxhY2UiLCJpbnB1dCIsImNvbmZpZyIsIm9uSXRlbUFkZCIsInNldFRleHRib3hWYWx1ZSIsImNsb3NlQWZ0ZXJTZWxlY3QiLCJvbk9wdGlvbkFkZCIsInBhcmVudEVsZW1lbnQiLCJvcHRncm91cERhdGEiLCJvcHRncm91cCIsInNldHRpbmdzIiwib3B0Z3JvdXBGaWVsZCIsIm9wdGdyb3VwcyIsIm9wdGdyb3VwRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsYWJlbCIsIm9wdGlvbkVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJsYWJlbEZpZWxkIiwib3B0aW9uT3JkZXIiLCIkb3JkZXIiLCJvcmRlcmVkT3B0aW9uIiwiX2kiLCJfT2JqZWN0JGVudHJpZXMiLCJPYmplY3QiLCJlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwiX3NsaWNlZFRvQXJyYXkiLCJ0b21TZWxlY3RPcHRpb24iLCJDU1MiLCJlc2NhcGUiLCJ2YWx1ZUZpZWxkIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYXBwZW5kIiwicHJlcGVuZCIsInNob3VsZExvYWQiLCJ0b21TZWxlY3RPcHRpb25zVmFsdWUiLCJtYXhPcHRpb25zIiwiX2NvbW1vbkNvbmZpZyRsYWJlbEZpIiwiX3RoaXM1IiwiY29tbW9uQ29uZmlnIiwic2NvcmUiLCJzZWFyY2giLCJzY29yaW5nRnVuY3Rpb24iLCJnZXRTY29yZUZ1bmN0aW9uIiwiaXRlbSIsIl9vYmplY3RTcHJlYWQiLCJhdXRvY29tcGxldGVFbmRwb2ludFVybCIsIm1pbkNoYXJhY3Rlckxlbmd0aCIsIl9jb21tb25Db25maWckbGFiZWxGaTIiLCJfdGhpczciLCJmaXJzdFVybCIsInF1ZXJ5Iiwic2VwYXJhdG9yIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9hZCIsImNhbGxiYWNrIiwiX3RoaXM2IiwidXJsIiwiZ2V0VXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwic2V0TmV4dFVybCIsIm5leHRfcGFnZSIsInJlc3VsdHMiLCJjYXRjaCIsImxvYWRpbmdfbW9yZSIsImxvYWRpbmdNb3JlVGV4dFZhbHVlIiwibm9fbW9yZV9yZXN1bHRzIiwibm9Nb3JlUmVzdWx0c1RleHRWYWx1ZSIsInByZWxvYWQiLCJzdHJpbmciLCJvYmplY3QxIiwib2JqZWN0MiIsInByZUNvbm5lY3RQYXlsb2FkIiwiY29ubmVjdFBheWxvYWQiLCJ2YWx1ZXMiLCJTdHJpbmciLCJvcHRpb25zQXNIdG1sIiwiQm9vbGVhbiIsImxvYWRpbmdNb3JlVGV4dCIsIm5vUmVzdWx0c0ZvdW5kVGV4dCIsIm5vTW9yZVJlc3VsdHNUZXh0IiwiY3JlYXRlT3B0aW9uVGV4dCIsIm1pbkNoYXJhY3RlcnMiLCJOdW1iZXIiLCJ0b21TZWxlY3RPcHRpb25zIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=