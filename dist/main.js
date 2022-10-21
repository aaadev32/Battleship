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
    //this object keeps track of the ships that have been placed in playerShipPlacement()
    let shipPlacementTracker = {
        carrier: false,
        battleship: false,
        destroyer: false,
        submarine: false,
        patrolBoat: false
    }

    return { player1Gameboard, player2Gameboard, player1AttackedCoordinates, player2AttackedCoordinates, player1Turn, pvp, shipSelection, selectedShip, verticalShipRotation, shipPlacementTracker };
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
    //displays opening UI and choices for starting the game
    function userInterface() {
        document.getElementById('user-interface').style.display = 'flex';
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('pvp-selection').addEventListener('click', () => {
            dataModule.pvp = true;
            document.getElementById('user-interface').style.display = 'none';
            //call the generateBoard function to generate the board
            gameboardModule.generateBoard();
            document.getElementById('gameboard-container').style.display = 'flex';
            document.getElementById('gameboard-container').style.justifyContent = 'space-around';
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true
            playerShipPlacement()
        });

        document.getElementById('pve-selection').addEventListener('click', () => {
            dataModule.pvp = false;
            document.getElementById('user-interface').style.display = 'none';
            //call the generateBoard function to generate the board
            gameboardModule.generateBoard();
            document.getElementById('gameboard-container').style.display = 'flex';
            document.getElementById('gameboard-container').style.justifyContent = 'space-around';
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true
            playerShipPlacement()
        });
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

    //a gameboard generator that generates a div for each coordinate with a data-xaxis and a data-yaxis value for each div
    //event listeners for the players gameboard should place objects, listeners for the players targeting board should handle attack coordinates and storage info
    const generateBoard = function () {

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
                newDiv.addEventListener('mouseenter', () => {
                    if (dataModule.shipSelection == true) {
                        let selectedXaxis = parseInt(newDiv.dataset.xaxis);
                        let selectedYaxis = parseInt(newDiv.dataset.yaxis);
                        let firstIteration = true;
                        //use a for loop to iterate a ship.length number of times from dataModule.selectedShip and adding +1 per iteration to the data attribute of the direction of the longest axis on each loop to create a selection shadow with background color
                        //the for loop should also record the x/yaxis coordinates to track the location of the ship should it be placed in a valid location
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from starting +1 from the mouseover point
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    return 1;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            } else if (dataModule.verticalShipRotation == true) {
                                shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    return 1;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            }
                        }
                    }
                });
                //this event listener reverses the coloring that the mouseover event listener applies when the selected ship is not placed and the mouse is moved
                newDiv.addEventListener('mouseleave', () => {
                    let selectedXaxis = parseInt(newDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(newDiv.dataset.yaxis);
                    let firstIteration = true;

                    if (dataModule.shipSelection == true) {
                        //adding + 1 to the selectedShip.length insures that there wont be a left over blue placement div as the blue shipShadow shrinks by 1 when the user places a ship
                        for (let i = 0; i < dataModule.selectedShip.length + 1; i++) {
                            //push the divs current colors to previousColors array in case the user decides to place a ship, the divs should keep the green placement color as opposed to turning back to the board color black
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    return 1;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            } else if (dataModule.verticalShipRotation == true) {
                                shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    return 1;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            }
                        }
                    }
                });

                //this click event listener should be responsible for placing ships in the DOM and recording their coordinates to the respective gameboard object
                newDiv.addEventListener('click', () => {
                    let selectedXaxis = parseInt(newDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(newDiv.dataset.yaxis);
                    let shipObj = shipModule.shipConstructor();
                    let firstIteration = true
                    if (dataModule.shipSelection == true) {
                        //checks for invalid placements beyond the parameters of the board axis,the axis + ship length is compared to 11 instead of 10 because the axis are 1 based indexing so you must account for 10 when starting from 1 and comparing the ship length from current selected axis
                        if (selectedXaxis + dataModule.selectedShip.length > 11 || selectedYaxis + dataModule.selectedShip.length > 11) {
                            console.log(selectedXaxis, dataModule.selectedShip.length)
                            return alert('invalid placement!');
                        }
                        //this block marks the divs where the ship has been placed
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            //keeps the shipPlacement from starting +1 from the mouseover point
                            if (firstIteration == true) {
                                selectedXaxis -= 1;
                                firstIteration = false;
                            }
                            if (dataModule.verticalShipRotation == false) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);

                                shipPlacement.style.backgroundColor = 'green';
                            } else if (dataModule.verticalShipRotation == true) {
                                shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            }
                        }
                        //the remaining blocks handle ship placement logic
                        //resets the shipPlacementTracker property values to false so it can be used for the next player ship placements
                        if (dataModule.shipPlacementTracker.patrolBoat == true) {
                            for (const property in dataModule.shipPlacementTracker) {
                                dataModule.shipPlacementTracker[property] = false;
                            }
                        }
                        //below if else statements handle pushing the placed ship to the proper players gameboard array
                        let newShipPlacement = gameboardModule.placeShip(dataModule.selectedShip, selectedXaxis, selectedYaxis);
                        console.log(newShipPlacement)
                        if (dataModule.player1Turn == true) {
                            dataModule.player1Gameboard.push(newShipPlacement);
                            console.log(`player1Gameboard${dataModule.player1Gameboard}`);
                        } else {
                            player2Gameboard.push(newShipPlacement);
                            console.log(`player2Gameboard${dataModule.player1Gameboard}`);
                        }
                        console.log(dataModule.player1Gameboard)
                        //a false property in the shipPlacementTracker means the ship hasnt been placed and will become the dataModule.selectedShip for placement on playerNGameboard
                        for (const property in dataModule.shipPlacementTracker) {
                            if (dataModule.shipPlacementTracker[property] == false) {
                                dataModule.shipPlacementTracker[property] = true;
                                //the shipObj contains all ships and will be access through selected ship to be placed on the playerNGameboard arr
                                return dataModule.selectedShip = shipObj[property];
                            }
                        }
                    } else {
                        alert('placement phase over')
                    }
                });
                //this click event listener should trigger the receiveAttack function with the data-x/yaxis attributes 
                newDiv2.addEventListener('click', () => {
                    let selectedXaxis = parseInt(newDiv2.dataset.xaxis);
                    let selectedYaxis = parseInt(newDiv2.dataset.yaxis);
                    //keeps from attacking opponent board during ship placement phase
                    if (dataModule.shipSelection == false) {
                        gameboardModule.receiveAttack(newDiv2.dataset.xaxis, newDiv2.dataset.yaxis)
                    }
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

//below 2 lines is for the sake of testing only
let testShip = shipModule.shipConstructor.battleship
dataModule.selectedShip = { testShip };

gameLoopModule.userInterface();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3Rlc3Qge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XFxufVxcblxcbiN1c2VyLWludGVyZmFjZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5nYW1lLXR5cGUtc2VsZWN0aW9uLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcblxcbi5nYW1lYm9hcmQtY2VsbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbiNnYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuI29wcG9uZW50LWdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiN0ZXN0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xcbn1cXG5cXG4jdXNlci1pbnRlcmZhY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FtZS10eXBlLXNlbGVjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5cXG4uZ2FtZWJvYXJkLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5cXG4jZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbiNvcHBvbmVudC1nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy90aGUgZ2FtZWJvYXJkIGFycmF5cyB3aWxsIHN0b3JlIHRoZSBzaGlwIG9iamVjdHMsIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlcyBrZWVwcyB0cmFjayBvZiB3aGF0IHBsYXlzIGVhY2ggcGxheWVyIGhhcyBhbHJlYWR5IG1hZGUuXG4gICAgbGV0IHBsYXllcjFHYW1lYm9hcmQgPSBbXTtcbiAgICBsZXQgcGxheWVyMkdhbWVib2FyZCA9IFtdO1xuICAgIGxldCBwbGF5ZXIxQXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBwbGF5ZXIyQXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBwdnAgPSBmYWxzZTtcbiAgICBsZXQgcGxheWVyMVR1cm4gPSB0cnVlO1xuICAgIC8vYmVjb21lcyB0cnVlIHdoZW4gdGhlIHBsYXllciBpcyBwbGFjaW5nIGEgc2hpcFxuICAgIGxldCBzaGlwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAvL3Nob3VsZCBiZSBlcXVhbCB0byB0aGUgc2VsZWN0ZWQgc2hpcCBvYmplY3QgYW5kIHVzZWQgdG8gY3JlYXRlIHRoZSBwbGFjZW1lbnQgc2hhZG93IHdoZW4gcGxhY2luZyBzaGlwcyBieSBhY2Nlc2luZyB0aGUgc2hpcHMgbGVuZ3RoIHByb3BlcnR5XG4gICAgbGV0IHNlbGVjdGVkU2hpcCA9IHt9O1xuICAgIGxldCB2ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IGZhbHNlO1xuICAgIC8vdGhpcyBvYmplY3Qga2VlcHMgdHJhY2sgb2YgdGhlIHNoaXBzIHRoYXQgaGF2ZSBiZWVuIHBsYWNlZCBpbiBwbGF5ZXJTaGlwUGxhY2VtZW50KClcbiAgICBsZXQgc2hpcFBsYWNlbWVudFRyYWNrZXIgPSB7XG4gICAgICAgIGNhcnJpZXI6IGZhbHNlLFxuICAgICAgICBiYXR0bGVzaGlwOiBmYWxzZSxcbiAgICAgICAgZGVzdHJveWVyOiBmYWxzZSxcbiAgICAgICAgc3VibWFyaW5lOiBmYWxzZSxcbiAgICAgICAgcGF0cm9sQm9hdDogZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkLCBwbGF5ZXIxQXR0YWNrZWRDb29yZGluYXRlcywgcGxheWVyMkF0dGFja2VkQ29vcmRpbmF0ZXMsIHBsYXllcjFUdXJuLCBwdnAsIHNoaXBTZWxlY3Rpb24sIHNlbGVjdGVkU2hpcCwgdmVydGljYWxTaGlwUm90YXRpb24sIHNoaXBQbGFjZW1lbnRUcmFja2VyIH07XG59KSgpO1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbmNvbnN0IHBsYXllckFuZFBDTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL3RoaXMgZnVuY3Rpb24gZGVhbHMgaGlkaW5nIHBsYXllciBzY3JlZW5zIGJldHdlZW4gZGV2aWNlIGhhbmRvZmZzIGFuZCBcbiAgICBmdW5jdGlvbiBwbGF5ZXIoKSB7XG4gICAgICAgIC8vaWYgaXRzIGEgcHZwIGdhbWUgdGhpcyBzdGF0ZW1lbnQgYmxvY2sgc2hvdWxkIGluc3VyZSB0aGUgc2NyZWVuIGlzIGhpZGRlbiB3aGVuIHBhc3NpbmcgdGhlIGRldmljZVxuICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlICYmIGRhdGFNb2R1bGUucHZwID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvL2ltcGxlbWVudCBhIERPTSBoYW5kbGVyIHRvIGNvdmVyIHRoZSBnYW1lIGJvYXJkIHdoZW4gdGhlIERPTSBhY3R1YWxseSBnZXRzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgICAgLy9hbGVydCgncGxheWVyIDFcXCdzIHR1cm4hIG5vIHBlZWtpbmcuJylcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2ltcGxlbWVudCBhIERPTSBoYW5kbGVyIHRvIGNvdmVyIHRoZSBnYW1lIGJvYXJkIHdoZW4gdGhlIERPTSBhY3R1YWxseSBnZXRzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgICAgLy9hbGVydCgncGxheWVyIDJcXCdzIHR1cm4hIG5vIHBlZWtpbmcuJylcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwbGF5ZXIgMSB0YWtlIGEgc2hvdCcpO1xuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ3BjXFwncyB0dXJuJyk7XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9kZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcigpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgICAgICBsZXQgY2hhcmFjdGVycyA9ICdhYmNkZWZnaGlqJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVycy5sZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvL2NyZWF0ZSBhbiBhaSBmdW5jdGlvbiB0aGF0IHdpbGwgZGV0ZXJtaW5lIHRoZSBjb21wdXRlciBwbGF5ZXJzIGF0dGFja3NcbiAgICBmdW5jdGlvbiBwY1BsYXkoKSB7XG4gICAgICAgIC8vZ2V0IGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAxMCAoeCBheGlzKVxuICAgICAgICBsZXQgcmFuZG9tWENvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgICAgIC8vZ2V0IGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiAwIGFuZCAxMCAoeSBheGlzKVxuICAgICAgICBsZXQgcmFuZG9tWUNvb3JkaW5hdGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMSk7XG4gICAgICAgIC8vcGx1ZyB0aGUgcmFuZG9tIHggYW5kIHkgY29vcmRpbmF0ZXMgSUYgdGhleSBkbyBub3QgbWF0Y2ggYSBwYWlyIG9mIGNvb3JkaW5hdGVzIGluIHRoZSBkYXRhTW9kdWxlIHVzZWRDb29yZGluYXRlcyBhcnJheVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgd2lsbCByZWN1cnNpdmVseSBjYWxsIHRoZSBwY1BsYXkgZnVuY3Rpb24gdW50aWwgdGhlIHJhbmRvbUNvb3JkaW5hdGVzIGNvbnNpc3Qgb2YgYSBwYWlyIHRoYXQgaGF2ZSBub3QgYWxyZWFkeSBiZWVuIHBsYXllZFxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlcy54ID09IHJhbmRvbVhDb29yZGluYXRlICYmIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnkgPT0gcmFuZG9tWUNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGNQbGF5KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB0aGUgcmFuZG9tIGNvb3JkaW5hdGUgcGFpcnMgZG8gbm90IG1hdGNoIGFueSBpbiB0aGUgdXNlZENvb3JkaW5hdGVzIGFycmF5IHRoZXkgc2hvdWxkIGJlIHBhc3NlZCB0aHJvdWdoIHRoZSByZWNlaXZlIGF0dGFjayBmdW5jdGlvblxuICAgICAgICBnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayhyYW5kb21YQ29vcmRpbmF0ZSwgcmFuZG9tWUNvb3JkaW5hdGUpO1xuICAgIH1cbiAgICByZXR1cm4geyBwbGF5ZXIsIGdldFJhbmRvbUNoYXIsIHBjUGxheSB9XG59KSgpO1xuLy9jcmVhdGUgdGhlIG1haW4gZ2FtZSBsb29wIGFuZCBhIG1vZHVsZSBmb3IgRE9NIGludGVyYWN0aW9uLiBcbmNvbnN0IGdhbWVMb29wTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2Rpc3BsYXlzIG9wZW5pbmcgVUkgYW5kIGNob2ljZXMgZm9yIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgZnVuY3Rpb24gdXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgLy9UaGUgZ2FtZSBsb29wIHNob3VsZCBzZXQgdXAgYSBuZXcgZ2FtZSBieSBjcmVhdGluZyBQbGF5ZXJzIGFuZCBHYW1lYm9hcmRzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnB2cCA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1pbnRlcmZhY2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgLy9jYWxsIHRoZSBnZW5lcmF0ZUJvYXJkIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBib2FyZFxuICAgICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLmdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICAgICAgICAgIC8vbWFudWFsbHkgY2FsbGluZyB0aGUgY2FycmllciBvYmplY3QgdG8gYmUgZGVmYXVsdCBzZWxlY3Rpb24gdXBvbiBjaG9vc2luZyB0aGUgZ2FtZSB0eXBlIGFzIHdlbGwgYXMgbWFudWFsbHkgbWFraW5nIGl0cyBzaGlwUGxhY2VtZW50VHJhY2tlciB0cnVlIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBmb3IgaW4gbG9vcFxuICAgICAgICAgICAgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwTW9kdWxlLnNoaXBDb25zdHJ1Y3RvcigpLmNhcnJpZXI7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLmNhcnJpZXIgPSB0cnVlXG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGxhY2VtZW50KClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3B2ZS1zZWxlY3Rpb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUucHZwID0gZmFsc2U7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1pbnRlcmZhY2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgLy9jYWxsIHRoZSBnZW5lcmF0ZUJvYXJkIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBib2FyZFxuICAgICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLmdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICAgICAgICAgIC8vbWFudWFsbHkgY2FsbGluZyB0aGUgY2FycmllciBvYmplY3QgdG8gYmUgZGVmYXVsdCBzZWxlY3Rpb24gdXBvbiBjaG9vc2luZyB0aGUgZ2FtZSB0eXBlIGFzIHdlbGwgYXMgbWFudWFsbHkgbWFraW5nIGl0cyBzaGlwUGxhY2VtZW50VHJhY2tlciB0cnVlIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBmb3IgaW4gbG9vcFxuICAgICAgICAgICAgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwTW9kdWxlLnNoaXBDb25zdHJ1Y3RvcigpLmNhcnJpZXI7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLmNhcnJpZXIgPSB0cnVlXG4gICAgICAgICAgICBwbGF5ZXJTaGlwUGxhY2VtZW50KClcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlckludGVyZmFjZSB9O1xufSkoKTtcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0ge1xuICAgICAgICAgICAgc2hpcE9iajogc2hpcCxcbiAgICAgICAgICAgIHhBeGlzOiB4Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgICB5QXhpczogeUNvb3JkaW5hdGVzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBQbGFjZW1lbnQ7XG4gICAgfVxuICAgIC8vcGxheWVyQm9hcmQgc2hvdWxkIGJlIHRoZSBwbGF5ZXJzIGJvYXJkIHRoYXQgaXMgYmVpbmcgYXR0YWNrZWQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMgc2hvdWxkIGJlIHRoZSBhdHRhY2tpbmcgcGxheWVycyB1c2VkIGNvb3JkaW5hdGVzLCB4L3ljb29yZGluYXRlcyBhcmUgdGhlIGNob3NlbiBjb29yZGluYXRlcyBieSB0aGUgYXR0YWNraW5nIHBsYXllclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socGxheWVyQm9hcmQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB4Q29vcmRpbmF0ZSBoaXRzXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXMubGVuZ3RoOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXNbal0gPT0geENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlc1RydWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVja3MgaWYgeUNvb3JkaW5hdGUgaGl0c1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnlBeGlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS55QXhpc1tqXSA9PSB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeUhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkaW5hdGVzVHJ1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBib3RoIGNvb3JkaW5hdGVzIGhpdHMgYXJlIHRydWUsIGNhbGwgaGl0IGZ1bmN0aW9uIG9uIGNvcnJlY3Qgc2hpcCBhbmQgaW5kZXggb2YgaXRzIGhpdHMgYXJyYXlcbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlICYmIHlDb29yZGluYXRlc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vd2hlbiBzY2FubmluZyB0aGUgbkF4aXMgYXJyYXlzIGZvciBlcXVhbGl0eSBjb21wYXJpc29uIHRvIHRoZSB4L3lDb29yZGluYXRlIHBhcmFtZXRlcnMgdXNlIHRoZSB0aGUgbkF4aXMgdHJ1dGh5IGluZGV4IHZhbHVlIG9mIHRoZSBsb25nZXN0IG5BeGlzIGFycmF5IGFzIHRoZSBpbmRleCBwYXJhbWV0ZXIgaW4gdGhlIGhpdCgpIGZ1bmN0aW9uIHRvIGluc3VyZSB0aGUgY29ycmVjdCBoaXQgaW5kZXggaXMgbWFya2VkIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnhBeGlzLmxlbmd0aCA+IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueUF4aXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5oaXRzLCB4SGl0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBoaXRDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXJBdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS5zaGlwT2JqLmhpdHMsIHlIaXRJbmRleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IGhpdHMhYClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9rZWVwIHRyYWNrIG9mIG1pc3NlZCBjb29yZGluYXRlcyBmb3IgRE9NIGRpc3BsYXlcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2VkWFlDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaChtaXNzZWRYWUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAvL25vdGUgZm9yIHdoZW4gRE9NIGlzIGFkZGVkLCBhZGQgY29kZSBoZXJlIHRoYXQgbWFya3MgdGhlIGNvcnJlY3QgRE9NIGVsZW1lbnQgZm9yIGFuIGF0dGFjayB3aXRoIHgveUNvb3JkaW5hdGVzIHRoYXQgbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gbWlzc2VzIWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aW5DaGVjaygpIHtcbiAgICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvL2FsZXJ0KCdmbGVldCBzdW5rIScpXG4gICAgICAgIH0gZWxzZSBpZiAoc3Vua1NoaXBzICE9IGRhdGFNb2R1bGUucGxheWVyQm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy9hbGVydCgnZ2V0IG1lIG15IGJyb3duIHBhbnRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vYSBnYW1lYm9hcmQgZ2VuZXJhdG9yIHRoYXQgZ2VuZXJhdGVzIGEgZGl2IGZvciBlYWNoIGNvb3JkaW5hdGUgd2l0aCBhIGRhdGEteGF4aXMgYW5kIGEgZGF0YS15YXhpcyB2YWx1ZSBmb3IgZWFjaCBkaXZcbiAgICAvL2V2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHBsYXllcnMgZ2FtZWJvYXJkIHNob3VsZCBwbGFjZSBvYmplY3RzLCBsaXN0ZW5lcnMgZm9yIHRoZSBwbGF5ZXJzIHRhcmdldGluZyBib2FyZCBzaG91bGQgaGFuZGxlIGF0dGFjayBjb29yZGluYXRlcyBhbmQgc3RvcmFnZSBpbmZvXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnZ2FtZWJvYXJkLWNvbnRhaW5lcicsICcnKTtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgJ2dhbWVib2FyZCcsICcnKTtcbiAgICAgICAgbGV0IG9wcG9uZW50Qm9hcmQgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdvcHBvbmVudC1nYW1lYm9hcmQnLCAnJyk7XG4gICAgICAgIGxldCBnYW1lYm9hcmRIZWFkZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ3AnLCAnZ2FtZWJvYXJkLWhlYWRlcicsICcnKTtcbiAgICAgICAgbGV0IG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdwJywgJ29wcG9uZW50LWdhbWVib2FyZC1oZWFkZXInLCAnJyk7XG4gICAgICAgIGxldCBnYW1lYm9hcmRIZWFkZXJDb250YWluZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgICAgICAvL3RoaXMgYmxvY2sgY3JlYXRlcyBnYW1lYm9hcmQgdGl0bGUgaGVhZGVycyBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChvcHBvbmVudEdhbWVib2FyZEhlYWRlcik7XG4gICAgICAgIGdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIEZsZWV0JztcbiAgICAgICAgb3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnRW5lbXkgVGVycml0b3J5JztcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5hcHBlbmRDaGlsZChvcHBvbmVudEJvYXJkKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgLy8xIGJhc2VkIGluZGV4aW5nIGZvciBtb3JlIGNsYXJpdHkgd2hlbiB3b3JraW5nIHdpdGggZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIGFuZCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGxldCBuZXdEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAgICAgICAgIC8vdGhpcyBtb3VzZW92ZXIgZXZlbnQgbGlzdGVuZXIgYWxsb3dzIHRoZSBET00gdG8gZGlzcGxheSB0byB1c2VycyB3aGV0aGVyIG9yIG5vdCBhIHNoaXAgcGxhY2VtZW50IGlzIGFwcHJvcHJpYXRlXG4gICAgICAgICAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRZYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZXJhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VzZSBhIGZvciBsb29wIHRvIGl0ZXJhdGUgYSBzaGlwLmxlbmd0aCBudW1iZXIgb2YgdGltZXMgZnJvbSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBhbmQgYWRkaW5nICsxIHBlciBpdGVyYXRpb24gdG8gdGhlIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBkaXJlY3Rpb24gb2YgdGhlIGxvbmdlc3QgYXhpcyBvbiBlYWNoIGxvb3AgdG8gY3JlYXRlIGEgc2VsZWN0aW9uIHNoYWRvdyB3aXRoIGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIGZvciBsb29wIHNob3VsZCBhbHNvIHJlY29yZCB0aGUgeC95YXhpcyBjb29yZGluYXRlcyB0byB0cmFjayB0aGUgbG9jYXRpb24gb2YgdGhlIHNoaXAgc2hvdWxkIGl0IGJlIHBsYWNlZCBpbiBhIHZhbGlkIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFNoYWRvdyBmcm9tIHN0YXJ0aW5nICsxIGZyb20gdGhlIG1vdXNlb3ZlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRYYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzICs9IDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzIGV2ZW50IGxpc3RlbmVyIHJldmVyc2VzIHRoZSBjb2xvcmluZyB0aGF0IHRoZSBtb3VzZW92ZXIgZXZlbnQgbGlzdGVuZXIgYXBwbGllcyB3aGVuIHRoZSBzZWxlY3RlZCBzaGlwIGlzIG5vdCBwbGFjZWQgYW5kIHRoZSBtb3VzZSBpcyBtb3ZlZFxuICAgICAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRYYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC55YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZXJhdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuc2hpcFNlbGVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2FkZGluZyArIDEgdG8gdGhlIHNlbGVjdGVkU2hpcC5sZW5ndGggaW5zdXJlcyB0aGF0IHRoZXJlIHdvbnQgYmUgYSBsZWZ0IG92ZXIgYmx1ZSBwbGFjZW1lbnQgZGl2IGFzIHRoZSBibHVlIHNoaXBTaGFkb3cgc2hyaW5rcyBieSAxIHdoZW4gdGhlIHVzZXIgcGxhY2VzIGEgc2hpcFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGggKyAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3B1c2ggdGhlIGRpdnMgY3VycmVudCBjb2xvcnMgdG8gcHJldmlvdXNDb2xvcnMgYXJyYXkgaW4gY2FzZSB0aGUgdXNlciBkZWNpZGVzIHRvIHBsYWNlIGEgc2hpcCwgdGhlIGRpdnMgc2hvdWxkIGtlZXAgdGhlIGdyZWVuIHBsYWNlbWVudCBjb2xvciBhcyBvcHBvc2VkIHRvIHR1cm5pbmcgYmFjayB0byB0aGUgYm9hcmQgY29sb3IgYmxhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2tlZXBzIHRoZSBzaGlwU2hhZG93IGZyb20gbGVhdmluZyAxIGJsb2NrIGF0IHRoZSBmdXJ0aGVzdCBwb2ludCBhbG9uZyB0aGUgbWFpbiBheGlzIHdoZW4gYSBzaGlwIGhhcyBiZWVuIHBsYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRYYXhpcyAtPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpc31cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpcyArPSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3BzIGRpdnMgdGhhdCByZXByZXNlbnQgcGxhY2VkIHNoaXBzIGZyb20gaGF2aW5nIHRoZWlyIGNvbG9yIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vdGhpcyBjbGljayBldmVudCBsaXN0ZW5lciBzaG91bGQgYmUgcmVzcG9uc2libGUgZm9yIHBsYWNpbmcgc2hpcHMgaW4gdGhlIERPTSBhbmQgcmVjb3JkaW5nIHRoZWlyIGNvb3JkaW5hdGVzIHRvIHRoZSByZXNwZWN0aXZlIGdhbWVib2FyZCBvYmplY3RcbiAgICAgICAgICAgICAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQobmV3RGl2LmRhdGFzZXQueGF4aXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRZYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBPYmogPSBzaGlwTW9kdWxlLnNoaXBDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVyYXRpb24gPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jaGVja3MgZm9yIGludmFsaWQgcGxhY2VtZW50cyBiZXlvbmQgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGJvYXJkIGF4aXMsdGhlIGF4aXMgKyBzaGlwIGxlbmd0aCBpcyBjb21wYXJlZCB0byAxMSBpbnN0ZWFkIG9mIDEwIGJlY2F1c2UgdGhlIGF4aXMgYXJlIDEgYmFzZWQgaW5kZXhpbmcgc28geW91IG11c3QgYWNjb3VudCBmb3IgMTAgd2hlbiBzdGFydGluZyBmcm9tIDEgYW5kIGNvbXBhcmluZyB0aGUgc2hpcCBsZW5ndGggZnJvbSBjdXJyZW50IHNlbGVjdGVkIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFhheGlzICsgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoID4gMTEgfHwgc2VsZWN0ZWRZYXhpcyArIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCA+IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRYYXhpcywgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnaW52YWxpZCBwbGFjZW1lbnQhJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgbWFya3MgdGhlIGRpdnMgd2hlcmUgdGhlIHNoaXAgaGFzIGJlZW4gcGxhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFBsYWNlbWVudCBmcm9tIHN0YXJ0aW5nICsxIGZyb20gdGhlIG1vdXNlb3ZlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkWGF4aXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpcyArPSAxfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzfVwiXWApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2dyZWVuJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXMgKz0gMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHJlbWFpbmluZyBibG9ja3MgaGFuZGxlIHNoaXAgcGxhY2VtZW50IGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Jlc2V0cyB0aGUgc2hpcFBsYWNlbWVudFRyYWNrZXIgcHJvcGVydHkgdmFsdWVzIHRvIGZhbHNlIHNvIGl0IGNhbiBiZSB1c2VkIGZvciB0aGUgbmV4dCBwbGF5ZXIgc2hpcCBwbGFjZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlci5wYXRyb2xCb2F0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGRhdGFNb2R1bGUuc2hpcFBsYWNlbWVudFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcltwcm9wZXJ0eV0gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2JlbG93IGlmIGVsc2Ugc3RhdGVtZW50cyBoYW5kbGUgcHVzaGluZyB0aGUgcGxhY2VkIHNoaXAgdG8gdGhlIHByb3BlciBwbGF5ZXJzIGdhbWVib2FyZCBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1NoaXBQbGFjZW1lbnQgPSBnYW1lYm9hcmRNb2R1bGUucGxhY2VTaGlwKGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLCBzZWxlY3RlZFhheGlzLCBzZWxlY3RlZFlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1NoaXBQbGFjZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxR2FtZWJvYXJkLnB1c2gobmV3U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYHBsYXllcjFHYW1lYm9hcmQke2RhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyMkdhbWVib2FyZC5wdXNoKG5ld1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBwbGF5ZXIyR2FtZWJvYXJkJHtkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2EgZmFsc2UgcHJvcGVydHkgaW4gdGhlIHNoaXBQbGFjZW1lbnRUcmFja2VyIG1lYW5zIHRoZSBzaGlwIGhhc250IGJlZW4gcGxhY2VkIGFuZCB3aWxsIGJlY29tZSB0aGUgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgZm9yIHBsYWNlbWVudCBvbiBwbGF5ZXJOR2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGRhdGFNb2R1bGUuc2hpcFBsYWNlbWVudFRyYWNrZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcltwcm9wZXJ0eV0gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcltwcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBzaGlwT2JqIGNvbnRhaW5zIGFsbCBzaGlwcyBhbmQgd2lsbCBiZSBhY2Nlc3MgdGhyb3VnaCBzZWxlY3RlZCBzaGlwIHRvIGJlIHBsYWNlZCBvbiB0aGUgcGxheWVyTkdhbWVib2FyZCBhcnJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0gc2hpcE9ialtwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ3BsYWNlbWVudCBwaGFzZSBvdmVyJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBjbGljayBldmVudCBsaXN0ZW5lciBzaG91bGQgdHJpZ2dlciB0aGUgcmVjZWl2ZUF0dGFjayBmdW5jdGlvbiB3aXRoIHRoZSBkYXRhLXgveWF4aXMgYXR0cmlidXRlcyBcbiAgICAgICAgICAgICAgICBuZXdEaXYyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRYYXhpcyA9IHBhcnNlSW50KG5ld0RpdjIuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFlheGlzID0gcGFyc2VJbnQobmV3RGl2Mi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyBmcm9tIGF0dGFja2luZyBvcHBvbmVudCBib2FyZCBkdXJpbmcgc2hpcCBwbGFjZW1lbnQgcGhhc2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuc2hpcFNlbGVjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2sobmV3RGl2Mi5kYXRhc2V0LnhheGlzLCBuZXdEaXYyLmRhdGFzZXQueWF4aXMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgY3JlYXRlcyBuZXcgZGl2cyB3aXRoIGRhdGEteC95LWF4aXMgdmFsdWVzIGFuZCBhcHBlbmRzIHRoZW0gdG8gZWFjaCBwbGF5ZXIgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgbmV3RGl2LmRhdGFzZXQueGF4aXMgPSBgJHtqfWA7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmRhdGFzZXQueWF4aXMgPSBgJHtpfWA7XG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQtY2VsbCc7XG4gICAgICAgICAgICAgICAgbmV3RGl2Mi5jbGFzc05hbWUgPSAnZ2FtZWJvYXJkLWNlbGwnO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHBvbmVudC1nYW1lYm9hcmQnKS5hcHBlbmRDaGlsZChuZXdEaXYyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBnZW5lcmF0ZUJvYXJkLCBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIHdpbkNoZWNrIH1cbn0pKCk7XG5cbmNvbnN0IHNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2hpcENvbnN0cnVjdG9yID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBiYXR0bGVzaGlwID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVyID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0cm9sQm9hdCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHNoaXBIZWFsdGhBcnJbaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwSGVhbHRoQXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayhzaGlwKSB7XG5cbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICBkYW1hZ2UrKztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYW1hZ2UgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hpcENvbnN0cnVjdG9yLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5cblxuLy9iZWxvdyAyIGxpbmVzIGlzIGZvciB0aGUgc2FrZSBvZiB0ZXN0aW5nIG9ubHlcbmxldCB0ZXN0U2hpcCA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yLmJhdHRsZXNoaXBcbmRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0geyB0ZXN0U2hpcCB9O1xuXG5nYW1lTG9vcE1vZHVsZS51c2VySW50ZXJmYWNlKCk7XG5cblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5cbi8vdGhlIGJsb2NrIGJlbG93IGlzIGZvciBqZXN0IHRlc3Rpbmdcbi8qbGV0IHN1bmtTaGlwID0gc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcC5oaXRzO1xuc3Vua1NoaXAuaGl0cyA9IFsxLCAxLCAxLCAxXTtcbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCBbMF0pXG5kYXRhTW9kdWxlLmZsZWV0U3RhdHVzID0gW2dhbWVCb2FyZFRlc3RTaGlwXTtcbmdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKDEsIDApO1xuZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMywgNCk7XG5jb25zb2xlLmxvZyhwbGF5ZXJBbmRQQ01vZHVsZS5nZXRSYW5kb21DaGFyKCkpXG5jb25zb2xlLmxvZyhkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1swXSwgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXNbMV0pXG5jb25zdCBuZXdCb29sID0gcGxheWVyQW5kUENNb2R1bGUucGxheWVyKClcbm1vZHVsZS5leHBvcnRzID0geyBkYXRhTW9kdWxlLCBwbGF5ZXJBbmRQQ01vZHVsZSwgZG9tTW9kdWxlLCBnYW1lTG9vcE1vZHVsZSwgZ2FtZWJvYXJkTW9kdWxlLCBzaGlwTW9kdWxlLCBzdW5rU2hpcCwgbmV3Qm9vbCB9OyAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==