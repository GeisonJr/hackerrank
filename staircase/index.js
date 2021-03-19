// Staircase - staircase

function staircase(n) {
	let string = ''

	for (let index = n; index > 0; index--) {
		for (let i = 1; i <= n; i++) {
			if (i < index) {
				string += ' '
			} else {
				string += '#'
			}
		}
		console.log(string)
		string = ''
	}
}

staircase(6)