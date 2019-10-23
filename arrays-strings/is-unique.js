const testcase = require('../utils/testcase');

// Runtime: O(n*log(n))
// Space: O(1)
function isUnique(str) {
    if (!str || str.length === 0) return false;
    const chars = str.split('');
    chars.sort();   // sort in-place, O(n*log(n)) using heap-sort or quick-sort
    for (let i=0; i<chars.length-1; i++) {
        if (chars[i] === chars[i+1]) return false;
    }
    return true;
}

// Runtime: O(n^2)
// Space: O(1)
// function isUnique(str) {
//     if (!str || str.length === 0) return false;
//     const chars = str.split('');
//     for (let i=0; i<chars.length-1; i++) {
//         let c = chars[i];
//         for (let j=i+1; j<chars.length; j++) {
//             if (chars[j] === c) return false;
//         }
//     }
//     return true;
// }

// Runtime: O(n)
// Space: O(n)
// function isUnique(str) {
//     if (!str || str.length === 0) return false;
//     const chars = str.split('');
//     const map = new Map();
//     for (let i=0; i<chars.length; i++) {
//         const c = chars[i];
//         if (map.has(c)) return false;
//         map.set(c, true);
//     };
//     return true;
// }

// Runtime: O(n)
// Space: O(1)
// -- Lowercase only
// function isUnique(str) {
//     if (!str || str.length === 0) return false;
//     const chars = str.split('');
//     const d = 'a'.charCodeAt(0);
//     let z = 0;
//     for (let i=0; i<chars.length; i++) {
//         const c = chars[i].charCodeAt(0);
//         if (z & 1<<(c-d)) return false;
//         z = z | 1<<(c-d);
//     };
//     return true;
// }

testcase(isUnique, false, '');
testcase(isUnique, false, 'asdsa');
testcase(isUnique, true, 'asd');
testcase(isUnique, false, 'asda');
testcase(isUnique, false, 'aa');
testcase(isUnique, true, 'a');