/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function (nums, k) {
    var len = nums.length;
    k = k % len;

    var slice = nums.splice(-k);
    nums.splice(0, 0, ...slice);
    return nums;
};
