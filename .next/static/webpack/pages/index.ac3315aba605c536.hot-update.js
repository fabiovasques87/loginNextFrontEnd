"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.module.css */ \"./src/pages/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_modal_ModalGeral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modal/ModalGeral */ \"./src/components/modal/ModalGeral/index.tsx\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n // Importe o Bootstrap CSS\n\nconst Login = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { setUser } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser)(); // Use useUser para acessar o contexto do usuário\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogin = async (e)=>{\n        _s1();\n        const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n        const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n        const [showModalGeral, setShowModalGeral] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n        // funções para abrir e fechar o modal:\n        const handleShowGeral = ()=>{\n            console.log(\"Showing modal\");\n            setShowModalGeral(true);\n        };\n        const handleClose = ()=>{\n            console.log(\"Closing modal\");\n            setShowModalGeral(false);\n        };\n        e.preventDefault(); // Evita a recarga da página ao pressionar Enter no formulário\n        {\n            (successMessage || errorMessage) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_modal_ModalGeral__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                showModal: showModalGeral,\n                handleClose: handleClose,\n                successMessage: successMessage,\n                errorMessage: errorMessage\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined);\n        }\n        // Verifique se os campos de usuário e senha estão preenchidos\n        if (!username || !password) {\n            setErrorMessage(\"Preencha todos os campos\");\n            //alert('Preencha todos os campos.');\n            return;\n        }\n        setLoading(true); // Ative o estado de carregamento\n        try {\n            // Faça a solicitação para autenticação\n            const response = await fetch(\"http://localhost:7000/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                localStorage.setItem(\"token\", data.token);\n                // Utilize as informações reais do usuário recebidas do servidor\n                setUser({\n                    username: username,\n                    role: data.role\n                });\n                // Redirecione o usuário para a página de dashboard com o token\n                router.push(\"/dashboard\");\n            } else {\n                const errorData = await response.json();\n                console.error(\"Erro de autentica\\xe7\\xe3o:\", errorData.message);\n                setErrorMessage(errorData.message || \"Erro de autentica\\xe7\\xe3o. Tente novamente mais tarde.\");\n            //alert(errorData.message || 'Erro de autenticação. Tente novamente mais tarde.');\n            }\n        } catch (error) {\n            console.error(\"Erro ao fazer login:\", error);\n            alert(\"Erro ao fazer login. Tente novamente mais tarde.\");\n        } finally{\n            setLoading(false); // Desative o estado de carregamento\n        }\n    };\n    _s1(handleLogin, \"3hhPfzYFFemvpE3Ma+X/+vmCNqY=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Nome de usu\\xe1rio\",\n                            value: username,\n                            onChange: (e)=>setUsername(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 128,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Senha\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogin,\n                            disabled: loading,\n                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                            children: loading ? \"Carregando...\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 140,\n                            columnNumber: 13\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                            animation: \"border\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 148,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 147,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 122,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 121,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Login, \"RIsJTCDvDHm+bLLs1JARgetELKw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDMEQ7QUFDTDtBQUVIO0FBQ1Y7QUFFRDtBQUdnQjtBQUdULENBQUMsMEJBQTBCO0FBQy9CO0FBSzFDLE1BQU1RLFFBQVE7OztJQUtaLE1BQU1DLFNBQVNMLHNEQUFTQTtJQUl4QixNQUFNLEVBQUVNLE9BQU8sRUFBRSxHQUFHVCw4REFBT0EsSUFBSSxpREFBaUQ7SUFDaEYsTUFBTSxDQUFDVSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFNdkMsTUFBTWMsY0FBd0IsT0FBT0M7O1FBRW5DLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2pCLCtDQUFRQSxDQUFDO1FBQ3JELE1BQU0sQ0FBQ2tCLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBLENBQUM7UUFHakQsTUFBTSxDQUFDb0IsZ0JBQWdCQyxrQkFBa0IsR0FBR3JCLCtDQUFRQSxDQUFDO1FBRXJELHVDQUF1QztRQUV2QyxNQUFNc0Isa0JBQWtCO1lBQ3RCQyxRQUFRQyxHQUFHLENBQUM7WUFDWkgsa0JBQWtCO1FBQ3BCO1FBRUEsTUFBTUksY0FBYztZQUNsQkYsUUFBUUMsR0FBRyxDQUFDO1lBQ1pILGtCQUFrQjtRQUNwQjtRQUlBTixFQUFFVyxjQUFjLElBQUksOERBQThEO1FBRWxGO1lBQUVWLENBQUFBLGtCQUFrQkUsWUFBVyxtQkFDN0IsOERBQUNmLG9FQUFVQTtnQkFBRXdCLFdBQVdQO2dCQUFnQkssYUFBYUE7Z0JBQWFULGdCQUFnQkE7Z0JBQWdCRSxjQUFjQTs7Ozs7O1FBQ2pIO1FBRUQsOERBQThEO1FBQzlELElBQUksQ0FBQ1YsWUFBWSxDQUFDRSxVQUFVO1lBQzFCUyxnQkFBZ0I7WUFDaEIscUNBQXFDO1lBQ3JDO1FBQ0Y7UUFFQU4sV0FBVyxPQUFPLGlDQUFpQztRQUVuRCxJQUFJO1lBQ0YsdUNBQXVDO1lBQ3ZDLE1BQU1lLFdBQVcsTUFBTUMsTUFBTSxvQ0FBb0M7Z0JBQy9EQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRTFCO29CQUFVRTtnQkFBUztZQUM1QztZQUVBLElBQUlrQixTQUFTTyxFQUFFLEVBQUU7Z0JBQ2YsTUFBTUMsT0FBTyxNQUFNUixTQUFTUyxJQUFJO2dCQUNoQ0MsYUFBYUMsT0FBTyxDQUFDLFNBQVNILEtBQUtJLEtBQUs7Z0JBRXhDLGdFQUFnRTtnQkFDaEVqQyxRQUFRO29CQUNOQyxVQUFVQTtvQkFDVmlDLE1BQU1MLEtBQUtLLElBQUk7Z0JBRWpCO2dCQUVBLCtEQUErRDtnQkFDL0RuQyxPQUFPb0MsSUFBSSxDQUFDO1lBRWQsT0FBTztnQkFDTCxNQUFNQyxZQUFZLE1BQU1mLFNBQVNTLElBQUk7Z0JBQ3JDZCxRQUFRcUIsS0FBSyxDQUFDLCtCQUF5QkQsVUFBVUUsT0FBTztnQkFDeEQxQixnQkFBZ0J3QixVQUFVRSxPQUFPLElBQUk7WUFFckMsa0ZBQWtGO1lBQ3BGO1FBRUYsRUFBRSxPQUFPRCxPQUFPO1lBQ2RyQixRQUFRcUIsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdENFLE1BQU07UUFFUixTQUFVO1lBQ1JqQyxXQUFXLFFBQVEsb0NBQW9DO1FBQ3pEO0lBRUY7UUE3RU1DO0lBZ0ZKLHFCQUdFLDhEQUFDakIsK0RBQVlBO2tCQUNYLDRFQUFDa0Q7WUFBS0MsV0FBVzlDLG9FQUFnQjs7OEJBSTdCLDhEQUFDZ0Q7OEJBQUc7Ozs7Ozs4QkFDRiw4REFBQ0M7O3NDQUNILDhEQUFDQzs0QkFDR0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBTy9DOzRCQUNQZ0QsVUFBVSxDQUFDekMsSUFBTU4sWUFBWU0sRUFBRTBDLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7O3NDQUUvQyw4REFBQ0g7NEJBQ0dDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU83Qzs0QkFDUDhDLFVBQVUsQ0FBQ3pDLElBQU1KLFlBQVlJLEVBQUUwQyxNQUFNLENBQUNGLEtBQUs7Ozs7OztzQ0FFL0MsOERBQUNHOzRCQUFPQyxTQUFTN0M7NEJBQWE4QyxVQUFVaEQ7NEJBQVNvQyxXQUFXOUMsaUVBQWE7c0NBQ3BFVSxVQUFVLGtCQUFrQjs7Ozs7O3dCQUtoQ0EseUJBQ0csOERBQUNSLCtEQUFPQTs0QkFBQ3lELFdBQVU7NEJBQVNwQixNQUFLO3NDQUM3Qiw0RUFBQ3FCO2dDQUFLZCxXQUFVOzBDQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF0RDtHQTdJTTNDOztRQUtXSixrREFBU0E7UUFJSkgsMERBQU9BOzs7S0FUdkJPO0FBZ0pOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xyXG5cclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIEZvcm1FdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IEJvdEZvcm0gfSBmcm9tICdAL2NvbXBvbmVudHMvQm90Rm9ybSc7XHJcblxyXG5pbXBvcnQgTW9kYWxHZXJhbCBmcm9tICdAL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxHZXJhbCc7XHJcblxyXG5cclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnOyAvLyBJbXBvcnRlIG8gQm9vdHN0cmFwIENTU1xyXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblxyXG5cclxuICBjb25zdCB7IHNldFVzZXIgfSA9IHVzZVVzZXIoKTsgLy8gVXNlIHVzZVVzZXIgcGFyYSBhY2Vzc2FyIG8gY29udGV4dG8gZG8gdXN1w6FyaW9cclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbjogUmVhY3QuRkMgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3VjY2Vzc01lc3NhZ2UsIHNldFN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgXHJcbiAgICBcclxuICAgIGNvbnN0IFtzaG93TW9kYWxHZXJhbCwgc2V0U2hvd01vZGFsR2VyYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIFxyXG4gICAgLy8gZnVuw6fDtWVzIHBhcmEgYWJyaXIgZSBmZWNoYXIgbyBtb2RhbDpcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZVNob3dHZXJhbCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ1Nob3dpbmcgbW9kYWwnKTtcclxuICAgICAgc2V0U2hvd01vZGFsR2VyYWwodHJ1ZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdDbG9zaW5nIG1vZGFsJyk7XHJcbiAgICAgIHNldFNob3dNb2RhbEdlcmFsKGZhbHNlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgXHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBFdml0YSBhIHJlY2FyZ2EgZGEgcMOhZ2luYSBhbyBwcmVzc2lvbmFyIEVudGVyIG5vIGZvcm11bMOhcmlvXHJcblxyXG4gICAgeyhzdWNjZXNzTWVzc2FnZSB8fCBlcnJvck1lc3NhZ2UpICYmIChcclxuICAgICAgPE1vZGFsR2VyYWwgIHNob3dNb2RhbD17c2hvd01vZGFsR2VyYWx9IGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX0gc3VjY2Vzc01lc3NhZ2U9e3N1Y2Nlc3NNZXNzYWdlfSBlcnJvck1lc3NhZ2U9e2Vycm9yTWVzc2FnZX0gLz5cclxuICAgICl9XHJcblxyXG4gICAgLy8gVmVyaWZpcXVlIHNlIG9zIGNhbXBvcyBkZSB1c3XDoXJpbyBlIHNlbmhhIGVzdMOjbyBwcmVlbmNoaWRvc1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MnKTtcclxuICAgICAgLy9hbGVydCgnUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gQXRpdmUgbyBlc3RhZG8gZGUgY2FycmVnYW1lbnRvXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmHDp2EgYSBzb2xpY2l0YcOnw6NvIHBhcmEgYXV0ZW50aWNhw6fDo29cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL2F1dGgvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgIC8vIFV0aWxpemUgYXMgaW5mb3JtYcOnw7VlcyByZWFpcyBkbyB1c3XDoXJpbyByZWNlYmlkYXMgZG8gc2Vydmlkb3JcclxuICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcclxuICAgICAgICAgIC8vIE91dHJhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvLCBzZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWRpcmVjaW9uZSBvIHVzdcOhcmlvIHBhcmEgYSBww6FnaW5hIGRlIGRhc2hib2FyZCBjb20gbyB0b2tlblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGRlIGF1dGVudGljYcOnw6NvOicsIGVycm9yRGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3JEYXRhLm1lc3NhZ2UgfHwgJ0Vycm8gZGUgYXV0ZW50aWNhw6fDo28uIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicpXHJcbiAgICAgICBcclxuICAgICAgICAvL2FsZXJ0KGVycm9yRGF0YS5tZXNzYWdlIHx8ICdFcnJvIGRlIGF1dGVudGljYcOnw6NvLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgbG9naW46JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRXJybyBhbyBmYXplciBsb2dpbi4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyk7XHJcblxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIERlc2F0aXZlIG8gZXN0YWRvIGRlIGNhcnJlZ2FtZW50b1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuICAgICAgPFVzZXJQcm92aWRlcj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0NhcnJlZ2FuZG8uLi4nIDogJ0xvZ2luJ30gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kby4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvU3Bpbm5lcj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICA8L2Rpdj5cclxuXHJcbiAgPC9Vc2VyUHJvdmlkZXI+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwidXNlVXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJNb2RhbEdlcmFsIiwiU3Bpbm5lciIsIkxvZ2luIiwicm91dGVyIiwic2V0VXNlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVMb2dpbiIsImUiLCJzdWNjZXNzTWVzc2FnZSIsInNldFN1Y2Nlc3NNZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic2hvd01vZGFsR2VyYWwiLCJzZXRTaG93TW9kYWxHZXJhbCIsImhhbmRsZVNob3dHZXJhbCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZSIsInByZXZlbnREZWZhdWx0Iiwic2hvd01vZGFsIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwiZGF0YSIsImpzb24iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJyb2xlIiwicHVzaCIsImVycm9yRGF0YSIsImVycm9yIiwibWVzc2FnZSIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiYW5pbWF0aW9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});