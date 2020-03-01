

let findEqualIndex = function(A) {
	if (!A || A.length <= 1) return -1;
	let sum = 0;
	for (let i=1; i<A.length; i++) {
		sum += A[i];
	};
	let prefix = 0;
	let suffix = sum;
	for (let i=1; i<A.length; i++) {
		prefix += A[i-1];
		suffix -= A[i];
		if (prefix === suffix) return i;
	}
	return -1;
};


let input = [-1, 3, -4, 5, 1, -6, 2, 1];

console.log(input);
console.log(findEqualIndex(input));

