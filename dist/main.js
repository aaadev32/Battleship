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

const domManipulationModule = (() => {

})();

const factoryFunctionModule = (() => {

    //these absolute object paths may be more useful in later code, keeping this block here for now
    /*  const carrier = factoryFunctionModule.ship().carrier;
     const battleship = factoryFunctionModule.ship().battleship;
     const destroyer = factoryFunctionModule.ship().destroyer;
     const submarine = factoryFunctionModule.ship().submarine;
     const patrolBoat = factoryFunctionModule.ship().patrolBoat; */
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
    return { ship, hit };
})();

console.log(factoryFunctionModule.hit(factoryFunctionModule.ship().carrier.hits, 4));
//change the hit function so that it only takes an index and changes the hit.arr on the correct ship object



module.export = { arraysObjectsModule, domManipulationModule, factoryFunctionModule };
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDs7QUFFQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLGlCQUFpQjs7QUFFakI7O0FBRUE7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7Ozs7QUFJQSxrQkFBa0Isb0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvL2ltcG9ydCAnLi9zdHlsZS5jc3MnO1xuLy9jcmVhdGUgYSBzaGlwIGZhY3RvcnkgZnVuY3Rpb24sIGJlIHN1cmUgdG8gc2V0IHVwIGEgdGVzdFxuY29uc3QgYXJyYXlzT2JqZWN0c01vZHVsZSA9ICgoKSA9PiB7XG5cbn0pKCk7XG5cbmNvbnN0IGRvbU1hbmlwdWxhdGlvbk1vZHVsZSA9ICgoKSA9PiB7XG5cbn0pKCk7XG5cbmNvbnN0IGZhY3RvcnlGdW5jdGlvbk1vZHVsZSA9ICgoKSA9PiB7XG5cbiAgICAvL3RoZXNlIGFic29sdXRlIG9iamVjdCBwYXRocyBtYXkgYmUgbW9yZSB1c2VmdWwgaW4gbGF0ZXIgY29kZSwga2VlcGluZyB0aGlzIGJsb2NrIGhlcmUgZm9yIG5vd1xuICAgIC8qICBjb25zdCBjYXJyaWVyID0gZmFjdG9yeUZ1bmN0aW9uTW9kdWxlLnNoaXAoKS5jYXJyaWVyO1xuICAgICBjb25zdCBiYXR0bGVzaGlwID0gZmFjdG9yeUZ1bmN0aW9uTW9kdWxlLnNoaXAoKS5iYXR0bGVzaGlwO1xuICAgICBjb25zdCBkZXN0cm95ZXIgPSBmYWN0b3J5RnVuY3Rpb25Nb2R1bGUuc2hpcCgpLmRlc3Ryb3llcjtcbiAgICAgY29uc3Qgc3VibWFyaW5lID0gZmFjdG9yeUZ1bmN0aW9uTW9kdWxlLnNoaXAoKS5zdWJtYXJpbmU7XG4gICAgIGNvbnN0IHBhdHJvbEJvYXQgPSBmYWN0b3J5RnVuY3Rpb25Nb2R1bGUuc2hpcCgpLnBhdHJvbEJvYXQ7ICovXG4gICAgY29uc3Qgc2hpcCA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgY2FycmllciA9IHtcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgICAgIGhpdHM6IFswLCAwLCAwLCAwLCAwXSxcbiAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICAgICAgYmF0dGxlc2hpcCA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc3Ryb3llciA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Ym1hcmluZSA9IHtcbiAgICAgICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgICAgICAgICAgaGl0czogWzAsIDAsIDBdLFxuICAgICAgICAgICAgICAgIHN1bms6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhdHJvbEJvYXQgPSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoOiAyLFxuICAgICAgICAgICAgICAgIGhpdHM6IFswLCAwXSxcbiAgICAgICAgICAgICAgICBzdW5rOiBmYWxzZSxcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgcmV0dXJuIHsgY2FycmllciwgYmF0dGxlc2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbEJvYXQsIGhpdCB9O1xuXG4gICAgfVxuXG4gICAgY29uc3QgaGl0ID0gZnVuY3Rpb24gKHNoaXBIZWFsdGhBcnIsIGluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEhlYWx0aEFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzaGlwSGVhbHRoQXJyW2ldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcEhlYWx0aEFycjtcbiAgICB9XG4gICAgcmV0dXJuIHsgc2hpcCwgaGl0IH07XG59KSgpO1xuXG5jb25zb2xlLmxvZyhmYWN0b3J5RnVuY3Rpb25Nb2R1bGUuaGl0KGZhY3RvcnlGdW5jdGlvbk1vZHVsZS5zaGlwKCkuY2Fycmllci5oaXRzLCA0KSk7XG4vL2NoYW5nZSB0aGUgaGl0IGZ1bmN0aW9uIHNvIHRoYXQgaXQgb25seSB0YWtlcyBhbiBpbmRleCBhbmQgY2hhbmdlcyB0aGUgaGl0LmFyciBvbiB0aGUgY29ycmVjdCBzaGlwIG9iamVjdFxuXG5cblxubW9kdWxlLmV4cG9ydCA9IHsgYXJyYXlzT2JqZWN0c01vZHVsZSwgZG9tTWFuaXB1bGF0aW9uTW9kdWxlLCBmYWN0b3J5RnVuY3Rpb25Nb2R1bGUgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=