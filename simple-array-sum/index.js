// Simple array Sum - simple-array-sum

function simpleArraySum(ar) {
	let sum = 0

	ar.map((value) => {
		sum += value
	})

	return sum
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]))