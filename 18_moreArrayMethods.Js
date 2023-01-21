// More Array methods
let num = [93, 45, 78, 98];
let numMore = [98, 68, 54, 65, 78];
let numMoreMore = [93, 43, 54, 56, 78];
console.log(num);
console.log(num.length);
// delete num[0]; // is an operator that doesn't change the length of the array
console.log(num);
console.log(num.length);
console.log(num.concat(numMore, numMoreMore)); //returns a new array can add mroe than one array

// Sort Method
let sortNum = [556, 6667, 887, 765, 445, 678];
console.log(sortNum);
sortNum.sort(); // Modifies orignal array
console.log(sortNum);
console.log(typeof sortNum);

let compare = (a, b) => {
  return a - b; // or return b-a; for reverse
};
sortNum.sort(compare);
console.log(num);
sortNum.reverse();
console.log(sortNum);

// Slice & Splice
// splice() slice can be used to add new items to an array
// slice() slices and doesn't modify current array
let items = [551, 554, 34, 35, 67, 8];
items.splice(2/*start*/, 3/*end index*/, 1021, 2022, 2303); // modifies source array
console.log(items);

