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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-currency-formatter */ \"./node_modules/react-currency-formatter/dist/react-currency-formatter.umd.js\");\n/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../slices/basketSlice */ \"./src/slices/basketSlice.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/daniel/Desktop/CODE/amazon-clone2/src/components/CheckoutProduct.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar CheckoutProduct = function CheckoutProduct(_ref) {\n  _s();\n\n  var id = _ref.id,\n      title = _ref.title,\n      price = _ref.price,\n      hasPrime = _ref.hasPrime,\n      image = _ref.image,\n      rating = _ref.rating,\n      category = _ref.category,\n      description = _ref.description;\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n\n  var handleAddItem = function handleAddItem() {\n    var product = {\n      id: id,\n      title: title,\n      price: price,\n      hasPrime: hasPrime,\n      image: image,\n      rating: rating,\n      category: category,\n      description: description\n    };\n    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_4__.addToBasket)(product));\n  };\n\n  var handleRemoveItem = function handleRemoveItem() {};\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"grid grid-cols-5\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n      src: image,\n      height: 200,\n      width: 200,\n      objectFit: \"contain\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"col-span-3 mx-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex \",\n        children: Array(rating).fill().map(function (_, i) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {\n            size: 20,\n            className: \"text-yellow-500\"\n          }, Math.random(), false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-xs mt-2 mb-2 line-clamp-3\",\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_2___default()), {\n        quantity: price,\n        currency: \"GBP\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center space-x-2\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          loading: \"lazy\",\n          src: \"https://www.nicepng.com/png/full/115-1159983_amazon-prime-logo-prime-amazon.png\",\n          alt: \"prime\",\n          className: \"w-12\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          className: \"text-xs text-gray-500\",\n          children: \"FREE Next-day Delivery\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"flex flex-col space-y-2 my-auto justify-self-end\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button mt-auto\",\n        onClick: handleAddItem,\n        children: \"Add to Basket\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"button mt-auto\",\n        children: \"Remove from Basket\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(CheckoutProduct, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch];\n});\n\n_c = CheckoutProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"CheckoutProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tvdXRQcm9kdWN0LmpzeD85YTlmIl0sIm5hbWVzIjpbIkNoZWNrb3V0UHJvZHVjdCIsImlkIiwidGl0bGUiLCJwcmljZSIsImhhc1ByaW1lIiwiaW1hZ2UiLCJyYXRpbmciLCJjYXRlZ29yeSIsImRlc2NyaXB0aW9uIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUFkZEl0ZW0iLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJoYW5kbGVSZW1vdmVJdGVtIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQVNsQjtBQUFBOztBQUFBLE1BUkpDLEVBUUksUUFSSkEsRUFRSTtBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLE1BSEpDLE1BR0ksUUFISkEsTUFHSTtBQUFBLE1BRkpDLFFBRUksUUFGSkEsUUFFSTtBQUFBLE1BREpDLFdBQ0ksUUFESkEsV0FDSTtBQUNKLE1BQU1DLFFBQVEsR0FBR0Msd0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQU1DLE9BQU8sR0FBRztBQUNkWCxRQUFFLEVBQUZBLEVBRGM7QUFFZEMsV0FBSyxFQUFMQSxLQUZjO0FBR2RDLFdBQUssRUFBTEEsS0FIYztBQUlkQyxjQUFRLEVBQVJBLFFBSmM7QUFLZEMsV0FBSyxFQUFMQSxLQUxjO0FBTWRDLFlBQU0sRUFBTkEsTUFOYztBQU9kQyxjQUFRLEVBQVJBLFFBUGM7QUFRZEMsaUJBQVcsRUFBWEE7QUFSYyxLQUFoQjtBQVdBQyxZQUFRLENBQUNJLGdFQUFXLENBQUNELE9BQUQsQ0FBWixDQUFSO0FBQ0QsR0FiRDs7QUFlQSxNQUFNRSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQU0sQ0FBRSxDQUFqQzs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBLDRCQUNFLDhEQUFDLG1EQUFEO0FBQU8sU0FBRyxFQUFFVCxLQUFaO0FBQW1CLFlBQU0sRUFBRSxHQUEzQjtBQUFnQyxXQUFLLEVBQUUsR0FBdkM7QUFBNEMsZUFBUyxFQUFDO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsOEJBQ0U7QUFBQSxrQkFBSUg7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUNHYSxLQUFLLENBQUNULE1BQUQsQ0FBTCxDQUNFVSxJQURGLEdBRUVDLEdBRkYsQ0FFTSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSw4QkFDSCw4REFBQyxzREFBRDtBQUVFLGdCQUFJLEVBQUUsRUFGUjtBQUdFLHFCQUFTLEVBQUM7QUFIWixhQUNPQyxJQUFJLENBQUNDLE1BQUwsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURHO0FBQUEsU0FGTjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQWNFO0FBQUcsaUJBQVMsRUFBQyxnQ0FBYjtBQUFBLGtCQUErQ2I7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRGLGVBZUUsOERBQUMsaUVBQUQ7QUFBVSxnQkFBUSxFQUFFTCxLQUFwQjtBQUEyQixnQkFBUSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmRixFQWlCR0MsUUFBUSxpQkFDUDtBQUFLLGlCQUFTLEVBQUMsNkJBQWY7QUFBQSxnQ0FDRTtBQUNFLGlCQUFPLEVBQUMsTUFEVjtBQUVFLGFBQUcsRUFBQyxpRkFGTjtBQUdFLGFBQUcsRUFBQyxPQUhOO0FBSUUsbUJBQVMsRUFBQztBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFPRTtBQUFHLG1CQUFTLEVBQUMsdUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBK0JFO0FBQUssZUFBUyxFQUFDLGtEQUFmO0FBQUEsOEJBQ0U7QUFBUSxpQkFBUyxFQUFDLGdCQUFsQjtBQUFtQyxlQUFPLEVBQUVPLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFRLGlCQUFTLEVBQUMsZ0JBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0NELENBckVEOztHQUFNWCxlO1VBVWFVLG9EOzs7S0FWYlYsZTtBQXVFTiwrREFBZUEsZUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0NoZWNrb3V0UHJvZHVjdC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEFpRmlsbFN0YXIgYXMgU3Rhckljb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCBDdXJyZW5jeSBmcm9tIFwicmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyXCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgYWRkVG9CYXNrZXQgfSBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XG5cbmNvbnN0IENoZWNrb3V0UHJvZHVjdCA9ICh7XG4gIGlkLFxuICB0aXRsZSxcbiAgcHJpY2UsXG4gIGhhc1ByaW1lLFxuICBpbWFnZSxcbiAgcmF0aW5nLFxuICBjYXRlZ29yeSxcbiAgZGVzY3JpcHRpb24sXG59KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBoYW5kbGVBZGRJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgICBpZCxcbiAgICAgIHRpdGxlLFxuICAgICAgcHJpY2UsXG4gICAgICBoYXNQcmltZSxcbiAgICAgIGltYWdlLFxuICAgICAgcmF0aW5nLFxuICAgICAgY2F0ZWdvcnksXG4gICAgICBkZXNjcmlwdGlvbixcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2goYWRkVG9CYXNrZXQocHJvZHVjdCkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoKSA9PiB7fTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtNVwiPlxuICAgICAgPEltYWdlIHNyYz17aW1hZ2V9IGhlaWdodD17MjAwfSB3aWR0aD17MjAwfSBvYmplY3RGaXQ9XCJjb250YWluXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyBteC01XCI+XG4gICAgICAgIDxwPnt0aXRsZX08L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBcIj5cbiAgICAgICAgICB7QXJyYXkocmF0aW5nKVxuICAgICAgICAgICAgLmZpbGwoKVxuICAgICAgICAgICAgLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8U3Rhckljb25cbiAgICAgICAgICAgICAgICBrZXk9e01hdGgucmFuZG9tKCl9XG4gICAgICAgICAgICAgICAgc2l6ZT17MjB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC15ZWxsb3ctNTAwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIG10LTIgbWItMiBsaW5lLWNsYW1wLTNcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8Q3VycmVuY3kgcXVhbnRpdHk9e3ByaWNlfSBjdXJyZW5jeT1cIkdCUFwiIC8+XG5cbiAgICAgICAge2hhc1ByaW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3Lm5pY2VwbmcuY29tL3BuZy9mdWxsLzExNS0xMTU5OTgzX2FtYXpvbi1wcmltZS1sb2dvLXByaW1lLWFtYXpvbi5wbmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJwcmltZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMFwiPkZSRUUgTmV4dC1kYXkgRGVsaXZlcnk8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgbXktYXV0byBqdXN0aWZ5LXNlbGYtZW5kXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uIG10LWF1dG9cIiBvbkNsaWNrPXtoYW5kbGVBZGRJdGVtfT5cbiAgICAgICAgICBBZGQgdG8gQmFza2V0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbiBtdC1hdXRvXCI+UmVtb3ZlIGZyb20gQmFza2V0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrb3V0UHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CheckoutProduct.jsx\n");

/***/ })

});