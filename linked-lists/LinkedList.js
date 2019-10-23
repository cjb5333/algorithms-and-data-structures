const ListNode = require('./ListNode');

class LinkedList {
    head;
    constructor() { 
        this.head = null;
    }

    add(val) {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
    }

    remove() {
        const node = this.head;
        this.head = node.next;
        return node.val;
    }
}

module.exports = LinkedList;