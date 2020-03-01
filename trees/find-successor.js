
function findSuccessor(root) {
    if (!root) return null;
    let node = root;
    if (node.right) {
        node = node.right;
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    while (node.parent && node.parent.left !== node) {
        node = node.parent;
    }
    return node.parent;
}

