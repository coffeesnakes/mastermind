let Mastermind = {};

(function () {

	let secret = [];
		let mode = 0;
	// using set numbers to test functionality prior to setting up API calls for randomly generated codes.
	let numbers = [0, 1, 2, 3, 4, 5, 6, 7];
	// add in harder difficulties after minimum viable product.
	let difficulty = [
		{name: 'normal', time: 9999, attempts: 10, numbers: 4}
	]


	const generateCode = function (numbers) {
		let	length = numbers.length - 1;
		let secretCode = [];

		for (let i = 0; i < 4; ++i) {
			secretCode[i] = numbers[Math.floor(Math.random() * length)];
		}
		console.log(secretCode)
		return secretCode
	};


	this.setDifficulty = function(lvl) {
		let mode = lvl;
	}
	this.getMode = function() {
		return difficulty[mode];
	}

	this.numbers = numbers.slice(0, this.getMode().numbers - 1);


	this.start = function() {
		secret = generateCode(this.numbers);

		let attempts = [];

	}
})