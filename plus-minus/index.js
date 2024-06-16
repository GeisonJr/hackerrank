function plusMinus(arr) {
	let res = [0, 0, 0]
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > 0)
			res[0]++
		else if (arr[i] < 0)
			res[1]++
		else
			res[2]++
	}
	for (let i = 0; i < res.length; i++)
		process.stdout.write((res[i] / arr.length).toFixed(6) + '\n')
}
