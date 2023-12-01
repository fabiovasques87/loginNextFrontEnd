/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/UserContext.tsx":
/*!**********************************!*\
  !*** ./contexts/UserContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserProvider: () => (/* binding */ UserProvider),\n/* harmony export */   useUser: () => (/* binding */ useUser)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n// UserContext.tsx\n\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst UserProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedToken = localStorage.getItem(\"token\");\n        if (storedToken) {\n            const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().decode(storedToken);\n            setUser({\n                id: decodedToken?.userId,\n                username: decodedToken?.username,\n                role: decodedToken?.role\n            });\n        }\n    }, []); // Executar este efeito apenas uma vez durante a inicialização\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            user,\n            setUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/contexts/UserContext.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\nconst useUser = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(UserContext);\n    if (!context) {\n        throw new Error(\"useUser must be used within a UserProvider\");\n    }\n    return context;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9Vc2VyQ29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxrQkFBa0I7O0FBRTREO0FBQy9DO0FBZS9CLE1BQU1NLDRCQUFjTCxvREFBYUEsQ0FBK0JNO0FBRWhFLE1BQU1DLGVBQXlCLENBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzFDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUiwrQ0FBUUEsQ0FBYztJQUU5Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNUSxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFFekMsSUFBSUYsYUFBYTtZQUNmLE1BQU1HLGVBQW9CViwwREFBVSxDQUFDTztZQUVyQ0QsUUFBUTtnQkFDTk0sSUFBSUYsY0FBY0c7Z0JBQ2xCQyxVQUFVSixjQUFjSTtnQkFDeEJDLE1BQU1MLGNBQWNLO1lBRXRCO1FBQ0Y7SUFDRixHQUFHLEVBQUUsR0FBRyw4REFBOEQ7SUFFdEUscUJBQ0UsOERBQUNkLFlBQVllLFFBQVE7UUFBQ0MsT0FBTztZQUFFWjtZQUFNQztRQUFRO2tCQUMxQ0Y7Ozs7OztBQUdQO0FBRUEsTUFBTWMsVUFBVTtJQUNkLE1BQU1DLFVBQVV0QixpREFBVUEsQ0FBQ0k7SUFDM0IsSUFBSSxDQUFDa0IsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1Q7QUFFaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbi8uL2NvbnRleHRzL1VzZXJDb250ZXh0LnRzeD9mNTkwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFVzZXJDb250ZXh0LnRzeFxuXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIGV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4vLyAgIGlkPzogbnVtYmVyO1xuLy8gICB1c2VybmFtZTogc3RyaW5nO1xuLy8gICByb2xlOiBzdHJpbmc7XG4vLyAgIC8vIE91dHJhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvLCBzZSBuZWNlc3PDoXJpb1xuLy8gfVxuXG5pbnRlcmZhY2UgVXNlckNvbnRleHRQcm9wcyB7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xuICBzZXRVc2VyOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxVc2VyIHwgbnVsbD4+O1xufVxuXG5jb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8VXNlckNvbnRleHRQcm9wcyB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcblxuY29uc3QgVXNlclByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcblxuICAgIGlmIChzdG9yZWRUb2tlbikge1xuICAgICAgY29uc3QgZGVjb2RlZFRva2VuOiBhbnkgPSBqd3QuZGVjb2RlKHN0b3JlZFRva2VuKTtcblxuICAgICAgc2V0VXNlcih7XG4gICAgICAgIGlkOiBkZWNvZGVkVG9rZW4/LnVzZXJJZCxcbiAgICAgICAgdXNlcm5hbWU6IGRlY29kZWRUb2tlbj8udXNlcm5hbWUsXG4gICAgICAgIHJvbGU6IGRlY29kZWRUb2tlbj8ucm9sZSxcbiAgICAgICAgLy8gLi4uIG91dHJhcyBpbmZvcm1hw6fDtWVzIGRvIHVzdcOhcmlvXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTsgLy8gRXhlY3V0YXIgZXN0ZSBlZmVpdG8gYXBlbmFzIHVtYSB2ZXogZHVyYW50ZSBhIGluaWNpYWxpemHDp8Ojb1xuXG4gIHJldHVybiAoXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIHNldFVzZXIgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmNvbnN0IHVzZVVzZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VVc2VyIG11c3QgYmUgdXNlZCB3aXRoaW4gYSBVc2VyUHJvdmlkZXInKTtcbiAgfVxuICByZXR1cm4gY29udGV4dDtcbn07XG5cbmV4cG9ydCB7IFVzZXJQcm92aWRlciwgdXNlVXNlciB9O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImp3dCIsIlVzZXJDb250ZXh0IiwidW5kZWZpbmVkIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInN0b3JlZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlY29kZWRUb2tlbiIsImRlY29kZSIsImlkIiwidXNlcklkIiwidXNlcm5hbWUiLCJyb2xlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVVzZXIiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/UserContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/UserContext */ \"./contexts/UserContext.tsx\");\n// // import { Layout } from '@/components/Layout/#index'\n// import '@/styles/globals.css'\n// import type { AppProps } from 'next/app'\n// export default function App({ Component, pageProps }: AppProps) {\n//   // return <Component {...pageProps} />\n//   return (\n//     // <Layout>\n//     //   <Component {...pageProps} />\n//     // </Layout>\n//   )\n// }\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__.UserProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/_app.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/media/fabio/E0E04212E041EF7A/loginNextFrontEnd/src/pages/_app.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5REFBeUQ7QUFDekQsZ0NBQWdDO0FBQ2hDLDJDQUEyQztBQUUzQyxvRUFBb0U7QUFDcEUsMkNBQTJDO0FBQzNDLGFBQWE7QUFDYixrQkFBa0I7QUFDbEIsd0NBQXdDO0FBQ3hDLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sSUFBSTs7QUFJeUI7QUFDYTtBQUVnQjtBQUkzQyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1QsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sb2dpbi8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIGltcG9ydCB7IExheW91dCB9IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXQvI2luZGV4J1xuLy8gaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbi8vIGltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbi8vICAgLy8gcmV0dXJuIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbi8vICAgcmV0dXJuIChcbi8vICAgICAvLyA8TGF5b3V0PlxuLy8gICAgIC8vICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuLy8gICAgIC8vIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9XG5cblxuXG5pbXBvcnQgJ0Avc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcyc7XG5cbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gJy4uLy4uL2NvbnRleHRzL1VzZXJDb250ZXh0JztcblxuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXI+IFxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gIDwvVXNlclByb3ZpZGVyPlxuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJVc2VyUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/bootstrap"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();