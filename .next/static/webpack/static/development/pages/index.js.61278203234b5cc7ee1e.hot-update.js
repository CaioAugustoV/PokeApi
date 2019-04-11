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
        className: "jsx-3456003143" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "type one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "type two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "type three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "main-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "main-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "itens",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "alto-falante",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "voice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3456003143" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "button-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3456003143" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "button-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "button-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3456003143" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3456003143" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "main-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "lineOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "changeImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "imageLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "imageRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "lineTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "buttonOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3456003143" + " " + "buttonTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3456003143",
        __self: this
      }, ".main.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-3456003143{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3456003143 .left.jsx-3456003143{height:100%;width:48%;background:#e84848;border:10px solid #4d4d4d;border-radius:22px 22px 0 0;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#4d4d4d;border-radius:22px 22px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:80%;width:100%;background:#e84848;border-radius:20px 20px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .loading.jsx-3456003143{width:40px;background:#23b1c7;height:40px;border-radius:50%;border:2px solid #f0f4f5;margin-left:4%;margin-top:3%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .types.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:1%;margin-top:3%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .types.jsx-3456003143 .type.jsx-3456003143{width:15px;height:15px;border-radius:50%;border:2px solid #000;margin:0 4px;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .types.jsx-3456003143 .one.jsx-3456003143{background:#22b598;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .types.jsx-3456003143 .two.jsx-3456003143{background:#fcee6b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .header.jsx-3456003143 .border.jsx-3456003143 .types.jsx-3456003143 .three.jsx-3456003143{background:#e8484a;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143{width:90%;height:78%;margin-left:2%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .main-complement.jsx-3456003143{background:#4d4d4d;position:absolute;width:50%;height:10.2%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);right:0;top:-10%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143{width:96%;height:97.5%;margin-left:2%;background:#e84848;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .border-complement.jsx-3456003143{background:#e84848;position:absolute;width:50%;height:11%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);right:0;top:-10%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#4d4d4d;height:40%;width:80%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143{background:#e6e6e6;height:94%;width:95%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .screen.jsx-3456003143{background:#4d4d4d;width:80%;height:75%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .camera.jsx-3456003143{position:absolute;top:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .camera.jsx-3456003143 .item.jsx-3456003143{background:#dfdfdf;width:10px;height:10px;border-radius:50%;border:1px solid #4d4d4d;margin:0 25px;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .itens.jsx-3456003143{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;bottom:0;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .itens.jsx-3456003143 .button.jsx-3456003143{background:#e84848;width:1vw;height:1vw;border-radius:50%;border:1px solid #4d4d4d;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .main-screen.jsx-3456003143 .border-screen.jsx-3456003143 .itens.jsx-3456003143 .alto-falante.jsx-3456003143 .saida.jsx-3456003143{width:2vw;height:0.1vw;background:#4d4d4d;border-radius:50%;margin:3px 0;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .voice.jsx-3456003143{background:#22b598;width:8vw;height:3vw;border:3px solid #444d4c;border-radius:15px;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .reset.jsx-3456003143{background:#4d4d4d;width:3vw;height:3vw;border-radius:50%;border:3px solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .vertical.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .top.jsx-3456003143{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 6px 0 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:0 solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .top.jsx-3456003143 .arrow.jsx-3456003143{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .bottom.jsx-3456003143{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 6px 6px;border-top:0 solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .bottom.jsx-3456003143 .arrow.jsx-3456003143{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .button-center.jsx-3456003143{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #666666;border-right:1px solid #666666;border-bottom:1px solid #666666;border-left:1px solid #666666;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .button-center.jsx-3456003143 .icon.jsx-3456003143{height:15px;width:15px;background:#656565;border-radius:50%;border:1px solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .button-left.jsx-3456003143{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 0 0 6px;border-top:1px solid #4b4b4b;border-right:0 solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .button-left.jsx-3456003143 .arrow.jsx-3456003143{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .directions.jsx-3456003143 .button-right.jsx-3456003143{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 6px 6px 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:0 solid #4b4b4b;}.pokedex.jsx-3456003143 .left.jsx-3456003143 .main-left.jsx-3456003143 .border.jsx-3456003143 .buttons.jsx-3456003143 .arrow.jsx-3456003143{width:15px;}.pokedex.jsx-3456003143 .center.jsx-3456003143{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-3456003143 .right.jsx-3456003143{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143{width:86%;height:84%;margin-right:4%;margin-bottom:4%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .main-complement.jsx-3456003143{-webkit-clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#4d4d4d;height:14%;width:42%;position:absolute;top:-13%;left:0;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143{background:#e84848;width:95%;height:96%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .border-complement.jsx-3456003143{-webkit-clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#e84848;height:13%;width:38%;position:absolute;left:2.5%;top:-10%;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .screen.jsx-3456003143{width:89%;height:49%;background:#666666;border:4px solid #4d4d4d;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143{width:90%;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143 .changeImage.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143 .changeImage.jsx-3456003143 div.jsx-3456003143{height:3vw;width:4vw;background:#e6e6e6;border:2px solid #4d4d4d;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143 .changeImage.jsx-3456003143 .imageLeft.jsx-3456003143{border-radius:8px 0 0 8px;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143 .changeImage.jsx-3456003143 .imageRight.jsx-3456003143{border-radius:0 8px 8px 0;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineOne.jsx-3456003143 .reset.jsx-3456003143{height:3vw;width:3vw;background:#fcee6b;border-radius:50%;border:2px solid #4d4d4d;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineTwo.jsx-3456003143{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineTwo.jsx-3456003143 .buttonOne.jsx-3456003143{height:3vw;width:10vw;background:#666666;border-radius:8px;border:2px solid #4d4d4d;}.pokedex.jsx-3456003143 .right.jsx-3456003143 .border.jsx-3456003143 .main-right.jsx-3456003143 .border-right.jsx-3456003143 .buttons.jsx-3456003143 .lineTwo.jsx-3456003143 .buttonTwo.jsx-3456003143{height:3vw;width:8vw;background:#666666;border-radius:8px;border:2px solid #4d4d4d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSG9CLEFBRzBCLEFBT0QsQUFRQSxBQU9ELEFBVUUsQUFVRixBQVNFLEFBTUYsQUFPUSxBQUdBLEFBR0EsQUFHVCxBQVNTLEFBU1QsQUFXUyxBQVVOLEFBU00sQUFVQSxBQUtELEFBTUMsQUFRRCxBQVNDLEFBUVQsQUFPRyxBQU9NLEFBT0EsQUFPTixBQU1BLEFBSU0sQUFhTSxBQUdOLEFBYUssQUFHTCxBQVlQLEFBT08sQUFhTSxBQUdOLEFBY1IsQUFHQSxBQVFBLEFBVUUsQUFTSCxBQVc2RCxBQVNwRCxBQVMrQyxBQVN4RCxBQU1BLEFBR0csQUFNQSxBQUlGLEFBTWUsQUFHQSxBQUdmLEFBT0UsQUFNRixBQU9BLFVBM1VBLEFBa0JFLEFBNEVBLEFBcUpGLEFBc0NBLEFBTWIsQ0FsVmEsQUFvQlEsQUFlUCxBQXFPZCxBQUdXLEFBUUMsQUE0RUEsQUFZQSxBQWFDLEFBT0QsQ0E5WUMsQUFRRCxBQTBPQyxDQTBEQSxLQTNLSixBQWNJLENBdEZiLEFBR0EsQUFHQSxBQVlvQixBQW9CQSxBQW1CUCxBQVVELEFBV0MsQUFpQkQsQUFzQkEsQUFPQSxBQWlCQSxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxBQWdFQSxDQTlDUyxDQXhOSixBQWdPRixBQW1CRyxBQXNDRyxBQW1CQSxBQVlBLEFBb0JBLENBdFlBLEFBT04sQUF3WE0sQ0F2WU4sQUFrREssQUFrQ0gsQUE0RUksQUFrRkEsQ0EwRCtELENBM0tyRSxDQWtQZixBQUdBLEdBMVBhLEFBbUJFLEFBU0YsQUFzQkEsQUFPQSxBQWlCQSxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxBQWdFQSxDQXRTQyxBQStFRixBQXFCRSxNQXBFTyxDQVFULEFBb0JBLEFBdU5PLENBak9FLENBc01PLENBeEs2QixBQVV6RCxBQTRCb0IsQUFzQk8sQUFPUCxBQWlCTCxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxBQWdFQSxBQWtCWSxBQW1CQSxBQVlQLEFBb0JBLENBdFlRLEFBMENKLEFBcVZKLENBcFdBLEFBb0dBLEFBeUJBLEFBa0ZBLEtBdktMLEFBb0JGLE9BdU5RLENBblBELEVBa0JBLENBV3dELEFBeURqRCxBQTZCQSxBQXFNQSxBQW9CQSxDQVBBLENBcFdBLEFBd0NpRCxBQTREakQsQUF5QlosQUFrRlksR0FoTVosRUE0SE0sQUE0R0QsQUFpRXBCLEFBbUJBLEVBdFc4QixNQTJEZixBQThGZixBQXFKb0IsQ0FoVUMsQUFnQ0EsQUFtQkEsQUE2REEsQUE4REEsQUFxQkcsQUFNSCxBQWtLQSxBQU1BLEFBdUJBLENBelNOLENBbENmLE9Bc0dBLEFBNkJBLEFBcUdZLEFBZ0daLEFBb0JBLENBaE9BLEFBaURBLEFBd0tBLENBcFdpQixBQW9HRCxBQTJHaEIsRUFuQ0EsQUFtREEsSUFvRGUsRUEzQmYsRUFuUkEsQUF3UnVCLENBblJFLENBZkYsRUFpSUYsQUFTckIsQ0FwR2dCLEdBeUdLLFdBeEdyQixBQWdLcUIsQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsQUFnRUcsMEJBWkgsQUFrQkEsR0F4VEksQUFtQlIsQUEySEksQUEyQnJCLEFBd0tBLEFBdUJxQixJQTNUQSxFQWtCRyxHQW9HSCxNQS9JTCxBQXVFRCxDQTRNRixBQWtCQSxNQXhCUSxFQWpVSSxBQWdIQSxBQTJQTyxDQWpPaEMsRUE4TFksQUFrQkEsRUFyU1osQUFtR3FCLFFBaUxELEFBa0JBLFlBUkMsSUF4Q00sQUFTTixFQTNTSSxBQWlVZCxBQWtCQyxPQXBVaUIsRUF3TEosQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsQUF3RGhCLENBa0JFLE1BcFBELEFBbU9WLENBdkJlLENBaE9MLENBeVFWLEtBcFBXLEVBcEJBLEdBVVUsSUFXckIsQ0FpQnFCLENBckNyQixHQXdGK0IsQUEwTkMsSUEzVGhDLEtBc0h5QixPQW5LWixNQWlTWSxLQWhTWixFQXVIa0IsQ0F4SmhCLEFBZ0hNLFFBOUVBLEtBakNQLEdBMFdELEdBMVBBLEFBa09rQixJQTlCUixFQW5UdkIsRUFpQzhCLEFBd1FULEFBaUVyQixHQTFQWSxDQXpHUSxTQTBHcUMsQUE2RjdCLEFBZ0JBLEFBZ0JHLEFBbUJILEFBZ0JBLElBM1BQLEVBb1JPLEdBbFM1QixLQXNGK0IsQ0E1RHNELElBd0Y1RCxJQW5HSyxHQXdMQyxBQWdCRixBQW1DRSxBQWdCQSxHQW5DRSxHQTREMEQsTUF6RzNGLE9BcU1BLE1BL1c0RSxBQXdTNUUsRUFuSmEsQUFtRG9CLEVBaEJBLEFBbURGLEFBZ0JFLEtBbkNDLElBbEVsQyxrQkF2QlcsRUEwRXVCLEFBbUNBLEFBZ0RQLEVBbkdLLEFBbUVFLEtBNUhsQyxDQXlGZ0MsVUFpR2hDLGNBaElnQyxBQWdCQSxBQW1DQSxFQW5KaEMsQUFTb0IsQUEwSlUsSUFuQzlCLGNBdEhBLENBN0JBLFNBb0hBLEFBZ0JBLEFBbUNBLEFBZ0JBLDZCQW5QQSxNQWtSQSx1QkFUQSxHQW5SQSIsImZpbGUiOiIvaG9tZS9jYWlvYXVndXN0by9HaXRodWIvUG9rZUFwaS9jb21wb21lbnRzL3Bva2VkZXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb2tlbW9uOiBbXSxcbiAgICB9XG4gIH1cbiAgXG4gIGdldFBva2Vtb24gPSAoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vMS9cIilcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbiggKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2tlbW9uOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBva2Vtb24pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgIHsvKiBIRUFERVItTEVGVCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIG9uZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIHR3b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIHRocmVlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogTUFJTi1MRUZUICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbXBsZW1lbnRcIi8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdG8tZmFsYW50ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2ljZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3dcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbXBsZW1lbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VJbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlTGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlUmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVR3b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25PbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uVHdvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXh7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwdmg7XG4gICAgICAgICAgICB3aWR0aDogNjB2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnR7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweCAyMnB4IDAgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlcntcbiAgICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjJweCAyMnB4IDAgMDtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsNjglIDAsMTAwJSAwLDEwMCUgNTAlLDY4JSA1MCUsNTclIDkyJSwwIDkyJSwwIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXJ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNjglIDAsIDEwMCUgMCwgMTAwJSA1MCUsIDY1JSA1MCUsIDU1JSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAubG9hZGluZ3tcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIzYjFjNztcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMGY0ZjU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnR5cGV7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVzIC5vbmV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjJiNTk4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVzIC50d297XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmNlZTZiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVzIC50aHJlZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NGE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnR7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3OCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLm1haW4tY29tcGxlbWVudHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMC4yJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsMTAwJSAwLDEwMCUgMTAwJSw3NSUgMTAwJSwyNSUgMTAwJSwwIDIyNSUsNTAlIDApO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IC0xMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlcntcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDk3LjUlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJvcmRlci1jb21wbGVtZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDExJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigxMDAlIDAsMTAwJSAwLDEwMCUgMTAwJSw3NSUgMTAwJSwyNSUgMTAwJSwwIDIyNSUsNTUlIDApO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IC0xMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwxMDAlIDAsMTAwJSAxMDAlLDEwJSAxMDAlLDAgODglKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICAgICAgICBoZWlnaHQ6IDk0JTtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAlIDEwMCUsMCA4OCUpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuc2NyZWVue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuY2FtZXJhe1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5jYW1lcmEgLml0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5ze1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnMgLmJ1dHRvbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICB3aWR0aDogMXZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAxdnc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVucyAuYWx0by1mYWxhbnRle31cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVucyAuYWx0by1mYWxhbnRlIC5zYWlkYXtcbiAgICAgICAgICAgIHdpZHRoOiAydnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDAuMXZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogM3B4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAudm9pY2V7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjJiNTk4O1xuICAgICAgICAgICAgd2lkdGg6IDh2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQ0NGQ0YztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAucmVzZXR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25ze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAudmVydGljYWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC50b3B7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLnRvcCAuYXJyb3d7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJvdHRvbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDZweCA2cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYm90dG9tIC5hcnJvd3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tY2VudGVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tY2VudGVyIC5pY29ue1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjU2NTY1O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tbGVmdHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDAgMCA2cHg7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWxlZnQgLmFycm93e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tcmlnaHR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNnB4IDZweCAwO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1yaWdodCAuYXJyb3d7fVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuYXJyb3d7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmNlbnRlcntcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgd2lkdGg6IDYlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0e1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICB3aWR0aDogNDglO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA0OSUgMTAlLCAxMDAlIDEwJSwgMTAwJSAxMDAlLCA3MCUgMTAwJSwgMzAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDk5LjklO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMjYlIDAlLDQ3JSAxMSUsMTAwJSAxMSUsMTAwJSAxMDAlLDcwJSAxMDAlLDMwJSAxMDAlLDAgMTAwJSwwIDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodHtcbiAgICAgICAgICAgIHdpZHRoOiA4NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDg0JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAubWFpbi1jb21wbGVtZW50e1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDM1JSAwJSwgMTAwJSAxMDAlLCAxMDAlIDEwMCUsIDUwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNCU7XG4gICAgICAgICAgICB3aWR0aDogNDIlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMTMlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5NiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYm9yZGVyLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzMlIDAlLDEwMCUgMTAwJSwxMDAlIDEwMCUsNTAlIDEwMCUsMCAxMDAlLDAgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMyU7XG4gICAgICAgICAgICB3aWR0aDogMzglO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMi41JTtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuc2NyZWVue1xuICAgICAgICAgICAgd2lkdGg6IDg5JTtcbiAgICAgICAgICAgIGhlaWdodDogNDklO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHQgLmJ1dHRvbnN7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZU9uZSAuY2hhbmdlSW1hZ2V7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZU9uZSAuY2hhbmdlSW1hZ2UgZGl2e1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICB3aWR0aDogNHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHQgLmJ1dHRvbnMgLmxpbmVPbmUgLmNoYW5nZUltYWdlIC5pbWFnZUxlZnR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggMCAwIDhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZU9uZSAuY2hhbmdlSW1hZ2UgLmltYWdlUmlnaHR7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhweCA4cHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZU9uZSAucmVzZXR7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmNlZTZiO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZVR3b3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZVR3byAuYnV0dG9uT25le1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICB3aWR0aDogMTB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lVHdvIC5idXR0b25Ud297XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIHdpZHRoOiA4dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.61278203234b5cc7ee1e.hot-update.js.map