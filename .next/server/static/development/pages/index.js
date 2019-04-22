module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./compoments/Pokedex/compoments/Main.js":
/*!***********************************************!*\
  !*** ./compoments/Pokedex/compoments/Main.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainPokedex; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TabLeft__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TabLeft */ "./compoments/Pokedex/compoments/TabLeft.js");
/* harmony import */ var _TabRight__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabRight */ "./compoments/Pokedex/compoments/TabRight.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/Pokedex/compoments/Main.js";

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  height: 90%;\n  width: 6%;\n  background: #e84848;\n  border: 10px solid #4d4d4d;\n  position: absolute;\n  z-index: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  width: 60%;\n  height: 80%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Main = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var Center = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());

var MainPokedex =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(MainPokedex, _Component);

  function MainPokedex() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MainPokedex);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(MainPokedex).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MainPokedex, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TabLeft__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Center, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_TabRight__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }));
    }
  }]);

  return MainPokedex;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./compoments/Pokedex/compoments/TabLeft.js":
/*!**************************************************!*\
  !*** ./compoments/Pokedex/compoments/TabLeft.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabLeft; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _tabLeft_Joystick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tabLeft/Joystick */ "./compoments/Pokedex/compoments/tabLeft/Joystick.js");








var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/Pokedex/compoments/TabLeft.js";

function _templateObject19() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #22b598;\n  width: 8vw;\n  height: 3vw;\n  border: 3px solid #444d4c;\n  border-radius: 15px;\n\tposition: relative;\n\tbox-shadow: ", ";\n\ttop: ", ";\n\ttransition: .1s ease;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  border-radius: 50%;\n  border: 3px solid #4b4b4b;\n  position: relative;\n  box-shadow: ", ";\n  top: ", ";\n  left: ", ";\n\ttransition: .1s ease;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  div {\n    width: 2vw;\n    height: 0.1vw;\n    background: #4d4d4d;\n    border-radius: 50%;\n    margin: 3px 0;\n  }\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #e84848;\n  width: 1vw;\n  height: 1vw;\n  border-radius: 50%;\n  border: 1px solid #4d4d4d;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  position: absolute;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  bottom: 0;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  position: absolute;\n  top: 2%;\n  display: flex;\n  flex-direction: row;\n  div {\n    background: #dfdfdf;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    border: 1px solid #4d4d4d;\n    margin: 0 25px;\n  }\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #4d4d4d;\n  width: 80%;\n  height: 75%;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #e6e6e6;\n  height: 94%;\n  width: 95%;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 88%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #4d4d4d;\n  height: 40%;\n  width: 80%;\n  clip-path: polygon(0 0, 100% 0, 100% 100%, 10% 100%, 0 88%);\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #e84848;\n  position: absolute;\n  width: 50%;\n  height: 11%;\n  clip-path: polygon(\n    100% 0,\n    100% 0,\n    100% 100%,\n    75% 100%,\n    25% 100%,\n    0 225%,\n    55% 0\n  );\n  right: 0;\n  top: -10%;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 96%;\n  height: 97.5%;\n  margin-left: 2%;\n  background: #e84848;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #4d4d4d;\n  position: absolute;\n  width: 50%;\n  height: 10.2%;\n  clip-path: polygon(\n    100% 0,\n    100% 0,\n    100% 100%,\n    75% 100%,\n    25% 100%,\n    0 225%,\n    50% 0\n  );\n  right: 0;\n  top: -10%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 90%;\n  height: 78%;\n  margin-left: 2%;\n  background: #4d4d4d;\n  position: relative;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n  margin-left: 1%;\n  margin-top: 3%;\n  div {\n    width: 15px;\n    height: 15px;\n    border-radius: 50%;\n    border: 2px solid #4d4d4d;\n    margin: 0 4px;\n    box-shadow: inset -2px -2px 4px 0px rgba(0, 0, 0, 0.3),\n      -1px -1px 1px 0px rgba(0, 0, 0, 0.3);\n  }\n  div:nth-child(1) {\n    background: #22b598;\n  }\n  div:nth-child(2) {\n    background: #fcee6b;\n  }\n  div:nth-child(3) {\n    background: #e8484a;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 4vw;\n  background: #23b1c7;\n  height: 4vw;\n  border-radius: 50%;\n  border: 2px solid #f0f4f5;\n  margin-left: 4%;\n  margin-top: 3%;\n  box-shadow: inset -10px -3px 6px 0px rgba(255, 255, 255, 0.3),\n    -1px -1px 8px 3px rgba(0, 0, 0, 0.3),\n    inset 4px 0px 6px 0px rgba(12, 129, 148, 0.5);\n  animation: flash linear 1s infinite;\n  @keyframes flash {\n    0% {\n      background: rgb(35, 177, 199);\n    }\n    50% {\n      background: rgb(35, 177, 199, 0.7);\n    }\n    100% {\n      background: rgb(35, 177, 199);\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  height: 80%;\n  width: 100%;\n  background: #e84848;\n  border-radius: 20px 20px 0 0;\n  clip-path: polygon(\n    30% 0%,\n    68% 0,\n    100% 0,\n    100% 50%,\n    65% 50%,\n    55% 100%,\n    0 100%,\n    0 0\n  );\n  box-shadow: inset 0px -70px 38px -23px rgba(0, 0, 0, 0.2);\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 20%;\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  background: #4d4d4d;\n  clip-path: polygon(\n    30% 0%,\n    68% 0,\n    100% 0,\n    100% 50%,\n    68% 50%,\n    57% 92%,\n    0 92%,\n    0 0\n  );\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 100%;\n  width: 48%;\n  background: #e84848;\n  border: 10px solid #4d4d4d;\n  border-radius: 22px 22px 0 0;\n  box-shadow: inset -4px -7px 79px -64px rgba(0, 0, 0, 0.7);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Main = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var HeaderBorder = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());
var Header = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var Loading = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4());
var Types = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5());
var MainLeftBorder = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject6());
var MainLeftBorderExtencion = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject7());
var MainLeft = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject8());
var MainLeftExtencion = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject9());
var MainScreen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject10());
var BorderScreen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject11());
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject12());
var Camera = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject13());
var ContentScreen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject14());
var ButtonScreen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject15());
var AltoFalante = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject16());
var Buttons = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject17());
var Reset = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject18(), function (props) {
  return props.active ? 'none' : '-2px 2px 0 #4d4d4d';
}, function (props) {
  return props.active ? '2px' : '0';
}, function (props) {
  return props.active ? '-2px' : '0';
});
var Voice = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject19(), function (props) {
  return props.active ? 'none' : '0 5px 0 #4d4d4d';
}, function (props) {
  return props.active ? '5px' : '0';
});

var TabLeft =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TabLeft, _Component);

  function TabLeft(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TabLeft);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TabLeft).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonResetActive", function () {
      _this.setState({
        reset: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            reset: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonVoiceActive", function () {
      _this.setState({
        voice: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            voice: false
          });
        }, 300);
      });
    });

    _this.state = {
      voice: false,
      reset: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TabLeft, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(HeaderBorder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Loading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Types, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainLeftBorder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainLeftBorderExtencion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainLeft, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainLeftExtencion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainScreen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BorderScreen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Camera, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 320
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Screen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ContentScreen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonScreen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(AltoFalante, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Buttons, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Reset, {
        onClick: function onClick() {
          return _this2.buttonResetActive();
        },
        active: this.state.reset,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Voice, {
        onClick: function onClick() {
          return _this2.buttonVoiceActive();
        },
        active: this.state.voice,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_tabLeft_Joystick__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336
        },
        __self: this
      })))));
    }
  }]);

  return TabLeft;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./compoments/Pokedex/compoments/TabRight.js":
/*!***************************************************!*\
  !*** ./compoments/Pokedex/compoments/TabRight.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabRight; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/Pokedex/compoments/TabRight.js";

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  div:nth-child(1){\n    height: 3vw;\n    width: 10vw;\n    background: #666666;\n    border-radius: 8px;\n    border: 2px solid #4d4d4d;\n    position: relative;\n    top: ", ";\n    box-shadow: ", ";\n    transition: .1s ease;\n  }\n  div:nth-child(2){\n    height: 3vw;\n    width: 8vw;\n    background: #666666;\n    border-radius: 8px;\n    border: 2px solid #4d4d4d;\n    position: relative;\n    top: ", ";\n    box-shadow: ", ";\n    transition: .1s ease;\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 3vw;\n  width: 3vw;\n  background: #fcee6b;\n  border-radius: 50%;\n  border: 2px solid #4d4d4d;\n  position: relative;\n  top: ", ";\n  left: ", ";\n  box-shadow: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n  div{\n    height: 3vw;\n    width: 4vw;\n    background: #e6e6e6;\n    border: 2px solid #4d4d4d;\n  }\n  div:nth-child(1){\n    border-radius: 8px 0 0 8px;\n    position: relative;\n    top: ", ";\n    box-shadow: ", ";\n    transition: .1s ease;\n  }\n  div:nth-child(2){\n    border-radius: 0 8px 8px 0;\n    position: relative;\n    top: ", ";\n    box-shadow: ", ";\n    transition: .1s ease;\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 4vh;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 90%;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 89%;\n  height: 49%;\n  background: #666666;\n  border: 4px solid #4d4d4d;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  clip-path: polygon(33% 0%,100% 100%,100% 100%,50% 100%,0 100%,0 0);\n  background: #e84848;\n  height: 13%;\n  width: 38%;\n  position: absolute;\n  left: 2.5%;\n  top: -10%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #e84848;\n  width: 95%;\n  height: 96%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  clip-path: polygon(35% 0%, 100% 100%, 100% 100%, 50% 100%, 0 100%, 0 0);\n  background: #4d4d4d;\n  height: 14%;\n  width: 42%;\n  position: absolute;\n  top: -13%;\n  left: 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  width: 86%;\n  height: 84%;\n  margin-right: 4%;\n  margin-bottom: 4%;\n  background: #4d4d4d;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 99.9%;\n  width: 100%;\n  clip-path: polygon(\n    26% 0%,\n    47% 11%,\n    100% 11%,\n    100% 100%,\n    70% 100%,\n    30% 100%,\n    0 100%,\n    0 0\n  );\n  background: #e84848;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  height: 90%;\n  width: 48%;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n  background: #4d4d4d;\n  border: 10px solid #4d4d4d;\n  clip-path: polygon(\n    30% 0%,\n    49% 10%,\n    100% 10%,\n    100% 100%,\n    70% 100%,\n    30% 100%,\n    0 100%,\n    0 0\n  );\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var MainBorder = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var Main = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2());
var BorderMainRight = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var MainRightBorderExtencion = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4());
var MainRight = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5());
var MainRightExtencion = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject6());
var Screen = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject7());
var MainButtons = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject8());
var ButtonsLineOne = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject9());
var ChangeImages = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject10(), function (props) {
  return props.actionOne ? '5px' : '0';
}, function (props) {
  return props.actionOne ? 'none' : '0 5px 0 #4d4d4d';
}, function (props) {
  return props.actionTwo ? '5px' : '0';
}, function (props) {
  return props.actionTwo ? 'none' : '0 5px 0 #4d4d4d';
});
var Reset = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject11(), function (props) {
  return props.action ? '2px' : '0';
}, function (props) {
  return props.action ? '2px' : '0';
}, function (props) {
  return props.action ? 'none' : '2px 2px 0 #4d4d4d';
});
var ButtonsLineTwo = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject12(), function (props) {
  return props.actionOne ? '5px' : '0';
}, function (props) {
  return props.actionOne ? 'none' : '0 5px 0 #4d4d4d';
}, function (props) {
  return props.actionTwo ? '5px' : '0';
}, function (props) {
  return props.actionTwo ? 'none' : '0 5px 0 #4d4d4d';
});

var TabRight =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(TabRight, _Component);

  function TabRight(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TabRight);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TabRight).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ChangeImageOne", function () {
      _this.setState({
        ChangeImageOne: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            ChangeImageOne: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ChangeImageTwo", function () {
      _this.setState({
        ChangeImageTwo: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            ChangeImageTwo: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ButtonOne", function () {
      _this.setState({
        ButtonOne: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            ButtonOne: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ButtonTwo", function () {
      _this.setState({
        ButtonTwo: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            ButtonTwo: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "ResetButton", function () {
      _this.setState({
        Reset: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            Reset: false
          });
        }, 300);
      });
    });

    _this.state = {
      ChangeImageOne: false,
      ChangeImageTwo: false,
      Reset: false,
      ButtonOne: false,
      ButtonTwo: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TabRight, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainBorder, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(BorderMainRight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainRightBorderExtencion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainRight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainRightExtencion, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Screen, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(MainButtons, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonsLineOne, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ChangeImages, {
        actionOne: this.state.ChangeImageOne,
        actionTwo: this.state.ChangeImageTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.ChangeImageOne();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 253
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.ChangeImageTwo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Reset, {
        action: this.state.Reset,
        onClick: function onClick() {
          return _this2.ResetButton();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ButtonsLineTwo, {
        actionOne: this.state.ButtonOne,
        actionTwo: this.state.ButtonTwo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.ButtonOne();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.ButtonTwo();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      })))))));
    }
  }]);

  return TabRight;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./compoments/Pokedex/compoments/tabLeft/Joystick.js":
/*!***********************************************************!*\
  !*** ./compoments/Pokedex/compoments/tabLeft/Joystick.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Joystick; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/Pokedex/compoments/tabLeft/Joystick.js";

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 0 6px 6px;\n  border-top: 0 solid #4b4b4b;\n  border-right: ", ";\n  border-right: 1px solid #4b4b4b;\n  border-bottom: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n  position: relative;\n  box-shadow: 0 5px 0 #4d4d4d;\n  ", "\n\ttransition: .1s ease;\n  img {\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0 6px 6px 0;\n  border-top: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n  border-bottom: 1px solid #4b4b4b;\n  border-left: 0 solid #4b4b4b;\n  position: relative;\n  box-shadow: 0 5px 0 #4d4d4d;\n  ", "\n\ttransition: .1s ease;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #666;\n  border-right: 1px solid #666;\n  border-bottom: 1px solid #666;\n  border-left: 1px solid #666;\n  position: relative;\n  ", "\n\ttransition: .1s ease;\n  div {\n    height: 15px;\n    width: 15px;\n    background: #656565;\n    border-radius: 50%;\n    border: 1px solid #4b4b4b;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px 0 0 6px;\n  border-top: 1px solid #4b4b4b;\n  border-right: 0 solid #4b4b4b;\n  border-bottom: 1px solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n  position: relative;\n  box-shadow: 0 5px 0 #4d4d4d;\n  ", "\n\ttransition: .1s ease;\n  img {\n    transform: rotate(180deg);\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: row;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  background: #666;\n  width: 3vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 6px 6px 0 0;\n  border-top: 1px solid #4b4b4b;\n  border-right: 1px solid #4b4b4b;\n  border-bottom: 0 solid #4b4b4b;\n  border-left: 1px solid #4b4b4b;\n  position: relative;\n  ", "\n\ttransition: .1s ease;\n  img {\n    transform: rotate(270deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  img {\n    width: 15px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Direction = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject());
var Top = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject2(), function (props) {
  switch (props.active) {
    case 'left':
      return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d; top: 1.2px';

    case 'top':
      return 'box-shadow: none; top: -1px';

    case 'right':
      return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px';

    case 'bottom':
      return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px';

    default:
      break;
  }
});
var Vertical = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject3());
var Left = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject4(), function (props) {
  switch (props.active) {
    case 'left':
      return 'box-shadow: none; top: 1px';

    case 'top':
      return 'box-shadow: 0 3px 0 #4d4d4d; top: -1px';

    case 'right':
      return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px';

    case 'bottom':
      return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px';

    default:
      break;
  }
});
var Center = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject5(), function (props) {
  switch (props.active) {
    case 'left':
      return 'top: 1px';

    case 'top':
      return 'top: -1px';

    case 'right':
      return 'top: 0.8px';

    case 'bottom':
      return 'top: 0.8px';

    default:
      break;
  }
});
var Right = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject6(), function (props) {
  switch (props.active) {
    case 'left':
      return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 1px';

    case 'top':
      return 'box-shadow: 0 3px 0 #4d4d4d; top: -1px';

    case 'right':
      return 'box-shadow: none; top: 0.8px';

    case 'bottom':
      return 'box-shadow: 0 -5px 0 #4d4d4d; top: 0.8px';

    default:
      break;
  }
});
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div(_templateObject7(), function (props) {
  return props.active == 'left' ? '5px solid #4b4b4b' : '1px solid #4b4b4b';
}, function (props) {
  switch (props.active) {
    case 'left':
      return 'box-shadow: 4px 5px 0 #4d4d4d, 4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px';

    case 'top':
      return 'box-shadow: 0 7px 0 #4d4d4d; top: -1px';

    case 'right':
      return 'box-shadow: -4px 5px 0 #4d4d4d, -4px 0 0 #4d4d4d, 0 5px 0 #4d4d4d; top: 0.8px';

    case 'bottom':
      return 'box-shadow: none; top: 0.8px';

    default:
      break;
  }
});

var Joystick =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Joystick, _Component);

  function Joystick(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Joystick);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Joystick).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonJoystickActive", function (key) {
      switch (key) {
        case 'Left':
          _this.buttonJoystickLeft();

          break;

        case 'Top':
          _this.buttonJoystickTop();

          break;

        case 'Right':
          _this.buttonJoystickRight();

          break;

        case 'Bottom':
          _this.buttonJoystickBottom();

          break;

        default:
          console.log("error button Joystick");
          break;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonJoystickTop", function () {
      _this.setState({
        JoystickTop: 'top',
        JoystickRight: 'top',
        JoystickBottom: 'top',
        JoystickLeft: 'top',
        JoystickCenter: 'top'
      }, function () {
        setTimeout(function () {
          _this.setState({
            JoystickTop: false,
            JoystickRight: false,
            JoystickBottom: false,
            JoystickLeft: false,
            JoystickCenter: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonJoystickRight", function () {
      _this.setState({
        JoystickTop: 'right',
        JoystickRight: 'right',
        JoystickBottom: 'right',
        JoystickLeft: 'right',
        JoystickCenter: 'right'
      }, function () {
        setTimeout(function () {
          _this.setState({
            JoystickTop: false,
            JoystickRight: false,
            JoystickBottom: false,
            JoystickLeft: false,
            JoystickCenter: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonJoystickBottom", function () {
      _this.setState({
        JoystickTop: 'bottom',
        JoystickRight: 'bottom',
        JoystickBottom: 'bottom',
        JoystickLeft: 'bottom',
        JoystickCenter: 'bottom'
      }, function () {
        setTimeout(function () {
          _this.setState({
            JoystickTop: false,
            JoystickRight: false,
            JoystickBottom: false,
            JoystickLeft: false,
            JoystickCenter: false
          });
        }, 300);
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "buttonJoystickLeft", function () {
      _this.setState({
        JoystickTop: 'left',
        JoystickRight: 'left',
        JoystickBottom: 'left',
        JoystickLeft: 'left',
        JoystickCenter: 'left'
      }, function () {
        setTimeout(function () {
          _this.setState({
            JoystickTop: false,
            JoystickRight: false,
            JoystickBottom: false,
            JoystickLeft: false,
            JoystickCenter: false
          });
        }, 300);
      });
    });

    _this.state = {
      JoystickTop: false,
      JoystickRight: false,
      JoystickBottom: false,
      JoystickLeft: false,
      JoystickCenter: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Joystick, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Direction, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Top, {
        onClick: function onClick() {
          return _this2.buttonJoystickActive('Top');
        },
        active: this.state.JoystickTop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Vertical, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Left, {
        onClick: function onClick() {
          return _this2.buttonJoystickActive('Left');
        },
        active: this.state.JoystickLeft,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Center, {
        active: this.state.JoystickCenter,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Right, {
        onClick: function onClick() {
          return _this2.buttonJoystickActive('Right');
        },
        active: this.state.JoystickRight,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(Bottom, {
        onClick: function onClick() {
          return _this2.buttonJoystickActive('Bottom');
        },
        active: this.state.JoystickBottom,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "./static/images/next.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      })));
    }
  }]);

  return Joystick;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ }),

/***/ "./compoments/Pokedex/index.js":
/*!*************************************!*\
  !*** ./compoments/Pokedex/index.js ***!
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _compoments_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./compoments/Main */ "./compoments/Pokedex/compoments/Main.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/compoments/Pokedex/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: center;  \n  width: 100vw;\n  height: 100vh;\n  background: lightgray;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Main = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject());

var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_compoments_Main__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _compoments_Pokedex_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../compoments/Pokedex/index */ "./compoments/Pokedex/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "/Users/dvida14/Documents/github/PokeApi/pages/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_8__["createGlobalStyle"])(_templateObject());

var index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  function index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_compoments_Pokedex_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dvida14/Documents/github/PokeApi/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map