class MinHeap {
    A = [];
    size=0;

    constructor(vals) {
        this.A = vals;
        this.size = vals.length;
        for (var i=Math.floor(this.size/2); i>=0; i--) {
            this.minHeapify(i);
        }
    }

    extractMin() {
        if (this.size === 0) return null;
        var min = this.A[0];
        this.A[0] = this.A[this.size-1];
        this.size--;
        this.minHeapify(0);
        return min;
    }

    minHeapify(i) {
        var l = left(i), r = right(i);
        var smallest = i;
        if (l < this.size && this.A[l] < this.A[i]) {
            smallest = l;
        }
        if (r < this.size && this.A[r] < this.A[smallest]) {
            smallest = r;
        }
        if (smallest !== i) {
            this.swap(smallest, i);
            this.minHeapify(smallest);
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
const heap = new MinHeap(vals);
while(!heap.isEmpty()) console.log(heap.extractMin())