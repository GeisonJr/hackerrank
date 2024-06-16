function staircase(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (j < n - 1 - i)
				process.stdout.write(' ')
			else
				process.stdout.write('#')
		}
		process.stdout.write('\n')
	}
}
