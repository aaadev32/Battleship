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
        for (let i = 0; i < shipHealthArr?.length; i++) {
            if (i == index) {
                shipHealthArr[i] = 1;
            }
        }
        return shipHealthArr;
    }

    function isSunk(ship) {

        let damage = 0;
        for (let i = 0; i < ship?.hits; i++) {
            if (ship.hits[i] == 1) {
                damage++;

            }
        }
        if (damage == ship?.length) {
            return true;
        } else {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQzs7QUFFQTtBQUNBLGdFQUFnRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtQkFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhZGQgPSAoYSwgYikgPT4gYSArIGI7XG4vL3RoaXMgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IG1ha2UgaXQgZWFzaWVyIHRvIGJ1aWxkIERPTSBFbGVtZW50c1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVFbGVtZW50SWRDbGFzcyB9O1xufSkoKTtcblxuLy9ET00gY3JlYXRpb24gZm9yIHRoZSBpbml0aWFsIGdhbWVib2FyZFxuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcblxuICAgIC8vY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYW4gMTF4MTEgYm9hcmQgKGJhdHRlbHNoaXAgc3RhbmRhcmQpIFxuICAgIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBncmlkQXJlYSA9IDEyMTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRBcmVhOyBpKyspIHtcbiAgICAgICAgICAgIC8vcHJpbnQgNjUtNzQgKEEtSikgYXNjaWkgY29kZXMgdG8gY2hhcnMgd2l0aCBTdHJpbmcuZnJvbUNoYXJDb2RlKCkgb24gZ3JpZCBzcXVhcmVzIDItMTFcblxuICAgICAgICAgICAgLy9ldmVyeSBpdGVyYXRpb24gdGhhdCBpcyBhIDAgbW9kdWx1cyBvZiAxMiBzaG91bGQgcHJpbnQgMSBhbmQgKyAxIHBlciB0aGUgYW1vdW50IG9mIGNoaWxkcmVuIGRpdmlkZWQgYnkgMTIgZXhjZXB0IG9uIHRoZSBmaXJzdCBpdGVyYXRpb247XG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBncmlkLWlkLSR7aX1gLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyPy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzaGlwSGVhbHRoQXJyW2ldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcEhlYWx0aEFycjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoc2hpcCkge1xuXG4gICAgICAgIGxldCBkYW1hZ2UgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXA/LmhpdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0c1tpXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgZGFtYWdlKys7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGFtYWdlID09IHNoaXA/Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuXG4vL2xldCB0ZXN0RGl2ID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCd0ZXN0JywgJ3Rlc3QnKTtcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0ZXN0RGl2KTtcbmxldCBzdW5rU2hpcCA9IHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXAuaGl0cztcbnN1bmtTaGlwLmhpdHMgPSBbMSwgMSwgMSwgMV1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZG9tTW9kdWxlLCBnYW1lYm9hcmRNb2R1bGUsIHNoaXBNb2R1bGUsIGFkZCwgc3Vua1NoaXAgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==