const helpers = require('./helpers');

function findMinDepth (root) {
    if (!root) return 0;
    let smallest;
    if (!root.left) return findMinDepth(root.right) + 1;
    if (!root.right) return findMinDepth(root.left) + 1;
    return min(findMinDepth(root.left), findMinDepth(root.right))+1;
}

const min = (a, b) => (a>b ? b : a);

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
console.log(root);
console.log(findMinDepth(root));