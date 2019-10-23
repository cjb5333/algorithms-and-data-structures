const testcase = require('../utils/testcase');

// Runtime: O(n*log(n))
// Space: O(1)
function isPermutation (vals) {
    const strA = vals[0].split(''), strB = vals[1].split('');
    if (strA.length !== strB.length) return false;
    strA.sort();    // sort in-place, O(n*log(n)) like heap-sort or quick-sort
    strB.sort();
    for (let i=0; i<strA.length; i++) {
        if (strA[i] !== strB[i]) return false;
    }
    return true;
}

// Runtime: O(n)
// Space: O(n)
// function isPermutation (vals) {
//     const strA = vals[0], strB = vals[1];
//     const counter = new Map();
//     if (strA.length !== strB.length) return false;
//     for (let i=0; i<strA.length; i++) {
//         const charA = strA.charAt(i), charB = strB.charAt(i);
//         counter.set(charA, counter.has(charA) ? counter.get(charA)+1 : 1);
//         counter.set(charB, counter.has(charB) ? counter.get(charB)-1 : -1);
//     }
//     let output = true;
//     counter.forEach(x => {
//         if(x !== 0) {
//             output = false;
//             return;
//         }
//     })
//     return output;
// }

// Runtime: O(n)
// Space: O(1)
// only valid for lowercase-only due to 32-bit limit
// function isPermutation (vals) {
//     const strA = vals[0], strB = vals[1];
//     let counterA = 0, counterB = 0;
//     if (strA.length !== strB.length) return false;
//     const d = 'a'.charCodeAt(0);
//     for (let i=0; i<strA.length; i++) {
//         counterA = counterA | (1 << strA.charCodeAt(i)-d);
//         counterB = counterB | (1 << strB.charCodeAt(i)-d);
//     }
//     return counterA === counterB;
// }

testcase (isPermutation, true, ['aa', 'aa']);
testcase (isPermutation, true, ['abc', 'cba']);
testcase (isPermutation, false, ['abcd', 'cbaa']);
testcase (isPermutation, false, ['aaaa', 'aaa']);
