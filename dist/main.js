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
        for (let i = 0; i < xCoordinates.length; i++) {
            shipPlacement.xAxis.push(xCoordinates);
        }
        for (let i = 0; i < yCoordinates.length; i++) {
            shipPlacement.yAxis.push(yCoordinates);
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
                    let firstShipPlacementMarkerIteration = true;
                    let firstShipPlacementArrIteration = true;
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
                        //this block pushes the coordinates to the ship objects coordinates array
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {

                            if (dataModule.verticalShipRotation == false) {
                                xCoordinateArr.push(selectedXaxis + i);
                                if (firstShipPlacementArrIteration == true) {
                                    yCoordinateArr.push(selectedYaxis);
                                    firstShipPlacementArrIteration = false;
                                }
                            } else if (dataModule.verticalShipRotation == true) {
                                if (firstShipPlacementArrIteration == true) {
                                    xCoordinateArr.push(selectedXaxis);
                                    firstShipPlacementArrIteration = false;
                                }
                                yCoordinateArr.push(selectedYaxis + i);
                            }
                            if (i == dataModule.selectedShip.length - 1) {
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
                            if (firstShipPlacementMarkerIteration == true) {
                                selectedXaxis -= 1;
                                firstShipPlacementMarkerIteration = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNEdBQTRHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcblxcbiN0ZXN0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcm9zeWJyb3duO1xcbn1cXG5cXG4jdXNlci1pbnRlcmZhY2Uge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZ2FtZS10eXBlLXNlbGVjdGlvbi1idXR0b25zIHtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG5cXG4uZ2FtZWJvYXJkLWNlbGwge1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5cXG4jZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVxcblxcbiNvcHBvbmVudC1nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMzBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAzMHB4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5cXG4jdGVzdCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJvc3licm93bjtcXG59XFxuXFxuI3VzZXItaW50ZXJmYWNlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhbWUtdHlwZS1zZWxlY3Rpb24tYnV0dG9ucyB7XFxuICAgIG1hcmdpbjogMTBweDtcXG59XFxuXFxuXFxuLmdhbWVib2FyZC1jZWxsIHtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuXFxuI2dhbWVib2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAzMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDMwcHgpO1xcbn1cXG5cXG4jb3Bwb25lbnQtZ2FtZWJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDMwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMzBweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGRhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vdGhlIGdhbWVib2FyZCBhcnJheXMgd2lsbCBzdG9yZSB0aGUgc2hpcCBvYmplY3RzLCB0aGUgYXR0YWNrZWQgY29vcmRpbmF0ZXMga2VlcHMgdHJhY2sgb2Ygd2hhdCBwbGF5cyBlYWNoIHBsYXllciBoYXMgYWxyZWFkeSBtYWRlLlxuICAgIGxldCBwbGF5ZXIxR2FtZWJvYXJkID0gW107XG4gICAgbGV0IHBsYXllcjJHYW1lYm9hcmQgPSBbXTtcbiAgICBsZXQgcGxheWVyMUF0dGFja2VkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBsZXQgcGxheWVyMkF0dGFja2VkQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBsZXQgcHZwID0gZmFsc2U7XG4gICAgbGV0IHBsYXllcjFUdXJuID0gdHJ1ZTtcbiAgICAvL2JlY29tZXMgdHJ1ZSB3aGVuIHRoZSBwbGF5ZXIgaXMgcGxhY2luZyBhIHNoaXBcbiAgICBsZXQgc2hpcFNlbGVjdGlvbiA9IHRydWU7XG4gICAgLy9zaG91bGQgYmUgZXF1YWwgdG8gdGhlIHNlbGVjdGVkIHNoaXAgb2JqZWN0IGFuZCB1c2VkIHRvIGNyZWF0ZSB0aGUgcGxhY2VtZW50IHNoYWRvdyB3aGVuIHBsYWNpbmcgc2hpcHMgYnkgYWNjZXNpbmcgdGhlIHNoaXBzIGxlbmd0aCBwcm9wZXJ0eVxuICAgIGxldCBzZWxlY3RlZFNoaXAgPSB7fTtcbiAgICBsZXQgdmVydGljYWxTaGlwUm90YXRpb24gPSBmYWxzZTtcbiAgICAvL3RoaXMgb2JqZWN0IGtlZXBzIHRyYWNrIG9mIHRoZSBzaGlwcyB0aGF0IGhhdmUgYmVlbiBwbGFjZWQgZHVyaW5nIGEgcGxheWVycyB0dXJuIChyZXNldHMgYmFjayB0byBmYWxzZSBhdCBlbmQgb2YgdHVybilcbiAgICBsZXQgc2hpcFBsYWNlbWVudFRyYWNrZXIgPSB7XG4gICAgICAgIGNhcnJpZXI6IGZhbHNlLFxuICAgICAgICBiYXR0bGVzaGlwOiBmYWxzZSxcbiAgICAgICAgZGVzdHJveWVyOiBmYWxzZSxcbiAgICAgICAgc3VibWFyaW5lOiBmYWxzZSxcbiAgICAgICAgcGF0cm9sQm9hdDogZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4geyBwbGF5ZXIxR2FtZWJvYXJkLCBwbGF5ZXIyR2FtZWJvYXJkLCBwbGF5ZXIxQXR0YWNrZWRDb29yZGluYXRlcywgcGxheWVyMkF0dGFja2VkQ29vcmRpbmF0ZXMsIHBsYXllcjFUdXJuLCBwdnAsIHNoaXBTZWxlY3Rpb24sIHNlbGVjdGVkU2hpcCwgdmVydGljYWxTaGlwUm90YXRpb24sIHNoaXBQbGFjZW1lbnRUcmFja2VyIH07XG59KSgpO1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbmNvbnN0IHBsYXllckFuZFBDTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL3RoaXMgZnVuY3Rpb24gZGVhbHMgaGlkaW5nIHBsYXllciBzY3JlZW5zIGJldHdlZW4gZGV2aWNlIGhhbmRvZmZzIGFuZCBcbiAgICBmdW5jdGlvbiBwbGF5ZXJUdXJuSGFuZGxlcigpIHtcbiAgICAgICAgLy9pZiBpdHMgYSBwdnAgZ2FtZSB0aGlzIHN0YXRlbWVudCBibG9jayBzaG91bGQgaW5zdXJlIHRoZSBzY3JlZW4gaXMgaGlkZGVuIHdoZW4gcGFzc2luZyB0aGUgZGV2aWNlXG4gICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUgJiYgZGF0YU1vZHVsZS5wdnAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vaW1wbGVtZW50IGEgRE9NIGhhbmRsZXIgdG8gY292ZXIgdGhlIGdhbWUgYm9hcmQgd2hlbiB0aGUgRE9NIGFjdHVhbGx5IGdldHMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwbGF5ZXIgMVxcJ3MgdHVybiEgbm8gcGVla2luZy4nKVxuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vaW1wbGVtZW50IGEgRE9NIGhhbmRsZXIgdG8gY292ZXIgdGhlIGdhbWUgYm9hcmQgd2hlbiB0aGUgRE9NIGFjdHVhbGx5IGdldHMgaW1wbGVtZW50ZWRcbiAgICAgICAgICAgICAgICAvL2FsZXJ0KCdwbGF5ZXIgMlxcJ3MgdHVybiEgbm8gcGVla2luZy4nKVxuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyMVR1cm4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vYWxlcnQoJ3BsYXllciAxIHRha2UgYSBzaG90Jyk7XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9hbGVydCgncGNcXCdzIHR1cm4nKTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2RlcHJlY2F0ZWRcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21DaGFyKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgICAgIGxldCBjaGFyYWN0ZXJzID0gJ2FiY2RlZmdoaWonO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICpcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXJzLmxlbmd0aCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vY3JlYXRlIGFuIGFpIGZ1bmN0aW9uIHRoYXQgd2lsbCBkZXRlcm1pbmUgdGhlIGNvbXB1dGVyIHBsYXllcnMgYXR0YWNrc1xuICAgIGZ1bmN0aW9uIHBjUGxheSgpIHtcbiAgICAgICAgLy9nZXQgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDEwICh4IGF4aXMpXG4gICAgICAgIGxldCByYW5kb21YQ29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgLy9nZXQgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIDAgYW5kIDEwICh5IGF4aXMpXG4gICAgICAgIGxldCByYW5kb21ZQ29vcmRpbmF0ZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDExKTtcbiAgICAgICAgLy9wbHVnIHRoZSByYW5kb20geCBhbmQgeSBjb29yZGluYXRlcyBJRiB0aGV5IGRvIG5vdCBtYXRjaCBhIHBhaXIgb2YgY29vcmRpbmF0ZXMgaW4gdGhlIGRhdGFNb2R1bGUgdXNlZENvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1tpXSkge1xuICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayB3aWxsIHJlY3Vyc2l2ZWx5IGNhbGwgdGhlIHBjUGxheSBmdW5jdGlvbiB1bnRpbCB0aGUgcmFuZG9tQ29vcmRpbmF0ZXMgY29uc2lzdCBvZiBhIHBhaXIgdGhhdCBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gcGxheWVkXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzLnggPT0gcmFuZG9tWENvb3JkaW5hdGUgJiYgZGF0YU1vZHVsZS51c2VkQ29vcmRpbmF0ZXMueSA9PSByYW5kb21ZQ29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwY1BsYXkoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZSByYW5kb20gY29vcmRpbmF0ZSBwYWlycyBkbyBub3QgbWF0Y2ggYW55IGluIHRoZSB1c2VkQ29vcmRpbmF0ZXMgYXJyYXkgdGhleSBzaG91bGQgYmUgcGFzc2VkIHRocm91Z2ggdGhlIHJlY2VpdmUgYXR0YWNrIGZ1bmN0aW9uXG4gICAgICAgIGdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKHJhbmRvbVhDb29yZGluYXRlLCByYW5kb21ZQ29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB7IHBsYXllclR1cm5IYW5kbGVyLCBnZXRSYW5kb21DaGFyLCBwY1BsYXkgfVxufSkoKTtcbi8vY3JlYXRlIHRoZSBtYWluIGdhbWUgbG9vcCBhbmQgYSBtb2R1bGUgZm9yIERPTSBpbnRlcmFjdGlvbi4gXG5jb25zdCBnYW1lTG9vcE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy9kaXNwbGF5cyBvcGVuaW5nIFVJIGFuZCBjaG9pY2VzIGZvciBzdGFydGluZyB0aGUgZ2FtZVxuICAgIGZ1bmN0aW9uIHVzZXJJbnRlcmZhY2UoKSB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWludGVyZmFjZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIC8vVGhlIGdhbWUgbG9vcCBzaG91bGQgc2V0IHVwIGEgbmV3IGdhbWUgYnkgY3JlYXRpbmcgUGxheWVycyBhbmQgR2FtZWJvYXJkc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHZwLXNlbGVjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5wdnAgPSB0cnVlO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXItaW50ZXJmYWNlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIC8vY2FsbCB0aGUgZ2VuZXJhdGVCb2FyZCBmdW5jdGlvbiB0byBnZW5lcmF0ZSB0aGUgYm9hcmRcbiAgICAgICAgICAgIGdhbWVib2FyZE1vZHVsZS5nZW5lcmF0ZUJvYXJkKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWNvbnRhaW5lcicpLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWFyb3VuZCc7XG4gICAgICAgICAgICAvL21hbnVhbGx5IGNhbGxpbmcgdGhlIGNhcnJpZXIgb2JqZWN0IHRvIGJlIGRlZmF1bHQgc2VsZWN0aW9uIHVwb24gY2hvb3NpbmcgdGhlIGdhbWUgdHlwZSBhcyB3ZWxsIGFzIG1hbnVhbGx5IG1ha2luZyBpdHMgc2hpcFBsYWNlbWVudFRyYWNrZXIgdHJ1ZSB0byBwcmV2ZW50IHByb2JsZW1zIHdpdGggZm9yIGluIGxvb3BcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IoKS5jYXJyaWVyO1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlci5jYXJyaWVyID0gdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHZlLXNlbGVjdGlvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGF0YU1vZHVsZS5wdnAgPSBmYWxzZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyLWludGVyZmFjZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAvL2NhbGwgdGhlIGdlbmVyYXRlQm9hcmQgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgdGhlIGJvYXJkXG4gICAgICAgICAgICBnYW1lYm9hcmRNb2R1bGUuZ2VuZXJhdGVCb2FyZCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdzcGFjZS1hcm91bmQnO1xuICAgICAgICAgICAgLy9tYW51YWxseSBjYWxsaW5nIHRoZSBjYXJyaWVyIG9iamVjdCB0byBiZSBkZWZhdWx0IHNlbGVjdGlvbiB1cG9uIGNob29zaW5nIHRoZSBnYW1lIHR5cGUgYXMgd2VsbCBhcyBtYW51YWxseSBtYWtpbmcgaXRzIHNoaXBQbGFjZW1lbnRUcmFja2VyIHRydWUgdG8gcHJldmVudCBwcm9ibGVtcyB3aXRoIGZvciBpbiBsb29wXG4gICAgICAgICAgICBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yKCkuY2FycmllcjtcbiAgICAgICAgICAgIGRhdGFNb2R1bGUuc2hpcFBsYWNlbWVudFRyYWNrZXIuY2FycmllciA9IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdXNlckludGVyZmFjZSB9O1xufSkoKTtcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYWNlU2hpcCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0ge1xuICAgICAgICAgICAgc2hpcE9iajogc2hpcCxcbiAgICAgICAgICAgIHhBeGlzOiBbXSxcbiAgICAgICAgICAgIHlBeGlzOiBbXVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgeENvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzaGlwUGxhY2VtZW50LnhBeGlzLnB1c2goeENvb3JkaW5hdGVzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHlDb29yZGluYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc2hpcFBsYWNlbWVudC55QXhpcy5wdXNoKHlDb29yZGluYXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBQbGFjZW1lbnQ7XG4gICAgfVxuICAgIC8vcGxheWVyQm9hcmQgc2hvdWxkIGJlIHRoZSBwbGF5ZXJzIGJvYXJkIHRoYXQgaXMgYmVpbmcgYXR0YWNrZWQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMgc2hvdWxkIGJlIHRoZSBhdHRhY2tpbmcgcGxheWVycyB1c2VkIGNvb3JkaW5hdGVzLCB4L3ljb29yZGluYXRlcyBhcmUgdGhlIGNob3NlbiBjb29yZGluYXRlcyBieSB0aGUgYXR0YWNraW5nIHBsYXllclxuICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2socGxheWVyQm9hcmQsIHBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICAvL2NoZWNrcyBpZiB4Q29vcmRpbmF0ZSBoaXRzXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXMubGVuZ3RoOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueEF4aXNbal0gPT0geENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlc1RydWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9jaGVja3MgaWYgeUNvb3JkaW5hdGUgaGl0c1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnlBeGlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS55QXhpc1tqXSA9PSB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeUhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeUNvb3JkaW5hdGVzVHJ1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiBib3RoIGNvb3JkaW5hdGVzIGhpdHMgYXJlIHRydWUsIGNhbGwgaGl0IGZ1bmN0aW9uIG9uIGNvcnJlY3Qgc2hpcCBhbmQgaW5kZXggb2YgaXRzIGhpdHMgYXJyYXlcbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlICYmIHlDb29yZGluYXRlc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vd2hlbiBzY2FubmluZyB0aGUgbkF4aXMgYXJyYXlzIGZvciBlcXVhbGl0eSBjb21wYXJpc29uIHRvIHRoZSB4L3lDb29yZGluYXRlIHBhcmFtZXRlcnMgdXNlIHRoZSB0aGUgbkF4aXMgdHJ1dGh5IGluZGV4IHZhbHVlIG9mIHRoZSBsb25nZXN0IG5BeGlzIGFycmF5IGFzIHRoZSBpbmRleCBwYXJhbWV0ZXIgaW4gdGhlIGhpdCgpIGZ1bmN0aW9uIHRvIGluc3VyZSB0aGUgY29ycmVjdCBoaXQgaW5kZXggaXMgbWFya2VkIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllckJvYXJkW2ldLnhBeGlzLmxlbmd0aCA+IGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0ueUF4aXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5oaXRzLCB4SGl0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGxldCBoaXRDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXJBdHRhY2tlZENvb3JkaW5hdGVzLnB1c2goaGl0Q29vcmRpbmF0ZXMpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZFtpXS5zaGlwT2JqLmhpdHMsIHlIaXRJbmRleClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IGhpdHMhYClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9rZWVwIHRyYWNrIG9mIG1pc3NlZCBjb29yZGluYXRlcyBmb3IgRE9NIGRpc3BsYXlcbiAgICAgICAgICAgICAgICBsZXQgbWlzc2VkWFlDb29yZGluYXRlcyA9IHsgeDogeENvb3JkaW5hdGVzLCB5OiB5Q29vcmRpbmF0ZXMgfTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllckF0dGFja2VkQ29vcmRpbmF0ZXMucHVzaChtaXNzZWRYWUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAvL25vdGUgZm9yIHdoZW4gRE9NIGlzIGFkZGVkLCBhZGQgY29kZSBoZXJlIHRoYXQgbWFya3MgdGhlIGNvcnJlY3QgRE9NIGVsZW1lbnQgZm9yIGFuIGF0dGFjayB3aXRoIHgveUNvb3JkaW5hdGVzIHRoYXQgbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gbWlzc2VzIWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aW5DaGVjaygpIHtcbiAgICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUucGxheWVyQm9hcmRbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gZGF0YU1vZHVsZS5wbGF5ZXJCb2FyZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvL2FsZXJ0KCdmbGVldCBzdW5rIScpXG4gICAgICAgIH0gZWxzZSBpZiAoc3Vua1NoaXBzICE9IGRhdGFNb2R1bGUucGxheWVyQm9hcmQubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy9hbGVydCgnZ2V0IG1lIG15IGJyb3duIHBhbnRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vYSBnYW1lYm9hcmQgZ2VuZXJhdG9yIHRoYXQgZ2VuZXJhdGVzIGEgZGl2IGZvciBlYWNoIGNvb3JkaW5hdGUgd2l0aCBhIGRhdGEteGF4aXMgYW5kIGEgZGF0YS15YXhpcyB2YWx1ZSBmb3IgZWFjaCBkaXZcbiAgICAvL2V2ZW50IGxpc3RlbmVycyBmb3IgdGhlIHBsYXllcnMgZ2FtZWJvYXJkIHNob3VsZCBwbGFjZSBvYmplY3RzLCBsaXN0ZW5lcnMgZm9yIHRoZSBwbGF5ZXJzIHRhcmdldGluZyBib2FyZCBzaG91bGQgaGFuZGxlIGF0dGFjayBjb29yZGluYXRlcyBhbmQgc3RvcmFnZSBpbmZvXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgZ2FtZWJvYXJkQ29udGFpbmVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCAnZ2FtZWJvYXJkLWNvbnRhaW5lcicsICcnKTtcbiAgICAgICAgbGV0IGdhbWVCb2FyZCA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgJ2dhbWVib2FyZCcsICcnKTtcbiAgICAgICAgbGV0IG9wcG9uZW50Qm9hcmQgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdvcHBvbmVudC1nYW1lYm9hcmQnLCAnJyk7XG4gICAgICAgIGxldCBnYW1lYm9hcmRIZWFkZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ3AnLCAnZ2FtZWJvYXJkLWhlYWRlcicsICcnKTtcbiAgICAgICAgbGV0IG9wcG9uZW50R2FtZWJvYXJkSGVhZGVyID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdwJywgJ29wcG9uZW50LWdhbWVib2FyZC1oZWFkZXInLCAnJyk7XG4gICAgICAgIGxldCBnYW1lYm9hcmRIZWFkZXJDb250YWluZXIgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsICdnYW1lYm9hcmQtaGVhZGVyLWNvbnRhaW5lcicsICcnKTtcblxuICAgICAgICAvL3RoaXMgYmxvY2sgY3JlYXRlcyBnYW1lYm9hcmQgdGl0bGUgaGVhZGVycyBcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXJDb250YWluZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChnYW1lYm9hcmRIZWFkZXIpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZWJvYXJkLWhlYWRlci1jb250YWluZXInKS5hcHBlbmRDaGlsZChvcHBvbmVudEdhbWVib2FyZEhlYWRlcik7XG4gICAgICAgIGdhbWVib2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICdZb3VyIEZsZWV0JztcbiAgICAgICAgb3Bwb25lbnRHYW1lYm9hcmRIZWFkZXIudGV4dENvbnRlbnQgPSAnRW5lbXkgVGVycml0b3J5JztcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKGdhbWVib2FyZENvbnRhaW5lcik7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lYm9hcmQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZC1jb250YWluZXInKS5hcHBlbmRDaGlsZChvcHBvbmVudEJvYXJkKTtcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgICAgICAgLy90aGUgYmVsb3cgMiBmb3IgbG9vcCBpLGogdmFsdWVzIGFyZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZGl2cyBhbmQgZGF0YSBhdHRyaWJ1dGVzIGZvciB0aGUgZ2FtZWJvYXJkIGFzIHdlbGwgYXMgc2V0IGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIC8vMSBiYXNlZCBpbmRleGluZyBmb3IgbW9yZSBjbGFyaXR5IHdoZW4gd29ya2luZyB3aXRoIGdhbWVib2FyZCBjb29yZGluYXRlcyBhbmQgZGF0YSBhdHRyaWJ1dGVzXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTE7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICBsZXQgbmV3RGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbiAgICAgICAgICAgICAgICAvL3RoaXMgbW91c2VvdmVyIGV2ZW50IGxpc3RlbmVyIGFsbG93cyB0aGUgRE9NIHRvIGRpc3BsYXkgdG8gdXNlcnMgd2hldGhlciBvciBub3QgYSBzaGlwIHBsYWNlbWVudCBpcyBhcHByb3ByaWF0ZVxuICAgICAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwU2VsZWN0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQobmV3RGl2LmRhdGFzZXQueGF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC55YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy91c2UgYSBmb3IgbG9vcCB0byBpdGVyYXRlIGEgc2hpcC5sZW5ndGggbnVtYmVyIG9mIHRpbWVzIGZyb20gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgYW5kIGFkZGluZyArMSBwZXIgaXRlcmF0aW9uIHRvIHRoZSBkYXRhIGF0dHJpYnV0ZSBvZiB0aGUgZGlyZWN0aW9uIG1haW4gYXhpcyB0byBjcmVhdGUgYSBzZWxlY3Rpb24gc2hhZG93IHdpdGggYmFja2dyb3VuZCBjb2xvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgZm9yIGxvb3Agc2hvdWxkIGFsc28gcmVjb3JkIHRoZSB4L3lheGlzIGNvb3JkaW5hdGVzIHRvIHRyYWNrIHRoZSBsb2NhdGlvbiBvZiB0aGUgc2hpcCBzaG91bGQgaXQgYmUgcGxhY2VkIGluIGEgdmFsaWQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2tlZXBzIHRoZSBzaGlwU2hhZG93IGZyb20gc3RhcnRpbmcgKzEgZnJvbSB0aGUgbW91c2VvdmVyIHBvaW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFhheGlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXMgKz0gMX1cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpc31cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9wcyBkaXZzIHRoYXQgcmVwcmVzZW50IHBsYWNlZCBzaGlwcyBmcm9tIGhhdmluZyB0aGVpciBjb2xvciBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXN9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXMgKz0gMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9wcyBkaXZzIHRoYXQgcmVwcmVzZW50IHBsYWNlZCBzaGlwcyBmcm9tIGhhdmluZyB0aGVpciBjb2xvciBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibHVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvL3RoaXMgZXZlbnQgbGlzdGVuZXIgcmV2ZXJzZXMgdGhlIGNvbG9yaW5nIHRoYXQgdGhlIG1vdXNlb3ZlciBldmVudCBsaXN0ZW5lciBhcHBsaWVzIHdoZW4gdGhlIHNlbGVjdGVkIHNoaXAgaXMgbm90IHBsYWNlZCBhbmQgdGhlIG1vdXNlIGlzIG1vdmVkXG4gICAgICAgICAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQobmV3RGl2LmRhdGFzZXQueGF4aXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRZYXhpcyA9IHBhcnNlSW50KG5ld0Rpdi5kYXRhc2V0LnlheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0SXRlcmF0aW9uID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwU2VsZWN0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYWRkaW5nICsgMSB0byB0aGUgc2VsZWN0ZWRTaGlwLmxlbmd0aCBpbnN1cmVzIHRoYXQgdGhlcmUgd29udCBiZSBhIGxlZnQgb3ZlciBibHVlIHBsYWNlbWVudCBkaXYgYXMgdGhlIGJsdWUgc2hpcFNoYWRvdyBzaHJpbmtzIGJ5IDEgd2hlbiB0aGUgdXNlciBwbGFjZXMgYSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCArIDE7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcHVzaCB0aGUgZGl2cyBjdXJyZW50IGNvbG9ycyB0byBwcmV2aW91c0NvbG9ycyBhcnJheSBpbiBjYXNlIHRoZSB1c2VyIGRlY2lkZXMgdG8gcGxhY2UgYSBzaGlwLCB0aGUgZGl2cyBzaG91bGQga2VlcCB0aGUgZ3JlZW4gcGxhY2VtZW50IGNvbG9yIGFzIG9wcG9zZWQgdG8gdHVybmluZyBiYWNrIHRvIHRoZSBib2FyZCBjb2xvciBibGFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8va2VlcHMgdGhlIHNoaXBTaGFkb3cgZnJvbSBsZWF2aW5nIDEgYmxvY2sgYXQgdGhlIGZ1cnRoZXN0IHBvaW50IGFsb25nIHRoZSBtYWluIGF4aXMgd2hlbiBhIHNoaXAgaGFzIGJlZW4gcGxhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFhheGlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzaGlwU2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEteGF4aXM9XCIke3NlbGVjdGVkWGF4aXMgKz0gMX1cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpc31cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9zdG9wcyBkaXZzIHRoYXQgcmVwcmVzZW50IHBsYWNlZCBzaGlwcyBmcm9tIGhhdmluZyB0aGVpciBjb2xvciBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSAnZ3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwU2hhZG93LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdibGFjayc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhTW9kdWxlLnZlcnRpY2FsU2hpcFJvdGF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzfVwiXVtkYXRhLXlheGlzPVwiJHtzZWxlY3RlZFlheGlzICs9IDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc3RvcHMgZGl2cyB0aGF0IHJlcHJlc2VudCBwbGFjZWQgc2hpcHMgZnJvbSBoYXZpbmcgdGhlaXIgY29sb3IgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gJ2dyZWVuJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFNoYWRvdy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmxhY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy90aGlzIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHNob3VsZCBiZSByZXNwb25zaWJsZSBmb3IgcGxhY2luZyBzaGlwcyBpbiB0aGUgRE9NIGFuZCByZWNvcmRpbmcgdGhlaXIgY29vcmRpbmF0ZXMgdG8gdGhlIHJlc3BlY3RpdmUgZ2FtZWJvYXJkIG9iamVjdFxuICAgICAgICAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWGF4aXMgPSBwYXJzZUludChuZXdEaXYuZGF0YXNldC54YXhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFlheGlzID0gcGFyc2VJbnQobmV3RGl2LmRhdGFzZXQueWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcE9iaiA9IHNoaXBNb2R1bGUuc2hpcENvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdFNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RTaGlwUGxhY2VtZW50QXJySXRlcmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHhDb29yZGluYXRlQXJyID0gW107XG4gICAgICAgICAgICAgICAgICAgIGxldCB5Q29vcmRpbmF0ZUFyciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwU2VsZWN0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY2hlY2tzIGZvciBpbnZhbGlkIHBsYWNlbWVudHMgb24gdGhlIHhBeGlzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRYYXhpcyArIGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aCA+IDExICYmIGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFhheGlzLCBzZWxlY3RlZFlheGlzLCBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdpbnZhbGlkIHBsYWNlbWVudCBvbiB0aGUgWCBBeGlzIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFsdWVzIGdyZWF0ZXIgdGhhbiAxMSBvbiB0aGUgeUF4aXMgYXJlIG9ubHkgcG9zc2libGUgd2hlbiB2ZXJ0aWNhbCBzaGlwIHJvdGF0aW9uIGlzIGFjdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3RlZFlheGlzICsgZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoID4gMTEgJiYgZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KCdpbnZhbGlkIHBsYWNlbWVudCBvbiB0aGUgWSBBeGlzIScpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMgYmxvY2sgcHVzaGVzIHRoZSBjb29yZGluYXRlcyB0byB0aGUgc2hpcCBvYmplY3RzIGNvb3JkaW5hdGVzIGFycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWGF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0U2hpcFBsYWNlbWVudEFyckl0ZXJhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RTaGlwUGxhY2VtZW50QXJySXRlcmF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFNb2R1bGUudmVydGljYWxTaGlwUm90YXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3RTaGlwUGxhY2VtZW50QXJySXRlcmF0aW9uID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlQXJyLnB1c2goc2VsZWN0ZWRYYXhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdFNoaXBQbGFjZW1lbnRBcnJJdGVyYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZUFyci5wdXNoKHNlbGVjdGVkWWF4aXMgKyBpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdTaGlwUGxhY2VtZW50ID0gcGxhY2VTaGlwKGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLCB4Q29vcmRpbmF0ZUFyciwgeUNvb3JkaW5hdGVBcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZC5wdXNoKG5ld1NoaXBQbGFjZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIyR2FtZWJvYXJkLnB1c2gobmV3U2hpcFBsYWNlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUucGxheWVyMUdhbWVib2FyZClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayBtYXJrcyB0aGUgZGl2cyB3aGVyZSB0aGUgc2hpcCBoYXMgYmVlbiBwbGFjZWQgXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuc2VsZWN0ZWRTaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9rZWVwcyB0aGUgc2hpcFBsYWNlbWVudCBmcm9tIHN0YXJ0aW5nICsxIGZyb20gdGhlIG1vdXNlb3ZlciBwb2ludFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdFNoaXBQbGFjZW1lbnRNYXJrZXJJdGVyYXRpb24gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFhheGlzIC09IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0U2hpcFBsYWNlbWVudE1hcmtlckl0ZXJhdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2hpcFBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXhheGlzPVwiJHtzZWxlY3RlZFhheGlzICs9IDF9XCJdW2RhdGEteWF4aXM9XCIke3NlbGVjdGVkWWF4aXN9XCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hpcFBsYWNlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnZ3JlZW4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YU1vZHVsZS52ZXJ0aWNhbFNoaXBSb3RhdGlvbiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBQbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS14YXhpcz1cIiR7c2VsZWN0ZWRYYXhpc31cIl1bZGF0YS15YXhpcz1cIiR7c2VsZWN0ZWRZYXhpcyArPSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwUGxhY2VtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdncmVlbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGUgcmVtYWluaW5nIGJsb2NrcyBoYW5kbGUgc2hpcCBwbGFjZW1lbnQgbG9naWNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmVzZXRzIHRoZSBzaGlwUGxhY2VtZW50VHJhY2tlciBwcm9wZXJ0eSB2YWx1ZXMgdG8gZmFsc2Ugc28gaXQgY2FuIGJlIHVzZWQgZm9yIHRoZSBuZXh0IHBsYXllciBzaGlwIHBsYWNlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyLnBhdHJvbEJvYXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vYSBmYWxzZSBwcm9wZXJ0eSBpbiB0aGUgc2hpcFBsYWNlbWVudFRyYWNrZXIgbWVhbnMgdGhlIHNoaXAgaGFzbnQgYmVlbiBwbGFjZWQgYW5kIHdpbGwgYmVjb21lIHRoZSBkYXRhTW9kdWxlLnNlbGVjdGVkU2hpcCBmb3IgcGxhY2VtZW50IG9uIHBsYXllck5HYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gZGF0YU1vZHVsZS5zaGlwUGxhY2VtZW50VHJhY2tlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnNoaXBQbGFjZW1lbnRUcmFja2VyW3Byb3BlcnR5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhlIHNoaXBPYmogY29udGFpbnMgYWxsIHNoaXBzIGFuZCB3aWxsIGJlIGFjY2VzcyB0aHJvdWdoIHNlbGVjdGVkIHNoaXAgdG8gYmUgcGxhY2VkIG9uIHRoZSBwbGF5ZXJOR2FtZWJvYXJkIGFyclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSBzaGlwT2JqW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgncGxhY2VtZW50IHBoYXNlIG92ZXInKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy90aGlzIGNsaWNrIGV2ZW50IGxpc3RlbmVyIHNob3VsZCB0cmlnZ2VyIHRoZSByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uIHdpdGggdGhlIGRhdGEteC95YXhpcyBhdHRyaWJ1dGVzIFxuICAgICAgICAgICAgICAgIG5ld0RpdjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZFhheGlzID0gcGFyc2VJbnQobmV3RGl2Mi5kYXRhc2V0LnhheGlzKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkWWF4aXMgPSBwYXJzZUludChuZXdEaXYyLmRhdGFzZXQueWF4aXMpO1xuICAgICAgICAgICAgICAgICAgICAvL2tlZXBzIGZyb20gYXR0YWNraW5nIG9wcG9uZW50IGJvYXJkIGR1cmluZyBzaGlwIHBsYWNlbWVudCBwaGFzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5zaGlwU2VsZWN0aW9uID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayhuZXdEaXYyLmRhdGFzZXQueGF4aXMsIG5ld0RpdjIuZGF0YXNldC55YXhpcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vdGhpcyBibG9jayBjcmVhdGVzIG5ldyBkaXZzIHdpdGggZGF0YS14L3ktYXhpcyB2YWx1ZXMgYW5kIGFwcGVuZHMgdGhlbSB0byBlYWNoIHBsYXllciBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICBuZXdEaXYuZGF0YXNldC54YXhpcyA9IGAke2p9YDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuZGF0YXNldC55YXhpcyA9IGAke2l9YDtcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NOYW1lID0gJ2dhbWVib2FyZC1jZWxsJztcbiAgICAgICAgICAgICAgICBuZXdEaXYyLmNsYXNzTmFtZSA9ICdnYW1lYm9hcmQtY2VsbCc7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVib2FyZCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29wcG9uZW50LWdhbWVib2FyZCcpLmFwcGVuZENoaWxkKG5ld0RpdjIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQm9hcmQsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgd2luQ2hlY2sgfVxufSkoKTtcblxuY29uc3Qgc2hpcE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwQ29uc3RydWN0b3IsIGhpdCwgaXNTdW5rIH07XG59KSgpO1xuXG4vL35+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+fn5+flxuXG4vL2JlbG93IDIgbGluZXMgaXMgZm9yIHRoZSBzYWtlIG9mIHRlc3Rpbmcgb25seVxubGV0IHRlc3RTaGlwID0gc2hpcE1vZHVsZS5zaGlwQ29uc3RydWN0b3IuYmF0dGxlc2hpcFxuZGF0YU1vZHVsZS5zZWxlY3RlZFNoaXAgPSB7IHRlc3RTaGlwIH07XG5cbmdhbWVMb29wTW9kdWxlLnVzZXJJbnRlcmZhY2UoKTtcblxuXG4vL2xldCB0ZXN0RGl2ID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCd0ZXN0JywgJ3Rlc3QnKTtcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0ZXN0RGl2KTtcblxuLy90aGUgYmxvY2sgYmVsb3cgaXMgZm9yIGplc3QgdGVzdGluZ1xuLypsZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdO1xubGV0IGdhbWVCb2FyZFRlc3RTaGlwID0gZ2FtZWJvYXJkTW9kdWxlLmdhbWVib2FyZChzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLCBbMCwgMSwgMiwgM10sIFswXSlcbmRhdGFNb2R1bGUuZmxlZXRTdGF0dXMgPSBbZ2FtZUJvYXJkVGVzdFNoaXBdO1xuZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMSwgMCk7XG5nYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjaygzLCA0KTtcbmNvbnNvbGUubG9nKHBsYXllckFuZFBDTW9kdWxlLmdldFJhbmRvbUNoYXIoKSlcbmNvbnNvbGUubG9nKGRhdGFNb2R1bGUudXNlZENvb3JkaW5hdGVzWzBdLCBkYXRhTW9kdWxlLnVzZWRDb29yZGluYXRlc1sxXSlcbmNvbnN0IG5ld0Jvb2wgPSBwbGF5ZXJBbmRQQ01vZHVsZS5wbGF5ZXIoKVxubW9kdWxlLmV4cG9ydHMgPSB7IGRhdGFNb2R1bGUsIHBsYXllckFuZFBDTW9kdWxlLCBkb21Nb2R1bGUsIGdhbWVMb29wTW9kdWxlLCBnYW1lYm9hcmRNb2R1bGUsIHNoaXBNb2R1bGUsIHN1bmtTaGlwLCBuZXdCb29sIH07ICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9