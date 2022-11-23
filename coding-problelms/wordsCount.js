const status = 'I love my country Bangladesh';

let wordCounter = 1;
for (let i = 0; i < status.length; i++) {
	const word = status[i];
	if (word == ' ') {
		wordCounter++;
	}
}

console.log(wordCounter);
