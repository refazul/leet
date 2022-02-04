const maximumSubarray = require("./maximum-subarray");

test('Maximum Subarray', () => {
    expect(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
    expect(maximumSubarray([1])).toBe(1)
    expect(maximumSubarray([5, 4, -1, 7, 8])).toBe(23)
    expect(maximumSubarray([-2, 1])).toBe(1)
    expect(maximumSubarray([-2, -1])).toBe(-1)
    expect(maximumSubarray([1, 2])).toBe(3)
    expect(maximumSubarray([2, 1])).toBe(3)
    expect(maximumSubarray([0])).toBe(0)
});