webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/page */ "./src/component/page.tsx");
/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/index.css */ "./public/index.css");
/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_public_index_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/nprogress.css */ "./public/nprogress.css");
/* harmony import */ var _public_nprogress_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_nprogress_css__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\src\\pages\\_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1__["createElement"];








;
react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].configure({
  draggable: false,
  autoClose: 5000
});
next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].events.on('routeChangeDone', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());

function MyApp({
  Component,
  apollo,
  pageProps
}) {
  console.log('***************   App Component Render  ****************');
  console.log('Hello Component --------------->', Component);
  console.log('Hello Page props --------------------->', pageProps);
  console.log('Hello Apollo --------------------->', apollo);
  console.log('**************************************************');
  return __jsx(_component_page__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 5
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  })));
}

_c = MyApp;
;

MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  } // this exposes the url params to the page component so we can use things like item ID in our queries


  pageProps = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbInRvYXN0IiwiY29uZmlndXJlIiwiZHJhZ2dhYmxlIiwiYXV0b0Nsb3NlIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJNeUFwcCIsIkNvbXBvbmVudCIsImFwb2xsbyIsInBhZ2VQcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUM7QUFFREEsb0RBQUssQ0FBQ0MsU0FBTixDQUFnQjtBQUNkQyxXQUFTLEVBQUUsS0FERztBQUVkQyxXQUFTLEVBQUU7QUFGRyxDQUFoQjtBQUtBQyxrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDLE1BQU1DLGdEQUFTLENBQUNDLEtBQVYsRUFBM0M7QUFDQUosa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGlCQUFqQixFQUFxQyxNQUFNQyxnREFBUyxDQUFDRSxJQUFWLEVBQTNDO0FBQ0FMLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsZ0RBQVMsQ0FBQ0UsSUFBVixFQUEzQzs7QUFDQSxTQUFTQyxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQyxRQUFiO0FBQXFCQztBQUFyQixDQUFmLEVBQXVEO0FBRXJEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSwwREFBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWixFQUFnREosU0FBaEQ7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVkseUNBQVosRUFBdURGLFNBQXZEO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHFDQUFaLEVBQW1ESCxNQUFuRDtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvREFBWjtBQUNBLFNBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELHlGQUFlRixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGO0FBS0Q7O0tBWlFILEs7QUFZUjs7QUFFREEsS0FBSyxDQUFDTSxlQUFOLEdBQXdCLGdCQUFlO0FBQUVMLFdBQUY7QUFBYU07QUFBYixDQUFmLEVBQTBDO0FBRWhFLE1BQUlKLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRixTQUFTLENBQUNLLGVBQWQsRUFBK0I7QUFDN0JILGFBQVMsR0FBRyxNQUFNRixTQUFTLENBQUNLLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0QsR0FMK0QsQ0FNaEU7OztBQUNBSixXQUFTLEdBQUdJLEdBQUcsQ0FBQ0MsS0FBaEI7QUFDQSxTQUFPO0FBQUVMO0FBQUYsR0FBUDtBQUNELENBVEQ7O0FBV2VILG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNGUwMTcwMWZkYzUxNDQ4NjY4ZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcyc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudC9wYWdlJztcclxuaW1wb3J0ICcuLi8uLi9wdWJsaWMvaW5kZXguY3NzJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi4vLi4vcHVibGljL25wcm9ncmVzcy5jc3MnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIENvbXBvbmVudDogYW55O1xyXG4gIGN0eDogYW55O1xyXG4gIGFwb2xsbzogYW55O1xyXG4gIHBhZ2VQcm9wczogYW55O1xyXG59O1xyXG5cclxudG9hc3QuY29uZmlndXJlKHtcclxuICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gIGF1dG9DbG9zZTogNTAwMFxyXG59KTtcclxuXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRG9uZScsICAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgYXBvbGxvLCBwYWdlUHJvcHMgfTpQcm9wcykge1xyXG5cclxuICBjb25zb2xlLmxvZygnKioqKioqKioqKioqKioqICAgQXBwIENvbXBvbmVudCBSZW5kZXIgICoqKioqKioqKioqKioqKionKTtcclxuICBjb25zb2xlLmxvZygnSGVsbG8gQ29tcG9uZW50IC0tLS0tLS0tLS0tLS0tLT4nLCBDb21wb25lbnQpO1xyXG4gIGNvbnNvbGUubG9nKCdIZWxsbyBQYWdlIHByb3BzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nLCBwYWdlUHJvcHMpO1xyXG4gIGNvbnNvbGUubG9nKCdIZWxsbyBBcG9sbG8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tPicsIGFwb2xsbyk7XHJcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8L1BhZ2U+XHJcbiAgKTtcclxufTtcclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKHsgQ29tcG9uZW50LCBjdHggfTogUHJvcHMpIHtcclxuXHJcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xyXG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcbiAgICBwYWdlUHJvcHMgPSBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcbiAgfVxyXG4gIC8vIHRoaXMgZXhwb3NlcyB0aGUgdXJsIHBhcmFtcyB0byB0aGUgcGFnZSBjb21wb25lbnQgc28gd2UgY2FuIHVzZSB0aGluZ3MgbGlrZSBpdGVtIElEIGluIG91ciBxdWVyaWVzXHJcbiAgcGFnZVByb3BzID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7Il0sInNvdXJjZVJvb3QiOiIifQ==