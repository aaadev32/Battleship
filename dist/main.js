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
                //when scanning the nAxis arrays for truthyness for x/yCoordinates use the the nAxis truthy index value of the longest nAxis array as the index parameter in the hit() function to insure the correct hit index is marked 
                if (dataModule.fleetStatus[i].xAxis.length > dataModule.fleetStatus[i].yAxis.length) {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, xHitIndex)
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                } else {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, yHitIndex)
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                }
                return true;//alert(`attack ${xCoordinates}, ${yCoordinates} hits!`)
            } else {
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
console.log(gameboardModule.winCheck());


module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsbUNBQW1DO0FBQzNEO0FBQ0EsNEJBQTRCLDRDQUE0Qzs7O0FBR3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLDRDQUE0Qzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQixhQUFhLElBQUksY0FBYztBQUM3RSxjQUFjO0FBQ2Q7QUFDQSw2QkFBNkIsa0JBQWtCLGFBQWEsSUFBSSxjQUFjO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLG1DQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7O0FBRWxDLGdFQUFnRSxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtQkFBbUIsb0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5jb25zdCBhZGQgPSAoYSwgYikgPT4gYSArIGI7XG4vL3RoaXMgbW9kdWxlIGNvbnRhaW5zIGZ1bmN0aW9ucyB0aGF0IG1hamUgaXQgZWFzaWVyIHRvIGJ1aWxkIERPTSBFbGVtZW50c1xuY29uc3QgZGF0YU1vZHVsZSA9ICgoKSA9PiB7XG4gICAgLy9hZGQgZWFjaCBzaGlwIGludG8gdGhpcyBvYmplY3QgYWZ0ZXIgcGxhY2VtZW50LCB0aGlzIGlzIGNydWNpYWwgdG8gZGV0ZXJtaW5pbmcgaGl0cyBhbmQgbWlzc2VzIHdpdGggcmVjZWl2ZUF0dGFjayBmdW5jdGlvblxuICAgIGxldCBmbGVldFN0YXR1cyA9IFtdO1xuXG4gICAgcmV0dXJuIHsgZmxlZXRTdGF0dXMgfTtcbn0pKCk7XG5jb25zdCBkb21Nb2R1bGUgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRJZENsYXNzID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlkLCBjbGFzc04pIHtcbiAgICAgICAgbGV0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICBuZXdFbGVtZW50LmlkID0gaWRcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc047XG4gICAgICAgIHJldHVybiBuZXdFbGVtZW50O1xuICAgIH1cblxuICAgIHJldHVybiB7IGNyZWF0ZUVsZW1lbnRJZENsYXNzIH07XG59KSgpO1xuXG4vL0RPTSBjcmVhdGlvbiBmb3IgdGhlIGluaXRpYWwgZ2FtZWJvYXJkXG5jb25zdCBnYW1lYm9hcmRNb2R1bGUgPSAoKCkgPT4ge1xuXG5cbiAgICBsZXQgZ2FtZWJvYXJkID0gZnVuY3Rpb24gKHNoaXAsIHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG5cbiAgICAgICAgbGV0IHNoaXBQbGFjZW1lbnQgPSB7XG4gICAgICAgICAgICBzaGlwT2JqOiBzaGlwLFxuICAgICAgICAgICAgeEF4aXM6IHhDb29yZGluYXRlcyxcbiAgICAgICAgICAgIHlBeGlzOiB5Q29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcFBsYWNlbWVudDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWNlaXZlQXR0YWNrKHhDb29yZGluYXRlcywgeUNvb3JkaW5hdGVzKSB7XG4gICAgICAgIGxldCB4Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB5Q29vcmRpbmF0ZXNUcnVlID0gZmFsc2U7XG4gICAgICAgIGxldCB4SGl0SW5kZXggPSBudWxsO1xuICAgICAgICBsZXQgeUhpdEluZGV4ID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpcy5sZW5ndGg7IGorKykge1xuXG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS54QXhpc1tqXSA9PSB4Q29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgeEhpdEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgeENvb3JkaW5hdGVzVHJ1ZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS55QXhpcy5sZW5ndGg7IGorKykge1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueUF4aXNbal0gPT0geUNvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHlIaXRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgIHlDb29yZGluYXRlc1RydWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh4Q29vcmRpbmF0ZXNUcnVlICYmIHlDb29yZGluYXRlc1RydWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIC8vd2hlbiBzY2FubmluZyB0aGUgbkF4aXMgYXJyYXlzIGZvciB0cnV0aHluZXNzIGZvciB4L3lDb29yZGluYXRlcyB1c2UgdGhlIHRoZSBuQXhpcyB0cnV0aHkgaW5kZXggdmFsdWUgb2YgdGhlIGxvbmdlc3QgbkF4aXMgYXJyYXkgYXMgdGhlIGluZGV4IHBhcmFtZXRlciBpbiB0aGUgaGl0KCkgZnVuY3Rpb24gdG8gaW5zdXJlIHRoZSBjb3JyZWN0IGhpdCBpbmRleCBpcyBtYXJrZWQgXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0ueEF4aXMubGVuZ3RoID4gZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS55QXhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcE1vZHVsZS5oaXQoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMsIHhIaXRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLmhpdHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBNb2R1bGUuaGl0KGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzLCB5SGl0SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFNb2R1bGUuZmxlZXRTdGF0dXNbaV0uc2hpcE9iai5oaXRzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IGhpdHMhYClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy9ub3RlIGZvciB3aGVuIERPTSBpcyBhZGRlZCwgYWRkIGNvZGUgaGVyZSB0aGF0IG1hcmtzIHRoZSBjb3JyZWN0IERPTSBlbGVtZW50IGZvciBhbiBhdHRhY2sgd2l0aCB4L3lDb29yZGluYXRlcyB0aGF0IG1pc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7Ly9hbGVydChgYXR0YWNrICR7eENvb3JkaW5hdGVzfSwgJHt5Q29vcmRpbmF0ZXN9IG1pc3NlcyFgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gd2luQ2hlY2soKSB7XG4gICAgICAgIGxldCBzdW5rID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhTW9kdWxlLmZsZWV0U3RhdHVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YU1vZHVsZS5mbGVldFN0YXR1c1tpXS5zaGlwT2JqLnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHN1bmsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdW5rID09IGRhdGFNb2R1bGUuZmxlZXRTdGF0dXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgLy9hbGVydCgnZmxlZXQgc3VuayEnKVxuICAgICAgICB9IGVsc2UgaWYgKHN1bmsgIT0gZGF0YU1vZHVsZS5mbGVldFN0YXR1cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZSAvL2FsZXJ0KCdnZXQgbWUgbXkgYnJvd24gcGFudHMnKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vV2lQXG4gICAgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGdyaWRBcmVhID0gMTAwO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ3JpZEFyZWE7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgbmV3RGl2ID0gY3JlYXRlRWxlbWVudElkQ2xhc3MoJ2RpdicsIGBncmlkLWlkLSR7aX1gLCAnZ2FtZWJvYXJkJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVCb2FyZCwgZ2FtZWJvYXJkLCByZWNlaXZlQXR0YWNrLCB3aW5DaGVjayB9XG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQgfTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGhpdChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNTdW5rKHNoaXApIHtcblxuICAgICAgICBsZXQgZGFtYWdlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmhpdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzaGlwLmhpdHNbaV0gPT0gMSkge1xuICAgICAgICAgICAgICAgIGRhbWFnZSsrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhbWFnZSA9PSBzaGlwLmxlbmd0aCkge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hpcC5zdW5rID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4geyBzaGlwLCBoaXQsIGlzU3VuayB9O1xufSkoKTtcblxuLy9sZXQgdGVzdERpdiA9IGRvbU1vZHVsZS5jcmVhdGVFbGVtZW50SWRDbGFzcygnZGl2JywndGVzdCcsICd0ZXN0Jyk7XG4vL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JykuYXBwZW5kQ2hpbGQodGVzdERpdik7XG5cbi8vIGRvIE5PVCByZW1vdmUgdGhlc2UgdW50aWwgZmluaXNoZWQgd2l0aCB0ZXN0aW5nIVxubGV0IHN1bmtTaGlwID0gc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcC5oaXRzO1xuc3Vua1NoaXAuaGl0cyA9IFsxLCAxLCAxLCAxXTtcbmxldCBnYW1lQm9hcmRUZXN0U2hpcCA9IGdhbWVib2FyZE1vZHVsZS5nYW1lYm9hcmQoc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcCwgWzAsIDEsIDIsIDNdLCBbMF0pXG5kYXRhTW9kdWxlLmZsZWV0U3RhdHVzID0gW2dhbWVCb2FyZFRlc3RTaGlwXTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKDEsIDApKTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZE1vZHVsZS5yZWNlaXZlQXR0YWNrKDMsIDQpKTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZE1vZHVsZS53aW5DaGVjaygpKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZGF0YU1vZHVsZSwgZG9tTW9kdWxlLCBnYW1lYm9hcmRNb2R1bGUsIHNoaXBNb2R1bGUsIGFkZCwgc3Vua1NoaXAgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=