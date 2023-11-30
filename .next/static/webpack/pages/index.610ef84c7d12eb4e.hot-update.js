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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.css */ \"./src/pages/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // Importe o Bootstrap CSS\n\nconst Login = ()=>{\n    _s();\n    var _s1 = $RefreshSig$();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { setUser } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser)(); // Use useUser para acessar o contexto do usuário\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogin = async (e)=>{\n        _s1();\n        const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n        const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n        const [showModalGeral, setShowModalGeral] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n        // funções para abrir e fechar o modal:\n        const handleShowGeral = ()=>{\n            console.log(\"Showing modal\");\n            setShowModalGeral(true);\n        };\n        const handleClose = ()=>{\n            console.log(\"Closing modal\");\n            setShowModalGeral(false);\n        };\n        e.preventDefault(); // Evita a recarga da página ao pressionar Enter no formulário\n        // Verifique se os campos de usuário e senha estão preenchidos\n        if (!username || !password) {\n            setErrorMessage(\"Preencha todos os campos\");\n            //alert('Preencha todos os campos.');\n            return;\n        }\n        setLoading(true); // Ative o estado de carregamento\n        try {\n            // Faça a solicitação para autenticação\n            const response = await fetch(\"http://localhost:7000/auth/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                const data = await response.json();\n                localStorage.setItem(\"token\", data.token);\n                // Utilize as informações reais do usuário recebidas do servidor\n                setUser({\n                    username: username,\n                    role: data.role\n                });\n                // Redirecione o usuário para a página de dashboard com o token\n                router.push(\"/dashboard\");\n            } else {\n                const errorData = await response.json();\n                console.error(\"Erro de autentica\\xe7\\xe3o:\", errorData.message);\n                setErrorMessage(errorData.message || \"Erro de autentica\\xe7\\xe3o. Tente novamente mais tarde.\");\n            //alert(errorData.message || 'Erro de autenticação. Tente novamente mais tarde.');\n            }\n        } catch (error) {\n            console.error(\"Erro ao fazer login:\", error);\n            alert(\"Erro ao fazer login. Tente novamente mais tarde.\");\n        } finally{\n            setLoading(false); // Desative o estado de carregamento\n        }\n    };\n    _s1(handleLogin, \"3hhPfzYFFemvpE3Ma+X/+vmCNqY=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Nome de usu\\xe1rio\",\n                            value: username,\n                            onChange: (e)=>setUsername(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 126,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Senha\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 132,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogin,\n                            disabled: loading,\n                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            children: loading ? \"Carregando...\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 138,\n                            columnNumber: 13\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            animation: \"border\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                                lineNumber: 146,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n                    lineNumber: 125,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n            lineNumber: 120,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 119,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Login, \"RIsJTCDvDHm+bLLs1JARgetELKw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUFTbUMsV0FBVzVDLGlFQUFhO3NDQUNwRVMsVUFBVSxrQkFBa0I7Ozs7Ozt3QkFLaENBLHlCQUNHLDhEQUFDUiwrREFBT0E7NEJBQUN3RCxXQUFVOzRCQUFTcEIsTUFBSztzQ0FDN0IsNEVBQUNxQjtnQ0FBS2QsV0FBVTswQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhdEQ7R0EzSU0xQzs7UUFLV0gsa0RBQVNBO1FBSUpILDBEQUFPQTs7O0tBVHZCTTtBQThJTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcclxuXHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgeyBCb3RGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0JvdEZvcm0nO1xyXG5cclxuaW1wb3J0IE1vZGFsR2VyYWwgZnJvbSAnQC9jb21wb25lbnRzL21vZGFsL01vZGFsR2VyYWwnO1xyXG5cclxuXHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJzsgLy8gSW1wb3J0ZSBvIEJvb3RzdHJhcCBDU1NcclxuaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuXHJcbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VVc2VyKCk7IC8vIFVzZSB1c2VVc2VyIHBhcmEgYWNlc3NhciBvIGNvbnRleHRvIGRvIHVzdcOhcmlvXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW46IFJlYWN0LkZDID0gYXN5bmMgKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N1Y2Nlc3NNZXNzYWdlLCBzZXRTdWNjZXNzTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIFxyXG4gICAgXHJcbiAgICBjb25zdCBbc2hvd01vZGFsR2VyYWwsIHNldFNob3dNb2RhbEdlcmFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICAgIC8vIGZ1bsOnw7VlcyBwYXJhIGFicmlyIGUgZmVjaGFyIG8gbW9kYWw6XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVTaG93R2VyYWwgPSAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTaG93aW5nIG1vZGFsJyk7XHJcbiAgICAgIHNldFNob3dNb2RhbEdlcmFsKHRydWUpO1xyXG4gICAgfTtcclxuICBcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnQ2xvc2luZyBtb2RhbCcpO1xyXG4gICAgICBzZXRTaG93TW9kYWxHZXJhbChmYWxzZSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gIFxyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gRXZpdGEgYSByZWNhcmdhIGRhIHDDoWdpbmEgYW8gcHJlc3Npb25hciBFbnRlciBubyBmb3JtdWzDoXJpb1xyXG5cclxuICAgXHJcblxyXG4gICAgLy8gVmVyaWZpcXVlIHNlIG9zIGNhbXBvcyBkZSB1c3XDoXJpbyBlIHNlbmhhIGVzdMOjbyBwcmVlbmNoaWRvc1xyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcclxuICAgICAgc2V0RXJyb3JNZXNzYWdlKCdQcmVlbmNoYSB0b2RvcyBvcyBjYW1wb3MnKTtcclxuICAgICAgLy9hbGVydCgnUHJlZW5jaGEgdG9kb3Mgb3MgY2FtcG9zLicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TG9hZGluZyh0cnVlKTsgLy8gQXRpdmUgbyBlc3RhZG8gZGUgY2FycmVnYW1lbnRvXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gRmHDp2EgYSBzb2xpY2l0YcOnw6NvIHBhcmEgYXV0ZW50aWNhw6fDo29cclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo3MDAwL2F1dGgvbG9naW4nLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcblxyXG4gICAgICAgIC8vIFV0aWxpemUgYXMgaW5mb3JtYcOnw7VlcyByZWFpcyBkbyB1c3XDoXJpbyByZWNlYmlkYXMgZG8gc2Vydmlkb3JcclxuICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcclxuICAgICAgICAgIC8vIE91dHJhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvLCBzZSBuZWNlc3PDoXJpb1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBSZWRpcmVjaW9uZSBvIHVzdcOhcmlvIHBhcmEgYSBww6FnaW5hIGRlIGRhc2hib2FyZCBjb20gbyB0b2tlblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XHJcblxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGRlIGF1dGVudGljYcOnw6NvOicsIGVycm9yRGF0YS5tZXNzYWdlKTtcclxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3JEYXRhLm1lc3NhZ2UgfHwgJ0Vycm8gZGUgYXV0ZW50aWNhw6fDo28uIFRlbnRlIG5vdmFtZW50ZSBtYWlzIHRhcmRlLicpXHJcbiAgICAgICBcclxuICAgICAgICAvL2FsZXJ0KGVycm9yRGF0YS5tZXNzYWdlIHx8ICdFcnJvIGRlIGF1dGVudGljYcOnw6NvLiBUZW50ZSBub3ZhbWVudGUgbWFpcyB0YXJkZS4nKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gZmF6ZXIgbG9naW46JywgZXJyb3IpO1xyXG4gICAgICBhbGVydCgnRXJybyBhbyBmYXplciBsb2dpbi4gVGVudGUgbm92YW1lbnRlIG1haXMgdGFyZGUuJyk7XHJcblxyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7IC8vIERlc2F0aXZlIG8gZXN0YWRvIGRlIGNhcnJlZ2FtZW50b1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG5cclxuICAgICAgPFVzZXJQcm92aWRlcj5cclxuICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XHJcbiAgICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21lIGRlIHVzdcOhcmlvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlbmhhXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBkaXNhYmxlZD17bG9hZGluZ30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0NhcnJlZ2FuZG8uLi4nIDogJ0xvZ2luJ30gXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmlzdWFsbHktaGlkZGVuXCI+Q2FycmVnYW5kby4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvU3Bpbm5lcj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuICA8L2Rpdj5cclxuXHJcbiAgPC9Vc2VyUHJvdmlkZXI+XHJcblxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibmFtZXMiOlsiVXNlclByb3ZpZGVyIiwidXNlVXNlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJTcGlubmVyIiwiTG9naW4iLCJyb3V0ZXIiLCJzZXRVc2VyIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImhhbmRsZUxvZ2luIiwiZSIsInN1Y2Nlc3NNZXNzYWdlIiwic2V0U3VjY2Vzc01lc3NhZ2UiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzaG93TW9kYWxHZXJhbCIsInNldFNob3dNb2RhbEdlcmFsIiwiaGFuZGxlU2hvd0dlcmFsIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlIiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsInJvbGUiLCJwdXNoIiwiZXJyb3JEYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJhbmltYXRpb24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});