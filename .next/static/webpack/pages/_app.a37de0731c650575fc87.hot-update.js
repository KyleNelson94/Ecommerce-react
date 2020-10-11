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

  + header nav ul li .menu-label span {

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

  + .slide-menu {

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
  }, __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9wYWdlLnRzeCJdLCJuYW1lcyI6WyJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNpZGViYXJXaWR0aCIsIkNvbnRhaW5lciIsInByaW1hcnlDb2xvciIsIlBhZ2UiLCJjaGlsZHJlbiIsImxpZ2h0VGhlbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUM7QUFFRCxNQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQUk7OzsyQkFHTkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBYTs7O0NBSDdEO0tBQU1MLGE7QUFRTixNQUFNTSxTQUFTLEdBQUdMLHlEQUFNLENBQUNDLEdBQUk7OztlQUdkQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxZQUFhOzs7OzJCQUl0QkosS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBYTtnQkFDN0NGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWE7Ozs7Ozs7Ozs7O3dCQVcxQkYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW5CMUQ7TUFBTUQsUzs7QUE4Q04sU0FBU0UsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUFpQztBQUMvQixTQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUdDLHVEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGFBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVHRCxRQUZILENBRkYsQ0FGRixDQURGO0FBWUQ7O01BYlFELEk7QUFhUjtBQUVjQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmEzN2RlMDczMWM2NTA1NzVmYzg3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFNpZGVCYXIgZnJvbSAnLi9zaWRlYmFyL3NpZGViYXInO1xyXG5pbXBvcnQgeyBsaWdodFRoZW1lIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBHbG9iYWxUaGVtZSB9IGZyb20gJ0B1dGlscy9zdHlsZVRoZW1lLnRzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IG9iamVjdDtcclxufTtcclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlYmFyV2lkdGh9cHggMWZyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5Q29sb3J9O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRtaW4td2lkdGg6IGNhbGMoMTAwdncgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGViYXJXaWR0aH1weCk7XHJcblx0bWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofXB4O1xyXG4gIHBhZGRpbmc6IDAgMzVweCAwIDcwcHg7XHJcbiAgXHJcbiAgLm1lbnUtY2hlY2sge1xyXG5cclxuZGlzcGxheTogbm9uZTtcclxuXHJcbiY6Y2hlY2tlZCB7XHJcblxyXG4gICsgaGVhZGVyIG5hdiB1bCBsaSAubWVudS1sYWJlbCBzcGFuIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlDb2xvcn07XHJcblxyXG4gICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcblxyXG4gICAgICB0b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuXHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMjBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICY6OmFmdGVyIHtcclxuXHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIyMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICArIC5zbGlkZS1tZW51IHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG59XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQYWdlKHtjaGlsZHJlbn06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXsgbGlnaHRUaGVtZSB9PlxyXG4gICAgICA8R2xvYmFsVGhlbWUgLz5cclxuICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgPFNpZGVCYXIgLz5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=