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
next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_7___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_6__["Router"].events.on('routeChangeError', error => Object(react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"])(error));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbInRvYXN0IiwiY29uZmlndXJlIiwiZHJhZ2dhYmxlIiwiYXV0b0Nsb3NlIiwiUm91dGVyIiwiZXZlbnRzIiwib24iLCJOUHJvZ3Jlc3MiLCJzdGFydCIsImRvbmUiLCJlcnJvciIsIk15QXBwIiwiQ29tcG9uZW50IiwiYXBvbGxvIiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInF1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQztBQUVEQSxvREFBSyxDQUFDQyxTQUFOLENBQWdCO0FBQ2RDLFdBQVMsRUFBRSxLQURHO0FBRWRDLFdBQVMsRUFBRTtBQUZHLENBQWhCO0FBS0FDLGtEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMsZ0RBQVMsQ0FBQ0MsS0FBVixFQUEzQztBQUNBSixrREFBTSxDQUFDQyxNQUFQLENBQWNDLEVBQWQsQ0FBaUIscUJBQWpCLEVBQXlDLE1BQU1DLGdEQUFTLENBQUNFLElBQVYsRUFBL0M7QUFDQUwsa0RBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFzQ0ksS0FBRCxJQUFXViw0REFBSyxDQUFDVSxLQUFELENBQXJEOztBQUNBLFNBQVNDLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDLFFBQWI7QUFBcUJDO0FBQXJCLENBQWYsRUFBdUQ7QUFFckRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBEQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFaLEVBQWdESixTQUFoRDtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBWixFQUF1REYsU0FBdkQ7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVkscUNBQVosRUFBbURILE1BQW5EO0FBQ0FFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG9EQUFaO0FBQ0EsU0FDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQseUZBQWVGLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREY7QUFLRDs7S0FaUUgsSztBQVlSOztBQUVEQSxLQUFLLENBQUNNLGVBQU4sR0FBd0IsZ0JBQWU7QUFBRUwsV0FBRjtBQUFhTTtBQUFiLENBQWYsRUFBMEM7QUFFaEUsTUFBSUosU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUlGLFNBQVMsQ0FBQ0ssZUFBZCxFQUErQjtBQUM3QkgsYUFBUyxHQUFHLE1BQU1GLFNBQVMsQ0FBQ0ssZUFBVixDQUEwQkMsR0FBMUIsQ0FBbEI7QUFDRCxHQUwrRCxDQU1oRTs7O0FBQ0FKLFdBQVMsR0FBR0ksR0FBRyxDQUFDQyxLQUFoQjtBQUNBLFNBQU87QUFBRUw7QUFBRixHQUFQO0FBQ0QsQ0FURDs7QUFXZUgsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zZjgwZTE5NjNiMjNlNWE4Zjk0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50L3BhZ2UnO1xyXG5pbXBvcnQgJy4uLy4uL3B1YmxpYy9pbmRleC5jc3MnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBOUHJvZ3Jlc3MgZnJvbSAnbnByb2dyZXNzJztcclxuaW1wb3J0ICcuLi8uLi9wdWJsaWMvbnByb2dyZXNzLmNzcyc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgQ29tcG9uZW50OiBhbnk7XHJcbiAgY3R4OiBhbnk7XHJcbiAgYXBvbGxvOiBhbnk7XHJcbiAgcGFnZVByb3BzOiBhbnk7XHJcbn07XHJcblxyXG50b2FzdC5jb25maWd1cmUoe1xyXG4gIGRyYWdnYWJsZTogZmFsc2UsXHJcbiAgYXV0b0Nsb3NlOiA1MDAwXHJcbn0pO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsIChlcnJvcikgPT4gdG9hc3QoZXJyb3IpKTtcclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIGFwb2xsbywgcGFnZVByb3BzIH06UHJvcHMpIHtcclxuXHJcbiAgY29uc29sZS5sb2coJyoqKioqKioqKioqKioqKiAgIEFwcCBDb21wb25lbnQgUmVuZGVyICAqKioqKioqKioqKioqKioqJyk7XHJcbiAgY29uc29sZS5sb2coJ0hlbGxvIENvbXBvbmVudCAtLS0tLS0tLS0tLS0tLS0+JywgQ29tcG9uZW50KTtcclxuICBjb25zb2xlLmxvZygnSGVsbG8gUGFnZSBwcm9wcyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0+JywgcGFnZVByb3BzKTtcclxuICBjb25zb2xlLmxvZygnSGVsbG8gQXBvbGxvIC0tLS0tLS0tLS0tLS0tLS0tLS0tLT4nLCBhcG9sbG8pO1xyXG4gIGNvbnNvbGUubG9nKCcqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKicpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZT5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9QYWdlPlxyXG4gICk7XHJcbn07XHJcblxyXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbih7IENvbXBvbmVudCwgY3R4IH06IFByb3BzKSB7XHJcblxyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICAvLyB0aGlzIGV4cG9zZXMgdGhlIHVybCBwYXJhbXMgdG8gdGhlIHBhZ2UgY29tcG9uZW50IHNvIHdlIGNhbiB1c2UgdGhpbmdzIGxpa2UgaXRlbSBJRCBpbiBvdXIgcXVlcmllc1xyXG4gIHBhZ2VQcm9wcyA9IGN0eC5xdWVyeTtcclxuICByZXR1cm4geyBwYWdlUHJvcHMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwOyJdLCJzb3VyY2VSb290IjoiIn0=