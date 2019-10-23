const testcase = require('../utils/testcase');

// Runtime: O(n)
// Space: O(1)
function urlify(str) {
    let chars = str.split('');
    let numSpaces = 0;
    for (let i=0; i<chars.length; i++) {
        if (chars[i] === ' ') numSpaces++;
    }
    for (let j=chars.length+(numSpaces*2)-1, k=chars.length-1; j>=0 && k>=0; j--) {
        if (chars[k] === ' ') {
            chars[j] = '0';
            chars[j-1] = '2';
            chars[j-2] = '%';
            j = j-2;
        } else {
            chars[j] = chars[k];
        }
        k--;
    }
    return chars.join('');
}

// Runtime: O(n)
// Space: O(n)
// function urlify(str) {
//     let output = '';
//     for (let i=0; i<str.length; i++) {
//         const c = str.charAt(i);
//         if (c === ' ') {
//             output = output.concat('%20');
//         } else {
//             output = output.concat(c);
//         }
//     }
//     return output;
// }


testcase(urlify, 'Mr%20John%20Smith', 'Mr John Smith');