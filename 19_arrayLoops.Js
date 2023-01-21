let arr = [45, 43, 345, 7, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log([i]);
// }

// forEach Loops
arr.forEach((element) => {
  console.log(element * element);
});

//Array.from() -> creats array from an html collection
let name = "Luffy";
let arr2 = Array.from(name);
console.log(arr2);

//for -- of
for (let item of arr) {
  console.log(item);
}
//for -- in
for (let i in arr) {
  console.log(i);
}

