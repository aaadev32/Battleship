//import './style.css';
//create a ship factory function, be sure to set up a test

//this module contains functions that make it easier to build DOM Elements
const domModule = (() => {
    const createElementIdClass = function (element, id, classN) {
        let newELement = document.createElement(element);
        newELement.id = id
        newELement.className = classN;
        return newELement;
    }

    return { createElementIdClass };
})();

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
        return shipHealthArr
    }

    const isSunk = function (ship) {
        let damage = 0;
        for (let i = 0; i < ship.hits; i++) {
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
    return { ship, hit, isSunk };
})();
console.log(shipModule.hit(shipModule.ship().carrier.hits, 4));
console.log(shipModule.isSunk(shipModule.ship().carrier))

let test = domModule.createElementIdClass('div', 'test', 'test')
test.backgroundColor = 'black';
document.getElementById('content').appendChild(test);




module.export = { domModule, gameboardModule, shipModule };

//fix document not defined line 7