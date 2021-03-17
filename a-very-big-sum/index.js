// A Very Big Sum - a-very-big-sum

function aVeryBigSum(ar) {
	let sum = 0

	ar.map((value) => {
		sum += value
	})

	return sum
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]))