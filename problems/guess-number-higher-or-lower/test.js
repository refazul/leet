const guessNumberHigherOrLower = require("./guess-number-higher-or-lower");

test('First Bad Version', () => {
    expect(guessNumberHigherOrLower(2000000)).toBe(1000000)
});