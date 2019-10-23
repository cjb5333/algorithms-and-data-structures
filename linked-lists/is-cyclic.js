const ListNode = require('./ListNode');
const helpers = require('./linked-list-helpers');

function isCyclic(head) {
    let leader = head, follower = head;

    while (leader && leader.next && follower) {
        leader = leader.next.next;
        follower = follower.next;
        if (leader === follower) return true;
    }
    return false;
}

const vals = [4, 34, 1, 76, "wefw", '23', 3, 65, 23];
const head = helpers.buildLinkedList(vals);

let node = head, cycleNode, tail, count=0;
while (node.next) {
    node = node.next;
    if (count === 4) {
        cycleNode = node;
    }
    count++;
    tail = node;
}
tail.next = cycleNode;
console.log(isCyclic(head));
