webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/component/page.tsx":
/*!********************************!*\
  !*** ./src/component/page.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Header */ "./src/component/header/Header.tsx");
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar */ "./src/component/sidebar/sidebar.tsx");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony import */ var _utils_styleTheme_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/styleTheme.ts */ "./src/utils/styleTheme.ts");
var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\src\\component\\page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






;
const GridContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`

  display: grid;
  grid-template-columns: ${props => props.theme.sidebarWidth}px 1fr;
  min-height: 100vh;
  box-sizing: inherit;
`;
_c = GridContainer;
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`

	position: relative;
	background: ${props => props.theme.primaryColor};
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: calc(100vw - ${props => props.theme.sidebarWidth}px);
	margin-left: ${props => props.theme.sidebarWidth}px;
  padding: 0 35px 0 70px;
  
  .menu-check {

    display: none;

    &:checked {

      ~ header nav ul li .menu-label span {

        background-color: ${props => props.theme.primaryColor};

        &::before, &::after {

          top: 0;
        }

        &::before {

          transform: rotate(-220deg);
        }

        &::after {

          transform: rotate(220deg);
        }
      }

      ~ .slide-menu {

        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;
_c2 = Container;

function Page({
  children
}) {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _utils_index__WEBPACK_IMPORTED_MODULE_4__["lightTheme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(_utils_styleTheme_ts__WEBPACK_IMPORTED_MODULE_5__["GlobalTheme"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), __jsx(GridContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }
  }, __jsx(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("input", {
    id: "menu-check",
    name: "menu-check",
    className: "menu-check",
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }), __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), children)));
}

_c3 = Page;
;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c, _c2, _c3;

$RefreshReg$(_c, "GridContainer");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9wYWdlLnRzeCJdLCJuYW1lcyI6WyJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNpZGViYXJXaWR0aCIsIkNvbnRhaW5lciIsInByaW1hcnlDb2xvciIsIlBhZ2UiLCJjaGlsZHJlbiIsImxpZ2h0VGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUM7QUFFRCxNQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7OzsyQkFHTkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBYTs7O0NBSDdEO0tBQU1MLGE7QUFRTixNQUFNTSxTQUFTLEdBQUdMLHlEQUFNLENBQUNDLEdBQUk7OztlQUdkQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxZQUFhOzs7OzJCQUl0QkosS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBYTtnQkFDN0NGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWE7Ozs7Ozs7Ozs7OzRCQVd0QkYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW5COUQ7TUFBTUQsUzs7QUE4Q04sU0FBU0UsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUFpQztBQUMvQixTQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUdDLHVEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLE1BQUUsRUFBQyxZQUFWO0FBQXVCLFFBQUksRUFBQyxZQUE1QjtBQUF5QyxhQUFTLEVBQUMsWUFBbkQ7QUFBZ0UsUUFBSSxFQUFDLFVBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dELFFBSEgsQ0FGRixDQUZGLENBREY7QUFhRDs7TUFkUUQsSTtBQWNSO0FBRWNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjk3YzE1ODczNzg2YzJjNDRhNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwge1RoZW1lUHJvdmlkZXJ9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgU2lkZUJhciBmcm9tICcuL3NpZGViYXIvc2lkZWJhcic7XHJcbmltcG9ydCB7IGxpZ2h0VGhlbWUgfSBmcm9tICcuLi91dGlscy9pbmRleCc7XHJcbmltcG9ydCB7IEdsb2JhbFRoZW1lIH0gZnJvbSAnQHV0aWxzL3N0eWxlVGhlbWUudHMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogb2JqZWN0O1xyXG59O1xyXG5cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGViYXJXaWR0aH1weCAxZnI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlDb2xvcn07XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG5cdG1pbi13aWR0aDogY2FsYygxMDB2dyAtICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofXB4KTtcclxuXHRtYXJnaW4tbGVmdDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlYmFyV2lkdGh9cHg7XHJcbiAgcGFkZGluZzogMCAzNXB4IDAgNzBweDtcclxuICBcclxuICAubWVudS1jaGVjayB7XHJcblxyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAmOmNoZWNrZWQge1xyXG5cclxuICAgICAgfiBoZWFkZXIgbmF2IHVsIGxpIC5tZW51LWxhYmVsIHNwYW4ge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlDb2xvcn07XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG5cclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcblxyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTIyMGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcblxyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIH4gLnNsaWRlLW1lbnUge1xyXG5cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIFBhZ2Uoe2NoaWxkcmVufTogUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyBsaWdodFRoZW1lIH0+XHJcbiAgICAgIDxHbG9iYWxUaGVtZSAvPlxyXG4gICAgICA8R3JpZENvbnRhaW5lcj5cclxuICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWNoZWNrXCIgbmFtZT1cIm1lbnUtY2hlY2tcIiBjbGFzc05hbWU9XCJtZW51LWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9