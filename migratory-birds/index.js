// Migratory Birds - migratory-birds

function migratoryBirds(arr) {
	const counter = [0, 0, 0, 0, 0, 0]
	let temp = counter[0]
	let most_sighted

	arr.map((value) => {
		counter[value]++
	})

	counter.map((value, index) => {
		if (temp < value) {
			temp = value
			most_sighted = index
		}
	})
	return most_sighted
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))
console.log('-----------------------------------------------------------------')
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]))