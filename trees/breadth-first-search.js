const TreeNode = require('./TreeNode');
const helpers = require('./helpers');


var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
helpers.printInOrder(root);
console.log(breadthFirstSearch(root, 2) ? 'True' : 'False');
console.log(breadthFirstSearch(root, 11) ? 'True' : 'False');
console.log(breadthFirstSearch(root, 111) ? 'True' : 'False');
console.log(breadthFirstSearch(root, 345) ? 'True' : 'False');

function breadthFirstSearch(root, val) {
    var node = root;
    var nodeStack = [];
    while (node) {
        if (node.val === val) return true;
        node.left && nodeStack.push(node.left);
        node.right && nodeStack.push(node.right);
        node = nodeStack.shift();
    }
    return false;
};