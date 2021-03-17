// Divisible Sum Pairs - divisible-sum-pairs

function divisibleSumPairs(n, k, ar) {
	let pairs = 0

	for (let index = 0; index < n; index++) {
		for (let i = index + 1; i < n; i++) {
			if ((ar[index] + ar[i]) % k === 0) {
				pairs++
			}
		}
	}

	return pairs
}

console.log('pairs: ', divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))