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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.module.css */ \"./src/pages/login.module.css\");\n/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Spinner */ \"./node_modules/react-bootstrap/esm/Spinner.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n // Importe o Bootstrap CSS\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { setUser } = (0,_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser)(); // Use useUser para acessar o contexto do usuário\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleLogin = async ()=>{\n        setLoading(true); // Ative o estado de carregamento\n        try {\n            await new Promise((resolve)=>setTimeout(resolve, 1000));\n            // Faça uma solicitação para o servidor Node.js para autenticação\n            const response = await fetch(\"http://192.168.0.104:7000/login\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    username,\n                    password\n                })\n            });\n            if (response.ok) {\n                // Analise a resposta JSON para obter o token\n                const data = await response.json();\n                const { token } = data;\n                // Armazene o token no localStorage\n                localStorage.setItem(\"token\", token);\n                // console.log(\"user logado:\", username);\n                // Utilize as informações reais do usuário recebidas do servidor\n                setUser({\n                    username: username,\n                    role: data.role\n                });\n                // Redirecione o usuário para a página de dashboard com o token\n                router.push(\"/dashboard\");\n            } else {\n                // Lidar com erros de autenticação\n                console.error(\"Erro de autentica\\xe7\\xe3o\");\n                alert(\"Erro de autentica\\xe7\\xe3o\");\n            }\n        } catch (error) {\n            console.error(\"Erro ao fazer login:\", error);\n            alert(error);\n        } finally{\n            setLoading(false); // Desative o estado de carregamento\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Login\"\n                }, void 0, false, {\n                    fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Nome de usu\\xe1rio\",\n                            value: username,\n                            onChange: (e)=>setUsername(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"Senha\",\n                            value: password,\n                            onChange: (e)=>setPassword(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleLogin,\n                            disabled: loading,\n                            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            children: loading ? \"Carregando...\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                            lineNumber: 99,\n                            columnNumber: 13\n                        }, undefined),\n                        loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            animation: \"border\",\n                            role: \"status\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"visually-hidden\",\n                                children: \"Carregando...\"\n                            }, void 0, false, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 15\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n            lineNumber: 81,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/index.tsx\",\n        lineNumber: 80,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Login, \"RIsJTCDvDHm+bLLs1JARgetELKw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _contexts_UserContext__WEBPACK_IMPORTED_MODULE_1__.useUser\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMwRDtBQUNMO0FBRWY7QUFDRTtBQUVEO0FBR08sQ0FBQywwQkFBMEI7QUFDL0I7QUFHMUMsTUFBTU8sUUFBUTs7SUFFWixNQUFNQyxTQUFTSixzREFBU0E7SUFJeEIsTUFBTSxFQUFFSyxPQUFPLEVBQUUsR0FBR1IsOERBQU9BLElBQUksaURBQWlEO0lBQ2hGLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDLE1BQU1hLGNBQWM7UUFDbEJELFdBQVcsT0FBTyxpQ0FBaUM7UUFJbkQsSUFBSTtZQUVBLE1BQU0sSUFBSUUsUUFBUSxDQUFDQyxVQUFZQyxXQUFXRCxTQUFTO1lBRXJELGlFQUFpRTtZQUNqRSxNQUFNRSxXQUFXLE1BQU1DLE1BQU0sbUNBQW1DO2dCQUM5REMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQUVoQjtvQkFBVUU7Z0JBQVM7WUFDNUM7WUFFQSxJQUFJUSxTQUFTTyxFQUFFLEVBQUU7Z0JBQ2YsNkNBQTZDO2dCQUM3QyxNQUFNQyxPQUFPLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ2hDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdGO2dCQUNuQixtQ0FBbUM7Z0JBQ25DRyxhQUFhQyxPQUFPLENBQUMsU0FBU0Y7Z0JBQzdCLHlDQUF5QztnQkFDdkMsZ0VBQWdFO2dCQUNoRXJCLFFBQVE7b0JBQ05DLFVBQVVBO29CQUNWdUIsTUFBTUwsS0FBS0ssSUFBSTtnQkFFakI7Z0JBRUYsK0RBQStEO2dCQUMvRHpCLE9BQU8wQixJQUFJLENBQUM7WUFDZCxPQUFPO2dCQUNMLGtDQUFrQztnQkFDbENDLFFBQVFDLEtBQUssQ0FBQztnQkFDZEMsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPRCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDQyxNQUFNRDtRQUNSLFNBQVU7WUFDTnJCLFdBQVcsUUFBUSxvQ0FBb0M7UUFDekQ7SUFDSjtJQU1FLHFCQUdFLDhEQUFDZiwrREFBWUE7a0JBQ1gsNEVBQUNzQztZQUFLQyxXQUFXbEMsb0VBQWdCOzs4QkFJN0IsOERBQUNvQzs4QkFBRzs7Ozs7OzhCQUNGLDhEQUFDQzs7c0NBQ0gsOERBQUNDOzRCQUNHQyxNQUFLOzRCQUNMQyxhQUFZOzRCQUNaQyxPQUFPcEM7NEJBQ1BxQyxVQUFVLENBQUNDLElBQU1yQyxZQUFZcUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7c0NBRS9DLDhEQUFDSDs0QkFDR0MsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsT0FBT2xDOzRCQUNQbUMsVUFBVSxDQUFDQyxJQUFNbkMsWUFBWW1DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7O3NDQUUvQyw4REFBQ0k7NEJBQU9DLFNBQVNuQzs0QkFBYW9DLFVBQVV0Qzs0QkFBU3lCLFdBQVdsQyxpRUFBYTtzQ0FDcEVTLFVBQVUsa0JBQWtCOzs7Ozs7d0JBS2hDQSx5QkFDRyw4REFBQ1IsK0RBQU9BOzRCQUFDK0MsV0FBVTs0QkFBU3BCLE1BQUs7c0NBQzdCLDRFQUFDcUI7Z0NBQUtmLFdBQVU7MENBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYXREO0dBekdNaEM7O1FBRVdILGtEQUFTQTtRQUlKSCwwREFBT0E7OztLQU52Qk07QUE0R04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vY29udGV4dHMvVXNlckNvbnRleHQnO1xuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcblxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvZ2luLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBCb3RGb3JtIH0gZnJvbSAnQC9jb21wb25lbnRzL0JvdEZvcm0nO1xuXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7IC8vIEltcG9ydGUgbyBCb290c3RyYXAgQ1NTXG5pbXBvcnQgeyBTcGlubmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuXG5cbiAgY29uc3QgeyBzZXRVc2VyIH0gPSB1c2VVc2VyKCk7IC8vIFVzZSB1c2VVc2VyIHBhcmEgYWNlc3NhciBvIGNvbnRleHRvIGRvIHVzdcOhcmlvXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7IC8vIEF0aXZlIG8gZXN0YWRvIGRlIGNhcnJlZ2FtZW50b1xuXG4gICAgXG5cbiAgICB0cnkge1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDEwMDApKTtcblxuICAgICAgLy8gRmHDp2EgdW1hIHNvbGljaXRhw6fDo28gcGFyYSBvIHNlcnZpZG9yIE5vZGUuanMgcGFyYSBhdXRlbnRpY2HDp8Ojb1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovLzE5Mi4xNjguMC4xMDQ6NzAwMC9sb2dpbicsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSwgLy8gVXNlIG9zIHZhbG9yZXMgZG9zIGNhbXBvcyBkZSBmb3JtdWzDoXJpb1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBBbmFsaXNlIGEgcmVzcG9zdGEgSlNPTiBwYXJhIG9idGVyIG8gdG9rZW5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgeyB0b2tlbiB9ID0gZGF0YTtcbiAgICAgICAvLyBBcm1hemVuZSBvIHRva2VuIG5vIGxvY2FsU3RvcmFnZVxuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VyIGxvZ2FkbzpcIiwgdXNlcm5hbWUpO1xuICAgICAgICAgIC8vIFV0aWxpemUgYXMgaW5mb3JtYcOnw7VlcyByZWFpcyBkbyB1c3XDoXJpbyByZWNlYmlkYXMgZG8gc2Vydmlkb3JcbiAgICAgICAgICBzZXRVc2VyKHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgIHJvbGU6IGRhdGEucm9sZSxcbiAgICAgICAgICAgIC8vIE91dHJhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvLCBzZSBuZWNlc3PDoXJpb1xuICAgICAgICAgIH0pOyAgICAgIFxuXG4gICAgICAgIC8vIFJlZGlyZWNpb25lIG8gdXN1w6FyaW8gcGFyYSBhIHDDoWdpbmEgZGUgZGFzaGJvYXJkIGNvbSBvIHRva2VuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBMaWRhciBjb20gZXJyb3MgZGUgYXV0ZW50aWNhw6fDo29cbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBkZSBhdXRlbnRpY2HDp8OjbycpO1xuICAgICAgICBhbGVydCgnRXJybyBkZSBhdXRlbnRpY2HDp8OjbycpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGZhemVyIGxvZ2luOicsIGVycm9yKTtcbiAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgLy8gRGVzYXRpdmUgbyBlc3RhZG8gZGUgY2FycmVnYW1lbnRvXG4gICAgICB9XG4gIH07XG5cblxuICAgIFxuXG5cbiAgICByZXR1cm4gKFxuXG5cbiAgICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICAgIDxkaXYgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG5cbiAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIDxoMT5Mb2dpbjwvaDE+XG4gICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkZSB1c3XDoXJpb1wiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZW5oYVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9naW59IGRpc2FibGVkPXtsb2FkaW5nfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gJ0NhcnJlZ2FuZG8uLi4nIDogJ0xvZ2luJ30gXG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuXG5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkNhcnJlZ2FuZG8uLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9TcGlubmVyPlxuICAgICAgICApfVxuXG4gICAgICAgIDwvZm9ybT5cblxuXG4gIDwvZGl2PlxuXG4gIDwvVXNlclByb3ZpZGVyPlxuXG4gICAgKTtcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJVc2VyUHJvdmlkZXIiLCJ1c2VVc2VyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInN0eWxlcyIsIlNwaW5uZXIiLCJMb2dpbiIsInJvdXRlciIsInNldFVzZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaGFuZGxlTG9naW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkYXRhIiwianNvbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJvbGUiLCJwdXNoIiwiY29uc29sZSIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiYW5pbWF0aW9uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});