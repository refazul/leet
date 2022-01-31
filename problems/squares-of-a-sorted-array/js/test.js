const squaresOfASortedArray = require('./squares-of-a-sorted-array');

test('Squares of Sorted Array', () => {
    expect(squaresOfASortedArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(squaresOfASortedArray([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
})