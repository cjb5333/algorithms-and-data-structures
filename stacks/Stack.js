class Stack {
    stack;
    length;

    constructor() {
        this.stack = [];
        this.length = 0;
    }

    peek() {
        return this.stack[this.length - 1];
    }

    pop() {
        if (this.length === 0) return null;
        this.length--;
        return this.stack.pop();
    }

    push(val) {
        this.length++;
        this.stack.push(val);
    }

    isEmpty() {
        return this.length === 0;
    }

    toString() { return this.stack; }
}

// class StackNode {
//     val;
//     next;
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }

//     toString() {
//         return this.val;
//     }
// }

// class Stack {
//     top = null;

//     constructor() { }

//     push(val) {
//         if (!this.top) {
//             this.top = new StackNode(val);
//         } else {
//             const temp = this.top;
//             this.top = new StackNode(val);
//             this.top.next = temp;
//         }
//     }

//     pop() {
//         if (!this.top) return null;
//         const node = this.top;
//         this.top = this.top.next;
//         return node;
//     }

//     peek() {
//         if (!this.top) return null;
//         return this.top.val;
//     }

//     isEmpty() {
//         return this.top === null;
//     }
// }

module.exports = Stack;