const ListNode = require('./ListNode');

module.exports = {
    buildLinkedList: vals => {
        let head, node;
        vals.forEach(x => {
            if (!head) {
                node = head = new ListNode(x);
            } else {
                node = node.next = new ListNode(x);
            }
        });
        return head;
    },
    printLinkedList: head => {
        let node = head;
        let output = '';
        while (node) {
            output = output.concat(node.val).concat(node.next ? ' -> ' : '');
            node = node.next;
        }
        console.log(output);
    }
}