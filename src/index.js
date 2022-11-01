import './style.css';
import rotationIconImg from './Images/Refresh_icon.svg.png'

const dataModule = (() => {
    //the gameboard arrays will store the ship objects, the attacked coordinates keeps track of what plays each player has already made.
    let player1Gameboard = [];
    let player2Gameboard = [];
    let player1AttackedCoordinates = [];
    let player2AttackedCoordinates = [];
    let pvp = false;
    let player1Turn = true;
    //becomes true when the player is placing a ship
    let shipSelection = true;
    //should be equal to the selected ship object and used to create the placement shadow when placing ships by accesing the ships length property
    let selectedShip = {};
    let selectedGameboard = null;
    let selectedEnemyGameboard = null
    let placementPhase = true;
    let verticalShipRotation = false;
    //this object keeps track of the ships that have been placed during a players turn (resets back to false at end of turn)
    let shipPlacementTracker = {
        carrier: false,
        battleship: false,
        destroyer: false,
        submarine: false,
        patrolBoat: false
    }

    return { player1Gameboard, player2Gameboard, player1AttackedCoordinates, player2AttackedCoordinates, player1Turn, pvp, shipSelection, selectedShip, selectedGameboard, selectedEnemyGameboard, placementPhase, verticalShipRotation, shipPlacementTracker };
})();
const domModule = (() => {
    const createElementIdClass = function (element, id, classN) {
        let newElement = document.createElement(element);
        newElement.id = id;
        newElement.className = classN;
        return newElement;
    }

    const removeChildren = function (parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    return { createElementIdClass, removeChildren };
})();

const playerAndPCModule = (() => {
    //this function deals hiding player screens between device handoffs and 

    function playerTurnHandler() {
        //if its a pvp game this statement block should insure the screen is hidden when passing the device
        if (dataModule.player1Turn == true && dataModule.pvp == true || dataModule.player1Turn == false && dataModule.pvp == true) {
            if (dataModule.player1Turn == false) {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                alert('player 1\'s turn. no peeking')
                dataModule.player1Turn = true;
                dataModule.selectedGameboard = dataModule.player1Gameboard;
                dataModule.selectedEnemyGameboard = dataModule.player1AttackedCoordinates
                return false;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                alert('player 2\'s turn. no peeking')
                dataModule.player1Turn = false;
                dataModule.selectedGameboard = dataModule.player2Gameboard;
                dataModule.selectedEnemyGameboard = dataModule.player2AttackedCoordinates

                return true;
            }
        } else {
            if (dataModule.player1Turn == true) {
                //alert('player 1 take a shot');
                dataModule.player1Turn = false;
                dataModule.selectedGameboard = dataModule.player2Gameboard;
                return false;
            } else {
                //alert('pc\'s turn');
                dataModule.player1Turn = true;
                dataModule.selectedGameboard = dataModule.player1Gameboard;
                return true;
            }
        }
    }
    //deprecated
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
    return { playerTurnHandler, getRandomChar, pcPlay }
})();
//create the main game loop and a module for DOM interaction. 
const gameLoopModule = (() => {
    //displays opening UI and choices for starting the game
    function userInterface() {
        document.getElementById('user-interface').style.display = 'flex';
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('pvp-selection').addEventListener('click', () => {
            dataModule.pvp = true;
            document.getElementById('user-interface').style.display = 'none';
            //call the generateBoard function to generate the board
            generateBoard();
            document.getElementById('gameboard-container').style.display = 'flex';
            document.getElementById('gameboard-container').style.justifyContent = 'space-around';
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true

            let rotationIcon = document.createElement('img');
            rotationIcon.src = rotationIconImg;
            rotationIcon.id = 'rotation-icon';
            rotationIcon.onclick = () => { if (dataModule.verticalShipRotation == true) { dataModule.verticalShipRotation = false } else { dataModule.verticalShipRotation = true } }
            document.getElementById('gameboard-header-container').appendChild(rotationIcon);

        });

        document.getElementById('pve-selection').addEventListener('click', () => {
            dataModule.pvp = false;
            document.getElementById('user-interface').style.display = 'none';
            //call the generateBoard function to generate the board
            generateBoard();
            document.getElementById('gameboard-container').style.display = 'flex';
            document.getElementById('gameboard-container').style.justifyContent = 'space-around';
            //manually calling the carrier object to be default selection upon choosing the game type as well as manually making its shipPlacementTracker true to prevent problems with for in loop
            dataModule.selectedShip = shipModule.shipConstructor().carrier;
            dataModule.shipPlacementTracker.carrier = true

            let rotationIcon = document.createElement('img');
            rotationIcon.src = rotationIconImg;
            rotationIcon.id = 'rotation-icon';
            rotationIcon.onclick = () => { if (dataModule.verticalShipRotation == true) { dataModule.verticalShipRotation = false } else { dataModule.verticalShipRotation = true } }
            document.getElementById('gameboard-header-container').appendChild(rotationIcon);

        });
    }

    //a gameboard generator that generates a div for each coordinate with a data-xaxis and a data-yaxis value for each div
    //event listeners for the players gameboard should place objects, listeners for the players targeting board should handle attack coordinates and storage info
    const generateBoard = function () {


        let gameboardContainer = domModule.createElementIdClass('div', 'gameboard-container', '');
        let gameBoard = domModule.createElementIdClass('div', 'gameboard', '');
        let opponentBoard = domModule.createElementIdClass('div', 'opponent-gameboard', '');
        let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
        let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
        let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

        //this block creates gameboard title headers 
        document.getElementById('content').appendChild(gameboardHeaderContainer);
        document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
        document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
        gameboardHeader.textContent = 'Your Fleet';
        opponentGameboardHeader.textContent = 'Enemy Territory';

        document.getElementById('content').appendChild(gameboardContainer);
        document.getElementById('gameboard-container').appendChild(gameBoard);
        document.getElementById('gameboard-container').appendChild(opponentBoard);

        document.getElementById('content').style.flexDirection = 'column';
        //the below 2 for loop i,j values are used to create the divs and data attributes for the gameboard as well as set event handlers
        //1 based indexing for more clarity when working with gameboard coordinates and data attributes
        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {

                let playerGameboardDiv = document.createElement('div');
                let enemyBoardDiv = document.createElement('div');

                //this mouseover event listener allows the DOM to display to users whether or not a ship placement is appropriate
                playerGameboardDiv.addEventListener('mouseenter', () => {
                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    if (dataModule.shipSelection == true) {
                        let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                        let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                        let firstIteration = true;
                        //use a for loop to iterate a ship.length number of times from dataModule.selectedShip and adding +1 per iteration to the data attribute of the direction main axis to create a selection shadow with background color
                        //the for loop should also record the x/yaxis coordinates to track the location of the ship should it be placed in a valid location
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from starting +1 from the mouseover point (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            } else if (dataModule.verticalShipRotation == true) {
                                //keeps the shipShadow from starting +1 from the mouseover point (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedYaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'blue';
                            }
                        }
                    }
                });
                //this event listener reverses the coloring that the mouseover event listener applies when the selected ship is not placed and the mouse is moved
                playerGameboardDiv.addEventListener('mouseleave', () => {
                    let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                    let firstIteration = true;

                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    if (dataModule.shipSelection == true) {
                        //adding + 1 to the selectedShip.length insures that there wont be a left over blue placement div as the blue shipShadow shrinks by 1 when the user places a ship
                        for (let i = 0; i < dataModule.selectedShip.length + 1; i++) {
                            //push the divs current colors to previousColors array in case the user decides to place a ship, the divs should keep the green placement color as opposed to turning back to the board color black
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            } else if (dataModule.verticalShipRotation == true) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedYaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                //stops divs that represent placed ships from having their color changed
                                if (shipShadow.style.backgroundColor == 'green') {
                                    shipShadow.style.backgroundColor == 'green';
                                    continue;
                                }
                                shipShadow.style.backgroundColor = 'black';
                            }
                        }
                    }
                });

                //this click event listener should be responsible for placing ships in the DOM and recording their coordinates to the respective gameboard object
                playerGameboardDiv.addEventListener('click', () => {
                    console.log(dataModule.selectedGameboard)
                    let selectedXaxis = parseInt(playerGameboardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(playerGameboardDiv.dataset.yaxis);
                    let shipObj = shipModule.shipConstructor();
                    let shipPlacementMarkerIteration = true;
                    let firstShipPlacemenIteration = true;
                    let xCoordinateArr = [];
                    let yCoordinateArr = [];
                    if (dataModule.placementPhase == false) {
                        return null;
                    }
                    if (dataModule.shipSelection == true) {
                        //checks for invalid placements on the xAxis
                        if (selectedXaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == false) {
                            console.log(selectedXaxis, selectedYaxis, dataModule.selectedShip.length)
                            return alert('invalid placement on the X Axis!');
                            //values greater than 11 on the yAxis are only possible when vertical ship rotation is active
                        } else if (selectedYaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == true) {
                            return alert('invalid placement on the Y Axis!')
                        }
                        //sets up the player gameboard to be iterated in the next for loop block
                        if (dataModule.player1Turn == true) {
                            dataModule.selectedGameboard = dataModule.player1Gameboard;
                        } else {
                            dataModule.selectedGameboard = dataModule.player2Gameboard;
                        }
                        //this checks for ships already placed on the selected coordinates on the current player gameboard.
                        //each ship objects xAxis and yAxis property keys are iterated and compared to the selected coordinates + j iterations (for the length of the selected ship)
                        //any conflicting coordinates throws an error stopping the user from placing a ship over another placed ship
                        for (let i = 0; i < dataModule.selectedGameboard.length; i++) {
                            let occupiedXCoordinate = false;
                            let occupiedYCoordinate = false;
                            for (let j = 0; j < dataModule.selectedShip.length; j++) {


                                dataModule.selectedGameboard[i].xAxis.forEach(coordinate => {

                                    console.log(`xCoordinates ${coordinate}, selected xCoordinate ${selectedXaxis}`)
                                    if (dataModule.verticalShipRotation == false) {
                                        if (selectedXaxis + j == coordinate) {
                                            occupiedXCoordinate = true;
                                        }
                                    } else {
                                        if (selectedXaxis == coordinate) {
                                            occupiedXCoordinate = true;
                                        }
                                    }
                                });
                                dataModule.selectedGameboard[i].yAxis.forEach(coordinate => {
                                    console.log(`yCoordinates ${coordinate}, selected yCoordinate ${selectedYaxis}`)

                                    if (dataModule.verticalShipRotation == true) {
                                        if (selectedYaxis + j == coordinate) {
                                            occupiedYCoordinate = true;
                                        }
                                    } else {
                                        if (selectedYaxis == coordinate) {
                                            occupiedYCoordinate = true;
                                        }
                                    }
                                });
                                if (occupiedXCoordinate && occupiedYCoordinate == true) {
                                    return alert('these coordinates are occupied by another ship! please choose different coordinates.');
                                }
                            }
                            //these variables must be reset every ship object iteration in the main loop
                            occupiedXCoordinate = false;
                            occupiedYCoordinate = false;
                        }

                        //this block pushes the coordinates to the ship objects coordinates array
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {

                            if (dataModule.verticalShipRotation == false) {
                                xCoordinateArr.push(selectedXaxis + i);
                                //if the placement isnt vertical the yAxis only needs to be recorded once
                                if (firstShipPlacemenIteration == true) {
                                    yCoordinateArr.push(selectedYaxis);
                                    firstShipPlacemenIteration = false;
                                }
                            } else if (dataModule.verticalShipRotation == true) {
                                yCoordinateArr.push(selectedYaxis + i);
                                //if the placement is vertical the xAxis only needs to be recorded once
                                if (firstShipPlacemenIteration == true) {
                                    xCoordinateArr.push(selectedXaxis);
                                    firstShipPlacemenIteration = false;
                                }
                            }
                            //places the ship once all coordinates of the ship length have been accounted for
                            if (i == dataModule.selectedShip.length - 1) {
                                let newShipPlacement = gameboardModule.placeShip(dataModule.selectedShip, xCoordinateArr, yCoordinateArr)
                                if (dataModule.player1Turn == true) {
                                    dataModule.player1Gameboard.push(newShipPlacement);
                                } else {
                                    dataModule.player2Gameboard.push(newShipPlacement);
                                }
                            }
                        }
                        console.log(dataModule.selectedGameboard)
                        //this block marks the divs where the ship has been placed 
                        for (let i = 0; i < dataModule.selectedShip.length; i++) {
                            //keeps the shipPlacement from starting +1 from the mouseover point
                            if (shipPlacementMarkerIteration == true && dataModule.verticalShipRotation == false) {
                                selectedXaxis -= 1;
                                shipPlacementMarkerIteration = false;
                            } else if (shipPlacementMarkerIteration == true && dataModule.verticalShipRotation == true) {
                                selectedYaxis -= 1;
                                shipPlacementMarkerIteration = false;
                            }
                            if (dataModule.verticalShipRotation == false) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            } else if (dataModule.verticalShipRotation == true) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            }
                        }
                        //the remaining blocks handle ship placement logic
                        //signals the next players turn, switches the playerGameboard, and resets the shipPlacementTracker property values to false so it can be used for the next player ship placements
                        if (dataModule.shipPlacementTracker.patrolBoat == true) {

                            for (const property in dataModule.shipPlacementTracker) {
                                dataModule.shipPlacementTracker[property] = false;
                            }
                            if (dataModule.player1Turn == false) {
                                dataModule.placementPhase = false;
                                return alert('game start!'), gameLoopModule.generateBoardNextTurn();
                            }
                            alert('player 2\'s turn')
                            dataModule.player1Turn = false;
                        }
                        //a false property in the shipPlacementTracker means the ship hasnt been placed and will become the dataModule.selectedShip for placement on playerNGameboard
                        for (const property in dataModule.shipPlacementTracker) {
                            if (dataModule.shipPlacementTracker[property] == false) {
                                dataModule.shipPlacementTracker[property] = true;
                                //the shipObj contains all ships and will be access through selected ship to be placed on the playerNGameboard arr
                                return dataModule.selectedShip = shipObj[property];
                            }
                        }
                    } else {
                        alert('placement phase over')
                    }
                });

                //this block creates new divs with data-x/y-axis values and appends them to each player gameboard
                playerGameboardDiv.dataset.xaxis = `${j}`;
                playerGameboardDiv.dataset.yaxis = `${i}`;
                playerGameboardDiv.className = 'gameboard-cell';
                enemyBoardDiv.className = 'gameboard-cell';
                document.getElementById('gameboard').appendChild(playerGameboardDiv);
                document.getElementById('opponent-gameboard').appendChild(enemyBoardDiv);
            }
        }
    }

    //on each turn after ship placement function should take the playerNGameboard object, draw the associated x/yAxis coordinates for each ship to the player gameboard, as well as take the playerNAttackedCoordinates and draw it to the "enemy territory" gameboard.
    function generateBoardNextTurn() {

        playerAndPCModule.playerTurnHandler();
        domModule.removeChildren(document.getElementById('gameboard'));
        domModule.removeChildren(document.getElementById('opponent-gameboard'));

        for (let i = 1; i < 11; i++) {
            for (let j = 1; j < 11; j++) {

                let playerGameboardDiv = document.createElement('div');
                let enemyBoardDiv = document.createElement('div');

                playerGameboardDiv.dataset.xaxis = `${j}`;
                playerGameboardDiv.dataset.yaxis = `${i}`;
                playerGameboardDiv.className = 'gameboard-cell';

                enemyBoardDiv.dataset.xaxis = `${j}`;
                enemyBoardDiv.dataset.yaxis = `${i}`;
                enemyBoardDiv.className = 'gameboard-cell';

                document.getElementById('gameboard').appendChild(playerGameboardDiv);
                document.getElementById('opponent-gameboard').appendChild(enemyBoardDiv);

                //check for player turn then iterate through associated players gameboard object to get the ship coordinates and draw them to DOM
                //check for players attacked coordinates board and iterate through it and draw them to the DOM

                //iterates through playerGameboard objects for ship placement coordinates marking the divs the associated data attributes
                for (let k = 0; k < dataModule.selectedGameboard.length; k++) {
                    let xCoordinate = null;
                    let yCoordinate = null;
                    dataModule.selectedGameboard[k].xAxis.forEach(coordinate => {
                        xCoordinate = coordinate
                        dataModule.selectedGameboard[k].yAxis.forEach(coordinate => {
                            yCoordinate = coordinate
                            if (xCoordinate == j && yCoordinate == i) {
                                document.querySelector(`[data-xaxis="${xCoordinate}"][data-yaxis="${yCoordinate}"]`).style.backgroundColor = 'green';
                            }
                        });
                    });
                }

                //this click event listener should trigger the receiveAttack function with the data-x/yaxis attributes
                enemyBoardDiv.addEventListener('click', () => {
                    let selectedXaxis = parseInt(enemyBoardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(enemyBoardDiv.dataset.yaxis);
                    gameboardModule.receiveAttack(selectedXaxis, selectedYaxis);

                    //figure out how to record a miss or a hit to the gameboard of each player, maybe use data attributes such as "hit" or "miss" so that when present change a div to a certain color

                });
            }
        }
    }


    return { userInterface, generateBoard, generateBoardNextTurn };
})();
const gameboardModule = (() => {
    let placeShip = function (ship, xCoordinates, yCoordinates) {

        let shipPlacement = {
            shipObj: ship,
            xAxis: null,
            yAxis: null
        }
        shipPlacement.xAxis = xCoordinates;
        shipPlacement.yAxis = yCoordinates;
        return shipPlacement;
    }
    //playerAttackedCoordinates should be the attacking players used coordinates, x/ycoordinates are the chosen coordinates by the attacking player, selectedGameBoard should be set properly prior to calling this function
    function receiveAttack(xCoordinates, yCoordinates) {
        let xCoordinatesTrue = false;
        let yCoordinatesTrue = false;
        let xHitIndex = null;
        let yHitIndex = null;



        for (let i = 0; i < dataModule.selectedGameboard.length; i++) {
            console.log(dataModule.selectedGameboard[i].shipObj.hits);
            //checks if xCoordinate hits
            for (let j = 0; j < dataModule.selectedGameboard[i].xAxis.length; j++) {
                if (dataModule.selectedGameboard[i].xAxis[j] == xCoordinates) {
                    xHitIndex = j;
                    xCoordinatesTrue = true
                }
            }
            //checks if yCoordinate hits
            for (let j = 0; j < dataModule.selectedGameboard[i].yAxis.length; j++) {

                if (dataModule.selectedGameboard[i].yAxis[j] == yCoordinates) {
                    yHitIndex = j;
                    yCoordinatesTrue = true;
                }
            }
            //if both coordinates hits are true, call hit function on correct ship and index of its hits array
            if (xCoordinatesTrue && yCoordinatesTrue == true) {
                let hitXYCoordinates = { x: xCoordinates, y: yCoordinates };
                dataModule.selectedEnemyGameboard[i].push(hitXYCoordinates);
                dataModule.selectedGameboard[i].shipObj.hits++

                return true, alert(`attack ${xCoordinates}, ${yCoordinates} hits!`);
            } else {
                //keep track of missed coordinates for DOM display
                let missedXYCoordinates = { x: xCoordinates, y: yCoordinates };
                dataModule.selectedEnemyGameboard.push(missedXYCoordinates);
                //note for when DOM is added, add code here that marks the correct DOM element for an attack with x/yCoordinates that miss
                return false, alert(`attack ${xCoordinates}, ${yCoordinates} misses!`);
            }
        }
    }

    function winCheck() {
        let player1SunkShips = 0;
        let player2SunkShips = 0;

        for (let i = 0; i < dataModule.player1Gameboard.length; i++) {
            if (dataModule.player1Gameboard[i].shipObj.sunk == true) {
                player1SunkShips++;
            }
        }

        for (let i = 0; i < dataModule.player2Gameboard.length; i++) {
            if (dataModule.player2Gameboard[i].shipObj.sunk == true) {
                player2SunkShips++;
            }
        }

        if (player1SunkShips == dataModule.player1Gameboard.length) {
            return alert('player 2 wins!');
        } else if (player2SunkShips == dataModule.player2Gameboard.length) {
            return alert('player 1 wins!');
        } else {
            return null;
        }
    }


    return { placeShip, receiveAttack, winCheck }
})();

const shipModule = (() => {

    const shipConstructor = function () {

        let carrier = {
            length: 5,
            hits: 0,
            sunk: false,
        },
            battleship = {
                length: 4,
                hits: 0,
                sunk: false,
            },
            destroyer = {
                length: 3,
                hits: 0,
                sunk: false,
            },
            submarine = {
                length: 3,
                hits: 0,
                sunk: false,
            },
            patrolBoat = {
                length: 2,
                hits: 0,
                sunk: false,
            }

        return { carrier, battleship, destroyer, submarine, patrolBoat };

    }

    function hit(shipObj) {
        shipObj.hits++
    }

    function isSunk(shipObj) {

        if (shipObj.length == shipObj.hits) {
            shipObj.isSunk = true
            return alert('ship is sunk!');
        }
    }

    return { shipConstructor, hit, isSunk };
})();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//below 2 lines is for the sake of testing only
let testShip = shipModule.shipConstructor.battleship
dataModule.selectedShip = { testShip };


gameLoopModule.userInterface();




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