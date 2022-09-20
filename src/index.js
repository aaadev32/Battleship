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


        function hit(ship, index) {
            for (i = 0; i < ship.hits.length; i++) {
                if (i == index) {
                    hits[i] = 1;
                }
            }
            return ship.hits;
        }
        return { carrier, battleship, destroyer, submarine, patrolBoat, hit };

    }
    return { ship };
})();

module.exports = { arraysObjectsModule, domManipulationModule, factoryFunctionModule };