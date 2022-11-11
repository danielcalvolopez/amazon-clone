/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/create-checkout-session";
exports.ids = ["pages/api/create-checkout-session"];
exports.modules = {

/***/ "./src/pages/api/create-checkout-session.js":
/*!**************************************************!*\
  !*** ./src/pages/api/create-checkout-session.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_PRIVATE_KEY);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items,\n    email\n  } = req.body;\n  const transformedItems = items.map(item => ({\n    description: item.description,\n    quantity: 1,\n    price_data: {\n      currency: \"gbp\",\n      unit_amount: item.price * 100,\n      product_data: {\n        name: item.title,\n        images: [item.image]\n      }\n    }\n  }));\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: [\"card\"],\n    shipping_rates: [\"shr_1LuKzKB7khuVY4hsEfc6m0Ok\"],\n    shipping_address_collection: {\n      allowed_countries: [\"GB\", \"US\", \"CA\"]\n    },\n    line_items: transformedItems,\n    mode: \"payment\",\n    success_url: `${process.env.HOST}/success`,\n    cancel_url: `${process.env.HOST}/checkout`,\n    metadata: {\n      email,\n      images: JSON.stringify(items.map(item => item.image))\n    }\n  });\n  res.status(200).json({\n    id: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfUFJJVkFURV9LRVkiLCJyZXEiLCJyZXMiLCJpdGVtcyIsImVtYWlsIiwiYm9keSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwiZGVzY3JpcHRpb24iLCJxdWFudGl0eSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJwcm9kdWN0X2RhdGEiLCJuYW1lIiwidGl0bGUiLCJpbWFnZXMiLCJpbWFnZSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJzaGlwcGluZ19yYXRlcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsIkhPU1QiLCJjYW5jZWxfdXJsIiwibWV0YWRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwianNvbiIsImlkIl0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQVAsQ0FBa0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBOUIsQ0FBZjs7QUFFQSwrREFBZSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUFFQyxTQUFGO0FBQVNDO0FBQVQsTUFBbUJILEdBQUcsQ0FBQ0ksSUFBN0I7QUFFQSxRQUFNQyxnQkFBZ0IsR0FBR0gsS0FBSyxDQUFDSSxHQUFOLENBQVdDLElBQUQsS0FBVztBQUM1Q0MsZUFBVyxFQUFFRCxJQUFJLENBQUNDLFdBRDBCO0FBRTVDQyxZQUFRLEVBQUUsQ0FGa0M7QUFHNUNDLGNBQVUsRUFBRTtBQUNWQyxjQUFRLEVBQUUsS0FEQTtBQUVWQyxpQkFBVyxFQUFFTCxJQUFJLENBQUNNLEtBQUwsR0FBYSxHQUZoQjtBQUdWQyxrQkFBWSxFQUFFO0FBQ1pDLFlBQUksRUFBRVIsSUFBSSxDQUFDUyxLQURDO0FBRVpDLGNBQU0sRUFBRSxDQUFDVixJQUFJLENBQUNXLEtBQU47QUFGSTtBQUhKO0FBSGdDLEdBQVgsQ0FBVixDQUF6QjtBQWFBLFFBQU1DLE9BQU8sR0FBRyxNQUFNeEIsTUFBTSxDQUFDeUIsUUFBUCxDQUFnQkMsUUFBaEIsQ0FBeUJDLE1BQXpCLENBQWdDO0FBQ3BEQyx3QkFBb0IsRUFBRSxDQUFDLE1BQUQsQ0FEOEI7QUFFcERDLGtCQUFjLEVBQUUsQ0FBQyw4QkFBRCxDQUZvQztBQUdwREMsK0JBQTJCLEVBQUU7QUFDM0JDLHVCQUFpQixFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiO0FBRFEsS0FIdUI7QUFNcERDLGNBQVUsRUFBRXRCLGdCQU53QztBQU9wRHVCLFFBQUksRUFBRSxTQVA4QztBQVFwREMsZUFBVyxFQUFHLEdBQUVoQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssVUFSbUI7QUFTcERDLGNBQVUsRUFBRyxHQUFFbEMsT0FBTyxDQUFDQyxHQUFSLENBQVlnQyxJQUFLLFdBVG9CO0FBVXBERSxZQUFRLEVBQUU7QUFDUjdCLFdBRFE7QUFFUmMsWUFBTSxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVoQyxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsSUFBRCxJQUFVQSxJQUFJLENBQUNXLEtBQXpCLENBQWY7QUFGQTtBQVYwQyxHQUFoQyxDQUF0QjtBQWdCQWpCLEtBQUcsQ0FBQ2tDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFFLEVBQUVsQixPQUFPLENBQUNrQjtBQUFkLEdBQXJCO0FBQ0QsQ0FqQ0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZShcInN0cmlwZVwiKShwcm9jZXNzLmVudi5TVFJJUEVfUFJJVkFURV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBpdGVtcywgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgcHJpY2VfZGF0YToge1xuICAgICAgY3VycmVuY3k6IFwiZ2JwXCIsXG4gICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcbiAgICAgIHByb2R1Y3RfZGF0YToge1xuICAgICAgICBuYW1lOiBpdGVtLnRpdGxlLFxuICAgICAgICBpbWFnZXM6IFtpdGVtLmltYWdlXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkpO1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICBwYXltZW50X21ldGhvZF90eXBlczogW1wiY2FyZFwiXSxcbiAgICBzaGlwcGluZ19yYXRlczogW1wic2hyXzFMdUt6S0I3a2h1Vlk0aHNFZmM2bTBPa1wiXSxcbiAgICBzaGlwcGluZ19hZGRyZXNzX2NvbGxlY3Rpb246IHtcbiAgICAgIGFsbG93ZWRfY291bnRyaWVzOiBbXCJHQlwiLCBcIlVTXCIsIFwiQ0FcIl0sXG4gICAgfSxcbiAgICBsaW5lX2l0ZW1zOiB0cmFuc2Zvcm1lZEl0ZW1zLFxuICAgIG1vZGU6IFwicGF5bWVudFwiLFxuICAgIHN1Y2Nlc3NfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9zdWNjZXNzYCxcbiAgICBjYW5jZWxfdXJsOiBgJHtwcm9jZXNzLmVudi5IT1NUfS9jaGVja291dGAsXG4gICAgbWV0YWRhdGE6IHtcbiAgICAgIGVtYWlsLFxuICAgICAgaW1hZ2VzOiBKU09OLnN0cmluZ2lmeShpdGVtcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaW1hZ2UpKSxcbiAgICB9LFxuICB9KTtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGlkOiBzZXNzaW9uLmlkIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/create-checkout-session.js"));
module.exports = __webpack_exports__;

})();