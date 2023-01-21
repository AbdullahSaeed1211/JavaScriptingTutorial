// Arrays -> collection of items accessed by an index
let a = [18, 45, 64, 73, 95, 72, null, false, "Not Present"];
console.log(a);
console.log("Let of array a is " + a.length);
for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}
// Arrays are mutable
a[a.length - 1] = 98;
console.log(a);
// Array is an object in JS
console.log(typeof a);
