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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/prototype_44.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/prototype_44.js":
/*!**********************************************!*\
  !*** ./app/javascript/packs/prototype_44.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// CALENDAR
var wrapper = document.getElementById('prototype_44');
var calendar = document.createElement('div');
calendar.setAttribute('id', 'month-calendar');
wrapper.appendChild(calendar);
var month = document.createElement('ul');
month.classList.add('month');
calendar.appendChild(month);
var m = document.createElement('li');
m.classList.add('month-name');
month.appendChild(m);
var y = document.createElement('li');
y.classList.add('year-name');
month.appendChild(y);
var weekdays = document.createElement('ul');
weekdays.classList.add('weekdays');
calendar.appendChild(weekdays);
var dayName = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

for (var i = 0; i < 7; i++) {
  var li = document.createElement('li');
  li.innerHTML = dayName[i];
  weekdays.appendChild(li);
}

var days = document.createElement('ul');
days.classList.add('days');
calendar.appendChild(days);
var date = ['1', '2', '...', '31'];

for (var _i = 0; _i < 4; _i++) {
  var _li = document.createElement('li');

  _li.innerHTML = date[_i];
  days.appendChild(_li);
}

var prev = document.createElement('div');
prev.classList.add('prev');
prev.innerText = 'Предыдущий';
calendar.appendChild(prev);
var next = document.createElement('div');
next.classList.add('next');
next.innerText = 'Следующий';
calendar.appendChild(next);
var nowDate = new Date(),
    nowDateNumber = nowDate.getDate(),
    nowMonth = nowDate.getMonth(),
    nowYear = nowDate.getFullYear(),
    container = document.getElementById('month-calendar'),
    monthContainer = container.getElementsByClassName('month-name')[0],
    yearContainer = container.getElementsByClassName('year-name')[0],
    daysContainer = container.getElementsByClassName('days')[0],
    monthName = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

function generateCalendar() {
  var curDate = nowDate.setMonth(nowDate.getMonth() - 1);
  console.log(nowDate.getFullYear());

  function setMonthCalendar(year, month) {
    var monthDays = new Date(year, month + 1, 0).getDate(),
        monthPrefix = new Date(year, month, 0).getDay(),
        monthDaysText = '';
    monthContainer.textContent = monthName[month];
    yearContainer.textContent = year;
    daysContainer.innerHTML = '';

    if (monthPrefix > 0) {
      for (var _i2 = 1; _i2 <= monthPrefix; _i2++) {
        monthDaysText += '<li></li>';
      }
    }

    for (var _i3 = 1; _i3 <= monthDays; _i3++) {
      monthDaysText += '<li>' + _i3 + '</li>';
    }

    daysContainer.innerHTML = monthDaysText;

    if (month == nowMonth && year == nowYear) {
      days = daysContainer.getElementsByTagName('li');
      days[monthPrefix + nowDateNumber - 1].classList.add('date-now');
    }
  }

  setMonthCalendar(nowYear, nowMonth);

  prev.onclick = function () {
    var curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() - 1);
    var curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear, curMonth);
  };

  next.onclick = function () {
    var curDate = new Date(yearContainer.textContent, monthName.indexOf(monthContainer.textContent));
    curDate.setMonth(curDate.getMonth() + 1);
    var curYear = curDate.getFullYear(),
        curMonth = curDate.getMonth();
    setMonthCalendar(curYear, curMonth);
  };
}

document.addEventListener('DOMContentLoaded', function () {
  generateCalendar();
});

/***/ })

/******/ });
//# sourceMappingURL=prototype_44-3d5e2a959993d0e4c06b.js.map