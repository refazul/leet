/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var z = x < 0 ? -x : x;
    var y = 0;
    while (z != 0) {
        y = y * 10 + (z % 10)
        z = Math.floor(z / 10);
    }
    return x < 0 ? false : x == y;
};