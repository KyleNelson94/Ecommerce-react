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
/* harmony import */ var _sidebar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/index */ "./src/component/sidebar/index.ts");
/* harmony import */ var _utils_styleTheme_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/styleTheme.ts */ "./src/utils/styleTheme.ts");
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
	background: ${props => props.theme.white};
	width: 100%;
	height: 100%;
	min-height: 100vh;
	min-width: calc(100vw - ${props => props.theme.sidebarWidth + 17}px);
	margin-left: ${props => props.theme.sidebarWidth}px;
  
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
const InnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
	position: relative;
	width: 100%;
	height: 100%;
	padding: 2rem 35px 0 70px;
	background: ${props => props.theme.primaryColor};
`;
_c3 = InnerContainer;

function Page({
  children
}) {
  return __jsx(styled_components__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: _utils_styleTheme_ts__WEBPACK_IMPORTED_MODULE_4__["lightTheme"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, __jsx(_utils_styleTheme_ts__WEBPACK_IMPORTED_MODULE_4__["GlobalTheme"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(GridContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, __jsx(_sidebar_index__WEBPACK_IMPORTED_MODULE_3__["Sidebar"], {
    logo: 'null',
    locations: [],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }), __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 11
    }
  }), __jsx(_header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx(InnerContainer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 11
    }
  }, children))));
}

_c4 = Page;
;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "GridContainer");
$RefreshReg$(_c2, "Container");
$RefreshReg$(_c3, "InnerContainer");
$RefreshReg$(_c4, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9wYWdlLnRzeCJdLCJuYW1lcyI6WyJHcmlkQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsInNpZGViYXJXaWR0aCIsIkNvbnRhaW5lciIsIndoaXRlIiwicHJpbWFyeUNvbG9yIiwiSW5uZXJDb250YWluZXIiLCJQYWdlIiwiY2hpbGRyZW4iLCJsaWdodFRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlDO0FBRUQsTUFBTUEsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFJOzs7MkJBR05DLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFlBQWE7OztDQUg3RDtLQUFNTCxhO0FBUU4sTUFBTU0sU0FBUyxHQUFHTCx5REFBTSxDQUFDQyxHQUFJOzs7ZUFHZEMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsS0FBTTs7OzsyQkFJZkosS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBWixHQUEyQixFQUFHO2dCQUNsREYsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsWUFBYTs7Ozs7Ozs7Ozs0QkFVdEJGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlJLFlBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FsQjlEO01BQU1GLFM7QUE2Q04sTUFBTUcsY0FBYyxHQUFHUix5REFBTSxDQUFDQyxHQUFJOzs7OztlQUtuQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUksWUFBYTtDQUxqRDtNQUFNQyxjOztBQVFOLFNBQVNDLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBaUM7QUFDL0IsU0FDRSxNQUFDLCtEQUFEO0FBQWUsU0FBSyxFQUFHQywrREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVMsUUFBSSxFQUFFLE1BQWY7QUFBdUIsYUFBUyxFQUFFLEVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxNQUFFLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsWUFBNUI7QUFBeUMsYUFBUyxFQUFDLFlBQW5EO0FBQWdFLFFBQUksRUFBQyxVQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsY0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFFBREgsQ0FIRixDQUZGLENBRkYsQ0FERjtBQWVEOztNQWhCUUQsSTtBQWdCUjtBQUVjQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA2YjVjODk4N2MwZTc2ZTk4MDhjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4vc2lkZWJhci9pbmRleCc7XHJcbmltcG9ydCB7IEdsb2JhbFRoZW1lLCBsaWdodFRoZW1lIH0gZnJvbSAnQHV0aWxzL3N0eWxlVGhlbWUudHMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogb2JqZWN0O1xyXG59O1xyXG5cclxuY29uc3QgR3JpZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNpZGViYXJXaWR0aH1weCAxZnI7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxuYDtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcblxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLndoaXRlfTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0bWluLXdpZHRoOiBjYWxjKDEwMHZ3IC0gJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zaWRlYmFyV2lkdGggKyAxN31weCk7XHJcblx0bWFyZ2luLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZWJhcldpZHRofXB4O1xyXG4gIFxyXG4gIC5tZW51LWNoZWNrIHtcclxuXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICY6Y2hlY2tlZCB7XHJcblxyXG4gICAgICB+IGhlYWRlciBuYXYgdWwgbGkgLm1lbnUtbGFiZWwgc3BhbiB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUNvbG9yfTtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcblxyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjIwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgfiAuc2xpZGUtbWVudSB7XHJcblxyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5uZXJDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMnJlbSAzNXB4IDAgNzBweDtcclxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlDb2xvcn07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBQYWdlKHtjaGlsZHJlbn06IFByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXsgbGlnaHRUaGVtZSB9PlxyXG4gICAgICA8R2xvYmFsVGhlbWUgLz5cclxuICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgPFNpZGViYXIgbG9nbz17J251bGwnfSBsb2NhdGlvbnM9e1tdfSAvPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8aW5wdXQgaWQ9XCJtZW51LWNoZWNrXCIgbmFtZT1cIm1lbnUtY2hlY2tcIiBjbGFzc05hbWU9XCJtZW51LWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDxJbm5lckNvbnRhaW5lcj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9Jbm5lckNvbnRhaW5lcj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9