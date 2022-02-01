/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
module.exports = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        var l = 1;
        var r = n;
        while (l <= r) {
            var m = Math.floor((l + r) / 2);
            var is_bad = isBadVersion(m);
            if (is_bad) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return l;
    };
};