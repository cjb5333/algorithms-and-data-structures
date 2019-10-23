const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');

// Runtime: O(n)
// Space: O(n)
function removeDuplicates(head) {
    let map = new Map();
    let node = head;
    while (node) {
        if (map.has(node.val)) {
            deleteNode(map.get(node.val));
            deleteNode(node);
        } else {
            map.set(node.val, node);
            node = node.next;
        }
    }
    return head;
}

function deleteNode(node) {
    if (node) {
        if (node.next) {
            node.val = node.next.val;
            node.next = node.next.next;
        } else {
            node.val = null;
            node.next = null;
        }
    }
}

// // Runtime: O(n^2)
// // Space: O(1)
// function removeDuplicates(head) {
//     let node = head;
//     while (node) {
//         let hasDuplicate;
//         let searchNode = node.next;
//         while (searchNode) {
//             if (searchNode.val === node.val) {
//                 hasDuplicate = true;
//                 if (searchNode.next) {
//                     searchNode.val = searchNode.next.val;
//                     searchNode.next = searchNode.next.next;
//                 } else {
//                     searchNode.val = null;
//                     searchNode.next = null;
//                 }
//             } else {
//                 searchNode = searchNode.next;
//             }
//         }
//         if (hasDuplicate) {
//             node.val = node.next.val;
//             node.next = node.next.next;
//         }
//         node = node.next;
//     }
//     node = head;
//     while (node) {
//         if (node.next && node.next.val === null) {
//             // clean up null tail node
//             node.next = null;
//         }
//         node = node.next;
//     }
//     return head;
// }

const vals = [4, 34, 1, 76, 34, 3, 65, 23, 3];
const head = helpers.buildLinkedList(vals);
helpers.printLinkedList(head);
helpers.printLinkedList(removeDuplicates(head));
