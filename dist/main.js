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

const add = (a, b) => a + b;
//this module contains functions that make it easier to build DOM Elements
const dataModule = (() => {
    //add each ship into this array after placement, this is crucial to determining hits and misses with receiveAttack function
    let shipPlacementArr = [];
    //ship status should be an object set by the return of ship() as well as any further modifications to it.
    let shipStatus = undefined;

    return { shipPlacementArr, shipStatus };
})();
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


    const gameboard = function (ship, xCoordinates, yCoordinates) {

        let placeShip = {
            shipObj: ship,
            xAxis: xCoordinates,
            yAxis: yCoordinates
        }

        function receiveAttack(xCoordinates, yCoordinates) {
            //find if x and y coords resulted in a hit or miss, if its a hit call the hit() function on the appropriate ship object, if miss record it in the DOM
            //use a for loop to loop through shipplacementarr then a for in loop to go through each object and compare x and y coordinates


        }
        return placeShip
    }
    //WiP
    const generateBoard = function () {
        let gridArea = 100;
        for (i = 0; i < gridArea; i++) {

            let newDiv = createElementIdClass('div', `grid-id-${i}`, 'gameboard');
            document.getElementById('content').appendChild(newDiv);
        }
    }
    return { generateBoard, gameboard }
})();

const shipModule = (() => {

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

    return { ship, hit, isSunk };
})();

//let testDiv = domModule.createElementIdClass('div','test', 'test');
//document.getElementById('content').appendChild(testDiv);
let sunkShip = shipModule.ship().battleship.hits;
sunkShip.hits = [1, 1, 1, 1]

let gameBoardTestShip = gameboardModule.gameboard(shipModule.ship().battleship, [0, 1, 2, 3], 0)

console.log(gameBoardTestShip)
module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYzs7QUFFbEMsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFkZCA9IChhLCBiKSA9PiBhICsgYjtcbi8vdGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRoYXQgbWFrZSBpdCBlYXNpZXIgdG8gYnVpbGQgRE9NIEVsZW1lbnRzXG5jb25zdCBkYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2FkZCBlYWNoIHNoaXAgaW50byB0aGlzIGFycmF5IGFmdGVyIHBsYWNlbWVudCwgdGhpcyBpcyBjcnVjaWFsIHRvIGRldGVybWluaW5nIGhpdHMgYW5kIG1pc3NlcyB3aXRoIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICBsZXQgc2hpcFBsYWNlbWVudEFyciA9IFtdO1xuICAgIC8vc2hpcCBzdGF0dXMgc2hvdWxkIGJlIGFuIG9iamVjdCBzZXQgYnkgdGhlIHJldHVybiBvZiBzaGlwKCkgYXMgd2VsbCBhcyBhbnkgZnVydGhlciBtb2RpZmljYXRpb25zIHRvIGl0LlxuICAgIGxldCBzaGlwU3RhdHVzID0gdW5kZWZpbmVkO1xuXG4gICAgcmV0dXJuIHsgc2hpcFBsYWNlbWVudEFyciwgc2hpcFN0YXR1cyB9O1xufSkoKTtcbmNvbnN0IGRvbU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWxlbWVudElkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWQsIGNsYXNzTikge1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIG5ld0VsZW1lbnQuaWQgPSBpZFxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbi8vRE9NIGNyZWF0aW9uIGZvciB0aGUgaW5pdGlhbCBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG5cblxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBwbGFjZVNoaXAgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeENvb3JkaW5hdGVzLCB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIC8vZmluZCBpZiB4IGFuZCB5IGNvb3JkcyByZXN1bHRlZCBpbiBhIGhpdCBvciBtaXNzLCBpZiBpdHMgYSBoaXQgY2FsbCB0aGUgaGl0KCkgZnVuY3Rpb24gb24gdGhlIGFwcHJvcHJpYXRlIHNoaXAgb2JqZWN0LCBpZiBtaXNzIHJlY29yZCBpdCBpbiB0aGUgRE9NXG4gICAgICAgICAgICAvL3VzZSBhIGZvciBsb29wIHRvIGxvb3AgdGhyb3VnaCBzaGlwcGxhY2VtZW50YXJyIHRoZW4gYSBmb3IgaW4gbG9vcCB0byBnbyB0aHJvdWdoIGVhY2ggb2JqZWN0IGFuZCBjb21wYXJlIHggYW5kIHkgY29vcmRpbmF0ZXNcblxuXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBsYWNlU2hpcFxuICAgIH1cbiAgICAvL1dpUFxuICAgIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBncmlkQXJlYSA9IDEwMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRBcmVhOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCBgZ3JpZC1pZC0ke2l9YCwgJ2dhbWVib2FyZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQm9hcmQsIGdhbWVib2FyZCB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5sZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdXG5cbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCAwKVxuXG5jb25zb2xlLmxvZyhnYW1lQm9hcmRUZXN0U2hpcClcbm1vZHVsZS5leHBvcnRzID0geyBkYXRhTW9kdWxlLCBkb21Nb2R1bGUsIGdhbWVib2FyZE1vZHVsZSwgc2hpcE1vZHVsZSwgYWRkLCBzdW5rU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9