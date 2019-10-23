
function merge(vals, p, q, r) {
    var L = vals.slice(p, q+1), R = vals.slice(q+1, r+1);
    var i = j = 0;
    for (var k = p; k <= r; k++) {
        if (i < L.length && (j >= R.length || L[i] <= R[j])) {
            vals[k] = L[i];
            i++;
        } else {
            vals[k] = R[j];
            j++;
        }
    }
}


function mergeSort(vals, p, r) {
    if (p < r) {
        var q = Math.floor((p+r)/2);
        mergeSort(vals, p, q);
        mergeSort(vals, q+1, r);
        merge(vals, p, q, r);
    }
}

function print(vals) {
    console.log('-------------');
    vals.forEach(x => console.log(x));
}

let input = [23, 46, 7, 4, 123, 43, 6, 34, 34];
print(input);
mergeSort(input, 0, input.length-1);
print(input);
