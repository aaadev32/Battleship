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
    //this object keeps track of the ships that have been placed during a players turn (resets back to false at end of turn)
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
    function playerTurnHandler() {
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
    return { playerTurnHandler, getRandomChar, pcPlay }
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
        });
    }

    return { userInterface };
})();
const gameboardModule = (() => {
    let placeShip = function (ship, xCoordinates, yCoordinates) {

        let shipPlacement = {
            shipObj: ship,
            xAxis: [],
            yAxis: []
        }
        shipPlacement.xAxis.push(xCoordinates);
        shipPlacement.yAxis.push(yCoordinates);
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
        //the below 2 for loop i,j values are used to create the divs and data attributes for the gameboard as well as set event handlers
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
                        //use a for loop to iterate a ship.length number of times from dataModule.selectedShip and adding +1 per iteration to the data attribute of the direction main axis to create a selection shadow with background color
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
                    let shipPlacementMarkerIteration = true;
                    let firstShipPlacemenIteration = true;
                    let occupiedXCoordinate = false;
                    let occupiedYCoordinate = false;
                    let currentPlayerGameboard = null;
                    let xCoordinateArr = [];
                    let yCoordinateArr = [];
                    if (dataModule.shipSelection == true) {
                        //checks for invalid placements on the xAxis
                        if (selectedXaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == false) {
                            console.log(selectedXaxis, selectedYaxis, dataModule.selectedShip.length)
                            return alert('invalid placement on the X Axis!');
                            //values greater than 11 on the yAxis are only possible when vertical ship rotation is active
                        } else if (selectedYaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == true) {
                            return alert('invalid placement on the Y Axis!')
                        }
                        //this checks for ships already placed on the selected coordinates
                        if (dataModule.player1Turn == true) {
                            currentPlayerGameboard = dataModule.player1Gameboard;
                        } else {
                            currentPlayerGameboard = dataModule.player2Gameboard;
                        }
                        for (let i = 0; i < currentPlayerGameboard.length; i++) {
                            for (let j = 0; j < currentPlayerGameboard[i].xAxis.length; j++) {
                                console.log(`xAxis ${currentPlayerGameboard[i].xAxis[j]}, selected xAxis ${selectedXaxis}`)
                                if (currentPlayerGameboard[i].xAxis[j] == selectedXaxis) {
                                    occupiedXCoordinate = true;
                                }
                            }
                            for (let j = 0; j < currentPlayerGameboard[i].yAxis.length; j++) {
                                console.log(`yAxis ${currentPlayerGameboard[i].yAxis[j]}, selected yAxis ${selectedYaxis}`)
                                if (currentPlayerGameboard[i].yAxis[j] == selectedYaxis) {
                                    occupiedYCoordinate = true;
                                }
                            }
                            /*
                            for (const property in currentPlayerGameboard[i]) {
    console.log(`${property}, ${currentPlayerGameboard[i][property]}, xAxis selection ${selectedXaxis}`)
    if (property == 'xAxis' && currentPlayerGameboard[i][property] == selectedXaxis) {
        occupiedXCoordinate = true;
        console.log('x coordinate taken!')
    }
}
for (const property in currentPlayerGameboard[i]) {
    console.log(`${property}, ${currentPlayerGameboard[i][property]}, yAxis selection ${selectedYaxis}`)
    if (property == 'yAxis' && currentPlayerGameboard[i][property] == selectedYaxis) {
        occupiedYCoordinate = true;
        console.log('y coordinate taken!')
    }
} */
                        }
                        if (occupiedXCoordinate && occupiedYCoordinate == true) {
                            return alert('these coordinates are occupied by another ship! please choose different coordinates.');
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
                            if (i == dataModule.selectedShip.length - 2) {
                                console.log('test')
                                let newShipPlacement = placeShip(dataModule.selectedShip, xCoordinateArr, yCoordinateArr)
                                if (dataModule.player1Turn == true) {
                                    dataModule.player1Gameboard.push(newShipPlacement);
                                } else {
                                    dataModule.player2Gameboard.push(newShipPlacement);
                                }
                            }

                        }
                        console.log(dataModule.player1Gameboard)
                        //this block marks the divs where the ship has been placed 
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            //keeps the shipPlacement from starting +1 from the mouseover point
                            if (shipPlacementMarkerIteration == true) {
                                selectedXaxis -= 1;
                                shipPlacementMarkerIteration = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1Qjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw0R0FBNEcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuXFxuI3Rlc3Qge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByb3N5YnJvd247XFxufVxcblxcbiN1c2VyLWludGVyZmFjZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5nYW1lLXR5cGUtc2VsZWN0aW9uLWJ1dHRvbnMge1xcbiAgICBtYXJnaW46IDEwcHg7XFxufVxcblxcblxcbi5nYW1lYm9hcmQtY2VsbCB7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgd2lkdGg6IDI1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbiNnYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XFxuXFxuI29wcG9uZW50LWdhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiN0ZXN0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xcbn1cXG5cXG4jdXNlci1pbnRlcmZhY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FtZS10eXBlLXNlbGVjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5cXG4uZ2FtZWJvYXJkLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5cXG4jZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbiNvcHBvbmVudC1nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgZGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy90aGUgZ2FtZWJvYXJkIGFycmF5cyB3aWxsIHN0b3JlIHRoZSBzaGlwIG9iamVjdHMsIHRoZSBhdHRhY2tlZCBjb29yZGluYXRlcyBrZWVwcyB0cmFjayBvZiB3aGF0IHBsYXlzIGVhY2ggcGxheWVyIGhhcyBhbHJlYWR5IG1hZGUuXG4gICAgbGV0IHBsYXllcjFHYW1lYm9hcmQgPSBbXTtcbiAgICBsZXQgcGxheWVyMkdhbWVib2FyZCA9IFtdO1xuICAgIGxldCBwbGF5ZXIxQXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBwbGF5ZXIyQXR0YWNrZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBwdnAgPSBmYWxzZTtcbiAgICBsZXQgcGxheWVyMVR1cm4gPSB0cnVlO1xuICAgIC8vYmVjb21lcyB0cnVlIHdoZW4gdGhlIHBsYXllciBpcyBwbGFjaW5nIGEgc2hpcFxuICAgIGxldCBzaGlwU2VsZWN0aW9uID0gdHJ1ZTtcbiAgICAvL3Nob3VsZCBiZSBlcXVhbCB0byB0aGUgc2VsZWN0ZWQgc2hpcCBvYmplY3QgYW5kIHVzZWQgdG8gY3JlYXRlIHRoZSBwbGFjZW1lbnQgc2hhZG93IHdoZW4gcGxhY2luZyBzaGlwcyBieSBhY2Nlc2luZyB0aGUgc2hpcHMgbGVuZ3RoIHByb3BlcnR5XG4gICAgbGV0IHNlbGVjdGVkU2hpcCA9IHt9O1xuICAgIGxldCB2ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9IGZhbHNlO1xuICAgIC8vdGhpcyBvYmplY3Qga2VlcHMgdHJhY2sgb2YgdGhlIHNoaXBzIHRoYXQgaGF2ZSBiZWVuIHBsYWNlZCBkdXJpbmcgYSBwbGF5ZXJzIHR1cm4gKHJlc2V0cyBiYWNrIHRvIGZhbHNlIGF0IGVuZCBvZiB0dXJuKVxuICAgIGxldCBzaGlwUGxhY2VtZW50VHJhY2tlciA9IHtcbiAgICAgICAgY2FycmllcjogZmFsc2UsXG4gICAgICAgIGJhdHRsZXNoaXA6IGZhbHNlLFxuICAgICAgICBkZXN0cm95ZXI6IGZhbHNlLFxuICAgICAgICBzdWJtYXJpbmU6IGZhbHNlLFxuICAgICAgICBwYXRyb2xCb2F0OiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiB7IHBsYXllcjFHYW1lYm9hcmQsIHBsYXllcjJHYW1lYm9hcmQsIHBsYXllcjFBdHRhY2tlZENvb3JkaW5hdGVzLCBwbGF5ZXIyQXR0YWNrZWRDb29yZGluYXRlcywgcGxheWVyMVR1cm4sIHB2cCwgc2hpcFNlbGVjdGlvbiwgc2VsZWN0ZWRTaGlwLCB2ZXJ0aWNhbFNoaXBSb3RhdGlvbiwgc2hpcFBsYWNlbWVudFRyYWNrZXIgfTtcbn0pKCk7XG5jb25zdCBkb21Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRJZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkLCBjbGFzc04pIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWQ7XG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVFbGVtZW50SWRDbGFzcyB9O1xufSkoKTtcblxuY29uc3QgcGxheWVyQW5kUENNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vdGhpcyBmdW5jdGlvbiBkZWFscyBoaWRpbmcgcGxheWVyIHNjcmVlbnMgYmV0d2VlbiBkZXZpY2UgaGFuZG9mZnMgYW5kIFxuICAgIGZ1bmN0aW9uIHBsYXllclR1cm5IYW5kbGVyKCkge1xuICAgICAgICAvL2lmIGl0cyBhIHB2cCBnYW1lIHRoaXMgc3RhdGVtZW50IGJsb2NrIHNob3VsZCBpbnN1cmUgdGhlIHNjcmVlbiBpcyBoaWRkZW4gd2hlbiBwYXNzaW5nIHRoZSBkZXZpY2VcbiAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSAmJiBkYXRhTW9kdWxlLnB2cCA9PSB0cnVlKSB7XG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9pbXBsZW1lbnQgYSBET00gaGFuZGxlciB0byBjb3ZlciB0aGUgZ2FtZSBib2FyZCB3aGVuIHRoZSBET00gYWN0dWFsbHkgZ2V0cyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ3BsYXllciAxXFwncyB0dXJuISBubyBwZWVraW5nLicpXG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9pbXBsZW1lbnQgYSBET00gaGFuZGxlciB0byBjb3ZlciB0aGUgZ2FtZSBib2FyZCB3aGVuIHRoZSBET00gYWN0dWFsbHkgZ2V0cyBpbXBsZW1lbnRlZFxuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ3BsYXllciAyXFwncyB0dXJuISBubyBwZWVraW5nLicpXG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy9hbGVydCgncGxheWVyIDEgdGFrZSBhIHNob3QnKTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwY1xcJ3MgdHVybicpO1xuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUNoYXIoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IGNoYXJhY3RlcnMgPSAnYWJjZGVmZ2hpaic7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKlxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy9jcmVhdGUgYW4gYWkgZnVuY3Rpb24gdGhhdCB3aWxsIGRldGVybWluZSB0aGUgY29tcHV0ZXIgcGxheWVycyBhdHRhY2tzXG4gICAgZnVuY3Rpb24gcGNQbGF5KCkge1xuICAgICAgICAvL2dldCBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTAgKHggYXhpcylcbiAgICAgICAgbGV0IHJhbmRvbVhDb29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgICAvL2dldCBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gMCBhbmQgMTAgKHkgYXhpcylcbiAgICAgICAgbGV0IHJhbmRvbVlDb29yZGluYXRlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuICAgICAgICAvL3BsdWcgdGhlIHJhbmRvbSB4IGFuZCB5IGNvb3JkaW5hdGVzIElGIHRoZXkgZG8gbm90IG1hdGNoIGEgcGFpciBvZiBjb29yZGluYXRlcyBpbiB0aGUgZGF0YU1vZHVsZSB1c2VkQ29vcmRpbmF0ZXMgYXJyYXlcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzW2ldKSB7XG4gICAgICAgICAgICAgICAgLy90aGlzIGJsb2NrIHdpbGwgcmVjdXJzaXZlbHkgY2FsbCB0aGUgcGNQbGF5IGZ1bmN0aW9uIHVudGlsIHRoZSByYW5kb21Db29yZGluYXRlcyBjb25zaXN0IG9mIGEgcGFpciB0aGF0IGhhdmUgbm90IGFscmVhZHkgYmVlbiBwbGF5ZWRcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueCA9PSByYW5kb21YQ29vcmRpbmF0ZSAmJiBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlcy55ID09IHJhbmRvbVlDb29yZGluYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBjUGxheSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgdGhlIHJhbmRvbSBjb29yZGluYXRlIHBhaXJzIGRvIG5vdCBtYXRjaCBhbnkgaW4gdGhlIHVzZWRDb29yZGluYXRlcyBhcnJheSB0aGV5IHNob3VsZCBiZSBwYXNzZWQgdGhyb3VnaCB0aGUgcmVjZWl2ZSBhdHRhY2sgZnVuY3Rpb25cbiAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2socmFuZG9tWENvb3JkaW5hdGUsIHJhbmRvbVlDb29yZGluYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcGxheWVyVHVybkhhbmRsZXIsIGdldFJhbmRvbUNoYXIsIHBjUGxheSB9XG59KSgpO1xuLy9jcmVhdGUgdGhlIG1haW4gZ2FtZSBsb29wIGFuZCBhIG1vZHVsZSBmb3IgRE9NIGludGVyYWN0aW9uLiBcbmNvbnN0IGdhbWVMb29wTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2Rpc3BsYXlzIG9wZW5pbmcgVUkgYW5kIGNob2ljZXMgZm9yIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgZnVuY3Rpb24gdXNlckludGVyZmFjZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgLy9UaGUgZ2FtZSBsb29wIHNob3VsZCBzZXQgdXAgYSBuZXcgZ2FtZSBieSBjcmVhdGluZyBQbGF5ZXJzIGFuZCBHYW1lYm9hcmRzXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdnAtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnB2cCA9IHRydWU7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlci1pbnRlcmZhY2UnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgLy9jYWxsIHRoZSBnZW5lcmF0ZUJvYXJkIGZ1bmN0aW9uIHRvIGdlbmVyYXRlIHRoZSBib2FyZFxuICAgICAgICAgICAgZ2FtZWJvYXJkTW9kdWxlLmdlbmVyYXRlQm9hcmQoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnc3BhY2UtYXJvdW5kJztcbiAgICAgICAgICAgIC8vbWFudWFsbHkgY2FsbGluZyB0aGUgY2FycmllciBvYmplY3QgdG8gYmUgZGVmYXVsdCBzZWxlY3Rpb24gdXBvbiBjaG9vc2luZyB0aGUgZ2FtZSB0eXBlIGFzIHdlbGwgYXMgbWFudWFsbHkgbWFraW5nIGl0cyBzaGlwUGxhY2VtZW50VHJhY2tlciB0cnVlIHRvIHByZXZlbnQgcHJvYmxlbXMgd2l0aCBmb3IgaW4gbG9vcFxuICAgICAgICAgICAgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwTW9kdWxlLnNoaXBDb25zdHJ1Y3RvcigpLmNhcnJpZXI7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLmNhcnJpZXIgPSB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdmUtc2VsZWN0aW9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkYXRhTW9kdWxlLnB2cCA9IGZhbHNlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vY2FsbCB0aGUgZ2VuZXJhdGVCb2FyZCBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgYm9hcmRcbiAgICAgICAgICAgIGdhbWVib2FyZE1vZHVsZS5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG4gICAgICAgICAgICAvL21hbnVhbGx5IGNhbGxpbmcgdGhlIGNhcnJpZXIgb2JqZWN0IHRvIGJlIGRlZmF1bHQgc2VsZWN0aW9uIHVwb24gY2hvb3NpbmcgdGhlIGdhbWUgdHlwZSBhcyB3ZWxsIGFzIG1hbnVhbGx5IG1ha2luZyBpdHMgc2hpcFBsYWNlbWVudFRyYWNrZXIgdHJ1ZSB0byBwcmV2ZW50IHByb2JsZW1zIHdpdGggZm9yIGluIGxvb3BcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IoKS5jYXJyaWVyO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlci5jYXJyaWVyID0gdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyB1c2VySW50ZXJmYWNlIH07XG59KSgpO1xuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcbiAgICBsZXQgcGxhY2VTaGlwID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IFtdLFxuICAgICAgICAgICAgeUF4aXM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgc2hpcFBsYWNlbWVudC54QXhpcy5wdXNoKHhDb29yZGluYXRlcyk7XG4gICAgICAgIHNoaXBQbGFjZW1lbnQueUF4aXMucHVzaCh5Q29vcmRpbmF0ZXMpO1xuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG4gICAgLy9wbGF5ZXJCb2FyZCBzaG91bGQgYmUgdGhlIHBsYXllcnMgYm9hcmQgdGhhdCBpcyBiZWluZyBhdHRhY2tlZCwgcGxheWVyQXR0YWNrZWRDb29yZGluYXRlcyBzaG91bGQgYmUgdGhlIGF0dGFja2luZyBwbGF5ZXJzIHVzZWQgY29vcmRpbmF0ZXMsIHgveWNvb3JkaW5hdGVzIGFyZSB0aGUgY2hvc2VuIGNvb3JkaW5hdGVzIGJ5IHRoZSBhdHRhY2tpbmcgcGxheWVyXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayhwbGF5ZXJCb2FyZCwgcGxheWVyQXR0YWNrZWRDb29yZGluYXRlcywgeENvb3JkaW5hdGVzLCB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgbGV0IHhDb29yZGluYXRlc1RydWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHlDb29yZGluYXRlc1RydWUgPSBmYWxzZTtcbiAgICAgICAgbGV0IHhIaXRJbmRleCA9IG51bGw7XG4gICAgICAgIGxldCB5SGl0SW5kZXggPSBudWxsO1xuXG5cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUucGxheWVyQm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5oaXRzKTtcbiAgICAgICAgICAgIC8vY2hlY2tzIGlmIHhDb29yZGluYXRlIGhpdHNcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS54QXhpcy5sZW5ndGg7IGorKykge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS54QXhpc1tqXSA9PSB4Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeEhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkaW5hdGVzVHJ1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB5Q29vcmRpbmF0ZSBoaXRzXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueUF4aXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnlBeGlzW2pdID09IHlDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICB5SGl0SW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZXNUcnVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIGJvdGggY29vcmRpbmF0ZXMgaGl0cyBhcmUgdHJ1ZSwgY2FsbCBoaXQgZnVuY3Rpb24gb24gY29ycmVjdCBzaGlwIGFuZCBpbmRleCBvZiBpdHMgaGl0cyBhcnJheVxuICAgICAgICAgICAgaWYgKHhDb29yZGluYXRlc1RydWUgJiYgeUNvb3JkaW5hdGVzVHJ1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgLy93aGVuIHNjYW5uaW5nIHRoZSBuQXhpcyBhcnJheXMgZm9yIGVxdWFsaXR5IGNvbXBhcmlzb24gdG8gdGhlIHgveUNvb3JkaW5hdGUgcGFyYW1ldGVycyB1c2UgdGhlIHRoZSBuQXhpcyB0cnV0aHkgaW5kZXggdmFsdWUgb2YgdGhlIGxvbmdlc3QgbkF4aXMgYXJyYXkgYXMgdGhlIGluZGV4IHBhcmFtZXRlciBpbiB0aGUgaGl0KCkgZnVuY3Rpb24gdG8gaW5zdXJlIHRoZSBjb3JyZWN0IGhpdCBpbmRleCBpcyBtYXJrZWQgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXMubGVuZ3RoID4gZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS55QXhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS5zaGlwT2JqLmhpdHMsIHhIaXRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhpdENvb3JkaW5hdGVzID0geyB4OiB4Q29vcmRpbmF0ZXMsIHk6IHlDb29yZGluYXRlcyB9O1xuICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaChoaXRDb29yZGluYXRlcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmhpdChkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnNoaXBPYmouaGl0cywgeUhpdEluZGV4KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gaGl0cyFgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2tlZXAgdHJhY2sgb2YgbWlzc2VkIGNvb3JkaW5hdGVzIGZvciBET00gZGlzcGxheVxuICAgICAgICAgICAgICAgIGxldCBtaXNzZWRYWUNvb3JkaW5hdGVzID0geyB4OiB4Q29vcmRpbmF0ZXMsIHk6IHlDb29yZGluYXRlcyB9O1xuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyQXR0YWNrZWRDb29yZGluYXRlcy5wdXNoKG1pc3NlZFhZQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIC8vbm90ZSBmb3Igd2hlbiBET00gaXMgYWRkZWQsIGFkZCBjb2RlIGhlcmUgdGhhdCBtYXJrcyB0aGUgY29ycmVjdCBET00gZWxlbWVudCBmb3IgYW4gYXR0YWNrIHdpdGggeC95Q29vcmRpbmF0ZXMgdGhhdCBtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOy8vYWxlcnQoYGF0dGFjayAke3hDb29yZGluYXRlc30sICR7eUNvb3JkaW5hdGVzfSBtaXNzZXMhYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdpbkNoZWNrKCkge1xuICAgICAgICBsZXQgc3Vua1NoaXBzID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS5zaGlwT2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN1bmtTaGlwcysrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1bmtTaGlwcyA9PSBkYXRhTW9kdWxlLnBsYXllckJvYXJkLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vYWxlcnQoJ2ZsZWV0IHN1bmshJylcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rU2hpcHMgIT0gZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSAvL2FsZXJ0KCdnZXQgbWUgbXkgYnJvd24gcGFudHMnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy9hIGdhbWVib2FyZCBnZW5lcmF0b3IgdGhhdCBnZW5lcmF0ZXMgYSBkaXYgZm9yIGVhY2ggY29vcmRpbmF0ZSB3aXRoIGEgZGF0YS14YXhpcyBhbmQgYSBkYXRhLXlheGlzIHZhbHVlIGZvciBlYWNoIGRpdlxuICAgIC8vZXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgcGxheWVycyBnYW1lYm9hcmQgc2hvdWxkIHBsYWNlIG9iamVjdHMsIGxpc3RlbmVycyBmb3IgdGhlIHBsYXllcnMgdGFyZ2V0aW5nIGJvYXJkIHNob3VsZCBoYW5kbGUgYXR0YWNrIGNvb3JkaW5hdGVzIGFuZCBzdG9yYWdlIGluZm9cbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBnYW1lYm9hcmRDb250YWluZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdnYW1lYm9hcmQtY29udGFpbmVyJywgJycpO1xuICAgICAgICBsZXQgZ2FtZUJvYXJkID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnZ2FtZWJvYXJkJywgJycpO1xuICAgICAgICBsZXQgb3Bwb25lbnRCb2FyZCA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgJ29wcG9uZW50LWdhbWVib2FyZCcsICcnKTtcbiAgICAgICAgbGV0IGdhbWVib2FyZEhlYWRlciA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygncCcsICdnYW1lYm9hcmQtaGVhZGVyJywgJycpO1xuICAgICAgICBsZXQgb3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ3AnLCAnb3Bwb25lbnQtZ2FtZWJvYXJkLWhlYWRlcicsICcnKTtcbiAgICAgICAgbGV0IGdhbWVib2FyZEhlYWRlckNvbnRhaW5lciA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgJ2dhbWVib2FyZC1oZWFkZXItY29udGFpbmVyJywgJycpO1xuXG4gICAgICAgIC8vdGhpcyBibG9jayBjcmVhdGVzIGdhbWVib2FyZCB0aXRsZSBoZWFkZXJzIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGdhbWVib2FyZEhlYWRlckNvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGdhbWVib2FyZEhlYWRlcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyKTtcbiAgICAgICAgZ2FtZWJvYXJkSGVhZGVyLnRleHRDb250ZW50ID0gJ1lvdXIgRmxlZXQnO1xuICAgICAgICBvcHBvbmVudEdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdFbmVteSBUZXJyaXRvcnknO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQoZ2FtZWJvYXJkQ29udGFpbmVyKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5hcHBlbmRDaGlsZChnYW1lQm9hcmQpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKG9wcG9uZW50Qm9hcmQpO1xuXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jykuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICAgICAgICAvL3RoZSBiZWxvdyAyIGZvciBsb29wIGksaiB2YWx1ZXMgYXJlIHVzZWQgdG8gY3JlYXRlIHRoZSBkaXZzIGFuZCBkYXRhIGF0dHJpYnV0ZXMgZm9yIHRoZSBnYW1lYm9hcmQgYXMgd2VsbCBhcyBzZXQgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgLy8xIGJhc2VkIGluZGV4aW5nIGZvciBtb3JlIGNsYXJpdHkgd2hlbiB3b3JraW5nIHdpdGggZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIGFuZCBkYXRhIGF0dHJpYnV0ZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCAxMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGxldCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgIGxldCBuZXdEaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAgICAgICAgIC8vdGhpcyBtb3VzZW92ZXIgZXZlbnQgbGlzdGVuZXIgYWxsb3dzIHRoZSBET00gdG8gZGlzcGxheSB0byB1c2VycyB3aGV0aGVyIG9yIG5vdCBhIHNoaXAgcGxhY2VtZW50IGlzIGFwcHJvcHJpYXRlXG4gICAgICAgICAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRZYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEl0ZXJhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3VzZSBhIGZvciBsb29wIHRvIGl0ZXJhdGUgYSBzaGlwLmxlbmd0aCBudW1iZXIgb2YgdGltZXMgZnJvbSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBhbmQgYWRkaW5nICsxIHBlciBpdGVyYXRpb24gdG8gdGhlIGRhdGEgYXR0cmlidXRlIG9mIHRoZSBkaXJlY3Rpb24gbWFpbiBheGlzIHRvIGNyZWF0ZSBhIHNlbGVjdGlvbiBzaGFkb3cgd2l0aCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoZSBmb3IgbG9vcCBzaG91bGQgYWxzbyByZWNvcmQgdGhlIHgveWF4aXMgY29vcmRpbmF0ZXMgdG8gdHJhY2sgdGhlIGxvY2F0aW9uIG9mIHRoZSBzaGlwIHNob3VsZCBpdCBiZSBwbGFjZWQgaW4gYSB2YWxpZCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcHMgdGhlIHNoaXBTaGFkb3cgZnJvbSBzdGFydGluZyArMSBmcm9tIHRoZSBtb3VzZW92ZXIgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0SXRlcmF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkWGF4aXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBTaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpcyArPSAxfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3BzIGRpdnMgdGhhdCByZXByZXNlbnQgcGxhY2VkIHNoaXBzIGZyb20gaGF2aW5nIHRoZWlyIGNvbG9yIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpc31cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpcyArPSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3BzIGRpdnMgdGhhdCByZXByZXNlbnQgcGxhY2VkIHNoaXBzIGZyb20gaGF2aW5nIHRoZWlyIGNvbG9yIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBldmVudCBsaXN0ZW5lciByZXZlcnNlcyB0aGUgY29sb3JpbmcgdGhhdCB0aGUgbW91c2VvdmVyIGV2ZW50IGxpc3RlbmVyIGFwcGxpZXMgd2hlbiB0aGUgc2VsZWN0ZWQgc2hpcCBpcyBub3QgcGxhY2VkIGFuZCB0aGUgbW91c2UgaXMgbW92ZWRcbiAgICAgICAgICAgICAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFlheGlzID0gcGFyc2VJbnQobmV3RGl2LmRhdGFzZXQueWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVyYXRpb24gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBTZWxlY3Rpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9hZGRpbmcgKyAxIHRvIHRoZSBzZWxlY3RlZFNoaXAubGVuZ3RoIGluc3VyZXMgdGhhdCB0aGVyZSB3b250IGJlIGEgbGVmdCBvdmVyIGJsdWUgcGxhY2VtZW50IGRpdiBhcyB0aGUgYmx1ZSBzaGlwU2hhZG93IHNocmlua3MgYnkgMSB3aGVuIHRoZSB1c2VyIHBsYWNlcyBhIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9wdXNoIHRoZSBkaXZzIGN1cnJlbnQgY29sb3JzIHRvIHByZXZpb3VzQ29sb3JzIGFycmF5IGluIGNhc2UgdGhlIHVzZXIgZGVjaWRlcyB0byBwbGFjZSBhIHNoaXAsIHRoZSBkaXZzIHNob3VsZCBrZWVwIHRoZSBncmVlbiBwbGFjZW1lbnQgY29sb3IgYXMgb3Bwb3NlZCB0byB0dXJuaW5nIGJhY2sgdG8gdGhlIGJvYXJkIGNvbG9yIGJsYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFNoYWRvdyBmcm9tIGxlYXZpbmcgMSBibG9jayBhdCB0aGUgZnVydGhlc3QgcG9pbnQgYWxvbmcgdGhlIG1haW4gYXhpcyB3aGVuIGEgc2hpcCBoYXMgYmVlbiBwbGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0SXRlcmF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkWGF4aXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBTaGFkb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpcyArPSAxfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3N0b3BzIGRpdnMgdGhhdCByZXByZXNlbnQgcGxhY2VkIHNoaXBzIGZyb20gaGF2aW5nIHRoZWlyIGNvbG9yIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID09ICdncmVlbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBTaGFkb3cuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ2JsYWNrJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXMgKz0gMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9wcyBkaXZzIHRoYXQgcmVwcmVzZW50IHBsYWNlZCBzaGlwcyBmcm9tIGhhdmluZyB0aGVpciBjb2xvciBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvL3RoaXMgY2xpY2sgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIGJlIHJlc3BvbnNpYmxlIGZvciBwbGFjaW5nIHNoaXBzIGluIHRoZSBET00gYW5kIHJlY29yZGluZyB0aGVpciBjb29yZGluYXRlcyB0byB0aGUgcmVzcGVjdGl2ZSBnYW1lYm9hcmQgb2JqZWN0XG4gICAgICAgICAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRYYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC55YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaGlwT2JqID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTaGlwUGxhY2VtZW5JdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2NjdXBpZWRYQ29vcmRpbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2NjdXBpZWRZQ29vcmRpbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudFBsYXllckdhbWVib2FyZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCB4Q29vcmRpbmF0ZUFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgeUNvb3JkaW5hdGVBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuc2hpcFNlbGVjdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NoZWNrcyBmb3IgaW52YWxpZCBwbGFjZW1lbnRzIG9uIHRoZSB4QXhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkWGF4aXMgKyBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGggPiAxMSAmJiBkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRYYXhpcywgc2VsZWN0ZWRZYXhpcywgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnaW52YWxpZCBwbGFjZW1lbnQgb24gdGhlIFggQXhpcyEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3ZhbHVlcyBncmVhdGVyIHRoYW4gMTEgb24gdGhlIHlBeGlzIGFyZSBvbmx5IHBvc3NpYmxlIHdoZW4gdmVydGljYWwgc2hpcCByb3RhdGlvbiBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWRZYXhpcyArIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCA+IDExICYmIGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgnaW52YWxpZCBwbGFjZW1lbnQgb24gdGhlIFkgQXhpcyEnKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzIGNoZWNrcyBmb3Igc2hpcHMgYWxyZWFkeSBwbGFjZWQgb24gdGhlIHNlbGVjdGVkIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllckdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBsYXllckdhbWVib2FyZCA9IGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFBsYXllckdhbWVib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFBsYXllckdhbWVib2FyZFtpXS54QXhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeEF4aXMgJHtjdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldLnhBeGlzW2pdfSwgc2VsZWN0ZWQgeEF4aXMgJHtzZWxlY3RlZFhheGlzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldLnhBeGlzW2pdID09IHNlbGVjdGVkWGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jY3VwaWVkWENvb3JkaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VycmVudFBsYXllckdhbWVib2FyZFtpXS55QXhpcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgeUF4aXMgJHtjdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldLnlBeGlzW2pdfSwgc2VsZWN0ZWQgeUF4aXMgJHtzZWxlY3RlZFlheGlzfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldLnlBeGlzW2pdID09IHNlbGVjdGVkWWF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9jY3VwaWVkWUNvb3JkaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjdXJyZW50UGxheWVyR2FtZWJvYXJkW2ldKSB7XG4gICAgY29uc29sZS5sb2coYCR7cHJvcGVydHl9LCAke2N1cnJlbnRQbGF5ZXJHYW1lYm9hcmRbaV1bcHJvcGVydHldfSwgeEF4aXMgc2VsZWN0aW9uICR7c2VsZWN0ZWRYYXhpc31gKVxuICAgIGlmIChwcm9wZXJ0eSA9PSAneEF4aXMnICYmIGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmRbaV1bcHJvcGVydHldID09IHNlbGVjdGVkWGF4aXMpIHtcbiAgICAgICAgb2NjdXBpZWRYQ29vcmRpbmF0ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKCd4IGNvb3JkaW5hdGUgdGFrZW4hJylcbiAgICB9XG59XG5mb3IgKGNvbnN0IHByb3BlcnR5IGluIGN1cnJlbnRQbGF5ZXJHYW1lYm9hcmRbaV0pIHtcbiAgICBjb25zb2xlLmxvZyhgJHtwcm9wZXJ0eX0sICR7Y3VycmVudFBsYXllckdhbWVib2FyZFtpXVtwcm9wZXJ0eV19LCB5QXhpcyBzZWxlY3Rpb24gJHtzZWxlY3RlZFlheGlzfWApXG4gICAgaWYgKHByb3BlcnR5ID09ICd5QXhpcycgJiYgY3VycmVudFBsYXllckdhbWVib2FyZFtpXVtwcm9wZXJ0eV0gPT0gc2VsZWN0ZWRZYXhpcykge1xuICAgICAgICBvY2N1cGllZFlDb29yZGluYXRlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2coJ3kgY29vcmRpbmF0ZSB0YWtlbiEnKVxuICAgIH1cbn0gKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvY2N1cGllZFhDb29yZGluYXRlICYmIG9jY3VwaWVkWUNvb3JkaW5hdGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGVydCgndGhlc2UgY29vcmRpbmF0ZXMgYXJlIG9jY3VwaWVkIGJ5IGFub3RoZXIgc2hpcCEgcGxlYXNlIGNob29zZSBkaWZmZXJlbnQgY29vcmRpbmF0ZXMuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgcHVzaGVzIHRoZSBjb29yZGluYXRlcyB0byB0aGUgc2hpcCBvYmplY3RzIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWGF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgcGxhY2VtZW50IGlzbnQgdmVydGljYWwgdGhlIHlBeGlzIG9ubHkgbmVlZHMgdG8gYmUgcmVjb3JkZWQgb25jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RTaGlwUGxhY2VtZW5JdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeUNvb3JkaW5hdGVBcnIucHVzaChzZWxlY3RlZFlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0U2hpcFBsYWNlbWVuSXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWWF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgcGxhY2VtZW50IGlzIHZlcnRpY2FsIHRoZSB4QXhpcyBvbmx5IG5lZWRzIHRvIGJlIHJlY29yZGVkIG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0U2hpcFBsYWNlbWVuSXRlcmF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlQXJyLnB1c2goc2VsZWN0ZWRYYXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNoaXBQbGFjZW1lbkl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcGxhY2VzIHRoZSBzaGlwIG9uY2UgYWxsIGNvb3JkaW5hdGVzIG9mIHRoZSBzaGlwIGxlbmd0aCBoYXZlIGJlZW4gYWNjb3VudGVkIGZvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3U2hpcFBsYWNlbWVudCA9IHBsYWNlU2hpcChkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCwgeENvb3JkaW5hdGVBcnIsIHlDb29yZGluYXRlQXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQucHVzaChuZXdTaGlwUGxhY2VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMkdhbWVib2FyZC5wdXNoKG5ld1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLnBsYXllcjFHYW1lYm9hcmQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgbWFya3MgdGhlIGRpdnMgd2hlcmUgdGhlIHNoaXAgaGFzIGJlZW4gcGxhY2VkIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcHMgdGhlIHNoaXBQbGFjZW1lbnQgZnJvbSBzdGFydGluZyArMSBmcm9tIHRoZSBtb3VzZW92ZXIgcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFBsYWNlbWVudE1hcmtlckl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkWGF4aXMgLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudE1hcmtlckl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpc31cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpcyArPSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgcmVtYWluaW5nIGJsb2NrcyBoYW5kbGUgc2hpcCBwbGFjZW1lbnQgbG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVzZXRzIHRoZSBzaGlwUGxhY2VtZW50VHJhY2tlciBwcm9wZXJ0eSB2YWx1ZXMgdG8gZmFsc2Ugc28gaXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHBsYXllciBzaGlwIHBsYWNlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLnBhdHJvbEJvYXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYSBmYWxzZSBwcm9wZXJ0eSBpbiB0aGUgc2hpcFBsYWNlbWVudFRyYWNrZXIgbWVhbnMgdGhlIHNoaXAgaGFzbnQgYmVlbiBwbGFjZWQgYW5kIHdpbGwgYmVjb21lIHRoZSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBmb3IgcGxhY2VtZW50IG9uIHBsYXllck5HYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHNoaXBPYmogY29udGFpbnMgYWxsIHNoaXBzIGFuZCB3aWxsIGJlIGFjY2VzcyB0aHJvdWdoIHNlbGVjdGVkIHNoaXAgdG8gYmUgcGxhY2VkIG9uIHRoZSBwbGF5ZXJOR2FtZWJvYXJkIGFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwT2JqW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxhY2VtZW50IHBoYXNlIG92ZXInKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHNob3VsZCB0cmlnZ2VyIHRoZSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHdpdGggdGhlIGRhdGEteC95YXhpcyBhdHRyaWJ1dGVzIFxuICAgICAgICAgICAgICAgIG5ld0RpdjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQobmV3RGl2Mi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChuZXdEaXYyLmRhdGFzZXQueWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAvL2tlZXBzIGZyb20gYXR0YWNraW5nIG9wcG9uZW50IGJvYXJkIGR1cmluZyBzaGlwIHBsYWNlbWVudCBwaGFzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwU2VsZWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayhuZXdEaXYyLmRhdGFzZXQueGF4aXMsIG5ld0RpdjIuZGF0YXNldC55YXhpcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayBjcmVhdGVzIG5ldyBkaXZzIHdpdGggZGF0YS14L3ktYXhpcyB2YWx1ZXMgYW5kIGFwcGVuZHMgdGhlbSB0byBlYWNoIHBsYXllciBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBuZXdEaXYuZGF0YXNldC54YXhpcyA9IGAke2p9YDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuZGF0YXNldC55YXhpcyA9IGAke2l9YDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gJ2dhbWVib2FyZC1jZWxsJztcbiAgICAgICAgICAgICAgICBuZXdEaXYyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQtY2VsbCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wcG9uZW50LWdhbWVib2FyZCcpLmFwcGVuZENoaWxkKG5ld0RpdjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgd2luQ2hlY2sgfVxufSkoKTtcblxuY29uc3Qgc2hpcE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwQ29uc3RydWN0b3IsIGhpdCwgaXNTdW5rIH07XG59KSgpO1xuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4vL2JlbG93IDIgbGluZXMgaXMgZm9yIHRoZSBzYWtlIG9mIHRlc3Rpbmcgb25seVxubGV0IHRlc3RTaGlwID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IuYmF0dGxlc2hpcFxuZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSB7IHRlc3RTaGlwIH07XG5cbmdhbWVMb29wTW9kdWxlLnVzZXJJbnRlcmZhY2UoKTtcblxuXG4vL2xldCB0ZXN0RGl2ID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCd0ZXN0JywgJ3Rlc3QnKTtcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0ZXN0RGl2KTtcblxuLy90aGUgYmxvY2sgYmVsb3cgaXMgZm9yIGplc3QgdGVzdGluZ1xuLypsZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdO1xubGV0IGdhbWVCb2FyZFRlc3RTaGlwID0gZ2FtZWJvYXJkTW9kdWxlLmdhbWVib2FyZChzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLCBbMCwgMSwgMiwgM10sIFswXSlcbmRhdGFNb2R1bGUuZmxlZXRTdGF0dXMgPSBbZ2FtZUJvYXJkVGVzdFNoaXBdO1xuZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMSwgMCk7XG5nYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjaygzLCA0KTtcbmNvbnNvbGUubG9nKHBsYXllckFuZFBDTW9kdWxlLmdldFJhbmRvbUNoYXIoKSlcbmNvbnNvbGUubG9nKGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzWzBdLCBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1sxXSlcbmNvbnN0IG5ld0Jvb2wgPSBwbGF5ZXJBbmRQQ01vZHVsZS5wbGF5ZXIoKVxubW9kdWxlLmV4cG9ydHMgPSB7IGRhdGFNb2R1bGUsIHBsYXllckFuZFBDTW9kdWxlLCBkb21Nb2R1bGUsIGdhbWVMb29wTW9kdWxlLCBnYW1lYm9hcmRNb2R1bGUsIHNoaXBNb2R1bGUsIHN1bmtTaGlwLCBuZXdCb29sIH07ICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9