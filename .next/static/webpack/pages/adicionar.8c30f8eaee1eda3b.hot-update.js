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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // const token = localStorage.getItem('token');\n    const [contentVisible, setContentVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\"); // Ou a fonte onde você armazenou o token\n        if (!token) {\n            // Se não houver token, redirecione o usuário de volta para a página de login\n            router.push(\"/login\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Verifica se o código está sendo executado no lado do cliente (navegador)\n        if (true) {\n            const token = localStorage.getItem(\"token\");\n            if (!token) {\n                // Se não houver token, redirecione o usuário de volta para a página de login\n                router.push(\"/login\");\n            } else {\n                // Decodifique o token para acessar suas informações\n                const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().decode(token);\n                console.log(decodedToken);\n                // Verifique se o token inclui informações de função (role)\n                if (decodedToken.role === \"adm\") {\n                    setContentVisible(true);\n                    // O usuário tem permissão de administrador\n                    console.log(\"Usu\\xe1rio \\xe9 um administrador.\");\n                    router.push(\"/cadastro\");\n                } else {\n                    // O usuário não tem permissão de administrador\n                    console.log(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                    alert(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                    router.push(\"/dashboard\");\n                }\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" p\\xe1gina de adicionar produtos\"\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/adicionar/index.tsx\",\n        lineNumber: 57,\n        columnNumber: 3\n    }, undefined);\n};\n_s(index, \"AoRuV4JEKPDMVEdzOPRyo+j3d88=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n// useEffect(() => {\n//   const isAuthenticated = verifica();\n//   if (isAuthenticated) {\n//     // Restante do seu código para o cadastro...\n//   }\n// }, []);\n// // Restante do seu componente de cadastro...\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRpY2lvbmFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0QztBQUdKO0FBRVQ7QUFHL0IsTUFBTUksUUFBUTs7SUFHWixNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEIsK0NBQStDO0lBQy9DLE1BQU0sQ0FBQ0ksZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFHckRELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsUUFBUUMsYUFBYUMsT0FBTyxDQUFDLFVBQVUseUNBQXlDO1FBRXRGLElBQUksQ0FBQ0YsT0FBTztZQUNaLDZFQUE2RTtZQUM3RUgsT0FBT00sSUFBSSxDQUFDO1FBQ1o7SUFDSixHQUFHLEVBQUU7SUFFTFgsZ0RBQVNBLENBQUM7UUFDUiwyRUFBMkU7UUFDM0UsSUFBSSxJQUFrQixFQUFhO1lBQ2pDLE1BQU1RLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUVuQyxJQUFJLENBQUNGLE9BQU87Z0JBQ1YsNkVBQTZFO2dCQUM3RUgsT0FBT00sSUFBSSxDQUFDO1lBQ2QsT0FBTztnQkFDTCxvREFBb0Q7Z0JBQ3BELE1BQU1DLGVBQWVULDBEQUFVLENBQUNLO2dCQUNoQ00sUUFBUUMsR0FBRyxDQUFDSDtnQkFFWiwyREFBMkQ7Z0JBQzNELElBQUlBLGFBQWFJLElBQUksS0FBSyxPQUFPO29CQUMvQlQsa0JBQWtCO29CQUNsQiwyQ0FBMkM7b0JBQzNDTyxRQUFRQyxHQUFHLENBQUM7b0JBQ1pWLE9BQU9NLElBQUksQ0FBQztnQkFDZCxPQUFPO29CQUNMLCtDQUErQztvQkFDL0NHLFFBQVFDLEdBQUcsQ0FBQztvQkFDWkUsTUFBTTtvQkFDTlosT0FBT00sSUFBSSxDQUFDO2dCQUNkO1lBQ0Y7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUdMLHFCQUNFLDhEQUFDTztrQkFBSTs7Ozs7O0FBR1A7R0FuRE1kOztRQUdXRixrREFBU0E7OztBQWtEeEIsb0JBQW9CO0FBQ3BCLHdDQUF3QztBQUV4QywyQkFBMkI7QUFDM0IsbURBQW1EO0FBQ25ELE1BQU07QUFDTixVQUFVO0FBRVYsK0NBQStDO0FBRWpELCtEQUFlRSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9hZGljaW9uYXIvaW5kZXgudHN4PzU3YzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHZlcmlmaWNhIH0gZnJvbSAnQC92ZXJpZmljYSc7IFxuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuXG5jb25zdCBpbmRleCA9ICgpID0+IHtcblxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICBjb25zdCBbY29udGVudFZpc2libGUsIHNldENvbnRlbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsgLy8gT3UgYSBmb250ZSBvbmRlIHZvY8OqIGFybWF6ZW5vdSBvIHRva2VuXG5cbiAgICBpZiAoIXRva2VuKSB7XG4gICAgLy8gU2UgbsOjbyBob3V2ZXIgdG9rZW4sIHJlZGlyZWNpb25lIG8gdXN1w6FyaW8gZGUgdm9sdGEgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW5cbiAgICByb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgfVxufSwgW10pO1xuXG51c2VFZmZlY3QoKCkgPT4ge1xuICAvLyBWZXJpZmljYSBzZSBvIGPDs2RpZ28gZXN0w6Egc2VuZG8gZXhlY3V0YWRvIG5vIGxhZG8gZG8gY2xpZW50ZSAobmF2ZWdhZG9yKVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgLy8gU2UgbsOjbyBob3V2ZXIgdG9rZW4sIHJlZGlyZWNpb25lIG8gdXN1w6FyaW8gZGUgdm9sdGEgcGFyYSBhIHDDoWdpbmEgZGUgbG9naW5cbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVjb2RpZmlxdWUgbyB0b2tlbiBwYXJhIGFjZXNzYXIgc3VhcyBpbmZvcm1hw6fDtWVzXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3QuZGVjb2RlKHRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbik7XG5cbiAgICAgIC8vIFZlcmlmaXF1ZSBzZSBvIHRva2VuIGluY2x1aSBpbmZvcm1hw6fDtWVzIGRlIGZ1bsOnw6NvIChyb2xlKVxuICAgICAgaWYgKGRlY29kZWRUb2tlbi5yb2xlID09PSAnYWRtJykge1xuICAgICAgICBzZXRDb250ZW50VmlzaWJsZSh0cnVlKTtcbiAgICAgICAgLy8gTyB1c3XDoXJpbyB0ZW0gcGVybWlzc8OjbyBkZSBhZG1pbmlzdHJhZG9yXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc3XDoXJpbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL2NhZGFzdHJvJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBPIHVzdcOhcmlvIG7Do28gdGVtIHBlcm1pc3PDo28gZGUgYWRtaW5pc3RyYWRvclxuICAgICAgICBjb25zb2xlLmxvZygnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xuICAgICAgICBhbGVydCgnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xuICAgICAgICByb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSwgW10pO1xuXG5cbnJldHVybiAoXG4gIDxkaXY+IHDDoWdpbmEgZGUgYWRpY2lvbmFyIHByb2R1dG9zPC9kaXY+XG4pO1xuXG59XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB2ZXJpZmljYSgpO1xuXG4gIC8vICAgaWYgKGlzQXV0aGVudGljYXRlZCkge1xuICAvLyAgICAgLy8gUmVzdGFudGUgZG8gc2V1IGPDs2RpZ28gcGFyYSBvIGNhZGFzdHJvLi4uXG4gIC8vICAgfVxuICAvLyB9LCBbXSk7XG5cbiAgLy8gLy8gUmVzdGFudGUgZG8gc2V1IGNvbXBvbmVudGUgZGUgY2FkYXN0cm8uLi5cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJqd3QiLCJpbmRleCIsInJvdXRlciIsImNvbnRlbnRWaXNpYmxlIiwic2V0Q29udGVudFZpc2libGUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIiwiZGVjb2RlZFRva2VuIiwiZGVjb2RlIiwiY29uc29sZSIsImxvZyIsInJvbGUiLCJhbGVydCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/adicionar/index.tsx\n"));

/***/ })

});