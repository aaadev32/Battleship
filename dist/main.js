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
    const gameboard = function (ship, xCoordinate, yCoordinate) {

        placedShip = {
            shipType: ship,
            xAxis: xCoordinate,
            yAxis: yCoordinate
        }
        function receiveAttack(xCoordinate, yCoordinate) {
            //find if x and y coords resulted in a hit or miss, if its a hit call the hit() function on the appropriate ship object, if miss record it in the DOM
        }
        return placedShip
    }
    //WiP
    const generateBoard = function () {
        let gridArea = 100;
        for (i = 0; i < gridArea; i++) {

            let newDiv = createElementIdClass('div', `grid-id-${i}`, 'gameboard');
            document.getElementById('content').appendChild(newDiv);
        }
    }
    return { generateBoard }
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

module.exports = { domModule, gameboardModule, shipModule, add, sunkShip };

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7O0FBRWxDLGdFQUFnRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xuLy90aGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdGhhdCBtYWtlIGl0IGVhc2llciB0byBidWlsZCBET00gRWxlbWVudHNcbmNvbnN0IGRvbU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWxlbWVudElkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWQsIGNsYXNzTikge1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIG5ld0VsZW1lbnQuaWQgPSBpZFxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbi8vRE9NIGNyZWF0aW9uIGZvciB0aGUgaW5pdGlhbCBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlLCB5Q29vcmRpbmF0ZSkge1xuXG4gICAgICAgIHBsYWNlZFNoaXAgPSB7XG4gICAgICAgICAgICBzaGlwVHlwZTogc2hpcCxcbiAgICAgICAgICAgIHhBeGlzOiB4Q29vcmRpbmF0ZSxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIHJlY2VpdmVBdHRhY2soeENvb3JkaW5hdGUsIHlDb29yZGluYXRlKSB7XG4gICAgICAgICAgICAvL2ZpbmQgaWYgeCBhbmQgeSBjb29yZHMgcmVzdWx0ZWQgaW4gYSBoaXQgb3IgbWlzcywgaWYgaXRzIGEgaGl0IGNhbGwgdGhlIGhpdCgpIGZ1bmN0aW9uIG9uIHRoZSBhcHByb3ByaWF0ZSBzaGlwIG9iamVjdCwgaWYgbWlzcyByZWNvcmQgaXQgaW4gdGhlIERPTVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwbGFjZWRTaGlwXG4gICAgfVxuICAgIC8vV2lQXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGdyaWRBcmVhID0gMTAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZEFyZWE7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBncmlkLWlkLSR7aX1gLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVCb2FyZCB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5sZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdXG5cbm1vZHVsZS5leHBvcnRzID0geyBkb21Nb2R1bGUsIGdhbWVib2FyZE1vZHVsZSwgc2hpcE1vZHVsZSwgYWRkLCBzdW5rU2hpcCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9