/**
 * @param {number[]} prices
 * @return {number}
 */
module.exports = function (prices) {
    var max = 0;
    var len = prices.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = i + 1; j < len; j++) {
            if (prices[j] - prices[i] > max) {
                max = prices[j] - prices[i];
            }
        }
    }
    return max;
};