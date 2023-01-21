// For Loops
// For in Loop
// For of Loop
for (let i = 0; i < 4; i++) {
  console.log(i);
}
// for-in loop
let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
};
for (/*key in obj*/ let a in obj) {
  //code to be executed
  console.log("marks of " + a + " are " + obj[a]);
}

// for-of loop

for (let b of "Harry") {
  //used for arrays mainly works on;y if obj is iterable
  console.log(b);
}
