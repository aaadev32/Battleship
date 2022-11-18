import './style.css';
import rotationIconImg from './Images/Refresh_icon.svg.png'

const dataModule = (() => {
    //the gameboard arrays will store the ship objects, the attacked coordinates keeps track of what plays each player has already made.
    let player1Gameboard = [];
    let player2Gameboard = [];
    let pvp = false;
    //determines players turns when setting up board, afterwards it is used to determine player turn in the gameloop
    let player1Turn = true;
    //becomes true when the player is placing a ship
    let shipSelection = true;
    //should be equal to the selected ship object and used to create the placement shadow when placing ships by accesing the ships length property
    let selectedShip = {};
    let currentPlayerGameboard = null;
    let currentEnemyGameboard = null
    let placementPhase = true;
    let verticalShipRotation = false;
    //used in receiveAttack function to set divs marking hit or misses on gameboards, i used this over returning a bool in the receiveAttack because checking the bool also requires running the function causing the function to run twice
    let hitBool = null;
    let opponentBoardNumber;
    //this object keeps track of the ships that have been placed during a players turn (resets back to false at end of turn)
    let shipPlacementTracker = {
        carrier: false,
        battleship: false,
        destroyer: false,
        submarine: false,
        patrolBoat: false
    }

    return {
        player1Gameboard, player2Gameboard, player1Turn, pvp, shipSelection, selectedShip, currentPlayerGameboard, currentEnemyGameboard, placementPhase, verticalShipRotation, hitBool, opponentBoardNumber, shipPlacementTracker
    };
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
    //this function deals hiding player screens between device handoffs and changing the player gameboards between turns
    function playerTurnHandler() {
        console.log(`player 1 turn? ${dataModule.player1Turn}, current gameboard? ${dataModule.currentPlayerGameboard}`)
        document.getElementById('gameboard-container-0').style.display = 'none';
        document.getElementById('gameboard-container-1').style.display = 'none';
        //this if block handles PvE
        if (dataModule.player1Turn == false && dataModule.pvp == false) {
            alert('players turn')
            document.getElementById('gameboard-container-0').style.display = 'flex';
            dataModule.player1Turn = true;
            dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
            dataModule.currentEnemyGameboard = dataModule.player2Gameboard;
            return null;
        } else if (dataModule.player1Turn == true && dataModule.pvp == false) {
            document.getElementById('gameboard-container-0').style.display = 'flex';
            alert('pc\s turn')

            dataModule.player1Turn = false;
            dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
            dataModule.currentEnemyGameboard = dataModule.player1Gameboard;

            let randomXCoordinate = randomCoordinate();
            let randomYCoordinate = randomCoordinate();
            document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="opponent-gameboard-1-cell"]`)?.click()
            return null;
        }
        //if its a PvP game this statement block should insure the screen is hidden when passing the device
        if (dataModule.player1Turn == true && dataModule.pvp == true || dataModule.player1Turn == false && dataModule.pvp == true) {
            if (dataModule.player1Turn == false) {
                //the setTimeout function are used since it seems an alert statement actually gets fired before anything else in this block then immediatley firing the code after the alerts code line once the alert is closed, the setTimeout function fixes this by 
                //only setting the gameboard containers to flex after the window has been closed
                setTimeout(() => {
                    alert('player 1\'s turn. no peeking');

                }, 150);
                setTimeout(() => {
                    dataModule.player1Turn = true;
                    dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
                    dataModule.currentEnemyGameboard = dataModule.player2Gameboard;
                    //turn off the 2nd player gameboard display and turn on the 1st players
                    document.getElementById('gameboard-container-0').style.display = 'flex';

                }, 180);
                return null;
            } else {
                //implement a DOM handler to cover the game board when the DOM actually gets implemented
                setTimeout(() => {
                    alert('player 2\'s turn. no peeking');
                }, 150);

                setTimeout(() => {
                    dataModule.player1Turn = false;
                    dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
                    dataModule.currentEnemyGameboard = dataModule.player1Gameboard;
                    //turn off the 1st player gameboard display and turn on the 2nd players
                    document.getElementById('gameboard-container-1').style.display = 'flex';
                }, 180);
                return null;
            }
        }
    }

    function randomCoordinate() {
        return Math.ceil(Math.random() * 11);
    }

    function pcPlaceShips() {
        //place the pc players ships before calling the playerTurnHandler() which commences the game loop
        //prevents the only for in loop on the ship placement click event listener from starting with patrol boat

        for (let i = 0; dataModule.player2Gameboard.length < 5; i++) {
            let randomXCoordinate = playerAndPCModule.randomCoordinate();
            let randomYCoordinate = playerAndPCModule.randomCoordinate();
            let randomVerticalSelection = playerAndPCModule.randomCoordinate();
            //creates a 50% chance to rotate ship placement for the pc player, null selectons 
            if (randomVerticalSelection <= 5) {
                dataModule.verticalShipRotation = true;
            } else {
                dataModule.verticalShipRotation = false;
            }
            console.log(dataModule.player2Gameboard, randomXCoordinate, randomYCoordinate);
            //optional chaining operator keeps query selector from throwing null
            document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="gameboard-1-cell"]`)?.click();
        }
        dataModule.placementPhase = false;
        dataModule.verticalShipRotation = false;
        //sets up playerTurnHandler for player 1's turn since player1Turn variable is used for determining ship placement turn as well
        dataModule.player1Turn = false;
        playerAndPCModule.playerTurnHandler();
    }
    return { playerTurnHandler, randomCoordinate, pcPlaceShips }
})();
//this module deals with event listeners and UI that triggers the game loop
const gameLoopModule = (() => {
    //displays opening UI and choices for starting the game
    function userInterface() {
        document.getElementById('user-interface').style.display = 'flex';
        //The game loop should set up a new game by creating Players and Gameboards
        document.getElementById('pvp-selection').addEventListener('click', () => {
            dataModule.pvp = true;
            document.getElementById('user-interface').style.display = 'none';

            //create board contianers
            let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
            let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
            let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

            //this block creates gameboard title headers 
            document.getElementById('content').appendChild(gameboardHeaderContainer);
            document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
            document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
            gameboardHeader.textContent = 'Your Fleet';
            opponentGameboardHeader.textContent = 'Enemy Territory';
            //call the generateBoards function to generate the first board
            generateBoards();
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

            //create board contianers
            let gameboardHeader = domModule.createElementIdClass('p', 'gameboard-header', '');
            let opponentGameboardHeader = domModule.createElementIdClass('p', 'opponent-gameboard-header', '');
            let gameboardHeaderContainer = domModule.createElementIdClass('div', 'gameboard-header-container', '');

            //this block creates gameboard title headers 
            document.getElementById('content').appendChild(gameboardHeaderContainer);
            document.getElementById('gameboard-header-container').appendChild(gameboardHeader);
            document.getElementById('gameboard-header-container').appendChild(opponentGameboardHeader);
            gameboardHeader.textContent = 'Your Fleet';
            opponentGameboardHeader.textContent = 'Enemy Territory';
            //call the generateBoards function to generate the board
            generateBoards();
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
    const generateBoards = function () {
        //used to set class and id names to distinguish between 1st and 2nd player boards
        let numberOfGameboards = 0;
        if (document.getElementById('gameboard-container-0')) {
            numberOfGameboards++
            document.getElementById('gameboard-container-0').style.display = 'none';
        }
        let gameboardContainer = domModule.createElementIdClass('div', `gameboard-container-${numberOfGameboards}`, '');
        let gameBoard = domModule.createElementIdClass('div', `gameboard-${numberOfGameboards}`, '');
        let opponentBoard = domModule.createElementIdClass('div', `opponent-gameboard-${numberOfGameboards}`, '');

        document.getElementById('content').appendChild(gameboardContainer);
        document.getElementById(`gameboard-container-${numberOfGameboards}`).appendChild(gameBoard);
        document.getElementById(`gameboard-container-${numberOfGameboards}`).appendChild(opponentBoard);

        document.getElementById(`gameboard-container-${numberOfGameboards}`).style.display = 'flex';
        document.getElementById(`gameboard-container-${numberOfGameboards}`).style.justifyContent = 'space-around';

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
                    //below line stops the human player board from having ship placement hover effects in PvE
                    if (dataModule.pvp == false && dataModule.player1Turn == false) {
                        return null;
                    }
                    if (dataModule.placementPhase == true) {
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
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
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
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
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
                    //below line stops the human player board from having ship placement hover effects in PvE
                    if (dataModule.pvp == false && dataModule.player1Turn == false) {
                        return null;
                    }
                    if (dataModule.placementPhase == true) {
                        //adding + 1 to the selectedShip.length insures that there wont be a left over blue placement div as the blue shipShadow shrinks by 1 when the user places a ship
                        for (let i = 0; i < dataModule.selectedShip.length + 1; i++) {
                            //push the divs current colors to previousColors array in case the user decides to place a ship, the divs should keep the green placement color as opposed to turning back to the board color black
                            if (dataModule.verticalShipRotation == false) {
                                //keeps the shipShadow from leaving 1 block at the furthest point along the main axis when a ship has been placed (due to 1 based indexing)
                                if (firstIteration == true) {
                                    selectedXaxis -= 1;
                                    firstIteration = false;
                                }
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
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
                                let shipShadow = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
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

                //this click event listener is responsible for placing ships in the DOM and recording their coordinates to the respective gameboard object
                playerGameboardDiv.addEventListener('click', () => {
                    console.log(`current gameboard -> ${dataModule.currentPlayerGameboard}`)
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
                    if (dataModule.placementPhase == true) {
                        //checks for invalid placements on the xAxis
                        if (selectedXaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == false) {
                            console.log(selectedXaxis, selectedYaxis, dataModule.selectedShip.length)
                            if (dataModule.pvp == true) {
                                return alert('invalid placement on the X Axis!');
                            } else {
                                return null
                            }
                            //values greater than 11 on the yAxis are only possible when vertical ship rotation is active
                        } else if (selectedYaxis + dataModule.selectedShip.length > 11 && dataModule.verticalShipRotation == true) {
                            if (dataModule.pvp == true) {
                                return alert('invalid placement on the Y Axis!')
                            } else {
                                return null;
                            }
                        }
                        //sets up the player gameboard on each placement turn to be iterated in the next for loop block, player turns after ship placement are handled by playerTurnHandler() on attacks
                        if (dataModule.player1Turn == true) {
                            dataModule.currentPlayerGameboard = dataModule.player1Gameboard;
                        } else {
                            dataModule.currentPlayerGameboard = dataModule.player2Gameboard;
                        }
                        //this checks for ships already placed on the selected coordinates on the current player gameboard.
                        //each ship objects xAxis and yAxis property keys are iterated and compared to the selected coordinates + j iterations (for the length of the selected ship)
                        //any conflicting coordinates throws an error stopping the user from placing a ship over another placed ship
                        for (let i = 0; i < dataModule.currentPlayerGameboard.length; i++) {
                            let occupiedXCoordinate = false;
                            let occupiedYCoordinate = false;
                            for (let j = 0; j < dataModule.selectedShip.length; j++) {


                                dataModule.currentPlayerGameboard[i].xAxis.forEach(coordinate => {

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
                                dataModule.currentPlayerGameboard[i].yAxis.forEach(coordinate => {
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
                                    if (dataModule.pvp == true) {
                                        return alert('these coordinates are occupied by another ship! please choose different coordinates.');
                                    } else {
                                        return null;
                                    }
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
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis += 1}"][data-yaxis="${selectedYaxis}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            } else if (dataModule.verticalShipRotation == true) {
                                let shipPlacement = document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis += 1}"][class="gameboard-${numberOfGameboards}-cell"]`);
                                shipPlacement.style.backgroundColor = 'green';
                            }
                        }
                        //a false property in the shipPlacementTracker means the ship hasnt been placed and will become the dataModule.selectedShip for placement on playerNGameboard
                        for (const property in dataModule.shipPlacementTracker) {
                            if (dataModule.shipPlacementTracker[property] == false) {
                                dataModule.shipPlacementTracker[property] = true;
                                //the shipObj contains all ships and will be access through selected ship to be placed on the playerNGameboard arr
                                return dataModule.selectedShip = shipObj[property];
                            }
                        }
                        //the remaining blocks handle ship placement logic
                        //signals the next players turn DURING the placement phase, switches the playerGameboard, and resets the shipPlacementTracker property values to false so it can be used for the next player ship placements
                        if (dataModule.shipPlacementTracker.patrolBoat == true) {
                            //resets the tracker property values
                            for (const property in dataModule.shipPlacementTracker) {
                                dataModule.shipPlacementTracker[property] = false;
                            }
                            //im too slow to understand why the below 2 lines are neccessary to stop double ship placements :^)
                            dataModule.selectedShip = shipObj.carrier;
                            dataModule.shipPlacementTracker.carrier = true;

                            //stops mouse hover effects after all ships have been placed by both players in PvP and starts the game
                            if (dataModule.player1Turn == false && dataModule.pvp == true) {
                                dataModule.placementPhase = false;
                                return alert('game start!'), playerAndPCModule.playerTurnHandler();
                            }
                            if (dataModule.pvp == true) {
                                alert('player 2\'s turn to place ships')
                            }
                            dataModule.player1Turn = false;
                            //sets up player 2 or AI gameboard
                            generateBoards();
                        }
                    }
                });

                //this click event listener should trigger the receiveAttack function with the data-x/yaxis attributes as well as mark both players gameboards where each player has missed or hit
                enemyBoardDiv.addEventListener('click', () => {
                    //this is to set up for the query selector a few lines below.
                    if (dataModule.player1Turn == true) {
                        dataModule.opponentBoardNumber = 1;
                    } else {
                        dataModule.opponentBoardNumber = 0;
                    }
                    if (enemyBoardDiv.style.backgroundColor == 'grey' || enemyBoardDiv.style.backgroundColor == 'red') {
                        //makes the pc ai attack again in the case where it would attack a coordinate that has been used before
                        if (dataModule.pvp == false && dataModule.player1Turn == false) {
                            let randomXCoordinate = playerAndPCModule.randomCoordinate();
                            let randomYCoordinate = playerAndPCModule.randomCoordinate();
                            document.querySelector(`[data-xaxis="${randomXCoordinate}"][data-yaxis="${randomYCoordinate}"][class="opponent-gameboard-1-cell"]`)?.click()
                        } else {
                            return alert('choose another coordinate');
                        }
                    }
                    let selectedXaxis = parseInt(enemyBoardDiv.dataset.xaxis);
                    let selectedYaxis = parseInt(enemyBoardDiv.dataset.yaxis);
                    console.log(`selected x-axis ${selectedXaxis}, selected y-axis${selectedYaxis}`);
                    if (gameboardModule.receiveAttack(selectedXaxis, selectedYaxis)) {
                        enemyBoardDiv.style.backgroundColor = 'red';
                        //this marks the enemy board so the other player can view where they have been hit by the opposing player
                        document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis}"][class="gameboard-${dataModule.opponentBoardNumber}-cell"]`).style.backgroundColor = 'red';
                        alert(`attack ${selectedXaxis}, ${selectedYaxis} hits!`)
                    } else {
                        enemyBoardDiv.style.backgroundColor = 'grey';
                        //this query selector marks misses on the other players board to view where they have been missed by the opposing player
                        document.querySelector(`[data-xaxis="${selectedXaxis}"][data-yaxis="${selectedYaxis}"][class="gameboard-${dataModule.opponentBoardNumber}-cell"]`).style.backgroundColor = 'grey';
                        alert(`attack ${selectedXaxis}, ${selectedYaxis} misses!`)
                    }
                    playerAndPCModule.playerTurnHandler();
                });
                //this block creates new divs with data-x/y-axis values and appends them to each player gameboard
                playerGameboardDiv.dataset.xaxis = `${j}`;
                playerGameboardDiv.dataset.yaxis = `${i}`;
                playerGameboardDiv.className = `gameboard-${numberOfGameboards}-cell`;

                enemyBoardDiv.dataset.xaxis = `${j}`;
                enemyBoardDiv.dataset.yaxis = `${i}`;
                enemyBoardDiv.className = `opponent-gameboard-${numberOfGameboards}-cell`;
                document.getElementById(`gameboard-${numberOfGameboards}`).appendChild(playerGameboardDiv);
                document.getElementById(`opponent-gameboard-${numberOfGameboards}`).appendChild(enemyBoardDiv);
            }
        }
        //places the pc players ships after player 1's turn is over
        if (dataModule.pvp == false && dataModule.player1Turn == false) {
            //the below low lines set up the shipPlacement tracker normally done in the click event listener for Pv
            playerAndPCModule.pcPlaceShips();
        }
    }

    return { userInterface, generateBoards };
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
    //x/ycoordinates are the chosen coordinates by the attacking player, currentPlayerGameboard should be set properly prior to calling this function
    function receiveAttack(xCoordinates, yCoordinates) {
        console.log(dataModule.currentEnemyGameboard)
        let xCoordinatesTrue = null;
        let yCoordinatesTrue = null;
        //write an attackedCoordinates checker so the player cannot call on the same coordinates more than once
        for (let i = 0; i < dataModule.currentEnemyGameboard.length; i++) {
            xCoordinatesTrue = null;
            yCoordinatesTrue = null;
            //checks if xCoordinate hits
            for (let j = 0; j < dataModule.currentEnemyGameboard[i].xAxis.length; j++) {
                if (dataModule.currentEnemyGameboard[i].xAxis[j] == xCoordinates) {
                    xCoordinatesTrue = true
                }
            }
            //checks if yCoordinate hits
            for (let j = 0; j < dataModule.currentEnemyGameboard[i].yAxis.length; j++) {
                if (dataModule.currentEnemyGameboard[i].yAxis[j] == yCoordinates) {
                    yCoordinatesTrue = true;
                }
            }
            //if both coordinates hits are true, call hit function on correct ship and index of its hits array
            if (xCoordinatesTrue && yCoordinatesTrue == true) {
                dataModule.hitBool = true;
                if (dataModule.player1Turn == true) {
                    dataModule.player2Gameboard[i].shipObj.hits++;
                    //check if sunk or won game
                    shipModule.isSunk(dataModule.player2Gameboard[i].shipObj)
                    gameboardModule.winCheck()
                } else {
                    dataModule.player1Gameboard[i].shipObj.hits++;
                    shipModule.isSunk(dataModule.player1Gameboard[i].shipObj)
                    gameboardModule.winCheck()
                }
                return true;
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
            document.getElementById('gameboard-container-0').style.display = 'none';
            document.getElementById('gameboard-container-1').style.display = 'none';
            document.getElementById('gameboard-header-container').style.display = 'none';
            document.getElementById('victory-screen').textContent = 'player 2 Wins!!';
            document.getElementById('victory-screen').style.display = 'flex';
        } else if (player2SunkShips == dataModule.player2Gameboard.length) {
            document.getElementById('gameboard-container-0').style.display = 'none';
            document.getElementById('gameboard-container-1').style.display = 'none';
            document.getElementById('gameboard-header-container').style.display = 'none';
            document.getElementById('victory-screen').textContent = 'player 1 Wins!!';
            document.getElementById('victory-screen').style.display = 'flex';
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
            shipObj.sunk = true
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
console.log(dataModule.usedCoordinates[0], dataModule.usedCoordinates[1])
const newBool = playerAndPCModule.player()
module.exports = { dataModule, playerAndPCModule, domModule, gameLoopModule, gameboardModule, shipModule, sunkShip, newBool }; */