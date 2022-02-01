/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
module.exports = function (nums, target) {
    var l = 0;
    var r = nums.length - 1;
    if (target < nums[l]) {
        return 0;
    }
    if (target > nums[r]) {
        return nums.length;
    }
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        if (target > nums[m]) {
            l = m + 1;
        } else if (target < nums[m]) {
            r = m - 1;
        } else if (target == nums[m]) {
            return m;
        }
    }
    return l;
};