class QueueNode {
    val;
    next;
    constructor(val) {
        this.val = val;
    }
    toString() {
        this.val;
    }
}

class Queue {
    first;
    last;
    constructor() {}

    enqueue(val) {
        if (!this.first && !this.last) {
            this.first = this.last = new QueueNode(val);
        } else {
            this.last.next = new QueueNode(val);
            this.last = this.last.next;
        }
    }

    dequeue() {
        if (!this.first) return null;
        const temp = this.first;
        this.first = this.first.next;
        return temp;
    }

    peek() {
        if (!this.first) return null;
        return this.first;
    }
}

module.exports = Queue;