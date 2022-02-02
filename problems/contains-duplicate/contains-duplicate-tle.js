/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports = function (nums) {
    function search(nums, target) {
        var l = 0;
        var r = nums.length - 1;
        while (l <= r) {
            var m = Math.floor((l + r) / 2)
            if (target > nums[m]) {
                l = m + 1;
            } else if (target < nums[m]) {
                r = m - 1;
            } else {
                return m;
            }
        }
        return -1;
    }
    nums.sort(function (a, b) { return a - b });
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        var target = nums[i];
        var array = nums.slice();
        array.splice(i, 1);
        if (search(array, target) >= 0) {
            return true;
        }
    }
    return false;
};