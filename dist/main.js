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
    let missedCoordinates = [];

    return { fleetStatus, missedCoordinates };
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
        let sunk = 0;
        for (let i = 0; i < dataModule.fleetStatus.length; i++) {
            if (dataModule.fleetStatus[i].shipObj.sunk == true) {
                sunk++;
            }
        }

        if (sunk == dataModule.fleetStatus.length) {
            return true; //alert('fleet sunk!')
        } else if (sunk != dataModule.fleetStatus.length) {
            return false //alert('get me my brown pants')
        }
    }

    //write a function to keep track of missed attacks

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
console.log(gameboardModule.receiveAttack(1, 0));
console.log(gameboardModule.receiveAttack(3, 4));
console.log(dataModule.missedCoordinates);
console.log(gameboardModule.winCheck());
console.log(dataModule.missedCoordinates[0])

module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQSw0QkFBNEIsNENBQTRDOzs7QUFHeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsNENBQTRDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCLGFBQWEsSUFBSSxjQUFjO0FBQzdFLGNBQWM7QUFDZDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQixhQUFhLElBQUksY0FBYztBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixtQ0FBbUM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekIsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYzs7QUFFbEMsZ0VBQWdFLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7O0FBRWpCOztBQUVBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3QkFBd0Isc0JBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixvRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmNvbnN0IGFkZCA9IChhLCBiKSA9PiBhICsgYjtcbi8vdGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHRoYXQgbWFqZSBpdCBlYXNpZXIgdG8gYnVpbGQgRE9NIEVsZW1lbnRzXG5jb25zdCBkYXRhTW9kdWxlID0gKCgpID0+IHtcbiAgICAvL2FkZCBlYWNoIHNoaXAgaW50byB0aGlzIG9iamVjdCBhZnRlciBwbGFjZW1lbnQsIHRoaXMgaXMgY3J1Y2lhbCB0byBkZXRlcm1pbmluZyBoaXRzIGFuZCBtaXNzZXMgd2l0aCByZWNlaXZlQXR0YWNrIGZ1bmN0aW9uXG4gICAgbGV0IGZsZWV0U3RhdHVzID0gW107XG4gICAgbGV0IG1pc3NlZENvb3JkaW5hdGVzID0gW107XG5cbiAgICByZXR1cm4geyBmbGVldFN0YXR1cywgbWlzc2VkQ29vcmRpbmF0ZXMgfTtcbn0pKCk7XG5jb25zdCBkb21Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRJZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkLCBjbGFzc04pIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWRcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc047XG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUVsZW1lbnRJZENsYXNzIH07XG59KSgpO1xuXG4vL0RPTSBjcmVhdGlvbiBmb3IgdGhlIGluaXRpYWwgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmRNb2R1bGUgPSAoKCkgPT4ge1xuXG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpcy5sZW5ndGg7IGorKykge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpc1tqXSA9PSB4Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeEhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkaW5hdGVzVHJ1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS55QXhpcy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueUF4aXNbal0gPT0geUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZGluYXRlc1RydWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlICYmIHlDb29yZGluYXRlc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vd2hlbiBzY2FubmluZyB0aGUgbkF4aXMgYXJyYXlzIGZvciBlcXVhbGl0eSBjb21wYXJpc29uIHRvIHRoZSB4L3lDb29yZGluYXRlIHBhcmFtZXRlcnMgdXNlIHRoZSB0aGUgbkF4aXMgdHJ1dGh5IGluZGV4IHZhbHVlIG9mIHRoZSBsb25nZXN0IG5BeGlzIGFycmF5IGFzIHRoZSBpbmRleCBwYXJhbWV0ZXIgaW4gdGhlIGhpdCgpIGZ1bmN0aW9uIHRvIGluc3VyZSB0aGUgY29ycmVjdCBoaXQgaW5kZXggaXMgbWFya2VkIFxuICAgICAgICAgICAgICAgIGlmIChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnhBeGlzLmxlbmd0aCA+IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueUF4aXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzLCB4SGl0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzaGlwTW9kdWxlLmhpdChkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cywgeUhpdEluZGV4KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhTW9kdWxlLmZsZWV0U3RhdHVzW2ldLnNoaXBPYmouaGl0cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlOy8vYWxlcnQoYGF0dGFjayAke3hDb29yZGluYXRlc30sICR7eUNvb3JkaW5hdGVzfSBoaXRzIWApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8va2VlcCB0cmFjayBvZiBtaXNzZWQgY29vcmRpbmF0ZXMgZm9yIERPTSBkaXNwbGF5XG4gICAgICAgICAgICAgICAgbGV0IG1pc3NlZFhZQ29vcmRpbmF0ZXMgPSB7IHg6IHhDb29yZGluYXRlcywgeTogeUNvb3JkaW5hdGVzIH07XG4gICAgICAgICAgICAgICAgZGF0YU1vZHVsZS5taXNzZWRDb29yZGluYXRlcy5wdXNoKG1pc3NlZFhZQ29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgICAgIC8vbm90ZSBmb3Igd2hlbiBET00gaXMgYWRkZWQsIGFkZCBjb2RlIGhlcmUgdGhhdCBtYXJrcyB0aGUgY29ycmVjdCBET00gZWxlbWVudCBmb3IgYW4gYXR0YWNrIHdpdGggeC95Q29vcmRpbmF0ZXMgdGhhdCBtaXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOy8vYWxlcnQoYGF0dGFjayAke3hDb29yZGluYXRlc30sICR7eUNvb3JkaW5hdGVzfSBtaXNzZXMhYClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHdpbkNoZWNrKCkge1xuICAgICAgICBsZXQgc3VuayA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBzdW5rKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3VuayA9PSBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7IC8vYWxlcnQoJ2ZsZWV0IHN1bmshJylcbiAgICAgICAgfSBlbHNlIGlmIChzdW5rICE9IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2UgLy9hbGVydCgnZ2V0IG1lIG15IGJyb3duIHBhbnRzJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vd3JpdGUgYSBmdW5jdGlvbiB0byBrZWVwIHRyYWNrIG9mIG1pc3NlZCBhdHRhY2tzXG5cbiAgICAvL1dpUFxuICAgIGNvbnN0IGdlbmVyYXRlQm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBncmlkQXJlYSA9IDEwMDtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdyaWRBcmVhOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IG5ld0RpdiA9IGNyZWF0ZUVsZW1lbnRJZENsYXNzKCdkaXYnLCBgZ3JpZC1pZC0ke2l9YCwgJ2dhbWVib2FyZCcpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKS5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IGdlbmVyYXRlQm9hcmQsIGdhbWVib2FyZCwgcmVjZWl2ZUF0dGFjaywgd2luQ2hlY2sgfVxufSkoKTtcblxuY29uc3Qgc2hpcE1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBzaGlwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBjYXJyaWVyID0ge1xuICAgICAgICAgICAgbGVuZ3RoOiA1LFxuICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgICAgICBiYXR0bGVzaGlwID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogNCxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVzdHJveWVyID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VibWFyaW5lID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMyxcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGF0cm9sQm9hdCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDIsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0IH07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoaXQoc2hpcEhlYWx0aEFyciwgaW5kZXgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwSGVhbHRoQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHNoaXBIZWFsdGhBcnJbaV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGlwSGVhbHRoQXJyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzU3VuayhzaGlwKSB7XG5cbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5oaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcC5oaXRzW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICBkYW1hZ2UrKztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChkYW1hZ2UgPT0gc2hpcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNoaXAuc3VuayA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc2hpcCwgaGl0LCBpc1N1bmsgfTtcbn0pKCk7XG5cbi8vbGV0IHRlc3REaXYgPSBkb21Nb2R1bGUuY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsJ3Rlc3QnLCAndGVzdCcpO1xuLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKHRlc3REaXYpO1xuXG4vLyBkbyBOT1QgcmVtb3ZlIHRoZXNlIHVudGlsIGZpbmlzaGVkIHdpdGggdGVzdGluZyFcbmxldCBzdW5rU2hpcCA9IHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXAuaGl0cztcbnN1bmtTaGlwLmhpdHMgPSBbMSwgMSwgMSwgMV07XG5sZXQgZ2FtZUJvYXJkVGVzdFNoaXAgPSBnYW1lYm9hcmRNb2R1bGUuZ2FtZWJvYXJkKHNoaXBNb2R1bGUuc2hpcCgpLmJhdHRsZXNoaXAsIFswLCAxLCAyLCAzXSwgWzBdKVxuZGF0YU1vZHVsZS5mbGVldFN0YXR1cyA9IFtnYW1lQm9hcmRUZXN0U2hpcF07XG5jb25zb2xlLmxvZyhnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjaygxLCAwKSk7XG5jb25zb2xlLmxvZyhnYW1lYm9hcmRNb2R1bGUucmVjZWl2ZUF0dGFjaygzLCA0KSk7XG5jb25zb2xlLmxvZyhkYXRhTW9kdWxlLm1pc3NlZENvb3JkaW5hdGVzKTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZE1vZHVsZS53aW5DaGVjaygpKTtcbmNvbnNvbGUubG9nKGRhdGFNb2R1bGUubWlzc2VkQ29vcmRpbmF0ZXNbMF0pXG5cbm1vZHVsZS5leHBvcnRzID0geyBkYXRhTW9kdWxlLCBkb21Nb2R1bGUsIGdhbWVib2FyZE1vZHVsZSwgc2hpcE1vZHVsZSwgYWRkLCBzdW5rU2hpcCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==