/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
module.exports = function (numbers, target) {
    function binary_search(nums, target) {
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
    var len = numbers.length;
    for (var i = 0; i < len - 1; i++) {
        var num = numbers[i];
        for (var j = i + 1; j < len; j++) {
            var index = binary_search(numbers.slice(j), target - num);
            if (index > -1) {
                return [i + 1, index + j + 1]
            }
        }
    }
    return [1, 2]
};