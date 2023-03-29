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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_42.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_42.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_42.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/utilities */ "./app/javascript/prototypes/utilities.js");
// flower

var frameRate = 30;
var canvasSize = {
  width: 0,
  height: 0
};
var colorSwitch = false;
var w = 0;
var h = 0;
var x = 0;
var y = 0;
var r = 0;
var g = 0;
var b = 0;
var container;

function addRectangle() {
  w = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(20, 80);
  h = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(20, 80);
  x = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, canvasSize.width - w);
  y = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, canvasSize.height - h);
  r = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 255);
  g = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 255);
  b = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 255);
  var rectangle = document.createElement('div');
  rectangle.style.width = w + 'px';
  rectangle.style.height = h + 'px';
  rectangle.style.top = y + 'px';
  rectangle.style.left = x + 'px';

  if (colorSwitch) {
    rectangle.style.backgroundColor = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
  } else {
    // rectangle.style.backgroundColor = `rgb(${r}, ${r}, ${r})`
    var hC = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 360);
    var sC = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 100);
    var lC = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(0, 100);
    rectangle.style.backgroundColor = "hsl(".concat(hC, ", ").concat(sC, ", ").concat(lC, ")");
  }

  container.appendChild(rectangle);
}

function clearCanvas() {
  container.innerHTML = '';
}

function renderUI() {
  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  var toggleSwitch = document.createElement('div');
  toggleSwitch.classList.add('toggleSwitch');
  toggleSwitch.innerText = 'Toggle Color';
  toggleSwitch.addEventListener('click', function () {
    toggleSwitch.classList.toggle('active');
    colorSwitch = !colorSwitch;
  });
  var resetButton = document.createElement('div');
  resetButton.classList.add('resetButton');
  resetButton.innerText = 'Clear';
  resetButton.addEventListener('click', function () {
    clearCanvas();
  });
  wrapper.appendChild(toggleSwitch);
  wrapper.appendChild(resetButton);
  document.body.appendChild(wrapper);
}

document.addEventListener('DOMContentLoaded', function () {
  container = document.getElementById('prototype_42');
  canvasSize.width = window.innerWidth;
  canvasSize.height = window.innerHeight;
  renderUI();
  setInterval(addRectangle, 1000 / frameRate);
});

/***/ }),

/***/ "./app/javascript/prototypes/utilities.js":
/*!************************************************!*\
  !*** ./app/javascript/prototypes/utilities.js ***!
  \************************************************/
/*! exports provided: getRandomArbitrary, sample, getFrame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArbitrary", function() { return getRandomArbitrary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sample", function() { return sample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFrame", function() { return getFrame; });
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getFrame() {
  return document.getElementById('frame');
}



/***/ })

/******/ });
//# sourceMappingURL=prototype_42-3e3244bb70939297238c.js.map