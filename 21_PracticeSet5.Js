// Create an array of numbers and take input from the user to add numbers to this array
let arr = [1, 2, 3, 4, 5, 6, 7];
let a;
do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  arr.push(a);
} while (a != 0);
console.log(arr);
//Filter for numbers divisible by 10 from a given array

let arr2 = [23, 34, 5, 6, 7, 88, 9, 60, 30, 560];
let n = arr2.filter((x) => {
  return x % 10 === 0;
});
console.log(n);

// create an array of square of given numbers
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let b = arr3.map((z) => {
  return z*z;
});
console.log(b);

// Use reduce to calculate factorial of a given number from an array of first n natural numbers n being the factorial whose factorial needs to be calculated
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = arr4.reduce((y1,y2) => {
  return y1*y2;
});
console.log(c);