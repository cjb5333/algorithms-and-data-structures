const testcase = require('../utils/testcase');

function hasUniqueCharacters (str) {
    const charSet = new Set();
    for (let i=0; i<str.length; i++) {
        const char = str.charAt(i);
        if (charSet.has(char)) return false;
        charSet.add(char);
    }
    return true;
}

testcase(hasUniqueCharacters, true, "abcdefg");
testcase(hasUniqueCharacters, true, "aa");
testcase(hasUniqueCharacters, true, "abcdea");