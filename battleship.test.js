const main = require('./src/index.js');
test('ship loses hp and correct array index is marked', () => {
    expect(main.factoryFunctionModule.hit(factoryFunctionModule.ship().carrier.hits, 1)).toBe([0, 1, 0, 0, 0])
});

