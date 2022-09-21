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