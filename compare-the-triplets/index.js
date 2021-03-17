// Compare the Triplets - compare-the-triplets

function compareTriplets(a, b) {
	let alice_score = 0
	let bob_score = 0

	for (let index = 0; index < a.length; index++) {
		if (a[index] > b[index]) {
			alice_score++
		} else if (a[index] < b[index]) {
			bob_score++
		}
	}

	return [alice_score, bob_score]
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]))
console.log('-----------------------------------------------------------------')
console.log(compareTriplets([17, 28, 30], [99, 16, 8]))