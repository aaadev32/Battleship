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
___CSS_LOADER_EXPORT___.push([module.id, "#content {\n    display: flex;\n}\n\n\n#test {\n    width: 50px;\n    height: 50px;\n    background-color: rosybrown;\n}\n\n#user-interface {\n    display: none;\n}\n\n.game-type-selection-buttons {\n    margin: 10px;\n}\n\n\n.gameboard-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n#gameboard-header-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n\n#gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;;AAGA;IACI,WAAW;IACX,YAAY;IACZ,2BAA2B;AAC/B;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;;AAGA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;AACxC","sourcesContent":["#content {\n    display: flex;\n}\n\n\n#test {\n    width: 50px;\n    height: 50px;\n    background-color: rosybrown;\n}\n\n#user-interface {\n    display: none;\n}\n\n.game-type-selection-buttons {\n    margin: 10px;\n}\n\n\n.gameboard-cell {\n    height: 25px;\n    width: 25px;\n    background-color: black;\n    border: 1px solid black;\n}\n\n#gameboard-header-container {\n    display: flex;\n    justify-content: space-around;\n}\n\n\n#gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}\n\n#opponent-gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 30px);\n    grid-template-rows: repeat(10, 30px);\n}"],"sourceRoot":""}]);
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


const dataModule = (() => {
    //the gameboard arrays will store the ship objects, the attacked coordinates keeps track of what plays each player has already made.
    let player1Gameboard = [];
    let player2Gameboard = [];
    let player1AttackedCoordinates = [];
    let player2AttackedCoordinates = [];
    let pvp = false;
    let player1Turn = true;
    //becomes true when the player is placing a ship
    let shipSelection = true;
    //should be equal to the selected ship object and used to create the placement shadow when placing ships by accesing the ships length property
    let selectedShip = {};
    let verticalShipRotation = false;

    return { player1Gameboard, player2Gameboard, player1AttackedCoordinates, player2AttackedCoordinates, player1Turn, pvp, shipSelection, selectedShip, verticalShipRotation };
})();
const domModule = (() => {
    const createElementIdClass = function (element, id, classN) {
        let newElement = document.createElement(element);
        newElement.id = id;
        newElement.className = classN;
        return newElement;
    }

    return { createElementIdClass };
})();

const playerAndPCModule = (() => {
    //this function deals hiding player screens between device handoffs and 
    function player() {
        //if its a pvp game this statement block should insure the screen is hidden when passing the device
        if (dataModule.player1Turn == true && dataModule.pvp == true) {
            if (dataModule.player1Turn == true) {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                //alert('player 1\'s turn! no peeking.')
                dataModule.player1Turn = false;
                return false;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                //alert('player 2\'s turn! no peeking.')
                dataModule.player1Turn = true;
                return true;
            }
        } else {
            if (dataModule.player1Turn == true) {
                //alert('player 1 take a shot');
                dataModule.player1Turn = false;
                return false;
            } else {
                //alert('pc\'s turn');
                dataModule.player1Turn = true;
                return true;
            }
        }
    }
    //deprecated
    function getRandomChar() {
        let result = '';
        let characters = 'abcdefghij';
        for (let i = 0; i < 1; i++) {
            result = characters.charAt(Math.floor(Math.random() *
                characters.length));
        }
        return result;
    }
    //create an ai function that will determine the computer players attacks
    function pcPlay() {
        //get a random integer between 0 and 10 (x axis)
        let randomXCoordinate = Math.floor(Math.random() * 11);
        //get a random integer between 0 and 10 (y axis)
        let randomYCoordinate = Math.floor(Math.random() * 11);
        //plug the random x and y coordinates IF they do not match a pair of coordinates in the dataModule usedCoordinates array
        for (i = 0; i < dataModule.usedCoordinates.length; i++) {
            for (const property in dataModule.usedCoordinates[i]) {
                //this block will recursively call the pcPlay function until the randomCoordinates consist of a pair that have not already been played
                if (dataModule.usedCoordinates.x == randomXCoordinate && dataModule.usedCoordinates.y == randomYCoordinate) {
                    pcPlay()
                }
            }
        }
        //if the random coordinate pairs do not match any in the usedCoordinates array they should be passed through the receive attack function
        gameboardModule.receiveAttack(randomXCoordinate, randomYCoordinate);
    }
    return { player, getRandomChar, pcPlay }
})();
//create the main game loop and a module for DOM interaction. 
const gameLoopModule = (() => {
    function userInterface() {
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('user-interface').style.display = 'flex';

    }

    return { userInterface };
})();
const gameboardModule = (() => {
    let placeShip = function (ship, xCoordinates, yCoordinates) {

        let shipPlacement = {
            shipObj: ship,
            xAxis: xCoordinates,
            yAxis: yCoordinates
        }
        return shipPlacement;
    }
    //playerBoard should be the players board that is being attacked, playerAttackedCoordinates should be the attacking players used coordinates, x/ycoordinates are the chosen coordinates by the attacking player
    function receiveAttack(playerBoard, playerAttackedCoordinates, xCoordinates, yCoordinates) {
        let xCoordinatesTrue = false;
        let yCoordinatesTrue = false;
        let xHitIndex = null;
        let yHitIndex = null;



        for (let i = 0; i < dataModule.playerBoard.length; i++) {
            console.log(dataModule.playerBoard[i].shipObj.hits);
            //checks if xCoordinate hits
            for (let j = 0; j < dataModule.playerBoard[i].xAxis.length; j++) {


                if (dataModule.playerBoard[i].xAxis[j] == xCoordinates) {
                    xHitIndex = j;
                    xCoordinatesTrue = true
                }
            }
            //checks if yCoordinate hits
            for (let j = 0; j < dataModule.playerBoard[i].yAxis.length; j++) {

                if (dataModule.playerBoard[i].yAxis[j] == yCoordinates) {
                    yHitIndex = j;
                    yCoordinatesTrue = true;
                }
            }
            //if both coordinates hits are true, call hit function on correct ship and index of its hits array
            if (xCoordinatesTrue && yCoordinatesTrue == true) {
                //when scanning the nAxis arrays for equality comparison to the x/yCoordinate parameters use the the nAxis truthy index value of the longest nAxis array as the index parameter in the hit() function to insure the correct hit index is marked 
                if (dataModule.playerBoard[i].xAxis.length > dataModule.playerBoard[i].yAxis.length) {
                    shipModule.hit(dataModule.playerBoard[i].shipObj.hits, xHitIndex)
                    let hitCoordinates = { x: xCoordinates, y: yCoordinates };
                    dataModule.playerAttackedCoordinates.push(hitCoordinates)
                } else {
                    shipModule.hit(dataModule.playerBoard[i].shipObj.hits, yHitIndex)
                }
                return true;//alert(`attack ${xCoordinates}, ${yCoordinates} hits!`)
            } else {
                //keep track of missed coordinates for DOM display
                let missedXYCoordinates = { x: xCoordinates, y: yCoordinates };
                dataModule.playerAttackedCoordinates.push(missedXYCoordinates);
                //note for when DOM is added, add code here that marks the correct DOM element for an attack with x/yCoordinates that miss
                return false;//alert(`attack ${xCoordinates}, ${yCoordinates} misses!`)
            }
        }
    }

    function winCheck() {
        let sunkShips = 0;
        for (let i = 0; i < dataModule.playerBoard.length; i++) {
            if (dataModule.playerBoard[i].shipObj.sunk == true) {
                sunkShips++;
            }
        }

        if (sunkShips == dataModule.playerBoard.length) {
            return true; //alert('fleet sunk!')
        } else if (sunkShips != dataModule.playerBoard.length) {
            return false //alert('get me my brown pants')
        }
    }

    //WiP
    const generateBoard = function () {
        //a gameboard generator that generates a div for each coordinate with a data-xaxis and
        //a data-yaxis value for each div

        let gameboardContainer = domModule.createElementIdClass('div', 'gameboard-container', '');
        let gameBoard = domModule.createElementIdClass('div', 'gameboard', '');
        let opponentBoard = domModule.createElementIdClass('div', 'opponent-gameboard', '');
        let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
        let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
        let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

        //this block creates gameboard title headers 
        document.getElementById('content').appendChild(gameboardHeaderContainer);
        document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
        document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
        gameboardHeader.textContent = 'Your Fleet';
        opponentGameboardHeader.textContent = 'Enemy Territory';

        document.getElementById('content').appendChild(gameboardContainer);
        document.getElementById('gameboard-container').appendChild(gameBoard);
        document.getElementById('gameboard-container').appendChild(opponentBoard);

        document.getElementById('content').style.flexDirection = 'column';
        //1 based indexing for more clarity when working with gameboard coordinates and data attributes
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {

                let newDiv = document.createElement('div')
                let newDiv2 = document.createElement('div')

                //this mouseover event listener allows the DOM to display to users whether or not a ship placement is appropriate
                newDiv.addEventListener('mouseover', () => {
                    if (dataModule.shipSelection == true) {
                        let selectedXaxis = newDiv.dataset.xaxis;
                        let selectedYaxis = newDiv.dataset.yaxis;
                        //test
                        let temp = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis}"]`)
                        temp.style.backgroundColor = 'green';
                        console.log(selectedXaxis, selectedYaxis);
                        //use a for loop to iterate a ship.length number of times from dataModule.selectedShip and adding +1 per iteration to the data attribute of the direction of the longest axis on each loop to create a selection shadow with background color
                        //the for loop should also record the x/yaxis coordinates to track the location of the ship should it be placed in a valid location
                        //the optional chaining in shadoweDiv should silence null errors when the shadow goes beyond the scope of the gameboard
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            console.log(1)
                            if (dataModule.verticalShipRotation == false) {
                                let shadowedDiv = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                console.log(shadowedDiv);
                                shadowedDiv.style.backgroundColor = 'green';
                            } else if (dataModule.verticalShipRotation == true) {
                                shadowedDiv = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                console.log(shadowedDiv);
                                shadowedDiv.style.backgroundColor = 'green';
                            }
                        }
                    }
                });
                //this click event listener should be responsible for placing ships and recording their coordinates to the respective gameboard object
                newDiv.addEventListener('click', () => {

                });
                //this click event listener should trigger the receiveAttack function with the data-x/yaxis attributes 
                newDiv2.addEventListener('click', () => {
                    gameboardModule.receiveAttack(newDiv2.dataset.xaxis, newDiv2.dataset.yaxis)
                });
                //this block creates new divs with data-x/y-axis values and appends them to each player gameboard
                newDiv.dataset.xaxis = `${j}`;
                newDiv.dataset.yaxis = `${i}`;
                newDiv.className = 'gameboard-cell';
                newDiv2.className = 'gameboard-cell';
                document.getElementById('gameboard').appendChild(newDiv);
                document.getElementById('opponent-gameboard').appendChild(newDiv2);
            }
        }
    }
    return { generateBoard, placeShip, receiveAttack, winCheck }
})();

const shipModule = (() => {

    const shipConstructor = function () {

        let carrier = {
            length: 5,
            hits: [0, 0, 0, 0, 0],
            sunk: false,
        },
            battleship = {
                length: 4,
                hits: [0, 0, 0, 0],
                sunk: false,
            },
            destroyer = {
                length: 3,
                hits: [0, 0, 0],
                sunk: false,
            },
            submarine = {
                length: 3,
                hits: [0, 0, 0],
                sunk: false,
            },
            patrolBoat = {
                length: 2,
                hits: [0, 0],
                sunk: false,
            }

        return { carrier, battleship, destroyer, submarine, patrolBoat };

    }

    function hit(shipHealthArr, index) {
        for (let i = 0; i < shipHealthArr.length; i++) {
            if (i == index) {
                shipHealthArr[i] = 1;
            }
        }
        return shipHealthArr;
    }

    function isSunk(ship) {

        let damage = 0;
        for (let i = 0; i < ship.hits.length; i++) {
            if (ship.hits[i] == 1) {
                damage++;

            }
        }
        if (damage == ship.length) {
            ship.sunk = true;
            return true;
        } else {
            ship.sunk = false;
            return false;
        }
    }

    return { shipConstructor, hit, isSunk };
})();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//below line is for the sake of testing only
let testShip = shipModule.shipConstructor.battleship
dataModule.selectedShip = { testShip };

//sets the user interface display to flex on page open
gameLoopModule.userInterface();
document.getElementById('pvp-selection').addEventListener('click', () => {
    dataModule.pvp = true;
    document.getElementById('user-interface').style.display = 'none';
    //call the generateBoard function to generate the board
    gameboardModule.generateBoard();
    document.getElementById('gameboard-container').style.display = 'flex';
    document.getElementById('gameboard-container').style.justifyContent = 'space-around';
});

document.getElementById('pve-selection').addEventListener('click', () => {
    dataModule.pvp = false;
    document.getElementById('user-interface').style.display = 'none';
    //call the generateBoard function to generate the board
    gameboardModule.generateBoard();
    document.getElementById('gameboard-container').style.display = 'flex'
    document.getElementById('gameboard-container').style.justifyContent = 'space-around';
});

//let testDiv = domModule.createElementIdClass('div','test', 'test');
//document.getElementById('content').appendChild(testDiv);

//the block below is for jest testing
/*let sunkShip = shipModule.ship().battleship.hits;
sunkShip.hits = [1, 1, 1, 1];
let gameBoardTestShip = gameboardModule.gameboard(shipModule.ship().battleship, [0, 1, 2, 3], [0])
dataModule.fleetStatus = [gameBoardTestShip];
gameboardModule.receiveAttack(1, 0);
gameboardModule.receiveAttack(3, 4);
console.log(playerAndPCModule.getRandomChar())
console.log(dataModule.usedCoordinates[0], dataModule.usedCoordinates[1])
const newBool = playerAndPCModule.player()
module.exports = { dataModule, playerAndPCModule, domModule, gameLoopModule, gameboardModule, shipModule, sunkShip, newBool }; */
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRHQUE0RyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jdGVzdCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcXG59XFxuXFxuI3VzZXItaW50ZXJmYWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdHlwZS1zZWxlY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuXFxuLmdhbWVib2FyZC1jZWxsIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuXFxuI2dhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG5cXG4jb3Bwb25lbnQtZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3Rlc3Qge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XFxufVxcblxcbiN1c2VyLWludGVyZmFjZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5nYW1lLXR5cGUtc2VsZWN0aW9uLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcblxcbi5nYW1lYm9hcmQtY2VsbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbiNnYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuI29wcG9uZW50LWdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBkYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL3RoZSBnYW1lYm9hcmQgYXJyYXlzIHdpbGwgc3RvcmUgdGhlIHNoaXAgb2JqZWN0cywgdGhlIGF0dGFja2VkIGNvb3JkaW5hdGVzIGtlZXBzIHRyYWNrIG9mIHdoYXQgcGxheXMgZWFjaCBwbGF5ZXIgaGFzIGFscmVhZHkgbWFkZS5cbiAgICBsZXQgcGxheWVyMUdhbWVib2FyZCA9IFtdO1xuICAgIGxldCBwbGF5ZXIyR2FtZWJvYXJkID0gW107XG4gICAgbGV0IHBsYXllcjFBdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG4gICAgbGV0IHBsYXllcjJBdHRhY2tlZENvb3JkaW5hdGVzID0gW107XG4gICAgbGV0IHB2cCA9IGZhbHNlO1xuICAgIGxldCBwbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgLy9iZWNvbWVzIHRydWUgd2hlbiB0aGUgcGxheWVyIGlzIHBsYWNpbmcgYSBzaGlwXG4gICAgbGV0IHNoaXBTZWxlY3Rpb24gPSB0cnVlO1xuICAgIC8vc2hvdWxkIGJlIGVxdWFsIHRvIHRoZSBzZWxlY3RlZCBzaGlwIG9iamVjdCBhbmQgdXNlZCB0byBjcmVhdGUgdGhlIHBsYWNlbWVudCBzaGFkb3cgd2hlbiBwbGFjaW5nIHNoaXBzIGJ5IGFjY2VzaW5nIHRoZSBzaGlwcyBsZW5ndGggcHJvcGVydHlcbiAgICBsZXQgc2VsZWN0ZWRTaGlwID0ge307XG4gICAgbGV0IHZlcnRpY2FsU2hpcFJvdGF0aW9uID0gZmFsc2U7XG5cbiAgICByZXR1cm4geyBwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkLCBwbGF5ZXIxQXR0YWNrZWRDb29yZGluYXRlcywgcGxheWVyMkF0dGFja2VkQ29vcmRpbmF0ZXMsIHBsYXllcjFUdXJuLCBwdnAsIHNoaXBTZWxlY3Rpb24sIHNlbGVjdGVkU2hpcCwgdmVydGljYWxTaGlwUm90YXRpb24gfTtcbn0pKCk7XG5jb25zdCBkb21Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRJZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkLCBjbGFzc04pIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVFbGVtZW50SWRDbGFzcyB9O1xufSkoKTtcblxuY29uc3QgcGxheWVyQW5kUENNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vdGhpcyBmdW5jdGlvbiBkZWFscyBoaWRpbmcgcGxheWVyIHNjcmVlbnMgYmV0d2VlbiBkZXZpY2UgaGFuZG9mZnMgYW5kIFxuICAgIGZ1bmN0aW9uIHBsYXllcigpIHtcbiAgICAgICAgLy9pZiBpdHMgYSBwdnAgZ2FtZSB0aGlzIHN0YXRlbWVudCBibG9jayBzaG91bGQgaW5zdXJlIHRoZSBzY3JlZW4gaXMgaGlkZGVuIHdoZW4gcGFzc2luZyB0aGUgZGV2aWNlXG4gICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUgJiYgZGF0YU1vZHVsZS5wdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vaW1wbGVtZW50IGEgRE9NIGhhbmRsZXIgdG8gY292ZXIgdGhlIGdhbWUgYm9hcmQgd2hlbiB0aGUgRE9NIGFjdHVhbGx5IGdldHMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwbGF5ZXIgMVxcJ3MgdHVybiEgbm8gcGVla2luZy4nKVxuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vaW1wbGVtZW50IGEgRE9NIGhhbmRsZXIgdG8gY292ZXIgdGhlIGdhbWUgYm9hcmQgd2hlbiB0aGUgRE9NIGFjdHVhbGx5IGdldHMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwbGF5ZXIgMlxcJ3MgdHVybiEgbm8gcGVla2luZy4nKVxuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ3BsYXllciAxIHRha2UgYSBzaG90Jyk7XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9hbGVydCgncGNcXCdzIHR1cm4nKTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2RlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21DaGFyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJzID0gJ2FiY2RlZmdoaWonO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICpcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vY3JlYXRlIGFuIGFpIGZ1bmN0aW9uIHRoYXQgd2lsbCBkZXRlcm1pbmUgdGhlIGNvbXB1dGVyIHBsYXllcnMgYXR0YWNrc1xuICAgIGZ1bmN0aW9uIHBjUGxheSgpIHtcbiAgICAgICAgLy9nZXQgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDEwICh4IGF4aXMpXG4gICAgICAgIGxldCByYW5kb21YQ29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgLy9nZXQgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDEwICh5IGF4aXMpXG4gICAgICAgIGxldCByYW5kb21ZQ29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgLy9wbHVnIHRoZSByYW5kb20geCBhbmQgeSBjb29yZGluYXRlcyBJRiB0aGV5IGRvIG5vdCBtYXRjaCBhIHBhaXIgb2YgY29vcmRpbmF0ZXMgaW4gdGhlIGRhdGFNb2R1bGUgdXNlZENvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1tpXSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayB3aWxsIHJlY3Vyc2l2ZWx5IGNhbGwgdGhlIHBjUGxheSBmdW5jdGlvbiB1bnRpbCB0aGUgcmFuZG9tQ29vcmRpbmF0ZXMgY29uc2lzdCBvZiBhIHBhaXIgdGhhdCBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gcGxheWVkXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnggPT0gcmFuZG9tWENvb3JkaW5hdGUgJiYgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueSA9PSByYW5kb21ZQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwY1BsYXkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZSByYW5kb20gY29vcmRpbmF0ZSBwYWlycyBkbyBub3QgbWF0Y2ggYW55IGluIHRoZSB1c2VkQ29vcmRpbmF0ZXMgYXJyYXkgdGhleSBzaG91bGQgYmUgcGFzc2VkIHRocm91Z2ggdGhlIHJlY2VpdmUgYXR0YWNrIGZ1bmN0aW9uXG4gICAgICAgIGdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKHJhbmRvbVhDb29yZGluYXRlLCByYW5kb21ZQ29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IHBsYXllciwgZ2V0UmFuZG9tQ2hhciwgcGNQbGF5IH1cbn0pKCk7XG4vL2NyZWF0ZSB0aGUgbWFpbiBnYW1lIGxvb3AgYW5kIGEgbW9kdWxlIGZvciBET00gaW50ZXJhY3Rpb24uIFxuY29uc3QgZ2FtZUxvb3BNb2R1bGUgPSAoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2UoKSB7XG4gICAgICAgIC8vVGhlIGdhbWUgbG9vcCBzaG91bGQgc2V0IHVwIGEgbmV3IGdhbWUgYnkgY3JlYXRpbmcgUGxheWVycyBhbmQgR2FtZWJvYXJkc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1pbnRlcmZhY2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlckludGVyZmFjZSB9O1xufSkoKTtcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0ge1xuICAgICAgICAgICAgc2hpcE9iajogc2hpcCxcbiAgICAgICAgICAgIHhBeGlzOiB4Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgICB5QXhpczogeUNvb3JkaW5hdGVzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBQbGFjZW1lbnQ7XG4gICAgfVxuICAgIC8vcGxheWVyQm9hcmQgc2hvdWxkIGJlIHRoZSBwbGF5ZXJzIGJvYXJkIHRoYXQgaXMgYmVpbmcgYXR0YWNrZWQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMgc2hvdWxkIGJlIHRoZSBhdHRhY2tpbmcgcGxheWVycyB1c2VkIGNvb3JkaW5hdGVzLCB4L3ljb29yZGluYXRlcyBhcmUgdGhlIGNob3NlbiBjb29yZGluYXRlcyBieSB0aGUgYXR0YWNraW5nIHBsYXllclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socGxheWVyQm9hcmQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB4Q29vcmRpbmF0ZSBoaXRzXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXMubGVuZ3RoOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXNbal0gPT0geENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlc1RydWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVja3MgaWYgeUNvb3JkaW5hdGUgaGl0c1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnlBeGlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS55QXhpc1tqXSA9PSB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeUhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkaW5hdGVzVHJ1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBib3RoIGNvb3JkaW5hdGVzIGhpdHMgYXJlIHRydWUsIGNhbGwgaGl0IGZ1bmN0aW9uIG9uIGNvcnJlY3Qgc2hpcCBhbmQgaW5kZXggb2YgaXRzIGhpdHMgYXJyYXlcbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlICYmIHlDb29yZGluYXRlc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vd2hlbiBzY2FubmluZyB0aGUgbkF4aXMgYXJyYXlzIGZvciBlcXVhbGl0eSBjb21wYXJpc29uIHRvIHRoZSB4L3lDb29yZGluYXRlIHBhcmFtZXRlcnMgdXNlIHRoZSB0aGUgbkF4aXMgdHJ1dGh5IGluZGV4IHZhbHVlIG9mIHRoZSBsb25nZXN0IG5BeGlzIGFycmF5IGFzIHRoZSBpbmRleCBwYXJhbWV0ZXIgaW4gdGhlIGhpdCgpIGZ1bmN0aW9uIHRvIGluc3VyZSB0aGUgY29ycmVjdCBoaXQgaW5kZXggaXMgbWFya2VkIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnhBeGlzLmxlbmd0aCA+IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueUF4aXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5oaXRzLCB4SGl0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBoaXRDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXJBdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS5zaGlwT2JqLmhpdHMsIHlIaXRJbmRleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IGhpdHMhYClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9rZWVwIHRyYWNrIG9mIG1pc3NlZCBjb29yZGluYXRlcyBmb3IgRE9NIGRpc3BsYXlcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2VkWFlDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaChtaXNzZWRYWUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAvL25vdGUgZm9yIHdoZW4gRE9NIGlzIGFkZGVkLCBhZGQgY29kZSBoZXJlIHRoYXQgbWFya3MgdGhlIGNvcnJlY3QgRE9NIGVsZW1lbnQgZm9yIGFuIGF0dGFjayB3aXRoIHgveUNvb3JkaW5hdGVzIHRoYXQgbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gbWlzc2VzIWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aW5DaGVjaygpIHtcbiAgICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvL2FsZXJ0KCdmbGVldCBzdW5rIScpXG4gICAgICAgIH0gZWxzZSBpZiAoc3Vua1NoaXBzICE9IGRhdGFNb2R1bGUucGxheWVyQm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy9hbGVydCgnZ2V0IG1lIG15IGJyb3duIHBhbnRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vV2lQXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9hIGdhbWVib2FyZCBnZW5lcmF0b3IgdGhhdCBnZW5lcmF0ZXMgYSBkaXYgZm9yIGVhY2ggY29vcmRpbmF0ZSB3aXRoIGEgZGF0YS14YXhpcyBhbmRcbiAgICAgICAgLy9hIGRhdGEteWF4aXMgdmFsdWUgZm9yIGVhY2ggZGl2XG5cbiAgICAgICAgbGV0IGdhbWVib2FyZENvbnRhaW5lciA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgJ2dhbWVib2FyZC1jb250YWluZXInLCAnJyk7XG4gICAgICAgIGxldCBnYW1lQm9hcmQgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdnYW1lYm9hcmQnLCAnJyk7XG4gICAgICAgIGxldCBvcHBvbmVudEJvYXJkID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnb3Bwb25lbnQtZ2FtZWJvYXJkJywgJycpO1xuICAgICAgICBsZXQgZ2FtZWJvYXJkSGVhZGVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdwJywgJ2dhbWVib2FyZC1oZWFkZXInLCAnJyk7XG4gICAgICAgIGxldCBvcHBvbmVudEdhbWVib2FyZEhlYWRlciA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygncCcsICdvcHBvbmVudC1nYW1lYm9hcmQtaGVhZGVyJywgJycpO1xuICAgICAgICBsZXQgZ2FtZWJvYXJkSGVhZGVyQ29udGFpbmVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInLCAnJyk7XG5cbiAgICAgICAgLy90aGlzIGJsb2NrIGNyZWF0ZXMgZ2FtZWJvYXJkIHRpdGxlIGhlYWRlcnMgXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkSGVhZGVyQ29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkSGVhZGVyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyJykuYXBwZW5kQ2hpbGQob3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIpO1xuICAgICAgICBnYW1lYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnWW91ciBGbGVldCc7XG4gICAgICAgIG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gJ0VuZW15IFRlcnJpdG9yeSc7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGdhbWVCb2FyZCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQob3Bwb25lbnRCb2FyZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gICAgICAgIC8vMSBiYXNlZCBpbmRleGluZyBmb3IgbW9yZSBjbGFyaXR5IHdoZW4gd29ya2luZyB3aXRoIGdhbWVib2FyZCBjb29yZGluYXRlcyBhbmQgZGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgICAgICAgICAvL3RoaXMgbW91c2VvdmVyIGV2ZW50IGxpc3RlbmVyIGFsbG93cyB0aGUgRE9NIHRvIGRpc3BsYXkgdG8gdXNlcnMgd2hldGhlciBvciBub3QgYSBzaGlwIHBsYWNlbWVudCBpcyBhcHByb3ByaWF0ZVxuICAgICAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBuZXdEaXYuZGF0YXNldC54YXhpcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFlheGlzID0gbmV3RGl2LmRhdGFzZXQueWF4aXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Rlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkWGF4aXMsIHNlbGVjdGVkWWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy91c2UgYSBmb3IgbG9vcCB0byBpdGVyYXRlIGEgc2hpcC5sZW5ndGggbnVtYmVyIG9mIHRpbWVzIGZyb20gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgYW5kIGFkZGluZyArMSBwZXIgaXRlcmF0aW9uIHRvIHRoZSBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBsb25nZXN0IGF4aXMgb24gZWFjaCBsb29wIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBzaGFkb3cgd2l0aCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBmb3IgbG9vcCBzaG91bGQgYWxzbyByZWNvcmQgdGhlIHgveWF4aXMgY29vcmRpbmF0ZXMgdG8gdHJhY2sgdGhlIGxvY2F0aW9uIG9mIHRoZSBzaGlwIHNob3VsZCBpdCBiZSBwbGFjZWQgaW4gYSB2YWxpZCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgb3B0aW9uYWwgY2hhaW5pbmcgaW4gc2hhZG93ZURpdiBzaG91bGQgc2lsZW5jZSBudWxsIGVycm9ycyB3aGVuIHRoZSBzaGFkb3cgZ29lcyBiZXlvbmQgdGhlIHNjb3BlIG9mIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGFkb3dlZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoYWRvd2VkRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dlZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzICs9IDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNoYWRvd2VkRGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93ZWREaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMgY2xpY2sgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBwbGFjaW5nIHNoaXBzIGFuZCByZWNvcmRpbmcgdGhlaXIgY29vcmRpbmF0ZXMgdG8gdGhlIHJlc3BlY3RpdmUgZ2FtZWJvYXJkIG9iamVjdFxuICAgICAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBjbGljayBldmVudCBsaXN0ZW5lciBzaG91bGQgdHJpZ2dlciB0aGUgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB3aXRoIHRoZSBkYXRhLXgveWF4aXMgYXR0cmlidXRlcyBcbiAgICAgICAgICAgICAgICBuZXdEaXYyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayhuZXdEaXYyLmRhdGFzZXQueGF4aXMsIG5ld0RpdjIuZGF0YXNldC55YXhpcylcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgY3JlYXRlcyBuZXcgZGl2cyB3aXRoIGRhdGEteC95LWF4aXMgdmFsdWVzIGFuZCBhcHBlbmRzIHRoZW0gdG8gZWFjaCBwbGF5ZXIgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgbmV3RGl2LmRhdGFzZXQueGF4aXMgPSBgJHtqfWA7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmRhdGFzZXQueWF4aXMgPSBgJHtpfWA7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQtY2VsbCc7XG4gICAgICAgICAgICAgICAgbmV3RGl2Mi5jbGFzc05hbWUgPSAnZ2FtZWJvYXJkLWNlbGwnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHBvbmVudC1nYW1lYm9hcmQnKS5hcHBlbmRDaGlsZChuZXdEaXYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBnZW5lcmF0ZUJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHdpbkNoZWNrIH1cbn0pKCk7XG5cbmNvbnN0IHNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2hpcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBiYXR0bGVzaGlwID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVyID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0cm9sQm9hdCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHNoaXBIZWFsdGhBcnJbaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwSGVhbHRoQXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayhzaGlwKSB7XG5cbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICBkYW1hZ2UrKztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYW1hZ2UgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hpcENvbnN0cnVjdG9yLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuLy9iZWxvdyBsaW5lIGlzIGZvciB0aGUgc2FrZSBvZiB0ZXN0aW5nIG9ubHlcbmxldCB0ZXN0U2hpcCA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yLmJhdHRsZXNoaXBcbmRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0geyB0ZXN0U2hpcCB9O1xuXG4vL3NldHMgdGhlIHVzZXIgaW50ZXJmYWNlIGRpc3BsYXkgdG8gZmxleCBvbiBwYWdlIG9wZW5cbmdhbWVMb29wTW9kdWxlLnVzZXJJbnRlcmZhY2UoKTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGF0YU1vZHVsZS5wdnAgPSB0cnVlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWludGVyZmFjZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9jYWxsIHRoZSBnZW5lcmF0ZUJvYXJkIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBib2FyZFxuICAgIGdhbWVib2FyZE1vZHVsZS5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHZlLXNlbGVjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRhdGFNb2R1bGUucHZwID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL2NhbGwgdGhlIGdlbmVyYXRlQm9hcmQgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGJvYXJkXG4gICAgZ2FtZWJvYXJkTW9kdWxlLmdlbmVyYXRlQm9hcmQoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG59KTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5cbi8vdGhlIGJsb2NrIGJlbG93IGlzIGZvciBqZXN0IHRlc3Rpbmdcbi8qbGV0IHN1bmtTaGlwID0gc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcC5oaXRzO1xuc3Vua1NoaXAuaGl0cyA9IFsxLCAxLCAxLCAxXTtcbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCBbMF0pXG5kYXRhTW9kdWxlLmZsZWV0U3RhdHVzID0gW2dhbWVCb2FyZFRlc3RTaGlwXTtcbmdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKDEsIDApO1xuZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMywgNCk7XG5jb25zb2xlLmxvZyhwbGF5ZXJBbmRQQ01vZHVsZS5nZXRSYW5kb21DaGFyKCkpXG5jb25zb2xlLmxvZyhkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1swXSwgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXNbMV0pXG5jb25zdCBuZXdCb29sID0gcGxheWVyQW5kUENNb2R1bGUucGxheWVyKClcbm1vZHVsZS5leHBvcnRzID0geyBkYXRhTW9kdWxlLCBwbGF5ZXJBbmRQQ01vZHVsZSwgZG9tTW9kdWxlLCBnYW1lTG9vcE1vZHVsZSwgZ2FtZWJvYXJkTW9kdWxlLCBzaGlwTW9kdWxlLCBzdW5rU2hpcCwgbmV3Qm9vbCB9OyAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==