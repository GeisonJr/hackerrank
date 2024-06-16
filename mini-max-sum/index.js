function miniMaxSum(arr) {
	arr = arr.sort()
	let min = arr[0] + arr[1] + arr[2] + arr[3]
	let max = arr[1] + arr[2] + arr[3] + arr[4]
	process.stdout.write(min + ' ' + max)
}
