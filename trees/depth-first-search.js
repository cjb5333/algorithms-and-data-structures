const TreeNode = require('./TreeNode');
const helpers = require('./helpers');

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
helpers.printInOrder(root);
console.log(depthFirstSearch(root, 2) ? 'True' : 'False');
console.log(depthFirstSearch(root, 11) ? 'True' : 'False');
console.log(depthFirstSearch(root, 111) ? 'True' : 'False');
console.log(depthFirstSearch(root, 345) ? 'True' : 'False');

function depthFirstSearch(root, val) {
    if (!root) return false;
    if (root.val === val) return true;
    return depthFirstSearch(root.left, val) || depthFirstSearch(root.right, val);

};