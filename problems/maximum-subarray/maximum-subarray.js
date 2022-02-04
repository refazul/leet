/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function (nums) {
    var len = nums.length;
    var max = nums[0];
    var buffer = 0;
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        buffer += num;
        if (buffer > max) {
            max = buffer;
        }
        buffer = buffer < 0 ? 0 : buffer;
    }
    return max;
};