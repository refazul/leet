const myAtoi = require('./string-to-integer-atoi')
const threeSum = require('./3sum');
const squaresOfASortedArray = require('./squares-of-a-sorted-array');

test('string-to-integer-atoi', () => {
    expect(myAtoi("-12")).toBe(-12);
    expect(myAtoi("   -42")).toBe(-42);
    expect(myAtoi("  -0012a42")).toBe(-12);
    expect(myAtoi("00000-42a1234")).toBe(0);
    expect(myAtoi("-91283472332")).toBe(-2147483648);
    expect(myAtoi("words and 987")).toBe(0);
    expect(myAtoi("4193 with words")).toBe(4193);
    expect(myAtoi("words and 987")).toBe(0);
    expect(myAtoi("      -11919730356x")).toBe(-2147483648);
    expect(myAtoi("      -1191 9730356x")).toBe(-1191);
});

test('3sum', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toEqual(expect.arrayContaining([[-1,-1,2],[-1,0,1]]));
    // TLE when array contains many items
})

test('Squares of Sorted Array', () => {
    expect(squaresOfASortedArray([-4,-1,0,3,10])).toEqual(expect.arrayContaining([0,1,9,16,100]));
    expect(squaresOfASortedArray([-7,-3,2,3,11])).toEqual(expect.arrayContaining([4,9,9,49,121]));
})