const Stack = require('./Stack');

function sortStack(stack) {
    const temp = new Stack();
    while (!stack.isEmpty()) {
        temp.push(stack.pop());
        while (!stack.isEmpty() && stack.peek() > temp.peek()) {
            temp.push(stack.pop());
        }
        let val = stack.pop();
        while (!temp.isEmpty() && temp.peek() >= val) {
            stack.push(temp.pop());
        }
        if (val) stack.push(val);
    }
    while (!temp.isEmpty()) {
        stack.push(temp.pop());
    }
}

const stack = new Stack();

stack.push(6);
stack.push(4);
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(3);
stack.push(5);

console.log(stack);
sortStack(stack);
console.log(stack);
