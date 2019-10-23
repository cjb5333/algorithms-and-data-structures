const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');
const testcase = require('../utils/testcase');

// Runtime: O(n*m)
// Space: O(1)
function isIntersection (head1, head2) {
    let node = head1;
    while (node) {
        let runner = head2;
        while(runner) {
            if (node === runner) return true;
            runner = runner.next;
        }
        node = node.next;
    }
    return false;
}


const head1 = helpers.buildLinkedList([4, 34, 1, 76, 3, 65, 23]);
const head2 = helpers.buildLinkedList([1, 2, 3, 4, 3, 65, 23]);
testcase(isIntersection, false, head1, head2);

// create intersection
let node1 = head1;
for (let i=0; i<4; i++) {
    node1 = node1.next;
}
let node2 = head2;
while(node2.next) {
    node2 = node2.next;
}
node2.next = node1;
// helpers.printLinkedList(head1);
// helpers.printLinkedList(head2);

testcase(isIntersection, true, head1, head2);
 