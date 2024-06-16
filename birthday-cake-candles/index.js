function birthdayCakeCandles(candles) {
	let res = 0
	let max = candles[0]
	for (let i = 0; i < candles.length; i++) {
		if (max < candles[i]) {
			max = candles[i]
			res = 0
		}

		if (max === candles[i])
			res++
	}
	return res
}
