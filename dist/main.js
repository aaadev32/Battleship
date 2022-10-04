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

        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            console.log(dataModule.fleetStatus[i].xAxis.length)
            for (let j = 0; j < dataModule.fleetStatus[i].xAxis.length; j++) {
                console.log(dataModule.fleetStatus[i].shipObj.hits)

                if (dataModule.fleetStatus[i].xAxis[j] == xCoordinates) {
                    //left off here 10-3
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, j)
                    hit = true;
                    console.log(`hit is true`)
                }
            }

            for (let j = 0; j < dataModule.fleetStatus[i].yAxis.length; j++) {
                console.log(dataModule.fleetStatus[i].shipObj.hits)

                if (dataModule.fleetStatus[i].yAxis[j] == yCoordinates) {
                    //left off here 10-3
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, j)
                    hit = true;
                    console.log(`hit is false`)
                }
            }


        }

        if (hit != undefined && hit == true) {
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

// do NOT remove these until finished with testing!
let sunkShip = shipModule.ship().battleship.hits;
sunkShip.hits = [1, 1, 1, 1];
let gameBoardTestShip = gameboardModule.gameboard(shipModule.ship().battleship, [0, 1, 2, 3], [0])
dataModule.fleetStatus = [gameBoardTestShip];
console.log(gameboardModule.receiveAttack(0, 0));
console.log(gameboardModule.receiveAttack(4, 1));


module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0EsNEJBQTRCLDRDQUE0QztBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsNENBQTRDO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQixhQUFhLElBQUksY0FBYztBQUN6RSxVQUFVO0FBQ1YseUJBQXlCLGtCQUFrQixhQUFhLElBQUksY0FBYztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7O0FBRWxDLGdFQUFnRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLG9FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xuLy90aGlzIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgdGhhdCBtYWtlIGl0IGVhc2llciB0byBidWlsZCBET00gRWxlbWVudHNcbmNvbnN0IGRhdGFNb2R1bGUgPSAoKCkgPT4ge1xuICAgIC8vYWRkIGVhY2ggc2hpcCBpbnRvIHRoaXMgb2JqZWN0IGFmdGVyIHBsYWNlbWVudCwgdGhpcyBpcyBjcnVjaWFsIHRvIGRldGVybWluaW5nIGhpdHMgYW5kIG1pc3NlcyB3aXRoIHJlY2VpdmVBdHRhY2sgZnVuY3Rpb25cbiAgICBsZXQgZmxlZXRTdGF0dXMgPSBbXTtcblxuICAgIHJldHVybiB7IGZsZWV0U3RhdHVzIH07XG59KSgpO1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkXG4gICAgICAgIG5ld0VsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NOO1xuICAgICAgICByZXR1cm4gbmV3RWxlbWVudDtcbiAgICB9XG5cbiAgICByZXR1cm4geyBjcmVhdGVFbGVtZW50SWRDbGFzcyB9O1xufSkoKTtcblxuLy9ET00gY3JlYXRpb24gZm9yIHRoZSBpbml0aWFsIGdhbWVib2FyZFxuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcblxuXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCBoaXQgPSB1bmRlZmluZWRcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXMubGVuZ3RoKVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnhBeGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMpXG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpc1tqXSA9PSB4Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9sZWZ0IG9mZiBoZXJlIDEwLTNcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMsIGopXG4gICAgICAgICAgICAgICAgICAgIGhpdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBoaXQgaXMgdHJ1ZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueUF4aXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cylcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnlBeGlzW2pdID09IHlDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICAvL2xlZnQgb2ZmIGhlcmUgMTAtM1xuICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmhpdChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cywgailcbiAgICAgICAgICAgICAgICAgICAgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGhpdCBpcyBmYWxzZWApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChoaXQgIT0gdW5kZWZpbmVkICYmIGhpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvL2ltcGxlbWVudCBjb2RlIHRvIG1hcmsgdGhlIERPTSBlbGVtZW50IHdoZXJlIHRoZSBhdHRhY2sgbWlzc2VkIHdoZW4gZG9uZSB3aXRoIGplc3QgdGVzdGluZ1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IGhpdHMhYClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gbWlzc2VzIWApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9XaVBcbiAgICBjb25zdCBnZW5lcmF0ZUJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZ3JpZEFyZWEgPSAxMDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBncmlkQXJlYTsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBuZXdEaXYgPSBjcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywgYGdyaWQtaWQtJHtpfWAsICdnYW1lYm9hcmQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBnZW5lcmF0ZUJvYXJkLCBnYW1lYm9hcmQsIHJlY2VpdmVBdHRhY2sgfVxufSkoKTtcblxuY29uc3Qgc2hpcE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBiYXR0bGVzaGlwID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVyID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0cm9sQm9hdCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHNoaXBIZWFsdGhBcnJbaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwSGVhbHRoQXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayhzaGlwKSB7XG5cbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICBkYW1hZ2UrKztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYW1hZ2UgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hpcCwgaGl0LCBpc1N1bmsgfTtcbn0pKCk7XG5cbi8vbGV0IHRlc3REaXYgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsJ3Rlc3QnLCAndGVzdCcpO1xuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRlc3REaXYpO1xuXG4vLyBkbyBOT1QgcmVtb3ZlIHRoZXNlIHVudGlsIGZpbmlzaGVkIHdpdGggdGVzdGluZyFcbmxldCBzdW5rU2hpcCA9IHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXAuaGl0cztcbnN1bmtTaGlwLmhpdHMgPSBbMSwgMSwgMSwgMV07XG5sZXQgZ2FtZUJvYXJkVGVzdFNoaXAgPSBnYW1lYm9hcmRNb2R1bGUuZ2FtZWJvYXJkKHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXAsIFswLCAxLCAyLCAzXSwgWzBdKVxuZGF0YU1vZHVsZS5mbGVldFN0YXR1cyA9IFtnYW1lQm9hcmRUZXN0U2hpcF07XG5jb25zb2xlLmxvZyhnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjaygwLCAwKSk7XG5jb25zb2xlLmxvZyhnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjayg0LCAxKSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7IGRhdGFNb2R1bGUsIGRvbU1vZHVsZSwgZ2FtZWJvYXJkTW9kdWxlLCBzaGlwTW9kdWxlLCBhZGQsIHN1bmtTaGlwIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9