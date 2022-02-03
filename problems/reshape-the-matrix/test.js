const reshapeTheMatrix = require("./reshape-the-matrix");

test('Pascals Triangle', () => {
    expect(reshapeTheMatrix([[1, 2], [3, 4]], 1, 4)).toEqual([[1, 2, 3, 4]]);
    expect(reshapeTheMatrix([[1, 2], [3, 4]], 2, 2)).toEqual([[1, 2], [3, 4]]);
    expect(reshapeTheMatrix([[1, 2], [3, 4]], 2, 4)).toEqual([[1, 2], [3, 4]]);
})