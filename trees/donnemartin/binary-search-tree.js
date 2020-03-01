const TreeNode = require('../TreeNode');
const Helpers = require('../helpers');

class Bst {
	constructor() {
		this.root = null;
	}

	insert(val) {
		if (!val) return;
		if (!this.root) {
			this.root = new TreeNode(val);
			return this.root;
		}
		let node = this.root;
		while (node) {
			if (val <= node.val) {
				if (node.left) {
					node = node.left;
				} else {
					node.left = new TreeNode(val);
					return node.left;
				}
			} else {
				if (node.right) {
					node = node.right;
				} else {
					node.right = new TreeNode(val);
					return node.right;
				}
			}
		}
		return this.root;
	}

}

module.exports = Bst;

//bst = new Bst()
//bst.insert(5)
//bst.insert(2)
//bst.insert(8)
//bst.insert(1)
//bst.insert(3)
//
//bst2 = new Bst()
//bst2.insert(1)
//bst2.insert(2)
//bst2.insert(3)
//bst2.insert(4)
//bst2.insert(5)
//
//Helpers.printInOrder(bst.root);
//Helpers.printInOrder(bst2.root);
