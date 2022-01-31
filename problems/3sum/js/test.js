const threeSum = require('./3sum');

test('3Sum', () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, 0, 1], [-1, -1, 2]]);
    // TLE when array contains many items
})