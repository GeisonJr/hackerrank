function compareTriplets(a, b) {
	let res = [0, 0]
	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i])
			res[0] += 1
		else if (b[i] > a[i])
			res[1] += 1
	}
	return res
}
