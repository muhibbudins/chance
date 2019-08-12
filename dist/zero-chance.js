(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ZeroChance"] = factory();
	else
		root["ZeroChance"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Chance
 *
 * Give you a result from random calculation by decimal scoring
 *
 * @param {Array} weights List of all object with "weight" parameter
 * @param {*} options Option to show detail or not
 */
var Chance = function Chance(weights, options) {
  /**
   * Prevent not Array given as weight
   */
  if ((typeof weights === 'undefined' ? 'undefined' : _typeof(weights)) !== 'object') {
    throw Error('Only single Array with contents of object allowed as parameter');
  }

  /**
   * Prevent zero weight on parameter
   */
  if (weights.length === 0) {
    throw Error('Cannot operate with no configuration for weight');
  }

  /**
   * Temporary Weight
   */
  var tempWeight = [];

  /**
   * Create stack of all weight value (ex. 3.20, 0.0001 etc.)
   */
  weights.map(function (_ref) {
    var weight = _ref.weight;

    tempWeight.push(weight);
  });

  /**
   * Calculation process
   *
   * @param {Array} tempWeight Stack of all weight value
   */
  var calculate = function calculate(tempWeight) {
    var temp = [],
        rand = Math.random();
    var index = void 0,
        summary = 0;

    for (index = 0; index < tempWeight.length - 1; index++) {
      summary += tempWeight[index] / 100.0;
      temp[index] = summary;
    }

    for (index = 0; index < temp.length && rand >= temp[index]; index++) {}

    /**
     * Send detail if enabled in option
     */
    if (options && options.detail) {
      return Object.assign(weights[index], {
        index: index
      });
    }

    return index;
  };

  /**
   * Return result
   */
  return calculate(tempWeight);
};

exports.default = Chance;

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=zero-chance.js.map