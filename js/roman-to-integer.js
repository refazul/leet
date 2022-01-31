/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    var parts = s.split('');
    var number = 0;
    for (var i = 0; i < parts.length; i++) {
        var part = parts[i];
        var next = parts[i + 1];
        var buffer = 0;
        switch (part) {
            case 'I':
                buffer = next === 'V' ? 4 : next === 'X' ? 9 : 1
                if (next === 'V' || next === 'X') { i++ }
                break;
            case 'V':
                buffer = 5;
                break;
            case 'X':
                buffer = next === 'L' ? 40 : next === 'C' ? 90 : 10
                if (next === 'L' || next === 'C') { i++ }
                break;
            case 'L':
                buffer = 50;
                break;
            case 'C':
                buffer = next === 'D' ? 400 : next === 'M' ? 900 : 100
                if (next === 'D' || next === 'M') { i++ }
                break;
            case 'D':
                buffer = 500;
                break;
            case 'M':
                buffer = 1000;
                break;
        }
        number += buffer;
    }
    return number;
};