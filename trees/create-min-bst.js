const helpers = require('./helpers');
const TreeNode = require('./TreeNode');

function createMinBst(sortedArr) {
    return minBst(sortedArr, 0, sortedArr.length-1);
}

function minBst(arr, p, r) {
    if (p > r) return;
    const q = Math.floor((p+r)/2);
    const node = new TreeNode(arr[q]);
    node.left = minBst(arr, p, q-1);
    node.right = minBst(arr, q+1, r);
    return node;
}

// const vals = [1, 3, 4, 7, 9, 14, 21];
// const root = createMinBst(vals);
// console.log(root);
// helpers.printInOrder(root);

module.exports = createMinBst;