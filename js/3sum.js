/**
 * @param {number[]} nums
 * @return {number[][]}
 */
module.exports = function (nums) {
    function sort(a, b, c) {
        var lowest = Math.min(a, Math.min(b, c))
        var highest = Math.max(a, Math.max(b, c));
        var mid = a + b + c - lowest - highest;
        return [lowest, mid, highest]
    }
    var results = {};
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    var newItem = sort(nums[i], nums[j], nums[k]);
                    results[newItem.join('-')] = newItem;
                }
            }
        }
    }
    return Object.keys(results).map(k => results[k]);
};