/**
 * @param {number} numRows
 * @return {number[][]}
 */
module.exports = function (numRows) {
    var result = [];
    var memory = [];
    memory[1] = [1];
    for (var i = 2; i <= numRows; i++) {
        var row = [];
        for (var j = 0; j < i; j++) {
            if ((j == 0) || j == i - 1) {
                row.push(1);
            }
            else {
                row.push(memory[i - 1][j - 1] + memory[i - 1][j])
            }
        }
        memory.push(row);
    }
    for (var i = 1; i <= numRows; i++) {
        result.push(memory[i]);
    }
    return result;
};