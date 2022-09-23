const main = require('./src/index.js');
/**
 * @jest-environment node || jsdom
 */

console.log(main.testShip)
test('ship loses hp and correct array index is marked', () => {
    expect(main.shipModule.hit(main.testShip, 4)).toEqual([0, 1, 0, 0, 0])
});

test('isSunk function returns false on unsunk ships', () => {
    expect(main.shipModule.isSunk(main.testShip)).toBe(false)
});