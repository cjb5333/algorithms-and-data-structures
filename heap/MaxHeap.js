class MaxHeap {
    A = [];
    size=0;

    constructor(vals) {
        this.A = vals;
        this.size = vals.length;
        for (var i=Math.floor(this.size/2); i>=0; i--) {
            this.maxHeapify(i);
        }
    }

    extractMax() {
        if (this.size === 0) return null;
        var max = this.A[0];
        this.A[0] = this.A[this.size-1];
        this.size--;
        this.maxHeapify(0);
        return max;
    }

    maxHeapify(i) {
        var l = left(i), r = right(i);
        var largest = i;
        if (l < this.size && this.A[l] > this.A[i]) {
            largest = l;
        }
        if (r < this.size && this.A[r] > this.A[largest]) {
            largest = r;
        }
        if (largest !== i) {
            this.swap(largest, i);
            this.maxHeapify(largest);
        }
    }

    swap (x, y) {
        var temp = this.A[x];
        this.A[x] = this.A[y];
        this.A[y] = temp;
    }

    isEmpty = () => this.size===0
}

function left(i) {
    return i*2;
}

function right(i) {
    return i*2+1;
}

function parent(i) {
    return Math.floor(i/2);
}


const vals = [34, 1, 3, 56,8, 5, 1, 32,1,54,6,6,8];
const heap = new MaxHeap(vals);
while (!heap.isEmpty()) { console.log(heap.extractMax()) }