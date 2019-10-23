const testcase = require('../utils/testcase');

// Runtime: O(n)
// Space: O(1)
function isPalindromePermutation(str) {
    let chars = str.toLowerCase().replace(' ', '').split('');
    let d = 'a'.charCodeAt(0), oddCount = 0;
    let count = [];      // will only ever contain 26 alphabet characters, making this constant O(1) space
    for (let i=0; i < chars.length; i++) {
        const c = chars[i].charCodeAt(0);
        const val = count[c-d];
        count[c-d] = val > 0 ? (val + 1) : 1;
        if (isOdd(count[c-d])) {
            oddCount++;
        } else {
            oddCount--;
        }
    }
    return (isEven(chars.length) && oddCount===0) || (isOdd(chars.length) && oddCount===1);
}

const isOdd = x => x%2===1;
const isEven = x => x%2===0;

// // Runtime: O(n)
// // Space: O(1)
// function isPalindromePermutation(str) {
//     let d = 'a'.charCodeAt(0);
//     let count = [];
//     let chars = str.toLowerCase().replace(' ', '').split('');
//     for (let i=0; i < chars.length; i++) {
//         const c = chars[i].charCodeAt(0);
//         const val = count[c-d];
//         count[c-d] = val > 0 ? (val + 1) : 1;
//     }
//     let isMiddleFound;
//     let isOddInput = chars.length%2 === 1;
//     for (let i=0; i < chars.length; i++) {
//         const c = chars[i].charCodeAt(0);
//         if (count[c-d] % 2 === 1) {
//             if (isOddInput) {
//                 if (isMiddleFound) {
//                     return false;
//                 } else {
//                     isMiddleFound = true;
//                 }
//             } else {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// Runtime: O(n)
// Space: O(n)
// function isPalindromePermutation(str) {
//     let map = new Map();
//     let chars = str.toLowerCase().replace(' ', '').split('');
//     for (let i = 0; i < chars.length; i++) {
//         const c = chars[i];
//         map.set(c, map.has(c) ? (map.get(c) + 1) : 1);
//     }
//     let isMiddleFound;
//     let isOddInput = chars.length%2 === 1;
//     let result = true;
//     map.forEach(v => {
//         if (v % 2 === 1) {
//             if (isOddInput) {
//                 if (isMiddleFound) {
//                     result = false;
//                     return;
//                 } else {
//                     isMiddleFound = true;
//                 }
//             } else {
//                 result = false;
//                 return;
//             }
//         }
//     });
//     return result;
// }

testcase(isPalindromePermutation, true, 'tact coa');
testcase(isPalindromePermutation, false, 'tact coaa');
testcase(isPalindromePermutation, true, 'tact coa');
testcase(isPalindromePermutation, false, 'tact');
testcase(isPalindromePermutation, true, 'tactac');
testcase(isPalindromePermutation, true, 'tt');
testcase(isPalindromePermutation, false, 'ta');
testcase(isPalindromePermutation, true, 't');