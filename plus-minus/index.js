// Plus Minus - plus-minus

function plusMinus(arr) {
	const obj = {
		positive: 0,
		negative: 0,
		zero: 0
	}

	arr.map((value) => {
		if (value > 0) {
			obj.positive++
		} else if (value < 0) {
			obj.negative++
		} else {
			obj.zero++
		}
	})

	Object.keys(obj).map((key) => {
		obj[key] = obj[key] / arr.length
	})

	console.log(obj.positive)
	console.log(obj.negative)
	console.log(obj.zero)
}

plusMinus([-4, 3, -9, 0, 4, 1])