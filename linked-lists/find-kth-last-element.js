const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');

function findKthLastElement(head, k) {
    var len = 0;
    let node = head;
    while (node) {
        len += 1;
        node = node.next;
    }
    node = head;
    for (var i=0; i<len-k-1; i++) {
        node = node.next;
    }
    return node;
}

const vals = [4, 34, 1, 76, "wefw", '23', 3, 65, 23];
const head = helpers.buildLinkedList(vals);
helpers.printLinkedList(head);
console.log(findKthLastElement(head, 1));