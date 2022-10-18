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
eval("__webpack_require__.r(__webpack_exports__);\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    items,\n    email\n  } = req.body;\n  const transformedItems = items.map(item => ({\n    description: item.description,\n    quantity: 1,\n    price_data: {\n      currency: \"gbp\",\n      unit_amount: item.price * 100,\n      product_data: {\n        name: item.title,\n        images: [item.image]\n      }\n    }\n  }));\n  const session = await stripe.checkout.sessions.create({\n    payment_method_types: [\"card\"],\n    shipping_address_collection: {\n      allowed_countries: [\"GB\", \"US\", \"CA\"]\n    },\n    shipping_rates: [\"shr_1LuKzKB7khuVY4hsEfc6m0Ok\"],\n    line_items: transformedItems,\n    mode: \"payment\",\n    success_url: `${process.env.HOST}/success`,\n    cancel_url: `${process.env.HOST}/checkout`,\n    metadata: {\n      email,\n      images: JSON.stringify(items.map(item => item.image))\n    }\n  });\n  res.status(200).json({\n    id: session.id\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvYXBpL2NyZWF0ZS1jaGVja291dC1zZXNzaW9uLmpzPzg3M2IiXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsInJlcSIsInJlcyIsIml0ZW1zIiwiZW1haWwiLCJib2R5IiwidHJhbnNmb3JtZWRJdGVtcyIsIm1hcCIsIml0ZW0iLCJkZXNjcmlwdGlvbiIsInF1YW50aXR5IiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwidW5pdF9hbW91bnQiLCJwcmljZSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJ0aXRsZSIsImltYWdlcyIsImltYWdlIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsInNoaXBwaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImFsbG93ZWRfY291bnRyaWVzIiwic2hpcHBpbmdfcmF0ZXMiLCJsaW5lX2l0ZW1zIiwibW9kZSIsInN1Y2Nlc3NfdXJsIiwiSE9TVCIsImNhbmNlbF91cmwiLCJtZXRhZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzdGF0dXMiLCJqc29uIiwiaWQiXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGlCQUE5QixDQUFmOztBQUVBLCtEQUFlLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNqQyxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFtQkgsR0FBRyxDQUFDSSxJQUE3QjtBQUVBLFFBQU1DLGdCQUFnQixHQUFHSCxLQUFLLENBQUNJLEdBQU4sQ0FBV0MsSUFBRCxLQUFXO0FBQzVDQyxlQUFXLEVBQUVELElBQUksQ0FBQ0MsV0FEMEI7QUFFNUNDLFlBQVEsRUFBRSxDQUZrQztBQUc1Q0MsY0FBVSxFQUFFO0FBQ1ZDLGNBQVEsRUFBRSxLQURBO0FBRVZDLGlCQUFXLEVBQUVMLElBQUksQ0FBQ00sS0FBTCxHQUFhLEdBRmhCO0FBR1ZDLGtCQUFZLEVBQUU7QUFDWkMsWUFBSSxFQUFFUixJQUFJLENBQUNTLEtBREM7QUFFWkMsY0FBTSxFQUFFLENBQUNWLElBQUksQ0FBQ1csS0FBTjtBQUZJO0FBSEo7QUFIZ0MsR0FBWCxDQUFWLENBQXpCO0FBYUEsUUFBTUMsT0FBTyxHQUFHLE1BQU14QixNQUFNLENBQUN5QixRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsTUFBekIsQ0FBZ0M7QUFDcERDLHdCQUFvQixFQUFFLENBQUMsTUFBRCxDQUQ4QjtBQUVwREMsK0JBQTJCLEVBQUU7QUFDM0JDLHVCQUFpQixFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiO0FBRFEsS0FGdUI7QUFLcERDLGtCQUFjLEVBQUUsQ0FBQyw4QkFBRCxDQUxvQztBQU1wREMsY0FBVSxFQUFFdEIsZ0JBTndDO0FBT3BEdUIsUUFBSSxFQUFFLFNBUDhDO0FBUXBEQyxlQUFXLEVBQUcsR0FBRWhDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZ0MsSUFBSyxVQVJtQjtBQVNwREMsY0FBVSxFQUFHLEdBQUVsQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWdDLElBQUssV0FUb0I7QUFVcERFLFlBQVEsRUFBRTtBQUNSN0IsV0FEUTtBQUVSYyxZQUFNLEVBQUVnQixJQUFJLENBQUNDLFNBQUwsQ0FBZWhDLEtBQUssQ0FBQ0ksR0FBTixDQUFXQyxJQUFELElBQVVBLElBQUksQ0FBQ1csS0FBekIsQ0FBZjtBQUZBO0FBVjBDLEdBQWhDLENBQXRCO0FBZ0JBakIsS0FBRyxDQUFDa0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUUsRUFBRWxCLE9BQU8sQ0FBQ2tCO0FBQWQsR0FBckI7QUFDRCxDQWpDRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvY3JlYXRlLWNoZWNrb3V0LXNlc3Npb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdHJpcGUgPSByZXF1aXJlKFwic3RyaXBlXCIpKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHsgaXRlbXMsIGVtYWlsIH0gPSByZXEuYm9keTtcblxuICBjb25zdCB0cmFuc2Zvcm1lZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtKSA9PiAoe1xuICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxuICAgIHF1YW50aXR5OiAxLFxuICAgIHByaWNlX2RhdGE6IHtcbiAgICAgIGN1cnJlbmN5OiBcImdicFwiLFxuICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXG4gICAgICBwcm9kdWN0X2RhdGE6IHtcbiAgICAgICAgbmFtZTogaXRlbS50aXRsZSxcbiAgICAgICAgaW1hZ2VzOiBbaXRlbS5pbWFnZV0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgcGF5bWVudF9tZXRob2RfdHlwZXM6IFtcImNhcmRcIl0sXG4gICAgc2hpcHBpbmdfYWRkcmVzc19jb2xsZWN0aW9uOiB7XG4gICAgICBhbGxvd2VkX2NvdW50cmllczogW1wiR0JcIiwgXCJVU1wiLCBcIkNBXCJdLFxuICAgIH0sXG4gICAgc2hpcHBpbmdfcmF0ZXM6IFtcInNocl8xTHVLektCN2todVZZNGhzRWZjNm0wT2tcIl0sXG4gICAgbGluZV9pdGVtczogdHJhbnNmb3JtZWRJdGVtcyxcbiAgICBtb2RlOiBcInBheW1lbnRcIixcbiAgICBzdWNjZXNzX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vc3VjY2Vzc2AsXG4gICAgY2FuY2VsX3VybDogYCR7cHJvY2Vzcy5lbnYuSE9TVH0vY2hlY2tvdXRgLFxuICAgIG1ldGFkYXRhOiB7XG4gICAgICBlbWFpbCxcbiAgICAgIGltYWdlczogSlNPTi5zdHJpbmdpZnkoaXRlbXMubWFwKChpdGVtKSA9PiBpdGVtLmltYWdlKSksXG4gICAgfSxcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpZDogc2Vzc2lvbi5pZCB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/create-checkout-session.js\n");

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