const maximumProductSubarray = require("./maximum-product-subarray");

test('Maximum Subarray', () => {
    expect(maximumProductSubarray([2, 3, -2, 4])).toBe(6)
    expect(maximumProductSubarray([-2, 0, -1])).toBe(0)
    expect(maximumProductSubarray([1])).toBe(1)
    expect(maximumProductSubarray([-1])).toBe(-1)
    expect(maximumProductSubarray([0])).toBe(0)
    expect(maximumProductSubarray([-3, -1, -1])).toBe(3)
    expect(maximumProductSubarray([0, 2])).toBe(2)
    expect(maximumProductSubarray([2, 0])).toBe(2)
    expect(maximumProductSubarray([2, -5, -2, -4, 3])).toBe(24)
    expect(maximumProductSubarray([-1, -2, -3, 0])).toBe(6)
    expect(maximumProductSubarray([0, -3, -2, -1])).toBe(6)
});