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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _verifica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/verifica */ \"./src/verifica.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [contentVisible, setContentVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const decodedToken = (0,_verifica__WEBPACK_IMPORTED_MODULE_2__.verifica)();\n        if (!decodedToken) {\n            // Se não houver token, redirecione o usuário de volta para a página de login\n            router.push(\"/login\");\n        } else {\n            // Verifique se o token inclui informações de função (role)\n            if (decodedToken.role === \"adm\") {\n                setContentVisible(true);\n                // O usuário tem permissão de administrador\n                console.log(\"Usu\\xe1rio \\xe9 um administrador.\");\n                router.push(\"/adiciona\");\n            } else {\n                // O usuário não tem permissão de administrador\n                console.log(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                alert(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                router.push(\"/dashboard\");\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" p\\xe1gina de adicionar produtos\"\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/adicionar/index.tsx\",\n        lineNumber: 39,\n        columnNumber: 3\n    }, undefined);\n};\n_s(index, \"+SSoktErTMgfkFe/9yUds72J+QQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n// useEffect(() => {\n//   const isAuthenticated = verifica();\n//   if (isAuthenticated) {\n//     // Restante do seu código para o cadastro...\n//   }\n// }, []);\n// // Restante do seu componente de cadastro...\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRpY2lvbmFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ047QUFFRTtBQUt4QyxNQUFNSSxRQUFROztJQUVaLE1BQU1DLFNBQVNGLHNEQUFTQTtJQUN4QixNQUFNLENBQUNHLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBSXJERCxnREFBU0EsQ0FBQztRQUNWLE1BQU1RLGVBQWVOLG1EQUFRQTtRQUU3QixJQUFJLENBQUNNLGNBQWM7WUFDakIsNkVBQTZFO1lBQzdFSCxPQUFPSSxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0wsMkRBQTJEO1lBQzNELElBQUlELGFBQWFFLElBQUksS0FBSyxPQUFPO2dCQUMvQkgsa0JBQWtCO2dCQUN4QiwyQ0FBMkM7Z0JBQzNDSSxRQUFRQyxHQUFHLENBQUM7Z0JBQ1pQLE9BQU9JLElBQUksQ0FBQztZQUNaLE9BQU87Z0JBQ1AsK0NBQStDO2dCQUMvQ0UsUUFBUUMsR0FBRyxDQUFDO2dCQUNaQyxNQUFNO2dCQUNOUixPQUFPSSxJQUFJLENBQUM7WUFDWjtRQUNBO0lBQ0EsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLO2tCQUFJOzs7Ozs7QUFHUDtHQWpDTVY7O1FBRVdELGtEQUFTQTs7O0FBaUN4QixvQkFBb0I7QUFDcEIsd0NBQXdDO0FBRXhDLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsTUFBTTtBQUNOLFVBQVU7QUFFViwrQ0FBK0M7QUFFakQsK0RBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkaWNpb25hci9pbmRleC50c3g/NTdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdmVyaWZpY2EgfSBmcm9tICdAL3ZlcmlmaWNhJzsgXG5cbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5cbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbY29udGVudFZpc2libGUsIHNldENvbnRlbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgY29uc3QgZGVjb2RlZFRva2VuID0gdmVyaWZpY2EoKTtcblxuICBpZiAoIWRlY29kZWRUb2tlbikge1xuICAgIC8vIFNlIG7Do28gaG91dmVyIHRva2VuLCByZWRpcmVjaW9uZSBvIHVzdcOhcmlvIGRlIHZvbHRhIHBhcmEgYSBww6FnaW5hIGRlIGxvZ2luXG4gICAgcm91dGVyLnB1c2goJy9sb2dpbicpO1xuICB9IGVsc2Uge1xuICAgIC8vIFZlcmlmaXF1ZSBzZSBvIHRva2VuIGluY2x1aSBpbmZvcm1hw6fDtWVzIGRlIGZ1bsOnw6NvIChyb2xlKVxuICAgIGlmIChkZWNvZGVkVG9rZW4ucm9sZSA9PT0gJ2FkbScpIHtcbiAgICAgIHNldENvbnRlbnRWaXNpYmxlKHRydWUpO1xuLy8gTyB1c3XDoXJpbyB0ZW0gcGVybWlzc8OjbyBkZSBhZG1pbmlzdHJhZG9yXG5jb25zb2xlLmxvZygnVXN1w6FyaW8gw6kgdW0gYWRtaW5pc3RyYWRvci4nKTtcbnJvdXRlci5wdXNoKCcvYWRpY2lvbmEnKVxufSBlbHNlIHtcbi8vIE8gdXN1w6FyaW8gbsOjbyB0ZW0gcGVybWlzc8OjbyBkZSBhZG1pbmlzdHJhZG9yXG5jb25zb2xlLmxvZygnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xuYWxlcnQoJ1VzdcOhcmlvIG7Do28gw6kgdW0gYWRtaW5pc3RyYWRvci4nKTtcbnJvdXRlci5wdXNoKCcvZGFzaGJvYXJkJyk7XG59XG59XG59LCBbXSk7XG5cbnJldHVybiAoXG4gIDxkaXY+IHDDoWdpbmEgZGUgYWRpY2lvbmFyIHByb2R1dG9zPC9kaXY+XG4pO1xuXG59XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB2ZXJpZmljYSgpO1xuXG4gIC8vICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAvLyAgICAgLy8gUmVzdGFudGUgZG8gc2V1IGPDs2RpZ28gcGFyYSBvIGNhZGFzdHJvLi4uXG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgLy8gLy8gUmVzdGFudGUgZG8gc2V1IGNvbXBvbmVudGUgZGUgY2FkYXN0cm8uLi5cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2ZXJpZmljYSIsInVzZVJvdXRlciIsImluZGV4Iiwicm91dGVyIiwiY29udGVudFZpc2libGUiLCJzZXRDb250ZW50VmlzaWJsZSIsImRlY29kZWRUb2tlbiIsInB1c2giLCJyb2xlIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/adicionar/index.tsx\n"));

/***/ })

});