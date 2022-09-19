import './style.css';
//create a ship factory function, be sure to set up a test
const arraysObjectsModule = (() => {

})();

const domManipulationModule = (() => {

})();

const factoryFunctionModule = (() => {
    function ship() {

        carrier = {
            length: 5,
            health: 5,
            sunk: false
        }
        battleship = {
            length: 4,
            health: 4,
            sunk: false
        }
        destroyer = {
            length: 3,
            health: 3,
            sunk: false
        }
        submarine = {
            length: 3,
            health: 3,
            sunk: false
        }
        patrolBoat = {
            length: 2,
            health: 2,
            sunk: false
        }
    }
    return { ship };
})();


module.exports = { sum, };