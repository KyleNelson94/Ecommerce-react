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
  box-shadow: 2px 0 15px -1px ${props => props.theme.tertiaryColor};
  padding: 3rem 2rem;

  nav {

    ul {
      list-style: none;

      li {
        a {
          display: block;
          padding: 1rem;
        }
      }
    }
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIvc3R5bGVzLnRzIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImhlYWRlciIsIlNpZGVOYXYiLCJhc2lkZSIsInByb3BzIiwidGhlbWUiLCJzcGVlZDUwMCIsInRyYW5zaXRDdWJlQmV6aWVyIiwid2hpdGUiLCJ0ZXJ0aWFyeUNvbG9yIiwiTmF2aWdhdGlvbiIsIm5hdiIsInNlY29uZGFyeUNvbG9yIiwibWVudVdpZHRoIiwic3BlZWQ4MDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLE1BQU87Ozs7Ozs7Q0FBaEM7QUFTQSxNQUFNQyxPQUFPLEdBQUdGLHlEQUFNLENBQUNHLEtBQU07Ozs7OztnQkFNYkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsUUFBUyxNQUFLRixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBa0I7Ozs7Z0JBSTFFSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxLQUFNO2dDQUNYSixLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxhQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0NBWG5FO0FBNkJBLE1BQU1DLFVBQVUsR0FBR1YseURBQU0sQ0FBQ1csR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQXNCZlAsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sY0FBZTs7Ozs7Ozs7OztlQVVwQ1IsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsU0FBWixHQUF3QixFQUFHO2dCQUNuQ1QsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsU0FBVTs7Ozs7c0JBS3pCVCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZTyxjQUFlO2lCQUN6Q1IsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsU0FBVTs7OztnQ0FJaEJULEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JWLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBbUI7Ozs7Ozs7OzhCQVExRUgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWU8sY0FBZTs7Ozs7OztrQ0FPaENSLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlTLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JWLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxpQkFBbUI7Ozs7Ozs7Ozs7Ozs7OztDQTFEMUc7QUE2RUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42MWJmNDQ1MmY4YzZiNTRmZWRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuaGVhZGVyYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFNpZGVOYXYgPSBzdHlsZWQuYXNpZGVgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRyYW5zaXRpb246ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3BlZWQ1MDB9bXMgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50cmFuc2l0Q3ViZUJlemllcn07XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS53aGl0ZX07XHJcbiAgYm94LXNoYWRvdzogMnB4IDAgMTVweCAtMXB4ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGVydGlhcnlDb2xvcn07XHJcbiAgcGFkZGluZzogM3JlbSAycmVtO1xyXG5cclxuICBuYXYge1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgIGxpIHtcclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gc3R5bGVkLm5hdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIHVsIHtcclxuXHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuXHJcbiAgICBsaTpub3QoLnNlY29uZGFyeS1tZW51KSB7XHJcblxyXG4gICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGxpLnNlY29uZGFyeS1tZW51IHt9XHJcblxyXG4gICAgKiB7XHJcblxyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUNvbG9yfTtcclxuICAgICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGxpIC5tZW51LWxhYmVsIHtcclxuXHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRoICsgMTB9cHg7XHJcbiAgICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tZW51V2lkdGh9cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcblxyXG4gICAgICBzcGFuIHtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcbiAgICAgICAgd2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRofXB4O1xyXG4gICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLnNwZWVkODAwICsgJ21zICcgKyBwcm9wcy50aGVtZS50cmFuc2l0Q3ViZUJlemllcil9O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG4gICAgICAgICY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG5cclxuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuc3BlZWQ4MDAgKyAnbXMgJyArIHByb3BzLnRoZW1lLnRyYW5zaXRDdWJlQmV6aWVyKX07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOjpiZWZvcmUge1xyXG5cclxuICAgICAgICAgIHRvcDogLTdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuXHJcbiAgICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Q29udGFpbmVyLCBOYXZpZ2F0aW9uLCBTaWRlTmF2fTsiXSwic291cmNlUm9vdCI6IiJ9