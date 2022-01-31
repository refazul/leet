/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var z = x < 0 ? -x : x;
    var y = 0;
    while (z != 0) {
        y = y * 10 + (z % 10)
        z = Math.floor(z / 10);
    }
    y = x < 0 ? -y : y;
    return y < -2147483648 || y > 2147483647 ? 0 : y
};