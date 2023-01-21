// Map Filter and Reduce -> higher order array methods
// Map -> creates a new array by performing some operation on each array element
let arr = [45, 56, 78, 98];
let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value + 1;
});
console.log(a);
// difference b/w for each and map is that map makes a new array

//Array Filter Method
// Filters an array with values that passes a test and creates a new array
let arr2 = [45, 65, 67, 89, 64, 3, 2, 4, 6];
let a2 = arr2.filter((a) => {
  return a < 10;
});
console.log(a2);

// Array Reduce Method
let arr3 = [5, 4, 2, 3, 1, 6];
let newArr3 = arr3.reduce((v, v2) => {
  return v + v2;
});
console.log(newArr3);
// returns a value not array