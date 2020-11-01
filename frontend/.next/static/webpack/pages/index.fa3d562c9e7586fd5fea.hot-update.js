webpackHotUpdate_N_E("pages/index",{

/***/ "./src/component/hero/Hero.tsx":
/*!*************************************!*\
  !*** ./src/component/hero/Hero.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\frontend\\src\\component\\hero\\Hero.tsx";


const HeroContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section`
  position: relative;
  width: 100%;
  background-color: ${props => props.theme.primaryColor};
  min-height: 40vh;
  display: flex;
  flex-flow: row wrap;
`;
_c = HeroContainer;
const HeroContentContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  border: 5px solid red;
`;
_c2 = HeroContentContainer;
const HeroImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div`
  position: relative;
  display: block;
  width: 50%;
  height: 100%;
  min-height: 40vh;
  background-color: ${props => props.theme.tertiaryColor};
`;
_c3 = HeroImage;

const Hero = ({
  title,
  btnText,
  btnUrl,
  btnColor
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeroContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeroContentContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(HeroImage, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, undefined);
};

_c4 = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "HeroContainer");
$RefreshReg$(_c2, "HeroContentContainer");
$RefreshReg$(_c3, "HeroImage");
$RefreshReg$(_c4, "Hero");

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

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @component/hero/Hero */ "./src/component/hero/Hero.tsx");


var _jsxFileName = "C:\\Users\\kyle.nelson\\Projects\\React\\design-shop\\frontend\\src\\pages\\index.tsx";


;

const Home = ({
  query
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "Amazon's latest product",
      btnText: "Click here!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined)
  }, void 0, false);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudC9oZXJvL0hlcm8udHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhlcm9Db250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsInByaW1hcnlDb2xvciIsIkhlcm9Db250ZW50Q29udGFpbmVyIiwiZGl2IiwiSGVyb0ltYWdlIiwidGVydGlhcnlDb2xvciIsIkhlcm8iLCJ0aXRsZSIsImJ0blRleHQiLCJidG5VcmwiLCJidG5Db2xvciIsIkhvbWUiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBLE1BQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsT0FBUTtBQUNyQztBQUNBO0FBQ0Esc0JBQXVCQyxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxZQUFjO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLENBUEE7S0FBTUwsYTtBQVNOLE1BQU1NLG9CQUFvQixHQUFHTCx5REFBTSxDQUFDTSxHQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQU5BO01BQU1ELG9CO0FBUU4sTUFBTUUsU0FBUyxHQUFHUCx5REFBTSxDQUFDTSxHQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBdUJKLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlLLGFBQWU7QUFDM0QsQ0FQQTtNQUFNRCxTOztBQVNOLE1BQU1FLElBQUksR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsU0FBVDtBQUFrQkMsUUFBbEI7QUFBMEJDO0FBQTFCLENBQUQsS0FBaUQ7QUFFNUQsc0JBQ0UscUVBQUMsYUFBRDtBQUFBLDRCQUNFLHFFQUFDLG9CQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBTUg7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBVkQ7O01BQU1ELEk7QUFZU0EsbUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREE7QUFDQTtBQUlDOztBQUVELE1BQU1LLElBQUksR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFzQjtBQUNsQyxzQkFDQztBQUFBLDJCQUNDLHFFQUFDLDREQUFEO0FBQU0sV0FBSyxFQUFDLHlCQUFaO0FBQXNDLGFBQU8sRUFBQztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQsbUJBREQ7QUFLQSxDQU5EOztLQUFNRCxJO0FBUVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZhM2Q1NjJjOWU3NTg2ZmQ1ZmVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGJ0blRleHQ/OiBzdHJpbmc7XHJcbiAgYnRuVXJsPzogc3RyaW5nO1xyXG4gIGJ0bkNvbG9yPzogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBIZXJvQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7IHByb3BzID0+IHByb3BzLnRoZW1lLnByaW1hcnlDb2xvciB9O1xyXG4gIG1pbi1oZWlnaHQ6IDQwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5gO1xyXG5cclxuY29uc3QgSGVyb0NvbnRlbnRDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbmA7XHJcblxyXG5jb25zdCBIZXJvSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7IHByb3BzID0+IHByb3BzLnRoZW1lLnRlcnRpYXJ5Q29sb3IgfTtcclxuYDtcclxuXHJcbmNvbnN0IEhlcm8gPSAoeyB0aXRsZSwgYnRuVGV4dCwgYnRuVXJsLCBidG5Db2xvciB9OiBQcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhlcm9Db250YWluZXI+XHJcbiAgICAgIDxIZXJvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgICA8aDE+eyB0aXRsZSB9PC9oMT5cclxuICAgICAgPC9IZXJvQ29udGVudENvbnRhaW5lcj5cclxuICAgICAgPEhlcm9JbWFnZSAvPlxyXG4gICAgPC9IZXJvQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVybyBmcm9tICdAY29tcG9uZW50L2hlcm8vSGVybyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG5cdHF1ZXJ5OiBhbnk7XHJcbn07XHJcblxyXG5jb25zdCBIb21lID0gKHsgcXVlcnkgfSA6UHJvcHMpID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEhlcm8gdGl0bGU9XCJBbWF6b24ncyBsYXRlc3QgcHJvZHVjdFwiIGJ0blRleHQ9XCJDbGljayBoZXJlIVwiIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=