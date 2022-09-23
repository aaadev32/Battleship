/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
//import './style.css';


//this module contains functions that make it easier to build DOM Elements
const domModule = (() => {
    const createElementIdClass = function (element, id, classN) {
        let newElement = document.createElement(element);
        newElement.id = id
        newElement.className = classN;
        return newElement;
    }

    return { createElementIdClass };
})();

//DOM creation for the initial gameboard
const gameboardModule = (() => {

    //create a function that generates an 11x11 board (battelship standard) 
    const generateBoard = function () {
        let gridArea = 121;
        for (i = 0; i < gridArea; i++) {
            //print 65-74 (A-J) ascii codes to chars with String.fromCharCode() on grid squares 2-11

            //every iteration that is a 0 modulus of 12 should print 1 and + 1 per the amount of children divided by 12 except on the first iteration;
            let newDiv = createElementIdClass('div', `grid-id-${i}`, 'gameboard');
            document.getElementById('content').appendChild(newDiv);
        }
    }
})();

const shipModule = (() => {

    //these absolute object paths may be more useful in later code, keeping this block here for now
    /*  const carrier = shipModule.ship().carrier;
     const battleship = shipModule.ship().battleship;
     const destroyer = shipModule.ship().destroyer;
     const submarine = shipModule.ship().submarine;
     const patrolBoat = shipModule.ship().patrolBoat; */
    const ship = function () {

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



        return { carrier, battleship, destroyer, submarine, patrolBoat, hit };

    }

    const hit = function (shipHealthArr, index) {
        for (let i = 0; i < shipHealthArr.length; i++) {
            if (i == index) {
                shipHealthArr[i] = 1;
            }
        }
        return shipHealthArr
    }

    const isSunk = function (ship) {
        let damage = 0;
        for (let i = 0; i < ship.hits; i++) {
            if (ship.hits[i] == 1) {
                damage++;

            }
        }
        if (damage == ship.length) {
            return true;
        } else {
            return false;
        }
    }
    return { ship, hit, isSunk };
})();
console.log(shipModule.hit(shipModule.ship().carrier.hits, 4));
console.log(shipModule.isSunk(shipModule.ship().carrier))
const testShip = shipModule.ship().carrier;
const sunkTestShip = testShip.sunk = true;

//module.export = { domModule, gameboardModule, shipModule };
module.exports = (function () {
    shipModule.ship(), shipModule.hit(), shipModule.isSunk(), domModule.createElementIdClass()
})(); 
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDOztBQUVBO0FBQ0EsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixlQUFlO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBLENBQUMsSyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuLy90aGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdGhhdCBtYWtlIGl0IGVhc2llciB0byBidWlsZCBET00gRWxlbWVudHNcbmNvbnN0IGRvbU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWxlbWVudElkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWQsIGNsYXNzTikge1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIG5ld0VsZW1lbnQuaWQgPSBpZFxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbi8vRE9NIGNyZWF0aW9uIGZvciB0aGUgaW5pdGlhbCBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICAvL2NyZWF0ZSBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGFuIDExeDExIGJvYXJkIChiYXR0ZWxzaGlwIHN0YW5kYXJkKSBcbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZ3JpZEFyZWEgPSAxMjE7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkQXJlYTsgaSsrKSB7XG4gICAgICAgICAgICAvL3ByaW50IDY1LTc0IChBLUopIGFzY2lpIGNvZGVzIHRvIGNoYXJzIHdpdGggU3RyaW5nLmZyb21DaGFyQ29kZSgpIG9uIGdyaWQgc3F1YXJlcyAyLTExXG5cbiAgICAgICAgICAgIC8vZXZlcnkgaXRlcmF0aW9uIHRoYXQgaXMgYSAwIG1vZHVsdXMgb2YgMTIgc2hvdWxkIHByaW50IDEgYW5kICsgMSBwZXIgdGhlIGFtb3VudCBvZiBjaGlsZHJlbiBkaXZpZGVkIGJ5IDEyIGV4Y2VwdCBvbiB0aGUgZmlyc3QgaXRlcmF0aW9uO1xuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCBgZ3JpZC1pZC0ke2l9YCwgJ2dhbWVib2FyZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxufSkoKTtcblxuY29uc3Qgc2hpcE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICAvL3RoZXNlIGFic29sdXRlIG9iamVjdCBwYXRocyBtYXkgYmUgbW9yZSB1c2VmdWwgaW4gbGF0ZXIgY29kZSwga2VlcGluZyB0aGlzIGJsb2NrIGhlcmUgZm9yIG5vd1xuICAgIC8qICBjb25zdCBjYXJyaWVyID0gc2hpcE1vZHVsZS5zaGlwKCkuY2FycmllcjtcbiAgICAgY29uc3QgYmF0dGxlc2hpcCA9IHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXA7XG4gICAgIGNvbnN0IGRlc3Ryb3llciA9IHNoaXBNb2R1bGUuc2hpcCgpLmRlc3Ryb3llcjtcbiAgICAgY29uc3Qgc3VibWFyaW5lID0gc2hpcE1vZHVsZS5zaGlwKCkuc3VibWFyaW5lO1xuICAgICBjb25zdCBwYXRyb2xCb2F0ID0gc2hpcE1vZHVsZS5zaGlwKCkucGF0cm9sQm9hdDsgKi9cbiAgICBjb25zdCBzaGlwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBiYXR0bGVzaGlwID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVyID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0cm9sQm9hdCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICByZXR1cm4geyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCwgaGl0IH07XG5cbiAgICB9XG5cbiAgICBjb25zdCBoaXQgPSBmdW5jdGlvbiAoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHNoaXBIZWFsdGhBcnJbaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwSGVhbHRoQXJyXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKHNoaXApIHtcbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcCwgaGl0LCBpc1N1bmsgfTtcbn0pKCk7XG5jb25zb2xlLmxvZyhzaGlwTW9kdWxlLmhpdChzaGlwTW9kdWxlLnNoaXAoKS5jYXJyaWVyLmhpdHMsIDQpKTtcbmNvbnNvbGUubG9nKHNoaXBNb2R1bGUuaXNTdW5rKHNoaXBNb2R1bGUuc2hpcCgpLmNhcnJpZXIpKVxuY29uc3QgdGVzdFNoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5jYXJyaWVyO1xuY29uc3Qgc3Vua1Rlc3RTaGlwID0gdGVzdFNoaXAuc3VuayA9IHRydWU7XG5cbi8vbW9kdWxlLmV4cG9ydCA9IHsgZG9tTW9kdWxlLCBnYW1lYm9hcmRNb2R1bGUsIHNoaXBNb2R1bGUgfTtcbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBzaGlwTW9kdWxlLnNoaXAoKSwgc2hpcE1vZHVsZS5oaXQoKSwgc2hpcE1vZHVsZS5pc1N1bmsoKSwgZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKClcbn0pKCk7ICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==