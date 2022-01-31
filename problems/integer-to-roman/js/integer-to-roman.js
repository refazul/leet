/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    var z = num;
    var y = [];
    var i = 0;
    while (z != 0) {
        var digit = z % 10;
        switch (digit) {
            case 1:
                i === 0 ? y.push('I') : i === 1 ? y.push('X') : i === 2 ? y.push('C') : y.push('M');
                break;
            case 2:
                i === 0 ? y.push('II') : i === 1 ? y.push('XX') : i === 2 ? y.push('CC') : y.push('MM');
                break;
            case 3:
                i === 0 ? y.push('III') : i === 1 ? y.push('XXX') : i === 2 ? y.push('CCC') : y.push('MMM');
                break;
            case 4:
                i === 0 ? y.push('IV') : i === 1 ? y.push('XL') : y.push('CD');
                break;
            case 5:
                i === 0 ? y.push('V') : i === 1 ? y.push('L') : y.push('D');
                break;
            case 6:
                i === 0 ? y.push('VI') : i === 1 ? y.push('LX') : y.push('DC');
                break;
            case 7:
                i === 0 ? y.push('VII') : i === 1 ? y.push('LXX') : y.push('DCC');
                break;
            case 8:
                i === 0 ? y.push('VIII') : i === 1 ? y.push('LXXX') : y.push('DCCC');
                break;
            case 9:
                i === 0 ? y.push('IX') : i === 1 ? y.push('XC') : y.push('CM');
                break;
        }
        z = Math.floor(z / 10);
        i++;
    }
    y.reverse();
    return y.join('')
};