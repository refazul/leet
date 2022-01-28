/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    function isNumber(n) {
        return typeof n == 'number' && !isNaN(n) && isFinite(n);
    }
    var even = (nums1.length + nums2.length) % 2 == 0;
    var target = Math.ceil((nums1.length + nums2.length) / 2) - 1;
    var i = 0;
    var median = 0;
    while (i <= target) {
        if (isNumber(nums1[0]) && isNumber(nums2[0])) {
            if (nums1[0] < nums2[0]) {
                median = nums1.shift();
            } else {
                median = nums2.shift();
            }
        }
        else {
            if (isNumber(nums1[0])) {
                median = nums1.shift();
            } else {
                median = nums2.shift();
            }
        }
        i++;
    }
    var next = 0;
    if (isNumber(nums1[0]) && isNumber(nums2[0])) {
        next = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
    } else {
        if (isNumber(nums1[0])) {
            next = nums1.shift();
        } else {
            next = nums2.shift();
        }
    }
    return even ? (median + next) / 2 : median;
};