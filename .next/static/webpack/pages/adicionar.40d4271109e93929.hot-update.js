"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/adicionar",{

/***/ "./src/pages/adicionar/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/adicionar/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _verifica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/verifica */ \"./src/verifica.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_modal_ModalGeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/ModalGeral */ \"./src/components/modal/ModalGeral/index.tsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst index = ()=>{\n    _s();\n    //funcaoes para msg \n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //funao para modal\n    const [showModalGeral, setShowModalGeral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Função para fechar o modal\n    const handleCloseModal = ()=>{\n        setShowModalGeral(false);\n    };\n    const handleShowGeral = ()=>{\n        console.log(\"Showing modal\");\n        setShowModalGeral(true);\n    };\n    const handleClose = ()=>{\n        console.log(\"Closing modal\");\n        setShowModalGeral(false);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [contentVisible, setContentVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const decodedToken = (0,_verifica__WEBPACK_IMPORTED_MODULE_2__.verifica)();\n        if (!decodedToken) {\n            // Se não houver token, redirecione o usuário de volta para a página de login\n            router.push(\"/\");\n        } else {\n            // Verifique se o token inclui informações de função (role)\n            if (decodedToken.role === \"adm\") {\n                setIsAdmin(true);\n                setContentVisible(true);\n                // O usuário tem permissão de administrador\n                console.log(\"Usu\\xe1rio \\xe9 um administrador.\");\n                router.push(\"/adicionar\");\n            } else {\n                // O usuário não tem permissão de administrador\n                console.log(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                setErrorMessage(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                handleShowGeral();\n                // Desativa a interação do usuário enquanto o modal está visível\n                document.body.style.pointerEvents = \"none\";\n                // Redireciona para o dashboard após 5 segundos\n                setTimeout(()=>{\n                    window.location.href = \"/dashboard\";\n                    //router.push('/dashboard');\n                    // Reativa a interação do usuário após o redirecionamento\n                    document.body.style.pointerEvents = \"auto\";\n                }, 3000);\n            //alert('Usuário não é um administrador.');\n            //router.push('/dashboard');\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            (successMessage || errorMessage) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_ModalGeral__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                showModal: showModalGeral,\n                handleClose: handleClose,\n                successMessage: successMessage,\n                errorMessage: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, undefined),\n            isAdmin ? // Renderize seu conteúdo sensível apenas se o usuário for um administrador\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n                                className: \"mb-3\",\n                                controlId: \"exampleForm.ControlInput1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n                                        children: \"Nome do Produto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n                                        type: \"text\",\n                                        placeholder: \"Produto\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Group, {\n                                className: \"mb-3\",\n                                controlId: \"exampleForm.ControlTextarea1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Label, {\n                                        children: \"Example textarea\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Control, {\n                                        as: \"textarea\",\n                                        rows: 3\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                    lineNumber: 104,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n                lineNumber: 102,\n                columnNumber: 17\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n        lineNumber: 92,\n        columnNumber: 3\n    }, undefined);\n};\n_s(index, \"bVgXYiXU9Hqx/lfCOUUjl/bwzTk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n// useEffect(() => {\n//   const isAuthenticated = verifica();\n//   if (isAuthenticated) {\n//     // Restante do seu código para o cadastro...\n//   }\n// }, []);\n// // Restante do seu componente de cadastro...\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRWpELCtEQUFlSSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZGljaW9uYXIvaW5kZXgudHN4PzU3YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdmVyaWZpY2EgfSBmcm9tICdAL3ZlcmlmaWNhJzsgXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5pbXBvcnQgTW9kYWxHZXJhbCBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxHZXJhbCc7XHJcblxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tICdAL2NvbXBvbmVudHMvSGVhZGVyJztcclxuXHJcbmltcG9ydCBGb3JtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Gb3JtJztcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgLy9mdW5jYW9lcyBwYXJhIG1zZyBcclxuICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgLy9mdW5hbyBwYXJhIG1vZGFsXHJcbiAgY29uc3QgW3Nob3dNb2RhbEdlcmFsLCBzZXRTaG93TW9kYWxHZXJhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgZmVjaGFyIG8gbW9kYWxcclxuICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd01vZGFsR2VyYWwoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNob3dHZXJhbCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdTaG93aW5nIG1vZGFsJyk7XHJcbiAgICBzZXRTaG93TW9kYWxHZXJhbCh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdDbG9zaW5nIG1vZGFsJyk7XHJcbiAgICBzZXRTaG93TW9kYWxHZXJhbChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2NvbnRlbnRWaXNpYmxlLCBzZXRDb250ZW50VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSB2ZXJpZmljYSgpO1xyXG4gICAgXHJcbiAgICAgIGlmICghZGVjb2RlZFRva2VuKSB7XHJcbiAgICAgICAgLy8gU2UgbsOjbyBob3V2ZXIgdG9rZW4sIHJlZGlyZWNpb25lIG8gdXN1w6FyaW8gZGUgdm9sdGEgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW5cclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFZlcmlmaXF1ZSBzZSBvIHRva2VuIGluY2x1aSBpbmZvcm1hw6fDtWVzIGRlIGZ1bsOnw6NvIChyb2xlKVxyXG4gICAgICAgIGlmIChkZWNvZGVkVG9rZW4ucm9sZSA9PT0gJ2FkbScpIHtcclxuICAgICAgICAgIHNldElzQWRtaW4odHJ1ZSk7XHJcbiAgICAgICAgICBzZXRDb250ZW50VmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAvLyBPIHVzdcOhcmlvIHRlbSBwZXJtaXNzw6NvIGRlIGFkbWluaXN0cmFkb3JcclxuICAgICAgICBjb25zb2xlLmxvZygnVXN1w6FyaW8gw6kgdW0gYWRtaW5pc3RyYWRvci4nKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL2FkaWNpb25hcicpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIFxyXG5cclxuICAgICAgICAgIC8vIE8gdXN1w6FyaW8gbsOjbyB0ZW0gcGVybWlzc8OjbyBkZSBhZG1pbmlzdHJhZG9yXHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xyXG4gICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKCdVc3XDoXJpbyBuw6NvIMOpIHVtIGFkbWluaXN0cmFkb3IuJyk7XHJcbiAgICAgICAgICBoYW5kbGVTaG93R2VyYWwoKTtcclxuICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIC8vIERlc2F0aXZhIGEgaW50ZXJhw6fDo28gZG8gdXN1w6FyaW8gZW5xdWFudG8gbyBtb2RhbCBlc3TDoSB2aXPDrXZlbFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZWRpcmVjaW9uYSBwYXJhIG8gZGFzaGJvYXJkIGFww7NzIDUgc2VndW5kb3NcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9kYXNoYm9hcmRcIjtcclxuICAgICAgICAvL3JvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcbiAgICAgICAgLy8gUmVhdGl2YSBhIGludGVyYcOnw6NvIGRvIHVzdcOhcmlvIGFww7NzIG8gcmVkaXJlY2lvbmFtZW50b1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgICAgfSwgMzAwMCk7XHJcblxyXG4gICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgLy9hbGVydCgnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xyXG4gICAgICAgICAgLy9yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB9LCBbXSk7XHJcblxyXG5yZXR1cm4gKFxyXG5cclxuICBcclxuICA8ZGl2PlxyXG4gICAgXHJcbiAgICB7KHN1Y2Nlc3NNZXNzYWdlIHx8IGVycm9yTWVzc2FnZSkgJiYgKFxyXG4gICAgICA8TW9kYWxHZXJhbCAgc2hvd01vZGFsPXtzaG93TW9kYWxHZXJhbH0gaGFuZGxlQ2xvc2U9e2hhbmRsZUNsb3NlfSBzdWNjZXNzTWVzc2FnZT17c3VjY2Vzc01lc3NhZ2V9IGVycm9yTWVzc2FnZT17ZXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgKX1cclxuXHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICB7aXNBZG1pbiA/IChcclxuICAgICAgICAgICAgICAgIC8vIFJlbmRlcml6ZSBzZXUgY29udGXDumRvIHNlbnPDrXZlbCBhcGVuYXMgc2UgbyB1c3XDoXJpbyBmb3IgdW0gYWRtaW5pc3RyYWRvclxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgIFxyXG4gICAgICAgICAgPGRpdj4gXHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZXhhbXBsZUZvcm0uQ29udHJvbElucHV0MVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPk5vbWUgZG8gUHJvZHV0bzwvRm9ybS5MYWJlbD5cclxuICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJQcm9kdXRvXCIgLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgICA8Rm9ybS5Hcm91cCBjbGFzc05hbWU9XCJtYi0zXCIgY29udHJvbElkPVwiZXhhbXBsZUZvcm0uQ29udHJvbFRleHRhcmVhMVwiPlxyXG4gICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkV4YW1wbGUgdGV4dGFyZWE8L0Zvcm0uTGFiZWw+XHJcbiAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCBhcz1cInRleHRhcmVhXCIgcm93cz17M30gLz5cclxuICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxyXG4gICAgICAgICAgPC9Gb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiBcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcblxyXG5cclxuICAgIFxyXG4gICAgIDwvZGl2PlxyXG4pO1xyXG5cclxufVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdmVyaWZpY2EoKTtcclxuXHJcbiAgLy8gICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgLy8gICAgIC8vIFJlc3RhbnRlIGRvIHNldSBjw7NkaWdvIHBhcmEgbyBjYWRhc3Ryby4uLlxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gLy8gUmVzdGFudGUgZG8gc2V1IGNvbXBvbmVudGUgZGUgY2FkYXN0cm8uLi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2ZXJpZmljYSIsInVzZVJvdXRlciIsIk1vZGFsR2VyYWwiLCJIZWFkZXIiLCJGb3JtIiwiaW5kZXgiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic2hvd01vZGFsR2VyYWwiLCJzZXRTaG93TW9kYWxHZXJhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJoYW5kbGVTaG93R2VyYWwiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xvc2UiLCJyb3V0ZXIiLCJjb250ZW50VmlzaWJsZSIsInNldENvbnRlbnRWaXNpYmxlIiwiaXNBZG1pbiIsInNldElzQWRtaW4iLCJkZWNvZGVkVG9rZW4iLCJwdXNoIiwicm9sZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwicG9pbnRlckV2ZW50cyIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkaXYiLCJzaG93TW9kYWwiLCJHcm91cCIsImNsYXNzTmFtZSIsImNvbnRyb2xJZCIsIkxhYmVsIiwiQ29udHJvbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFzIiwicm93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/adicionar/index.tsx\n"));

/***/ })

});