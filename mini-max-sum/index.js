// Mini-Max Sum - mini-max-sum

function mySort(arr) {
	return arr.sort((a, b) => a - b)
}

function miniMaxSum(arr) {
	let arr_normal = mySort(arr)
	let arr_size = arr_normal.length - 1

	let mini = 0
	let max = 0

	for (let index = 0; index < arr_size; index++) {
		mini += arr_normal[index]
		max += arr_normal[arr_size - index]
	}

	console.log(mini, max)
}

miniMaxSum([1, 2, 3, 4, 5])