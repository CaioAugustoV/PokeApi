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
        className: "jsx-3084291045" + " " + "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "pokedex",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "loading",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "types",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "type one",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "type two",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "type three",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "main-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "main-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border-screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "camera",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "itens",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "alto-falante",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "saida",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "voice",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "directions",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "top",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3084291045" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "button-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3084291045" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "button-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "button-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3084291045" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "bottom",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        className: "jsx-3084291045" + " " + "arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "main-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "main-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "border-complement",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "screen",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "buttons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "lineOne",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "changeImage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3084291045" + " " + "lineTwo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3084291045",
        __self: this
      }, ".main.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;}.pokedex.jsx-3084291045{height:80vh;width:60vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3084291045 .left.jsx-3084291045{height:100%;width:48%;background:#e84848;border:10px solid #4d4d4d;border-radius:22px 22px 0 0;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045{height:20%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;background:#4d4d4d;border-radius:22px 22px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,68% 50%,57% 92%,0 92%,0 0);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:80%;width:100%;background:#e84848;border-radius:20px 20px 0 0;-webkit-clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);clip-path:polygon(30% 0%,68% 0,100% 0,100% 50%,65% 50%,55% 100%,0 100%,0 0);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .loading.jsx-3084291045{width:40px;background:#23b1c7;height:40px;border-radius:50%;border:2px solid #f0f4f5;margin-left:4%;margin-top:3%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .types.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:1%;margin-top:3%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .types.jsx-3084291045 .type.jsx-3084291045{width:15px;height:15px;border-radius:50%;border:2px solid #000;margin:0 4px;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .types.jsx-3084291045 .one.jsx-3084291045{background:#22b598;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .types.jsx-3084291045 .two.jsx-3084291045{background:#fcee6b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .header.jsx-3084291045 .border.jsx-3084291045 .types.jsx-3084291045 .three.jsx-3084291045{background:#e8484a;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045{width:90%;height:78%;margin-left:2%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .main-complement.jsx-3084291045{background:#4d4d4d;position:absolute;width:50%;height:10.2%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,50% 0);right:0;top:-10%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045{width:96%;height:97.5%;margin-left:2%;background:#e84848;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .border-complement.jsx-3084291045{background:#e84848;position:absolute;width:50%;height:11%;-webkit-clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);clip-path:polygon(100% 0,100% 0,100% 100%,75% 100%,25% 100%,0 225%,55% 0);right:0;top:-10%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:#4d4d4d;height:40%;width:80%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045{background:#e6e6e6;height:94%;width:95%;-webkit-clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);clip-path:polygon(0 0,100% 0,100% 100%,10% 100%,0 88%);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .screen.jsx-3084291045{background:#4d4d4d;width:80%;height:75%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .camera.jsx-3084291045{position:absolute;top:2%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .camera.jsx-3084291045 .item.jsx-3084291045{background:#dfdfdf;width:10px;height:10px;border-radius:50%;border:1px solid #4d4d4d;margin:0 25px;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .itens.jsx-3084291045{position:absolute;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;bottom:0;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .itens.jsx-3084291045 .button.jsx-3084291045{background:#e84848;width:1vw;height:1vw;border-radius:50%;border:1px solid #4d4d4d;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .main-screen.jsx-3084291045 .border-screen.jsx-3084291045 .itens.jsx-3084291045 .alto-falante.jsx-3084291045 .saida.jsx-3084291045{width:2vw;height:0.1vw;background:#4d4d4d;border-radius:50%;margin:3px 0;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .voice.jsx-3084291045{background:#22b598;width:8vw;height:3vw;border:3px solid #444d4c;border-radius:15px;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .reset.jsx-3084291045{background:#4d4d4d;width:3vw;height:3vw;border-radius:50%;border:3px solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .vertical.jsx-3084291045{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .top.jsx-3084291045{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 6px 0 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:0 solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .top.jsx-3084291045 .arrow.jsx-3084291045{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .bottom.jsx-3084291045{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 0 6px 6px;border-top:0 solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .bottom.jsx-3084291045 .arrow.jsx-3084291045{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .button-center.jsx-3084291045{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #666666;border-right:1px solid #666666;border-bottom:1px solid #666666;border-left:1px solid #666666;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .button-center.jsx-3084291045 .icon.jsx-3084291045{height:15px;width:15px;background:#656565;border-radius:50%;border:1px solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .button-left.jsx-3084291045{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:6px 0 0 6px;border-top:1px solid #4b4b4b;border-right:0 solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:1px solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .button-left.jsx-3084291045 .arrow.jsx-3084291045{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .directions.jsx-3084291045 .button-right.jsx-3084291045{background:#666666;width:3vw;height:3vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:0 6px 6px 0;border-top:1px solid #4b4b4b;border-right:1px solid #4b4b4b;border-bottom:1px solid #4b4b4b;border-left:0 solid #4b4b4b;}.pokedex.jsx-3084291045 .left.jsx-3084291045 .main-left.jsx-3084291045 .border.jsx-3084291045 .buttons.jsx-3084291045 .arrow.jsx-3084291045{width:15px;}.pokedex.jsx-3084291045 .center.jsx-3084291045{height:90%;width:6%;background:#e84848;border:10px solid #4d4d4d;position:absolute;z-index:1;}.pokedex.jsx-3084291045 .right.jsx-3084291045{height:90%;width:48%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#4d4d4d;border:10px solid #4d4d4d;-webkit-clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(30% 0%,49% 10%,100% 10%,100% 100%,70% 100%,30% 100%,0 100%,0 0);}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045{height:99.9%;width:100%;-webkit-clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);clip-path:polygon(26% 0%,47% 11%,100% 11%,100% 100%,70% 100%,30% 100%,0 100%,0 0);background:#e84848;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045 .main-right.jsx-3084291045{width:86%;height:84%;margin-right:4%;margin-bottom:4%;background:#4d4d4d;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045 .main-right.jsx-3084291045 .main-complement.jsx-3084291045{-webkit-clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(35% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#4d4d4d;height:14%;width:42%;position:absolute;top:-13%;left:0;}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045 .main-right.jsx-3084291045 .border-right.jsx-3084291045{background:#e84848;width:95%;height:96%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045 .main-right.jsx-3084291045 .border-right.jsx-3084291045 .border-complement.jsx-3084291045{-webkit-clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);clip-path:polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);background:#e84848;height:13%;width:38%;position:absolute;left:2.5%;top:-10%;}.pokedex.jsx-3084291045 .right.jsx-3084291045 .border.jsx-3084291045 .main-right.jsx-3084291045 .border-right.jsx-3084291045 .screen.jsx-3084291045{width:89%;height:49%;background:#666666;border:4px solid #4d4d4d;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NhaW9hdWd1c3RvL0dpdGh1Yi9Qb2tlQXBpL2NvbXBvbWVudHMvcG9rZWRleC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4R29CLEFBRzBCLEFBT0QsQUFRQSxBQU9ELEFBVUUsQUFVRixBQVNFLEFBTUYsQUFPUSxBQUdBLEFBR0EsQUFHVCxBQVNTLEFBU1QsQUFXUyxBQVVOLEFBU00sQUFVQSxBQUtELEFBTUMsQUFRRCxBQVNDLEFBUVQsQUFPRyxBQU9NLEFBT0EsQUFPTixBQU1BLEFBSU0sQUFhTSxBQUdOLEFBYUssQUFHTCxBQVlQLEFBT08sQUFhTSxBQUdOLEFBY1IsQUFHQSxBQVFBLEFBVUUsQUFTSCxBQVc2RCxBQVNwRCxBQVMrQyxBQVN4RCxVQXhSQyxBQWtCRSxBQTRFQSxBQXFKRixBQXNDQSxDQTVVQSxBQW9CUSxBQWVQLEFBcU9kLEFBR1csQUFRQyxDQWxTQyxBQVFELEFBME9DLENBMERBLEtBM0tKLEFBY0ksQ0F0RmIsQUFHQSxBQUdBLEFBWW9CLEFBb0JBLEFBbUJQLEFBVUQsQUFXQyxBQWlCRCxBQXNCQSxBQU9BLEFBaUJBLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLEFBZ0VBLENBOUNTLENBeE5KLEFBZ09GLEFBbUJHLEFBc0NHLENBblZBLEFBT04sQ0FmQSxBQWtESyxBQWtDSCxBQTRFSSxBQWtGQSxDQTBEK0QsQ0EzS3JFLElBTEYsQUFtQkUsQUFTRixBQXNCQSxBQU9BLEFBaUJBLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLEFBZ0VBLENBdFNDLEFBK0VGLEFBcUJFLE1BcEVPLENBUVQsQUFvQkEsQUF1Tk8sQ0FqT0UsQ0FzTU8sQ0F4SzZCLEFBVXpELEFBNEJvQixBQXNCTyxBQU9QLEFBaUJMLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLEFBZ0VBLEFBa0JZLENBblZDLEFBMENKLENBZkosQUFvR0EsQUF5QkEsQUFrRkEsS0F2S0wsQUFvQkYsT0F1TlEsQ0FuUEQsRUFrQkEsQ0FXd0QsQUF5RGpELEFBNkJBLEVBbEpBLEFBd0NpRCxBQTREakQsQUF5QlosQUFrRlksR0FoTVosRUE0SE0sQUE0R0QsQUFpRXBCLEVBblY4QixNQTJEZixBQThGZixBQXFKb0IsQ0FoVUMsQUFnQ0EsQUFtQkEsQUE2REEsQUE4REEsQUFxQkcsQUFNSCxDQTFHTixDQWxDZixPQXNHQSxBQTZCQSxBQXFHWSxDQTVHWixBQWlEQSxDQTVMaUIsQUFvR0QsQUEyR2hCLEVBbkNBLEFBbURBLElBb0RlLEVBM0JmLEVBblJBLEFBd1J1QixDQW5SRSxDQWZGLEVBaUlGLEFBU3JCLENBcEdnQixHQXlHSyxXQXhHckIsQUFnS3FCLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLEFBZ0VHLDBCQVpILEFBa0JBLEdBeFRJLEFBbUJSLEFBMkhJLEFBMkJyQixJQTVIcUIsRUFrQkcsR0FvR0gsTUEvSUwsQUF1RUQsQ0E0TUYsQUFrQkEsTUF4QlEsRUFqVUksQUFnSEEsQ0EwQnpCLEVBOExZLEFBa0JBLEVBclNaLEFBbUdxQixRQWlMRCxBQWtCQSxZQVJDLElBeENNLEFBU04sRUEzU0ksQUFpVWQsQUFrQkMsT0FwVWlCLEVBd0xKLEFBZ0JBLEFBZ0JBLEFBbUJBLEFBZ0JBLEFBd0RoQixDQWtCRSxNQXBQRCxBQW1PVixDQXZCZSxDQWhPTCxDQXlRVixLQXBQVyxFQXBCQSxHQVVVLElBV3JCLENBaUJxQixDQXJDckIsR0F3RitCLElBakcvQixLQXNIeUIsT0FuS1osTUFpU1ksS0FoU1osRUF1SGtCLENBeEpoQixBQWdITSxRQTlFQSxLQWpDUCxNQWdIRCxBQWtPa0IsSUE5QlIsRUFuVHZCLEVBaUM4QixBQXdRVCxHQXpMVCxDQXpHUSxTQTBHcUMsQUE2RjdCLEFBZ0JBLEFBZ0JHLEFBbUJILEFBZ0JBLElBM1BQLEVBb1JPLEdBbFM1QixLQXNGK0IsQ0E1RHNELElBd0Y1RCxJQW5HSyxHQXdMQyxBQWdCRixBQW1DRSxBQWdCQSxHQW5DRSxHQTREMEQsTUF6RzNGLGFBMUs0RSxBQXdTNUUsRUFuSmEsQUFtRG9CLEVBaEJBLEFBbURGLEFBZ0JFLEtBbkNDLElBbEVsQyxrQkF2QlcsRUEwRXVCLEFBbUNBLEFBZ0RQLEVBbkdLLEFBbUVFLEtBNUhsQyxDQXlGZ0MsVUFpR2hDLGNBaElnQyxBQWdCQSxBQW1DQSxFQW5KaEMsQUFTb0IsQUEwSlUsSUFuQzlCLGNBdEhBLENBN0JBLFNBb0hBLEFBZ0JBLEFBbUNBLEFBZ0JBLDZCQW5QQSxNQWtSQSx1QkFUQSxHQW5SQSIsImZpbGUiOiIvaG9tZS9jYWlvYXVndXN0by9HaXRodWIvUG9rZUFwaS9jb21wb21lbnRzL3Bva2VkZXgvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwb2tlbW9uOiBbXSxcbiAgICB9XG4gIH1cbiAgXG4gIGdldFBva2Vtb24gPSAoKSA9PiB7XG4gICAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vMS9cIilcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbiggKHJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBwb2tlbW9uOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBva2Vtb24pXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBva2VkZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgICAgICAgIHsvKiBIRUFERVItTEVGVCAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIG9uZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIHR3b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlIHRocmVlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogTUFJTi1MRUZUICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWxlZnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWNvbXBsZW1lbnRcIi8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tc2NyZWVuXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1zY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtZXJhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsdG8tZmFsYW50ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzYWlkYVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXNldFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b2ljZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXJlY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25cIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXJyb3dcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvbmV4dC5wbmdcIiAvPiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy9uZXh0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29tcGxlbWVudFwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWNvbXBsZW1lbnRcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyZWVuXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZU9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VJbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVR3b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWlue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4e1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDYwdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0e1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHggMjJweCAwIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHggMjJweCAwIDA7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMzAlIDAlLDY4JSAwLDEwMCUgMCwxMDAlIDUwJSw2OCUgNTAlLDU3JSA5MiUsMCA5MiUsMCAwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVye1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGhlaWdodDogODAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzMCUgMCUsIDY4JSAwLCAxMDAlIDAsIDEwMCUgNTAlLCA2NSUgNTAlLCA1NSUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLmxvYWRpbmd7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyM2IxYzc7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjBmNGY1O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMyU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5oZWFkZXIgLmJvcmRlciAudHlwZXN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAuaGVhZGVyIC5ib3JkZXIgLnR5cGVzIC50eXBle1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAub25le1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyYjU5ODtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAudHdve1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZjZWU2YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLmhlYWRlciAuYm9yZGVyIC50eXBlcyAudGhyZWV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODRhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIGhlaWdodDogNzglO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5tYWluLWNvbXBsZW1lbnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAuMiU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLDEwMCUgMCwxMDAlIDEwMCUsNzUlIDEwMCUsMjUlIDEwMCUsMCAyMjUlLDUwJSAwKTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAtMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXJ7XG4gICAgICAgICAgICB3aWR0aDogOTYlO1xuICAgICAgICAgICAgaGVpZ2h0OiA5Ny41JTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5ib3JkZXItY29tcGxlbWVudHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMSU7XG4gICAgICAgICAgICBjbGlwLXBhdGg6IHBvbHlnb24oMTAwJSAwLDEwMCUgMCwxMDAlIDEwMCUsNzUlIDEwMCUsMjUlIDEwMCUsMCAyMjUlLDU1JSAwKTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAtMTAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW57XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigwIDAsMTAwJSAwLDEwMCUgMTAwJSwxMCUgMTAwJSwwIDg4JSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW57XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgICAgICAgICAgaGVpZ2h0OiA5NCU7XG4gICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwxMDAlIDAsMTAwJSAxMDAlLDEwJSAxMDAlLDAgODglKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLnNjcmVlbntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLmNhbWVyYXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMiU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuY2FtZXJhIC5pdGVte1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2RmZGZkZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLm1haW4tc2NyZWVuIC5ib3JkZXItc2NyZWVuIC5pdGVuc3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAubWFpbi1zY3JlZW4gLmJvcmRlci1zY3JlZW4gLml0ZW5zIC5idXR0b257XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgd2lkdGg6IDF2dztcbiAgICAgICAgICAgIGhlaWdodDogMXZ3O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnMgLmFsdG8tZmFsYW50ZXt9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5tYWluLXNjcmVlbiAuYm9yZGVyLXNjcmVlbiAuaXRlbnMgLmFsdG8tZmFsYW50ZSAuc2FpZGF7XG4gICAgICAgICAgICB3aWR0aDogMnZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAwLjF2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0ZDRkNGQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnN7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLnZvaWNle1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyYjU5ODtcbiAgICAgICAgICAgIHdpZHRoOiA4dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0NDRkNGM7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLnJlc2V0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9uc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLnZlcnRpY2Fse1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAudG9we1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDAgc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC50b3AgLmFycm93e1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5ib3R0b217XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCA2cHggNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJvdHRvbSAuYXJyb3d7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWNlbnRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICB3aWR0aDogM3Z3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNjY2NjY2O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICM2NjY2NjY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWNlbnRlciAuaWNvbntcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY1NjU2NTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLWxlZnR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNjY2NjY2O1xuICAgICAgICAgICAgd2lkdGg6IDN2dztcbiAgICAgICAgICAgIGhlaWdodDogM3Z3O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAwIDAgNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0YjRiNGI7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDAgc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmRpcmVjdGlvbnMgLmJ1dHRvbi1sZWZ0IC5hcnJvd3tcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5sZWZ0IC5tYWluLWxlZnQgLmJvcmRlciAuYnV0dG9ucyAuZGlyZWN0aW9ucyAuYnV0dG9uLXJpZ2h0e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NjY2NjtcbiAgICAgICAgICAgIHdpZHRoOiAzdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDZweCA2cHggMDtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzRiNGI0YjtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGI0YjRiO1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDAgc29saWQgIzRiNGI0YjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLmxlZnQgLm1haW4tbGVmdCAuYm9yZGVyIC5idXR0b25zIC5kaXJlY3Rpb25zIC5idXR0b24tcmlnaHQgLmFycm93e31cbiAgICAgICAgICAucG9rZWRleCAubGVmdCAubWFpbi1sZWZ0IC5ib3JkZXIgLmJ1dHRvbnMgLmFycm93e1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5jZW50ZXJ7XG4gICAgICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgICAgIHdpZHRoOiA2JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBib3JkZXI6IDEwcHggc29saWQgIzRkNGQ0ZDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodHtcbiAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMwJSAwJSwgNDklIDEwJSwgMTAwJSAxMCUsIDEwMCUgMTAwJSwgNzAlIDEwMCUsIDMwJSAxMDAlLCAwIDEwMCUsIDAgMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVye1xuICAgICAgICAgICAgaGVpZ2h0OiA5OS45JTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDI2JSAwJSw0NyUgMTElLDEwMCUgMTElLDEwMCUgMTAwJSw3MCUgMTAwJSwzMCUgMTAwJSwwIDEwMCUsMCAwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlODQ4NDg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHR7XG4gICAgICAgICAgICB3aWR0aDogODYlO1xuICAgICAgICAgICAgaGVpZ2h0OiA4NCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGQ0ZDRkO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBva2VkZXggLnJpZ2h0IC5ib3JkZXIgLm1haW4tcmlnaHQgLm1haW4tY29tcGxlbWVudHtcbiAgICAgICAgICAgIGNsaXAtcGF0aDogcG9seWdvbigzNSUgMCUsIDEwMCUgMTAwJSwgMTAwJSAxMDAlLCA1MCUgMTAwJSwgMCAxMDAlLCAwIDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzRkNGQ0ZDtcbiAgICAgICAgICAgIGhlaWdodDogMTQlO1xuICAgICAgICAgICAgd2lkdGg6IDQyJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTEzJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHR7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTg0ODQ4O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogOTYlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHQgLmJvcmRlci1jb21wbGVtZW50e1xuICAgICAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKDMzJSAwJSwxMDAlIDEwMCUsMTAwJSAxMDAlLDUwJSAxMDAlLDAgMTAwJSwwIDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2U4NDg0ODtcbiAgICAgICAgICAgIGhlaWdodDogMTMlO1xuICAgICAgICAgICAgd2lkdGg6IDM4JTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDIuNSU7XG4gICAgICAgICAgICB0b3A6IC0xMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2tlZGV4IC5yaWdodCAuYm9yZGVyIC5tYWluLXJpZ2h0IC5ib3JkZXItcmlnaHQgLnNjcmVlbntcbiAgICAgICAgICAgIHdpZHRoOiA4OSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ5JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjY2NjY7XG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAjNGQ0ZDRkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25ze31cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lT25le31cbiAgICAgICAgICAucG9rZWRleCAucmlnaHQgLmJvcmRlciAubWFpbi1yaWdodCAuYm9yZGVyLXJpZ2h0IC5idXR0b25zIC5saW5lVHdve31cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/caioaugusto/Github/PokeApi/compoments/pokedex/index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.3310bdb174581fcddb1a.hot-update.js.map