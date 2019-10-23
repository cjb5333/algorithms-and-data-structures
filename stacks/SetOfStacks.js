const Stack = require('./Stack');

class SetOfStacks {
    set;
    currStackIndex;
    maxPerStack;

    constructor(maxPerStack) {
        this.set = [new Stack()];
        this.maxPerStack = maxPerStack;
        this.currStackIndex = 0;
    }

    push(val) {
        if (this.set[this.currStackIndex].length >= this.maxPerStack) {
            this.set.push(new Stack());
            this.currStackIndex++;
        }
        this.set[this.currStackIndex].push(val);
    }

    pop() {
        const val = this.set[this.currStackIndex].pop();
        if (this.set[this.currStackIndex].isEmpty() && this.currStackIndex > 0) {
            this.set.pop();
            this.currStackIndex--;
        }
        return val;
    }
    popAt(index) {
        if (index > this.set.length-1) return null;
        return this.set[index].pop();
    }
}

const stacks = new SetOfStacks(3);

stacks.push(1);
stacks.push(2);
stacks.push(3);
stacks.push(4);
stacks.push(5);
stacks.push(6);
stacks.push(7);
stacks.push(8);

console.log(stacks);
console.log(stacks.pop());
console.log(stacks.popAt(0));
console.log(stacks.popAt(1));
console.log(stacks.popAt(0));
console.log(stacks.pop());
console.log(stacks.pop());
console.log(stacks.pop());
console.log(stacks.pop());
console.log(stacks.pop(2));
console.log(stacks);
