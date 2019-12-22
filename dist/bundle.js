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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/testIndex.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap);\"]);\n// Module\nexports.push([module.i, \".dpjs_datepicker {\\n  position: absolute;\\n  display: none;\\n  width: 500px;\\n  padding: 0 20px;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  background: #fff;\\n  font-family: 'Poppins', sans-serif;\\n  transition: 0.5s linear;\\n  opacity: 0;\\n  z-index: 2147483647; }\\n  .dpjs_datepicker .dpjs_selectors {\\n    display: flex;\\n    justify-content: space-evenly;\\n    padding: 10px 0; }\\n    .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper {\\n      display: flex; }\\n      .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper select {\\n        display: none; }\\n      .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect {\\n        width: 100px;\\n        height: 30px;\\n        border: 1px solid #ccc;\\n        border-radius: 5px;\\n        position: relative;\\n        cursor: pointer; }\\n        .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectValue {\\n          display: flex;\\n          height: 100%;\\n          align-items: center;\\n          padding: 0 20px;\\n          position: relative; }\\n          .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectValue:before {\\n            content: '';\\n            position: absolute;\\n            right: 10px;\\n            border-top: 5px solid #444;\\n            border-left: 5px solid transparent;\\n            border-right: 5px solid transparent;\\n            border-bottom: none; }\\n        .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList {\\n          list-style: none;\\n          margin: 0;\\n          padding: 0;\\n          position: absolute;\\n          top: 31px;\\n          left: -1px;\\n          width: 100%;\\n          display: flex;\\n          flex-direction: column;\\n          align-items: center;\\n          background: #fff;\\n          box-shadow: 0 5px 10px #ccc;\\n          border-top: none;\\n          border-bottom-left-radius: 5px;\\n          border-bottom-right-radius: 5px;\\n          height: 0;\\n          overflow-y: scroll;\\n          z-index: 99;\\n          transition: 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28); }\\n          .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList::-webkit-scrollbar {\\n            width: 6px;\\n            background: #ddd; }\\n          .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList::-webkit-scrollbar-thumb {\\n            background: #bbb;\\n            border-radius: 20px;\\n            transition: 0.3s linear; }\\n            .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList::-webkit-scrollbar-thumb:hover {\\n              background: #aaa; }\\n          .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList li {\\n            width: 100%;\\n            text-align: center;\\n            padding: 5px 0;\\n            border-top: 1px solid #eee;\\n            cursor: pointer;\\n            transition: 0.3s linear; }\\n            .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList li:first-of-type {\\n              border-top: none; }\\n            .dpjs_datepicker .dpjs_selectors .dpjs_selectWrapper .dpjs_pseudoSelect .dpjs_pseudoSelectList li:hover {\\n              background: #eee; }\\n  .dpjs_datepicker .dpjs_dates {\\n    transition: 0.5s linear; }\\n  .dpjs_datepicker .dpjs_days, .dpjs_datepicker .dpjs_datesList {\\n    display: flex; }\\n    .dpjs_datepicker .dpjs_days p, .dpjs_datepicker .dpjs_datesList p {\\n      width: calc(500px/7 - 10px);\\n      text-align: center;\\n      margin: 0 5px;\\n      padding: 5px 10px;\\n      cursor: pointer; }\\n  .dpjs_datepicker .dpjs_datesList {\\n    margin: 5px 0; }\\n    .dpjs_datepicker .dpjs_datesList p {\\n      border: 1px solid transparent;\\n      border-radius: 5px;\\n      transition: 0.3s linear; }\\n      .dpjs_datepicker .dpjs_datesList p:hover {\\n        border: 1px solid #ccc; }\\n    .dpjs_datepicker .dpjs_datesList .dpjs_emptyDateSlot {\\n      background: #eee;\\n      cursor: not-allowed; }\\n      .dpjs_datepicker .dpjs_datesList .dpjs_emptyDateSlot:hover {\\n        border: 1px solid transparent; }\\n  .dpjs_datepicker .dpjs_legend {\\n    display: flex;\\n    margin: 30px 0 10px;\\n    justify-content: space-evenly;\\n    font-size: 10px; }\\n    .dpjs_datepicker .dpjs_legend .dpjs_legend_today:before, .dpjs_datepicker .dpjs_legend .dpjs_legend_selected:before {\\n      content: '';\\n      display: inline-block;\\n      width: 8px;\\n      height: 8px;\\n      margin-right: 10px; }\\n    .dpjs_datepicker .dpjs_legend .dpjs_legend_today:before {\\n      background: #00d7cd; }\\n    .dpjs_datepicker .dpjs_legend .dpjs_legend_selected:before {\\n      background: #ccc; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar stylesInDom = {};\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nfunction listToStyles(list, options) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\nfunction addStylesToDom(styles, options) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i];\n    var domStyle = stylesInDom[item.id];\n    var j = 0;\n\n    if (domStyle) {\n      domStyle.refs++;\n\n      for (; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j]);\n      }\n\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j], options));\n      }\n    } else {\n      var parts = [];\n\n      for (; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j], options));\n      }\n\n      stylesInDom[item.id] = {\n        id: item.id,\n        refs: 1,\n        parts: parts\n      };\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n\n  if (typeof options.attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      options.attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(options.attributes).forEach(function (key) {\n    style.setAttribute(key, options.attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  var styles = listToStyles(list, options);\n  addStylesToDom(styles, options);\n  return function update(newList) {\n    var mayRemove = [];\n\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i];\n      var domStyle = stylesInDom[item.id];\n\n      if (domStyle) {\n        domStyle.refs--;\n        mayRemove.push(domStyle);\n      }\n    }\n\n    if (newList) {\n      var newStyles = listToStyles(newList, options);\n      addStylesToDom(newStyles, options);\n    }\n\n    for (var _i = 0; _i < mayRemove.length; _i++) {\n      var _domStyle = mayRemove[_i];\n\n      if (_domStyle.refs === 0) {\n        for (var j = 0; j < _domStyle.parts.length; j++) {\n          _domStyle.parts[j]();\n        }\n\n        delete stylesInDom[_domStyle.id];\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * All the source JS for datepick-js\n */\n// import for the datepick-js styles\n // Zeller Month Map\n\nvar monthsMap = {\n  Jan: 11,\n  Feb: 12,\n  Mar: 1,\n  Apr: 2,\n  May: 3,\n  Jun: 4,\n  Jul: 5,\n  Aug: 6,\n  Sep: 7,\n  Oct: 8,\n  Nov: 9,\n  Dec: 10\n}; // Zeller days map\n\nvar daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\nvar monthsList = Object.keys(monthsMap);\nvar datepickerStates = {};\n\nfunction initDatepicker(elementID, dpjsConfig) {\n  createDatePickerState(elementID, dpjsConfig);\n  var today = new Date();\n  var initDate = dpjsConfig.initDate || today.getDate();\n  var initMonth = dpjsConfig.initMonth || monthsList[today.getMonth()];\n  var initYear = dpjsConfig.initYear || today.getFullYear();\n\n  var isInitDateToday = function isInitDateToday() {\n    if (initDate === today.getDate() && initMonth === monthsList[today.getMonth()] && initYear === today.getFullYear()) return true;\n    return false;\n  }; // Attach the initial datepicker scaffold\n\n\n  document.querySelector('body').innerHTML += \"<div id=\\\"dpjs_datepicker_\".concat(elementID, \"\\\" class=\\\"dpjs_datepicker\\\"><div class=\\\"dpjs_selectors\\\"><div id=\\\"dpjs_pseudoMonthSelector_\").concat(elementID, \"\\\" class=\\\"dpjs_selectWrapper\\\"><select name=\\\"dpjs_month\\\" id=\\\"dpjs_monthSelector_\").concat(elementID, \"\\\"></select></div><div id=\\\"dpjs_pseudoYearSelector_\").concat(elementID, \"\\\" class=\\\"dpjs_selectWrapper\\\"><select name=\\\"dpjs_year\\\" id=\\\"dpjs_yearSelector_\").concat(elementID, \"\\\"></select></div></div><div id=\\\"dpjs_calender_\").concat(elementID, \"\\\"><div id=\\\"dpjs_days_\").concat(elementID, \"\\\" class=\\\"dpjs_days\\\"></div><div id=\\\"dpjs_dates_\").concat(elementID, \"\\\" class=\\\"dpjs_dates\\\"></div></div><div class=\\\"dpjs_legend\\\"><span class=\\\"dpjs_legend_today\\\">\").concat(!isInitDateToday() ? 'Default Selection' : 'Today', \"</span><span class=\\\"dpjs_legend_selected\\\">Selected Date</span></div></div>\");\n  populateCalenderDays(elementID);\n  populateCalenderDates(elementID, initMonth, initYear, dpjsConfig);\n  addSelectors(elementID, {\n    initMonth: initMonth,\n    initYear: initYear,\n    minYear: dpjsConfig.minYear,\n    maxYear: dpjsConfig.maxYear\n  });\n  setDatepickerPos(elementID);\n  registerDatepickerEvents(elementID, dpjsConfig);\n}\n\nfunction createDatePickerState(elementID, dpjsConfig) {\n  datepickerStates[elementID] = {\n    elementID: elementID,\n    datepickerID: \"dpjs_datepicker_\".concat(elementID),\n    isDatepickerOpen: false,\n    dpjsConfig: dpjsConfig,\n    selectedDate: ''\n  };\n}\n\nfunction registerDatepickerEvents(elementID, dpjsConfig) {\n  var datepickerInput = document.querySelector(\"#\".concat(elementID));\n  var datepickerWidget = document.querySelector(\"#dpjs_datepicker_\".concat(elementID));\n\n  var preventEdits = function preventEdits() {\n    datepickerInput.addEventListener('keydown', function (event) {\n      event.preventDefault();\n      event.stopPropagation();\n    });\n  };\n\n  var showDatepicker = function showDatepicker() {\n    datepickerWidget.style.display = 'block';\n    setTimeout(function () {\n      datepickerWidget.style.opacity = '1';\n    }, 100);\n  };\n\n  var hideDatepicker = function hideDatepicker() {\n    datepickerWidget.style.opacity = '0';\n    setTimeout(function () {\n      datepickerWidget.style.display = 'none';\n    }, 100);\n  };\n\n  var toggleDatepickerOnCLick = function toggleDatepickerOnCLick() {\n    datepickerStates[elementID] = false;\n    document.addEventListener('click', function (event) {\n      if (event.target.getAttribute('id') === elementID) {\n        showDatepicker();\n      } else if (!document.querySelector(\"#dpjs_datepicker_\".concat(elementID)).contains(event.target)) {\n        hideDatepicker();\n      }\n    });\n  };\n\n  var handleDateSelection = function handleDateSelection() {\n    document.querySelector(\"#dpjs_dates_\".concat(elementID)).addEventListener('click', function (event) {\n      var targetID = event.target.getAttribute('id');\n\n      if (targetID && targetID.split('-')[0] === \"dpjs_\".concat(elementID, \"_date\")) {\n        var monthValue = document.querySelector(\"#dpjs_monthSelector_\".concat(elementID)).value;\n        var yearValue = document.querySelector(\"#dpjs_yearSelector_\".concat(elementID)).value;\n        var datepickerInputElement = document.querySelector(\"#\".concat(elementID)); // De-highlight the prevous selected date\n\n        if (datepickerInputElement.value !== '') {\n          var currentDateValue = Number(datepickerInputElement.value.split('-')[0]);\n          var todaysDate = new Date().getDate();\n          document.querySelector(\"#dpjs_\".concat(elementID, \"_date-\").concat(datepickerInputElement.value.split('-')[0])).style.background = currentDateValue === todaysDate ? '#00d7cd' : '#fff';\n        } // Highlight the selected date\n\n\n        event.target.style.background = '#ccc';\n        var newDate = \"\".concat(event.target.textContent, \"-\").concat(monthValue, \"-\").concat(yearValue); // Set the value in the input\n\n        datepickerInputElement.value = newDate; // Hide the datepicker\n\n        hideDatepicker(); // Redirect to custom onChnage function (if-present)\n\n        dpjsConfig.onChange(newDate);\n      }\n    });\n  };\n\n  preventEdits();\n  toggleDatepickerOnCLick();\n  handleDateSelection();\n}\n\nfunction setDatepickerPos(elementID) {\n  if (document.querySelectorAll(\"#\".concat(elementID)).length > 1) throw new Error(\"DatepickJS:: You have more than one instace of the ID => \\\"\".concat(elementID, \"\\\" in the DOM. Please ensure the datepicker input to have a unique ID\"));\n\n  var getOffset = function getOffset(el) {\n    var _x = 0;\n    var _y = 0;\n\n    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {\n      _x += el.offsetLeft - el.scrollLeft;\n      _y += el.offsetTop - el.scrollTop;\n      el = el.offsetParent;\n    }\n\n    return {\n      top: _y,\n      left: _x\n    };\n  };\n\n  var inputEl = document.querySelector(\"#\".concat(elementID));\n  var inputPos = getOffset(inputEl);\n  var datepickerWidget = document.querySelector(\"#dpjs_datepicker_\".concat(elementID));\n  datepickerWidget.style.top = \"\".concat(inputPos.top + inputEl.offsetHeight, \"px\");\n  datepickerWidget.style.left = \"\".concat(inputPos.left, \"px\");\n} // This fuction populates the selector contents\n\n\nfunction addSelectors(elementID, _ref) {\n  var initMonth = _ref.initMonth,\n      initYear = _ref.initYear,\n      minYear = _ref.minYear,\n      maxYear = _ref.maxYear;\n  var selectorClauses = ['Month', 'Year'];\n\n  var populateRealSelectors = function populateRealSelectors(selectorClauses, startYear, endYear) {\n    selectorClauses.forEach(function (selectorClause) {\n      if (selectorClause === 'Month') {\n        monthsList.forEach(function (month) {\n          document.querySelector(\"#dpjs_monthSelector_\".concat(elementID)).innerHTML += \"<option value=\\\"\".concat(month, \"\\\">\").concat(month, \"</option>\");\n        });\n      }\n\n      if (selectorClause === 'Year') {\n        var initialYear = startYear || new Date().getFullYear() - 10;\n        var finalYear = endYear || new Date().getFullYear();\n\n        for (var year = initialYear; year <= finalYear; year += 1) {\n          document.querySelector(\"#dpjs_yearSelector_\".concat(elementID)).innerHTML += \"<option value=\\\"\".concat(year, \"\\\">\").concat(year, \"</option>\");\n        }\n      } // Set the selectorValues\n\n\n      document.querySelector(\"#dpjs_\".concat(selectorClause.toLowerCase(), \"Selector_\").concat(elementID)).value = eval(\"init\".concat(selectorClause));\n    });\n  };\n\n  var populatePseudoSelectors = function populatePseudoSelectors(selectorClauses, startYear, endYear) {\n    selectorClauses.forEach(function (selectorClause) {\n      if (selectorClause === 'Month') {\n        document.querySelector(\"#dpjs_pseudoMonthSelector_\".concat(elementID, \" .dpjs_pseudoSelect\")).innerHTML += \"<ul id=\\\"dpjs_monthSelectList_\".concat(elementID, \"\\\" class=\\\"dpjs_pseudoSelectList\\\"></ul>\");\n        monthsList.forEach(function (month) {\n          document.querySelector(\"#dpjs_monthSelectList_\".concat(elementID)).innerHTML += \"<li value=\\\"\".concat(month, \"\\\">\").concat(month, \"</li>\");\n        });\n      }\n\n      if (selectorClause === 'Year') {\n        document.querySelector(\"#dpjs_pseudoYearSelector_\".concat(elementID, \" .dpjs_pseudoSelect\")).innerHTML += \"<ul id=\\\"dpjs_yearSelectList_\".concat(elementID, \"\\\" class=\\\"dpjs_pseudoSelectList\\\"></ul>\");\n        var initialYear = startYear || new Date().getFullYear() - 10;\n        var finalYear = endYear || new Date().getFullYear();\n\n        for (var year = initialYear; year <= finalYear; year += 1) {\n          document.querySelector(\"#dpjs_yearSelectList_\".concat(elementID)).innerHTML += \"<li value=\\\"\".concat(year, \"\\\">\").concat(year, \"</li>\");\n        }\n      }\n    });\n  };\n\n  var registerSelectorEvents = function registerSelectorEvents(selectorClauses) {\n    // Close select-list event\n    document.addEventListener('click', function (event) {\n      var parentElementClass = event.target.parentElement ? event.target.parentElement.className : '';\n\n      if (event.target.className !== 'dpjs_pseudoSelectValue' && parentElementClass) {\n        var selectorsList = document.querySelectorAll('.dpjs_pseudoSelectList');\n        Object.keys(selectorsList).forEach(function (index) {\n          selectorsList[index].style.height = 0;\n        });\n      }\n    }); // Loop to register open select list and option choose events\n\n    selectorClauses.forEach(function (selectorClause) {\n      // Open select-list input\n      document.querySelector(\"#dpjs_selected\".concat(selectorClause, \"Value_\").concat(elementID)).addEventListener('click', function (event) {\n        if (event.target.className === 'dpjs_pseudoSelectValue') event.target.nextElementSibling.style.height = '300px';\n      }); // Select an option event\n\n      document.querySelector(\"#dpjs_\".concat(selectorClause.toLowerCase(), \"SelectList_\").concat(elementID)).addEventListener('click', function (event) {\n        document.querySelector(\"#dpjs_selected\".concat(selectorClause, \"Value_\").concat(elementID)).textContent = event.target.getAttribute('value'); // Set the value in the original select input\n\n        document.querySelector(\"#dpjs_\".concat(selectorClause.toLowerCase(), \"Selector_\").concat(elementID)).value = event.target.getAttribute('value');\n        event.target.parentElement.style.height = '0';\n        var monthVal = document.querySelector(\"#dpjs_monthSelector_\".concat(elementID)).value;\n        var yearVal = document.querySelector(\"#dpjs_yearSelector_\".concat(elementID)).value;\n        populateCalenderDates(elementID, monthVal, yearVal);\n      });\n    });\n  }; // Add pseudoSelectors\n\n\n  selectorClauses.forEach(function (selectorClause) {\n    document.querySelector(\"#dpjs_pseudo\".concat(selectorClause, \"Selector_\").concat(elementID)).innerHTML += \"<div id=\\\"dpjs_pseudo\".concat(selectorClause, \"Selector_\").concat(elementID, \"\\\" class=\\\"dpjs_pseudoSelect\\\"><span id=\\\"dpjs_selected\").concat(selectorClause, \"Value_\").concat(elementID, \"\\\" class=\\\"dpjs_pseudoSelectValue\\\">\").concat(eval(\"init\".concat(selectorClause)), \"</span></div>\");\n  }); // TODO: Add params dependency line from init function\n\n  populateRealSelectors(selectorClauses, minYear, maxYear, initMonth, initYear);\n  populatePseudoSelectors(selectorClauses, minYear, maxYear);\n  registerSelectorEvents(selectorClauses);\n} // Zeller Magic :P\n\n\nfunction getMonthStartingDayIndex(month, year) {\n  var K = 1;\n  var M = monthsMap[month];\n  var D = [11, 12].indexOf(M) !== -1 ? Number(String(year).slice(2, 4)) - 1 : Number(String(year).slice(2, 4));\n  var C = Number(String(year).slice(0, 2));\n  var F = K + Math.floor((13 * M - 1) / 5) + D + Math.floor(D / 4) + Math.floor(C / 4) - 2 * C;\n  var remainder = F < 0 ? 7 + F % 7 : F % 7;\n  return remainder;\n}\n\nfunction isLeapYear(year) {\n  if (year % 4 === 0) {\n    if (year % 100 === 0) {\n      if (year % 400 === 0) return true;\n      return false;\n    }\n\n    return true;\n  }\n}\n\nfunction getTotalDaysInMonth(month, year) {\n  // Check for Feb Leap year condition\n  if (month === 'Feb') {\n    if (isLeapYear(year)) return 29;\n    return 28;\n  }\n\n  var monthIndex = monthsList.indexOf(month);\n  if (monthIndex <= 6) return monthIndex % 2 === 0 ? 31 : 30;\n  return monthIndex % 2 !== 0 ? 31 : 30;\n}\n\nfunction populateCalenderDays(elementID) {\n  daysList.forEach(function (day) {\n    document.querySelector(\"#dpjs_days_\".concat(elementID)).innerHTML += \"<p id=\\\"dpjs_\".concat(elementID, \"_day-\").concat(day, \"\\\">\").concat(day, \"</p>\");\n  });\n}\n\nfunction populateCalenderDates(elementID, month, year, dpjsConfig) {\n  // Clear any existing dates in the calender\n  document.querySelector(\"#dpjs_dates_\".concat(elementID)).style.opacity = '0';\n  setTimeout(function () {\n    document.querySelector(\"#dpjs_dates_\".concat(elementID)).innerHTML = '';\n    var startingDayIndex = getMonthStartingDayIndex(month, year);\n    var totalDaysInMonth = getTotalDaysInMonth(month, year);\n    var initDate = dpjsConfig.initDate || new Date().getDate();\n    var dateValue = 1;\n    var rowValue = 1;\n    var startPopulatingDates = false;\n\n    while (dateValue <= totalDaysInMonth) {\n      document.querySelector(\"#dpjs_dates_\".concat(elementID)).innerHTML += \"<div id=\\\"dpjs_\".concat(elementID, \"_datesRow-\").concat(rowValue, \"\\\" class=\\\"dpjs_datesList\\\"></div>\");\n\n      for (var i = 0; i < 7; i++) {\n        if (i === startingDayIndex) startPopulatingDates = true;\n\n        if (startPopulatingDates && dateValue <= totalDaysInMonth) {\n          // add <p> tag with date\n          document.querySelector(\"#dpjs_\".concat(elementID, \"_datesRow-\").concat(rowValue)).innerHTML += \"<p id=\\\"dpjs_\".concat(elementID, \"_date-\").concat(dateValue, \"\\\">\").concat(dateValue, \"</p>\"); // Highlight todays date\n\n          if (dateValue === initDate) {\n            document.querySelector(\"#dpjs_\".concat(elementID, \"_date-\").concat(dateValue)).style.background = '#00d7cd';\n          }\n\n          dateValue++;\n        } else {\n          // add empty <p> tag\n          document.querySelector(\"#dpjs_\".concat(elementID, \"_datesRow-\").concat(rowValue)).innerHTML += \"<p class=\\\"dpjs_emptyDateSlot\\\"></p>\";\n        }\n      }\n\n      if (dateValue <= totalDaysInMonth) rowValue++;\n    }\n\n    document.querySelector(\"#dpjs_dates_\".concat(elementID)).style.opacity = '1';\n  }, 500);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initDatepicker);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\ncontent = content.__esModule ? content.default : content;\n\nif (typeof content === 'string') {\n  content = [[module.i, content, '']];\n}\n\nvar options = {}\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\")(content, options);\n\nif (content.locals) {\n  module.exports = content.locals;\n}\n\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ }),

/***/ "./src/testIndex.js":
/*!**************************!*\
  !*** ./src/testIndex.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\nconsole.log('Yo!');\ndocument.addEventListener('DOMContentLoaded', function () {\n  Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('testInput', {\n    minYear: 1980,\n    maxYear: 2020 // initDate: 19,\n    // initMonth: 'Apr',\n    // initYear: 1982,\n    // onChange: value => {},\n\n  });\n});\n\n//# sourceURL=webpack:///./src/testIndex.js?");

/***/ })

/******/ });