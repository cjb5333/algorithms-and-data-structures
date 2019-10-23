const testcase = require('../utils/testcase');

function reverseString (str) {
    // var output = "";
    // for (let i=str.length-1; i >= 0; i--) {
    //     output = output.concat(str.charAt(i));
    // }
    // return output;
    //
    /////////////////////////////////////
    //
    // return str.split('').reverse().join('');
    
    var output = [];
    str.split('').forEach(char => {
        output.unshift(char);
    })
    return output.join('');
};


testcase(reverseString, 'dlrow olleh', 'hello world');