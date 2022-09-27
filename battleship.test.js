const main = require('./src/index.js');
/**
 * @jest-environment node || jsdom
 */

test('use jsdom in this test file', () => {
    const element = document.createElement('div');
    expect(element).not.toBeNull();
});
test('is this thing on?,', () => {
    expect(main.add(3, 5)).toBe(8)
});

test('isSunk function returns false on unsunk ships', () => {
    expect(main.shipModule.isSunk(main.shipModule.ship().carrier)).toBe(false)
});

test('isSunk function returns true on sunk ships', () => {
    expect(main.shipModule.isSunk(main.sunkShip)).toBe(true)
});

test('ship loses hp and correct array index is marked', () => {
    expect(main.shipModule.hit(main.shipModule.ship().carrier.hits, 4)).toEqual([0, 0, 0, 0, 1])
});

