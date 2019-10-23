const TreeNode = require('./TreeNode');
const helpers = require('./helpers');

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
helpers.printInOrder(root);
console.log(binarySearch(root, 2) ? 'True' : 'False');
console.log(binarySearch(root, 11) ? 'True' : 'False');
console.log(binarySearch(root, 111) ? 'True' : 'False');
console.log(binarySearch(root, 345) ? 'True' : 'False');

function binarySearch(root, val) {
    if (!root) return false;
    if (root.val === val) return true;
    return root.val < val ? binarySearch(root.left, val) : binarySearch(root.right, val);
};