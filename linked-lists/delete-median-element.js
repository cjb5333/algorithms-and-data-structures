const helpers = require('./linked-list-helpers');

function deleteMedianElement (head) {
    var len = 0;
    var node = head;
    while (node) {
        len++;
        node = node.next;
    }
    node = head;
    for (var i=0; i<len/2-2; i++) {
        node = node.next;
    }
    node.next = node.next.next;
    return head;
}

const vals = [4, 34, 1, 76, "wefw", '23', 3, 65, 23, 10, 2];
const head = helpers.buildLinkedList(vals);
helpers.printLinkedList(head);
deleteMedianElement(head);
helpers.printLinkedList(head);