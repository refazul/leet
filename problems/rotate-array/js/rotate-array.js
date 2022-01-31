/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function (nums, k) {
    k = nums.length - k % nums.length;
    while(k > 0) {
        var top = nums.shift();
        nums.push(top);
        k--;
    }
    return nums;
};
