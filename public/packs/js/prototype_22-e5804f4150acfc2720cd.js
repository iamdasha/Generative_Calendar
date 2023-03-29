/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_22.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_22.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_22.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_prototype_22_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/prototype_22/store */ "./app/javascript/prototypes/prototype_22/store.js");


function createLargeWhiteCircle() {
  var array = ['a', 'b', 'c'];
  Object(_prototypes_prototype_22_store__WEBPACK_IMPORTED_MODULE_0__["setLargeWhiteCircleStore"])(array);
  console.log('Test', Object(_prototypes_prototype_22_store__WEBPACK_IMPORTED_MODULE_0__["getLargeWhiteCircleStore"])());
  array.push('z');
  Object(_prototypes_prototype_22_store__WEBPACK_IMPORTED_MODULE_0__["setLargeWhiteCircleStore"])(array);
  console.log('Test', Object(_prototypes_prototype_22_store__WEBPACK_IMPORTED_MODULE_0__["getLargeWhiteCircleStore"])());
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('prototype_22');
  createLargeWhiteCircle();
});

/***/ }),

/***/ "./app/javascript/prototypes/prototype_22/store.js":
/*!*********************************************************!*\
  !*** ./app/javascript/prototypes/prototype_22/store.js ***!
  \*********************************************************/
/*! exports provided: getLargeWhiteCircleStore, setLargeWhiteCircleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargeWhiteCircleStore", function() { return getLargeWhiteCircleStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLargeWhiteCircleStore", function() { return setLargeWhiteCircleStore; });
var largeWhiteCircleStore = [];

function getLargeWhiteCircleStore() {
  return largeWhiteCircleStore;
}

function setLargeWhiteCircleStore(data) {
  largeWhiteCircleStore = data;
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_22-e5804f4150acfc2720cd.js.map