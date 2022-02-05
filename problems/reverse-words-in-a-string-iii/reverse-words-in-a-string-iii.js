/**
 * @param {string} s
 * @return {string}
 */
module.exports = function (s) {
    var parts = s.split(' ');
    var new_parts = [];
    for (var i = 0; i < parts.length; i++) {
        new_parts.push(parts[i].split('').reverse().join(''));
    }
    return new_parts.join(' ');
};