// sure correct = 2, 3, 4, 6, 7, 8, 9, 10,

// 2. What is the output? ✔
const str = "hello";
const arr = [...str];
console.log(arr); // Ans: [ 'h', 'e', 'l', 'l', 'o' ]

// 3. What is the output of the code snippet? ✔
var fullMoon = true;
var species = "human";

if (fullMoon) {
	var species = "werewolf";
	console.log(species);
}

console.log(species); // Ans: werewolf werewolf

// 4. What would be the output of the following code? ✔
function multiply(n1, n2, ...others) {
	console.log(n1, n2, others);
}

multiply(2, 3, 5, 6); // ans: 2 3 [ 5, 6 ]

// 5. What is the output of the snippet?
class MyClass extends (String, Array) {
	construct() {}
}

const a = new MyClass();
console.log(a instanceof Array); // ans: true

// 6. What command you will use to initialise git in a project? ✔

// ans: git init;

// 7. What months have 28 days? ✔

// ans: february

// 7. What is the console sequence of the following code snippet?

function run() {
	const promise = new Promise((resolve) => {
		resolve("promise");
	});

	setTimeout(() => console.log("setTimeout"));

	promise.then((res) => console.log(res));

	console.log("log");
}

run(); // ans: log, promise, setTimeout

// 8. What is the output? ✔
var x = 5;
(function () {
	console.log(x);
})(); // ans: 5;

// 9. What is the counter value after clicking the button for the first time at this React component?
