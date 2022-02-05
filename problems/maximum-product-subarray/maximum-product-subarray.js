/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function (nums) {
    var len = nums.length;
    var has_zero = false;
    var max1 = nums[0];
    var buffer = 1;
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        if (num == 0) {
            has_zero = true;
            buffer = 1;
            continue;
        }
        buffer *= num;
        if (buffer > max1) {
            max1 = buffer;
        }
        if (num > max1) {
            max1 = num;
        }
    }
    max1 = max1 == 0 ? 0 : max1;
    nums.reverse();
    buffer = 1;
    var max2 = nums[0];
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        if (num == 0) {
            has_zero = true;
            buffer = 1;
            continue;
        }
        buffer *= num;
        if (buffer > max2) {
            max2 = buffer;
        }
        if (num > max2) {
            max2 = num;
        }
    }
    max2 = max2 == 0 ? 0 : max2;
    return has_zero ? Math.max(0, Math.max(max1, max2)) : Math.max(max1, max2);
};