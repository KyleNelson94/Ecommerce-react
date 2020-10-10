webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/component/page.tsx":
/*!********************************!*\
  !*** ./src/component/page.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Header */ "./src/component/header/Header.tsx");
/* harmony import */ var _sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar */ "./src/component/sidebar/sidebar.tsx");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\src\\component\\page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];





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
`;
_c2 = Container;
class Page extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
      theme: _utils_index__WEBPACK_IMPORTED_MODULE_4__["lightTheme"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx(GridContainer, {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }
    }, __jsx(_sidebar_sidebar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }), this.props.children)));
  }

}
;

var _c, _c2;

$RefreshReg$(_c, "GridContainer");
$RefreshReg$(_c2, "Container");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9wYWdlLnRzeCJdLCJuYW1lcyI6WyJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNpZGViYXJXaWR0aCIsIkNvbnRhaW5lciIsInByaW1hcnlDb2xvciIsIlBhZ2UiLCJSZWFjdCIsInJlbmRlciIsImxpZ2h0VGhlbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7MkJBR05DLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWE7OztDQUg3RDtLQUFNTCxhO0FBUU4sTUFBTU0sU0FBUyxHQUFHTCx5REFBTSxDQUFDQyxHQUFJOzs7ZUFHZEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsWUFBYTs7OzsyQkFJdEJKLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWE7Z0JBQzdDRixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFhOztDQVJsRDtNQUFNQyxTO0FBWVMsTUFBTUUsSUFBTixTQUFtQkMsbURBQW5CLENBQXVDO0FBQ3BEQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUdDLHVEQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxhQUFEO0FBQWUsZUFBUyxFQUFDLEtBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRyxLQUFLUixLQUFMLENBQVdTLFFBRmQsQ0FGRixDQURGLENBREY7QUFXRDs7QUFibUQ7QUFjckQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNTE5NjhiODk0YmNmYTFlYTQ4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkLCB7VGhlbWVQcm92aWRlcn0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBTaWRlQmFyIGZyb20gJy4vc2lkZWJhci9zaWRlYmFyJztcclxuaW1wb3J0IHsgbGlnaHRUaGVtZSB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcclxuXHJcbmNvbnN0IEdyaWRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlYmFyV2lkdGh9cHggMWZyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbmA7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5Q29sb3J9O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRtaW4td2lkdGg6IGNhbGMoMTAwdncgLSAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGViYXJXaWR0aH1weCk7XHJcblx0bWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofXB4O1xyXG5cdHBhZGRpbmc6IDAgMzVweCAwIDcwcHg7XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyBsaWdodFRoZW1lIH0+XHJcbiAgICAgICAgPEdyaWRDb250YWluZXIgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICA8U2lkZUJhciAvPlxyXG4gICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=