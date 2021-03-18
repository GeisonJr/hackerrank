// Diagonal Difference - diagonal-diference

function diagonalDifference(arr) {
	let diagonal_primary = 0
	let diagonal_secondary = 0

	arr.map((subarr, index) => {
		diagonal_primary += subarr[index]
	})

	arr.reverse().map((subarr, index) => {
		diagonal_secondary += subarr[index]
	})

	return Math.abs(diagonal_primary - diagonal_secondary)
}

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
console.log('-----------------------------------------------------------------')
console.log(diagonalDifference([[11, 2, 4], [, 4, 5, 6], [10, 8, -12]]))