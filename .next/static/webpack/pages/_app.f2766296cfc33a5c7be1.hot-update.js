webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/component/header/styles.ts":
/*!****************************************!*\
  !*** ./src/component/header/styles.ts ***!
  \****************************************/
/*! exports provided: Container, Navigation, SideNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNav", function() { return SideNav; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].header`
  position: relative;

  @media (min-width: 1024px) {
    
    margin-left: 40%;
  }
`;
const SideNav = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  height: 100vh;
  border: 5px solid red;
  transition: ${props => props.theme.speed500}ms ${props => props.theme.transitCubeBezier};
  transform: translateX(100%);
  opacity: 0;
  z-index: 10;
  background: ${props => props.theme.white};
`;
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].nav`
  position: relative;

  ul {

    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0.5rem 0;

    li:not(.secondary-menu) {

      padding: 1rem;
    }

    li.secondary-menu {}

    * {

      text-decoration: none;
      color: ${props => props.theme.secondaryColor};
      font-size: 0.9375rem;
      display: block;
    }

    li .menu-label {

      position: relative;
      display: block;
      cursor: pointer;
      width: ${props => props.theme.menuWidth + 10}px;
      height: ${props => props.theme.menuWidth}px;

      span {

        background: ${props => props.theme.secondaryColor};
        width: ${props => props.theme.menuWidth}px;
        height: 3px;
        display: block;
        border-radius: 15px;
        transition: transform ${props => props.theme.speed800 + 'ms ' + props.theme.transitCubeBezier};
        position: absolute;
        top: 50%;
        transform: translateY(-50%);

        &::before, &::after {

          content: '';
          background-color: ${props => props.theme.secondaryColor};
          width: 100%;
          height: inherit;
          position: absolute;
          display: block;
          left: 0;
          border-radius: 15px;
          transition: transform ${props => props.theme.speed800 + 'ms ' + props.theme.transitCubeBezier};
        }

        &::before {

          top: -7px;
        }

        &::after {

          top: 7px;
        }
      }
    }
  }
`;


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIlNpZGVOYXYiLCJhc2lkZSIsInByb3BzIiwidGhlbWUiLCJzcGVlZDUwMCIsInRyYW5zaXRDdWJlQmV6aWVyIiwid2hpdGUiLCJOYXZpZ2F0aW9uIiwibmF2Iiwic2Vjb25kYXJ5Q29sb3IiLCJtZW51V2lkdGgiLCJzcGVlZDgwMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7Ozs7OztDQUFoQztBQVNBLE1BQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csS0FBTTs7Ozs7OztnQkFPYkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBUyxNQUFLRixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBa0I7Ozs7Z0JBSTFFSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUFNO0NBWDNDO0FBY0EsTUFBTUMsVUFBVSxHQUFHVCx5REFBTSxDQUFDVSxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBc0JmTixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTSxjQUFlOzs7Ozs7Ozs7O2VBVXBDUCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxTQUFaLEdBQXdCLEVBQUc7Z0JBQ25DUixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxTQUFVOzs7O3NCQUl6QlIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sY0FBZTtpQkFDekNQLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFNBQVU7Ozs7Z0NBSWhCUixLQUFLLElBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxRQUFaLEdBQXVCLEtBQXZCLEdBQStCVCxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQW1COzs7Ozs7Ozs4QkFRMUVILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGNBQWU7Ozs7Ozs7a0NBT2hDUCxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxRQUFaLEdBQXVCLEtBQXZCLEdBQStCVCxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Q0F6RDFHO0FBNEVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZjI3NjYyOTZjZmMzM2E1YzdiZTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlTmF2ID0gc3R5bGVkLmFzaWRlYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbiAgdHJhbnNpdGlvbjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zcGVlZDUwMH1tcyAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRyYW5zaXRDdWJlQmV6aWVyfTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLndoaXRlfTtcclxuYDtcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSBzdHlsZWQubmF2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgdWwge1xyXG5cclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG5cclxuICAgIGxpOm5vdCguc2Vjb25kYXJ5LW1lbnUpIHtcclxuXHJcbiAgICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgbGkuc2Vjb25kYXJ5LW1lbnUge31cclxuXHJcbiAgICAqIHtcclxuXHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcblxyXG4gICAgbGkgLm1lbnUtbGFiZWwge1xyXG5cclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tZW51V2lkdGggKyAxMH1weDtcclxuICAgICAgaGVpZ2h0OiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1lbnVXaWR0aH1weDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUNvbG9yfTtcclxuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tZW51V2lkdGh9cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuc3BlZWQ4MDAgKyAnbXMgJyArIHByb3BzLnRoZW1lLnRyYW5zaXRDdWJlQmV6aWVyKX07XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuXHJcbiAgICAgICAgJjo6YmVmb3JlLCAmOjphZnRlciB7XHJcblxyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUNvbG9yfTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke3Byb3BzID0+IChwcm9wcy50aGVtZS5zcGVlZDgwMCArICdtcyAnICsgcHJvcHMudGhlbWUudHJhbnNpdEN1YmVCZXppZXIpfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSB7XHJcblxyXG4gICAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG5cclxuICAgICAgICAgIHRvcDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcblxyXG5cclxuZXhwb3J0IHtDb250YWluZXIsIE5hdmlnYXRpb24sIFNpZGVOYXZ9OyJdLCJzb3VyY2VSb290IjoiIn0=