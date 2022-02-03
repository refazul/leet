/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
module.exports = function (mat, r, c) {
    var serial = [];
    var result = [];
    for (var i = 0; i < mat.length; i++) {
        for (var j = 0; j < mat[i].length; j++) {
            serial.push(mat[i][j]);
        }
    }
    if (serial.length != (r * c)) {
        return mat;
    }
    var k = 0;
    for (var i = 0; i < r; i++) {
        var row = [];
        for (var j = 0; j < c; j++) {
            row.push(serial[k++]);
        }
        result.push(row);
    }
    return result;
};