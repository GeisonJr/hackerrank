function migratoryBirds(arr) {
	let aux = [0, 0, 0, 0, 0]
	let res = 0
	let count = 0
	for (let i = 0; i < arr.length; i++)
		aux[arr[i] - 1]++
	for (let i = 0; i < aux.length; i++)
		if (count < aux[i]) {
			count = aux[i]
			res = i + 1
		}
	return res
}
