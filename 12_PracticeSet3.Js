//  Write a program to print the marks of student in an object using for loop

let marks = {
  harry: 93,
  rohan: 70,
  aakash: 84,
};
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(
    "marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]
  );
}

// Write the program using for in
for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key]);
  // console.log("marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}

// Write a program to type try again till user enters the correct number

// let correctNumber = 4;
// let i = 5;
// while (i != correctNumber) {
//   console.log("try again");
//   // i=prompt("Enter a number");
// }
// console.log("You have entered the correct number");

// WAP to find mean of 5 numbers
const meanOfFive = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
};
console.log(meanOfFive(3, 4, 6, 87, 8));
