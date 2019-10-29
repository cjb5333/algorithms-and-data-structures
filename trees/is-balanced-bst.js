const createBalancedBST = require('./create-min-bst');
const TreeNode = require('./TreeNode');
const testcase = require('../utils/testcase');

function isBalancedBST(root) {
    return isBalancedBSTSearch(root) > -1;
}
function isBalancedBSTSearch(root) {
    if (!root) return 0;
    const left = isBalancedBSTSearch(root.left);
    const right = isBalancedBSTSearch(root.right);
    if (left === -1 || right === -1) return -1;
    if (root.left && root.left >= root.val) return -1;
    if (root.right && root.right < root.val) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return max(left, right) + 1;
}

const max = (a, b) => a > b ? a : b;

const root = createBalancedBST([1, 3, 4, 7, 9, 14, 21]);
testcase(isBalancedBST, true, root);

let node = root;
while (node.right) {
    node = node.right;
}

node.right = new TreeNode(31);
testcase(isBalancedBST, true, root);
node.left = new TreeNode(343);
testcase(isBalancedBST, false, root);
node.left = null;
testcase(isBalancedBST, true, root);
node.right.right = new TreeNode(65);
testcase(isBalancedBST, false, root);
