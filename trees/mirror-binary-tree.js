const helpers = require('./helpers');

function mirrorTree(root) {
    if (!root) return;
    let tempNode = root.left;
    root.left = root.right;
    root.right = tempNode;
    mirrorTree(root.left);
    mirrorTree(root.right);
}

var root = helpers.buildBST([50, 20, 65, 3, 7, 345, 21, 2, 6, 8, 34]);
console.log(root);
mirrorTree(root);
console.log(root);