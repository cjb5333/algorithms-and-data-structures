const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');

// Time Complexity: O(n)
// Space Complexity: O(n)
//
// function reverseLinkedList (head) {
//     const stack = [];
//     let node = head;
//     while (node) {
//         stack.push(node.val);
//         node = node.next;
//     }
//     let newHead = node = new ListNode(stack.pop());
//     while (stack.length > 0) {
//         node = node.next = new ListNode(stack.pop());
//     }
//     return newHead;
// }

// Time Complexity: O(n)
// Space Complexity: O(1)
//
function reverseLinkedList (head) {
    let node = head, newHead;
    while (node) {
        let next = node.next;
        node.next = newHead;
        newHead = node;
        node = next;
    }
    return newHead;
}

const vals = [4, 34, 1, 76, "wefw", '23', 3, 65, 23];
const head = helpers.buildLinkedList(vals);
helpers.printLinkedList(head);
const reversedHead = reverseLinkedList(head);
helpers.printLinkedList(reversedHead);
