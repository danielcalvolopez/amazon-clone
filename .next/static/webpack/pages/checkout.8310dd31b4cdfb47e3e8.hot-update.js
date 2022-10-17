/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/pages/checkout.jsx":
/*!********************************!*\
  !*** ./src/pages/checkout.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CheckoutProduct */ \"./src/components/CheckoutProduct.jsx\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ \"./src/components/Header.jsx\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/daniel/Desktop/CODE/amazon-clone2/src/pages/checkout.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Checkout = function Checkout() {\n  _s();\n\n  var items = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_5__.selectItems);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bg-gray-100\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: \"lg:flex max-w-screen-2xl mx-auto\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-grow m-5 shadow-sm\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n          src: \"https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2021/01/12/Competency-Banner-2021-Thin.png\",\n          width: 1020,\n          height: 350,\n          objectFit: \"contain\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"flex flex-col p-5 space-y-10 bg-white\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-3xl border-b pb-4\",\n            children: items.length === 0 ? \"Your Amazon Basket is empty\" : \"Shopping Basket\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, _this), items.map(function (_ref, i) {\n            var hasPrime = _ref.hasPrime,\n                rating = _ref.rating,\n                id = _ref.id,\n                title = _ref.title,\n                price = _ref.price,\n                description = _ref.description,\n                category = _ref.category,\n                image = _ref.image;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutProduct__WEBPACK_IMPORTED_MODULE_3__.default, {\n              title: title,\n              price: price,\n              hasPrime: hasPrime,\n              image: image,\n              category: category,\n              rating: rating,\n              description: description\n            }, id, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 17\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Checkout, \"tY2Gvv5VcC5OmHFNMSHq17tjIN8=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector];\n});\n\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NoZWNrb3V0LmpzeD80YzdlIl0sIm5hbWVzIjpbIkNoZWNrb3V0IiwiaXRlbXMiLCJ1c2VTZWxlY3RvciIsInNlbGVjdEl0ZW1zIiwibGVuZ3RoIiwibWFwIiwiaSIsImhhc1ByaW1lIiwicmF0aW5nIiwiaWQiLCJ0aXRsZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImltYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3JCLE1BQU1DLEtBQUssR0FBR0Msd0RBQVcsQ0FBQ0MsNERBQUQsQ0FBekI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsNEJBQ0UsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBTSxlQUFTLEVBQUMsa0NBQWhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHlCQUFmO0FBQUEsZ0NBQ0UsOERBQUMsbURBQUQ7QUFDRSxhQUFHLEVBQUMsMkhBRE47QUFFRSxlQUFLLEVBQUUsSUFGVDtBQUdFLGdCQUFNLEVBQUUsR0FIVjtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBSyxtQkFBUyxFQUFDLHVDQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLHdCQUFkO0FBQUEsc0JBQ0dGLEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFqQixHQUNHLDZCQURILEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBTUdILEtBQUssQ0FBQ0ksR0FBTixDQUNDLGdCQVdFQyxDQVhGO0FBQUEsZ0JBRUlDLFFBRkosUUFFSUEsUUFGSjtBQUFBLGdCQUdJQyxNQUhKLFFBR0lBLE1BSEo7QUFBQSxnQkFJSUMsRUFKSixRQUlJQSxFQUpKO0FBQUEsZ0JBS0lDLEtBTEosUUFLSUEsS0FMSjtBQUFBLGdCQU1JQyxLQU5KLFFBTUlBLEtBTko7QUFBQSxnQkFPSUMsV0FQSixRQU9JQSxXQVBKO0FBQUEsZ0JBUUlDLFFBUkosUUFRSUEsUUFSSjtBQUFBLGdCQVNJQyxLQVRKLFFBU0lBLEtBVEo7QUFBQSxnQ0FhRSw4REFBQyxnRUFBRDtBQUVFLG1CQUFLLEVBQUVKLEtBRlQ7QUFHRSxtQkFBSyxFQUFFQyxLQUhUO0FBSUUsc0JBQVEsRUFBRUosUUFKWjtBQUtFLG1CQUFLLEVBQUVPLEtBTFQ7QUFNRSxzQkFBUSxFQUFFRCxRQU5aO0FBT0Usb0JBQU0sRUFBRUwsTUFQVjtBQVFFLHlCQUFXLEVBQUVJO0FBUmYsZUFDT0gsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGO0FBQUEsV0FERCxDQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQTJDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbURELENBdEREOztHQUFNVCxRO1VBQ1VFLG9EOzs7S0FEVkYsUTtBQXdETiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9jaGVja291dC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQ2hlY2tvdXRQcm9kdWN0IGZyb20gXCIuLi9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IHNlbGVjdEl0ZW1zIH0gZnJvbSBcIi4uL3NsaWNlcy9iYXNrZXRTbGljZVwiO1xuXG5jb25zdCBDaGVja291dCA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwXCI+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImxnOmZsZXggbWF4LXctc2NyZWVuLTJ4bCBteC1hdXRvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG0tNSBzaGFkb3ctc21cIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZDI5MDhxMDF2b21xYjIuY2xvdWRmcm9udC5uZXQvNzdkZTY4ZGFlY2Q4MjNiYWJiYjU4ZWRiMWM4ZTE0ZDcxMDZlODNiYi8yMDIxLzAxLzEyL0NvbXBldGVuY3ktQmFubmVyLTIwMjEtVGhpbi5wbmdcIlxuICAgICAgICAgICAgd2lkdGg9ezEwMjB9XG4gICAgICAgICAgICBoZWlnaHQ9ezM1MH1cbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHAtNSBzcGFjZS15LTEwIGJnLXdoaXRlXCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgYm9yZGVyLWIgcGItNFwiPlxuICAgICAgICAgICAgICB7aXRlbXMubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgPyBcIllvdXIgQW1hem9uIEJhc2tldCBpcyBlbXB0eVwiXG4gICAgICAgICAgICAgICAgOiBcIlNob3BwaW5nIEJhc2tldFwifVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoXG4gICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBoYXNQcmltZSxcbiAgICAgICAgICAgICAgICAgIHJhdGluZyxcbiAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICAgICAgICBpbWFnZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgKSA9PiAoXG4gICAgICAgICAgICAgICAgPENoZWNrb3V0UHJvZHVjdFxuICAgICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICAgIHByaWNlPXtwcmljZX1cbiAgICAgICAgICAgICAgICAgIGhhc1ByaW1lPXtoYXNQcmltZX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPXtpbWFnZX1cbiAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtjYXRlZ29yeX1cbiAgICAgICAgICAgICAgICAgIHJhdGluZz17cmF0aW5nfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/checkout.jsx\n");

/***/ })

});