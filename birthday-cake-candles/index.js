// Birthday Cake Candles - birthday-cake-candles

function birthdayCakeCandles(candles) {
	let arr = []

	candles.map((value) => {
		if (!arr[value]) {
			arr[value] = 0
		}
		arr[value]++
	})

	return arr[arr.length - 1]
}

console.log(birthdayCakeCandles([4, 4, 1, 3]))