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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_21.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_21.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_21.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/utilities */ "./app/javascript/prototypes/utilities.js");
 // Array structure
// [class-name, min-diameter, max-diameter, min-layer, max-layer]
//
// prettier-ignore

var circleTypes = [['deepface-green-white', 10, 500, 2, 4], ['deepface-green-black', 10, 500, 2, 4], ['deepface-dark-green-white', 10, 500, 2, 4], ['deepface-dark-green-black', 10, 500, 2, 4], ['deepface-black', 10, 500, 2, 4], // ['circle-black',              30,  70,   1, 1],
['circle-white', 30, 70, 1, 1], // ['large-circle-black',        900, 1500, 1, 1],
['large-circle-white', 900, 1500, 1, 1]];

function createCircle(container) {
  var circleElement = document.createElement('div');
  var circleType = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(circleTypes);
  circleElement.classList.add('circle');
  var top = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(-100, 1720);
  var left = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(-100, 980);
  var size = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(circleType[1], circleType[2]);
  circleElement.style.top = [top, 'px'].join('');
  circleElement.style.left = [left, 'px'].join('');
  circleElement.style.width = [size, 'px'].join('');
  circleElement.style.height = [size, 'px'].join('');
  circleElement.style.zIndex = Math.floor(Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(circleType[3], circleType[4]));
  circleElement.style.transform = "rotate(".concat(Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(10, 350), "deg)");
  circleElement.classList.add(circleType[0]);
  container.appendChild(circleElement);
}

document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('prototype_21');
  var particlesQuantity = Math.floor(Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(10, 20));

  for (var i = 0; i < particlesQuantity; i++) {
    createCircle(container);
  }
});

/***/ }),

/***/ "./app/javascript/prototypes/utilities.js":
/*!************************************************!*\
  !*** ./app/javascript/prototypes/utilities.js ***!
  \************************************************/
/*! exports provided: getRandomArbitrary, sample, getFrame, generateHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitrary", function() { return getRandomArbitrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrame", function() { return getFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateHash", function() { return generateHash; });
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFrame() {
  return document.getElementById('frame');
}

function generateHash() {
  var symbols = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var hash = '';

  for (var i = 0; i < 6; i++) {
    hash += sample(symbols);
  }

  return hash;
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_21-1c522acfa757762ae618.js.map