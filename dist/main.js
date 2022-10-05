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
//this module contains functions that maje it easier to build DOM Elements
const dataModule = (() => {
    //add each ship into this object after placement, this is crucial to determining hits and misses with receiveAttack function
    let fleetStatus = [];

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

    function receiveAttack(xCoordinates, yCoordinates) {
        let hit = undefined
        let xCoordinatesTrue = false;
        let yCoordinatesTrue = false;
        let xAxisArrIndex = null;
        let yAxisArrIndex = null;


        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            console.log(dataModule.fleetStatus[i].shipObj.hits);
            for (let j = 0; j < dataModule.fleetStatus[i].xAxis.length; j++) {


                if (dataModule.fleetStatus[i].xAxis[j] == xCoordinates) {
                    xAxisArrIndex = j;
                    xCoordinatesTrue = true
                    console.log(dataModule.fleetStatus[i].shipObj.hits, `xAxis hit`);
                }
            }

            for (let j = 0; j < dataModule.fleetStatus[i].yAxis.length; j++) {

                if (dataModule.fleetStatus[i].yAxis[j] == yCoordinates) {
                    yAxisArrIndex = j;
                    yCoordinatesTrue = true;
                    console.log(dataModule.fleetStatus[i].shipObj.hits, `yAxis hit`);
                }
            }
        }

        //properly implement hit function when i figure out how to link ship object hit array to the DOM 

        if (xCoordinatesTrue && yCoordinatesTrue == true) {
            return true;//alert(`attacj ${xCoordinates}, ${yCoordinates} hits!`)
        } else {
            return false;//alert(`attacj ${xCoordinates}, ${yCoordinates} misses!`)
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

// do NOT remove these until finished with testing!
let sunkShip = shipModule.ship().battleship.hits;
sunkShip.hits = [1, 1, 1, 1];
let gameBoardTestShip = gameboardModule.gameboard(shipModule.ship().battleship, [0, 1, 2, 3], [0])
dataModule.fleetStatus = [gameBoardTestShip];
console.log(gameboardModule.receiveAttack(0, 0));
console.log(gameboardModule.receiveAttack(3, 4));


module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0EsNEJBQTRCLDRDQUE0Qzs7O0FBR3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsNENBQTRDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0IsYUFBYSxJQUFJLGNBQWM7QUFDekUsVUFBVTtBQUNWLHlCQUF5QixrQkFBa0IsYUFBYSxJQUFJLGNBQWM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixjQUFjOztBQUVsQyxnRUFBZ0UsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLG1CQUFtQixvRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFkZCA9IChhLCBiKSA9PiBhICsgYjtcbi8vdGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRoYXQgbWFqZSBpdCBlYXNpZXIgdG8gYnVpbGQgRE9NIEVsZW1lbnRzXG5jb25zdCBkYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2FkZCBlYWNoIHNoaXAgaW50byB0aGlzIG9iamVjdCBhZnRlciBwbGFjZW1lbnQsIHRoaXMgaXMgY3J1Y2lhbCB0byBkZXRlcm1pbmluZyBoaXRzIGFuZCBtaXNzZXMgd2l0aCByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uXG4gICAgbGV0IGZsZWV0U3RhdHVzID0gW107XG5cbiAgICByZXR1cm4geyBmbGVldFN0YXR1cyB9O1xufSkoKTtcbmNvbnN0IGRvbU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgY3JlYXRlRWxlbWVudElkQ2xhc3MgPSBmdW5jdGlvbiAoZWxlbWVudCwgaWQsIGNsYXNzTikge1xuICAgICAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgIG5ld0VsZW1lbnQuaWQgPSBpZFxuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbi8vRE9NIGNyZWF0aW9uIGZvciB0aGUgaW5pdGlhbCBnYW1lYm9hcmRcbmNvbnN0IGdhbWVib2FyZE1vZHVsZSA9ICgoKSA9PiB7XG5cblxuICAgIGNvbnN0IGdhbWVib2FyZCA9IGZ1bmN0aW9uIChzaGlwLCB4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuXG4gICAgICAgIGxldCBzaGlwUGxhY2VtZW50ID0ge1xuICAgICAgICAgICAgc2hpcE9iajogc2hpcCxcbiAgICAgICAgICAgIHhBeGlzOiB4Q29vcmRpbmF0ZXMsXG4gICAgICAgICAgICB5QXhpczogeUNvb3JkaW5hdGVzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBQbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVjZWl2ZUF0dGFjayh4Q29vcmRpbmF0ZXMsIHlDb29yZGluYXRlcykge1xuICAgICAgICBsZXQgaGl0ID0gdW5kZWZpbmVkXG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4QXhpc0FyckluZGV4ID0gbnVsbDtcbiAgICAgICAgbGV0IHlBeGlzQXJySW5kZXggPSBudWxsO1xuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXMubGVuZ3RoOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXNbal0gPT0geENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhBeGlzQXJySW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICB4Q29vcmRpbmF0ZXNUcnVlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cywgYHhBeGlzIGhpdGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnlBeGlzLmxlbmd0aDsgaisrKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS55QXhpc1tqXSA9PSB5Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeUF4aXNBcnJJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZGluYXRlc1RydWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cywgYHlBeGlzIGhpdGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vcHJvcGVybHkgaW1wbGVtZW50IGhpdCBmdW5jdGlvbiB3aGVuIGkgZmlndXJlIG91dCBob3cgdG8gbGluayBzaGlwIG9iamVjdCBoaXQgYXJyYXkgdG8gdGhlIERPTSBcblxuICAgICAgICBpZiAoeENvb3JkaW5hdGVzVHJ1ZSAmJiB5Q29vcmRpbmF0ZXNUcnVlID09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOy8vYWxlcnQoYGF0dGFjaiAke3hDb29yZGluYXRlc30sICR7eUNvb3JkaW5hdGVzfSBoaXRzIWApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7Ly9hbGVydChgYXR0YWNqICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IG1pc3NlcyFgKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vV2lQXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGdyaWRBcmVhID0gMTAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZEFyZWE7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBncmlkLWlkLSR7aX1gLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVCb2FyZCwgZ2FtZWJvYXJkLCByZWNlaXZlQXR0YWNrIH1cbn0pKCk7XG5cbmNvbnN0IHNoaXBNb2R1bGUgPSAoKCkgPT4ge1xuXG4gICAgY29uc3Qgc2hpcCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgY2FycmllciA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llciA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1hcmluZSA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdHJvbEJvYXQgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBjYXJyaWVyLCBiYXR0bGVzaGlwLCBkZXN0cm95ZXIsIHN1Ym1hcmluZSwgcGF0cm9sQm9hdCB9O1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGl0KHNoaXBIZWFsdGhBcnIsIGluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEhlYWx0aEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzaGlwSGVhbHRoQXJyW2ldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcEhlYWx0aEFycjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1N1bmsoc2hpcCkge1xuXG4gICAgICAgIGxldCBkYW1hZ2UgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAuaGl0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0c1tpXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgZGFtYWdlKys7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGFtYWdlID09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaGlwLnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGlwLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IHNoaXAsIGhpdCwgaXNTdW5rIH07XG59KSgpO1xuXG4vL2xldCB0ZXN0RGl2ID0gZG9tTW9kdWxlLmNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCd0ZXN0JywgJ3Rlc3QnKTtcbi8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZCh0ZXN0RGl2KTtcblxuLy8gZG8gTk9UIHJlbW92ZSB0aGVzZSB1bnRpbCBmaW5pc2hlZCB3aXRoIHRlc3RpbmchXG5sZXQgc3Vua1NoaXAgPSBzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLmhpdHM7XG5zdW5rU2hpcC5oaXRzID0gWzEsIDEsIDEsIDFdO1xubGV0IGdhbWVCb2FyZFRlc3RTaGlwID0gZ2FtZWJvYXJkTW9kdWxlLmdhbWVib2FyZChzaGlwTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwLCBbMCwgMSwgMiwgM10sIFswXSlcbmRhdGFNb2R1bGUuZmxlZXRTdGF0dXMgPSBbZ2FtZUJvYXJkVGVzdFNoaXBdO1xuY29uc29sZS5sb2coZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMCwgMCkpO1xuY29uc29sZS5sb2coZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMywgNCkpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geyBkYXRhTW9kdWxlLCBkb21Nb2R1bGUsIGdhbWVib2FyZE1vZHVsZSwgc2hpcE1vZHVsZSwgYWRkLCBzdW5rU2hpcCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==