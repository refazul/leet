/**
 * @param {number[]} nums
 * @return {boolean}
 */
module.exports = function (nums) {
    var len = nums.length;
    var map = {};
    for (var i = 0; i < len; i++) {
        var target = nums[i];
        if (map[target]) {
            return true;
        }
        map[target] = true;
    }
    return false;
};