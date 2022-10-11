import './style.css';

const dataModule = (() => {
    let player1fleetStatus = [];
    let player2fleetStatus = []
    let player1UsedCoordinates = [];
    let player2UsedCoordinates = [];
    let pvp = false;
    let player1Turn = true;

    return { player1fleetStatus, player2fleetStatus, player1UsedCoordinates, player2UsedCoordinates, player1Turn, pvp };
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
                //alert('player 1\'s turn! no peeking.')
                dataModule.player1Turn = false;
                return false;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                //alert('player 2\'s turn! no peeking.')
                dataModule.player1Turn = true;
                return true;
            }
        } else {
            if (dataModule.player1Turn == true) {
                //alert('player 1 take a shot');
                dataModule.player1Turn = false;
                return false;
            } else {
                //alert('pc\'s turn');
                dataModule.player1Turn = true;
                return true;
            }
        }
    }

    function getRandomChar() {
        let result = '';
        let characters = 'abcdefghij';
        for (let i = 0; i < 1; i++) {
            result = characters.charAt(Math.floor(Math.random() *
                characters.length));
        }
        return result;
    }
    //create an ai function that will determine the computer players attacks
    function pcPlay() {
        //get a random integer between 0 and 10 (x axis)
        let randomXCoordinate = Math.floor(Math.random() * 11);
        //get a random integer between 0 and 10 (y axis)
        let randomYCoordinate = Math.floor(Math.random() * 11);
        //plug the random x and y coordinates IF they do not match a pair of coordinates in the dataModule usedCoordinates array
        for (i = 0; i < dataModule.usedCoordinates.length; i++) {
            for (const property in dataModule.usedCoordinates[i]) {
                //this block will recursively call the pcPlay function until the randomCoordinates consist of a pair that have not already been played
                if (dataModule.usedCoordinates.x == randomXCoordinate && dataModule.usedCoordinates.y == randomYCoordinate) {
                    pcPlay()
                }
            }
        }
        //if the random coordinate pairs do not match any in the usedCoordinates array they should be passed through the receive attack function
        gameboardModule.receiveAttack(randomXCoordinate, randomYCoordinate);
    }
    return { player, getRandomChar, pcPlay }
})();
//create the main game loop and a module for DOM interaction. 
const gameLoopModule = (() => {
    function userInterface() {
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('user-interface').style.display = 'flex';

    }

    return { userInterface };
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
            //checks if xCoordinate hits
            for (let j = 0; j < dataModule.fleetStatus[i].xAxis.length; j++) {


                if (dataModule.fleetStatus[i].xAxis[j] == xCoordinates) {
                    xHitIndex = j;
                    xCoordinatesTrue = true
                }
            }
            //checks if yCoordinate hits
            for (let j = 0; j < dataModule.fleetStatus[i].yAxis.length; j++) {

                if (dataModule.fleetStatus[i].yAxis[j] == yCoordinates) {
                    yHitIndex = j;
                    yCoordinatesTrue = true;
                }
            }
            //if both coordinates hits are true, call hit function on correct ship and index of its hits array
            if (xCoordinatesTrue && yCoordinatesTrue == true) {
                //when scanning the nAxis arrays for equality comparison to the x/yCoordinate parameters use the the nAxis truthy index value of the longest nAxis array as the index parameter in the hit() function to insure the correct hit index is marked 
                if (dataModule.fleetStatus[i].xAxis.length > dataModule.fleetStatus[i].yAxis.length) {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, xHitIndex)
                    let hitCoordinates = { x: xCoordinates, y: yCoordinates };
                    dataModule.usedCoordinates.push(hitCoordinates)
                } else {
                    shipModule.hit(dataModule.fleetStatus[i].shipObj.hits, yHitIndex)
                }
                return true;//alert(`attack ${xCoordinates}, ${yCoordinates} hits!`)
            } else {
                //keep track of missed coordinates for DOM display
                let missedXYCoordinates = { x: xCoordinates, y: yCoordinates };
                dataModule.usedCoordinates.push(missedXYCoordinates);
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
        //create a gameboard generator that generates a div for each coordinate with a data-xaxis and
        //a data-yaxis value for each div

        //the next 6 lines creates a gameboard-container and appends the 2 gameboards inside of it
        let gameboardContainer = domModule.createElementIdClass('div', 'gameboard-container', '');
        let player1GameBoard = domModule.createElementIdClass('div', 'player1-gameboard', '');
        let player2GameBoard = domModule.createElementIdClass('div', 'player2-gameboard', '');
        document.getElementById('content').appendChild(gameboardContainer);
        document.getElementById('gameboard-container').appendChild(player1GameBoard);
        document.getElementById('gameboard-container').appendChild(player2GameBoard);

        //1 based indexing for more clarity when working with gameboard coordinates and data attributes
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {

                //this for loop block creates new divs with data-x/y-axis values and appends them to each player gameboard
                let newDiv = document.createElement('div')
                let newDiv2 = document.createElement('div')
                newDiv.dataset.xaxis = `${i}`;
                newDiv.dataset.yaxis = `${j}`;
                newDiv.className = 'gameboard-cell';
                newDiv2.className = 'gameboard-cell';
                newDiv2.setAttribute('data-xaxis', i);
                newDiv2.setAttribute('data-yaxis', j);
                document.getElementById('player1-gameboard').appendChild(newDiv);
                document.getElementById('player2-gameboard').appendChild(newDiv2);
            }
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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//sets the user interface display to flex on page open
gameLoopModule.userInterface();
document.getElementById('pvp-selection').addEventListener('click', () => {
    dataModule.pvp = true;
    document.getElementById('user-interface').style.display = 'none';
    //call the generateBoard function to generate the board
    gameboardModule.generateBoard();
});

document.getElementById('pve-selection').addEventListener('click', () => {
    dataModule.pvp = false;
    document.getElementById('user-interface').style.display = 'none';
    //call the generateBoard function to generate the board
    gameboardModule.generateBoard();
});

//let testDiv = domModule.createElementIdClass('div','test', 'test');
//document.getElementById('content').appendChild(testDiv);

//the block below is for jest testing
/*let sunkShip = shipModule.ship().battleship.hits;
sunkShip.hits = [1, 1, 1, 1];
let gameBoardTestShip = gameboardModule.gameboard(shipModule.ship().battleship, [0, 1, 2, 3], [0])
dataModule.fleetStatus = [gameBoardTestShip];
gameboardModule.receiveAttack(1, 0);
gameboardModule.receiveAttack(3, 4);
console.log(playerAndPCModule.getRandomChar())
console.log(dataModule.usedCoordinates[0], dataModule.usedCoordinates[1])
const newBool = playerAndPCModule.player()
module.exports = { dataModule, playerAndPCModule, domModule, gameLoopModule, gameboardModule, shipModule, sunkShip, newBool }; */