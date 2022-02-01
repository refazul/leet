const searchInsertPosition = require("./search-insert-position")

test('Search Insert Position', () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
    expect(searchInsertPosition([1, 3, 4, 5, 10], 0)).toBe(0);
    expect(searchInsertPosition([1], 1)).toBe(0);
    expect(searchInsertPosition([1, 3], 2)).toBe(1);
    expect(searchInsertPosition([1, 3], 3)).toBe(1);
})