(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["assets__layouts_validationForm_js"],{

/***/ "./assets/_layouts/validationForm.js":
/*!*******************************************!*\
  !*** ./assets/_layouts/validationForm.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX19sYXlvdXRzX3ZhbGlkYXRpb25Gb3JtX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLENBQUMsWUFBTTtFQUNILFlBQVk7O0VBRVo7RUFDQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsbUJBQW1CLENBQUM7O0VBRTVEO0VBQ0FDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSixLQUFLLENBQUMsQ0FBQ0ssT0FBTyxDQUFDLFVBQUFDLElBQUksRUFBSTtJQUM5QkEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQ3JDLElBQUksQ0FBQ0YsSUFBSSxDQUFDRyxhQUFhLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCRCxLQUFLLENBQUNFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RCRixLQUFLLENBQUNHLGVBQWUsQ0FBQyxDQUFDO01BQzNCO01BRUFMLElBQUksQ0FBQ00sU0FBUyxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3ZDLENBQUMsRUFBRSxLQUFLLENBQUM7RUFDYixDQUFDLENBQUM7QUFDTixDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pqYS1kZXYvLi9hc3NldHMvX2xheW91dHMvdmFsaWRhdGlvbkZvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIC8vIEZldGNoIGFsbCB0aGUgZm9ybXMgd2Ugd2FudCB0byBhcHBseSBjdXN0b20gQm9vdHN0cmFwIHZhbGlkYXRpb24gc3R5bGVzIHRvXHJcbiAgICBjb25zdCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uZWVkcy12YWxpZGF0aW9uJylcclxuXHJcbiAgICAvLyBMb29wIG92ZXIgdGhlbSBhbmQgcHJldmVudCBzdWJtaXNzaW9uXHJcbiAgICBBcnJheS5mcm9tKGZvcm1zKS5mb3JFYWNoKGZvcm0gPT4ge1xyXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKVxyXG4gICAgICAgIH0sIGZhbHNlKVxyXG4gICAgfSlcclxufSkoKSJdLCJuYW1lcyI6WyJmb3JtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJmb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY2hlY2tWYWxpZGl0eSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xhc3NMaXN0IiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==