

function largestContiguousSubarray (vals) {
    if (vals.length === 0) return null;
    var largest = currLargest = vals[0];
    for (var i=1; i<vals.length; i++) {
        currLargest = max(currLargest+vals[i], vals[i]);
        if (largest < currLargest) {
            largest = currLargest;
        } else {
            currLargest = 0;
        }
    }
    return largest;
}

const max = (a, b) => (a>b ? a : b);

const vals = [3, -2, 1, -2, 4, 3, -2, 5, -1, 3];
console.log(vals);
console.log(largestContiguousSubarray(vals));
