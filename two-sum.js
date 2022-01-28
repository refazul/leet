var twoSum = function (nums, target) {
    var i = 0, j = 0;
    for (i = 0; i < nums.length - 1; i++) {
        var first = nums[i];
        for (j = i + 1; j < nums.length; j++) {
            var second = nums[j];
            if (first + second == target) {
                return [i, j];
            }
        }
    }
};