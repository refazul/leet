/**
 * @param {string} s
 * @return {number}
 */
module.exports = function (s) {
    function clamp(number, negative) {
        number = negative ? -number : number;
        if (number < -2147483648) {
            return -2147483648;
        }
        if (number > 2147483647) {
            return 2147483647
        }
        return number;
    }
    function isDigit(k) {
        return k >=0 && k !== ' ';
    }
    function isSign(k) {
        return k == '+' || k == '-'
    }
    var parts = s.split('');
    var number = 0;
    var negative = false;
    var once = false;
    while (parts.length != 0) {
        var current = parts.shift();
        if (number == 0) {
            if (once) {
                if (!isDigit(current)) {
                    //expect(myAtoi("00000-42a1234")).toBe(0);
                    return 0;
                }
            } else {
                if (current == ' ') {
                    //keep rolling
                }
                else if (isSign(current) || isDigit(current)) {
                    once = true;
                    if (current == '-') {
                        negative = true;
                    }
                } else {
                    //expect(myAtoi("words and 987")).toBe(0);
                    return 0;
                }
            }
        }
        if (isDigit(current)) { number = number * 10 + current * 1 }
        if (number > 0 && !isDigit(current)) {
            //expect(myAtoi("4193 with words")).toBe(4193);
            //expect(myAtoi("      -11919730356x")).toBe(-2147483648);
            return clamp(number, negative);
        }
    }
    return clamp(number, negative);
};