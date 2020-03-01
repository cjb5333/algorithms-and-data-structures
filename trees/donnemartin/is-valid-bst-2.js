const TreeNode = require('./TreeNode');
const helpers = require('./helpers');
const Bst = require('./binary-search-tree');

function validate_bst(root) {
	return validate_bst_range(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

function validate_bst_range(root, min, max) {
	if (!root) return true;
	if (root.val <= min || root.val > max) return false;
	return validate_bst_range(root.left, min, root.val) && validate_bst_range(root.right, root.val, max);
}

bst = new Bst()
bst.insert(5)
bst.insert(8)
bst.insert(5)
bst.insert(6)
bst.insert(4)
bst.insert(7)
console.log(validate_bst(bst.root) === true);

bst2 = new Bst()
bst2.insert(5)
left = new TreeNode(5)
right = new TreeNode(8)
invalid = new TreeNode(20)
bst2.root.left = left
bst2.root.right = right
bst2.root.left.right = invalid
console.log(validate_bst(bst2.root) === false);
