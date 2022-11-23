// let a = 5;
// let b = 3;
// with temp
// let temp;
// temp = b;
// b = a;
// a = temp;

// with destructuring
// [a, b] = [b, a];

// console.log('a = ', a, 'b = ', b);

let a = 5;
let b = 9;

// let temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];

console.log(a, b);
