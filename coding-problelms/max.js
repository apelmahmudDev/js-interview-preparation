const numbers = [1, 3, 45, 6, 78, 5];

// iterative way
// let max = 0;
// for(let i = 0; i < numbers.length; i++) {
//     let value = numbers[i]
//     if(max < value) {
//         max = value;
//     }
// }

// javascript method
// const max = Math.max(...numbers);

let max = 0;
for (let i = 0; i < numbers.length; i++) {
	let num = numbers[i];
	if (num > max) {
		max = num;
	}
}

console.log(max);
