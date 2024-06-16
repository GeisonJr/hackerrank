function breakingRecords(scores) {
	let min_max = [scores[0], scores[0]]
	let res = [0, 0]
	for (let i = 1; i < scores.length; i++) {
		if (scores[i] > min_max[0]) {
			min_max[0] = scores[i]
			res[0]++
		}
		if (scores[i] < min_max[1]) {
			min_max[1] = scores[i]
			res[1]++
		}
	}
	return res
}
