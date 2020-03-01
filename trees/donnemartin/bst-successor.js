const TreeNode = require('../TreeNode');
const helpers = require('../helpers');
const Bst = require('./binary-search-tree');

function find_bst_successor(root) {
	if (!root || !root.right) return null;
	let node = root.right;
	while (node.left) {
		node = node.left;
	}
	return node ? node.val : null;
}

nodes = [];
bst = new Bst()
nodes[5] = bst.insert(5);
nodes[3] = bst.insert(3)
nodes[8] = bst.insert(8)
nodes[2] = bst.insert(2)
nodes[4] = bst.insert(4)
nodes[6] = bst.insert(6)
nodes[12] = bst.insert(12)
nodes[1] = bst.insert(1)
nodes[7] = bst.insert(7)
nodes[10] = bst.insert(10)
nodes[15] = bst.insert(15)
nodes[9] = bst.insert(9)

console.log(find_bst_successor(nodes[4]) === 5)
console.log(find_bst_successor(nodes[5]) === 6)
console.log(find_bst_successor(nodes[8]) === 9)
console.log(find_bst_successor(nodes[15]) === null);
