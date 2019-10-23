const testcase = require('../utils/testcase');

// Runtime: O(n)
// Space: O(1)
function rotateMatrix(matrix) {
    if (!matrix || matrix.length===0 || matrix[0].length===0) return null;
    const N = matrix.length;
    for (let n=0; n<N/2; n++) {
        for (let m=n; m<N-n-1; m++) { 
            let temp = matrix[n][m];
            matrix[n][m]=matrix[m][N-n-1];
            matrix[m][N-n-1]=matrix[N-n-1][N-m-1];
            matrix[N-n-1][N-m-1]=matrix[N-m-1][n];
            matrix[N-m-1][n]=temp;
        }
    }
    return matrix;
}

const input3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const expected3x3 = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
];

testcase(rotateMatrix, expected3x3, input3x3);

const input5x5 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];

const expected5x5 = [
    [5, 10, 15, 20, 25],
    [4, 9, 14, 19, 24],
    [3, 8, 13, 18, 23],
    [2, 7, 12, 17, 22],
    [1, 6, 11, 16, 21]
];
testcase(rotateMatrix, expected5x5, input5x5);