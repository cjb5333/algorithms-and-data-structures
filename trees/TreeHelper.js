const TreeNode = require('./TreeNode');
const TestHelper = require('../utils/TestHelper');

class TreeHelper {

    static createMinBst(sortedArr) {
        return minBst(sortedArr, 0, sortedArr.length - 1);
    }

    static createRandomMinBst(size) {
        const vals = [];
        for (let i=0; i<size; i++) {
            vals.push(TestHelper.random(0, 100));
        }
        vals.sort();
        return minBst(vals, 0, vals.length - 1);
    }
}

function minBst(arr, p, r) {
    if (p > r) return;
    const q = Math.floor((p + r) / 2);
    const node = new TreeNode(arr[q]);
    node.left = minBst(arr, p, q - 1);
    node.right = minBst(arr, q + 1, r);
    return node;
}

module.exports = TreeHelper;