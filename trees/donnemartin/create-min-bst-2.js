const helpers = require('./helpers');
const TreeNode = require('./TreeNode');

class MinBst {

	constructor() {
		this.root = null;
	}

	create_min_bst(arr) {
		return mergeMinBst(arr, 0, arr.length-1);
	}

}

function mergeMinBst(arr, p, r) {
	if (p > r) return;
	let q = Math.floor((p+r)/2);
	let node = new TreeNode(arr[q]);
	node.left = mergeMinBst(arr, p, q-1);
	node.right = mergeMinBst(arr, q+1, r);
	return node;
}

function height(root) {
	if (!root) return 0;
	return 1 + Math.max(height(root.left), height(root.right));
}

min_bst = new MinBst();
array = [0, 1, 2, 3, 4, 5, 6];
let root = min_bst.create_min_bst(array)
console.log(height(root) === 3);

min_bst2 = new MinBst();
array = [0, 1, 2, 3, 4, 5, 6, 7];
let root2 = min_bst2.create_min_bst(array)
console.log(height(root2) === 4);
