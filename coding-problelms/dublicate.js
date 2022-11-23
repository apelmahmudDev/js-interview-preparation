const numbers = [3, 4, 5, 6, 7, 8, 9, 3, 3, 4, 5];

let realNumbers = [];
numbers.forEach((num) => {
	if (realNumbers.indexOf(num) == -1) {
		realNumbers.push(num);
	}
});

// ticks

const withoutDublicate = [...new Set(numbers)];

console.log(withoutDublicate);
