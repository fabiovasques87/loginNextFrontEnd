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

/***/ "./src/components/navBar/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/navBar/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _BotLogout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BotLogout */ \"./src/components/BotLogout/index.tsx\");\n\n\n\n\n\n\n\nconst router = (next_router__WEBPACK_IMPORTED_MODULE_1___default());\nfunction NavBar() {\n    const handleLogout = ()=>{\n        // Remova o token do armazenamento local\n        localStorage.removeItem(\"token\");\n        alert(\"Fa\\xe7a login novamente!!!\");\n        // Redirecione o usuário para a página de login ou outra página de sua escolha\n        router.push(\"/\"); // Certifique-se de importar a função 'useRouter' do 'next/router'.\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        expand: \"lg\",\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            fluid: true,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Toggle, {\n                    \"aria-controls\": \"navbarScroll\"\n                }, void 0, false, {\n                    fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].Collapse, {\n                    id: \"navbarScroll\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"me-auto my-2 my-lg-0\",\n                        style: {\n                            maxHeight: \"100px\"\n                        },\n                        navbarScroll: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                href: \"/dashboard\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                href: \"/cadastro\",\n                                children: \"Cadastrar usu\\xe1rios\"\n                            }, void 0, false, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                title: \"Estoque\",\n                                id: \"navbarScrollingDropdown\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                        href: \"#action3\",\n                                        children: \"Entrada\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Item, {\n                                        href: \"#action4\",\n                                        children: \"Sa\\xedda\"\n                                    }, void 0, false, {\n                                        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                href: \"/sobre\",\n                                children: \"Sobre\"\n                            }, void 0, false, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_5__[\"default\"].Link, {\n                                href: \"#action2\",\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_BotLogout__WEBPACK_IMPORTED_MODULE_2__.BotLogout, {\n                                        label: \"Logout...\",\n                                        onClick: handleLogout\n                                    }, void 0, false, {\n                                        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/components/navBar/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9uYXZCYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRWtEO0FBRVo7QUFDTTtBQUNVO0FBRXJCO0FBR1E7QUFFekMsTUFBTU0sU0FBU0Ysb0RBQU1BO0FBR3JCLFNBQVNHO0lBRUwsTUFBTUMsZUFBZTtRQUNqQix3Q0FBd0M7UUFDeENDLGFBQWFDLFVBQVUsQ0FBQztRQUN4QkMsTUFBTTtRQUNOLDhFQUE4RTtRQUM5RUwsT0FBT00sSUFBSSxDQUFDLE1BQU0sbUVBQW1FO0lBQ3pGO0lBRUYscUJBQ0UsOERBQUNWLDhEQUFNQTtRQUFDVyxRQUFPO1FBQUtDLFdBQVU7a0JBQzVCLDRFQUFDZCxpRUFBU0E7WUFBQ2UsS0FBSzs7OEJBQ2QsOERBQUNiLHFFQUFhO29CQUFDZSxpQkFBYzs7Ozs7OzhCQUM3Qiw4REFBQ2YsdUVBQWU7b0JBQUNpQixJQUFHOzhCQUNsQiw0RUFBQ2xCLDJEQUFHQTt3QkFDRmEsV0FBVTt3QkFDVk0sT0FBTzs0QkFBRUMsV0FBVzt3QkFBUTt3QkFDNUJDLFlBQVk7OzBDQUVaLDhEQUFDckIsZ0VBQVE7Z0NBQUN1QixNQUFLOzBDQUFhOzs7Ozs7MENBQzVCLDhEQUFDdkIsZ0VBQVE7Z0NBQUN1QixNQUFLOzBDQUFZOzs7Ozs7MENBQzNCLDhEQUFDckIsbUVBQVdBO2dDQUFDc0IsT0FBTTtnQ0FBVU4sSUFBRzs7a0RBQzlCLDhEQUFDaEIsd0VBQWdCO3dDQUFDcUIsTUFBSztrREFBVzs7Ozs7O2tEQUNsQyw4REFBQ3JCLHdFQUFnQjt3Q0FBQ3FCLE1BQUs7a0RBQVc7Ozs7Ozs7Ozs7OzswQ0FJcEMsOERBQUN2QixnRUFBUTtnQ0FBQ3VCLE1BQUs7MENBQVM7Ozs7OzswQ0FHeEIsOERBQUN2QixnRUFBUTtnQ0FBQ3VCLE1BQUs7O29DQUFXO2tEQUN0Qiw4REFBQ25CLGlEQUFTQTt3Q0FBRXNCLE9BQU07d0NBQVlDLFNBQVNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU12RDtLQXRDU0Q7QUF3Q1QsK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2QmFyL2luZGV4LnRzeD9mM2QxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvQnV0dG9uJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NvbnRhaW5lcic7XG5pbXBvcnQgRm9ybSBmcm9tICdyZWFjdC1ib290c3RyYXAvRm9ybSc7XG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2YmFyJztcbmltcG9ydCBOYXZEcm9wZG93biBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2RHJvcGRvd24nO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5cbmltcG9ydCB7IEJvdExvZ291dCB9IGZyb20gJy4uL0JvdExvZ291dCc7XG5cbmNvbnN0IHJvdXRlciA9IFJvdXRlcjtcblxuXG5mdW5jdGlvbiBOYXZCYXIoKSB7XG5cbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92YSBvIHRva2VuIGRvIGFybWF6ZW5hbWVudG8gbG9jYWxcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XG4gICAgICAgIGFsZXJ0KCdGYcOnYSBsb2dpbiBub3ZhbWVudGUhISEnKTtcbiAgICAgICAgLy8gUmVkaXJlY2lvbmUgbyB1c3XDoXJpbyBwYXJhIGEgcMOhZ2luYSBkZSBsb2dpbiBvdSBvdXRyYSBww6FnaW5hIGRlIHN1YSBlc2NvbGhhXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7IC8vIENlcnRpZmlxdWUtc2UgZGUgaW1wb3J0YXIgYSBmdW7Dp8OjbyAndXNlUm91dGVyJyBkbyAnbmV4dC9yb3V0ZXInLlxuICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TmF2YmFyIGV4cGFuZD1cImxnXCIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxuICAgICAgICA8TmF2YmFyLlRvZ2dsZSBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU2Nyb2xsXCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cIm5hdmJhclNjcm9sbFwiPlxuICAgICAgICAgIDxOYXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lLWF1dG8gbXktMiBteS1sZy0wXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJzEwMHB4JyB9fVxuICAgICAgICAgICAgbmF2YmFyU2Nyb2xsXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE5hdi5MaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+SG9tZTwvTmF2Lkxpbms+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jYWRhc3Ryb1wiPkNhZGFzdHJhciB1c3XDoXJpb3M8L05hdi5MaW5rPlxuICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPVwiRXN0b3F1ZVwiIGlkPVwibmF2YmFyU2Nyb2xsaW5nRHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24zXCI+RW50cmFkYTwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb240XCI+XG4gICAgICAgICAgICAgICAgU2HDrWRhXG4gICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9zb2JyZVwiPlNvYnJlPC9OYXYuTGluaz5cblxuXG4gICAgICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIiNhY3Rpb24yXCI+IHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+TG9nb3V0PC9idXR0b24+ICAqL31cbiAgICAgICAgICAgICAgICA8Qm90TG9nb3V0ICBsYWJlbD0nTG9nb3V0Li4uJyBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9ICAvPjwvTmF2Lkxpbms+XG4gICAgICAgICAgPC9OYXY+XG4gICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhcjsiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiTmF2IiwiTmF2YmFyIiwiTmF2RHJvcGRvd24iLCJSb3V0ZXIiLCJCb3RMb2dvdXQiLCJyb3V0ZXIiLCJOYXZCYXIiLCJoYW5kbGVMb2dvdXQiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiYWxlcnQiLCJwdXNoIiwiZXhwYW5kIiwiY2xhc3NOYW1lIiwiZmx1aWQiLCJUb2dnbGUiLCJhcmlhLWNvbnRyb2xzIiwiQ29sbGFwc2UiLCJpZCIsInN0eWxlIiwibWF4SGVpZ2h0IiwibmF2YmFyU2Nyb2xsIiwiTGluayIsImhyZWYiLCJ0aXRsZSIsIkl0ZW0iLCJsYWJlbCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/navBar/index.tsx\n"));

/***/ })

});