const binarySearch = require("./binary-search")

test('Binary Search', () => {
    expect(binarySearch([-1,0,3,5,9,12], 9)).toBe(4);
    expect(binarySearch([-1,0,3,5,9,12], 2)).toBe(-1);
})