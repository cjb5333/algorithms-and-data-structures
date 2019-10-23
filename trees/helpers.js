const TreeNode = require('./TreeNode');

module.exports = {
    buildBST,
    printPreOrder,
    printInOrder,
    printPostOrder,
}

function buildBST (vals) {
    var root;
    vals.forEach((x) => {
        root = treeInsert(root, new TreeNode(x));
    });
    return root;
}

// Tree Insert
//
// Runtime: O(h), h = tree height
function treeInsert(root, newNode) {
    var x=root, y=null;
    while (x != null) {
        y = x;
        if (newNode.val < x.val) {
            x = x.left;
        } else {
            x = x.right;
        }
    }
    if (!y) {
        root = newNode;
    } else if (newNode.val < y.val) {
        y.left = newNode;
    } else {
        y.right = newNode;
    }
    return root;
}

function printPreOrder(root) {
    if (!root) return;
    console.log(root.val);
    printPreOrder(root.left);
    printPreOrder(root.right);
}

function printInOrder(root) {
    if (!root) return;
    printInOrder(root.left);
    console.log(root.val);
    printInOrder(root.right);
}

function printPostOrder(root) {
    if (!root) return;
    printPostOrder(root.left);
    printPostOrder(root.right);
    console.log(root.val);
}