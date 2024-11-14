
let a = 5;
let b = 10;
// console.log(a, b);
const temp = a;

a = b;
b = temp;
// console.log(a, b);

// -------------------

let x = 50;
let y = 100;
console.log(x, y);

[x,y] = [y,x]
console.log(x, y);
