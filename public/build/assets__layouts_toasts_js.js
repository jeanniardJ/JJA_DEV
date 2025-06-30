"use strict";
(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["assets__layouts_toasts_js"],{

/***/ "./assets/_layouts/toasts.js":
/*!***********************************!*\
  !*** ./assets/_layouts/toasts.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
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

var toastLiveId = document.getElementById('toast');
if (toastLiveId) {
  var toastBootstrap = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Toast.getOrCreateInstance(toastLiveId);
  toastBootstrap.show();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX19sYXlvdXRzX3RvYXN0c19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7QUFFaEMsSUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxPQUFPLENBQUM7QUFFbEQsSUFBSUYsV0FBVyxFQUFFO0VBQ2IsSUFBTUcsY0FBYyxHQUFHSiw0Q0FBSyxDQUFDSyxtQkFBbUIsQ0FBQ0osV0FBVyxDQUFDO0VBQzdERyxjQUFjLENBQUNFLElBQUksQ0FBQyxDQUFDO0FBQ3pCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qamEtZGV2Ly4vYXNzZXRzL19sYXlvdXRzL3RvYXN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMjMuIFRvdXMgZHJvaXRzIHLDqXNlcnbDqXMuXHJcbiAqIEF1Y3VuIMOpbMOpbWVudCBkZSBjZSBzaXRlIHdlYiBuZSBwZXV0IMOqdHJlIHJlcHJvZHVpdCwgYWZmaWNow6ksIG1vZGlmacOpIG91IGRpc3RyaWJ1w6kgc2FucyBsYSBwZXJtaXNzaW9uIMOpY3JpdGUgcHLDqWFsYWJsZSBkdSB0aXR1bGFpcmUgZHUgZHJvaXQgZCdhdXRldXIuXHJcbiAqIENlIHNpdGUgd2ViLCBzb24gY29udGVudSBldCB0b3VzIGxlcyBwcm9kdWl0cyBjcsOpw6lzIHBhciBKSkEgREVWIHNvbnQgcHJvdMOpZ8OpcyBwYXIgbGVzIGxvaXMgc3VyIGxlcyBkcm9pdHMgZCdhdXRldXIgZXQgbGEgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuIFRvdXMgbGVzIGRyb2l0cyBzb250IHLDqXNlcnbDqXMgw6AgSkpBIERFVi5cclxuICpcclxuICogTCd1dGlsaXNhdGlvbiBub24gYXV0b3Jpc8OpZSBkZSB0b3V0IMOpbMOpbWVudCBkZSBjZSBzaXRlLCB5IGNvbXByaXMsIG1haXMgc2FucyBzJ3kgbGltaXRlciwgbGUgdGV4dGUsIGxlcyBpbWFnZXMsIGxlcyBkZXNzaW5zLCBsZXMgZ3JhcGhpcXVlcywgbGVzIGxvZ29zIGV0IGxlcyBtYXJxdWVzIGRlIGNvbW1lcmNlLCBwZXV0IGNvbnN0aXR1ZXIgdW5lIHZpb2xhdGlvbiBkZXMgbG9pcyBzdXIgbGUgZHJvaXQgZCdhdXRldXIsIGRlcyBsb2lzIHN1ciBsZXMgbWFycXVlcyBkZSBjb21tZXJjZSBvdSBkJ2F1dHJlcyBsb2lzIGFwcGxpY2FibGVzIGV0IHBldXQgZW50cmHDrm5lciBkZXMgcG91cnN1aXRlcyBqdWRpY2lhaXJlcy5cclxuICpcclxuICogUG91ciBvYnRlbmlyIGxhIHBlcm1pc3Npb24gZCd1dGlsaXNlciBkdSBjb250ZW51IGRlIGNlIHNpdGUsIHZldWlsbGV6IGNvbnRhY3RlciBKSkEgREVWLlxyXG4gKlxyXG4gKiBNZXJjaSBkZSB2b3RyZSBjb21wcsOpaGVuc2lvbiBldCBkZSB2b3RyZSByZXNwZWN0IGVudmVycyBub3RyZSB0cmF2YWlsIGNyw6lhdGlmIGV0IG5vcyBkcm9pdHMgZGUgcHJvcHJpw6l0w6kgaW50ZWxsZWN0dWVsbGUuXHJcbiAqL1xyXG5pbXBvcnQge1RvYXN0fSBmcm9tIFwiYm9vdHN0cmFwXCI7XHJcblxyXG5sZXQgdG9hc3RMaXZlSWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3QnKTtcclxuXHJcbmlmICh0b2FzdExpdmVJZCkge1xyXG4gICAgY29uc3QgdG9hc3RCb290c3RyYXAgPSBUb2FzdC5nZXRPckNyZWF0ZUluc3RhbmNlKHRvYXN0TGl2ZUlkKTtcclxuICAgIHRvYXN0Qm9vdHN0cmFwLnNob3coKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVG9hc3QiLCJ0b2FzdExpdmVJZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2FzdEJvb3RzdHJhcCIsImdldE9yQ3JlYXRlSW5zdGFuY2UiLCJzaG93Il0sInNvdXJjZVJvb3QiOiIifQ==