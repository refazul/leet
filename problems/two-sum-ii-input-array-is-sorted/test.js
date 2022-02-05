const twoSumIiInputArrayIsSorted = require("./two-sum-ii-input-array-is-sorted");

test('Two Sum II - Input Array Is Sorted', () => {
    expect(twoSumIiInputArrayIsSorted([2, 7, 11, 15], 9)).toEqual([1, 2]);
    expect(twoSumIiInputArrayIsSorted([2, 3, 4], 6)).toEqual([1, 3]);
    expect(twoSumIiInputArrayIsSorted([-1, 0], -1)).toEqual([1, 2]);
    expect(twoSumIiInputArrayIsSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)).toEqual([4, 5])
    expect(twoSumIiInputArrayIsSorted([-3, 3, 4, 90], 0)).toEqual([1, 2])
    expect(twoSumIiInputArrayIsSorted([5, 25, 75], 100)).toEqual([2, 3])
    expect(twoSumIiInputArrayIsSorted([-1000, -1, 0, 1], 1)).toEqual([3, 4])
});

//console.log({ num, r: target - num, a: keys.slice(j).sort((a, b) => a - b), j })