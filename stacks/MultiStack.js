

class MultiStack {
    stacks;
    constructor() {
        this.stacks = [];
        this.tops = [0,0,0];
    }

    push(val, stackNumber) {
        this.tops[stackNumber-1] = this.tops[stackNumber-1] + 1;
        this.stacks[this.tops[stackNumber-1]*3+stackNumber-1] = val;
    }

    pop(stackNumber) {
        const val = this.stacks[this.tops[stackNumber-1]*3+stackNumber-1];
        this.stacks[this.tops[stackNumber-1]*3+stackNumber-1] = null;
        this.tops[stackNumber-1] = this.tops[stackNumber-1] - 1;
        return val;
    }
}


const stack = new MultiStack();

stack.push(11, 1);
stack.push(12, 1);
stack.push(13, 1);

stack.push(21, 2);
stack.push(22, 2);
stack.push(23, 2);

stack.push(31, 3);
stack.push(32, 3);
stack.push(33, 3);

console.log(stack.pop(1));
console.log(stack.pop(2));
console.log(stack.pop(3));

console.log(stack.pop(1));
console.log(stack.pop(2));
console.log(stack.pop(3));
stack.push(111, 1);
stack.push(122, 1);
stack.push(133, 1);

console.log(stack.pop(1));
console.log(stack.pop(2));
console.log(stack.pop(1));
console.log(stack.pop(1));