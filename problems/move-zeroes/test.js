const moveZeroes = require("./move-zeroes")

test('Move Zeroes', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
    expect(moveZeroes([0])).toEqual([0]);
    expect(moveZeroes([0, 0, 1])).toEqual([1, 0, 0]);
})