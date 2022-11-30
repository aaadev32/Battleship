/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n    display: flex;\n}\n\nhtml {\n    background-color: royalblue;\n}\n\n#victory-screen {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    height: 200px;\n    width: 500px;\n    border: 3px solid black;\n    border-radius: 5px;\n    background-color: rgba(187, 187, 187, .6);\n    font-size: xx-large;\n    font-weight: bold;\n    font-family: 'Times New Roman', Times, serif;\n}\n\n#user-interface {\n    display: none;\n}\n\n.game-type-selection-buttons {\n    margin: 10px;\n}\n\n#rotation-icon {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n}\n\n#rotation-icon:hover {\n    background-color: rgba(143, 137, 137, 0.4);\n    border-radius: 5px;\n}\n\n.gameboard-0-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.gameboard-1-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.opponent-gameboard-0-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.opponent-gameboard-1-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n\n#gameboard-header-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n#gameboard-0 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#gameboard-1 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard-0 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard-1 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,qBAAqB;IACrB,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,yCAAyC;IACzC,mBAAmB;IACnB,iBAAiB;IACjB,4CAA4C;AAChD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,0CAA0C;IAC1C,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;;AAGA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC","sourcesContent":["#content {\n    display: flex;\n}\n\nhtml {\n    background-color: royalblue;\n}\n\n#victory-screen {\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-content: center;\n    text-align: center;\n    height: 200px;\n    width: 500px;\n    border: 3px solid black;\n    border-radius: 5px;\n    background-color: rgba(187, 187, 187, .6);\n    font-size: xx-large;\n    font-weight: bold;\n    font-family: 'Times New Roman', Times, serif;\n}\n\n#user-interface {\n    display: none;\n}\n\n.game-type-selection-buttons {\n    margin: 10px;\n}\n\n#rotation-icon {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n}\n\n#rotation-icon:hover {\n    background-color: rgba(143, 137, 137, 0.4);\n    border-radius: 5px;\n}\n\n.gameboard-0-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.gameboard-1-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.opponent-gameboard-0-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n.opponent-gameboard-1-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n\n#gameboard-header-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n#gameboard-0 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#gameboard-1 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard-0 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard-1 {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Images/Refresh_icon.svg.png":
/*!*****************************************!*\
  !*** ./src/Images/Refresh_icon.svg.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "123864cb1007162051ae.png";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Images_Refresh_icon_svg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Images/Refresh_icon.svg.png */ "./src/Images/Refresh_icon.svg.png");



const dataModule = (() => {
    //the gameboard arrays will store the ship objects, the attacked coordinates keeps track of what plays each player has already made.
    let player1Gameboard = [];
    let player2Gameboard = [];
    let hitCoordinates = {
        xAxis: [],
        yAxis: []
    };
    let missedCoordinates = {
        xAxis: [],
        yAxis: []
    };
    let usedCoordinates = {
        xAxis: [],
        yAxis: []
    };
    let pvp = false;
    //determines players turns when setting up board, afterwards it is used to determine player turn in the gameloop
    let player1Turn = true;
    //becomes true when the player is placing a ship
    let shipSelection = true;
    //should be equal to the selected ship object and used to create the placement shadow when placing ships by accesing the ships length property
    let selectedShip = {};
    let currentPlayerGameboard, currentEnemyGameboard = null
    let placementPhase = true;
    let verticalShipRotation = false;
    //used in receiveAttack function to set divs marking hit or misses on gameboards, i used this over returning a bool in the receiveAttack because checking the bool also requires running the function causing the function to run twice
    let hitBool = null;
    let opponentBoardNumber;
    //below 3 lines used to aid the ai intelligence
    let aiHitBool = null;
    let aiSunkEnemyShip = null;
    let switchAiAttack = false;
    let aiInitialHitXCoordinates = null;
    let aiInitialHitYCoordinates = null;
    //next 2 lines keep track of consecutive hits for the ai
    let aiRecentHitXCoordinates = null;
    let aiRecentHitYCoordinates = null;
    //the next line tell the ai attack algo whether or not the hit ship is vertical or horizontal
    let aiEnemyShipHorizontal = true;
    //the next 4  bools for the 4 different attack directions set for the ai, when a move is used its associated bool is set to true, this continues until the hit ship is sunk then the bools are all set back to false
    let aiAttackSubtractXBool = false;
    let aiAttackSubtractYBool = false;
    let aiAttackAddXBool = false;
    let aiAttackAddYBool = false;
    //this object keeps track of the ships that have been placed during a players turn (resets back to false at end of turn)
    let shipPlacementTracker = {
        carrier: false,
        battleship: false,
        destroyer: false,
        submarine: false,
        patrolBoat: false
    }

    return {
        player1Gameboard, player2Gameboard, hitCoordinates, missedCoordinates, usedCoordinates, player1Turn, pvp, shipSelection, selectedShip, currentPlayerGameboard, currentEnemyGameboard, placementPhase, verticalShipRotation, hitBool, opponentBoardNumber, aiHitBool, aiSunkEnemyShip, switchAiAttack, aiInitialHitXCoordinates, aiInitialHitYCoordinates, aiRecentHitXCoordinates, aiRecentHitYCoordinates, aiEnemyShipHorizontal, aiAttackSubtractXBool, aiAttackSubtractYBool, aiAttackAddXBool, aiAttackAddYBool, shipPlacementTracker,
    };
})();
const domModule = (() => {
    const createElementIdClass = function (element, id, classN) {
        let newElement = document.createElement(element);
        newElement.id = id;
        newElement.className = classN;
        return newElement;
    }

    const removeChildren = function (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    return { createElementIdClass, removeChildren };
})();

const playerAndPCModule = (() => {
    //this function deals hiding player screens between device handoffs and changing the player gameboards between turns
    function playerTurnHandler() {
        document.getElementById('gameboard-container-0').style.display = 'none';
        document.getElementById('gameboard-container-1').style.display = 'none';
        //this if block handles PvE
        if (dataModule.player1Turn == false && dataModule.pvp == false) {
            alert('players turn')
            document.getElementById('gameboard-container-0').style.display = 'flex';
            dataModule.player1Turn = true;
            dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
            dataModule.currentEnemyGameboard = dataModule.player2Gameboard;
            return null;
        } else if (dataModule.player1Turn == true && dataModule.pvp == false) {
            document.getElementById('gameboard-container-0').style.display = 'flex';
            alert('pc\s turn')

            dataModule.player1Turn = false;
            dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
            dataModule.currentEnemyGameboard = dataModule.player1Gameboard;

            let randomXCoordinate = randomCoordinate();
            let randomYCoordinate = randomCoordinate();
            //changes random coordinate pairs if they have already been used in an attack
            while (playerAndPCModule.usedCoordinateCheck(randomXCoordinate, randomYCoordinate)) {
                console.log(playerAndPCModule.usedCoordinateCheck(randomXCoordinate, randomYCoordinate))
                let newrandomXCoordinate = randomCoordinate();
                let newrandomYCoordinate = randomCoordinate();
                if (playerAndPCModule.usedCoordinateCheck(newrandomXCoordinate, newrandomYCoordinate) == false) {
                    randomXCoordinate = newrandomXCoordinate;
                    randomYCoordinate = newrandomYCoordinate;
                }
                //playerAndPCModule.usedCoordinateCheck(randomXCoordinate, randomYCoordinate)
                console.log('duplicate coordinates filtered.')
            }
            //makes the pc attacks more intelligent i.e. attacking an adjacent coordinate when hitting an opponents ship
            if (dataModule.aiHitBool == true) {
                //each time a hit is made these bools should be returned to false to let the directional attack logic reassess the possible attack directions since it is based off of recentHitCoordinates variable
                //dataModule.aiAttackSubtractXBool = false, dataModule.aiAttackSubtractYBool = false, dataModule.aiAttackAddXBool = false, dataModule.aiAttackAddYBool = false;

                console.log(dataModule.aiInitialHitXCoordinates, dataModule.aiInitialHitYCoordinates, 'hit coords x/y')
                checkAiAttacks();
                //in the case that all possible attacks have been tryed, reset the recentHits back to initialHits and retry checkAiAttacks
                if (dataModule.aiAttackAddXBool == true && dataModule.aiAttackAddYBool == true && dataModule.aiAttackSubtractXBool == true && dataModule.aiAttackSubtractYBool == true) {
                    dataModule.aiRecentHitXCoordinates = dataModule.aiInitialHitXCoordinates
                    dataModule.aiRecentHitYCoordinates = dataModule.aiInitialHitYCoordinates
                    dataModule.aiAttackSubtractXBool = false, dataModule.aiAttackSubtractYBool = false, dataModule.aiAttackAddXBool = false, dataModule.aiAttackAddYBool = false;
                    checkAiAttacks();
                }
                aiAttack();
                //below if statement is null error precaution
                /* if (dataModule.aiAttackSubtractXBool == true, dataModule.aiAttackSubtractYBool == true, dataModule.aiAttackAddXBool == true, dataModule.aiAttackAddYBool == true) {
                     console.log('null attack prevention! fix logic.')
                     document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="opponent-gameboard-1-cell"]`).click()
                 } */
            } else {
                document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="opponent-gameboard-1-cell"]`).click()
            }
            return null;
        }
        //if its a PvP game this statement block should insure the screen is hidden when passing the device
        if (dataModule.player1Turn == true && dataModule.pvp == true || dataModule.player1Turn == false && dataModule.pvp == true) {
            if (dataModule.player1Turn == false) {
                //the setTimeout function are used since it seems an alert statement actually gets fired before anything else in this block then immediatley firing the code after the alerts code line once the alert is closed, the setTimeout function fixes this by 
                //only setting the gameboard containers to flex after the window has been closed
                setTimeout(() => {
                    alert('player 1\'s turn. no peeking');

                }, 150);
                setTimeout(() => {
                    dataModule.player1Turn = true;
                    dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
                    dataModule.currentEnemyGameboard = dataModule.player2Gameboard;
                    //turn off the 2nd player gameboard display and turn on the 1st players
                    document.getElementById('gameboard-container-0').style.display = 'flex';

                }, 180);
                return null;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                setTimeout(() => {
                    alert('player 2\'s turn. no peeking');
                }, 150);

                setTimeout(() => {
                    dataModule.player1Turn = false;
                    dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
                    dataModule.currentEnemyGameboard = dataModule.player1Gameboard;
                    //turn off the 1st player gameboard display and turn on the 2nd players
                    document.getElementById('gameboard-container-1').style.display = 'flex';
                }, 180);
                return null;
            }
        }
    }

    function randomCoordinate() {
        return Math.ceil(Math.random() * 10);
    }

    function pcPlaceShips() {
        //place the pc players ships before calling the playerTurnHandler() which commences the game loop
        //prevents the only for in loop on the ship placement click event listener from starting with patrol boat

        for (let i = 0; dataModule.player2Gameboard.length < 5; i++) {
            let randomXCoordinate = playerAndPCModule.randomCoordinate();
            let randomYCoordinate = playerAndPCModule.randomCoordinate();
            let randomVerticalSelection = playerAndPCModule.randomCoordinate();
            //creates a 50% chance to rotate ship placement for the pc player, null selectons 
            if (randomVerticalSelection <= 5) {
                dataModule.verticalShipRotation = true;
            } else {
                dataModule.verticalShipRotation = false;
            }
            console.log(dataModule.player2Gameboard, randomXCoordinate, randomYCoordinate);
            //optional chaining operator keeps query selector from throwing null
            document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="gameboard-1-cell"]`)?.click();

        }
        dataModule.placementPhase = false;
        dataModule.verticalShipRotation = false;
        //sets up playerTurnHandler for player 1's turn since player1Turn variable is used for determining ship placement turn as well
        dataModule.player1Turn = false;
        playerAndPCModule.playerTurnHandler();
    }

    //this function is used to check the ai's random moves for coordinates that have already been made keeping the ai from selecting the same attacks twice.
    function usedCoordinateCheck(xCoordinate, yCoordinate) {
        //checks if xCoordinate hits
        let usedXCoordinatesBool = null;
        let usedYCoordinatesBool = null;
        //x and yAxis arrays will always be the same length so it doesnt matter that the xAxis.length is used as the index iterator for both arrays
        for (let i = 0; i < dataModule.usedCoordinates.xAxis.length; i++) {
            let xCoordinatesUsed = dataModule.usedCoordinates.xAxis[i];
            let yCoordinatesUsed = dataModule.usedCoordinates.yAxis[i];

            if (xCoordinatesUsed == xCoordinate) {
                usedXCoordinatesBool = true;
            }
            if (yCoordinatesUsed == yCoordinate) {
                usedYCoordinatesBool = true;
            }
            if (usedXCoordinatesBool && usedYCoordinatesBool == true) {
                return true;
            }
            usedXCoordinatesBool = null;
            usedYCoordinatesBool = null;
        }
        return false;
    }
    function checkAiAttacks() {
        let aiAttackSubtractX = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates - 1}"][data-yaxis="${dataModule.aiRecentHitYCoordinates}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackSubtractY = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates}"][data-yaxis="${dataModule.aiRecentHitYCoordinates - 1}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackAddX = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates + 1}"][data-yaxis="${dataModule.aiRecentHitYCoordinates}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackAddY = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates}"][data-yaxis="${dataModule.aiRecentHitYCoordinates + 1}"][class="opponent-gameboard-1-cell"]`);
        //checks the used coordinates array to make sure the ai attack selectors are valid, the moves that are not have their associated bools set to true(true bools are not run by the algorithm
        if (playerAndPCModule.usedCoordinateCheck(dataModule.aiRecentHitXCoordinates - 1, dataModule.aiRecentHitYCoordinates)) {
            dataModule.aiAttackSubtractXBool = true;
        }
        if (playerAndPCModule.usedCoordinateCheck(dataModule.aiRecentHitXCoordinates, dataModule.aiRecentHitYCoordinates - 1)) {
            dataModule.aiAttackSubtractYBool = true;
        }
        if (playerAndPCModule.usedCoordinateCheck(dataModule.aiRecentHitXCoordinates + 1, dataModule.aiRecentHitYCoordinates)) {
            dataModule.aiAttackAddXBool = true;
        }
        if (playerAndPCModule.usedCoordinateCheck(dataModule.aiRecentHitXCoordinates, dataModule.aiRecentHitYCoordinates + 1)) {
            dataModule.aiAttackAddYBool = true;
        }

        //checks for null on each ai preset attack querySelector and switches its associated bool to true to signal that it has already been triggered so it does not run in the following if else blocks which otherwise causes a null error
        if (aiAttackSubtractX == null) {
            dataModule.aiAttackSubtractXBool = true;
        }
        if (aiAttackSubtractY == null) {
            dataModule.aiAttackSubtractYBool = true;
        }
        if (aiAttackAddX == null) {
            dataModule.aiAttackAddXBool = true;
        }
        if (aiAttackAddY == null) {
            dataModule.aiAttackAddYBool = true;
        }
    }

    function aiAttack() {
        let aiAttackSubtractX = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates - 1}"][data-yaxis="${dataModule.aiRecentHitYCoordinates}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackSubtractY = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates}"][data-yaxis="${dataModule.aiRecentHitYCoordinates - 1}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackAddX = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates + 1}"][data-yaxis="${dataModule.aiRecentHitYCoordinates}"][class="opponent-gameboard-1-cell"]`);
        let aiAttackAddY = document.querySelector(`[data-xaxis="${dataModule.aiRecentHitXCoordinates}"][data-yaxis="${dataModule.aiRecentHitYCoordinates + 1}"][class="opponent-gameboard-1-cell"]`);
        //switches ai attack move after a missed attack
        console.log(dataModule.aiAttackSubtractXBool, dataModule.aiAttackSubtractYBool, dataModule.aiAttackAddXBool, dataModule.aiAttackAddYBool, 1)

        if (aiAttackSubtractX == false && dataModule.switchAiAttack == true) {
            dataModule.switchAiAttack = false;
            dataModule.aiAttackSubtractXBool = true;
            dataModule.aiRecentHitXCoordinates = dataModule.aiInitialHitXCoordinates;
            dataModule.aiRecentHitYCoordinates = dataModule.aiInitialHitYCoordinates;
            dataModule.aiEnemyShipHorizontal == true
        } else if (aiAttackAddX == false && dataModule.switchAiAttack == true) {
            dataModule.switchAiAttack = false;
            dataModule.aiAttackAddXBool = true;
            dataModule.aiRecentHitXCoordinates = dataModule.aiInitialHitXCoordinates;
            dataModule.aiRecentHitYCoordinates = dataModule.aiInitialHitYCoordinates;
            dataModule.aiEnemyShipHorizontal == true
        } else if (aiAttackAddY == false && dataModule.switchAiAttack == true) {
            dataModule.switchAiAttack = false;
            dataModule.aiAttackAddYBool = true;
            dataModule.aiRecentHitXCoordinates = dataModule.aiInitialHitXCoordinates;
            dataModule.aiRecentHitYCoordinates = dataModule.aiInitialHitYCoordinates;
            dataModule.aiEnemyShipHorizontal == false;
        } else if (aiAttackSubtractY == false && dataModule.switchAiAttack == true) {
            dataModule.switchAiAttack = false;
            dataModule.aiAttackSubtractYBool = true;
            dataModule.aiRecentHitXCoordinates = dataModule.aiInitialHitXCoordinates;
            dataModule.aiRecentHitYCoordinates = dataModule.aiInitialHitYCoordinates;
            dataModule.aiEnemyShipHorizontal == false;
        }
        /*     //disables horizontal attacks until ship sunk (set to true at the start of the algorithm)
          if (dataModule.aiEnemyShipHorizontal == true) {
              dataModule.aiEnemyShipHorizontal = false;
              dataModule.aiAttackAddYBool = true;
              dataModule.aiAttackSubtractYBool = true;
          }
          //disables vertical attacks until ship sunk
          if (dataModule.aiEnemyShipHorizontal == false) {
              dataModule.aiEnemyShipHorizontal == true;
              dataModule.aiAttackSubtractXBool = true;
              dataModule.aiAttackAddXBool = true;
          }*/

        console.log(dataModule.aiAttackSubtractXBool, dataModule.aiAttackSubtractYBool, dataModule.aiAttackAddXBool, dataModule.aiAttackAddYBool, 2)
        if (dataModule.aiAttackSubtractXBool == false) {
            aiAttackSubtractX.click();
            return null;
        }
        if (dataModule.aiAttackSubtractYBool == false) {
            aiAttackSubtractY.click();
            return null;
        }
        if (dataModule.aiAttackAddXBool == false) {
            aiAttackAddX.click();
            return null;
        }
        if (dataModule.aiAttackAddYBool == false) {
            aiAttackAddY.click();
            return null;
        }
    }
    return { playerTurnHandler, randomCoordinate, pcPlaceShips, usedCoordinateCheck, checkAiAttacks, aiAttack }
})();
//this module deals with event listeners and UI that triggers the game loop
const gameLoopModule = (() => {
    //displays opening UI and choices for starting the game
    function userInterface() {
        document.getElementById('user-interface').style.display = 'flex';
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('pvp-selection').addEventListener('click', () => {
            dataModule.pvp = true;
            document.getElementById('user-interface').style.display = 'none';

            //create board contianers
            let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
            let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
            let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

            //this block creates gameboard title headers 
            document.getElementById('content').appendChild(gameboardHeaderContainer);
            document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
            document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
            gameboardHeader.textContent = 'Your Fleet';
            opponentGameboardHeader.textContent = 'Enemy Territory';
            //call the generateBoards function to generate the first board
            generateBoards();
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true

            let rotationIcon = document.createElement('img');
            rotationIcon.src = _Images_Refresh_icon_svg_png__WEBPACK_IMPORTED_MODULE_1__;
            rotationIcon.id = 'rotation-icon';
            rotationIcon.onclick = () => { if (dataModule.verticalShipRotation == true) { dataModule.verticalShipRotation = false } else { dataModule.verticalShipRotation = true } }
            document.getElementById('gameboard-header-container').appendChild(rotationIcon);
        });

        document.getElementById('pve-selection').addEventListener('click', () => {
            dataModule.pvp = false;
            document.getElementById('user-interface').style.display = 'none';

            //create board contianers
            let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
            let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
            let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

            //this block creates gameboard title headers 
            document.getElementById('content').appendChild(gameboardHeaderContainer);
            document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
            document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
            gameboardHeader.textContent = 'Your Fleet';
            opponentGameboardHeader.textContent = 'Enemy Territory';
            //call the generateBoards function to generate the board
            generateBoards();
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true

            let rotationIcon = document.createElement('img');
            rotationIcon.src = _Images_Refresh_icon_svg_png__WEBPACK_IMPORTED_MODULE_1__;
            rotationIcon.id = 'rotation-icon';
            rotationIcon.onclick = () => { if (dataModule.verticalShipRotation == true) { dataModule.verticalShipRotation = false } else { dataModule.verticalShipRotation = true } }
            document.getElementById('gameboard-header-container').appendChild(rotationIcon);
        });
    }

    //a gameboard generator that generates a div for each coordinate with a data-xaxis and a data-yaxis value for each div
    //event listeners for the players gameboard should place objects, listeners for the players targeting board should handle attack coordinates and storage info
    const generateBoards = function () {
        //used to set class and id names to distinguish between 1st and 2nd player boards
        let numberOfGameboards = 0;
        if (document.getElementById('gameboard-container-0')) {
            numberOfGameboards++
            document.getElementById('gameboard-container-0').style.display = 'none';
        }
        let gameboardContainer = domModule.createElementIdClass('div', `gameboard-container-${numberOfGameboards}`, '');
        let gameBoard = domModule.createElementIdClass('div', `gameboard-${numberOfGameboards}`, '');
        let opponentBoard = domModule.createElementIdClass('div', `opponent-gameboard-${numberOfGameboards}`, '');

        document.getElementById('content').appendChild(gameboardContainer);
        document.getElementById(`gameboard-container-${numberOfGameboards}`).appendChild(gameBoard);
        document.getElementById(`gameboard-container-${numberOfGameboards}`).appendChild(opponentBoard);

        document.getElementById(`gameboard-container-${numberOfGameboards}`).style.display = 'flex';
        document.getElementById(`gameboard-container-${numberOfGameboards}`).style.justifyContent = 'space-around';

        document.getElementById('content').style.flexDirection = 'column';
        //the below 2 for loop i,j values are used to create the divs and data attributes for the gameboard as well as set event handlers
        //1 based indexing for more clarity when working with gameboard coordinates and data attributes
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {

                let playerGameboardDiv = document.createElement('div');
                let enemyBoardDiv = document.createElement('div');
                //this mouseover event listener allows the DOM to display to users whether or not a ship placement is appropriate
                playerGameboardDiv.addEventListener('mouseenter', () => {
                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    //below line stops the human player board from having ship placement hover effects in PvE
                    if (dataModule.pvp == false && dataModule.player1Turn == false) {
                        return null;
                    }
                    if (dataModule.placementPhase == true) {
                        let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                        let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                        let firstIteration = true;
                        //use a for loop to iterate a ship.length number of times from dataModule.selectedShip and adding +1 per iteration to the data attribute of the direction main axis to create a selection shadow with background color
                        //the for loop should also record the x/yaxis coordinates to track the location of the ship should it be placed in a valid location
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from starting +1 from the mouseover point (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            } else if (dataModule.verticalShipRotation == true) {
                                //keeps the shipShadow from starting +1 from the mouseover point (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedYaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            }
                        }
                    }
                });
                //this event listener reverses the coloring that the mouseover event listener applies when the selected ship is not placed and the mouse is moved
                playerGameboardDiv.addEventListener('mouseleave', () => {
                    let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                    let firstIteration = true;

                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    //below line stops the human player board from having ship placement hover effects in PvE
                    if (dataModule.pvp == false && dataModule.player1Turn == false) {
                        return null;
                    }
                    if (dataModule.placementPhase == true) {
                        //adding + 1 to the selectedShip.length insures that there wont be a left over blue placement div as the blue shipShadow shrinks by 1 when the user places a ship
                        for (let i = 0; i < dataModule.selectedShip.length + 1; i++) {
                            //push the divs current colors to previousColors array in case the user decides to place a ship, the divs should keep the green placement color as opposed to turning back to the board color black
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            } else if (dataModule.verticalShipRotation == true) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedYaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            }
                        }
                    }
                });

                //this click event listener is responsible for placing ships in the DOM and recording their coordinates to the respective gameboard object
                playerGameboardDiv.addEventListener('click', () => {
                    let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                    let shipObj = shipModule.shipConstructor();
                    let shipPlacementMarkerIteration = true;
                    let firstShipPlacemenIteration = true;
                    let xCoordinateArr = [];
                    let yCoordinateArr = [];
                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    if (dataModule.placementPhase == true) {
                        //checks for invalid placements on the xAxis
                        if (selectedXaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == false) {
                            console.log(selectedXaxis, selectedYaxis, dataModule.selectedShip.length)
                            if (dataModule.pvp == true) {
                                return alert('invalid placement on the X Axis!');
                            } else {
                                return null
                            }
                            //values greater than 11 on the yAxis are only possible when vertical ship rotation is active
                        } else if (selectedYaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == true) {
                            if (dataModule.pvp == true) {
                                return alert('invalid placement on the Y Axis!')
                            } else {
                                return null;
                            }
                        }
                        //sets up the player gameboard on each placement turn to be iterated in the next for loop block, player turns after ship placement are handled by playerTurnHandler() on attacks
                        if (dataModule.player1Turn == true) {
                            dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
                        } else {
                            dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
                        }
                        //this checks for ships already placed on the selected coordinates on the current player gameboard.
                        //each ship objects xAxis and yAxis property keys are iterated and compared to the selected coordinates + j iterations (for the length of the selected ship)
                        //any conflicting coordinates throws an error stopping the user from placing a ship over another placed ship
                        for (let i = 0; i < dataModule.currentPlayerGameboard.length; i++) {
                            let occupiedXCoordinate = false;
                            let occupiedYCoordinate = false;
                            for (let j = 0; j < dataModule.selectedShip.length; j++) {


                                dataModule.currentPlayerGameboard[i].xAxis.forEach(coordinate => {

                                    if (dataModule.verticalShipRotation == false) {
                                        if (selectedXaxis + j == coordinate) {
                                            occupiedXCoordinate = true;
                                        }
                                    } else {
                                        if (selectedXaxis == coordinate) {
                                            occupiedXCoordinate = true;
                                        }
                                    }
                                });
                                dataModule.currentPlayerGameboard[i].yAxis.forEach(coordinate => {

                                    if (dataModule.verticalShipRotation == true) {
                                        if (selectedYaxis + j == coordinate) {
                                            occupiedYCoordinate = true;
                                        }
                                    } else {
                                        if (selectedYaxis == coordinate) {
                                            occupiedYCoordinate = true;
                                        }
                                    }
                                });
                                if (occupiedXCoordinate && occupiedYCoordinate == true) {
                                    if (dataModule.pvp == true) {
                                        return alert('these coordinates are occupied by another ship! please choose different coordinates.');
                                    } else {
                                        return null;
                                    }
                                }
                            }
                            //these variables must be reset every ship object iteration in the main loop
                            occupiedXCoordinate = false;
                            occupiedYCoordinate = false;
                        }

                        //this block pushes the coordinates to the ship objects coordinates array
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {

                            if (dataModule.verticalShipRotation == false) {
                                xCoordinateArr.push(selectedXaxis + i);
                                //if the placement isnt vertical the yAxis only needs to be recorded once
                                if (firstShipPlacemenIteration == true) {
                                    yCoordinateArr.push(selectedYaxis);
                                    firstShipPlacemenIteration = false;
                                }
                            } else if (dataModule.verticalShipRotation == true) {
                                yCoordinateArr.push(selectedYaxis + i);
                                //if the placement is vertical the xAxis only needs to be recorded once
                                if (firstShipPlacemenIteration == true) {
                                    xCoordinateArr.push(selectedXaxis);
                                    firstShipPlacemenIteration = false;
                                }
                            }
                            //places the ship once all coordinates of the ship length have been accounted for
                            if (i == dataModule.selectedShip.length - 1) {
                                let newShipPlacement = gameboardModule.placeShip(dataModule.selectedShip, xCoordinateArr, yCoordinateArr)
                                if (dataModule.player1Turn == true) {
                                    dataModule.player1Gameboard.push(newShipPlacement);
                                } else {
                                    dataModule.player2Gameboard.push(newShipPlacement);
                                }
                            }
                        }

                        //this block marks the divs where the ship has been placed 
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            //keeps the shipPlacement from starting +1 from the mouseover point
                            if (shipPlacementMarkerIteration == true && dataModule.verticalShipRotation == false) {
                                selectedXaxis -= 1;
                                shipPlacementMarkerIteration = false;
                            } else if (shipPlacementMarkerIteration == true && dataModule.verticalShipRotation == true) {
                                selectedYaxis -= 1;
                                shipPlacementMarkerIteration = false;
                            }
                            if (dataModule.verticalShipRotation == false) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            } else if (dataModule.verticalShipRotation == true) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            }
                        }
                        //a false property in the shipPlacementTracker means the ship hasnt been placed and will become the dataModule.selectedShip for placement on playerNGameboard
                        for (const property in dataModule.shipPlacementTracker) {
                            if (dataModule.shipPlacementTracker[property] == false) {
                                dataModule.shipPlacementTracker[property] = true;
                                //the shipObj contains all ships and will be access through selected ship to be placed on the playerNGameboard arr
                                return dataModule.selectedShip = shipObj[property];
                            }
                        }
                        //the remaining blocks handle ship placement logic
                        //signals the next players turn DURING the placement phase, switches the playerGameboard, and resets the shipPlacementTracker property values to false so it can be used for the next player ship placements
                        if (dataModule.shipPlacementTracker.patrolBoat == true) {
                            //resets the tracker property values
                            for (const property in dataModule.shipPlacementTracker) {
                                dataModule.shipPlacementTracker[property] = false;
                            }
                            //im too slow to understand why the below 2 lines are neccessary to stop double ship placements :^)
                            dataModule.selectedShip = shipObj.carrier;
                            dataModule.shipPlacementTracker.carrier = true;

                            //stops mouse hover effects after all ships have been placed by both players in PvP and starts the game
                            if (dataModule.player1Turn == false && dataModule.pvp == true) {
                                dataModule.placementPhase = false;
                                return alert('game start!'), playerAndPCModule.playerTurnHandler();
                            }
                            if (dataModule.pvp == true) {
                                alert('player 2\'s turn to place ships')
                            }
                            dataModule.player1Turn = false;
                            //sets up player 2 or AI gameboard
                            generateBoards();
                        }
                    }
                });

                //this click event listener should trigger the receiveAttack function with the data-x/yaxis attributes as well as mark both players gameboards where each player has missed or hit
                enemyBoardDiv.addEventListener('click', () => {
                    if (enemyBoardDiv.style.backgroundColor == 'grey' || enemyBoardDiv.style.backgroundColor == 'red') {
                        return alert('you have already attacked these coordinates.');
                    }
                    //this is to set up for the query selector several lines below.
                    if (dataModule.player1Turn == true) {
                        dataModule.opponentBoardNumber = 1;
                    } else {
                        dataModule.opponentBoardNumber = 0;
                    }
                    let selectedXaxis = parseInt(enemyBoardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(enemyBoardDiv.dataset.yaxis);

                    if (gameboardModule.receiveAttack(selectedXaxis, selectedYaxis) == true) {
                        if (dataModule.pvp == false && dataModule.player1Turn == false) {
                            //this if block makes sure that aiInitial hit coordinates are only set on a ships first hit
                            if (dataModule.aiHitBool != true) {
                                dataModule.aiInitialHitXCoordinates = selectedXaxis;
                                dataModule.aiInitialHitYCoordinates = selectedYaxis;
                            }
                            dataModule.aiHitBool = true;
                            dataModule.aiRecentHitXCoordinates = selectedXaxis;
                            dataModule.aiRecentHitYCoordinates = selectedYaxis;
                        }
                        enemyBoardDiv.style.backgroundColor = 'red';
                        //this marks the enemy board so the other player can view where they have been hit by the opposing player
                        document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis}"][class="gameboard-${dataModule.opponentBoardNumber}-cell"]`).style.backgroundColor = 'red';
                        alert(`attack ${selectedXaxis}, ${selectedYaxis} hits!`)
                        //resets all ai attack logic to default, is assigned true in the receive attack function
                        if (dataModule.aiSunkEnemyShip == true) {
                            dataModule.aiSunkEnemyShip = false;
                            dataModule.aiHitBool = null, dataModule.switchAiAttack = false, dataModule.aiInitialHitXCoordinates = null, dataModule.aiInitialHitYCoordinates = null, dataModule.aiRecentHitXCoordinates = null, dataModule.aiRecentHitYCoordinates = null, dataModule.aiAttackSubtractXBool = false, dataModule.aiAttackSubtractYBool = false, dataModule.aiAttackAddXBool = false, dataModule.aiAttackAddYBool = false, dataModule.aiEnemyShipHorizontal = true;
                        }
                        //when attack misses the else box is triggered
                    } else {
                        //this if block makes sure that recent hit coordinates are changed to initial hit coordinate values when an attack misses
                        if (dataModule.pvp == false && dataModule.player1Turn == false) {
                            dataModule.switchAiAttack = true;
                            console.log('recent hits', dataModule.aiRecentHitXCoordinates, dataModule.aiRecentHitYCoordinates, 'initial hits', dataModule.aiInitialHitXCoordinates, dataModule.aiInitialHitYCoordinates)
                        }
                        enemyBoardDiv.style.backgroundColor = 'grey';
                        //this query selector marks misses on the other players board to view where they have been missed by the opposing player
                        document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis}"][class="gameboard-${dataModule.opponentBoardNumber}-cell"]`).style.backgroundColor = 'grey';
                        alert(`attack ${selectedXaxis}, ${selectedYaxis} misses!`)
                    }
                    playerAndPCModule.playerTurnHandler();
                });
                //this block creates new divs with data-x/y-axis values and appends them to each player gameboard
                playerGameboardDiv.dataset.xaxis = `${j}`;
                playerGameboardDiv.dataset.yaxis = `${i}`;
                playerGameboardDiv.className = `gameboard-${numberOfGameboards}-cell`;

                enemyBoardDiv.dataset.xaxis = `${j}`;
                enemyBoardDiv.dataset.yaxis = `${i}`;
                enemyBoardDiv.className = `opponent-gameboard-${numberOfGameboards}-cell`;
                document.getElementById(`gameboard-${numberOfGameboards}`).appendChild(playerGameboardDiv);
                document.getElementById(`opponent-gameboard-${numberOfGameboards}`).appendChild(enemyBoardDiv);
            }
        }
        //places the pc players ships after player 1's turn is over
        if (dataModule.pvp == false && dataModule.player1Turn == false) {
            //the below low lines set up the shipPlacement tracker normally done in the click event listener for Pv
            playerAndPCModule.pcPlaceShips();
        }
    }

    return { userInterface, generateBoards };
})();
const gameboardModule = (() => {
    let placeShip = function (ship, xCoordinates, yCoordinates) {

        let shipPlacement = {
            shipObj: ship,
            xAxis: null,
            yAxis: null
        }
        shipPlacement.xAxis = xCoordinates;
        shipPlacement.yAxis = yCoordinates;
        return shipPlacement;
    }
    //x/ycoordinates are the chosen coordinates by the attacking player, currentPlayerGameboard should be set properly prior to calling this function
    function receiveAttack(xCoordinates, yCoordinates) {
        let xCoordinatesTrue = null;
        let yCoordinatesTrue = null;
        for (let i = 0; i < dataModule.currentEnemyGameboard.length; i++) {

            //checks if xCoordinate hits
            for (let j = 0; j < dataModule.currentEnemyGameboard[i].xAxis.length; j++) {
                if (dataModule.currentEnemyGameboard[i].xAxis[j] == xCoordinates) {
                    xCoordinatesTrue = true
                }
            }
            //checks if yCoordinate hits
            for (let j = 0; j < dataModule.currentEnemyGameboard[i].yAxis.length; j++) {
                if (dataModule.currentEnemyGameboard[i].yAxis[j] == yCoordinates) {
                    yCoordinatesTrue = true;
                }
            }
            //only runs this block hit is confirmed or to record missed and used coordinates on the last iteration of the gameboard to prevent multiple entries of used/missed/hit coordinates
            if (i === dataModule.currentEnemyGameboard.length - 1 || xCoordinatesTrue && yCoordinatesTrue == true) {
                //if both coordinates hits are true, call hit function on correct ship and index of its hits array
                if (xCoordinatesTrue && yCoordinatesTrue == true) {
                    dataModule.hitBool = true;
                    //records all coordinates hit or miss for PvE mode
                    if (dataModule.player1Turn == false) {
                        dataModule.usedCoordinates.xAxis.push(xCoordinates);
                        dataModule.usedCoordinates.yAxis.push(yCoordinates);
                        console.log(`used coordinates`, dataModule.usedCoordinates)
                    }
                    //records hit coordinates for PvE
                    if (dataModule.player1Turn == false && dataModule.pvp == false) {
                        dataModule.hitCoordinates.xAxis.push(xCoordinates);
                        dataModule.hitCoordinates.yAxis.push(yCoordinates);
                        console.log(`hit Coordinates`, dataModule.hitCoordinates);
                    }
                    if (dataModule.player1Turn == true) {
                        dataModule.player2Gameboard[i].shipObj.hits++;
                        shipModule.isSunk(dataModule.player2Gameboard[i].shipObj)
                        gameboardModule.winCheck();
                    } else {
                        dataModule.player1Gameboard[i].shipObj.hits++;
                        shipModule.isSunk(dataModule.player1Gameboard[i].shipObj)
                        gameboardModule.winCheck();
                    }
                    return true;
                }
                //records all coordinates hit or miss for PvE mode
                if (dataModule.player1Turn == false) {
                    dataModule.usedCoordinates.xAxis.push(xCoordinates);
                    dataModule.usedCoordinates.yAxis.push(yCoordinates);
                    console.log(`used coordinates`, dataModule.usedCoordinates)
                }

                //records missed coordinates for PvE mode (deprecated)
                if (xCoordinatesTrue || yCoordinatesTrue != true && dataModule.pvp == false) {
                    if (dataModule.player1Turn == false) {
                        dataModule.missedCoordinates.xAxis.push(xCoordinates);
                        dataModule.missedCoordinates.yAxis.push(yCoordinates);
                        console.log(`missed coordinates ${dataModule.missedCoordinates}`)
                    }
                    return false;
                }
            }
            xCoordinatesTrue = null;
            yCoordinatesTrue = null;
        }
    }

    function winCheck() {
        let player1SunkShips = 0;
        let player2SunkShips = 0;

        for (let i = 0; i < dataModule.player1Gameboard.length; i++) {
            if (dataModule.player1Gameboard[i].shipObj.sunk == true) {
                player1SunkShips++;
            }
        }
        for (let i = 0; i < dataModule.player2Gameboard.length; i++) {
            if (dataModule.player2Gameboard[i].shipObj.sunk == true) {
                player2SunkShips++;
            }
        }

        if (player1SunkShips == dataModule.player1Gameboard.length) {
            document.body.style.display = 'flex';
            document.body.style.justifyContent = 'center';
            document.getElementById('content').style.display = 'none';
            document.getElementById('victory-screen').textContent = 'player 2 Wins!!';
            document.getElementById('victory-screen').style.display = 'flex';

        } else if (player2SunkShips == dataModule.player2Gameboard.length) {
            document.body.style.display = 'flex';
            document.body.style.justifyContent = 'center';
            document.getElementById('content').style.display = 'none';
            document.getElementById('victory-screen').textContent = 'player 1 Wins!!';
            document.getElementById('victory-screen').style.display = 'flex';

        }
    }
    return { placeShip, receiveAttack, winCheck }
})();

const shipModule = (() => {

    const shipConstructor = function () {

        let carrier = {
            length: 5,
            hits: 0,
            sunk: false,
        },
            battleship = {
                length: 4,
                hits: 0,
                sunk: false,
            },
            destroyer = {
                length: 3,
                hits: 0,
                sunk: false,
            },
            submarine = {
                length: 3,
                hits: 0,
                sunk: false,
            },
            patrolBoat = {
                length: 2,
                hits: 0,
                sunk: false,
            }

        return { carrier, battleship, destroyer, submarine, patrolBoat };

    }

    function hit(shipObj) {
        shipObj.hits++
    }

    function isSunk(shipObj) {
        if (shipObj.length == shipObj.hits) {
            //checks if sunk during player 2 turn in pvp, also resets the aihitbool after a ship is sunk so the ai doesnt attempt to run its attack algorithm anymore
            if (dataModule.player1Turn == false && dataModule.pvp == false) {
                //resets the ai hit bool and hit coordinates so it doesnt attempt to "find" the rest of the ship coordinates that have been sunk
                dataModule.aiSunkEnemyShip = true;
            }
            shipObj.sunk = true
            return true, alert('ship is sunk!');
        }
    }

    return { shipConstructor, hit, isSunk };
})();


//below 2 lines is for the sake of testing only
let testShip = shipModule.shipConstructor.battleship
dataModule.selectedShip = { testShip };

gameLoopModule.userInterface();
//let testDiv = domModule.createElementIdClass('div','test', 'test');
//document.getElementById('content').appendChild(testDiv);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3Qix3Q0FBd0M7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0NBQXdDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOzs7QUFHRDtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0EsMEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmh0bWwge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XFxufVxcblxcbiN2aWN0b3J5LXNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTg3LCAxODcsIC42KTtcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbn1cXG5cXG4jdXNlci1pbnRlcmZhY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FtZS10eXBlLXNlbGVjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4jcm90YXRpb24taWNvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG59XFxuXFxuI3JvdGF0aW9uLWljb246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MywgMTM3LCAxMzcsIDAuNCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmdhbWVib2FyZC0wLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQtMS1jZWxsIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ub3Bwb25lbnQtZ2FtZWJvYXJkLTAtY2VsbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9wcG9uZW50LWdhbWVib2FyZC0xLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcblxcbiNnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLTAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuI2dhbWVib2FyZC0xIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbiNvcHBvbmVudC1nYW1lYm9hcmQtMCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG5cXG4jb3Bwb25lbnQtZ2FtZWJvYXJkLTEge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5odG1sIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xcbn1cXG5cXG4jdmljdG9yeS1zY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDE4NywgMTg3LCAuNik7XFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG59XFxuXFxuI3VzZXItaW50ZXJmYWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdHlwZS1zZWxlY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuI3JvdGF0aW9uLWljb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxufVxcblxcbiNyb3RhdGlvbi1pY29uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDMsIDEzNywgMTM3LCAwLjQpO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5nYW1lYm9hcmQtMC1jZWxsIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkLTEtY2VsbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm9wcG9uZW50LWdhbWVib2FyZC0wLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5vcHBvbmVudC1nYW1lYm9hcmQtMS1jZWxsIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG5cXG4jZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI2dhbWVib2FyZC0wIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbiNnYW1lYm9hcmQtMSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG5cXG4jb3Bwb25lbnQtZ2FtZWJvYXJkLTAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuI29wcG9uZW50LWdhbWVib2FyZC0xIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHJvdGF0aW9uSWNvbkltZyBmcm9tICcuL0ltYWdlcy9SZWZyZXNoX2ljb24uc3ZnLnBuZydcblxuY29uc3QgZGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy90aGUgZ2FtZWJvYXJkIGFycmF5cyB3aWxsIHN0b3JlIHRoZSBzaGlwIG9iamVjdHMsIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlcyBrZWVwcyB0cmFjayBvZiB3aGF0IHBsYXlzIGVhY2ggcGxheWVyIGhhcyBhbHJlYWR5IG1hZGUuXG4gICAgbGV0IHBsYXllcjFHYW1lYm9hcmQgPSBbXTtcbiAgICBsZXQgcGxheWVyMkdhbWVib2FyZCA9IFtdO1xuICAgIGxldCBoaXRDb29yZGluYXRlcyA9IHtcbiAgICAgICAgeEF4aXM6IFtdLFxuICAgICAgICB5QXhpczogW11cbiAgICB9O1xuICAgIGxldCBtaXNzZWRDb29yZGluYXRlcyA9IHtcbiAgICAgICAgeEF4aXM6IFtdLFxuICAgICAgICB5QXhpczogW11cbiAgICB9O1xuICAgIGxldCB1c2VkQ29vcmRpbmF0ZXMgPSB7XG4gICAgICAgIHhBeGlzOiBbXSxcbiAgICAgICAgeUF4aXM6IFtdXG4gICAgfTtcbiAgICBsZXQgcHZwID0gZmFsc2U7XG4gICAgLy9kZXRlcm1pbmVzIHBsYXllcnMgdHVybnMgd2hlbiBzZXR0aW5nIHVwIGJvYXJkLCBhZnRlcndhcmRzIGl0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHBsYXllciB0dXJuIGluIHRoZSBnYW1lbG9vcFxuICAgIGxldCBwbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgLy9iZWNvbWVzIHRydWUgd2hlbiB0aGUgcGxheWVyIGlzIHBsYWNpbmcgYSBzaGlwXG4gICAgbGV0IHNoaXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgIC8vc2hvdWxkIGJlIGVxdWFsIHRvIHRoZSBzZWxlY3RlZCBzaGlwIG9iamVjdCBhbmQgdXNlZCB0byBjcmVhdGUgdGhlIHBsYWNlbWVudCBzaGFkb3cgd2hlbiBwbGFjaW5nIHNoaXBzIGJ5IGFjY2VzaW5nIHRoZSBzaGlwcyBsZW5ndGggcHJvcGVydHlcbiAgICBsZXQgc2VsZWN0ZWRTaGlwID0ge307XG4gICAgbGV0IGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQsIGN1cnJlbnRFbmVteUdhbWVib2FyZCA9IG51bGxcbiAgICBsZXQgcGxhY2VtZW50UGhhc2UgPSB0cnVlO1xuICAgIGxldCB2ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IGZhbHNlO1xuICAgIC8vdXNlZCBpbiByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHRvIHNldCBkaXZzIG1hcmtpbmcgaGl0IG9yIG1pc3NlcyBvbiBnYW1lYm9hcmRzLCBpIHVzZWQgdGhpcyBvdmVyIHJldHVybmluZyBhIGJvb2wgaW4gdGhlIHJlY2VpdmVBdHRhY2sgYmVjYXVzZSBjaGVja2luZyB0aGUgYm9vbCBhbHNvIHJlcXVpcmVzIHJ1bm5pbmcgdGhlIGZ1bmN0aW9uIGNhdXNpbmcgdGhlIGZ1bmN0aW9uIHRvIHJ1biB0d2ljZVxuICAgIGxldCBoaXRCb29sID0gbnVsbDtcbiAgICBsZXQgb3Bwb25lbnRCb2FyZE51bWJlcjtcbiAgICAvL2JlbG93IDMgbGluZXMgdXNlZCB0byBhaWQgdGhlIGFpIGludGVsbGlnZW5jZVxuICAgIGxldCBhaUhpdEJvb2wgPSBudWxsO1xuICAgIGxldCBhaVN1bmtFbmVteVNoaXAgPSBudWxsO1xuICAgIGxldCBzd2l0Y2hBaUF0dGFjayA9IGZhbHNlO1xuICAgIGxldCBhaUluaXRpYWxIaXRYQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIGxldCBhaUluaXRpYWxIaXRZQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIC8vbmV4dCAyIGxpbmVzIGtlZXAgdHJhY2sgb2YgY29uc2VjdXRpdmUgaGl0cyBmb3IgdGhlIGFpXG4gICAgbGV0IGFpUmVjZW50SGl0WENvb3JkaW5hdGVzID0gbnVsbDtcbiAgICBsZXQgYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXMgPSBudWxsO1xuICAgIC8vdGhlIG5leHQgbGluZSB0ZWxsIHRoZSBhaSBhdHRhY2sgYWxnbyB3aGV0aGVyIG9yIG5vdCB0aGUgaGl0IHNoaXAgaXMgdmVydGljYWwgb3IgaG9yaXpvbnRhbFxuICAgIGxldCBhaUVuZW15U2hpcEhvcml6b250YWwgPSB0cnVlO1xuICAgIC8vdGhlIG5leHQgNCAgYm9vbHMgZm9yIHRoZSA0IGRpZmZlcmVudCBhdHRhY2sgZGlyZWN0aW9ucyBzZXQgZm9yIHRoZSBhaSwgd2hlbiBhIG1vdmUgaXMgdXNlZCBpdHMgYXNzb2NpYXRlZCBib29sIGlzIHNldCB0byB0cnVlLCB0aGlzIGNvbnRpbnVlcyB1bnRpbCB0aGUgaGl0IHNoaXAgaXMgc3VuayB0aGVuIHRoZSBib29scyBhcmUgYWxsIHNldCBiYWNrIHRvIGZhbHNlXG4gICAgbGV0IGFpQXR0YWNrU3VidHJhY3RYQm9vbCA9IGZhbHNlO1xuICAgIGxldCBhaUF0dGFja1N1YnRyYWN0WUJvb2wgPSBmYWxzZTtcbiAgICBsZXQgYWlBdHRhY2tBZGRYQm9vbCA9IGZhbHNlO1xuICAgIGxldCBhaUF0dGFja0FkZFlCb29sID0gZmFsc2U7XG4gICAgLy90aGlzIG9iamVjdCBrZWVwcyB0cmFjayBvZiB0aGUgc2hpcHMgdGhhdCBoYXZlIGJlZW4gcGxhY2VkIGR1cmluZyBhIHBsYXllcnMgdHVybiAocmVzZXRzIGJhY2sgdG8gZmFsc2UgYXQgZW5kIG9mIHR1cm4pXG4gICAgbGV0IHNoaXBQbGFjZW1lbnRUcmFja2VyID0ge1xuICAgICAgICBjYXJyaWVyOiBmYWxzZSxcbiAgICAgICAgYmF0dGxlc2hpcDogZmFsc2UsXG4gICAgICAgIGRlc3Ryb3llcjogZmFsc2UsXG4gICAgICAgIHN1Ym1hcmluZTogZmFsc2UsXG4gICAgICAgIHBhdHJvbEJvYXQ6IGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcGxheWVyMUdhbWVib2FyZCwgcGxheWVyMkdhbWVib2FyZCwgaGl0Q29vcmRpbmF0ZXMsIG1pc3NlZENvb3JkaW5hdGVzLCB1c2VkQ29vcmRpbmF0ZXMsIHBsYXllcjFUdXJuLCBwdnAsIHNoaXBTZWxlY3Rpb24sIHNlbGVjdGVkU2hpcCwgY3VycmVudFBsYXllckdhbWVib2FyZCwgY3VycmVudEVuZW15R2FtZWJvYXJkLCBwbGFjZW1lbnRQaGFzZSwgdmVydGljYWxTaGlwUm90YXRpb24sIGhpdEJvb2wsIG9wcG9uZW50Qm9hcmROdW1iZXIsIGFpSGl0Qm9vbCwgYWlTdW5rRW5lbXlTaGlwLCBzd2l0Y2hBaUF0dGFjaywgYWlJbml0aWFsSGl0WENvb3JkaW5hdGVzLCBhaUluaXRpYWxIaXRZQ29vcmRpbmF0ZXMsIGFpUmVjZW50SGl0WENvb3JkaW5hdGVzLCBhaVJlY2VudEhpdFlDb29yZGluYXRlcywgYWlFbmVteVNoaXBIb3Jpem9udGFsLCBhaUF0dGFja1N1YnRyYWN0WEJvb2wsIGFpQXR0YWNrU3VidHJhY3RZQm9vbCwgYWlBdHRhY2tBZGRYQm9vbCwgYWlBdHRhY2tBZGRZQm9vbCwgc2hpcFBsYWNlbWVudFRyYWNrZXIsXG4gICAgfTtcbn0pKCk7XG5jb25zdCBkb21Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRJZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkLCBjbGFzc04pIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmVDaGlsZHJlbiA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGNyZWF0ZUVsZW1lbnRJZENsYXNzLCByZW1vdmVDaGlsZHJlbiB9O1xufSkoKTtcblxuY29uc3QgcGxheWVyQW5kUENNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vdGhpcyBmdW5jdGlvbiBkZWFscyBoaWRpbmcgcGxheWVyIHNjcmVlbnMgYmV0d2VlbiBkZXZpY2UgaGFuZG9mZnMgYW5kIGNoYW5naW5nIHRoZSBwbGF5ZXIgZ2FtZWJvYXJkcyBiZXR3ZWVuIHR1cm5zXG4gICAgZnVuY3Rpb24gcGxheWVyVHVybkhhbmRsZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyLTAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci0xJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgLy90aGlzIGlmIGJsb2NrIGhhbmRsZXMgUHZFXG4gICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IGZhbHNlICYmIGRhdGFNb2R1bGUucHZwID09IGZhbHNlKSB7XG4gICAgICAgICAgICBhbGVydCgncGxheWVycyB0dXJuJylcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyLTAnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQgPSBkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQ7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmN1cnJlbnRFbmVteUdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXItMCcpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBhbGVydCgncGNcXHMgdHVybicpXG5cbiAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuY3VycmVudFBsYXllckdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZDtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuY3VycmVudEVuZW15R2FtZWJvYXJkID0gZGF0YU1vZHVsZS5wbGF5ZXIxR2FtZWJvYXJkO1xuXG4gICAgICAgICAgICBsZXQgcmFuZG9tWENvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICBsZXQgcmFuZG9tWUNvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAvL2NoYW5nZXMgcmFuZG9tIGNvb3JkaW5hdGUgcGFpcnMgaWYgdGhleSBoYXZlIGFscmVhZHkgYmVlbiB1c2VkIGluIGFuIGF0dGFja1xuICAgICAgICAgICAgd2hpbGUgKHBsYXllckFuZFBDTW9kdWxlLnVzZWRDb29yZGluYXRlQ2hlY2socmFuZG9tWENvb3JkaW5hdGUsIHJhbmRvbVlDb29yZGluYXRlKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllckFuZFBDTW9kdWxlLnVzZWRDb29yZGluYXRlQ2hlY2socmFuZG9tWENvb3JkaW5hdGUsIHJhbmRvbVlDb29yZGluYXRlKSlcbiAgICAgICAgICAgICAgICBsZXQgbmV3cmFuZG9tWENvb3JkaW5hdGUgPSByYW5kb21Db29yZGluYXRlKCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld3JhbmRvbVlDb29yZGluYXRlID0gcmFuZG9tQ29vcmRpbmF0ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJBbmRQQ01vZHVsZS51c2VkQ29vcmRpbmF0ZUNoZWNrKG5ld3JhbmRvbVhDb29yZGluYXRlLCBuZXdyYW5kb21ZQ29vcmRpbmF0ZSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWENvb3JkaW5hdGUgPSBuZXdyYW5kb21YQ29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tWUNvb3JkaW5hdGUgPSBuZXdyYW5kb21ZQ29vcmRpbmF0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9wbGF5ZXJBbmRQQ01vZHVsZS51c2VkQ29vcmRpbmF0ZUNoZWNrKHJhbmRvbVhDb29yZGluYXRlLCByYW5kb21ZQ29vcmRpbmF0ZSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZHVwbGljYXRlIGNvb3JkaW5hdGVzIGZpbHRlcmVkLicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL21ha2VzIHRoZSBwYyBhdHRhY2tzIG1vcmUgaW50ZWxsaWdlbnQgaS5lLiBhdHRhY2tpbmcgYW4gYWRqYWNlbnQgY29vcmRpbmF0ZSB3aGVuIGhpdHRpbmcgYW4gb3Bwb25lbnRzIHNoaXBcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLmFpSGl0Qm9vbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9lYWNoIHRpbWUgYSBoaXQgaXMgbWFkZSB0aGVzZSBib29scyBzaG91bGQgYmUgcmV0dXJuZWQgdG8gZmFsc2UgdG8gbGV0IHRoZSBkaXJlY3Rpb25hbCBhdHRhY2sgbG9naWMgcmVhc3Nlc3MgdGhlIHBvc3NpYmxlIGF0dGFjayBkaXJlY3Rpb25zIHNpbmNlIGl0IGlzIGJhc2VkIG9mZiBvZiByZWNlbnRIaXRDb29yZGluYXRlcyB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIC8vZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPSBmYWxzZSwgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wgPSBmYWxzZSwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sID0gZmFsc2UsIGRhdGFNb2R1bGUuYWlBdHRhY2tBZGRZQm9vbCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU1vZHVsZS5haUluaXRpYWxIaXRYQ29vcmRpbmF0ZXMsIGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WUNvb3JkaW5hdGVzLCAnaGl0IGNvb3JkcyB4L3knKVxuICAgICAgICAgICAgICAgIGNoZWNrQWlBdHRhY2tzKCk7XG4gICAgICAgICAgICAgICAgLy9pbiB0aGUgY2FzZSB0aGF0IGFsbCBwb3NzaWJsZSBhdHRhY2tzIGhhdmUgYmVlbiB0cnllZCwgcmVzZXQgdGhlIHJlY2VudEhpdHMgYmFjayB0byBpbml0aWFsSGl0cyBhbmQgcmV0cnkgY2hlY2tBaUF0dGFja3NcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sID09IHRydWUgJiYgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID09IHRydWUgJiYgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RZQm9vbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRYQ29vcmRpbmF0ZXMgPSBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFhDb29yZGluYXRlc1xuICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzID0gZGF0YU1vZHVsZS5haUluaXRpYWxIaXRZQ29vcmRpbmF0ZXNcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPSBmYWxzZSwgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wgPSBmYWxzZSwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sID0gZmFsc2UsIGRhdGFNb2R1bGUuYWlBdHRhY2tBZGRZQm9vbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjaGVja0FpQXR0YWNrcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhaUF0dGFjaygpO1xuICAgICAgICAgICAgICAgIC8vYmVsb3cgaWYgc3RhdGVtZW50IGlzIG51bGwgZXJyb3IgcHJlY2F1dGlvblxuICAgICAgICAgICAgICAgIC8qIGlmIChkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RYQm9vbCA9PSB0cnVlLCBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RZQm9vbCA9PSB0cnVlLCBkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWEJvb2wgPT0gdHJ1ZSwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdudWxsIGF0dGFjayBwcmV2ZW50aW9uISBmaXggbG9naWMuJylcbiAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtyYW5kb21YQ29vcmRpbmF0ZX1cIl1bZGF0YS15YXhpcz1cIiR7cmFuZG9tWUNvb3JkaW5hdGV9XCJdW2NsYXNzPVwib3Bwb25lbnQtZ2FtZWJvYXJkLTEtY2VsbFwiXWApLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgfSAqL1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7cmFuZG9tWENvb3JkaW5hdGV9XCJdW2RhdGEteWF4aXM9XCIke3JhbmRvbVlDb29yZGluYXRlfVwiXVtjbGFzcz1cIm9wcG9uZW50LWdhbWVib2FyZC0xLWNlbGxcIl1gKS5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGl0cyBhIFB2UCBnYW1lIHRoaXMgc3RhdGVtZW50IGJsb2NrIHNob3VsZCBpbnN1cmUgdGhlIHNjcmVlbiBpcyBoaWRkZW4gd2hlbiBwYXNzaW5nIHRoZSBkZXZpY2VcbiAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSB0cnVlIHx8IGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gZmFsc2UgJiYgZGF0YU1vZHVsZS5wdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvL3RoZSBzZXRUaW1lb3V0IGZ1bmN0aW9uIGFyZSB1c2VkIHNpbmNlIGl0IHNlZW1zIGFuIGFsZXJ0IHN0YXRlbWVudCBhY3R1YWxseSBnZXRzIGZpcmVkIGJlZm9yZSBhbnl0aGluZyBlbHNlIGluIHRoaXMgYmxvY2sgdGhlbiBpbW1lZGlhdGxleSBmaXJpbmcgdGhlIGNvZGUgYWZ0ZXIgdGhlIGFsZXJ0cyBjb2RlIGxpbmUgb25jZSB0aGUgYWxlcnQgaXMgY2xvc2VkLCB0aGUgc2V0VGltZW91dCBmdW5jdGlvbiBmaXhlcyB0aGlzIGJ5IFxuICAgICAgICAgICAgICAgIC8vb25seSBzZXR0aW5nIHRoZSBnYW1lYm9hcmQgY29udGFpbmVycyB0byBmbGV4IGFmdGVyIHRoZSB3aW5kb3cgaGFzIGJlZW4gY2xvc2VkXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdwbGF5ZXIgMVxcJ3MgdHVybi4gbm8gcGVla2luZycpO1xuXG4gICAgICAgICAgICAgICAgfSwgMTUwKTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuY3VycmVudFBsYXllckdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZDtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5jdXJyZW50RW5lbXlHYW1lYm9hcmQgPSBkYXRhTW9kdWxlLnBsYXllcjJHYW1lYm9hcmQ7XG4gICAgICAgICAgICAgICAgICAgIC8vdHVybiBvZmYgdGhlIDJuZCBwbGF5ZXIgZ2FtZWJvYXJkIGRpc3BsYXkgYW5kIHR1cm4gb24gdGhlIDFzdCBwbGF5ZXJzXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyLTAnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICAgICAgICAgICAgfSwgMTgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9pbXBsZW1lbnQgYSBET00gaGFuZGxlciB0byBjb3ZlciB0aGUgZ2FtZSBib2FyZCB3aGVuIHRoZSBET00gYWN0dWFsbHkgZ2V0cyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxheWVyIDJcXCdzIHR1cm4uIG5vIHBlZWtpbmcnKTtcbiAgICAgICAgICAgICAgICB9LCAxNTApO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5jdXJyZW50UGxheWVyR2FtZWJvYXJkID0gZGF0YU1vZHVsZS5wbGF5ZXIyR2FtZWJvYXJkO1xuICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmN1cnJlbnRFbmVteUdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZDtcbiAgICAgICAgICAgICAgICAgICAgLy90dXJuIG9mZiB0aGUgMXN0IHBsYXllciBnYW1lYm9hcmQgZGlzcGxheSBhbmQgdHVybiBvbiB0aGUgMm5kIHBsYXllcnNcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXItMScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgfSwgMTgwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJhbmRvbUNvb3JkaW5hdGUoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwY1BsYWNlU2hpcHMoKSB7XG4gICAgICAgIC8vcGxhY2UgdGhlIHBjIHBsYXllcnMgc2hpcHMgYmVmb3JlIGNhbGxpbmcgdGhlIHBsYXllclR1cm5IYW5kbGVyKCkgd2hpY2ggY29tbWVuY2VzIHRoZSBnYW1lIGxvb3BcbiAgICAgICAgLy9wcmV2ZW50cyB0aGUgb25seSBmb3IgaW4gbG9vcCBvbiB0aGUgc2hpcCBwbGFjZW1lbnQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZnJvbSBzdGFydGluZyB3aXRoIHBhdHJvbCBib2F0XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZC5sZW5ndGggPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCByYW5kb21YQ29vcmRpbmF0ZSA9IHBsYXllckFuZFBDTW9kdWxlLnJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIGxldCByYW5kb21ZQ29vcmRpbmF0ZSA9IHBsYXllckFuZFBDTW9kdWxlLnJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIGxldCByYW5kb21WZXJ0aWNhbFNlbGVjdGlvbiA9IHBsYXllckFuZFBDTW9kdWxlLnJhbmRvbUNvb3JkaW5hdGUoKTtcbiAgICAgICAgICAgIC8vY3JlYXRlcyBhIDUwJSBjaGFuY2UgdG8gcm90YXRlIHNoaXAgcGxhY2VtZW50IGZvciB0aGUgcGMgcGxheWVyLCBudWxsIHNlbGVjdG9ucyBcbiAgICAgICAgICAgIGlmIChyYW5kb21WZXJ0aWNhbFNlbGVjdGlvbiA8PSA1KSB7XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZCwgcmFuZG9tWENvb3JkaW5hdGUsIHJhbmRvbVlDb29yZGluYXRlKTtcbiAgICAgICAgICAgIC8vb3B0aW9uYWwgY2hhaW5pbmcgb3BlcmF0b3Iga2VlcHMgcXVlcnkgc2VsZWN0b3IgZnJvbSB0aHJvd2luZyBudWxsXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7cmFuZG9tWENvb3JkaW5hdGV9XCJdW2RhdGEteWF4aXM9XCIke3JhbmRvbVlDb29yZGluYXRlfVwiXVtjbGFzcz1cImdhbWVib2FyZC0xLWNlbGxcIl1gKT8uY2xpY2soKTtcblxuICAgICAgICB9XG4gICAgICAgIGRhdGFNb2R1bGUucGxhY2VtZW50UGhhc2UgPSBmYWxzZTtcbiAgICAgICAgZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IGZhbHNlO1xuICAgICAgICAvL3NldHMgdXAgcGxheWVyVHVybkhhbmRsZXIgZm9yIHBsYXllciAxJ3MgdHVybiBzaW5jZSBwbGF5ZXIxVHVybiB2YXJpYWJsZSBpcyB1c2VkIGZvciBkZXRlcm1pbmluZyBzaGlwIHBsYWNlbWVudCB0dXJuIGFzIHdlbGxcbiAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXJBbmRQQ01vZHVsZS5wbGF5ZXJUdXJuSGFuZGxlcigpO1xuICAgIH1cblxuICAgIC8vdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNoZWNrIHRoZSBhaSdzIHJhbmRvbSBtb3ZlcyBmb3IgY29vcmRpbmF0ZXMgdGhhdCBoYXZlIGFscmVhZHkgYmVlbiBtYWRlIGtlZXBpbmcgdGhlIGFpIGZyb20gc2VsZWN0aW5nIHRoZSBzYW1lIGF0dGFja3MgdHdpY2UuXG4gICAgZnVuY3Rpb24gdXNlZENvb3JkaW5hdGVDaGVjayh4Q29vcmRpbmF0ZSwgeUNvb3JkaW5hdGUpIHtcbiAgICAgICAgLy9jaGVja3MgaWYgeENvb3JkaW5hdGUgaGl0c1xuICAgICAgICBsZXQgdXNlZFhDb29yZGluYXRlc0Jvb2wgPSBudWxsO1xuICAgICAgICBsZXQgdXNlZFlDb29yZGluYXRlc0Jvb2wgPSBudWxsO1xuICAgICAgICAvL3ggYW5kIHlBeGlzIGFycmF5cyB3aWxsIGFsd2F5cyBiZSB0aGUgc2FtZSBsZW5ndGggc28gaXQgZG9lc250IG1hdHRlciB0aGF0IHRoZSB4QXhpcy5sZW5ndGggaXMgdXNlZCBhcyB0aGUgaW5kZXggaXRlcmF0b3IgZm9yIGJvdGggYXJyYXlzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueEF4aXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB4Q29vcmRpbmF0ZXNVc2VkID0gZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueEF4aXNbaV07XG4gICAgICAgICAgICBsZXQgeUNvb3JkaW5hdGVzVXNlZCA9IGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnlBeGlzW2ldO1xuXG4gICAgICAgICAgICBpZiAoeENvb3JkaW5hdGVzVXNlZCA9PSB4Q29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgIHVzZWRYQ29vcmRpbmF0ZXNCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh5Q29vcmRpbmF0ZXNVc2VkID09IHlDb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgdXNlZFlDb29yZGluYXRlc0Jvb2wgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHVzZWRYQ29vcmRpbmF0ZXNCb29sICYmIHVzZWRZQ29vcmRpbmF0ZXNCb29sID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZWRYQ29vcmRpbmF0ZXNCb29sID0gbnVsbDtcbiAgICAgICAgICAgIHVzZWRZQ29vcmRpbmF0ZXNCb29sID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrQWlBdHRhY2tzKCkge1xuICAgICAgICBsZXQgYWlBdHRhY2tTdWJ0cmFjdFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcyAtIDF9XCJdW2RhdGEteWF4aXM9XCIke2RhdGFNb2R1bGUuYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXN9XCJdW2NsYXNzPVwib3Bwb25lbnQtZ2FtZWJvYXJkLTEtY2VsbFwiXWApO1xuICAgICAgICBsZXQgYWlBdHRhY2tTdWJ0cmFjdFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlc31cIl1bZGF0YS15YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcyAtIDF9XCJdW2NsYXNzPVwib3Bwb25lbnQtZ2FtZWJvYXJkLTEtY2VsbFwiXWApO1xuICAgICAgICBsZXQgYWlBdHRhY2tBZGRYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke2RhdGFNb2R1bGUuYWlSZWNlbnRIaXRYQ29vcmRpbmF0ZXMgKyAxfVwiXVtkYXRhLXlheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzfVwiXVtjbGFzcz1cIm9wcG9uZW50LWdhbWVib2FyZC0xLWNlbGxcIl1gKTtcbiAgICAgICAgbGV0IGFpQXR0YWNrQWRkWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzfVwiXVtkYXRhLXlheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzICsgMX1cIl1bY2xhc3M9XCJvcHBvbmVudC1nYW1lYm9hcmQtMS1jZWxsXCJdYCk7XG4gICAgICAgIC8vY2hlY2tzIHRoZSB1c2VkIGNvb3JkaW5hdGVzIGFycmF5IHRvIG1ha2Ugc3VyZSB0aGUgYWkgYXR0YWNrIHNlbGVjdG9ycyBhcmUgdmFsaWQsIHRoZSBtb3ZlcyB0aGF0IGFyZSBub3QgaGF2ZSB0aGVpciBhc3NvY2lhdGVkIGJvb2xzIHNldCB0byB0cnVlKHRydWUgYm9vbHMgYXJlIG5vdCBydW4gYnkgdGhlIGFsZ29yaXRobVxuICAgICAgICBpZiAocGxheWVyQW5kUENNb2R1bGUudXNlZENvb3JkaW5hdGVDaGVjayhkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzIC0gMSwgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlBdHRhY2tTdWJ0cmFjdFhCb29sID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyQW5kUENNb2R1bGUudXNlZENvb3JkaW5hdGVDaGVjayhkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzLCBkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzIC0gMSkpIHtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlBdHRhY2tTdWJ0cmFjdFlCb29sID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyQW5kUENNb2R1bGUudXNlZENvb3JkaW5hdGVDaGVjayhkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzICsgMSwgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlBdHRhY2tBZGRYQm9vbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllckFuZFBDTW9kdWxlLnVzZWRDb29yZGluYXRlQ2hlY2soZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcywgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcyArIDEpKSB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWUJvb2wgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jaGVja3MgZm9yIG51bGwgb24gZWFjaCBhaSBwcmVzZXQgYXR0YWNrIHF1ZXJ5U2VsZWN0b3IgYW5kIHN3aXRjaGVzIGl0cyBhc3NvY2lhdGVkIGJvb2wgdG8gdHJ1ZSB0byBzaWduYWwgdGhhdCBpdCBoYXMgYWxyZWFkeSBiZWVuIHRyaWdnZXJlZCBzbyBpdCBkb2VzIG5vdCBydW4gaW4gdGhlIGZvbGxvd2luZyBpZiBlbHNlIGJsb2NrcyB3aGljaCBvdGhlcndpc2UgY2F1c2VzIGEgbnVsbCBlcnJvclxuICAgICAgICBpZiAoYWlBdHRhY2tTdWJ0cmFjdFggPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhaUF0dGFja1N1YnRyYWN0WSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RZQm9vbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFpQXR0YWNrQWRkWCA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWEJvb2wgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhaUF0dGFja0FkZFkgPT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuICAgICAgICBsZXQgYWlBdHRhY2tTdWJ0cmFjdFggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcyAtIDF9XCJdW2RhdGEteWF4aXM9XCIke2RhdGFNb2R1bGUuYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXN9XCJdW2NsYXNzPVwib3Bwb25lbnQtZ2FtZWJvYXJkLTEtY2VsbFwiXWApO1xuICAgICAgICBsZXQgYWlBdHRhY2tTdWJ0cmFjdFkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlc31cIl1bZGF0YS15YXhpcz1cIiR7ZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcyAtIDF9XCJdW2NsYXNzPVwib3Bwb25lbnQtZ2FtZWJvYXJkLTEtY2VsbFwiXWApO1xuICAgICAgICBsZXQgYWlBdHRhY2tBZGRYID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke2RhdGFNb2R1bGUuYWlSZWNlbnRIaXRYQ29vcmRpbmF0ZXMgKyAxfVwiXVtkYXRhLXlheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzfVwiXVtjbGFzcz1cIm9wcG9uZW50LWdhbWVib2FyZC0xLWNlbGxcIl1gKTtcbiAgICAgICAgbGV0IGFpQXR0YWNrQWRkWSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzfVwiXVtkYXRhLXlheGlzPVwiJHtkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzICsgMX1cIl1bY2xhc3M9XCJvcHBvbmVudC1nYW1lYm9hcmQtMS1jZWxsXCJdYCk7XG4gICAgICAgIC8vc3dpdGNoZXMgYWkgYXR0YWNrIG1vdmUgYWZ0ZXIgYSBtaXNzZWQgYXR0YWNrXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuYWlBdHRhY2tTdWJ0cmFjdFhCb29sLCBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RZQm9vbCwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sLCBkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWUJvb2wsIDEpXG5cbiAgICAgICAgaWYgKGFpQXR0YWNrU3VidHJhY3RYID09IGZhbHNlICYmIGRhdGFNb2R1bGUuc3dpdGNoQWlBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5zd2l0Y2hBaUF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcyA9IGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WENvb3JkaW5hdGVzO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcyA9IGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WUNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUVuZW15U2hpcEhvcml6b250YWwgPT0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKGFpQXR0YWNrQWRkWCA9PSBmYWxzZSAmJiBkYXRhTW9kdWxlLnN3aXRjaEFpQXR0YWNrID09IHRydWUpIHtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuc3dpdGNoQWlBdHRhY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlBdHRhY2tBZGRYQm9vbCA9IHRydWU7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpUmVjZW50SGl0WENvb3JkaW5hdGVzID0gZGF0YU1vZHVsZS5haUluaXRpYWxIaXRYQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpUmVjZW50SGl0WUNvb3JkaW5hdGVzID0gZGF0YU1vZHVsZS5haUluaXRpYWxIaXRZQ29vcmRpbmF0ZXM7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLmFpRW5lbXlTaGlwSG9yaXpvbnRhbCA9PSB0cnVlXG4gICAgICAgIH0gZWxzZSBpZiAoYWlBdHRhY2tBZGRZID09IGZhbHNlICYmIGRhdGFNb2R1bGUuc3dpdGNoQWlBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5zd2l0Y2hBaUF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRYQ29vcmRpbmF0ZXMgPSBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFhDb29yZGluYXRlcztcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXMgPSBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFlDb29yZGluYXRlcztcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlFbmVteVNoaXBIb3Jpem9udGFsID09IGZhbHNlO1xuICAgICAgICB9IGVsc2UgaWYgKGFpQXR0YWNrU3VidHJhY3RZID09IGZhbHNlICYmIGRhdGFNb2R1bGUuc3dpdGNoQWlBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5zd2l0Y2hBaUF0dGFjayA9IGZhbHNlO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcyA9IGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WENvb3JkaW5hdGVzO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcyA9IGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WUNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5haUVuZW15U2hpcEhvcml6b250YWwgPT0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLyogICAgIC8vZGlzYWJsZXMgaG9yaXpvbnRhbCBhdHRhY2tzIHVudGlsIHNoaXAgc3VuayAoc2V0IHRvIHRydWUgYXQgdGhlIHN0YXJ0IG9mIHRoZSBhbGdvcml0aG0pXG4gICAgICAgICAgaWYgKGRhdGFNb2R1bGUuYWlFbmVteVNoaXBIb3Jpem9udGFsID09IHRydWUpIHtcbiAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUVuZW15U2hpcEhvcml6b250YWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvL2Rpc2FibGVzIHZlcnRpY2FsIGF0dGFja3MgdW50aWwgc2hpcCBzdW5rXG4gICAgICAgICAgaWYgKGRhdGFNb2R1bGUuYWlFbmVteVNoaXBIb3Jpem9udGFsID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlFbmVteVNoaXBIb3Jpem9udGFsID09IHRydWU7XG4gICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlBdHRhY2tTdWJ0cmFjdFhCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sID0gdHJ1ZTtcbiAgICAgICAgICB9Ki9cblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RYQm9vbCwgZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wsIGRhdGFNb2R1bGUuYWlBdHRhY2tBZGRYQm9vbCwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sLCAyKVxuICAgICAgICBpZiAoZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WEJvb2wgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFpQXR0YWNrU3VidHJhY3RYLmNsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YU1vZHVsZS5haUF0dGFja1N1YnRyYWN0WUJvb2wgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFpQXR0YWNrU3VidHJhY3RZLmNsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YU1vZHVsZS5haUF0dGFja0FkZFhCb29sID09IGZhbHNlKSB7XG4gICAgICAgICAgICBhaUF0dGFja0FkZFguY2xpY2soKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWUJvb2wgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGFpQXR0YWNrQWRkWS5jbGljaygpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcGxheWVyVHVybkhhbmRsZXIsIHJhbmRvbUNvb3JkaW5hdGUsIHBjUGxhY2VTaGlwcywgdXNlZENvb3JkaW5hdGVDaGVjaywgY2hlY2tBaUF0dGFja3MsIGFpQXR0YWNrIH1cbn0pKCk7XG4vL3RoaXMgbW9kdWxlIGRlYWxzIHdpdGggZXZlbnQgbGlzdGVuZXJzIGFuZCBVSSB0aGF0IHRyaWdnZXJzIHRoZSBnYW1lIGxvb3BcbmNvbnN0IGdhbWVMb29wTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2Rpc3BsYXlzIG9wZW5pbmcgVUkgYW5kIGNob2ljZXMgZm9yIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgZnVuY3Rpb24gdXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgLy9UaGUgZ2FtZSBsb29wIHNob3VsZCBzZXQgdXAgYSBuZXcgZ2FtZSBieSBjcmVhdGluZyBQbGF5ZXJzIGFuZCBHYW1lYm9hcmRzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnB2cCA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1pbnRlcmZhY2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgICAgICAvL2NyZWF0ZSBib2FyZCBjb250aWFuZXJzXG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkSGVhZGVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdwJywgJ2dhbWVib2FyZC1oZWFkZXInLCAnJyk7XG4gICAgICAgICAgICBsZXQgb3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ3AnLCAnb3Bwb25lbnQtZ2FtZWJvYXJkLWhlYWRlcicsICcnKTtcbiAgICAgICAgICAgIGxldCBnYW1lYm9hcmRIZWFkZXJDb250YWluZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgICAgICAgICAgLy90aGlzIGJsb2NrIGNyZWF0ZXMgZ2FtZWJvYXJkIHRpdGxlIGhlYWRlcnMgXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGdhbWVib2FyZEhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyJykuYXBwZW5kQ2hpbGQob3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIpO1xuICAgICAgICAgICAgZ2FtZWJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgRmxlZXQnO1xuICAgICAgICAgICAgb3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnRW5lbXkgVGVycml0b3J5JztcbiAgICAgICAgICAgIC8vY2FsbCB0aGUgZ2VuZXJhdGVCb2FyZHMgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGZpcnN0IGJvYXJkXG4gICAgICAgICAgICBnZW5lcmF0ZUJvYXJkcygpO1xuICAgICAgICAgICAgLy9tYW51YWxseSBjYWxsaW5nIHRoZSBjYXJyaWVyIG9iamVjdCB0byBiZSBkZWZhdWx0IHNlbGVjdGlvbiB1cG9uIGNob29zaW5nIHRoZSBnYW1lIHR5cGUgYXMgd2VsbCBhcyBtYW51YWxseSBtYWtpbmcgaXRzIHNoaXBQbGFjZW1lbnRUcmFja2VyIHRydWUgdG8gcHJldmVudCBwcm9ibGVtcyB3aXRoIGZvciBpbiBsb29wXG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yKCkuY2FycmllcjtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuc2hpcFBsYWNlbWVudFRyYWNrZXIuY2FycmllciA9IHRydWVcblxuICAgICAgICAgICAgbGV0IHJvdGF0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgcm90YXRpb25JY29uLnNyYyA9IHJvdGF0aW9uSWNvbkltZztcbiAgICAgICAgICAgIHJvdGF0aW9uSWNvbi5pZCA9ICdyb3RhdGlvbi1pY29uJztcbiAgICAgICAgICAgIHJvdGF0aW9uSWNvbi5vbmNsaWNrID0gKCkgPT4geyBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7IGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPSBmYWxzZSB9IGVsc2UgeyBkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID0gdHJ1ZSB9IH1cbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKHJvdGF0aW9uSWNvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdmUtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnB2cCA9IGZhbHNlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgLy9jcmVhdGUgYm9hcmQgY29udGlhbmVyc1xuICAgICAgICAgICAgbGV0IGdhbWVib2FyZEhlYWRlciA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygncCcsICdnYW1lYm9hcmQtaGVhZGVyJywgJycpO1xuICAgICAgICAgICAgbGV0IG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdwJywgJ29wcG9uZW50LWdhbWVib2FyZC1oZWFkZXInLCAnJyk7XG4gICAgICAgICAgICBsZXQgZ2FtZWJvYXJkSGVhZGVyQ29udGFpbmVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInLCAnJyk7XG5cbiAgICAgICAgICAgIC8vdGhpcyBibG9jayBjcmVhdGVzIGdhbWVib2FyZCB0aXRsZSBoZWFkZXJzIFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXJDb250YWluZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkSGVhZGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyKTtcbiAgICAgICAgICAgIGdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIEZsZWV0JztcbiAgICAgICAgICAgIG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gJ0VuZW15IFRlcnJpdG9yeSc7XG4gICAgICAgICAgICAvL2NhbGwgdGhlIGdlbmVyYXRlQm9hcmRzIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBib2FyZFxuICAgICAgICAgICAgZ2VuZXJhdGVCb2FyZHMoKTtcbiAgICAgICAgICAgIC8vbWFudWFsbHkgY2FsbGluZyB0aGUgY2FycmllciBvYmplY3QgdG8gYmUgZGVmYXVsdCBzZWxlY3Rpb24gdXBvbiBjaG9vc2luZyB0aGUgZ2FtZSB0eXBlIGFzIHdlbGwgYXMgbWFudWFsbHkgbWFraW5nIGl0cyBzaGlwUGxhY2VtZW50VHJhY2tlciB0cnVlIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBmb3IgaW4gbG9vcFxuICAgICAgICAgICAgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwTW9kdWxlLnNoaXBDb25zdHJ1Y3RvcigpLmNhcnJpZXI7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLmNhcnJpZXIgPSB0cnVlXG5cbiAgICAgICAgICAgIGxldCByb3RhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIHJvdGF0aW9uSWNvbi5zcmMgPSByb3RhdGlvbkljb25JbWc7XG4gICAgICAgICAgICByb3RhdGlvbkljb24uaWQgPSAncm90YXRpb24taWNvbic7XG4gICAgICAgICAgICByb3RhdGlvbkljb24ub25jbGljayA9ICgpID0+IHsgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkgeyBkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID0gZmFsc2UgfSBlbHNlIHsgZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IHRydWUgfSB9XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChyb3RhdGlvbkljb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvL2EgZ2FtZWJvYXJkIGdlbmVyYXRvciB0aGF0IGdlbmVyYXRlcyBhIGRpdiBmb3IgZWFjaCBjb29yZGluYXRlIHdpdGggYSBkYXRhLXhheGlzIGFuZCBhIGRhdGEteWF4aXMgdmFsdWUgZm9yIGVhY2ggZGl2XG4gICAgLy9ldmVudCBsaXN0ZW5lcnMgZm9yIHRoZSBwbGF5ZXJzIGdhbWVib2FyZCBzaG91bGQgcGxhY2Ugb2JqZWN0cywgbGlzdGVuZXJzIGZvciB0aGUgcGxheWVycyB0YXJnZXRpbmcgYm9hcmQgc2hvdWxkIGhhbmRsZSBhdHRhY2sgY29vcmRpbmF0ZXMgYW5kIHN0b3JhZ2UgaW5mb1xuICAgIGNvbnN0IGdlbmVyYXRlQm9hcmRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvL3VzZWQgdG8gc2V0IGNsYXNzIGFuZCBpZCBuYW1lcyB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuIDFzdCBhbmQgMm5kIHBsYXllciBib2FyZHNcbiAgICAgICAgbGV0IG51bWJlck9mR2FtZWJvYXJkcyA9IDA7XG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci0wJykpIHtcbiAgICAgICAgICAgIG51bWJlck9mR2FtZWJvYXJkcysrXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lci0wJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCBgZ2FtZWJvYXJkLWNvbnRhaW5lci0ke251bWJlck9mR2FtZWJvYXJkc31gLCAnJyk7XG4gICAgICAgIGxldCBnYW1lQm9hcmQgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9YCwgJycpO1xuICAgICAgICBsZXQgb3Bwb25lbnRCb2FyZCA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgYG9wcG9uZW50LWdhbWVib2FyZC0ke251bWJlck9mR2FtZWJvYXJkc31gLCAnJyk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ2FtZWJvYXJkLWNvbnRhaW5lci0ke251bWJlck9mR2FtZWJvYXJkc31gKS5hcHBlbmRDaGlsZChnYW1lQm9hcmQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ2FtZWJvYXJkLWNvbnRhaW5lci0ke251bWJlck9mR2FtZWJvYXJkc31gKS5hcHBlbmRDaGlsZChvcHBvbmVudEJvYXJkKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ2FtZWJvYXJkLWNvbnRhaW5lci0ke251bWJlck9mR2FtZWJvYXJkc31gKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZ2FtZWJvYXJkLWNvbnRhaW5lci0ke251bWJlck9mR2FtZWJvYXJkc31gKS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICAvL3RoZSBiZWxvdyAyIGZvciBsb29wIGksaiB2YWx1ZXMgYXJlIHVzZWQgdG8gY3JlYXRlIHRoZSBkaXZzIGFuZCBkYXRhIGF0dHJpYnV0ZXMgZm9yIHRoZSBnYW1lYm9hcmQgYXMgd2VsbCBhcyBzZXQgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgLy8xIGJhc2VkIGluZGV4aW5nIGZvciBtb3JlIGNsYXJpdHkgd2hlbiB3b3JraW5nIHdpdGggZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIGFuZCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBwbGF5ZXJHYW1lYm9hcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5lbXlCb2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBtb3VzZW92ZXIgZXZlbnQgbGlzdGVuZXIgYWxsb3dzIHRoZSBET00gdG8gZGlzcGxheSB0byB1c2VycyB3aGV0aGVyIG9yIG5vdCBhIHNoaXAgcGxhY2VtZW50IGlzIGFwcHJvcHJpYXRlXG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYWNlbWVudFBoYXNlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2JlbG93IGxpbmUgc3RvcHMgdGhlIGh1bWFuIHBsYXllciBib2FyZCBmcm9tIGhhdmluZyBzaGlwIHBsYWNlbWVudCBob3ZlciBlZmZlY3RzIGluIFB2RVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wdnAgPT0gZmFsc2UgJiYgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxhY2VtZW50UGhhc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChwbGF5ZXJHYW1lYm9hcmREaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRZYXhpcyA9IHBhcnNlSW50KHBsYXllckdhbWVib2FyZERpdi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZXJhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VzZSBhIGZvciBsb29wIHRvIGl0ZXJhdGUgYSBzaGlwLmxlbmd0aCBudW1iZXIgb2YgdGltZXMgZnJvbSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBhbmQgYWRkaW5nICsxIHBlciBpdGVyYXRpb24gdG8gdGhlIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBkaXJlY3Rpb24gbWFpbiBheGlzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBzaGFkb3cgd2l0aCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBmb3IgbG9vcCBzaG91bGQgYWxzbyByZWNvcmQgdGhlIHgveWF4aXMgY29vcmRpbmF0ZXMgdG8gdHJhY2sgdGhlIGxvY2F0aW9uIG9mIHRoZSBzaGlwIHNob3VsZCBpdCBiZSBwbGFjZWQgaW4gYSB2YWxpZCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcHMgdGhlIHNoaXBTaGFkb3cgZnJvbSBzdGFydGluZyArMSBmcm9tIHRoZSBtb3VzZW92ZXIgcG9pbnQgKGR1ZSB0byAxIGJhc2VkIGluZGV4aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRYYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdW2NsYXNzPVwiZ2FtZWJvYXJkLSR7bnVtYmVyT2ZHYW1lYm9hcmRzfS1jZWxsXCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcHMgdGhlIHNoaXBTaGFkb3cgZnJvbSBzdGFydGluZyArMSBmcm9tIHRoZSBtb3VzZW92ZXIgcG9pbnQgKGR1ZSB0byAxIGJhc2VkIGluZGV4aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRZYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzICs9IDF9XCJdW2NsYXNzPVwiZ2FtZWJvYXJkLSR7bnVtYmVyT2ZHYW1lYm9hcmRzfS1jZWxsXCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBldmVudCBsaXN0ZW5lciByZXZlcnNlcyB0aGUgY29sb3JpbmcgdGhhdCB0aGUgbW91c2VvdmVyIGV2ZW50IGxpc3RlbmVyIGFwcGxpZXMgd2hlbiB0aGUgc2VsZWN0ZWQgc2hpcCBpcyBub3QgcGxhY2VkIGFuZCB0aGUgbW91c2UgaXMgbW92ZWRcbiAgICAgICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmREaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChwbGF5ZXJHYW1lYm9hcmREaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFlheGlzID0gcGFyc2VJbnQocGxheWVyR2FtZWJvYXJkRGl2LmRhdGFzZXQueWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVyYXRpb24gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYWNlbWVudFBoYXNlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL2JlbG93IGxpbmUgc3RvcHMgdGhlIGh1bWFuIHBsYXllciBib2FyZCBmcm9tIGhhdmluZyBzaGlwIHBsYWNlbWVudCBob3ZlciBlZmZlY3RzIGluIFB2RVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wdnAgPT0gZmFsc2UgJiYgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxhY2VtZW50UGhhc2UgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGRpbmcgKyAxIHRvIHRoZSBzZWxlY3RlZFNoaXAubGVuZ3RoIGluc3VyZXMgdGhhdCB0aGVyZSB3b250IGJlIGEgbGVmdCBvdmVyIGJsdWUgcGxhY2VtZW50IGRpdiBhcyB0aGUgYmx1ZSBzaGlwU2hhZG93IHNocmlua3MgYnkgMSB3aGVuIHRoZSB1c2VyIHBsYWNlcyBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wdXNoIHRoZSBkaXZzIGN1cnJlbnQgY29sb3JzIHRvIHByZXZpb3VzQ29sb3JzIGFycmF5IGluIGNhc2UgdGhlIHVzZXIgZGVjaWRlcyB0byBwbGFjZSBhIHNoaXAsIHRoZSBkaXZzIHNob3VsZCBrZWVwIHRoZSBncmVlbiBwbGFjZW1lbnQgY29sb3IgYXMgb3Bwb3NlZCB0byB0dXJuaW5nIGJhY2sgdG8gdGhlIGJvYXJkIGNvbG9yIGJsYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFNoYWRvdyBmcm9tIGxlYXZpbmcgMSBibG9jayBhdCB0aGUgZnVydGhlc3QgcG9pbnQgYWxvbmcgdGhlIG1haW4gYXhpcyB3aGVuIGEgc2hpcCBoYXMgYmVlbiBwbGFjZWQgKGR1ZSB0byAxIGJhc2VkIGluZGV4aW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRYYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdW2NsYXNzPVwiZ2FtZWJvYXJkLSR7bnVtYmVyT2ZHYW1lYm9hcmRzfS1jZWxsXCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2tlZXBzIHRoZSBzaGlwU2hhZG93IGZyb20gbGVhdmluZyAxIGJsb2NrIGF0IHRoZSBmdXJ0aGVzdCBwb2ludCBhbG9uZyB0aGUgbWFpbiBheGlzIHdoZW4gYSBzaGlwIGhhcyBiZWVuIHBsYWNlZCAoZHVlIHRvIDEgYmFzZWQgaW5kZXhpbmcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFlheGlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXMgKz0gMX1cIl1bY2xhc3M9XCJnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9LWNlbGxcIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9wcyBkaXZzIHRoYXQgcmVwcmVzZW50IHBsYWNlZCBzaGlwcyBmcm9tIGhhdmluZyB0aGVpciBjb2xvciBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy90aGlzIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGlzIHJlc3BvbnNpYmxlIGZvciBwbGFjaW5nIHNoaXBzIGluIHRoZSBET00gYW5kIHJlY29yZGluZyB0aGVpciBjb29yZGluYXRlcyB0byB0aGUgcmVzcGVjdGl2ZSBnYW1lYm9hcmQgb2JqZWN0XG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRYYXhpcyA9IHBhcnNlSW50KHBsYXllckdhbWVib2FyZERpdi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChwbGF5ZXJHYW1lYm9hcmREaXYuZGF0YXNldC55YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwT2JqID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTaGlwUGxhY2VtZW5JdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeENvb3JkaW5hdGVBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHlDb29yZGluYXRlQXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYWNlbWVudFBoYXNlID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGFjZW1lbnRQaGFzZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrcyBmb3IgaW52YWxpZCBwbGFjZW1lbnRzIG9uIHRoZSB4QXhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkWGF4aXMgKyBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGggPiAxMSAmJiBkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRYYXhpcywgc2VsZWN0ZWRZYXhpcywgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnaW52YWxpZCBwbGFjZW1lbnQgb24gdGhlIFggQXhpcyEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhbHVlcyBncmVhdGVyIHRoYW4gMTEgb24gdGhlIHlBeGlzIGFyZSBvbmx5IHBvc3NpYmxlIHdoZW4gdmVydGljYWwgc2hpcCByb3RhdGlvbiBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRZYXhpcyArIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCA+IDExICYmIGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnaW52YWxpZCBwbGFjZW1lbnQgb24gdGhlIFkgQXhpcyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0cyB1cCB0aGUgcGxheWVyIGdhbWVib2FyZCBvbiBlYWNoIHBsYWNlbWVudCB0dXJuIHRvIGJlIGl0ZXJhdGVkIGluIHRoZSBuZXh0IGZvciBsb29wIGJsb2NrLCBwbGF5ZXIgdHVybnMgYWZ0ZXIgc2hpcCBwbGFjZW1lbnQgYXJlIGhhbmRsZWQgYnkgcGxheWVyVHVybkhhbmRsZXIoKSBvbiBhdHRhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5jdXJyZW50UGxheWVyR2FtZWJvYXJkID0gZGF0YU1vZHVsZS5wbGF5ZXIxR2FtZWJvYXJkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmN1cnJlbnRQbGF5ZXJHYW1lYm9hcmQgPSBkYXRhTW9kdWxlLnBsYXllcjJHYW1lYm9hcmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgY2hlY2tzIGZvciBzaGlwcyBhbHJlYWR5IHBsYWNlZCBvbiB0aGUgc2VsZWN0ZWQgY29vcmRpbmF0ZXMgb24gdGhlIGN1cnJlbnQgcGxheWVyIGdhbWVib2FyZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWFjaCBzaGlwIG9iamVjdHMgeEF4aXMgYW5kIHlBeGlzIHByb3BlcnR5IGtleXMgYXJlIGl0ZXJhdGVkIGFuZCBjb21wYXJlZCB0byB0aGUgc2VsZWN0ZWQgY29vcmRpbmF0ZXMgKyBqIGl0ZXJhdGlvbnMgKGZvciB0aGUgbGVuZ3RoIG9mIHRoZSBzZWxlY3RlZCBzaGlwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hbnkgY29uZmxpY3RpbmcgY29vcmRpbmF0ZXMgdGhyb3dzIGFuIGVycm9yIHN0b3BwaW5nIHRoZSB1c2VyIGZyb20gcGxhY2luZyBhIHNoaXAgb3ZlciBhbm90aGVyIHBsYWNlZCBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuY3VycmVudFBsYXllckdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvY2N1cGllZFhDb29yZGluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9jY3VwaWVkWUNvb3JkaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaisrKSB7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmN1cnJlbnRQbGF5ZXJHYW1lYm9hcmRbaV0ueEF4aXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRYYXhpcyArIGogPT0gY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2N1cGllZFhDb29yZGluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFhheGlzID09IGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NjdXBpZWRYQ29vcmRpbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5jdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldLnlBeGlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRZYXhpcyArIGogPT0gY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2N1cGllZFlDb29yZGluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFlheGlzID09IGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NjdXBpZWRZQ29vcmRpbmF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9jY3VwaWVkWENvb3JkaW5hdGUgJiYgb2NjdXBpZWRZQ29vcmRpbmF0ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgndGhlc2UgY29vcmRpbmF0ZXMgYXJlIG9jY3VwaWVkIGJ5IGFub3RoZXIgc2hpcCEgcGxlYXNlIGNob29zZSBkaWZmZXJlbnQgY29vcmRpbmF0ZXMuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlc2UgdmFyaWFibGVzIG11c3QgYmUgcmVzZXQgZXZlcnkgc2hpcCBvYmplY3QgaXRlcmF0aW9uIGluIHRoZSBtYWluIGxvb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvY2N1cGllZFhDb29yZGluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2NjdXBpZWRZQ29vcmRpbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgcHVzaGVzIHRoZSBjb29yZGluYXRlcyB0byB0aGUgc2hpcCBvYmplY3RzIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWGF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgcGxhY2VtZW50IGlzbnQgdmVydGljYWwgdGhlIHlBeGlzIG9ubHkgbmVlZHMgdG8gYmUgcmVjb3JkZWQgb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RTaGlwUGxhY2VtZW5JdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkaW5hdGVBcnIucHVzaChzZWxlY3RlZFlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0U2hpcFBsYWNlbWVuSXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWWF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgcGxhY2VtZW50IGlzIHZlcnRpY2FsIHRoZSB4QXhpcyBvbmx5IG5lZWRzIHRvIGJlIHJlY29yZGVkIG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0U2hpcFBsYWNlbWVuSXRlcmF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlQXJyLnB1c2goc2VsZWN0ZWRYYXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNoaXBQbGFjZW1lbkl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2VzIHRoZSBzaGlwIG9uY2UgYWxsIGNvb3JkaW5hdGVzIG9mIHRoZSBzaGlwIGxlbmd0aCBoYXZlIGJlZW4gYWNjb3VudGVkIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NoaXBQbGFjZW1lbnQgPSBnYW1lYm9hcmRNb2R1bGUucGxhY2VTaGlwKGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLCB4Q29vcmRpbmF0ZUFyciwgeUNvb3JkaW5hdGVBcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZC5wdXNoKG5ld1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIyR2FtZWJvYXJkLnB1c2gobmV3U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayBtYXJrcyB0aGUgZGl2cyB3aGVyZSB0aGUgc2hpcCBoYXMgYmVlbiBwbGFjZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFBsYWNlbWVudCBmcm9tIHN0YXJ0aW5nICsxIGZyb20gdGhlIG1vdXNlb3ZlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwUGxhY2VtZW50TWFya2VySXRlcmF0aW9uID09IHRydWUgJiYgZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFhheGlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRZYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50TWFya2VySXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXMgKz0gMX1cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpc31cIl1bY2xhc3M9XCJnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9LWNlbGxcIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXMgKz0gMX1cIl1bY2xhc3M9XCJnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9LWNlbGxcIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYSBmYWxzZSBwcm9wZXJ0eSBpbiB0aGUgc2hpcFBsYWNlbWVudFRyYWNrZXIgbWVhbnMgdGhlIHNoaXAgaGFzbnQgYmVlbiBwbGFjZWQgYW5kIHdpbGwgYmVjb21lIHRoZSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBmb3IgcGxhY2VtZW50IG9uIHBsYXllck5HYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHNoaXBPYmogY29udGFpbnMgYWxsIHNoaXBzIGFuZCB3aWxsIGJlIGFjY2VzcyB0aHJvdWdoIHNlbGVjdGVkIHNoaXAgdG8gYmUgcGxhY2VkIG9uIHRoZSBwbGF5ZXJOR2FtZWJvYXJkIGFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwT2JqW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSByZW1haW5pbmcgYmxvY2tzIGhhbmRsZSBzaGlwIHBsYWNlbWVudCBsb2dpY1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9zaWduYWxzIHRoZSBuZXh0IHBsYXllcnMgdHVybiBEVVJJTkcgdGhlIHBsYWNlbWVudCBwaGFzZSwgc3dpdGNoZXMgdGhlIHBsYXllckdhbWVib2FyZCwgYW5kIHJlc2V0cyB0aGUgc2hpcFBsYWNlbWVudFRyYWNrZXIgcHJvcGVydHkgdmFsdWVzIHRvIGZhbHNlIHNvIGl0IGNhbiBiZSB1c2VkIGZvciB0aGUgbmV4dCBwbGF5ZXIgc2hpcCBwbGFjZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlci5wYXRyb2xCb2F0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3Jlc2V0cyB0aGUgdHJhY2tlciBwcm9wZXJ0eSB2YWx1ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGRhdGFNb2R1bGUuc2hpcFBsYWNlbWVudFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcltwcm9wZXJ0eV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pbSB0b28gc2xvdyB0byB1bmRlcnN0YW5kIHdoeSB0aGUgYmVsb3cgMiBsaW5lcyBhcmUgbmVjY2Vzc2FyeSB0byBzdG9wIGRvdWJsZSBzaGlwIHBsYWNlbWVudHMgOl4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwT2JqLmNhcnJpZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlci5jYXJyaWVyID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgbW91c2UgaG92ZXIgZWZmZWN0cyBhZnRlciBhbGwgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBieSBib3RoIHBsYXllcnMgaW4gUHZQIGFuZCBzdGFydHMgdGhlIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxhY2VtZW50UGhhc2UgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdnYW1lIHN0YXJ0IScpLCBwbGF5ZXJBbmRQQ01vZHVsZS5wbGF5ZXJUdXJuSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxheWVyIDJcXCdzIHR1cm4gdG8gcGxhY2Ugc2hpcHMnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zZXRzIHVwIHBsYXllciAyIG9yIEFJIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlQm9hcmRzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vdGhpcyBjbGljayBldmVudCBsaXN0ZW5lciBzaG91bGQgdHJpZ2dlciB0aGUgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB3aXRoIHRoZSBkYXRhLXgveWF4aXMgYXR0cmlidXRlcyBhcyB3ZWxsIGFzIG1hcmsgYm90aCBwbGF5ZXJzIGdhbWVib2FyZHMgd2hlcmUgZWFjaCBwbGF5ZXIgaGFzIG1pc3NlZCBvciBoaXRcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW5lbXlCb2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZXknIHx8IGVuZW15Qm9hcmREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdyZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQoJ3lvdSBoYXZlIGFscmVhZHkgYXR0YWNrZWQgdGhlc2UgY29vcmRpbmF0ZXMuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy90aGlzIGlzIHRvIHNldCB1cCBmb3IgdGhlIHF1ZXJ5IHNlbGVjdG9yIHNldmVyYWwgbGluZXMgYmVsb3cuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUub3Bwb25lbnRCb2FyZE51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLm9wcG9uZW50Qm9hcmROdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQoZW5lbXlCb2FyZERpdi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChlbmVteUJvYXJkRGl2LmRhdGFzZXQueWF4aXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayhzZWxlY3RlZFhheGlzLCBzZWxlY3RlZFlheGlzKSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wdnAgPT0gZmFsc2UgJiYgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBpZiBibG9jayBtYWtlcyBzdXJlIHRoYXQgYWlJbml0aWFsIGhpdCBjb29yZGluYXRlcyBhcmUgb25seSBzZXQgb24gYSBzaGlwcyBmaXJzdCBoaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5haUhpdEJvb2wgIT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFhDb29yZGluYXRlcyA9IHNlbGVjdGVkWGF4aXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WUNvb3JkaW5hdGVzID0gc2VsZWN0ZWRZYXhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5haUhpdEJvb2wgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRYQ29vcmRpbmF0ZXMgPSBzZWxlY3RlZFhheGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXMgPSBzZWxlY3RlZFlheGlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5lbXlCb2FyZERpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmVkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBtYXJrcyB0aGUgZW5lbXkgYm9hcmQgc28gdGhlIG90aGVyIHBsYXllciBjYW4gdmlldyB3aGVyZSB0aGV5IGhhdmUgYmVlbiBoaXQgYnkgdGhlIG9wcG9zaW5nIHBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdW2NsYXNzPVwiZ2FtZWJvYXJkLSR7ZGF0YU1vZHVsZS5vcHBvbmVudEJvYXJkTnVtYmVyfS1jZWxsXCJdYCkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgYXR0YWNrICR7c2VsZWN0ZWRYYXhpc30sICR7c2VsZWN0ZWRZYXhpc30gaGl0cyFgKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXNldHMgYWxsIGFpIGF0dGFjayBsb2dpYyB0byBkZWZhdWx0LCBpcyBhc3NpZ25lZCB0cnVlIGluIHRoZSByZWNlaXZlIGF0dGFjayBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuYWlTdW5rRW5lbXlTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmFpU3Vua0VuZW15U2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuYWlIaXRCb29sID0gbnVsbCwgZGF0YU1vZHVsZS5zd2l0Y2hBaUF0dGFjayA9IGZhbHNlLCBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFhDb29yZGluYXRlcyA9IG51bGwsIGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WUNvb3JkaW5hdGVzID0gbnVsbCwgZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcyA9IG51bGwsIGRhdGFNb2R1bGUuYWlSZWNlbnRIaXRZQ29vcmRpbmF0ZXMgPSBudWxsLCBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RYQm9vbCA9IGZhbHNlLCBkYXRhTW9kdWxlLmFpQXR0YWNrU3VidHJhY3RZQm9vbCA9IGZhbHNlLCBkYXRhTW9kdWxlLmFpQXR0YWNrQWRkWEJvb2wgPSBmYWxzZSwgZGF0YU1vZHVsZS5haUF0dGFja0FkZFlCb29sID0gZmFsc2UsIGRhdGFNb2R1bGUuYWlFbmVteVNoaXBIb3Jpem9udGFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vd2hlbiBhdHRhY2sgbWlzc2VzIHRoZSBlbHNlIGJveCBpcyB0cmlnZ2VyZWRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBpZiBibG9jayBtYWtlcyBzdXJlIHRoYXQgcmVjZW50IGhpdCBjb29yZGluYXRlcyBhcmUgY2hhbmdlZCB0byBpbml0aWFsIGhpdCBjb29yZGluYXRlIHZhbHVlcyB3aGVuIGFuIGF0dGFjayBtaXNzZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnB2cCA9PSBmYWxzZSAmJiBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zd2l0Y2hBaUF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlY2VudCBoaXRzJywgZGF0YU1vZHVsZS5haVJlY2VudEhpdFhDb29yZGluYXRlcywgZGF0YU1vZHVsZS5haVJlY2VudEhpdFlDb29yZGluYXRlcywgJ2luaXRpYWwgaGl0cycsIGRhdGFNb2R1bGUuYWlJbml0aWFsSGl0WENvb3JkaW5hdGVzLCBkYXRhTW9kdWxlLmFpSW5pdGlhbEhpdFlDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZW15Qm9hcmREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZXknO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIHF1ZXJ5IHNlbGVjdG9yIG1hcmtzIG1pc3NlcyBvbiB0aGUgb3RoZXIgcGxheWVycyBib2FyZCB0byB2aWV3IHdoZXJlIHRoZXkgaGF2ZSBiZWVuIG1pc3NlZCBieSB0aGUgb3Bwb3NpbmcgcGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpc31cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpc31cIl1bY2xhc3M9XCJnYW1lYm9hcmQtJHtkYXRhTW9kdWxlLm9wcG9uZW50Qm9hcmROdW1iZXJ9LWNlbGxcIl1gKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JleSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChgYXR0YWNrICR7c2VsZWN0ZWRYYXhpc30sICR7c2VsZWN0ZWRZYXhpc30gbWlzc2VzIWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQW5kUENNb2R1bGUucGxheWVyVHVybkhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgY3JlYXRlcyBuZXcgZGl2cyB3aXRoIGRhdGEteC95LWF4aXMgdmFsdWVzIGFuZCBhcHBlbmRzIHRoZW0gdG8gZWFjaCBwbGF5ZXIgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkRGl2LmRhdGFzZXQueGF4aXMgPSBgJHtqfWA7XG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkRGl2LmRhdGFzZXQueWF4aXMgPSBgJHtpfWA7XG4gICAgICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkRGl2LmNsYXNzTmFtZSA9IGBnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9LWNlbGxgO1xuXG4gICAgICAgICAgICAgICAgZW5lbXlCb2FyZERpdi5kYXRhc2V0LnhheGlzID0gYCR7an1gO1xuICAgICAgICAgICAgICAgIGVuZW15Qm9hcmREaXYuZGF0YXNldC55YXhpcyA9IGAke2l9YDtcbiAgICAgICAgICAgICAgICBlbmVteUJvYXJkRGl2LmNsYXNzTmFtZSA9IGBvcHBvbmVudC1nYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9LWNlbGxgO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBnYW1lYm9hcmQtJHtudW1iZXJPZkdhbWVib2FyZHN9YCkuYXBwZW5kQ2hpbGQocGxheWVyR2FtZWJvYXJkRGl2KTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgb3Bwb25lbnQtZ2FtZWJvYXJkLSR7bnVtYmVyT2ZHYW1lYm9hcmRzfWApLmFwcGVuZENoaWxkKGVuZW15Qm9hcmREaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vcGxhY2VzIHRoZSBwYyBwbGF5ZXJzIHNoaXBzIGFmdGVyIHBsYXllciAxJ3MgdHVybiBpcyBvdmVyXG4gICAgICAgIGlmIChkYXRhTW9kdWxlLnB2cCA9PSBmYWxzZSAmJiBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL3RoZSBiZWxvdyBsb3cgbGluZXMgc2V0IHVwIHRoZSBzaGlwUGxhY2VtZW50IHRyYWNrZXIgbm9ybWFsbHkgZG9uZSBpbiB0aGUgY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIFB2XG4gICAgICAgICAgICBwbGF5ZXJBbmRQQ01vZHVsZS5wY1BsYWNlU2hpcHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHVzZXJJbnRlcmZhY2UsIGdlbmVyYXRlQm9hcmRzIH07XG59KSgpO1xuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcbiAgICBsZXQgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IG51bGwsXG4gICAgICAgICAgICB5QXhpczogbnVsbFxuICAgICAgICB9XG4gICAgICAgIHNoaXBQbGFjZW1lbnQueEF4aXMgPSB4Q29vcmRpbmF0ZXM7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQueUF4aXMgPSB5Q29vcmRpbmF0ZXM7XG4gICAgICAgIHJldHVybiBzaGlwUGxhY2VtZW50O1xuICAgIH1cbiAgICAvL3gveWNvb3JkaW5hdGVzIGFyZSB0aGUgY2hvc2VuIGNvb3JkaW5hdGVzIGJ5IHRoZSBhdHRhY2tpbmcgcGxheWVyLCBjdXJyZW50UGxheWVyR2FtZWJvYXJkIHNob3VsZCBiZSBzZXQgcHJvcGVybHkgcHJpb3IgdG8gY2FsbGluZyB0aGlzIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuICAgICAgICBsZXQgeENvb3JkaW5hdGVzVHJ1ZSA9IG51bGw7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLmN1cnJlbnRFbmVteUdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB4Q29vcmRpbmF0ZSBoaXRzXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuY3VycmVudEVuZW15R2FtZWJvYXJkW2ldLnhBeGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuY3VycmVudEVuZW15R2FtZWJvYXJkW2ldLnhBeGlzW2pdID09IHhDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRpbmF0ZXNUcnVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vY2hlY2tzIGlmIHlDb29yZGluYXRlIGhpdHNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5jdXJyZW50RW5lbXlHYW1lYm9hcmRbaV0ueUF4aXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5jdXJyZW50RW5lbXlHYW1lYm9hcmRbaV0ueUF4aXNbal0gPT0geUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZGluYXRlc1RydWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vb25seSBydW5zIHRoaXMgYmxvY2sgaGl0IGlzIGNvbmZpcm1lZCBvciB0byByZWNvcmQgbWlzc2VkIGFuZCB1c2VkIGNvb3JkaW5hdGVzIG9uIHRoZSBsYXN0IGl0ZXJhdGlvbiBvZiB0aGUgZ2FtZWJvYXJkIHRvIHByZXZlbnQgbXVsdGlwbGUgZW50cmllcyBvZiB1c2VkL21pc3NlZC9oaXQgY29vcmRpbmF0ZXNcbiAgICAgICAgICAgIGlmIChpID09PSBkYXRhTW9kdWxlLmN1cnJlbnRFbmVteUdhbWVib2FyZC5sZW5ndGggLSAxIHx8IHhDb29yZGluYXRlc1RydWUgJiYgeUNvb3JkaW5hdGVzVHJ1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9pZiBib3RoIGNvb3JkaW5hdGVzIGhpdHMgYXJlIHRydWUsIGNhbGwgaGl0IGZ1bmN0aW9uIG9uIGNvcnJlY3Qgc2hpcCBhbmQgaW5kZXggb2YgaXRzIGhpdHMgYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoeENvb3JkaW5hdGVzVHJ1ZSAmJiB5Q29vcmRpbmF0ZXNUcnVlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5oaXRCb29sID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy9yZWNvcmRzIGFsbCBjb29yZGluYXRlcyBoaXQgb3IgbWlzcyBmb3IgUHZFIG1vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnhBeGlzLnB1c2goeENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnlBeGlzLnB1c2goeUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGB1c2VkIGNvb3JkaW5hdGVzYCwgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9yZWNvcmRzIGhpdCBjb29yZGluYXRlcyBmb3IgUHZFXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IGZhbHNlICYmIGRhdGFNb2R1bGUucHZwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmhpdENvb3JkaW5hdGVzLnhBeGlzLnB1c2goeENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUuaGl0Q29vcmRpbmF0ZXMueUF4aXMucHVzaCh5Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGhpdCBDb29yZGluYXRlc2AsIGRhdGFNb2R1bGUuaGl0Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZFtpXS5zaGlwT2JqLmhpdHMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaXNTdW5rKGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZFtpXS5zaGlwT2JqKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLndpbkNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmRbaV0uc2hpcE9iai5oaXRzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmlzU3VuayhkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmRbaV0uc2hpcE9iailcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVib2FyZE1vZHVsZS53aW5DaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL3JlY29yZHMgYWxsIGNvb3JkaW5hdGVzIGhpdCBvciBtaXNzIGZvciBQdkUgbW9kZVxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnhBeGlzLnB1c2goeENvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueUF4aXMucHVzaCh5Q29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgdXNlZCBjb29yZGluYXRlc2AsIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vcmVjb3JkcyBtaXNzZWQgY29vcmRpbmF0ZXMgZm9yIFB2RSBtb2RlIChkZXByZWNhdGVkKVxuICAgICAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlIHx8IHlDb29yZGluYXRlc1RydWUgIT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5taXNzZWRDb29yZGluYXRlcy54QXhpcy5wdXNoKHhDb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLm1pc3NlZENvb3JkaW5hdGVzLnlBeGlzLnB1c2goeUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBtaXNzZWQgY29vcmRpbmF0ZXMgJHtkYXRhTW9kdWxlLm1pc3NlZENvb3JkaW5hdGVzfWApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhDb29yZGluYXRlc1RydWUgPSBudWxsO1xuICAgICAgICAgICAgeUNvb3JkaW5hdGVzVHJ1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aW5DaGVjaygpIHtcbiAgICAgICAgbGV0IHBsYXllcjFTdW5rU2hpcHMgPSAwO1xuICAgICAgICBsZXQgcGxheWVyMlN1bmtTaGlwcyA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmRbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxU3Vua1NoaXBzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllcjJHYW1lYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjJHYW1lYm9hcmRbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIyU3Vua1NoaXBzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGxheWVyMVN1bmtTaGlwcyA9PSBkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcic7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmljdG9yeS1zY3JlZW4nKS50ZXh0Q29udGVudCA9ICdwbGF5ZXIgMiBXaW5zISEnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpY3Rvcnktc2NyZWVuJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgICB9IGVsc2UgaWYgKHBsYXllcjJTdW5rU2hpcHMgPT0gZGF0YU1vZHVsZS5wbGF5ZXIyR2FtZWJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpY3Rvcnktc2NyZWVuJykudGV4dENvbnRlbnQgPSAncGxheWVyIDEgV2lucyEhJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWN0b3J5LXNjcmVlbicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHdpbkNoZWNrIH1cbn0pKCk7XG5cbmNvbnN0IHNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2hpcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogMCxcbiAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgICAgICAgICAgaGl0czogMCxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiAwLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdHJvbEJvYXQgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGhpdHM6IDAsXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwT2JqKSB7XG4gICAgICAgIHNoaXBPYmouaGl0cysrXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXBPYmopIHtcbiAgICAgICAgaWYgKHNoaXBPYmoubGVuZ3RoID09IHNoaXBPYmouaGl0cykge1xuICAgICAgICAgICAgLy9jaGVja3MgaWYgc3VuayBkdXJpbmcgcGxheWVyIDIgdHVybiBpbiBwdnAsIGFsc28gcmVzZXRzIHRoZSBhaWhpdGJvb2wgYWZ0ZXIgYSBzaGlwIGlzIHN1bmsgc28gdGhlIGFpIGRvZXNudCBhdHRlbXB0IHRvIHJ1biBpdHMgYXR0YWNrIGFsZ29yaXRobSBhbnltb3JlXG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSBmYWxzZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vcmVzZXRzIHRoZSBhaSBoaXQgYm9vbCBhbmQgaGl0IGNvb3JkaW5hdGVzIHNvIGl0IGRvZXNudCBhdHRlbXB0IHRvIFwiZmluZFwiIHRoZSByZXN0IG9mIHRoZSBzaGlwIGNvb3JkaW5hdGVzIHRoYXQgaGF2ZSBiZWVuIHN1bmtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLmFpU3Vua0VuZW15U2hpcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwT2JqLnN1bmsgPSB0cnVlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZSwgYWxlcnQoJ3NoaXAgaXMgc3VuayEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNoaXBDb25zdHJ1Y3RvciwgaGl0LCBpc1N1bmsgfTtcbn0pKCk7XG5cblxuLy9iZWxvdyAyIGxpbmVzIGlzIGZvciB0aGUgc2FrZSBvZiB0ZXN0aW5nIG9ubHlcbmxldCB0ZXN0U2hpcCA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yLmJhdHRsZXNoaXBcbmRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0geyB0ZXN0U2hpcCB9O1xuXG5nYW1lTG9vcE1vZHVsZS51c2VySW50ZXJmYWNlKCk7XG4vL2xldCB0ZXN0RGl2ID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCd0ZXN0JywgJ3Rlc3QnKTtcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0ZXN0RGl2KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=