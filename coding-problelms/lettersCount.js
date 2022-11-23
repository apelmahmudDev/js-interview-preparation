// const bangladesh = 'I love my country!';

// let newWord = '';
// for (let i = 0; i < bangladesh.length; i++) {
// 	let letter = bangladesh[i];
// 	if (letter !== ' ') {
// 		newWord += letter;
// 	}
// }
// console.log('before count', bangladesh.length);
// console.log(newWord);
// console.log(newWord.length);

const speech = "I love my country";

let newWord = "";
for (let i = 0; i < speech.length; i++) {
	let letter = speech[i];
	if (letter !== " ") {
		newWord = newWord + letter;
	}
}

console.log(newWord.length);
