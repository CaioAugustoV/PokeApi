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







var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/pokedex/index.js";



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
        className: "jsx-150945124" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "type one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "type two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "type three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "main-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "main-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "border-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "itens",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "alto-falante",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "voice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "button-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "button-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "button-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-150945124" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "150945124",
        __self: this
      }, ".main.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-150945124{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-150945124 .left.jsx-150945124{height:100%;width:48%;background:#e84848;border:10px solid #4d4d4d;border-radius:22px 22px 0 0;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#4d4d4d;border-radius:22px 22px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:80%;width:100%;background:#e84848;border-radius:20px 20px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .loading.jsx-150945124{width:40px;background:#23b1c7;height:40px;border-radius:50%;border:2px solid #f0f4f5;margin-left:4%;margin-top:3%;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .types.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:1%;margin-top:3%;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .types.jsx-150945124 .type.jsx-150945124{width:15px;height:15px;border-radius:50%;border:2px solid #000;margin:0 4px;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .types.jsx-150945124 .one.jsx-150945124{background:#22b598;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .types.jsx-150945124 .two.jsx-150945124{background:#fcee6b;}.pokedex.jsx-150945124 .left.jsx-150945124 .header.jsx-150945124 .border.jsx-150945124 .types.jsx-150945124 .three.jsx-150945124{background:#e8484a;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124{width:90%;height:78%;margin-left:2%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .main-complement.jsx-150945124{background:#4d4d4d;position:absolute;width:50%;height:10.2%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);right:0;top:-10%;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124{width:96%;height:97.5%;margin-left:2%;background:#e84848;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .border-complement.jsx-150945124{background:#e84848;position:absolute;width:50%;height:11%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);right:0;top:-10%;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#4d4d4d;height:40%;width:80%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124{background:#e6e6e6;height:94%;width:95%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .screen.jsx-150945124{background:#4d4d4d;width:80%;height:75%;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .camera.jsx-150945124{position:absolute;top:4%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .camera.jsx-150945124 .item.jsx-150945124{background:#dfdfdf;width:10px;height:10px;border-radius:50%;border:1px solid #4d4d4d;margin:0 25px;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .itens.jsx-150945124{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;bottom:0;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .itens.jsx-150945124 .button.jsx-150945124{background:#e84848;width:20px;height:20px;border-radius:50%;border:1px solid #4d4d4d;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .main-screen.jsx-150945124 .border-screen.jsx-150945124 .itens.jsx-150945124 .alto-falante.jsx-150945124 .saida.jsx-150945124{width:20px;height:2px;background:#4d4d4d;border-radius:50%;border:1px solid #4d4d4d;margin:3px 0;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .voice.jsx-150945124{background:#22b598;width:100px;height:40px;border:3px solid #444d4c;border-radius:15px;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .reset.jsx-150945124{background:#4d4d4d;width:40px;height:40px;border-radius:50%;border:3px solid #444d4c;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .vertical.jsx-150945124{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .top.jsx-150945124{background:#666666;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .bottom.jsx-150945124{background:#666666;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .button-center.jsx-150945124{background:#666666;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .button-center.jsx-150945124 .icon.jsx-150945124{height:15px;width:15px;background:#656565;border-radius:50%;border:1px solid #4b4b4b;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .button-left.jsx-150945124{background:#666666;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .left.jsx-150945124 .main-left.jsx-150945124 .border.jsx-150945124 .buttons.jsx-150945124 .directions.jsx-150945124 .button-right.jsx-150945124{background:#666666;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-150945124 .center.jsx-150945124{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-150945124 .right.jsx-150945124{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-150945124 .right.jsx-150945124 .border.jsx-150945124{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kdmlkYTE0L0RvY3VtZW50cy9naXRodWIvUG9rZUFwaS9jb21wb21lbnRzL3Bva2VkZXgvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZvQixBQUcwQixBQU9ELEFBUUEsQUFPRCxBQVVFLEFBVUYsQUFTRSxBQU1GLEFBT1EsQUFHQSxBQUdBLEFBR1QsQUFTUyxBQVNULEFBV1MsQUFVTixBQVNNLEFBVUEsQUFLRCxBQU1DLEFBUUQsQUFTQyxBQVFSLEFBUUUsQUFPTSxBQU9BLEFBT04sQUFNQSxBQUlNLEFBUUEsQUFRQSxBQVFQLEFBT08sQUFRQSxBQVFSLEFBUUEsQUFVRSxVQXJNRixBQWtCRSxDQXJFRixBQW9CUSxBQWVQLEFBOEdELEFBc0ZGLEFBUUMsQ0E5UEMsQUFRRCxBQXVOQyxDQXlDQSxLQXZJSixBQWNJLENBdEZiLEFBR0EsQUFHQSxBQVlvQixBQW9CQSxBQW1CUCxBQVVELEFBV0MsQUFpQkEsQUF1QkMsQUFPRCxBQWlCQSxBQVFBLEFBUUEsQUFlQSxBQVFBLENBU1EsQ0FwTEosQUE0TEYsQ0F0UE0sQUFPTixBQWlKTSxDQWhLTixBQWtESyxBQWtDSCxBQTJJSSxDQXlDK0QsQ0F2SXJFLElBTEYsQUFtQkUsQ0E1R0QsQUErRUYsQUFxQkUsQUFpQkEsQUE4QkEsQUFpQkEsQUFRQSxBQVFBLEFBZUEsQUFRQSxDQS9EQSxLQTVHTyxDQVFULEFBb0JBLENBVlMsQ0FrS08sQ0FwSTZCLEFBVXpELENBcEg0QixBQTBDSixBQThHSixDQTdIQSxBQW9HQSxBQWlCQSxBQThCQSxBQWlCTCxBQVFBLEFBUUEsQUFRSyxBQU9MLEFBUUEsQ0EvRFksSUFwR1osQUFvQkYsUUE1Qk8sRUFrQkEsQ0FXd0QsQ0FpRWpELENBN0hBLEFBd0NpRCxBQTREakQsQUFpQkEsQUE4QkEsQUF5Q0EsR0E3S1osRUFvTUssRUE5T1UsQ0F1S1QsS0E1R04sQ0E3RU0sQUFnQ0EsQUFtQkEsQUE2REEsQUErREEsQUFxQkcsQUFNSCxDQTNHTixDQWxDZixPQW9NWSxDQXRGRyxDQTdIRSxBQW9HRCxBQWlCaEIsQUE4QkEsQUF5Q0EsRUFoREEsTUF3RUEsRUEvT0EsQUFvUHVCLENBL09FLENBZkYsQUFtS3ZCLEVBbENxQixBQVNyQixDQXBHZ0IsR0F5R0ssV0F4R3JCLEVBaUtxQixBQVFBLEFBUUEsQUFlQSxBQVFBLDJCQXZOSSxBQW1CUixBQTRISSxBQTJCckIsSUE3SHFCLEVBa0JHLEdBcUdILE1BaEpMLEFBdUVELFNBM0hVLEFBZ0hBLENBMEJ6QixJQXJGQSxBQW1HcUIsd0JBK0dNLEFBU04sRUF2UUksT0FlSSxJQTBMOUIsQUFRQSxBQVFBLEFBZUEsQUFRQSxLQWhKVyxDQXdLVixDQTVMVSxNQXFCQyxFQXBCQSxHQVVVLElBV3JCLENBaUJxQixDQXJDckIsR0F5RitCLElBbEcvQixLQXVIeUIsT0FwS1osV0FDQSxFQXVIa0IsQ0F4SmhCLEFBZ0hNLFFBOUVBLEtBakNQLE1BZ0hELE1BL0diLEVBaUM4QixBQW9PVCxHQXJKVCxDQXpHUSxTQTBHcUMsRUE4RnpELEFBUUEsQUFRQSxBQWVBLEFBUUEsRUFoT3FCLEVBZ1BPLEdBOVA1QixLQXNGK0IsQ0E1RHNELElBd0Y1RCxJQW5HSyxTQWdQNkQsTUFwRTNGLGFBM0s0RSxFQXNKL0QsV0FDYixrQkF4QlcsU0FDWCwyQkF0Q0EsQUFTb0Isa0JBQ3BCLENBN0JBLHNDQTVEQSw2QkFxT0EsR0EvT0EiLCJmaWxlIjoiL1VzZXJzL2R2aWRhMTQvRG9jdW1lbnRzL2dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBva2Vtb246IFtdLFxuICAgIH1cbiAgfVxuICBcbiAgZ2V0UG9rZW1vbiA9ICgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8xL1wiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBva2Vtb246IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucG9rZW1vbilcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZWRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgey8qIEhFQURFUi1MRUZUICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgb25lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgdHdvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgdGhyZWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBNQUlOLUxFRlQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1jb21wbGVtZW50XCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1lcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWx0by1mYWxhbnRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2V0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvaWNlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleHtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSw2OCUgMCwxMDAlIDAsMTAwJSA1MCUsNjglIDUwJSw1NyUgOTIlLDAgOTIlLDAgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA2OCUgMCwgMTAwJSAwLCAxMDAlIDUwJSwgNjUlIDUwJSwgNTUlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC5sb2FkaW5ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjNiMWM3O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YwZjRmNTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAudHlwZXtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLm9uZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmI1OTg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnR3b3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2VlNmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnRocmVle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAubWFpbi1jb21wbGVtZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwLjIlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1MCUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVye1xuICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgIGhlaWdodDogOTcuNSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYm9yZGVyLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTElO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1NSUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAlIDEwMCUsMCA4OCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIGhlaWdodDogOTQlO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMCUgMTAwJSwwIDg4JSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5zY3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5jYW1lcmF7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDQlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLmNhbWVyYSAuaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnN7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVucyAuYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnMgLmFsdG8tZmFsYW50ZXt9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnMgLmFsdG8tZmFsYW50ZSAuc2FpZGF7XG4gICAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLnZvaWNle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyYjU5ODtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0NDRkNGM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLnJlc2V0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQ0NGQ0YztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25ze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAudmVydGljYWx7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC50b3B7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYm90dG9te1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1jZW50ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWNlbnRlciAuaWNvbntcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY1NjU2NTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWxlZnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLXJpZ2h0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAuY2VudGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICB3aWR0aDogNiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHR7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDQ5JSAxMCUsIDEwMCUgMTAlLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlcntcbiAgICAgICAgICAgIGhlaWdodDogOTkuOSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyNiUgMCUsNDclIDExJSwxMDAlIDExJSwxMDAlIDEwMCUsNzAlIDEwMCUsMzAlIDEwMCUsMCAxMDAlLDAgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/Users/dvida14/Documents/github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.7e286362b78ebb246835.hot-update.js.map