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
//create a ship factory function, be sure to set up a test
const arraysObjectsModule = (() => {

})();

const gameboardModule = (() => {

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
        return shipHealthArr;
    }

    const isSunk = function (ship) {
        let damage = 0;
        for (i = 0; i < ship.hits; i++) {
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
    return { ship, hit };
})();
console.log(shipModule.hit(shipModule.ship().carrier.hits, 4));



module.export = { arraysObjectsModule, domManipulationModule, shipModule, test };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGVBQWU7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEOzs7O0FBSUEsa0JBQWtCLCtEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9pbXBvcnQgJy4vc3R5bGUuY3NzJztcbi8vY3JlYXRlIGEgc2hpcCBmYWN0b3J5IGZ1bmN0aW9uLCBiZSBzdXJlIHRvIHNldCB1cCBhIHRlc3RcbmNvbnN0IGFycmF5c09iamVjdHNNb2R1bGUgPSAoKCkgPT4ge1xuXG59KSgpO1xuXG5jb25zdCBnYW1lYm9hcmRNb2R1bGUgPSAoKCkgPT4ge1xuXG59KSgpO1xuXG5jb25zdCBzaGlwTW9kdWxlID0gKCgpID0+IHtcblxuICAgIC8vdGhlc2UgYWJzb2x1dGUgb2JqZWN0IHBhdGhzIG1heSBiZSBtb3JlIHVzZWZ1bCBpbiBsYXRlciBjb2RlLCBrZWVwaW5nIHRoaXMgYmxvY2sgaGVyZSBmb3Igbm93XG4gICAgLyogIGNvbnN0IGNhcnJpZXIgPSBzaGlwTW9kdWxlLnNoaXAoKS5jYXJyaWVyO1xuICAgICBjb25zdCBiYXR0bGVzaGlwID0gc2hpcE1vZHVsZS5zaGlwKCkuYmF0dGxlc2hpcDtcbiAgICAgY29uc3QgZGVzdHJveWVyID0gc2hpcE1vZHVsZS5zaGlwKCkuZGVzdHJveWVyO1xuICAgICBjb25zdCBzdWJtYXJpbmUgPSBzaGlwTW9kdWxlLnNoaXAoKS5zdWJtYXJpbmU7XG4gICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBzaGlwTW9kdWxlLnNoaXAoKS5wYXRyb2xCb2F0OyAqL1xuICAgIGNvbnN0IHNoaXAgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IGNhcnJpZXIgPSB7XG4gICAgICAgICAgICBsZW5ndGg6IDUsXG4gICAgICAgICAgICBoaXRzOiBbMCwgMCwgMCwgMCwgMF0sXG4gICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgICAgIGJhdHRsZXNoaXAgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiA0LFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXN0cm95ZXIgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtYXJpbmUgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAzLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXRyb2xCb2F0ID0ge1xuICAgICAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgICAgICAgICBoaXRzOiBbMCwgMF0sXG4gICAgICAgICAgICAgICAgc3VuazogZmFsc2UsXG4gICAgICAgICAgICB9XG5cblxuXG4gICAgICAgIHJldHVybiB7IGNhcnJpZXIsIGJhdHRsZXNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xCb2F0LCBoaXQgfTtcblxuICAgIH1cblxuICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uIChzaGlwSGVhbHRoQXJyLCBpbmRleCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBIZWFsdGhBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2hpcEhlYWx0aEFycltpXSA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGhBcnI7XG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gZnVuY3Rpb24gKHNoaXApIHtcbiAgICAgICAgbGV0IGRhbWFnZSA9IDA7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzaGlwLmhpdHM7IGkrKykge1xuICAgICAgICAgICAgaWYgKHNoaXAuaGl0c1tpXSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgZGFtYWdlKys7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGFtYWdlID09IHNoaXAubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBzaGlwLCBoaXQgfTtcbn0pKCk7XG5jb25zb2xlLmxvZyhzaGlwTW9kdWxlLmhpdChzaGlwTW9kdWxlLnNoaXAoKS5jYXJyaWVyLmhpdHMsIDQpKTtcblxuXG5cbm1vZHVsZS5leHBvcnQgPSB7IGFycmF5c09iamVjdHNNb2R1bGUsIGRvbU1hbmlwdWxhdGlvbk1vZHVsZSwgc2hpcE1vZHVsZSwgdGVzdCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==