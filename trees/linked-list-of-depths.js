const TreeHelper = require('./TreeHelper');
const LinkedList = require('../linked-lists/LinkedList');

function linkedListOfDepths (root) {
    if (!root) return [];
    const lists = [];
    linkedListOfDepthsSearch (root, 0, lists);
    return lists;
}

function linkedListOfDepthsSearch (root, depth, lists) {
    if (!root) return;
    const listNode = new ListNode(root.val);
    listNode.next = lists[depth];
    lists[depth] = listNode;
    linkedListOfDepthsSearch (root.left, depth+1, lists);
    linkedListOfDepthsSearch (root.right, depth+1, lists);
}

const root = TreeHelper.createMinBst([1, 3, 4, 7, 9, 14, 21]);
console.log(root);
console.log(linkedListOfDepths(root));

// function linkedListOfDepths (root) {
//     if (!root || root.length === 0) return [];
//     let current = new LinkedList();
//     const result = [];
//     current.add(root);
//     while (current.length > 0) {
//         result.push(current);
//         const parents = current;
//         current = new LinkedList();
//         for (let i=0; i<parents.length; i++) {
//             if (parents[i] && parents[i].val.left) current.add(parents[i].val.left);
//             if (parents[i] && parents[i].val.right) current.add(parents[i].val.right);
//         }
//     }
//     return result;
// }