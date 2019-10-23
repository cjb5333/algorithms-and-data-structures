const testcase = require('../utils/testcase');

// Runtime: O(n) (n = length of larger input string, or length of both if equal)
// Space: O(1)
function isOneMoveAway(str1, str2) {
    let diff = 0;
    let i = 0, j = 0;
    if (str1.length - str2.length > 1) return false;
    while (i < str1.length || j < str2.length) {
        if (str1.charAt(i) === str2.charAt(j)) {
            i++;
            j++;
        } else {
            if (str1.length >= str2.length) {
                i++;
            } 
            if (str1.length <= str2.length) {
                j++;
            }
            diff++;
        }
        if (diff > 1) return false;
    }
    return true;
}

testcase(isOneMoveAway, true, 'pale', 'ple');
testcase(isOneMoveAway, true, 'pales', 'pale');
testcase(isOneMoveAway, true, 'pale', 'bale');
testcase(isOneMoveAway, false, 'pale', 'bake');
