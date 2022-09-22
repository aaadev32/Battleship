const main = require('./src/index.js');
//REMEMBER you only have to test your object’s public interface. Only methods or properties that are used outside of your ‘ship’ object need unit tests.test('ship loses hp and correct array index is marked', () => {
test('ship loses hp and correct array index is marked', () => {
    expect(main.test).toEqual([0, 1, 0, 0, 0])
});

