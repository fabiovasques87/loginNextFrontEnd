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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _verifica__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/verifica */ \"./src/verifica.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst index = ()=>{\n    _s();\n    //funcaoes para msg \n    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //funao para modal\n    const [showModalGeral, setShowModalGeral] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Função para fechar o modal\n    const handleCloseModal = ()=>{\n        setShowModalGeral(false);\n    };\n    const handleShowGeral = ()=>{\n        console.log(\"Showing modal\");\n        setShowModalGeral(true);\n    };\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [contentVisible, setContentVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isAdmin, setIsAdmin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const decodedToken = (0,_verifica__WEBPACK_IMPORTED_MODULE_2__.verifica)();\n        if (!decodedToken) {\n            // Se não houver token, redirecione o usuário de volta para a página de login\n            router.push(\"/\");\n        } else {\n            // Verifique se o token inclui informações de função (role)\n            if (decodedToken.role === \"adm\") {\n                setIsAdmin(true);\n                setContentVisible(true);\n                // O usuário tem permissão de administrador\n                console.log(\"Usu\\xe1rio \\xe9 um administrador.\");\n                router.push(\"/cadastro\");\n            } else {\n                // O usuário não tem permissão de administrador\n                console.log(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                setErrorMessage(\"Usu\\xe1rio n\\xe3o \\xe9 um administrador.\");\n                handleShowGeral();\n                // Desativa a interação do usuário enquanto o modal está visível\n                document.body.style.pointerEvents = \"none\";\n                // Redireciona para o dashboard após 5 segundos\n                setTimeout(()=>{\n                    window.location.href = \"/dashboard\";\n                    //router.push('/dashboard');\n                    // Reativa a interação do usuário após o redirecionamento\n                    document.body.style.pointerEvents = \"auto\";\n                }, 3000);\n            //alert('Usuário não é um administrador.');\n            //router.push('/dashboard');\n            }\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" p\\xe1gina de adicionar produtos\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\fabiovasques\\\\Documents\\\\loginNextFrontEnd\\\\src\\\\pages\\\\adicionar\\\\index.tsx\",\n        lineNumber: 82,\n        columnNumber: 3\n    }, undefined);\n};\n_s(index, \"bVgXYiXU9Hqx/lfCOUUjl/bwzTk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n// useEffect(() => {\n//   const isAuthenticated = verifica();\n//   if (isAuthenticated) {\n//     // Restante do seu código para o cadastro...\n//   }\n// }, []);\n// // Restante do seu componente de cadastro...\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWRpY2lvbmFyL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ047QUFFRTtBQU14QyxNQUFNSSxRQUFROztJQUdaLG9CQUFvQjtJQUNwQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JELE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDO0lBR2pELGtCQUFrQjtJQUNsQixNQUFNLENBQUNRLGdCQUFnQkMsa0JBQWtCLEdBQUdULCtDQUFRQSxDQUFDO0lBRXJELDZCQUE2QjtJQUM3QixNQUFNVSxtQkFBbUI7UUFDdkJELGtCQUFrQjtJQUNwQjtJQUVBLE1BQU1FLGtCQUFrQjtRQUN0QkMsUUFBUUMsR0FBRyxDQUFDO1FBQ1pKLGtCQUFrQjtJQUNwQjtJQUdBLE1BQU1LLFNBQVNaLHNEQUFTQTtJQUN4QixNQUFNLENBQUNhLGdCQUFnQkMsa0JBQWtCLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUVyRCxNQUFNLENBQUNpQixTQUFTQyxXQUFXLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0IsZUFBZWxCLG1EQUFRQTtRQUU3QixJQUFJLENBQUNrQixjQUFjO1lBQ2pCLDZFQUE2RTtZQUM3RUwsT0FBT00sSUFBSSxDQUFDO1FBQ2QsT0FBTztZQUNMLDJEQUEyRDtZQUMzRCxJQUFJRCxhQUFhRSxJQUFJLEtBQUssT0FBTztnQkFDL0JILFdBQVc7Z0JBQ1hGLGtCQUFrQjtnQkFDcEIsMkNBQTJDO2dCQUMzQ0osUUFBUUMsR0FBRyxDQUFDO2dCQUNaQyxPQUFPTSxJQUFJLENBQUM7WUFDWixPQUFPO2dCQUlMLCtDQUErQztnQkFDL0NSLFFBQVFDLEdBQUcsQ0FBQztnQkFDWk4sZ0JBQWdCO2dCQUNoQkk7Z0JBR0YsZ0VBQWdFO2dCQUNoRVcsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsR0FBRztnQkFFNUIsK0NBQStDO2dCQUN6REMsV0FBVztvQkFDVEMsT0FBT0MsUUFBUSxDQUFDQyxJQUFJLEdBQUc7b0JBQ3ZCLDRCQUE0QjtvQkFDNUIseURBQXlEO29CQUN6RFAsU0FBU0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLGFBQWEsR0FBRztnQkFDdEMsR0FBRztZQUtDLDJDQUEyQztZQUMzQyw0QkFBNEI7WUFDNUI7UUFDRjtJQUNBLEdBQUcsRUFBRTtJQUViLHFCQUNFLDhEQUFDSztrQkFBSTs7Ozs7O0FBR1A7R0EzRU0zQjs7UUFzQldELGtEQUFTQTs7O0FBdUR4QixvQkFBb0I7QUFDcEIsd0NBQXdDO0FBRXhDLDJCQUEyQjtBQUMzQixtREFBbUQ7QUFDbkQsTUFBTTtBQUNOLFVBQVU7QUFFViwrQ0FBK0M7QUFFakQsK0RBQWVDLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FkaWNpb25hci9pbmRleC50c3g/NTdjNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZmljYSB9IGZyb20gJ0AvdmVyaWZpY2EnOyBcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcblxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PiB7XHJcblxyXG5cclxuICAvL2Z1bmNhb2VzIHBhcmEgbXNnIFxyXG4gIGNvbnN0IFtzdWNjZXNzTWVzc2FnZSwgc2V0U3VjY2Vzc01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICAvL2Z1bmFvIHBhcmEgbW9kYWxcclxuICBjb25zdCBbc2hvd01vZGFsR2VyYWwsIHNldFNob3dNb2RhbEdlcmFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgLy8gRnVuw6fDo28gcGFyYSBmZWNoYXIgbyBtb2RhbFxyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93TW9kYWxHZXJhbChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2hvd0dlcmFsID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1Nob3dpbmcgbW9kYWwnKTtcclxuICAgIHNldFNob3dNb2RhbEdlcmFsKHRydWUpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbY29udGVudFZpc2libGUsIHNldENvbnRlbnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW2lzQWRtaW4sIHNldElzQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IHZlcmlmaWNhKCk7XHJcbiAgICBcclxuICAgICAgaWYgKCFkZWNvZGVkVG9rZW4pIHtcclxuICAgICAgICAvLyBTZSBuw6NvIGhvdXZlciB0b2tlbiwgcmVkaXJlY2lvbmUgbyB1c3XDoXJpbyBkZSB2b2x0YSBwYXJhIGEgcMOhZ2luYSBkZSBsb2dpblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVmVyaWZpcXVlIHNlIG8gdG9rZW4gaW5jbHVpIGluZm9ybWHDp8O1ZXMgZGUgZnVuw6fDo28gKHJvbGUpXHJcbiAgICAgICAgaWYgKGRlY29kZWRUb2tlbi5yb2xlID09PSAnYWRtJykge1xyXG4gICAgICAgICAgc2V0SXNBZG1pbih0cnVlKTtcclxuICAgICAgICAgIHNldENvbnRlbnRWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgIC8vIE8gdXN1w6FyaW8gdGVtIHBlcm1pc3PDo28gZGUgYWRtaW5pc3RyYWRvclxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVc3XDoXJpbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvY2FkYXN0cm8nKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBcclxuXHJcbiAgICAgICAgICAvLyBPIHVzdcOhcmlvIG7Do28gdGVtIHBlcm1pc3PDo28gZGUgYWRtaW5pc3RyYWRvclxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ1VzdcOhcmlvIG7Do28gw6kgdW0gYWRtaW5pc3RyYWRvci4nKTtcclxuICAgICAgICAgIHNldEVycm9yTWVzc2FnZSgnVXN1w6FyaW8gbsOjbyDDqSB1bSBhZG1pbmlzdHJhZG9yLicpO1xyXG4gICAgICAgICAgaGFuZGxlU2hvd0dlcmFsKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAvLyBEZXNhdGl2YSBhIGludGVyYcOnw6NvIGRvIHVzdcOhcmlvIGVucXVhbnRvIG8gbW9kYWwgZXN0w6Egdmlzw612ZWxcclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUmVkaXJlY2lvbmEgcGFyYSBvIGRhc2hib2FyZCBhcMOzcyA1IHNlZ3VuZG9zXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZGFzaGJvYXJkXCI7XHJcbiAgICAgICAgLy9yb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICAgIC8vIFJlYXRpdmEgYSBpbnRlcmHDp8OjbyBkbyB1c3XDoXJpbyBhcMOzcyBvIHJlZGlyZWNpb25hbWVudG9cclxuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XHJcbiAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAgXHJcblxyXG5cclxuICAgICAgICAgIC8vYWxlcnQoJ1VzdcOhcmlvIG7Do28gw6kgdW0gYWRtaW5pc3RyYWRvci4nKTtcclxuICAgICAgICAgIC8vcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgfSwgW10pO1xyXG5cclxucmV0dXJuIChcclxuICA8ZGl2PiBww6FnaW5hIGRlIGFkaWNpb25hciBwcm9kdXRvczwvZGl2PlxyXG4pO1xyXG5cclxufVxyXG5cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gdmVyaWZpY2EoKTtcclxuXHJcbiAgLy8gICBpZiAoaXNBdXRoZW50aWNhdGVkKSB7XHJcbiAgLy8gICAgIC8vIFJlc3RhbnRlIGRvIHNldSBjw7NkaWdvIHBhcmEgbyBjYWRhc3Ryby4uLlxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtdKTtcclxuXHJcbiAgLy8gLy8gUmVzdGFudGUgZG8gc2V1IGNvbXBvbmVudGUgZGUgY2FkYXN0cm8uLi5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ2ZXJpZmljYSIsInVzZVJvdXRlciIsImluZGV4Iiwic3VjY2Vzc01lc3NhZ2UiLCJzZXRTdWNjZXNzTWVzc2FnZSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInNob3dNb2RhbEdlcmFsIiwic2V0U2hvd01vZGFsR2VyYWwiLCJoYW5kbGVDbG9zZU1vZGFsIiwiaGFuZGxlU2hvd0dlcmFsIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsImNvbnRlbnRWaXNpYmxlIiwic2V0Q29udGVudFZpc2libGUiLCJpc0FkbWluIiwic2V0SXNBZG1pbiIsImRlY29kZWRUb2tlbiIsInB1c2giLCJyb2xlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/adicionar/index.tsx\n"));

/***/ })

});