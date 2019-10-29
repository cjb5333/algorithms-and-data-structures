
function randomizedQuickSort(A, p, r) {
    if (p < r) {
        const q = randomizedPartition(A, p, r);
        randomizedQuickSort(A, p, q-1);
        randomizedQuickSort(A, q+1, r);
    }
}

function randomizedPartition(A, p, r) {
    const i = random(p, r);
    swap(A, i, r);
    return partition(A, p, r);
}

function partition(A, p, r) {
    let x = A[r];
    let i = p - 1;
    for (let j = p; j < r; j++) {
        if (A[j] <= x) {
            i++;
            swap(A, i, j);
        }
    }
    swap(A, i+1, r);
    return i + 1;
}

function quickSort(A, p, r) {
    if (p < r) {
        const q = partition(A, p, r);
        quickSort(A, p, q-1);
        quickSort(A, q+1, r);
    }
}

let input = [23, 46, 7, 4, 123, 43, 6, 34, 34];
print(input);
randomizedQuickSort(input, 0, input.length-1);
print(input);


function swap(A, i, j) {
    let temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}

function print(vals) {
    console.log('-------------');
    vals.forEach(x => console.log(x));
}

function random(min, max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}