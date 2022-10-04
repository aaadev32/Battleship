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

            for (let j = 0; j < dataModule.fleetStatus[i].xAxis.length; j++) {


                if (dataModule.fleetStatus[i].xAxis[j] == xCoordinates) {
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                    //left off here 10-3
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, j);
                    hit = true;
                    console.log(`hit is true`)
                }
            }

            for (let j = 0; j < dataModule.fleetStatus[i].yAxis.length; j++) {

                if (dataModule.fleetStatus[i].yAxis[j] == yCoordinates) {
                    console.log(dataModule.fleetStatus[i].shipObj.hits);
                    //left off here 10-3
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, j);
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
console.log(gameboardModule.receiveAttack(3, 4));


module.exports = { dataModule, domModule, gameboardModule, shipModule, add, sunkShip };