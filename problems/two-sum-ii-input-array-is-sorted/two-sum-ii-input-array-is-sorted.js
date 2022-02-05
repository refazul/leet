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
    var map = {};
    for (var i = 0; i < len; i++) {
        var num = numbers[i];
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    var keys = Object.keys(map).sort((a, b) => a - b);
    len = keys.length;

    var c = 0;
    for (var i = 0; i < len; i++) {
        var num = keys[i];
        c += map[num];
        if (target - num == num && map[num] > 1) {
            return [c - map[num] + 1, c - map[num] + 2];
        }
        for (var j = i + 1; j < len; j++) {
            var index = binary_search(keys.slice(j), target - num);
            if (index > -1) {
                var z = 0;
                for (k = 0; k <= index; k++) {
                    z += map[keys[j + k]];
                }
                return [c, c + z]
            }
        }
    }
    return [1, 2];
};