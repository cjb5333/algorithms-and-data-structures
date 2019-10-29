const TreeHelper = require('./TreeHelper');
const TreeNode = require('./TreeNode');
const testcase = require('../utils/testcase');

function isValidBST(root) {
    return isValidBSTMinMax(root, null, null);
}

function isValidBSTMinMax(root, min, max) {
    if (!root) return true;
    if (min && min > root.val) return false;
    if (max && max < root.val) return false;
    return isValidBSTMinMax(root.left, min, root.val) && isValidBSTMinMax(root.right, root.val, max);
}

const root = TreeHelper.createMinBst([1, 3, 4, 7, 9, 14, 21]);
testcase(isValidBST, true, root);

let node = root;
while (node.right) {
    node = node.right;
}

node.right = new TreeNode(1);
testcase(isValidBST, false, root);
node.right = null;
node.left = new TreeNode(1);
testcase(isValidBST, false, root);
node.left = new TreeNode(20);
testcase(isValidBST, true, root);
