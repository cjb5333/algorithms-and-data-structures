class StackNode {
    val;
    next;
    nextMin;
    constructor(val) {
        this.val = val;
        this.next = null;
        this.nextMin = null;
    }
}

class MinStack {
    top = null;
    min = null;

    constructor() { }

    push(val) {
        if (!this.top) {
            this.top = this.min = new StackNode(val);
        } else {
            const temp = this.top;
            this.top = new StackNode(val);
            this.top.next = temp;
            if (val < this.min) {
                this.top.nextMin = this.min;
                this.min = top;
            }
        }
    }

    pop() {
        if (!this.top) return null;
        const node = this.top;
        this.top = this.top.next;
        if (this.top === this.min) {
            this.min = this.top.nextMin;
        }
        return node;
    }

    peek() {
        if (!this.top) return null;
        return this.top;
    }

    min() {
        return this.min;
    }
}

module.exports = Stack;