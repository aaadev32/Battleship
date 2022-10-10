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
    expect(main.shipModule.isSunk(main.shipModule.ship().carrier)).toBeFalsy()
});

test('isSunk function returns true on sunk ships', () => {
    expect(main.shipModule.isSunk(main.sunkShip)).toBeTruthy()
});

test('ship loses hp and correct array index is marked', () => {
    expect(main.shipModule.hit(main.shipModule.ship().carrier.hits, 4)).toEqual([0, 0, 0, 0, 1])
    expect(main.shipModule.hit(main.shipModule.ship().carrier.hits, 0)).toEqual([1, 0, 0, 0, 0])

});

test('receiveAttack function returns true when a ship has been hit', () => {
    expect(main.gameboardModule.receiveAttack(0, 0)).toBeTruthy()
});

test('receiveAttack function returns false when a ship has been missed', () => {
    expect(main.gameboardModule.receiveAttack(1, 1)).toBeFalsy()
});

test('winCheck returns false when there are unsunken ships', () => {
    expect(main.gameboardModule.winCheck()).toBeFalsy()
});

test('the correct coordinates are recorded to the usedCoordinates array', () => {
    expect(main.dataModule.usedCoordinates[1].x).toBe(3)
    expect(main.dataModule.usedCoordinates[1].y).toBe(4)
});

test('getRandomChar function should return random char between a-j', () => {
    const xAxisCharRegEx = /[a-j]/;
    expect(main.playerAndPCModule.getRandomChar()).toMatch(xAxisCharRegEx);
});

test('player() changes the player1Turn variable from truthy to falsy and vice versa', () => {
    //when player() is called in newBool player1Turn bool value should flip
    expect(main.newBool).toBeFalsy()
});