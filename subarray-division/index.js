// Subarray Division - the-birthday-bar

function birthday(s, d, m) {
	let pieces = 0
	let temp = 0

	for (let index = 0; index < s.length; index++) {
		temp += s[index]
		for (let i = 1; i < m; i++) {
			temp += s[index + i]
		}
		if (temp === d) {
			pieces++
		}
		temp = 0
	}
	return pieces
}

console.log('pieces: ', birthday([4], 4, 1))
console.log('-----------------------------------------------------------------')
console.log('pieces: ', birthday([1, 2, 1, 3, 2], 3, 2))
console.log('-----------------------------------------------------------------')
console.log('pieces: ', birthday([1, 1, 1, 1, 1, 1], 3, 2))