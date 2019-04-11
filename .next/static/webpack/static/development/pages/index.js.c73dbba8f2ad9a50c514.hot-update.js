webpackHotUpdate("static/development/pages/index.js",{

/***/ "./compoments/pokedex/compoments/left.js":
false,

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
        className: "jsx-3635266543" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "type one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "type two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "type three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "main-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "main-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "border-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "itens",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "alto-falante",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "voice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3635266543" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "button-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3635266543" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "button-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "button-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3635266543" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3635266543" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3635266543" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3635266543",
        __self: this
      }, ".main.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-3635266543{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3635266543 .left.jsx-3635266543{height:100%;width:48%;background:#e84848;border:10px solid #4d4d4d;border-radius:22px 22px 0 0;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#4d4d4d;border-radius:22px 22px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:80%;width:100%;background:#e84848;border-radius:20px 20px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .loading.jsx-3635266543{width:40px;background:#23b1c7;height:40px;border-radius:50%;border:2px solid #f0f4f5;margin-left:4%;margin-top:3%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .types.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:1%;margin-top:3%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .types.jsx-3635266543 .type.jsx-3635266543{width:15px;height:15px;border-radius:50%;border:2px solid #000;margin:0 4px;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .types.jsx-3635266543 .one.jsx-3635266543{background:#22b598;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .types.jsx-3635266543 .two.jsx-3635266543{background:#fcee6b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .header.jsx-3635266543 .border.jsx-3635266543 .types.jsx-3635266543 .three.jsx-3635266543{background:#e8484a;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543{width:90%;height:78%;margin-left:2%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .main-complement.jsx-3635266543{background:#4d4d4d;position:absolute;width:50%;height:10.2%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);right:0;top:-10%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543{width:96%;height:97.5%;margin-left:2%;background:#e84848;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .border-complement.jsx-3635266543{background:#e84848;position:absolute;width:50%;height:11%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);right:0;top:-10%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#4d4d4d;height:40%;width:80%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543{background:#e6e6e6;height:94%;width:95%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .screen.jsx-3635266543{background:#4d4d4d;width:80%;height:75%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .camera.jsx-3635266543{position:absolute;top:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .camera.jsx-3635266543 .item.jsx-3635266543{background:#dfdfdf;width:10px;height:10px;border-radius:50%;border:1px solid #4d4d4d;margin:0 25px;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .itens.jsx-3635266543{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;bottom:0;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .itens.jsx-3635266543 .button.jsx-3635266543{background:#e84848;width:1vw;height:1vw;border-radius:50%;border:1px solid #4d4d4d;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .main-screen.jsx-3635266543 .border-screen.jsx-3635266543 .itens.jsx-3635266543 .alto-falante.jsx-3635266543 .saida.jsx-3635266543{width:2vw;height:0.1vw;background:#4d4d4d;border-radius:50%;margin:3px 0;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .voice.jsx-3635266543{background:#22b598;width:8vw;height:3vw;border:3px solid #444d4c;border-radius:15px;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .reset.jsx-3635266543{background:#4d4d4d;width:3vw;height:3vw;border-radius:50%;border:3px solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .vertical.jsx-3635266543{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .top.jsx-3635266543{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 6px 0 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:0 solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .top.jsx-3635266543 .arrow.jsx-3635266543{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .bottom.jsx-3635266543{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 6px 6px;border-top:0 solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .bottom.jsx-3635266543 .arrow.jsx-3635266543{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .button-center.jsx-3635266543{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #666666;border-right:1px solid #666666;border-bottom:1px solid #666666;border-left:1px solid #666666;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .button-center.jsx-3635266543 .icon.jsx-3635266543{height:15px;width:15px;background:#656565;border-radius:50%;border:1px solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .button-left.jsx-3635266543{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 0 0 6px;border-top:1px solid #4b4b4b;border-right:0 solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .button-left.jsx-3635266543 .arrow.jsx-3635266543{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .directions.jsx-3635266543 .button-right.jsx-3635266543{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 6px 6px 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:0 solid #4b4b4b;}.pokedex.jsx-3635266543 .left.jsx-3635266543 .main-left.jsx-3635266543 .border.jsx-3635266543 .buttons.jsx-3635266543 .arrow.jsx-3635266543{width:15px;}.pokedex.jsx-3635266543 .center.jsx-3635266543{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-3635266543 .right.jsx-3635266543{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-3635266543 .right.jsx-3635266543 .border.jsx-3635266543{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rm9CLEFBRzBCLEFBT0QsQUFRQSxBQU9ELEFBVUUsQUFVRixBQVNFLEFBTUYsQUFPUSxBQUdBLEFBR0EsQUFHVCxBQVNTLEFBU1QsQUFXUyxBQVVOLEFBU00sQUFVQSxBQUtELEFBTUMsQUFRRCxBQVNDLEFBUVQsQUFPRyxBQU9NLEFBT0EsQUFPTixBQU1BLEFBSU0sQUFhTSxBQUdOLEFBYUssQUFHTCxBQVlQLEFBT08sQUFhTSxBQUdOLEFBY1IsQUFHQSxBQVFBLEFBVUUsVUF6T0YsQUFrQkUsQUE0RUEsQ0FqSkYsQUFvQlEsQUFlUCxBQXFPZCxBQUdXLEFBUUMsQ0FsU0MsQUFRRCxBQTBPQyxDQTBEQSxLQTNLSixBQWNJLENBdEZiLEFBR0EsQUFHQSxBQVlvQixBQW9CQSxBQW1CUCxBQVVELEFBV0MsQUFpQkQsQUFzQkEsQUFPQSxBQWlCQSxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxDQWtCUyxDQXhOSixBQWdPRixDQTFSTSxBQU9OLENBZkEsQUFrREssQUFrQ0gsQUE0RUksQUFrRkEsQ0EwRCtELENBM0tyRSxJQUxGLEFBbUJFLEFBU0YsQUFzQkEsQUFPQSxBQWlCQSxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxDQXRPQyxBQStFRixBQXFCRSxNQXBFTyxDQVFULEFBb0JBLENBVlMsQ0FzTU8sQ0F4SzZCLEFBVXpELEFBNEJvQixBQXNCTyxBQU9QLEFBaUJMLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLENBalFhLEFBMENKLENBZkosQUFvR0EsQUF5QkEsQUFrRkEsS0F2S0wsQUFvQkYsUUE1Qk8sRUFrQkEsQ0FXd0QsQUF5RGpELEFBNkJBLEVBbEpBLEFBd0NpRCxBQTREakQsQUF5QlosQUFrRlksR0FoTVosRUE0SE0sQUE0R0QsRUFsUlUsTUEyRGYsQUE4RmYsQ0EzS3FCLEFBZ0NBLEFBbUJBLEFBNkRBLEFBOERBLEFBcUJHLEFBTUgsQ0ExR04sQ0FsQ2YsT0FzR0EsQUE2QkEsQUFxR1ksQ0E1R1osQUFpREEsQ0E1TGlCLEFBb0dELEFBMkdoQixFQW5DQSxBQW1EQSxNQXlCQSxFQW5SQSxBQXdSdUIsQ0FuUkUsQ0FmRixFQWlJRixBQVNyQixDQXBHZ0IsR0F5R0ssV0F4R3JCLEFBZ0txQixBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSw2QkFsUEksQUFtQlIsQUEySEksQUEyQnJCLElBNUhxQixFQWtCRyxHQW9HSCxNQS9JTCxBQXVFRCxTQTNIVSxBQWdIQSxDQTBCekIsSUFyRkEsQUFtR3FCLHdCQW1KTSxBQVNOLEVBM1NJLE9BZUksRUF3TEosQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsT0ExS2YsQ0E0TVYsQ0FoT1UsTUFxQkMsRUFwQkEsR0FVVSxJQVdyQixDQWlCcUIsQ0FyQ3JCLEdBd0YrQixJQWpHL0IsS0FzSHlCLE9BbktaLFdBQ0EsRUF1SGtCLENBeEpoQixBQWdITSxRQTlFQSxLQWpDUCxNQWdIRCxNQS9HYixFQWlDOEIsQUF3UVQsR0F6TFQsQ0F6R1EsU0EwR3FDLEFBNkY3QixBQWdCQSxBQWdCRyxBQW1CSCxBQWdCQSxJQTNQUCxFQW9STyxHQWxTNUIsS0FzRitCLENBNURzRCxJQXdGNUQsSUFuR0ssR0F3TEMsQUFnQkYsQUFtQ0UsQUFnQkEsR0FuQ0UsR0E0RDBELE1BekczRixhQTFLNEUsRUFxSi9ELEFBbURvQixFQWhCQSxBQW1ERixBQWdCRSxLQW5DQyxJQWxFbEMsa0JBdkJXLEVBMEV1QixBQW1DQSxFQW5ERixBQW1FRSxLQTVIbEMsQ0F5RmdDLHdCQS9CQSxBQWdCQSxBQW1DQSxFQW5KaEMsQUFTb0IsQUEwSlUsSUFuQzlCLGNBdEhBLENBN0JBLFNBb0hBLEFBZ0JBLEFBbUNBLEFBZ0JBLDZCQW5QQSw2QkF5UUEsR0FuUkEiLCJmaWxlIjoiL2hvbWUvY2Fpb2F1Z3VzdG8vR2l0aHViL1Bva2VBcGkvY29tcG9tZW50cy9wb2tlZGV4L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcG9rZW1vbjogW10sXG4gICAgfVxuICB9XG4gIFxuICBnZXRQb2tlbW9uID0gKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLzEvXCIpXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4oIChyZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgcG9rZW1vbjogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5wb2tlbW9uKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2tlZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+XG4gICAgICAgICAgICB7LyogSEVBREVSLUxFRlQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZXNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSBvbmVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSB0d29cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZSB0aHJlZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIE1BSU4tTEVGVCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1sZWZ0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb21wbGVtZW50XCIvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbXBsZW1lbnRcIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbWVyYVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVuc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbHRvLWZhbGFudGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FpZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FpZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FpZGFcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzZXRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm9pY2VcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlyZWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3dcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlcnRpY2FsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3dcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFycm93XCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgLz4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3dcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleHtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSw2OCUgMCwxMDAlIDAsMTAwJSA1MCUsNjglIDUwJSw1NyUgOTIlLDAgOTIlLDAgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA2OCUgMCwgMTAwJSAwLCAxMDAlIDUwJSwgNjUlIDUwJSwgNTUlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC5sb2FkaW5ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjNiMWM3O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YwZjRmNTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAudHlwZXtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLm9uZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmI1OTg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnR3b3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2VlNmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnRocmVle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAubWFpbi1jb21wbGVtZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwLjIlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1MCUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVye1xuICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgIGhlaWdodDogOTcuNSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYm9yZGVyLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTElO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1NSUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAlIDEwMCUsMCA4OCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIGhlaWdodDogOTQlO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMCUgMTAwJSwwIDg4JSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5zY3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5jYW1lcmF7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLmNhbWVyYSAuaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnN7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVucyAuYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHdpZHRoOiAxdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDF2dztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5zIC5hbHRvLWZhbGFudGV7fVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5zIC5hbHRvLWZhbGFudGUgLnNhaWRhe1xuICAgICAgICAgICAgd2lkdGg6IDJ2dztcbiAgICAgICAgICAgIGhlaWdodDogMC4xdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25ze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC52b2ljZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmI1OTg7XG4gICAgICAgICAgICB3aWR0aDogOHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDQ0ZDRjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5yZXNldHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC52ZXJ0aWNhbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLnRvcHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAudG9wIC5hcnJvd3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYm90dG9te1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDAgc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5ib3R0b20gLmFycm93e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1jZW50ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1jZW50ZXIgLmljb257XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NTY1NjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1sZWZ0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggMCAwIDZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tbGVmdCAuYXJyb3d7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1yaWdodHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLXJpZ2h0IC5hcnJvd3t9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5hcnJvd3tcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAuY2VudGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICB3aWR0aDogNiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHR7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDQ5JSAxMCUsIDEwMCUgMTAlLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlcntcbiAgICAgICAgICAgIGhlaWdodDogOTkuOSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyNiUgMCUsNDclIDExJSwxMDAlIDExJSwxMDAlIDEwMCUsNzAlIDEwMCUsMzAlIDEwMCUsMCAxMDAlLDAgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.c73dbba8f2ad9a50c514.hot-update.js.map