/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
module.exports = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count++;
            nums.splice(i, 1);
            i--;
        }
    }
    for (var i = 0; i < count; i++) {
        nums.push(0);
    }
};