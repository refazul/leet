const stringToIntegerAtoi = require('./string-to-integer-atoi');
const threeSum = require('./3sum');
const squaresOfASortedArray = require('./squares-of-a-sorted-array');
const rotateArray = require('./rotate-array');


test('String to Integer (atoi)', () => {
    expect(stringToIntegerAtoi("-12")).toBe(-12);
    expect(stringToIntegerAtoi("   -42")).toBe(-42);
    expect(stringToIntegerAtoi("  -0012a42")).toBe(-12);
    expect(stringToIntegerAtoi("00000-42a1234")).toBe(0);
    expect(stringToIntegerAtoi("-91283472332")).toBe(-2147483648);
    expect(stringToIntegerAtoi("words and 987")).toBe(0);
    expect(stringToIntegerAtoi("4193 with words")).toBe(4193);
    expect(stringToIntegerAtoi("words and 987")).toBe(0);
    expect(stringToIntegerAtoi("      -11919730356x")).toBe(-2147483648);
    expect(stringToIntegerAtoi("      -1191 9730356x")).toBe(-1191);
});

test('3Sum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2], [-1, 0, 1]]);
    // TLE when array contains many items
})

test('Squares of Sorted Array', () => {
    expect(squaresOfASortedArray([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    expect(squaresOfASortedArray([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
})

test('Rotate Array', () => {
    expect(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([5, 6, 7, 1, 2, 3, 4]);
    expect(rotateArray([-1, -100, 3, 99], 2)).toEqual([3, 99, -1, -100]);
    // TLE when array contains many items
})