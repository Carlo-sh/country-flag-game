/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ELEGANT TYPEWRITER Bold.ttf */ \"./fonts/ELEGANT TYPEWRITER Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/ELEGANT TYPEWRITER Regular.ttf */ \"./fonts/ELEGANT TYPEWRITER Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/world-wall.png */ \"./images/world-wall.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n\t--primary-bg-color: #bbc7be;\n\t--container-bg-color: #c4a19f;\n}\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\n@font-face {\n\tfont-family: TypewriterBold;\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n\tfont-family: TypewriterReg;\n\tsrc: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--primary-bg-color);\n\tbackground: linear-gradient(\n\t\t\trgba(255, 255, 255, 0.7),\n\t\t\trgba(255, 255, 255, 0.7)\n\t\t),\n\t\turl(${___CSS_LOADER_URL_REPLACEMENT_2___});\n}\n\nh1 {\n\tfont-family: 'TypewriterBold', sans-serif;\n\ttext-align: center;\n\ttext-transform: capitalize;\n\tpadding: 16px 0 32px 0;\n}\n\n#container {\n\tdisplay: flex;\n\tjustify-content: center;\n\tcolumn-gap: 30px;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 100%;\n}\n\n#flag-container {\n\tbackground-color: var(--container-bg-color);\n\twidth: 500px;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tmargin: 0 auto;\n\t-webkit-box-shadow: 0px 0px 10px 3px #000000;\n\t-moz-box-shadow: 0px 0px 10px 3px #000000;\n\t-o-box-shadow: 0px 0px 10px 3px #000000;\n\tbox-shadow: 0px 0px 10px 3px #000000;\n}\n\n.flag-wrapper {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.flag-light:hover {\n\tbackground-color: gold;\n}\n\n.correct-answer {\n\tbackground-color: green;\n}\n\n.wrong-answer {\n\tbackground-color: red;\n}\n\n.disable-div {\n\tpointer-events: none;\n}\n\n.flag {\n\twidth: auto;\n\theight: 150px;\n}\n\nh2 {\n\tfont-family: 'TypewriterReg', sans-serif;\n\tpadding: 32px 0;\n}\n\n#lives-wrapper {\n\tdisplay: flex;\n}\n\n#lives {\n\tpadding-right: 1rem;\n}\n\n#score {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://country-flag-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://country-flag-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://country-flag-game/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://country-flag-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://country-flag-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://country-flag-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/country-flag.json */ \"./data/country-flag.json\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _icons_heart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/heart.svg */ \"./icons/heart.svg\");\n\n\n// import Wall from '../images/world-wall.png';\n\n\nconst content = document.getElementById('content');\nconst flagContainer = document.getElementById('flag-container');\nconst livesWrapper = document.getElementById('lives-wrapper');\nconst lives = document.getElementById('lives');\n\nlet countryNames = [];\nlet score = 0;\nlet livesNum = 3;\n\nconst yourScore = document.getElementById('your-score');\n\nwhile (countryNames.length < 4) {\n\tlet idx = Math.floor(Math.random() * (_data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__.length + 1));\n\tif (!countryNames.includes(_data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__[idx].country)) {\n\t\tcountryNames.push(_data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__[idx].country);\n\n\t\tconst flagWrapper = document.createElement('div');\n\t\tflagWrapper.classList.add('flag-wrapper', 'flag-light');\n\t\tflagWrapper.setAttribute('name', `${_data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__[idx].country}`);\n\n\t\tconst flag = new Image();\n\t\tflag.src = _data_country_flag_json__WEBPACK_IMPORTED_MODULE_0__[idx].flag;\n\t\tflag.classList.add('flag');\n\n\t\tflagWrapper.appendChild(flag);\n\t\tflagContainer.appendChild(flagWrapper);\n\t}\n}\n\nfor (let i = 0; i < 3; i++) {\n\tconst heartIcon = new Image();\n\theartIcon.src = _icons_heart_svg__WEBPACK_IMPORTED_MODULE_2__;\n\tlivesWrapper.appendChild(heartIcon);\n}\n\nconst flagWrappers = document.querySelectorAll('.flag-wrapper');\n\nlet guessIdx = Math.floor(Math.random() * countryNames.length);\n\nconst guessCountry = document.createElement('h2');\nguessCountry.textContent = countryNames[guessIdx];\ncontent.appendChild(guessCountry);\n\nflagWrappers.forEach(el => {\n\tel.addEventListener('click', () => {\n\t\tflagWrappers.forEach(el => {\n\t\t\tel.classList.remove('flag-light');\n\t\t\tel.classList.add('disable-div');\n\t\t});\n\t\tconst countryName = el.getAttribute('name');\n\t\tif (countryName === guessCountry.textContent) {\n\t\t\tel.classList.add('correct-answer');\n\t\t\tscore++;\n\t\t\tyourScore.textContent = `Your Score: ${score}`;\n\t\t} else {\n\t\t\tel.classList.add('wrong-answer');\n\t\t\tlivesWrapper.removeChild(livesWrapper.lastChild);\n\t\t\tlivesNum--;\n\t\t}\n\t});\n});\n\n\n//# sourceURL=webpack://country-flag-game/./src/index.js?");

/***/ }),

/***/ "./fonts/ELEGANT TYPEWRITER Bold.ttf":
/*!*******************************************!*\
  !*** ./fonts/ELEGANT TYPEWRITER Bold.ttf ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"91cc062ff8f8622c1f03.ttf\";\n\n//# sourceURL=webpack://country-flag-game/./fonts/ELEGANT_TYPEWRITER_Bold.ttf?");

/***/ }),

/***/ "./fonts/ELEGANT TYPEWRITER Regular.ttf":
/*!**********************************************!*\
  !*** ./fonts/ELEGANT TYPEWRITER Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e19a066e546a10da5e06.ttf\";\n\n//# sourceURL=webpack://country-flag-game/./fonts/ELEGANT_TYPEWRITER_Regular.ttf?");

/***/ }),

/***/ "./icons/heart.svg":
/*!*************************!*\
  !*** ./icons/heart.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d0251631010ffe9f384.svg\";\n\n//# sourceURL=webpack://country-flag-game/./icons/heart.svg?");

/***/ }),

/***/ "./images/world-wall.png":
/*!*******************************!*\
  !*** ./images/world-wall.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8a81b75d3fce5c894755.png\";\n\n//# sourceURL=webpack://country-flag-game/./images/world-wall.png?");

/***/ }),

/***/ "./data/country-flag.json":
/*!********************************!*\
  !*** ./data/country-flag.json ***!
  \********************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e8.svg\",\"country\":\"Ascension Island\",\"code\":\"ac\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1e9.svg\",\"country\":\"Andorra\",\"code\":\"ad\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ea.svg\",\"country\":\"United Arab Emirates\",\"code\":\"ae\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1eb.svg\",\"country\":\"Afghanistan\",\"code\":\"af\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ec.svg\",\"country\":\"Antigua & Barbuda\",\"code\":\"ag\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ee.svg\",\"country\":\"Anguilla\",\"code\":\"ai\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f1.svg\",\"country\":\"Albania\",\"code\":\"al\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f2.svg\",\"country\":\"Armenia\",\"code\":\"am\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f4.svg\",\"country\":\"Angola\",\"code\":\"ad\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f6.svg\",\"country\":\"Antarctica\",\"code\":\"aq\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f7.svg\",\"country\":\"Argentina\",\"code\":\"ar\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f8.svg\",\"country\":\"American Samoa\",\"code\":\"as\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1f9.svg\",\"country\":\"Austria\",\"code\":\"at\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fa.svg\",\"country\":\"Australia\",\"code\":\"au\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fc.svg\",\"country\":\"Aruba\",\"code\":\"aw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1fd.svg\",\"country\":\"Åland Islands\",\"code\":\"ax\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e6-1f1ff.svg\",\"country\":\"Azerbaijan\",\"code\":\"az\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e6.svg\",\"country\":\"Bosnia & Herzegovina\",\"code\":\"ba\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e7.svg\",\"country\":\"Barbados\",\"code\":\"bb\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1e9.svg\",\"country\":\"Bangladesh\",\"code\":\"bd\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ea.svg\",\"country\":\"Belgium\",\"code\":\"be\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1eb.svg\",\"country\":\"Burkina Faso\",\"code\":\"bf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ec.svg\",\"country\":\"Bulgaria\",\"code\":\"bg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ed.svg\",\"country\":\"Bahrain\",\"code\":\"bh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ee.svg\",\"country\":\"Burundi\",\"code\":\"bi\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ef.svg\",\"country\":\"Benin\",\"code\":\"bj\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f1.svg\",\"country\":\"St. Barthélemy\",\"code\":\"bl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f2.svg\",\"country\":\"Bermuda\",\"code\":\"bm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f3.svg\",\"country\":\"Brunei\",\"code\":\"bn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f4.svg\",\"country\":\"Bolivia\",\"code\":\"bo\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f6.svg\",\"country\":\"Caribbean Netherlands\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f7.svg\",\"country\":\"Brazil\",\"code\":\"br\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f8.svg\",\"country\":\"Bahamas\",\"code\":\"bs\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1f9.svg\",\"country\":\"Bhutan\",\"code\":\"bt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fb.svg\",\"country\":\"Bouvet Island\",\"code\":\"bv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fc.svg\",\"country\":\"Botswana\",\"code\":\"bw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1fe.svg\",\"country\":\"Belarus\",\"code\":\"by\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e7-1f1ff.svg\",\"country\":\"Belize\",\"code\":\"bz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e6.svg\",\"country\":\"Canada\",\"code\":\"ca\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e8.svg\",\"country\":\"Cocos (Keeling) Islands\",\"code\":\"cc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1e9.svg\",\"country\":\"Congo - Kinshasa\",\"code\":\"cg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1eb.svg\",\"country\":\"Central African Republic\",\"code\":\"cf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ec.svg\",\"country\":\"Congo - Brazzaville\",\"code\":\"cd\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ed.svg\",\"country\":\"Switzerland\",\"code\":\"ch\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ee.svg\",\"country\":\"Côte d’Ivoire\",\"code\":\"ci\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f0.svg\",\"country\":\"Cook Islands\",\"code\":\"ck\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f1.svg\",\"country\":\"Chile\",\"code\":\"cl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f2.svg\",\"country\":\"Cameroon\",\"code\":\"cm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f3.svg\",\"country\":\"China\",\"code\":\"cn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f4.svg\",\"country\":\"Colombia\",\"code\":\"co\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f5.svg\",\"country\":\"Clipperton Island\",\"code\":\"cp\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1f7.svg\",\"country\":\"Costa Rica\",\"code\":\"cr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fa.svg\",\"country\":\"Cuba\",\"code\":\"cu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fb.svg\",\"country\":\"Cape Verde\",\"code\":\"cv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fc.svg\",\"country\":\"Curaçao\",\"code\":\"cw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fd.svg\",\"country\":\"Christmas Island\",\"code\":\"cx\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1fe.svg\",\"country\":\"Cyprus\",\"code\":\"cy\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e8-1f1ff.svg\",\"country\":\"Czechia\",\"code\":\"cz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ea.svg\",\"country\":\"Germany\",\"code\":\"de\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ec.svg\",\"country\":\"Diego Garcia\",\"code\":\"dg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ef.svg\",\"country\":\"Djibouti\",\"code\":\"dj\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f0.svg\",\"country\":\"Denmark\",\"code\":\"dk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f2.svg\",\"country\":\"Dominica\",\"code\":\"dm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1f4.svg\",\"country\":\"Dominican Republic\",\"code\":\"do\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1e9-1f1ff.svg\",\"country\":\"Algeria\",\"code\":\"dz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e6.svg\",\"country\":\"Ceuta & Melilla\",\"code\":\"ea\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1e8.svg\",\"country\":\"Ecuador\",\"code\":\"ec\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ea.svg\",\"country\":\"Estonia\",\"code\":\"ee\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ec.svg\",\"country\":\"Egypt\",\"code\":\"eg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1ed.svg\",\"country\":\"Western Sahara\",\"code\":\"eh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f7.svg\",\"country\":\"Eritrea\",\"code\":\"er\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f8.svg\",\"country\":\"Spain\",\"code\":\"es\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1f9.svg\",\"country\":\"Ethiopia\",\"code\":\"et\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ea-1f1fa.svg\",\"country\":\"European Union\",\"code\":\"eu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ee.svg\",\"country\":\"Finland\",\"code\":\"fi\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1ef.svg\",\"country\":\"Fiji\",\"code\":\"fj\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f0.svg\",\"country\":\"Falkland Islands\",\"code\":\"fk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f2.svg\",\"country\":\"Micronesia\",\"code\":\"fm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f4.svg\",\"country\":\"Faroe Islands\",\"code\":\"fo\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1eb-1f1f7.svg\",\"country\":\"France\",\"code\":\"fr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e6.svg\",\"country\":\"Gabon\",\"code\":\"ga\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e7.svg\",\"country\":\"United Kingdom\",\"code\":\"gb\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1e9.svg\",\"country\":\"Grenada\",\"code\":\"gd\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ea.svg\",\"country\":\"Georgia\",\"code\":\"ge\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1eb.svg\",\"country\":\"French Guiana\",\"code\":\"gf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ec.svg\",\"country\":\"Guernsey\",\"code\":\"gg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ed.svg\",\"country\":\"Ghana\",\"code\":\"gh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1ee.svg\",\"country\":\"Gibraltar\",\"code\":\"gi\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f1.svg\",\"country\":\"Greenland\",\"code\":\"gl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f2.svg\",\"country\":\"Gambia\",\"code\":\"gm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f3.svg\",\"country\":\"Guinea\",\"code\":\"gn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f5.svg\",\"country\":\"Guadeloupe\",\"code\":\"gp\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f6.svg\",\"country\":\"Equatorial Guinea\",\"code\":\"gq\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f7.svg\",\"country\":\"Greece\",\"code\":\"gr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f8.svg\",\"country\":\"South Georgia & South\\', Sandwich Islands\",\"code\":\"gs\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1f9.svg\",\"country\":\"Guatemala\",\"code\":\"gt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fa.svg\",\"country\":\"Guam\",\"code\":\"gu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fc.svg\",\"country\":\"Guinea-Bissau\",\"code\":\"gw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ec-1f1fe.svg\",\"country\":\"Guyana\",\"code\":\"gy\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f0.svg\",\"country\":\"Hong Kong SAR China\",\"code\":\"hk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f2.svg\",\"country\":\"Heard & McDonald Islands\",\"code\":\"hm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f3.svg\",\"country\":\"Honduras\",\"code\":\"hn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f7.svg\",\"country\":\"Croatia\",\"code\":\"hr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1f9.svg\",\"country\":\"Haiti\",\"code\":\"ht\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ed-1f1fa.svg\",\"country\":\"Hungary\",\"code\":\"hu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e8.svg\",\"country\":\"Canary Islands\",\"code\":\"ic\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1e9.svg\",\"country\":\"Indonesia\",\"code\":\"id\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1ea.svg\",\"country\":\"Ireland\",\"code\":\"ie\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f1.svg\",\"country\":\"Israel\",\"code\":\"il\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f2.svg\",\"country\":\"Isle of Man\",\"code\":\"im\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f3.svg\",\"country\":\"India\",\"code\":\"in\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f4.svg\",\"country\":\"British Indian Ocean Territory\",\"code\":\"io\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f6.svg\",\"country\":\"Iraq\",\"code\":\"iq\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f7.svg\",\"country\":\"Iran\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f8.svg\",\"country\":\"Iceland\",\"code\":\"is\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ee-1f1f9.svg\",\"country\":\"Italy\",\"code\":\"it\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ef-1f1ea.svg\",\"country\":\"Jersey\",\"code\":\"je\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f2.svg\",\"country\":\"Jamaica\",\"code\":\"jm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f4.svg\",\"country\":\"Jordan\",\"code\":\"jo\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ef-1f1f5.svg\",\"country\":\"Japan\",\"code\":\"jp\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ea.svg\",\"country\":\"Kenya\",\"code\":\"ke\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ec.svg\",\"country\":\"Kyrgyzstan\",\"code\":\"kg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ed.svg\",\"country\":\"Cambodia\",\"code\":\"kh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ee.svg\",\"country\":\"Kiribati\",\"code\":\"ki\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f2.svg\",\"country\":\"Comoros\",\"code\":\"km\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f3.svg\",\"country\":\"St. Kitts & Nevis\",\"code\":\"kn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f5.svg\",\"country\":\"North Korea\",\"code\":\"kp\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1f7.svg\",\"country\":\"South Korea\",\"code\":\"kr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fc.svg\",\"country\":\"Kuwait\",\"code\":\"kw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1fe.svg\",\"country\":\"Cayman Islands\",\"code\":\"ky\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f0-1f1ff.svg\",\"country\":\"Kazakhstan\",\"code\":\"kz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e6.svg\",\"country\":\"Laos\",\"code\":\"la\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e7.svg\",\"country\":\"Lebanon\",\"code\":\"lb\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1e8.svg\",\"country\":\"St. Lucia\",\"code\":\"lc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1ee.svg\",\"country\":\"Liechtenstein\",\"code\":\"li\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f0.svg\",\"country\":\"Sri Lanka\",\"code\":\"lk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f7.svg\",\"country\":\"Liberia\",\"code\":\"lr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f8.svg\",\"country\":\"Lesotho\",\"code\":\"ls\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1f9.svg\",\"country\":\"Lithuania\",\"code\":\"lt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fa.svg\",\"country\":\"Luxembourg\",\"code\":\"lu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fb.svg\",\"country\":\"Latvia\",\"code\":\"lv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f1-1f1fe.svg\",\"country\":\"Libya\",\"code\":\"ly\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e6.svg\",\"country\":\"Morocco\",\"code\":\"ma\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e8.svg\",\"country\":\"Monaco\",\"code\":\"mc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1e9.svg\",\"country\":\"Moldova\",\"code\":\"md\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ea.svg\",\"country\":\"Montenegro\",\"code\":\"me\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1eb.svg\",\"country\":\"St. Martin\",\"code\":\"mf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ec.svg\",\"country\":\"Madagascar\",\"code\":\"mg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ed.svg\",\"country\":\"Marshall Islands\",\"code\":\"mh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f0.svg\",\"country\":\"North Macedonia\",\"code\":\"mk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f1.svg\",\"country\":\"Mali\",\"code\":\"ml\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f2.svg\",\"country\":\"Myanmar (Burma)\",\"code\":\"mm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f3.svg\",\"country\":\"Mongolia\",\"code\":\"mn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f4.svg\",\"country\":\"Macao Sar China\",\"code\":\"mo\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f5.svg\",\"country\":\"Northern Mariana Islands\",\"code\":\"mp\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f6.svg\",\"country\":\"Martinique\",\"code\":\"mq\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f7.svg\",\"country\":\"Mauritania\",\"code\":\"mr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f8.svg\",\"country\":\"Montserrat\",\"code\":\"ms\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1f9.svg\",\"country\":\"Malta\",\"code\":\"mt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fa.svg\",\"country\":\"Mauritius\",\"code\":\"mu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fb.svg\",\"country\":\"Maldives\",\"code\":\"mv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fc.svg\",\"country\":\"Malawi\",\"code\":\"mw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fd.svg\",\"country\":\"Mexico\",\"code\":\"mx\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1fe.svg\",\"country\":\"Malaysia\",\"code\":\"my\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f2-1f1ff.svg\",\"country\":\"Mozambique\",\"code\":\"mz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e6.svg\",\"country\":\"Namibia\",\"code\":\"na\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1e8.svg\",\"country\":\"New Caledonia\",\"code\":\"nc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ea.svg\",\"country\":\"Niger\",\"code\":\"ne\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1eb.svg\",\"country\":\"Norfolk Island\",\"code\":\"nf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ec.svg\",\"country\":\"Nigeria\",\"code\":\"ng\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ee.svg\",\"country\":\"Nicaragua\",\"code\":\"ni\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f1.svg\",\"country\":\"Netherlands\",\"code\":\"nl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f4.svg\",\"country\":\"Norway\",\"code\":\"no\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f5.svg\",\"country\":\"Nepal\",\"code\":\"np\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1f7.svg\",\"country\":\"Nauru\",\"code\":\"nr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1fa.svg\",\"country\":\"Niue\",\"code\":\"nu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f3-1f1ff.svg\",\"country\":\"New Zealand\",\"code\":\"nz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f4-1f1f2.svg\",\"country\":\"Oman\",\"code\":\"om\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1e6.svg\",\"country\":\"Panama\",\"code\":\"pa\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ea.svg\",\"country\":\"Peru\",\"code\":\"pe\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1eb.svg\",\"country\":\"French Polynesia\",\"code\":\"pf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ec.svg\",\"country\":\"Papua New Guinea\",\"code\":\"pg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1ed.svg\",\"country\":\"Philippines\",\"code\":\"ph\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f0.svg\",\"country\":\"Pakistan\",\"code\":\"pk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f1.svg\",\"country\":\"Poland\",\"code\":\"pl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f2.svg\",\"country\":\"St. Pierre & Miquelon\",\"code\":\"pm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f3.svg\",\"country\":\"Pitcairn Islands\",\"code\":\"pn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f7.svg\",\"country\":\"Puerto Rico\",\"code\":\"pr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f8.svg\",\"country\":\"Palestinian Territories\",\"code\":\"ps\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1f9.svg\",\"country\":\"Portugal\",\"code\":\"pt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fc.svg\",\"country\":\"Palau\",\"code\":\"pw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f5-1f1fe.svg\",\"country\":\"Paraguay\",\"code\":\"py\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f6-1f1e6.svg\",\"country\":\"Qatar\",\"code\":\"qa\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f7-1f1ea.svg\",\"country\":\"Réunion\",\"code\":\"re\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f4.svg\",\"country\":\"Romania\",\"code\":\"ro\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f7-1f1f8.svg\",\"country\":\"Serbia\",\"code\":\"yu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fa.svg\",\"country\":\"Russia\",\"code\":\"ru\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg\",\"country\":\"Rwanda\",\"code\":\"rw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e6.svg\",\"country\":\"Saudi Arabia\",\"code\":\"sa\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e7.svg\",\"country\":\"Solomon Islands\",\"code\":\"sb\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e8.svg\",\"country\":\"Seychelles\",\"code\":\"sc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1e9.svg\",\"country\":\"Sudan\",\"code\":\"sd\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ea.svg\",\"country\":\"Sweden\",\"code\":\"se\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ec.svg\",\"country\":\"Singapore\",\"code\":\"sg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ed.svg\",\"country\":\"St. Helena\",\"code\":\"sh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ee.svg\",\"country\":\"Slovenia\",\"code\":\"si\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ef.svg\",\"country\":\"Svalbard & Jan Mayen\",\"code\":\"sj\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f0.svg\",\"country\":\"Slovakia\",\"code\":\"sk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f1.svg\",\"country\":\"Sierra Leone\",\"code\":\"sl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f2.svg\",\"country\":\"San Marino\",\"code\":\"sm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f3.svg\",\"country\":\"Senegal\",\"code\":\"sn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f4.svg\",\"country\":\"Somalia\",\"code\":\"so\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f7.svg\",\"country\":\"Suriname\",\"code\":\"sr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f8.svg\",\"country\":\"South Sudan\",\"code\":\"ss\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1f9.svg\",\"country\":\"São Tomé & Príncipe\",\"code\":\"st\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fb.svg\",\"country\":\"El Salvador\",\"code\":\"sv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fd.svg\",\"country\":\"Sint Maarten\",\"code\":\"sx\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1fe.svg\",\"country\":\"Syria\",\"code\":\"sy\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f8-1f1ff.svg\",\"country\":\"Eswatini\",\"code\":\"sz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e6.svg\",\"country\":\"Tristan Da Cunha\",\"code\":\"sh\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e8.svg\",\"country\":\"Turks & Caicos Islands\",\"code\":\"tc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1e9.svg\",\"country\":\"Chad\",\"code\":\"td\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1eb.svg\",\"country\":\"French Southern Territories\",\"code\":\"tf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ec.svg\",\"country\":\"Togo\",\"code\":\"tg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ed.svg\",\"country\":\"Thailand\",\"code\":\"th\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ef.svg\",\"country\":\"Tajikistan\",\"code\":\"tj\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f0.svg\",\"country\":\"Tokelau\",\"code\":\"tk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f1.svg\",\"country\":\"Timor-Leste\",\"code\":\"tl\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f2.svg\",\"country\":\"Turkmenistan\",\"code\":\"tm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f3.svg\",\"country\":\"Tunisia\",\"code\":\"tn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f4.svg\",\"country\":\"Tonga\",\"code\":\"to\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f7.svg\",\"country\":\"Turkey\",\"code\":\"tr\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1f9.svg\",\"country\":\"Trinidad & Tobago\",\"code\":\"tt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fb.svg\",\"country\":\"Tuvalu\",\"code\":\"tv\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1fc.svg\",\"country\":\"Taiwan\",\"code\":\"tw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1f9-1f1ff.svg\",\"country\":\"Tanzania\",\"code\":\"tz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1e6.svg\",\"country\":\"Ukraine\",\"code\":\"ua\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ec.svg\",\"country\":\"Uganda\",\"code\":\"ug\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f2.svg\",\"country\":\"U.S. Outlying Islands\",\"code\":\"um\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f3.svg\",\"country\":\"United Nations\",\"code\":\"un\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1f8.svg\",\"country\":\"United States\",\"code\":\"us\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1fe.svg\",\"country\":\"Uruguay\",\"code\":\"uy\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fa-1f1ff.svg\",\"country\":\"Uzbekistan\",\"code\":\"uz\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e6.svg\",\"country\":\"Vatican City\",\"code\":\"va\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1e8.svg\",\"country\":\"St. Vincent & Grenadines\",\"code\":\"vc\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ea.svg\",\"country\":\"Venezuela\",\"code\":\"ve\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ec.svg\",\"country\":\"British Virgin Islands\",\"code\":\"vg\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1ee.svg\",\"country\":\"U.S. Virgin Islands\",\"code\":\"vi\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1f3.svg\",\"country\":\"Vietnam\",\"code\":\"vn\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fb-1f1fa.svg\",\"country\":\"Vanuatu\",\"code\":\"vu\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fc-1f1eb.svg\",\"country\":\"Wallis & Futuna\",\"code\":\"wf\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fc-1f1f8.svg\",\"country\":\"Samoa\",\"code\":\"ws\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fd-1f1f0.svg\",\"country\":\"Kosovo\",\"code\":\"xk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fe-1f1ea.svg\",\"country\":\"Yemen\",\"code\":\"ye\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1fe-1f1f9.svg\",\"country\":\"Mayotte\",\"code\":\"yt\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ff-1f1e6.svg\",\"country\":\"South Africa\",\"code\":\"za\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ff-1f1f2.svg\",\"country\":\"Zambia\",\"code\":\"zm\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f1ff-1f1fc.svg\",\"country\":\"Zimbabwe\",\"code\":\"zw\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.svg\",\"country\":\"England\",\"code\":\"uk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0073-e0063-e0074-e007f.svg\",\"country\":\"Scotland\",\"code\":\"uk\"},{\"flag\":\"https://twemoji.maxcdn.com/2/svg/1f3f4-e0067-e0062-e0077-e006c-e0073-e007f.svg\",\"country\":\"Wales\",\"code\":\"uk\"}]');\n\n//# sourceURL=webpack://country-flag-game/./data/country-flag.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;