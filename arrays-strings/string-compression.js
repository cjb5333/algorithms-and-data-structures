const testcase = require('../utils/testcase');

// Runtime: O(n)
// Space: O(1)
function compressString(str) {
    const chars = str.split('');
    if (!str || str.length === 0) return null;
    let output = '', currChar = chars[0], currCount = 1;
    let hasDuplicates;
    for (let i=1; i<chars.length; i++) {
        if (currChar !== chars[i]) {
            output = output.concat(`${currChar}${currCount}`);
            currChar = chars[i];
            currCount = 1;
        } else {
            currCount++;
        }
        if (currCount > 1) hasDuplicates = true;
    }
    if (!hasDuplicates) return str;
    return output.concat(`${currChar}${currCount}`);
}

testcase(compressString, 'a2b1c5a3', 'aabcccccaaa');
testcase(compressString, 'abcdefghij', 'abcdefghij');
testcase(compressString, 'a3', 'aaa');
testcase(compressString, 'a', 'a');