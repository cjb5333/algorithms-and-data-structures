

let mergeSort = function (A, p, r) {
	if (p < r) {
		let q = Math.floor((p+r)/2);
		mergeSort(A, p, q);
		mergeSort(A, q+1, r);
		merge(A, p, q, r);
	}
};

let merge = function (A, p, q, r) {
	let L = A.slice(p, q+1);
	let R = A.slice(q+1, r+1);
	let i = j = 0;
	for (let k=p; k<=r; k++) {
		if (i < L.length && (j >= R.length || L[i] <= R[j])) {
			A[k] = L[i];
			i++;
		} else {
			A[k] = R[j];
			j++;
		}
	}
};

let input = [5, 3, -2, 7, 5, 1, 10, 8, 9 , 11, 2];

console.log(input);
mergeSort(input, 0, input.length-1);
console.log(input);
