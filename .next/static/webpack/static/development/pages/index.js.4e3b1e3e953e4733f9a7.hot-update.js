webpackHotUpdate("static/development/pages/index.js",{

/***/ "./compoments/pokedex/index.js":
/*!*************************************!*\
  !*** ./compoments/pokedex/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js";



var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(index, _Component);

  function index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "getPokemon", function () {
      fetch("https://pokeapi.co/api/v2/pokemon/1/").then(function (res) {
        return res.json();
      }).then(function (result) {
        _this.setState({
          pokemon: result
        });
      });
    });

    _this.state = {
      pokemon: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      console.log(this.state.pokemon);
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-800561739" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-800561739" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-800561739" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-800561739" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-800561739" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "800561739",
        __self: this
      }, ".main.jsx-800561739{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-800561739{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-800561739 .center.jsx-800561739{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-800561739 .right.jsx-800561739{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-800561739 .right.jsx-800561739 .border.jsx-800561739{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ29CLEFBRzBCLEFBT0QsQUFTRCxBQVFBLEFBVUUsV0FqQkosQUFRQyxDQWpCQyxDQTJCQSxPQWpCUSxDQVFOLEVBakJBLENBMkJxRSxlQWpCeEQsMEJBQ1IsU0FuQkMsU0FvQlQsVUFDWixFQUt1QixFQWpCQSxzRUFSRSw2QkEwQkUsQUFTTixFQTFCSSxpQkEyQnpCLG1EQW5DZSxhQUNELFlBQ2QsRUF3QnFCLElBakJELGVBa0JRLEdBakI1Qix1QkFrQjJGLDRLQUMzRiIsImZpbGUiOiIvaG9tZS9jYWlvYXVndXN0by9HaXRodWIvUG9rZUFwaS9jb21wb21lbnRzL3Bva2VkZXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb2tlbW9uOiBbXSxcbiAgICB9XG4gIH1cbiAgXG4gIGdldFBva2Vtb24gPSAoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vMS9cIilcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbiggKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2tlbW9uOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBva2Vtb24pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICB7LyogTEVGVCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXh7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgLnBva2VkZXggLmNlbnRlcntcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgd2lkdGg6IDYlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA0OSUgMTAlLCAxMDAlIDEwJSwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDk5LjklO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjYlIDAlLDQ3JSAxMSUsMTAwJSAxMSUsMTAwJSAxMDAlLDcwJSAxMDAlLDMwJSAxMDAlLDAgMTAwJSwwIDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.4e3b1e3e953e4733f9a7.hot-update.js.map