const TreeNode = require('./TreeNode');
const helpers = require('./helpers');
const Bst = require('./binary-search-tree');

function is_balanced(root) {
	if (!root) return false;
	return check_balance(root) !== -1;
}

function check_balance(root) {
	if (!root) return 0;
	let left = check_balance(root.left);
	if (left === -1) return -1;
	let right = check_balance(root.right);
	if (right === -1) return -1;
	if (Math.abs(left-right) > 1) return -1;
	return 1 + Math.max(left, right);
}

bst = new Bst()
bst.insert(5);
console.log(is_balanced(bst.root) === true)

bst.insert(3)
bst.insert(8)
bst.insert(1)
bst.insert(4)
console.log(is_balanced(bst.root) === true)

bst2 = new Bst()
bst2.insert(5)
bst2.insert(3)
bst2.insert(8)
bst2.insert(9)
bst2.insert(10)
console.log(is_balanced(bst2.root) === false)

bst3 = new Bst()
bst3.insert(3)
bst3.insert(2)
bst3.insert(1)
bst3.insert(5)
bst3.insert(4)
bst3.insert(6)
bst3.insert(7)
console.log(is_balanced(bst3.root) === true)


