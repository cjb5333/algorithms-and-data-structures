const Stack = require('./Stack');
const helpers = require('../linked-lists/linked-list-helpers');

const stack = new Stack();

[3, 8, 84, 34, 23, 4, 6, 23].forEach(x => {
    stack.push(x);
});

helpers.printLinkedList(stack.peek());
console.log(stack.min);
stack.pop();
helpers.printLinkedList(stack.peek());
helpers.printLinkedList(stack.push(1));
console.log(stack.min);
stack.pop();
helpers.printLinkedList(stack.peek());
console.log(stack.min);
stack.push(423);
helpers.printLinkedList(stack.peek());
console.log(stack.min);
stack.push(87);
helpers.printLinkedList(stack.peek());
console.log(stack.min);
stack.pop();
console.log(stack.min);