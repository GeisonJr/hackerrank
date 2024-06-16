function diagonalDifference(arr) {
	let res = 0
	for (let i = 0; i < arr.length; i++)
		res += arr[i][i] - arr[i][arr.length - 1 - i]
	return Math.abs(res)
}
