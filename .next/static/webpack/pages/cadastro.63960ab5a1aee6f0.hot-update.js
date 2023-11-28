"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cadastro",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navBar */ \"./src/components/navBar/index.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.css */ \"./src/components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _modal_aviso__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/aviso */ \"./src/components/modal/aviso/index.tsx\");\n/* harmony import */ var _BotLogout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BotLogout */ \"./src/components/BotLogout/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst router = (next_router__WEBPACK_IMPORTED_MODULE_4___default());\nconst Header = ()=>{\n    _s();\n    const { user } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser)();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogout = ()=>{\n        // Remova o token do armazenamento local\n        localStorage.removeItem(\"token\");\n        setShowModal(true);\n        // Redirecione o usuário para a página de login ou outra página de sua escolha\n        router.push(\"/\"); // Certifique-se de importar a função 'useRouter' do 'next/router'.\n    };\n    const handleCloseModal = ()=>{\n        // Feche o modal\n        setShowModal(false);\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_Header_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                children: [\n                    \" \",\n                    user ? \"Bem Vindo: \".concat(user.username) : \"Nenhum usu\\xe1rio logado\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BotLogout__WEBPACK_IMPORTED_MODULE_6__.BotLogout, {\n                label: \"Logout...\",\n                onClick: handleLogout\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_aviso__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                showModal: showModal,\n                handleCloseModal: handleCloseModal\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\Header\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\Header\\\\index.tsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Header, \"8PkEJ4biKS4StkYNcoMPP9UAt7c=\", false, function() {\n    return [\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3RDtBQUV6QjtBQUVBO0FBRUU7QUFFTztBQUVBO0FBRUY7QUFFdEMsTUFBTU8sU0FBU0osb0RBQU1BO0FBRWQsTUFBTUssU0FBcUI7O0lBRTlCLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdULDhEQUFPQTtJQUN4QixNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1YsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVcsZUFBZTtRQUNqQix3Q0FBd0M7UUFDeENDLGFBQWFDLFVBQVUsQ0FBQztRQUN4QkgsYUFBYTtRQUNiLDhFQUE4RTtRQUM5RUosT0FBT1EsSUFBSSxDQUFDLE1BQU0sbUVBQW1FO0lBQ3pGO0lBRUEsTUFBTUMsbUJBQW1CO1FBQ3JCLGdCQUFnQjtRQUNoQkwsYUFBYTtRQUNiSixPQUFPUSxJQUFJLENBQUM7SUFDZDtJQUdGLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFXZCxxRUFBZ0I7OzBCQUd4Qiw4REFBQ0YsK0NBQU1BOzs7OzswQkFJUCw4REFBQ2tCO2dCQUFFRixXQUFXZCxpRUFBWTs7b0JBQUU7b0JBQUVLLE9BQU8sY0FBNEIsT0FBZEEsS0FBS2EsUUFBUSxJQUFLOzs7Ozs7OzBCQU1yRSw4REFBQ2hCLGlEQUFTQTtnQkFBRWlCLE9BQU07Z0JBQVlDLFNBQVNaOzs7Ozs7MEJBR3ZDLDhEQUFDUCxvREFBVUE7Z0JBQUNLLFdBQVdBO2dCQUFXTSxrQkFBa0JBOzs7Ozs7Ozs7Ozs7QUFNcEUsRUFBQztHQTNDWVI7O1FBRVFSLDBEQUFPQTs7O0tBRmZRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/NDAwMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0cy9Vc2VyQ29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgTmF2QmFyIGZyb20gXCIuLi9uYXZCYXJcIjtcclxuXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnXHJcblxyXG5pbXBvcnQgTW9kYWxBdmlzbyBmcm9tIFwiLi4vbW9kYWwvYXZpc29cIjtcclxuXHJcbmltcG9ydCB7Qm90TG9nb3V0fSBmcm9tICcuLi9Cb3RMb2dvdXQnXHJcblxyXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyIDogUmVhY3QuRkMgID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHsgdXNlciB9ID0gdXNlVXNlcigpO1xyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gUmVtb3ZhIG8gdG9rZW4gZG8gYXJtYXplbmFtZW50byBsb2NhbFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKTtcclxuICAgICAgICAvLyBSZWRpcmVjaW9uZSBvIHVzdcOhcmlvIHBhcmEgYSBww6FnaW5hIGRlIGxvZ2luIG91IG91dHJhIHDDoWdpbmEgZGUgc3VhIGVzY29saGFcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBDZXJ0aWZpcXVlLXNlIGRlIGltcG9ydGFyIGEgZnVuw6fDo28gJ3VzZVJvdXRlcicgZG8gJ25leHQvcm91dGVyJy5cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICAvLyBGZWNoZSBvIG1vZGFsXHJcbiAgICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpOyBcclxuICAgICAgfTtcclxuICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZCYXIgLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIFNldSBjw7NkaWdvIGRlIGNhYmXDp2FsaG8gKi99XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IHt1c2VyID8gYEJlbSBWaW5kbzogJHt1c2VyLnVzZXJuYW1lfWAgOiAnTmVuaHVtIHVzdcOhcmlvIGxvZ2Fkbyd9PC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIE91dHJvcyBlbGVtZW50b3MgZG8gY2FiZcOnYWxobyAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+ICAqL31cclxuICAgICAgICAgICAgICAgIDxCb3RMb2dvdXQgIGxhYmVsPSdMb2dvdXQuLi4nIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIENvbXBvbmVudGUgTW9kYWxBdmlzbyAqL31cclxuICAgICAgICAgICAgICAgIDxNb2RhbEF2aXNvIHNob3dNb2RhbD17c2hvd01vZGFsfSBoYW5kbGVDbG9zZU1vZGFsPXtoYW5kbGVDbG9zZU1vZGFsfSAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVVzZXIiLCJ1c2VTdGF0ZSIsIk5hdkJhciIsIlJvdXRlciIsInN0eWxlcyIsIk1vZGFsQXZpc28iLCJCb3RMb2dvdXQiLCJyb3V0ZXIiLCJIZWFkZXIiLCJ1c2VyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2giLCJoYW5kbGVDbG9zZU1vZGFsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicCIsInRpdGxlIiwidXNlcm5hbWUiLCJsYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ }),

/***/ "./src/components/modal/aviso/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/modal/aviso/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Modal */ \"./node_modules/react-bootstrap/esm/Modal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst modalAviso = ()=>{\n    _s();\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleCloseModal = ()=>{\n        setShowModal(false);\n    };\n    const handleShowGeral = ()=>{\n        console.log(\"Showing modal\");\n        setShowModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            show: showModal,\n            onHide: handleCloseModal,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Header, {\n                    closeButton: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Title, {\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Body, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\components\\\\modal\\\\aviso\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 8\n    }, undefined);\n};\n_s(modalAviso, \"uVlnG5KLfXemZk5i5Fl+Cg356FU=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (modalAviso);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2RhbC9hdmlzby9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDdUQ7QUFDeEI7QUFHL0IsTUFBTUUsYUFBYTs7SUFFZixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUM7SUFFM0MsTUFBTUksbUJBQW1CO1FBQ3JCRCxhQUFhO0lBQ2Y7SUFHQSxNQUFNRSxrQkFBa0I7UUFDdEJDLFFBQVFDLEdBQUcsQ0FBQztRQUNaSixhQUFhO0lBQ2Y7SUFFRixxQkFDRyw4REFBQ0s7a0JBRUksNEVBQUNULDZEQUFLQTtZQUFDVSxNQUFNUDtZQUFXUSxRQUFRTjs7OEJBQ2hDLDhEQUFDTCxvRUFBWTtvQkFBQ2EsV0FBVzs4QkFDekIsNEVBQUNiLG1FQUFXO2tDQUFDOzs7Ozs7Ozs7Ozs4QkFFYiw4REFBQ0Esa0VBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdkI7R0EzQk1FO0FBK0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vZGFsL2F2aXNvL2luZGV4LnRzeD9kYWFlIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmNvbnN0IG1vZGFsQXZpc28gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgY29uc3QgaGFuZGxlU2hvd0dlcmFsID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTaG93aW5nIG1vZGFsJyk7XHJcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpO1xyXG4gICAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIHsvKiBNb2RhbCBkZSBsb2dvdXQgKi99XHJcbiAgICAgICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IG9uSGlkZT17aGFuZGxlQ2xvc2VNb2RhbH0+XHJcbiAgICAgICAgICAgIDxNb2RhbC5IZWFkZXIgY2xvc2VCdXR0b24+XHJcbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Mb2dvdXQ8L01vZGFsLlRpdGxlPlxyXG4gICAgICAgICAgICA8L01vZGFsLkhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsLkJvZHk+XHJcblxyXG4gICAgICAgICAgICA8L01vZGFsLkJvZHk+XHJcbiAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2RhbEF2aXNvOyJdLCJuYW1lcyI6WyJNb2RhbCIsInVzZVN0YXRlIiwibW9kYWxBdmlzbyIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVTaG93R2VyYWwiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic2hvdyIsIm9uSGlkZSIsIkhlYWRlciIsImNsb3NlQnV0dG9uIiwiVGl0bGUiLCJCb2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/modal/aviso/index.tsx\n"));

/***/ })

});