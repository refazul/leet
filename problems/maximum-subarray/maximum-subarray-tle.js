/**
 * @param {number[]} nums
 * @return {number}
 */
module.exports = function (nums) {
    var len = nums.length;
    var max = nums[0];
    for (var i = 0; i < len; i++) {
        var sum = nums[i];
        if (max < sum) {
            max = sum;
        }
        for (var j = i + 1; j < len; j++) {
            sum += nums[j];
            if (max < sum) {
                max = sum;
            }
        }
    }
    return max;
};