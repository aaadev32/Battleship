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
    //add each ship into this object after placement, this is crucial to determining hits and misses with receiveAttack function
    let fleetStatus = {};

    return { fleetStatus };
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

        let shipPlacement = {
            shipObj: ship,
            xAxis: xCoordinates,
            yAxis: yCoordinates
        }
        return shipPlacement;
    }

    function receiveAttack(shipName, xCoordinates, yCoordinates) {


        //the first for loop iterates through the ship storage array, the nested for in loop compares the properties
        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            //when the correct ship object has been selected the xAxis and yAxis positions for below loops are checking against the x/yCoordinate attack parameters of this function
            for (const property in dataModule.fleetStatus[i]) {
                if (property == shipName) {
                    for (i = 0; i < dataModule.fleetStatus.xAxis.length; i++) {
                        if (dataModule.fleetStatus.xAxis[i] == xCoordinates) {
                            shipModule.hit(dataModule.fleetStatus[i].hits)
                            let hit = true;
                        }
                    }

                    for (i = 0; i < dataModule.fleetStatus.yAxis.length; i++) {
                        if (dataModule.fleetStatus.yAxis[i] == yCoordinates) {
                            shipModule.hit(dataModule.fleetStatus[i].hits)
                            let hit = true;
                        }
                    }
                }
            }
        }

        if (hit == true) {
            //implement code to mark the DOM element where the attack missed when done with jest testing
            return true;//alert(`attack ${xCoordinates}, ${yCoordinates} hits!`)
        } else {
            return false;//alert(`attack ${xCoordinates}, ${yCoordinates} misses!`)
        }
    }
    //WiP
    const generateBoard = function () {
        let gridArea = 100;
        for (i = 0; i < gridArea; i++) {

            let newDiv = createElementIdClass('div', `grid-id-${i}`, 'gameboard');
            document.getElementById('content').appendChild(newDiv);
        }
    }
    return { generateBoard, gameboard, receiveAttack }
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
dataModule.fleetStatus = { gameBoardTestShip };

module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUNBQXlDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHlDQUF5QztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCLGFBQWEsSUFBSSxjQUFjO0FBQ3pFLFVBQVU7QUFDVix5QkFBeUIsa0JBQWtCLGFBQWEsSUFBSSxjQUFjO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYzs7QUFFbEMsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjs7QUFFM0IsbUJBQW1CLG9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xuLy90aGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdGhhdCBtYWtlIGl0IGVhc2llciB0byBidWlsZCBET00gRWxlbWVudHNcbmNvbnN0IGRhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vYWRkIGVhY2ggc2hpcCBpbnRvIHRoaXMgb2JqZWN0IGFmdGVyIHBsYWNlbWVudCwgdGhpcyBpcyBjcnVjaWFsIHRvIGRldGVybWluaW5nIGhpdHMgYW5kIG1pc3NlcyB3aXRoIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICBsZXQgZmxlZXRTdGF0dXMgPSB7fTtcblxuICAgIHJldHVybiB7IGZsZWV0U3RhdHVzIH07XG59KSgpO1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVFbGVtZW50SWRDbGFzcyB9O1xufSkoKTtcblxuLy9ET00gY3JlYXRpb24gZm9yIHRoZSBpbml0aWFsIGdhbWVib2FyZFxuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcblxuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHNoaXBOYW1lLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG5cbiAgICAgICAgLy90aGUgZmlyc3QgZm9yIGxvb3AgaXRlcmF0ZXMgdGhyb3VnaCB0aGUgc2hpcCBzdG9yYWdlIGFycmF5LCB0aGUgbmVzdGVkIGZvciBpbiBsb29wIGNvbXBhcmVzIHRoZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy93aGVuIHRoZSBjb3JyZWN0IHNoaXAgb2JqZWN0IGhhcyBiZWVuIHNlbGVjdGVkIHRoZSB4QXhpcyBhbmQgeUF4aXMgcG9zaXRpb25zIGZvciBiZWxvdyBsb29wcyBhcmUgY2hlY2tpbmcgYWdhaW5zdCB0aGUgeC95Q29vcmRpbmF0ZSBhdHRhY2sgcGFyYW1ldGVycyBvZiB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0pIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMueEF4aXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLnhBeGlzW2ldID09IHhDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uaGl0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLnlBeGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1cy55QXhpc1tpXSA9PSB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmhpdChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLmhpdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vaW1wbGVtZW50IGNvZGUgdG8gbWFyayB0aGUgRE9NIGVsZW1lbnQgd2hlcmUgdGhlIGF0dGFjayBtaXNzZWQgd2hlbiBkb25lIHdpdGggamVzdCB0ZXN0aW5nXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gaGl0cyFgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOy8vYWxlcnQoYGF0dGFjayAke3hDb29yZGluYXRlc30sICR7eUNvb3JkaW5hdGVzfSBtaXNzZXMhYClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1dpUFxuICAgIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBncmlkQXJlYSA9IDEwMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRBcmVhOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCBgZ3JpZC1pZC0ke2l9YCwgJ2dhbWVib2FyZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQm9hcmQsIGdhbWVib2FyZCwgcmVjZWl2ZUF0dGFjayB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5sZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdXG5cbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCAwKVxuZGF0YU1vZHVsZS5mbGVldFN0YXR1cyA9IHsgZ2FtZUJvYXJkVGVzdFNoaXAgfTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGRhdGFNb2R1bGUsIGRvbU1vZHVsZSwgZ2FtZWJvYXJkTW9kdWxlLCBzaGlwTW9kdWxlLCBhZGQsIHN1bmtTaGlwIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9