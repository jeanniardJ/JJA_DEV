"use strict";
(self["webpackChunkjja_dev"] = self["webpackChunkjja_dev"] || []).push([["assets__layouts_modals_js"],{

/***/ "./assets/_layouts/modals.js":
/*!***********************************!*\
  !*** ./assets/_layouts/modals.js ***!
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

var modalMgId = document.getElementById('myModal');
if (modalMgId) {
  var modalMg = bootstrap__WEBPACK_IMPORTED_MODULE_0__.Modal.getOrCreateInstance(modalMgId);
  modalMg.show();
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX19sYXlvdXRzX21vZGFsc19qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZ0M7QUFFaEMsSUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFFbEQsSUFBSUYsU0FBUyxFQUFFO0VBQ1gsSUFBTUcsT0FBTyxHQUFHSiw0Q0FBSyxDQUFDSyxtQkFBbUIsQ0FBQ0osU0FBUyxDQUFDO0VBQ3BERyxPQUFPLENBQUNFLElBQUksQ0FBQyxDQUFDO0FBQ2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamphLWRldi8uL2Fzc2V0cy9fbGF5b3V0cy9tb2RhbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQ29weXJpZ2h0IChjKSAyMDIzLiBUb3VzIGRyb2l0cyByw6lzZXJ2w6lzLlxyXG4gKiBBdWN1biDDqWzDqW1lbnQgZGUgY2Ugc2l0ZSB3ZWIgbmUgcGV1dCDDqnRyZSByZXByb2R1aXQsIGFmZmljaMOpLCBtb2RpZmnDqSBvdSBkaXN0cmlidcOpIHNhbnMgbGEgcGVybWlzc2lvbiDDqWNyaXRlIHByw6lhbGFibGUgZHUgdGl0dWxhaXJlIGR1IGRyb2l0IGQnYXV0ZXVyLlxyXG4gKiBDZSBzaXRlIHdlYiwgc29uIGNvbnRlbnUgZXQgdG91cyBsZXMgcHJvZHVpdHMgY3LDqcOpcyBwYXIgSkpBIERFViBzb250IHByb3TDqWfDqXMgcGFyIGxlcyBsb2lzIHN1ciBsZXMgZHJvaXRzIGQnYXV0ZXVyIGV0IGxhIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLiBUb3VzIGxlcyBkcm9pdHMgc29udCByw6lzZXJ2w6lzIMOgIEpKQSBERVYuXHJcbiAqXHJcbiAqIEwndXRpbGlzYXRpb24gbm9uIGF1dG9yaXPDqWUgZGUgdG91dCDDqWzDqW1lbnQgZGUgY2Ugc2l0ZSwgeSBjb21wcmlzLCBtYWlzIHNhbnMgcyd5IGxpbWl0ZXIsIGxlIHRleHRlLCBsZXMgaW1hZ2VzLCBsZXMgZGVzc2lucywgbGVzIGdyYXBoaXF1ZXMsIGxlcyBsb2dvcyBldCBsZXMgbWFycXVlcyBkZSBjb21tZXJjZSwgcGV1dCBjb25zdGl0dWVyIHVuZSB2aW9sYXRpb24gZGVzIGxvaXMgc3VyIGxlIGRyb2l0IGQnYXV0ZXVyLCBkZXMgbG9pcyBzdXIgbGVzIG1hcnF1ZXMgZGUgY29tbWVyY2Ugb3UgZCdhdXRyZXMgbG9pcyBhcHBsaWNhYmxlcyBldCBwZXV0IGVudHJhw65uZXIgZGVzIHBvdXJzdWl0ZXMganVkaWNpYWlyZXMuXHJcbiAqXHJcbiAqIFBvdXIgb2J0ZW5pciBsYSBwZXJtaXNzaW9uIGQndXRpbGlzZXIgZHUgY29udGVudSBkZSBjZSBzaXRlLCB2ZXVpbGxleiBjb250YWN0ZXIgSkpBIERFVi5cclxuICpcclxuICogTWVyY2kgZGUgdm90cmUgY29tcHLDqWhlbnNpb24gZXQgZGUgdm90cmUgcmVzcGVjdCBlbnZlcnMgbm90cmUgdHJhdmFpbCBjcsOpYXRpZiBldCBub3MgZHJvaXRzIGRlIHByb3ByacOpdMOpIGludGVsbGVjdHVlbGxlLlxyXG4gKi9cclxuaW1wb3J0IHtNb2RhbH0gZnJvbSBcImJvb3RzdHJhcFwiO1xyXG5cclxubGV0IG1vZGFsTWdJZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XHJcblxyXG5pZiAobW9kYWxNZ0lkKSB7XHJcbiAgICBjb25zdCBtb2RhbE1nID0gTW9kYWwuZ2V0T3JDcmVhdGVJbnN0YW5jZShtb2RhbE1nSWQpO1xyXG4gICAgbW9kYWxNZy5zaG93KCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwibW9kYWxNZ0lkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsTWciLCJnZXRPckNyZWF0ZUluc3RhbmNlIiwic2hvdyJdLCJzb3VyY2VSb290IjoiIn0=