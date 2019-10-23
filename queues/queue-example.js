const Queue = require('./Queue');
const helpers = require('../linked-lists/linked-list-helpers');

const queue = new Queue();
[2, 45, 8, 12, 98, 2, 646, 32].forEach(x => {
    queue.enqueue(x);
});

helpers.printLinkedList(queue.peek());
queue.dequeue();
helpers.printLinkedList(queue.peek());
queue.enqueue(2421);
helpers.printLinkedList(queue.peek());
queue.enqueue(311);
helpers.printLinkedList(queue.peek());
queue.dequeue();
helpers.printLinkedList(queue.peek());