/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guess = function (num) {
    var pick = 1000000
    if (num > pick) {
        return -1;
    } else if (num < pick) {
        return 1;
    }
    return 0;
}
module.exports = function (n) {
    var l = 1;
    var r = n;
    while (l <= r) {
        var m = Math.floor((l + r) / 2);
        var my_guess = guess(m);
        if (my_guess == -1) {
            r = m - 1;
        } else if (my_guess == 1) {
            l = m + 1;
        } else {
            return m;
        }
    }
    return l;
};