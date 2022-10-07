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
const dataModule = (() => {
    //add each ship into this object after placement, this is crucial to determining hits and misses with receiveAttack function
    let fleetStatus = [];
    let missedCoordinates = [];
    let pvp = false;
    let player1Turn = true;

    return { fleetStatus, missedCoordinates, player1Turn, pvp };
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
                alert('player 1\'s turn! no peeking.')
                dataModule.player1Turn = false;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                alert('player 2\'s turn! no peeking.')
                dataModule.player1Turn = true;
            }
        } else {
            if (dataModule.player1Turn == true) {
                alert('player 1 take a shot');
                dataModule.player1Turn = false;
            } else {
                alert('pc\'s turn');
                dataModule.player1Turn = true;
            }
        }
    }
    //create an ai function that will determine the computer players attacks
    function pcPlay() {

    }
    return { player }
})();
//create the main game loop and a module for DOM interaction. 
const gameLoopModule = (() => {

})();
const gameboardModule = (() => {
    let gameboard = function (ship, xCoordinates, yCoordinates) {

        let shipPlacement = {
            shipObj: ship,
            xAxis: xCoordinates,
            yAxis: yCoordinates
        }
        return shipPlacement;
    }

    function receiveAttack(xCoordinates, yCoordinates) {
        let xCoordinatesTrue = false;
        let yCoordinatesTrue = false;
        let xHitIndex = null;
        let yHitIndex = null;



        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            console.log(dataModule.fleetStatus[i].shipObj.hits);
            for (let j = 0; j < dataModule.fleetStatus[i].xAxis.length; j++) {


                if (dataModule.fleetStatus[i].xAxis[j] == xCoordinates) {
                    xHitIndex = j;
                    xCoordinatesTrue = true
                }
            }

            for (let j = 0; j < dataModule.fleetStatus[i].yAxis.length; j++) {

                if (dataModule.fleetStatus[i].yAxis[j] == yCoordinates) {
                    yHitIndex = j;
                    yCoordinatesTrue = true;
                }
            }
            if (xCoordinatesTrue && yCoordinatesTrue == true) {
                //when scanning the nAxis arrays for equality comparison to the x/yCoordinate parameters use the the nAxis truthy index value of the longest nAxis array as the index parameter in the hit() function to insure the correct hit index is marked 
                if (dataModule.fleetStatus[i].xAxis.length > dataModule.fleetStatus[i].yAxis.length) {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, xHitIndex)
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                } else {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, yHitIndex)
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                }
                return true;//alert(`attack ${xCoordinates}, ${yCoordinates} hits!`)
            } else {
                //keep track of missed coordinates for DOM display
                let missedXYCoordinates = { x: xCoordinates, y: yCoordinates };
                dataModule.missedCoordinates.push(missedXYCoordinates);
                //note for when DOM is added, add code here that marks the correct DOM element for an attack with x/yCoordinates that miss
                return false;//alert(`attack ${xCoordinates}, ${yCoordinates} misses!`)
            }
        }
    }

    function winCheck() {
        let sunkShips = 0;
        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            if (dataModule.fleetStatus[i].shipObj.sunk == true) {
                sunkShips++;
            }
        }

        if (sunkShips == dataModule.fleetStatus.length) {
            return true; //alert('fleet sunk!')
        } else if (sunkShips != dataModule.fleetStatus.length) {
            return false //alert('get me my brown pants')
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
    return { generateBoard, gameboard, receiveAttack, winCheck }
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
gameboardModule.receiveAttack(1, 0);
gameboardModule.receiveAttack(3, 4);
module.exports = { dataModule, playerAndPCModule, domModule, gameLoopModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQSw0QkFBNEIsNENBQTRDOzs7QUFHeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsNENBQTRDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCLGFBQWEsSUFBSSxjQUFjO0FBQzdFLGNBQWM7QUFDZDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixhQUFhLElBQUksY0FBYztBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYzs7QUFFbEMsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuY29uc3QgYWRkID0gKGEsIGIpID0+IGEgKyBiO1xuY29uc3QgZGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy9hZGQgZWFjaCBzaGlwIGludG8gdGhpcyBvYmplY3QgYWZ0ZXIgcGxhY2VtZW50LCB0aGlzIGlzIGNydWNpYWwgdG8gZGV0ZXJtaW5pbmcgaGl0cyBhbmQgbWlzc2VzIHdpdGggcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgIGxldCBmbGVldFN0YXR1cyA9IFtdO1xuICAgIGxldCBtaXNzZWRDb29yZGluYXRlcyA9IFtdO1xuICAgIGxldCBwdnAgPSBmYWxzZTtcbiAgICBsZXQgcGxheWVyMVR1cm4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHsgZmxlZXRTdGF0dXMsIG1pc3NlZENvb3JkaW5hdGVzLCBwbGF5ZXIxVHVybiwgcHZwIH07XG59KSgpO1xuY29uc3QgZG9tTW9kdWxlID0gKCgpID0+IHtcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50SWRDbGFzcyA9IGZ1bmN0aW9uIChlbGVtZW50LCBpZCwgY2xhc3NOKSB7XG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgbmV3RWxlbWVudC5pZCA9IGlkO1xuICAgICAgICBuZXdFbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTjtcbiAgICAgICAgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgY3JlYXRlRWxlbWVudElkQ2xhc3MgfTtcbn0pKCk7XG5cbmNvbnN0IHBsYXllckFuZFBDTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL3RoaXMgZnVuY3Rpb24gZGVhbHMgaGlkaW5nIHBsYXllciBzY3JlZW5zIGJldHdlZW4gZGV2aWNlIGhhbmRvZmZzIGFuZCBcbiAgICBmdW5jdGlvbiBwbGF5ZXIoKSB7XG4gICAgICAgIC8vaWYgaXRzIGEgcHZwIGdhbWUgdGhpcyBzdGF0ZW1lbnQgYmxvY2sgc2hvdWxkIGluc3VyZSB0aGUgc2NyZWVuIGlzIGhpZGRlbiB3aGVuIHBhc3NpbmcgdGhlIGRldmljZVxuICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlICYmIGRhdGFNb2R1bGUucHZwID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLnBsYXllcjFUdXJuID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvL2ltcGxlbWVudCBhIERPTSBoYW5kbGVyIHRvIGNvdmVyIHRoZSBnYW1lIGJvYXJkIHdoZW4gdGhlIERPTSBhY3R1YWxseSBnZXRzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3BsYXllciAxXFwncyB0dXJuISBubyBwZWVraW5nLicpXG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2ltcGxlbWVudCBhIERPTSBoYW5kbGVyIHRvIGNvdmVyIHRoZSBnYW1lIGJvYXJkIHdoZW4gdGhlIERPTSBhY3R1YWxseSBnZXRzIGltcGxlbWVudGVkXG4gICAgICAgICAgICAgICAgYWxlcnQoJ3BsYXllciAyXFwncyB0dXJuISBubyBwZWVraW5nLicpXG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoJ3BsYXllciAxIHRha2UgYSBzaG90Jyk7XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5wbGF5ZXIxVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgncGNcXCdzIHR1cm4nKTtcbiAgICAgICAgICAgICAgICBkYXRhTW9kdWxlLnBsYXllcjFUdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NyZWF0ZSBhbiBhaSBmdW5jdGlvbiB0aGF0IHdpbGwgZGV0ZXJtaW5lIHRoZSBjb21wdXRlciBwbGF5ZXJzIGF0dGFja3NcbiAgICBmdW5jdGlvbiBwY1BsYXkoKSB7XG5cbiAgICB9XG4gICAgcmV0dXJuIHsgcGxheWVyIH1cbn0pKCk7XG4vL2NyZWF0ZSB0aGUgbWFpbiBnYW1lIGxvb3AgYW5kIGEgbW9kdWxlIGZvciBET00gaW50ZXJhY3Rpb24uIFxuY29uc3QgZ2FtZUxvb3BNb2R1bGUgPSAoKCkgPT4ge1xuXG59KSgpO1xuY29uc3QgZ2FtZWJvYXJkTW9kdWxlID0gKCgpID0+IHtcbiAgICBsZXQgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXMubGVuZ3RoOyBqKyspIHtcblxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXNbal0gPT0geENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHhIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHhDb29yZGluYXRlc1RydWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueUF4aXMubGVuZ3RoOyBqKyspIHtcblxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnlBeGlzW2pdID09IHlDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgICAgICB5SGl0SW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICB5Q29vcmRpbmF0ZXNUcnVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoeENvb3JkaW5hdGVzVHJ1ZSAmJiB5Q29vcmRpbmF0ZXNUcnVlID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAvL3doZW4gc2Nhbm5pbmcgdGhlIG5BeGlzIGFycmF5cyBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbiB0byB0aGUgeC95Q29vcmRpbmF0ZSBwYXJhbWV0ZXJzIHVzZSB0aGUgdGhlIG5BeGlzIHRydXRoeSBpbmRleCB2YWx1ZSBvZiB0aGUgbG9uZ2VzdCBuQXhpcyBhcnJheSBhcyB0aGUgaW5kZXggcGFyYW1ldGVyIGluIHRoZSBoaXQoKSBmdW5jdGlvbiB0byBpbnN1cmUgdGhlIGNvcnJlY3QgaGl0IGluZGV4IGlzIG1hcmtlZCBcbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpcy5sZW5ndGggPiBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnlBeGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmhpdChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cywgeEhpdEluZGV4KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMsIHlIaXRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gaGl0cyFgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvL2tlZXAgdHJhY2sgb2YgbWlzc2VkIGNvb3JkaW5hdGVzIGZvciBET00gZGlzcGxheVxuICAgICAgICAgICAgICAgIGxldCBtaXNzZWRYWUNvb3JkaW5hdGVzID0geyB4OiB4Q29vcmRpbmF0ZXMsIHk6IHlDb29yZGluYXRlcyB9O1xuICAgICAgICAgICAgICAgIGRhdGFNb2R1bGUubWlzc2VkQ29vcmRpbmF0ZXMucHVzaChtaXNzZWRYWUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICAvL25vdGUgZm9yIHdoZW4gRE9NIGlzIGFkZGVkLCBhZGQgY29kZSBoZXJlIHRoYXQgbWFya3MgdGhlIGNvcnJlY3QgRE9NIGVsZW1lbnQgZm9yIGFuIGF0dGFjayB3aXRoIHgveUNvb3JkaW5hdGVzIHRoYXQgbWlzc1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsvL2FsZXJ0KGBhdHRhY2sgJHt4Q29vcmRpbmF0ZXN9LCAke3lDb29yZGluYXRlc30gbWlzc2VzIWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3aW5DaGVjaygpIHtcbiAgICAgICAgbGV0IHN1bmtTaGlwcyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdW5rU2hpcHMrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW5rU2hpcHMgPT0gZGF0YU1vZHVsZS5mbGVldFN0YXR1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAvL2FsZXJ0KCdmbGVldCBzdW5rIScpXG4gICAgICAgIH0gZWxzZSBpZiAoc3Vua1NoaXBzICE9IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy9hbGVydCgnZ2V0IG1lIG15IGJyb3duIHBhbnRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vV2lQXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGdyaWRBcmVhID0gMTAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZEFyZWE7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBncmlkLWlkLSR7aX1gLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVCb2FyZCwgZ2FtZWJvYXJkLCByZWNlaXZlQXR0YWNrLCB3aW5DaGVjayB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5cbi8vIGRvIE5PVCByZW1vdmUgdGhlc2UgdW50aWwgZmluaXNoZWQgd2l0aCB0ZXN0aW5nIVxubGV0IHN1bmtTaGlwID0gc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcC5oaXRzO1xuc3Vua1NoaXAuaGl0cyA9IFsxLCAxLCAxLCAxXTtcbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCBbMF0pXG5kYXRhTW9kdWxlLmZsZWV0U3RhdHVzID0gW2dhbWVCb2FyZFRlc3RTaGlwXTtcbmdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKDEsIDApO1xuZ2FtZWJvYXJkTW9kdWxlLnJlY2VpdmVBdHRhY2soMywgNCk7XG5tb2R1bGUuZXhwb3J0cyA9IHsgZGF0YU1vZHVsZSwgcGxheWVyQW5kUENNb2R1bGUsIGRvbU1vZHVsZSwgZ2FtZUxvb3BNb2R1bGUsIGdhbWVib2FyZE1vZHVsZSwgc2hpcE1vZHVsZSwgYWRkLCBzdW5rU2hpcCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==