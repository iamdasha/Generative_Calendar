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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_26.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_26.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_26.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../prototypes/utilities */ "./app/javascript/prototypes/utilities.js");
/* harmony import */ var _prototypes_prototype_26_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../prototypes/prototype_26/model */ "./app/javascript/prototypes/prototype_26/model.js");
/* harmony import */ var _prototypes_prototype_26_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prototypes/prototype_26/store */ "./app/javascript/prototypes/prototype_26/store.js");




Number.prototype.times = function (cb) {
  var i = -1;

  while (++i < this) {
    cb(i);
  }

  return +this;
};

var container;

function generateLargeCircle() {
  return new Promise(function (resolve, reject) {
    var largeCircleStore = Object(_prototypes_prototype_26_store__WEBPACK_IMPORTED_MODULE_2__["getLargeCircleStore"])();
    var _model$largeCircles = _prototypes_prototype_26_model__WEBPACK_IMPORTED_MODULE_1__["model"].largeCircles,
        sides = _model$largeCircles.sides,
        sizes = _model$largeCircles.sizes;
    var vSides = Object.keys(sides.vSides);
    var hSides = Object.keys(sides.hSides);
    var sizeKeys = Object.keys(sizes) // prettier-ignore
    ;
    2 .times(function (i) {
      var vSide = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(vSides);
      var hSide = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(hSides);
      var size = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(sizeKeys);
      var vSideParams = sides.vSides[vSide];
      var hSideParams = sides.hSides[hSide];
      var sizeParams = sizes[size];
      var sizeInPixels = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(sizeParams.from, sizeParams.to) + 'px'; // console.log('SIDES', vSide, hSide)
      // Генерируем HTML

      var circle = document.createElement('div');
      circle.classList.add('largeCircle');

      if (vSide === 'top') {
        circle.style.top = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(vSideParams.from, vSideParams.to) + 'px';
      }

      if (vSide === 'bottom') {
        circle.style.bottom = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(vSideParams.from, vSideParams.to) + 'px';
      }

      if (hSide === 'left') {
        circle.style.left = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(hSideParams.from, hSideParams.to) + 'px';
      }

      if (hSide === 'right') {
        circle.style.right = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["getRandomArbitrary"])(hSideParams.from, hSideParams.to) + 'px';
      }

      circle.style.width = sizeInPixels;
      circle.style.height = sizeInPixels;
      container.appendChild(circle); // Обновляем данные

      vSides.splice(vSides.indexOf(vSide), 1);
      hSides.splice(hSides.indexOf(hSide), 1); // console.log(vSides, hSides)
    });
    resolve();
  });
}

function generateBackground() {
  return new Promise(function (resolve, reject) {
    var background = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(_prototypes_prototype_26_model__WEBPACK_IMPORTED_MODULE_1__["model"].background);
    container.classList.add(background);
    Object(_prototypes_prototype_26_store__WEBPACK_IMPORTED_MODULE_2__["setBackgroundColorClass"])(background);
    resolve();
  });
}

function generateText() {
  var _model$texts = _prototypes_prototype_26_model__WEBPACK_IMPORTED_MODULE_1__["model"].texts,
      strings = _model$texts.strings,
      sides = _model$texts.sides;
  var string = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(strings);
  var side = Object(_prototypes_utilities__WEBPACK_IMPORTED_MODULE_0__["sample"])(sides);
  var wrapper = document.createElement('div');
  wrapper.classList.add('textWrapper');
  wrapper.classList.add(side);
  var text = document.createElement('div');
  text.innerText = string;
  text.contentEditable = true;
  text.classList.add('text');
  wrapper.appendChild(text);
  container.appendChild(wrapper);
}

function generateStory() {
  // prettier-ignore
  generateBackground().then(generateLargeCircle).then(generateText);
}

document.addEventListener('DOMContentLoaded', function () {
  container = document.getElementById('prototype_30');
  generateStory();
});

/***/ }),

/***/ "./app/javascript/prototypes/prototype_26/model.js":
/*!*********************************************************!*\
  !*** ./app/javascript/prototypes/prototype_26/model.js ***!
  \*********************************************************/
/*! exports provided: model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
var model = {
  background: ['white', 'green', 'black'],
  largeCircles: {
    sides: {
      vSides: {
        top: {
          from: -300,
          to: -100
        },
        bottom: {
          from: -300,
          to: -100
        }
      },
      hSides: {
        left: {
          from: -300,
          to: -100
        },
        right: {
          from: -300,
          to: -100
        }
      }
    },
    sizes: {
      small: {
        from: 400,
        to: 1000
      },
      large: {
        from: 800,
        to: 2000
      }
    }
  },
  texts: {
    strings: ['выпускной экзамен группы дпо «дизайн и программирование»', 'презентация направления «дизайн и программирование»', '2-я презентация направления «дизайн и программирование» в школе дизайна ниу вшэ', 'выпускной экзамен группы дпо «дизайн и программирование»', 'день открытых дверей направления «дизайн и программирование»'],
    sides: ['top', 'center', 'bottom']
  }
};


/***/ }),

/***/ "./app/javascript/prototypes/prototype_26/store.js":
/*!*********************************************************!*\
  !*** ./app/javascript/prototypes/prototype_26/store.js ***!
  \*********************************************************/
/*! exports provided: getBackgroundColorClass, setBackgroundColorClass, getLargeCircleStore, setLargeCircleStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundColorClass", function() { return getBackgroundColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBackgroundColorClass", function() { return setBackgroundColorClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLargeCircleStore", function() { return getLargeCircleStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLargeCircleStore", function() { return setLargeCircleStore; });
var backgroundColorClass = '';
var largeCircleStore = [];

function getBackgroundColorClass() {
  return backgroundColorClass;
}

function setBackgroundColorClass(className) {
  backgroundColorClass = className;
}

function getLargeCircleStore() {
  return largeCircleStore;
}

function setLargeCircleStore(data) {
  largeCircleStore = data;
}



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
//# sourceMappingURL=prototype_26-cf9b370a9d6f2353fc75.js.map