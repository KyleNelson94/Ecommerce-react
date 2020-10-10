webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/component/header/Header.tsx":
/*!*****************************************!*\
  !*** ./src/component/header/Header.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\src\\component\\header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].header`
	position: relative;

	@media (min-width: 1024px) {
		
		margin-left: 40%;
	}
`;
_c = Container;
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav`
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

		
		li .menu-check {

			display: none;

			&:checked {

				~ .menu-label span {

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
			}
		}
	}
`;
_c2 = Navigation;
function Header() {
  return __jsx(Container, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 3
    }
  }, __jsx(Navigation, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }
  }, __jsx("ul", {
    id: "secondary-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 5
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "todaysDeals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, "Todays Deals")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "todaysDeals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, "History")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "todaysDeals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }
  }, "Buy Again")), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 6
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "todaysDeals",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }
  }, "Search")), __jsx("li", {
    className: "secondary-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 6
    }
  }, __jsx("input", {
    id: "menu-check",
    name: "menu-check",
    className: "menu-check",
    type: "checkbox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "menu-check",
    id: "menu-label",
    className: "menu-label",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 8
    }
  }))))));
}
_c3 = Header;
;

var _c, _c2, _c3;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Navigation");
$RefreshReg$(_c3, "Header");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZWFkZXIvSGVhZGVyLnRzeCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJOYXZpZ2F0aW9uIiwibmF2IiwicHJvcHMiLCJ0aGVtZSIsInNlY29uZGFyeUNvbG9yIiwibWVudVdpZHRoIiwic3BlZWQ4MDAiLCJ0cmFuc2l0Q3ViZUJlemllciIsInByaW1hcnlDb2xvciIsIkhlYWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0MseURBQU0sQ0FBQ0MsTUFBTzs7Ozs7OztDQUFoQztLQUFNRixTO0FBU04sTUFBTUcsVUFBVSxHQUFHRix5REFBTSxDQUFDRyxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0JsQkMsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsY0FBZTs7Ozs7Ozs7OztZQVVwQ0YsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBWixHQUF3QixFQUFHO2FBQ25DSCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRSxTQUFVOzs7O2tCQUkxQkgsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsY0FBZTthQUN6Q0YsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUUsU0FBVTs7Ozs0QkFJaEJILEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxpQkFBbUI7Ozs7Ozs7O3lCQVEzRUwsS0FBSyxJQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsY0FBZTs7Ozs7Ozs2QkFPaENGLEtBQUssSUFBS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLFFBQVosR0FBdUIsS0FBdkIsR0FBK0JKLEtBQUssQ0FBQ0MsS0FBTixDQUFZSSxpQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF3QjVFTCxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZSyxZQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWpGM0Q7TUFBTVIsVTtBQXVHUyxTQUFTUyxNQUFULEdBQWtCO0FBRWhDLFNBQ0MsTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksTUFBRSxFQUFDLGdCQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREQsQ0FERCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELENBSkQsRUFPQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsQ0FQRCxFQVVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBVkQsRUFhQztBQUFJLGFBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTyxNQUFFLEVBQUMsWUFBVjtBQUF1QixRQUFJLEVBQUMsWUFBNUI7QUFBeUMsYUFBUyxFQUFDLFlBQW5EO0FBQWdFLFFBQUksRUFBQyxVQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFPLFdBQU8sRUFBQyxZQUFmO0FBQTRCLE1BQUUsRUFBQyxZQUEvQjtBQUE0QyxhQUFTLEVBQUMsWUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUZELENBYkQsQ0FERCxDQURELENBREQ7QUEwQkE7TUE1QnVCQSxNO0FBNEJ2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBiYzE0NWUzNjI0YWM2NzUwNWY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmhlYWRlcmBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuXHRcdFxyXG5cdFx0bWFyZ2luLWxlZnQ6IDQwJTtcclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uID0gc3R5bGVkLm5hdmBcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdHVsIHtcclxuXHJcblx0XHRsaXN0LXN0eWxlOiBub25lO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblx0XHRwYWRkaW5nOiAwLjVyZW0gMDtcclxuXHJcblx0XHRsaTpub3QoLnNlY29uZGFyeS1tZW51KSB7XHJcblxyXG5cdFx0XHRwYWRkaW5nOiAxcmVtO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpLnNlY29uZGFyeS1tZW51IHt9XHJcblxyXG5cdFx0KiB7XHJcblxyXG5cdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnNlY29uZGFyeUNvbG9yfTtcclxuXHRcdFx0Zm9udC1zaXplOiAwLjkzNzVyZW07XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxpIC5tZW51LWxhYmVsIHtcclxuXHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0d2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRoICsgMTB9cHg7XHJcblx0XHRcdGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5tZW51V2lkdGh9cHg7XHJcblxyXG5cdFx0XHRzcGFuIHtcclxuXHJcblx0XHRcdFx0YmFja2dyb3VuZDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcblx0XHRcdFx0d2lkdGg6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubWVudVdpZHRofXB4O1xyXG5cdFx0XHRcdGhlaWdodDogM3B4O1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtICR7cHJvcHMgPT4gKHByb3BzLnRoZW1lLnNwZWVkODAwICsgJ21zICcgKyBwcm9wcy50aGVtZS50cmFuc2l0Q3ViZUJlemllcil9O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDUwJTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblxyXG5cdFx0XHRcdCY6OmJlZm9yZSwgJjo6YWZ0ZXIge1xyXG5cclxuXHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zZWNvbmRhcnlDb2xvcn07XHJcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRcdGhlaWdodDogaW5oZXJpdDtcclxuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdFx0bGVmdDogMDtcclxuXHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJHtwcm9wcyA9PiAocHJvcHMudGhlbWUuc3BlZWQ4MDAgKyAnbXMgJyArIHByb3BzLnRoZW1lLnRyYW5zaXRDdWJlQmV6aWVyKX07XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmOjpiZWZvcmUge1xyXG5cclxuXHRcdFx0XHRcdHRvcDogLTdweDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdCY6OmFmdGVyIHtcclxuXHJcblx0XHRcdFx0XHR0b3A6IDdweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRcclxuXHRcdGxpIC5tZW51LWNoZWNrIHtcclxuXHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblxyXG5cdFx0XHQmOmNoZWNrZWQge1xyXG5cclxuXHRcdFx0XHR+IC5tZW51LWxhYmVsIHNwYW4ge1xyXG5cclxuXHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucHJpbWFyeUNvbG9yfTtcclxuXHJcblx0XHRcdFx0XHQmOjpiZWZvcmUsICY6OmFmdGVyIHtcclxuXHJcblx0XHRcdFx0XHRcdHRvcDogMDtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQmOjpiZWZvcmUge1xyXG5cclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTIyMGRlZyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Jjo6YWZ0ZXIge1xyXG5cclxuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMjIwZGVnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q29udGFpbmVyPlxyXG5cdFx0XHQ8TmF2aWdhdGlvbj5cclxuXHRcdFx0XHQ8dWwgaWQ9XCJzZWNvbmRhcnktbWVudVwiPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwidG9kYXlzRGVhbHNcIj5Ub2RheXMgRGVhbHM8L0xpbms+XHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPVwidG9kYXlzRGVhbHNcIj5IaXN0b3J5PC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cInRvZGF5c0RlYWxzXCI+QnV5IEFnYWluPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cInRvZGF5c0RlYWxzXCI+U2VhcmNoPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJzZWNvbmRhcnktbWVudVwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgaWQ9XCJtZW51LWNoZWNrXCIgbmFtZT1cIm1lbnUtY2hlY2tcIiBjbGFzc05hbWU9XCJtZW51LWNoZWNrXCIgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJtZW51LWNoZWNrXCIgaWQ9XCJtZW51LWxhYmVsXCIgY2xhc3NOYW1lPVwibWVudS1sYWJlbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0PC9OYXZpZ2F0aW9uPlxyXG5cdFx0PC9Db250YWluZXI+XHJcblx0KTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9