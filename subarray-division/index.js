function birthday(s, d, m) {
	let res = 0
	for (let i = 0; i < s.length; i++) {
		let aux = 0
		for (let j = i; j < i + m; j++)
			aux += s[j]
		if (aux === d)
			res++
	}
	return res
}
