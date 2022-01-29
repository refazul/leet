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
    function push(currentList, newItem) {
        var found = false;
        for (var i = 0; i < currentList.length; i++) {
            var currentItem = currentList[i];
            if (currentItem[0] == newItem[0] && currentItem[1] == newItem[1] && currentItem[2] == newItem[2]) {
                found = true;
                break;
            }
        }
        if (!found) {
            currentList.push(newItem);
        }
        return currentList;
    }
    var results = [];
    for (var i = 0; i < nums.length - 2; i++) {
        for (var j = i + 1; j < nums.length - 1; j++) {
            for (var k = j + 1; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] == 0) {
                    results = push(results, sort(nums[i], nums[j], nums[k]))
                }
            }
        }
    }
    return results;
};