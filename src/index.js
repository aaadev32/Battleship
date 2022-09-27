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
