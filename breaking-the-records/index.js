// Breaking the Records - breaking-best-and-worst-records

function breakingRecords(scores) {
	let max_score = scores[0]
	let min_score = scores[0]
	let max_changed = 0
	let min_changed = 0

	scores.map((score) => {
		if (score > max_score) {
			max_score = score
			max_changed++
		}
		if (score < min_score) {
			min_score = score
			min_changed++
		}
	})

	return [max_changed, min_changed]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
console.log('-----------------------------------------------------------------')
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))