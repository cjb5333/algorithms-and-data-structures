const helpers = require('./helpers');

function findTreeHeight (root) {
    if (!root) return 0;
    return max(findTreeHeight(root.left), findTreeHeight(root.right))+1;
}

const max = (a, b) => (a>b ? a : b);

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
helpers.printInOrder(root);
console.log(findTreeHeight(root));