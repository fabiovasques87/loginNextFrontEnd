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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst ModalAviso = (param)=>{\n    let { showModal, handleCloseModal } = param;\n    _s();\n    const [localShowModal, setLocalShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(showModal);\n    const handleLocalCloseModal = ()=>{\n        setLocalShowModal(false);\n        handleCloseModal();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        show: showModal,\n        onHide: handleCloseModal,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, {\n                closeButton: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n                    children: \"Logout\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {\n                children: \"Fa\\xe7a login novamente!!!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ModalAviso, \"4CTfSFaRHA4Jk4C5Yhkzlv98N5c=\");\n_c = ModalAviso;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalAviso);\nvar _c;\n$RefreshReg$(_c, \"ModalAviso\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9hdmlzby9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDdUQ7QUFDeEI7QUFTN0IsTUFBTUUsYUFBd0M7UUFBQyxFQUFFQyxTQUFTLEVBQUVDLGdCQUFnQixFQUFFOztJQUUzRSxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDRTtJQUV4RCxNQUFNSSx3QkFBd0I7UUFDNUJELGtCQUFrQjtRQUNsQkY7SUFDRjtJQUVFLHFCQUNJLDhEQUFDSiw2REFBS0E7UUFBQ1EsTUFBTUw7UUFBV00sUUFBUUw7OzBCQUNoQyw4REFBQ0osb0VBQVk7Z0JBQUNXLFdBQVc7MEJBQ3ZCLDRFQUFDWCxtRUFBVzs4QkFBQzs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNBLGtFQUFVOzBCQUFDOzs7Ozs7Ozs7Ozs7QUFLcEI7R0FuQlFFO0tBQUFBO0FBdUJSLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2F2aXNvL2luZGV4LnRzeD9kYWFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmludGVyZmFjZSBNb2RhbEF2aXNvUHJvcHMge1xyXG4gICAgc2hvd01vZGFsOiBib29sZWFuO1xyXG4gICAgaGFuZGxlQ2xvc2VNb2RhbDogKCkgPT4gdm9pZDtcclxuICB9XHJcblxyXG5cclxuICBjb25zdCBNb2RhbEF2aXNvOiBSZWFjdC5GQzxNb2RhbEF2aXNvUHJvcHM+ID0gKHsgc2hvd01vZGFsLCBoYW5kbGVDbG9zZU1vZGFsIH0pID0+IHtcclxuXHJcbiAgICAgY29uc3QgW2xvY2FsU2hvd01vZGFsLCBzZXRMb2NhbFNob3dNb2RhbF0gPSB1c2VTdGF0ZShzaG93TW9kYWwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2NhbENsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRMb2NhbFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICBoYW5kbGVDbG9zZU1vZGFsKCk7XHJcbiAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSBvbkhpZGU9e2hhbmRsZUNsb3NlTW9kYWx9PlxyXG4gICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICA8TW9kYWwuVGl0bGU+TG9nb3V0PC9Nb2RhbC5UaXRsZT5cclxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICA8TW9kYWwuQm9keT5cclxuICAgICAgICAgICAgRmHDp2EgbG9naW4gbm92YW1lbnRlISEhXHJcbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbEF2aXNvOyJdLCJuYW1lcyI6WyJNb2RhbCIsInVzZVN0YXRlIiwiTW9kYWxBdmlzbyIsInNob3dNb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJsb2NhbFNob3dNb2RhbCIsInNldExvY2FsU2hvd01vZGFsIiwiaGFuZGxlTG9jYWxDbG9zZU1vZGFsIiwic2hvdyIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal/aviso/index.tsx\n"));

/***/ })

});