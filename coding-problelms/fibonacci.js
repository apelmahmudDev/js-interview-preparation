// program to display fibonacci sequence using recursion
// function fibonacci(num) {
// 	if (num < 2) {
// 		return num;
// 	} else {
// 		return fibonacci(num - 1) + fibonacci(num - 2);
// 	}
// }

// // take nth term input from the user
// const nTerms = 5;

// if (nTerms <= 0) {
// 	console.log('Enter a positive integer.');
// } else {
// 	for (let i = 0; i < nTerms; i++) {
// 		console.log(fibonacci(i));
// 	}
// }


let f1 = 0, f2 = 1, f3 = 0;
function fibonacciNum(num){
    if(num > 0){
        f3 = f1+f2;
        f1 = f2;
        f2 = f3;
        console.log(f3)
        fibonacciNum(num - 1)
    }
}


console.log(f1,'\n',f2);
fibonacciNum(3-2)