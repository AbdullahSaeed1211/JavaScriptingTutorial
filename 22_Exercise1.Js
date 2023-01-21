let a;
let i = 0;
function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
let b = getRandom(0, 100);

do {
  a = prompt("Enter a number");
  a = Number.parseInt(a);
  console.log("try again");
  i++;
} while (a != b && i < 101);
if (a == b) {
  console.log("You guessed the correct number with " + i + " points.");
} else {
  console.log("Your Guess was incorrect and you took " + i + " turns");
}
