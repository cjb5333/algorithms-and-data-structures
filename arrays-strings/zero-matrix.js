const testcase = require('../utils/testcase');

class Coordinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Runtime: O(n*m)
// Space: O(n*m)
function zeroMatrix(matrix) {
    let zeroes = [];
    for (let x=0; x<matrix.length; x++) {
        for (let y=0; y<matrix[0].length; y++) {
            if (matrix[x][y]===0) {
                zeroes.push(new Coordinate(x, y));
            }
        }
    }
    while(zeroes.length > 0) {
        const coordinate = zeroes.shift();
        setZero(matrix, coordinate.x, coordinate.y);
    }
    return matrix;
}

function setZero(matrix, x, y) {
    for (let i=0; i<matrix.length; i++) {
        matrix[i][y] = 0;
    }
    for (let j=0; j<matrix[0].length; j++) {
        matrix[x][j] = 0;
    }
    return matrix;
}

const input = [
    [1, 0, 0],
    [1, 1, 1],
    [1, 1, 1]
];

const expected = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 0, 0]
];

testcase(zeroMatrix, expected, input);