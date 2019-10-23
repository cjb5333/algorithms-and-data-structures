const helpers = require('./helpers');

function pathToLeavesSum(root) {
    if (!root) return 0;
    return pathToLeavesSum(root.left) + pathToLeavesSum(root.right) + root.val;
}

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
console.log(pathToLeavesSum(root));
