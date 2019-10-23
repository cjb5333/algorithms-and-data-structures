const testcase = require('../utils/testcase');
const helpers = require('./linked-list-helpers');

function partition(head, x) {
    let node = head;
    while (node) {
        
        if (node.val >= x) {
            let nextNode = node.next;
            while (nextNode) {
                if (nextNode.val < x) {
                    const tempVal = node.val;
                    node.val = nextNode.val;
                    nextNode.val = tempVal;
                    break;
                } else {
                    nextNode = nextNode.next;
                }
            }
        }
        node = node.next
    }
    return head;
}

const input = helpers.buildLinkedList([3, 5, 8, 5, 10, 2, 1]);
helpers.printLinkedList(input);
const expected = helpers.buildLinkedList([3, 1, 2, 10, 5, 5, 8]);
helpers.printLinkedList(partition(input, 5));
