const TreeNode = require('../TreeNode');
const helpers = require('../helpers');
const Bst = require('./binary-search-tree');

function find_second_largest(root) {
	if (!root) return;
	let prev = node = root;
	while (node.right) {
		prev = node;
		node = node.right;
	}
	if (node.left) {
		prev = node = node.left;
	}
	while (node.right) {
		prev = node = node.right;
	}
	return prev;
}

let bst = new Bst()
let root = bst.insert(10);
let node5 = bst.insert(5)
let node15 = bst.insert(15)
let node3 = bst.insert(3)
let node8 = bst.insert(8)
let node12 = bst.insert(12)
let node20 = bst.insert(20)
let node2 = bst.insert(2)
let node4 = bst.insert(4)
let node30 = bst.insert(30)

console.log(find_second_largest(bst.root) === node20);

bst = new Bst();
root = bst.insert(10)
node5 = bst.insert(5)
node3 = bst.insert(3)
node7 = bst.insert(7)
console.log(find_second_largest(root) === node7);
