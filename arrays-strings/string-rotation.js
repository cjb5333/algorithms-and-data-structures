const testcase = require('../utils/testcase');

function isRotation(str1, str2) {
    if (!str1 || !str2 || str1.length !== str2.length) return false;
    return isSubstring(str2, str1.concat(str1));
}

function isSubstring(str1, str2) {
    for (let i=0; i<str2.length-str1.length+1; i++) {
        if (str2.slice(i, i+str1.length) === str1) return true; 
    }
    return false;
}

testcase(isSubstring, true, 'tle', 'bottle');
testcase(isSubstring, true, 'erbottle', 'waterbottle');
testcase(isSubstring, true, 'wat', 'waterbottle');
testcase(isSubstring, false, 'abc', 'waterbottle');
testcase(isRotation, true, 'erbottlewat', 'waterbottle');
testcase(isRotation, false, 'erbottlewa', 'waterbottle');