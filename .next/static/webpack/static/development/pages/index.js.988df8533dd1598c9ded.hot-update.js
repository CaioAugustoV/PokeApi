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
        className: "jsx-2164748703" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "type one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "type two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "type three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "main-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "main-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "itens",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "alto-falante",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "voice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-2164748703" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "button-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-2164748703" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "button-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "button-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-2164748703" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-2164748703" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "main-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "lineOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "changeImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "imageLeft",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "imageRight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "lineTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "buttonOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-2164748703" + " " + "buttonTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      })))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2164748703",
        __self: this
      }, ".main.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-2164748703{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-2164748703 .left.jsx-2164748703{height:100%;width:48%;background:#e84848;border:10px solid #4d4d4d;border-radius:22px 22px 0 0;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#4d4d4d;border-radius:22px 22px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:80%;width:100%;background:#e84848;border-radius:20px 20px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .loading.jsx-2164748703{width:40px;background:#23b1c7;height:40px;border-radius:50%;border:2px solid #f0f4f5;margin-left:4%;margin-top:3%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .types.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:1%;margin-top:3%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .types.jsx-2164748703 .type.jsx-2164748703{width:15px;height:15px;border-radius:50%;border:2px solid #000;margin:0 4px;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .types.jsx-2164748703 .one.jsx-2164748703{background:#22b598;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .types.jsx-2164748703 .two.jsx-2164748703{background:#fcee6b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .header.jsx-2164748703 .border.jsx-2164748703 .types.jsx-2164748703 .three.jsx-2164748703{background:#e8484a;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703{width:90%;height:78%;margin-left:2%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .main-complement.jsx-2164748703{background:#4d4d4d;position:absolute;width:50%;height:10.2%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);right:0;top:-10%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703{width:96%;height:97.5%;margin-left:2%;background:#e84848;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .border-complement.jsx-2164748703{background:#e84848;position:absolute;width:50%;height:11%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);right:0;top:-10%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#4d4d4d;height:40%;width:80%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703{background:#e6e6e6;height:94%;width:95%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .screen.jsx-2164748703{background:#4d4d4d;width:80%;height:75%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .camera.jsx-2164748703{position:absolute;top:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .camera.jsx-2164748703 .item.jsx-2164748703{background:#dfdfdf;width:10px;height:10px;border-radius:50%;border:1px solid #4d4d4d;margin:0 25px;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .itens.jsx-2164748703{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;bottom:0;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .itens.jsx-2164748703 .button.jsx-2164748703{background:#e84848;width:1vw;height:1vw;border-radius:50%;border:1px solid #4d4d4d;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .main-screen.jsx-2164748703 .border-screen.jsx-2164748703 .itens.jsx-2164748703 .alto-falante.jsx-2164748703 .saida.jsx-2164748703{width:2vw;height:0.1vw;background:#4d4d4d;border-radius:50%;margin:3px 0;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .voice.jsx-2164748703{background:#22b598;width:8vw;height:3vw;border:3px solid #444d4c;border-radius:15px;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .reset.jsx-2164748703{background:#4d4d4d;width:3vw;height:3vw;border-radius:50%;border:3px solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .vertical.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .top.jsx-2164748703{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 6px 0 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:0 solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .top.jsx-2164748703 .arrow.jsx-2164748703{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .bottom.jsx-2164748703{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 6px 6px;border-top:0 solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .bottom.jsx-2164748703 .arrow.jsx-2164748703{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .button-center.jsx-2164748703{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #666666;border-right:1px solid #666666;border-bottom:1px solid #666666;border-left:1px solid #666666;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .button-center.jsx-2164748703 .icon.jsx-2164748703{height:15px;width:15px;background:#656565;border-radius:50%;border:1px solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .button-left.jsx-2164748703{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 0 0 6px;border-top:1px solid #4b4b4b;border-right:0 solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .button-left.jsx-2164748703 .arrow.jsx-2164748703{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .directions.jsx-2164748703 .button-right.jsx-2164748703{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 6px 6px 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:0 solid #4b4b4b;}.pokedex.jsx-2164748703 .left.jsx-2164748703 .main-left.jsx-2164748703 .border.jsx-2164748703 .buttons.jsx-2164748703 .arrow.jsx-2164748703{width:15px;}.pokedex.jsx-2164748703 .center.jsx-2164748703{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-2164748703 .right.jsx-2164748703{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703{width:86%;height:84%;margin-right:4%;margin-bottom:4%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .main-complement.jsx-2164748703{-webkit-clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#4d4d4d;height:14%;width:42%;position:absolute;top:-13%;left:0;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703{background:#e84848;width:95%;height:96%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .border-complement.jsx-2164748703{-webkit-clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#e84848;height:13%;width:38%;position:absolute;left:2.5%;top:-10%;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .screen.jsx-2164748703{width:89%;height:49%;background:#666666;border:4px solid #4d4d4d;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703{width:100%;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703 .changeImage.jsx-2164748703{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703 .changeImage.jsx-2164748703 div.jsx-2164748703{height:3vw;width:4vw;background:#e6e6e6;border:2px solid #4d4d4d;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703 .changeImage.jsx-2164748703 .imageLeft.jsx-2164748703{border-radius:8px 0 0 8px;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703 .changeImage.jsx-2164748703 .imageRight.jsx-2164748703{border-radius:0 8px 8px 0;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineOne.jsx-2164748703 .reset.jsx-2164748703{height:3vw;width:3vw;background:#fcee6b;border-radius:50%;border:2px solid #4d4d4d;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineTwo.jsx-2164748703 .buttonOne.jsx-2164748703{height:3vw;width:10vw;background:#666666;border-radius:8px;border:2px solid #4d4d4d;}.pokedex.jsx-2164748703 .right.jsx-2164748703 .border.jsx-2164748703 .main-right.jsx-2164748703 .border-right.jsx-2164748703 .buttons.jsx-2164748703 .lineTwo.jsx-2164748703 .buttonTwo.jsx-2164748703{height:3vw;width:8vw;background:#666666;border-radius:8px;border:2px solid #4d4d4d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSG9CLEFBRzBCLEFBT0QsQUFRQSxBQU9ELEFBVUUsQUFVRixBQVNFLEFBTUYsQUFPUSxBQUdBLEFBR0EsQUFHVCxBQVNTLEFBU1QsQUFXUyxBQVVOLEFBU00sQUFVQSxBQUtELEFBTUMsQUFRRCxBQVNDLEFBUVQsQUFPRyxBQU9NLEFBT0EsQUFPTixBQU1BLEFBSU0sQUFhTSxBQUdOLEFBYUssQUFHTCxBQVlQLEFBT08sQUFhTSxBQUdOLEFBY1IsQUFHQSxBQVFBLEFBVUUsQUFTSCxBQVc2RCxBQVNwRCxBQVMrQyxBQVN4RCxBQU1DLEFBR0UsQUFNQSxBQUlGLEFBTWUsQUFHQSxBQUdmLEFBUUEsQUFPQSxVQXRVQSxBQWtCRSxBQTRFQSxBQXFKRixBQXNDQSxDQTVVQSxBQW9CUSxBQWVQLEFBcU9kLEFBR1csQUFRQyxBQStEWixBQWFZLEFBWUEsQUFRQyxBQU9ELENBellDLEFBUUQsQUEwT0MsQ0EwREEsS0EzS0osQUFjSSxDQXRGYixBQUdBLEFBR0EsQUFZb0IsQUFvQkEsQUFtQlAsQUFVRCxBQVdDLEFBaUJELEFBc0JBLEFBT0EsQUFpQkEsQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsQUFnRUEsQ0E5Q1MsQ0F4TkosQUFnT0YsQUFtQkcsQUFzQ0csQUFtQkEsQUFZQSxBQWVBLENBallBLEFBT04sQUFtWE0sQ0FsWU4sQUFrREssQUFrQ0gsQUE0RUksQUFrRkEsQ0EwRCtELENBM0tyRSxDQWtQZixBQUdBLEdBMVBhLEFBbUJFLEFBU0YsQUFzQkEsQUFPQSxBQWlCQSxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxBQWdFQSxDQXRTQyxBQStFRixBQXFCRSxNQXBFTyxDQVFULEFBb0JBLEFBdU5PLENBak9FLENBc01PLENBeEs2QixBQVV6RCxBQTRCb0IsQUFzQk8sQUFPUCxBQWlCTCxBQWdCQSxBQWdCQSxBQW1CQSxBQWdCQSxBQWdFQSxBQWtCWSxBQW1CQSxBQVlQLEFBZUEsQ0FqWVEsQUEwQ0osQUFnVkosQ0EvVkEsQUFvR0EsQUF5QkEsQUFrRkEsS0F2S0wsQUFvQkYsT0F1TlEsQ0FuUEQsRUFrQkEsQ0FXd0QsQUF5RGpELEFBNkJBLEFBcU1BLEFBZUEsQ0FQQSxDQS9WQSxBQXdDaUQsQUE0RGpELEFBeUJaLEFBa0ZZLEdBaE1aLEVBNEhNLEFBNEdELEFBaUVwQixBQW1CQSxFQXRXOEIsTUEyRGYsQUE4RmYsQUFxSm9CLENBaFVDLEFBZ0NBLEFBbUJBLEFBNkRBLEFBOERBLEFBcUJHLEFBTUgsQUFrS0EsQUFNQSxDQWxSTixDQWxDZixPQXNHQSxBQTZCQSxBQXFHWSxBQWdHWixBQWVBLENBM05BLEFBaURBLEFBbUtBLENBL1ZpQixBQW9HRCxBQTJHaEIsRUFuQ0EsQUFtREEsSUFvRGUsRUEzQmYsRUFuUkEsQUF3UnVCLENBblJFLENBZkYsRUFpSUYsQUFTckIsQ0FwR2dCLEdBeUdLLFdBeEdyQixBQWdLcUIsQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsQUFnRUcsMEJBWkgsQUFrQkEsR0F4VEksQUFtQlIsQUEySEksQUEyQnJCLEFBd0tBLElBcFNxQixFQWtCRyxHQW9HSCxNQS9JTCxBQXVFRCxDQTRNRixBQWtCQSxNQXhCUSxFQWpVSSxBQWdIQSxBQTJQTSxDQWpPL0IsRUE4TFksQUFrQkEsRUFyU1osQUFtR3FCLFFBaUxELEFBa0JBLFlBUkMsSUF4Q00sQUFTTixFQTNTSSxBQWlVZCxBQWtCQyxPQXBVaUIsRUF3TEosQUFnQkEsQUFnQkEsQUFtQkEsQUFnQkEsQUF3RGhCLENBa0JFLE1BcFBELEFBbU9WLENBdkJlLENBaE9MLENBeVFWLEtBcFBXLEVBcEJBLEdBVVUsSUFXckIsQ0FpQnFCLENBckNyQixHQXdGK0IsSUFqRy9CLEtBc0h5QixPQW5LWixNQWlTWSxLQWhTWixFQXVIa0IsQ0F4SmhCLEFBZ0hNLFFBOUVBLEtBakNQLE1BZ0hELEFBa09rQixJQTlCUixDQXNEVixDQXpXYixFQWlDOEIsQUF3UVQsR0F6TFQsQ0F6R1EsSUFtV3BCLEtBelB5RCxBQTZGN0IsQUFnQkEsQUFnQkcsQUFtQkgsQUFnQkEsSUEzUFAsRUFvUk8sR0FsUzVCLEtBc0YrQixDQTVEc0QsSUF3RjVELElBbkdLLEdBd0xDLEFBZ0JGLEFBbUNFLEFBZ0JBLEdBbkNFLEdBNEQwRCxNQXpHM0YsYUExSzRFLEFBd1M1RSxFQW5KYSxBQW1Eb0IsRUFoQkEsQUFtREYsQUFnQkUsS0FuQ0MsSUFsRWxDLGtCQXZCVyxFQTBFdUIsQUFtQ0EsQUFnRFAsRUFuR0ssQUFtRUUsS0E1SGxDLENBeUZnQyxVQWlHaEMsY0FoSWdDLEFBZ0JBLEFBbUNBLEVBbkpoQyxBQVNvQixBQTBKVSxJQW5DOUIsY0F0SEEsQ0E3QkEsU0FvSEEsQUFnQkEsQUFtQ0EsQUFnQkEsNkJBblBBLE1Ba1JBLHVCQVRBLEdBblJBIiwiZmlsZSI6Ii9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBva2Vtb246IFtdLFxuICAgIH1cbiAgfVxuICBcbiAgZ2V0UG9rZW1vbiA9ICgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8xL1wiKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKCAocmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBva2Vtb246IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUucG9rZW1vbilcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9rZWRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgey8qIEhFQURFUi1MRUZUICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGVzXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgb25lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgdHdvXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR5cGUgdGhyZWVcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBNQUlOLUxFRlQgKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbGVmdFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1jb21wbGVtZW50XCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmVlblwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1lcmFcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWx0by1mYWxhbnRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNhaWRhXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2V0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvaWNlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpcmVjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFycm93XCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFycm93XCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvblwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+ICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImFycm93XCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL25leHQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbi1jb21wbGVtZW50XCIvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lT25lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZUltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VMZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VSaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc2V0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lVHdvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbk9uZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25Ud29cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleHtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHZ3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMnB4IDIycHggMCAwO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSw2OCUgMCwxMDAlIDAsMTAwJSA1MCUsNjglIDUwJSw1NyUgOTIlLDAgOTIlLDAgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLCA2OCUgMCwgMTAwJSAwLCAxMDAlIDUwJSwgNjUlIDUwJSwgNTUlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC5sb2FkaW5ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjNiMWM3O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YwZjRmNTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAudHlwZXtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLm9uZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmI1OTg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnR3b3tcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2VlNmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXMgLnRocmVle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0YTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc4JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAubWFpbi1jb21wbGVtZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwLjIlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1MCUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVye1xuICAgICAgICAgICAgd2lkdGg6IDk2JTtcbiAgICAgICAgICAgIGhlaWdodDogOTcuNSU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYm9yZGVyLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTElO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDEwMCUgMCwxMDAlIDAsMTAwJSAxMDAlLDc1JSAxMDAlLDI1JSAxMDAlLDAgMjI1JSw1NSUgMCk7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLDEwMCUgMCwxMDAlIDEwMCUsMTAlIDEwMCUsMCA4OCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgICAgICAgICAgIGhlaWdodDogOTQlO1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMCUgMTAwJSwwIDg4JSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5zY3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5jYW1lcmF7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDIlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLmNhbWVyYSAuaXRlbXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZmRmZGY7XG4gICAgICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnN7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVucyAuYnV0dG9ue1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHdpZHRoOiAxdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDF2dztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5zIC5hbHRvLWZhbGFudGV7fVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5zIC5hbHRvLWZhbGFudGUgLnNhaWRhe1xuICAgICAgICAgICAgd2lkdGg6IDJ2dztcbiAgICAgICAgICAgIGhlaWdodDogMC4xdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAzcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25ze1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC52b2ljZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMmI1OTg7XG4gICAgICAgICAgICB3aWR0aDogOHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDQ0ZDRjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5yZXNldHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC52ZXJ0aWNhbHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLnRvcHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4IDZweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAudG9wIC5hcnJvd3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYm90dG9te1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgNnB4IDZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDAgc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5ib3R0b20gLmFycm93e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1jZW50ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1jZW50ZXIgLmljb257XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NTY1NjU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1sZWZ0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggMCAwIDZweDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tbGVmdCAuYXJyb3d7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1yaWdodHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA2cHggNnB4IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAwIHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLXJpZ2h0IC5hcnJvd3t9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5hcnJvd3tcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAuY2VudGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgICAgICB3aWR0aDogNiU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHR7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIHdpZHRoOiA0OCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDQ5JSAxMCUsIDEwMCUgMTAlLCAxMDAlIDEwMCUsIDcwJSAxMDAlLCAzMCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlcntcbiAgICAgICAgICAgIGhlaWdodDogOTkuOSU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigyNiUgMCUsNDclIDExJSwxMDAlIDExJSwxMDAlIDEwMCUsNzAlIDEwMCUsMzAlIDEwMCUsMCAxMDAlLDAgMCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0e1xuICAgICAgICAgICAgd2lkdGg6IDg2JTtcbiAgICAgICAgICAgIGhlaWdodDogODQlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5tYWluLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzUlIDAlLCAxMDAlIDEwMCUsIDEwMCUgMTAwJSwgNTAlIDEwMCUsIDAgMTAwJSwgMCAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0JTtcbiAgICAgICAgICAgIHdpZHRoOiA0MiU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xMyU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDk2JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5ib3JkZXItY29tcGxlbWVudHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMyUgMCUsMTAwJSAxMDAlLDEwMCUgMTAwJSw1MCUgMTAwJSwwIDEwMCUsMCAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzJTtcbiAgICAgICAgICAgIHdpZHRoOiAzOCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAyLjUlO1xuICAgICAgICAgICAgdG9wOiAtMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5zY3JlZW57XG4gICAgICAgICAgICB3aWR0aDogODklO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9uc3tcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25le1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25lIC5jaGFuZ2VJbWFnZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25lIC5jaGFuZ2VJbWFnZSBkaXZ7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIHdpZHRoOiA0dnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLmJvcmRlci1yaWdodCAuYnV0dG9ucyAubGluZU9uZSAuY2hhbmdlSW1hZ2UgLmltYWdlTGVmdHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwIDAgOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25lIC5jaGFuZ2VJbWFnZSAuaW1hZ2VSaWdodHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHB4IDhweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25lIC5yZXNldHtcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmY2VlNmI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lVHdve31cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lVHdvIC5idXR0b25PbmV7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZDRkNGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHQgLmJ1dHRvbnMgLmxpbmVUd28gLmJ1dHRvblR3b3tcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgd2lkdGg6IDh2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.988df8533dd1598c9ded.hot-update.js.map