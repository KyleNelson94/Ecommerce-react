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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIlNpZGVOYXYiLCJhc2lkZSIsInByb3BzIiwidGhlbWUiLCJzcGVlZDUwMCIsInRyYW5zaXRDdWJlQmV6aWVyIiwiTmF2aWdhdGlvbiIsIm5hdiIsInNlY29uZGFyeUNvbG9yIiwibWVudVdpZHRoIiwic3BlZWQ4MDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQU87Ozs7Ozs7Q0FBaEM7QUFTQSxNQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLEtBQU07Ozs7Ozs7Z0JBT2JDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLFFBQVMsTUFBS0YsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsaUJBQWtCOzs7Q0FQMUY7QUFZQSxNQUFNQyxVQUFVLEdBQUdSLHlEQUFNLENBQUNTLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFzQmZMLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGNBQWU7Ozs7Ozs7Ozs7ZUFVcENOLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFNBQVosR0FBd0IsRUFBRztnQkFDbkNQLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlNLFNBQVU7Ozs7c0JBSXpCUCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxjQUFlO2lCQUN6Q04sS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU0sU0FBVTs7OztnQ0FJaEJQLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JSLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBbUI7Ozs7Ozs7OzhCQVExRUgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUssY0FBZTs7Ozs7OztrQ0FPaENOLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlPLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JSLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztDQXpEMUc7QUE0RUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wN2YyNDhhMzEyZDcwYzY1ODhhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNpZGVOYXYgPSBzdHlsZWQuYXNpZGVgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIHJlZDtcclxuICB0cmFuc2l0aW9uOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNwZWVkNTAwfW1zICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudHJhbnNpdEN1YmVCZXppZXJ9O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICBvcGFjaXR5OiAwO1xyXG5gO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbiA9IHN0eWxlZC5uYXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICB1bCB7XHJcblxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcGFkZGluZzogMC41cmVtIDA7XHJcblxyXG4gICAgbGk6bm90KC5zZWNvbmRhcnktbWVudSkge1xyXG5cclxuICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBsaS5zZWNvbmRhcnktbWVudSB7fVxyXG5cclxuICAgICoge1xyXG5cclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICBsaSAubWVudS1sYWJlbCB7XHJcblxyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1lbnVXaWR0aCArIDEwfXB4O1xyXG4gICAgICBoZWlnaHQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRofXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLm1lbnVXaWR0aH1weDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAke3Byb3BzID0+IChwcm9wcy50aGVtZS5zcGVlZDgwMCArICdtcyAnICsgcHJvcHMudGhlbWUudHJhbnNpdEN1YmVCZXppZXIpfTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG5cclxuICAgICAgICAmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2Vjb25kYXJ5Q29sb3J9O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLnNwZWVkODAwICsgJ21zICcgKyBwcm9wcy50aGVtZS50cmFuc2l0Q3ViZUJlemllcil9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjo6YmVmb3JlIHtcclxuXHJcbiAgICAgICAgICB0b3A6IC03cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcblxyXG4gICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuXHJcblxyXG5leHBvcnQge0NvbnRhaW5lciwgTmF2aWdhdGlvbiwgU2lkZU5hdn07Il0sInNvdXJjZVJvb3QiOiIifQ==