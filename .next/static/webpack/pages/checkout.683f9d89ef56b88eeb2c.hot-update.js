/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/CheckoutProduct.jsx":
/*!********************************************!*\
  !*** ./src/components/CheckoutProduct.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/daniel/Desktop/CODE/amazon-clone2/src/components/CheckoutProduct.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar CheckoutProduct = function CheckoutProduct(_ref) {\n  _s();\n\n  var id = _ref.id,\n      title = _ref.title,\n      price = _ref.price,\n      hasPrime = _ref.hasPrime,\n      image = _ref.image,\n      rating = _ref.rating,\n      category = _ref.category,\n      description = _ref.description;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n\n  var handleAddItem = function handleAddItem() {};\n\n  var handleRemoveItem = function handleRemoveItem() {};\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-cols-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contain\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-span-3 mx-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex \",\n        children: Array(rating).fill().map(function (_, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillStar, {\n            size: 20,\n            className: \"text-yellow-500\"\n          }, Math.random(), false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-xs mt-2 mb-2 line-clamp-3\",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {\n        quantity: price,\n        currency: \"GBP\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: \"https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png\",\n          alt: \"prime\",\n          className: \"w-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-xs text-gray-500\",\n          children: \"FREE Next-day Delivery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col space-y-2 my-auto justify-self-end\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button mt-auto\",\n        children: \"Add to Basket\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button mt-auto\",\n        children: \"Remove from Basket\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CheckoutProduct, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];\n});\n\n_c = CheckoutProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckoutProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeD85YTlmIl0sIm5hbWVzIjpbIkNoZWNrb3V0UHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImhhc1ByaW1lIiwiaW1hZ2UiLCJyYXRpbmciLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUFkZEl0ZW0iLCJoYW5kbGVSZW1vdmVJdGVtIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQVNsQjtBQUFBOztBQUFBLE1BUkpDLEVBUUksUUFSSkEsRUFRSTtBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTtBQUNKLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNLENBQUUsQ0FBOUI7O0FBRUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNLENBQUUsQ0FBakM7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQSw0QkFDRSw4REFBQyxtREFBRDtBQUFPLFNBQUcsRUFBRVAsS0FBWjtBQUFtQixZQUFNLEVBQUUsR0FBM0I7QUFBZ0MsV0FBSyxFQUFFLEdBQXZDO0FBQTRDLGVBQVMsRUFBQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBLDhCQUNFO0FBQUEsa0JBQUlIO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFDR1csS0FBSyxDQUFDUCxNQUFELENBQUwsQ0FDRVEsSUFERixHQUVFQyxHQUZGLENBRU0sVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsOEJBQ0gsOERBQUMsc0RBQUQ7QUFFRSxnQkFBSSxFQUFFLEVBRlI7QUFHRSxxQkFBUyxFQUFDO0FBSFosYUFDT0MsSUFBSSxDQUFDQyxNQUFMLEVBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERztBQUFBLFNBRk47QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFjRTtBQUFHLGlCQUFTLEVBQUMsZ0NBQWI7QUFBQSxrQkFBK0NYO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRixlQWVFLDhEQUFDLGlFQUFEO0FBQVUsZ0JBQVEsRUFBRUwsS0FBcEI7QUFBMkIsZ0JBQVEsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZkYsRUFpQkdDLFFBQVEsaUJBQ1A7QUFBSyxpQkFBUyxFQUFDLDZCQUFmO0FBQUEsZ0NBQ0U7QUFDRSxpQkFBTyxFQUFDLE1BRFY7QUFFRSxhQUFHLEVBQUMsaUZBRk47QUFHRSxhQUFHLEVBQUMsT0FITjtBQUlFLG1CQUFTLEVBQUM7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT0U7QUFBRyxtQkFBUyxFQUFDLHVCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQStCRTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBLDhCQUNFO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQVEsaUJBQVMsRUFBQyxnQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQ0QsQ0F0REQ7O0dBQU1KLGU7VUFVYVUsb0Q7OztLQVZiVixlO0FBd0ROLCtEQUFlQSxlQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQWlGaWxsU3RhciBhcyBTdGFySWNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IEN1cnJlbmN5IGZyb20gXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IENoZWNrb3V0UHJvZHVjdCA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgcHJpY2UsXG4gIGhhc1ByaW1lLFxuICBpbWFnZSxcbiAgcmF0aW5nLFxuICBjYXRlZ29yeSxcbiAgZGVzY3JpcHRpb24sXG59KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVBZGRJdGVtID0gKCkgPT4ge307XG5cbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01XCI+XG4gICAgICA8SW1hZ2Ugc3JjPXtpbWFnZX0gaGVpZ2h0PXsyMDB9IHdpZHRoPXsyMDB9IG9iamVjdEZpdD1cImNvbnRhaW5cIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIG14LTVcIj5cbiAgICAgICAgPHA+e3RpdGxlfTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IFwiPlxuICAgICAgICAgIHtBcnJheShyYXRpbmcpXG4gICAgICAgICAgICAuZmlsbCgpXG4gICAgICAgICAgICAubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxTdGFySWNvblxuICAgICAgICAgICAgICAgIGtleT17TWF0aC5yYW5kb20oKX1cbiAgICAgICAgICAgICAgICBzaXplPXsyMH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXllbGxvdy01MDBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgbXQtMiBtYi0yIGxpbmUtY2xhbXAtM1wiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxDdXJyZW5jeSBxdWFudGl0eT17cHJpY2V9IGN1cnJlbmN5PVwiR0JQXCIgLz5cblxuICAgICAgICB7aGFzUHJpbWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cubmljZXBuZy5jb20vcG5nL2Z1bGwvMTE1LTExNTk5ODNfYW1hem9uLXByaW1lLWxvZ28tcHJpbWUtYW1hem9uLnBuZ1wiXG4gICAgICAgICAgICAgIGFsdD1cInByaW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwXCI+RlJFRSBOZXh0LWRheSBEZWxpdmVyeTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBteS1hdXRvIGp1c3RpZnktc2VsZi1lbmRcIj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gbXQtYXV0b1wiPkFkZCB0byBCYXNrZXQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24gbXQtYXV0b1wiPlJlbW92ZSBmcm9tIEJhc2tldDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja291dFByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CheckoutProduct.jsx\n");

/***/ })

});