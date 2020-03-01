const ListNode = require('./ListNode');

class LinkedList {
    head;
    length;
    constructor() { 
        this.head = null;
        this.length = 0;
    }

    add(val) {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
        this.length += 1;
    }

    remove() {
        const node = this.head;
        this.head = node.next;
        this.length -= 1;
        return node.val;
    }

    toString() {
        let output = '';
        let node = this.head;
        while (node) {
            output += `${node.val} `;
            if (node.next) {
                output += '-> '
            }
            node = node.next;
        }
        return output;
    }
}

module.exports = LinkedList;