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
      z-index: 9999;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIlNpZGVOYXYiLCJhc2lkZSIsInByb3BzIiwidGhlbWUiLCJzcGVlZDUwMCIsInRyYW5zaXRDdWJlQmV6aWVyIiwid2hpdGUiLCJOYXZpZ2F0aW9uIiwibmF2Iiwic2Vjb25kYXJ5Q29sb3IiLCJtZW51V2lkdGgiLCJzcGVlZDgwMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7Ozs7OztDQUFoQztBQVNBLE1BQU1DLE9BQU8sR0FBR0YseURBQU0sQ0FBQ0csS0FBTTs7Ozs7O2dCQU1iQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxRQUFTLE1BQUtGLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlFLGlCQUFrQjs7OztnQkFJMUVILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlHLEtBQU07Q0FWM0M7QUFhQSxNQUFNQyxVQUFVLEdBQUdULHlEQUFNLENBQUNVLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFzQmZOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGNBQWU7Ozs7Ozs7Ozs7ZUFVcENQLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFNBQVosR0FBd0IsRUFBRztnQkFDbkNSLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFNBQVU7Ozs7O3NCQUt6QlIsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sY0FBZTtpQkFDekNQLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFNBQVU7Ozs7Z0NBSWhCUixLQUFLLElBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxRQUFaLEdBQXVCLEtBQXZCLEdBQStCVCxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQW1COzs7Ozs7Ozs4QkFRMUVILEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLGNBQWU7Ozs7Ozs7a0NBT2hDUCxLQUFLLElBQUtBLEtBQUssQ0FBQ0MsS0FBTixDQUFZUSxRQUFaLEdBQXVCLEtBQXZCLEdBQStCVCxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7Q0ExRDFHO0FBNkVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDZjMDI3OTUzMmYwNDVjYzcwOWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBTaWRlTmF2ID0gc3R5bGVkLmFzaWRlYFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNwZWVkNTAwfW1zICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdEN1YmVCZXppZXJ9O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUud2hpdGV9O1xyXG5gO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB1bCB7XHJcblxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcblxyXG4gICAgbGk6bm90KC5zZWNvbmRhcnktbWVudSkge1xyXG5cclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBsaS5zZWNvbmRhcnktbWVudSB7fVxyXG5cclxuICAgICoge1xyXG5cclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBsaSAubWVudS1sYWJlbCB7XHJcblxyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1lbnVXaWR0aCArIDEwfXB4O1xyXG4gICAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRofXB4O1xyXG4gICAgICB6LWluZGV4OiA5OTk5O1xyXG5cclxuICAgICAgc3BhbiB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1lbnVXaWR0aH1weDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke3Byb3BzID0+IChwcm9wcy50aGVtZS5zcGVlZDgwMCArICdtcyAnICsgcHJvcHMudGhlbWUudHJhbnNpdEN1YmVCZXppZXIpfTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLnNwZWVkODAwICsgJ21zICcgKyBwcm9wcy50aGVtZS50cmFuc2l0Q3ViZUJlemllcil9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuXHJcbiAgICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcblxyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQge0NvbnRhaW5lciwgTmF2aWdhdGlvbiwgU2lkZU5hdn07Il0sInNvdXJjZVJvb3QiOiIifQ==