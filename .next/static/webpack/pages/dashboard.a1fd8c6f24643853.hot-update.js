"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/modal/aviso/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/modal/aviso/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n\n\nconst ModalAviso = (param)=>{\n    let { showModal, handleCloseModal } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        show: showModal,\n        onHide: handleCloseModal,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Header, {\n                closeButton: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Title, {\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Body, {\n                children: \"Fa\\xe7a login novamente!!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ModalAviso;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalAviso);\nvar _c;\n$RefreshReg$(_c, \"ModalAviso\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9hdmlzby9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDdUQ7QUFVckQsTUFBTUMsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFO0lBSTVFLHFCQUNJLDhEQUFDSCw2REFBS0E7UUFBQ0ksTUFBTUY7UUFBV0csUUFBUUY7OzBCQUNoQyw4REFBQ0gsb0VBQVk7Z0JBQUNPLFdBQVc7MEJBQ3ZCLDRFQUFDUCxtRUFBVzs4QkFBQzs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNBLGtFQUFVOzBCQUFDOzs7Ozs7Ozs7Ozs7QUFLcEI7S0FkUUM7QUFrQlIsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvYXZpc28vaW5kZXgudHN4P2RhYWUiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEJ1dHRvbiwgTW9kYWwsIFRhYmxlIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIE1vZGFsQXZpc29Qcm9wcyB7XHJcbiAgICBzaG93TW9kYWw6IGJvb2xlYW47XHJcbiAgICBoYW5kbGVDbG9zZU1vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0IE1vZGFsQXZpc286IFJlYWN0LkZDPE1vZGFsQXZpc29Qcm9wcz4gPSAoeyBzaG93TW9kYWwsIGhhbmRsZUNsb3NlTW9kYWwgfSkgPT4ge1xyXG5cclxuICAgXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gb25IaWRlPXtoYW5kbGVDbG9zZU1vZGFsfT5cclxuICAgICAgICA8TW9kYWwuSGVhZGVyIGNsb3NlQnV0dG9uPlxyXG4gICAgICAgICAgPE1vZGFsLlRpdGxlPkxvZ291dDwvTW9kYWwuVGl0bGU+XHJcbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XHJcbiAgICAgICAgPE1vZGFsLkJvZHk+XHJcbiAgICAgICAgICAgIEZhw6dhIGxvZ2luIG5vdmFtZW50ZSEhIVxyXG4gICAgICAgIDwvTW9kYWwuQm9keT5cclxuICAgICAgPC9Nb2RhbD5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxBdmlzbzsiXSwibmFtZXMiOlsiTW9kYWwiLCJNb2RhbEF2aXNvIiwic2hvd01vZGFsIiwiaGFuZGxlQ2xvc2VNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJIZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIlRpdGxlIiwiQm9keSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/modal/aviso/index.tsx\n"));

/***/ })

});