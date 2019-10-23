

class Queue {
    stack1;
    stack2;
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(val) {
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(val);
    }

    dequeue() {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }
}


const queue = new Queue();
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(5);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());