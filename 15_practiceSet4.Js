// explore includes, starts with & endswith function in JS
let str = "Roronoa Zoro";
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);
//startswtih()
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat"));
console.log(str1.startsWith("Sat", 3));

//endsWith()
const str2 = "Cats are the best!";

console.log(str2.endsWith("best!"));
console.log(str2.endsWith("best", 17));

// WAP to convert a string to lowercase
console.log(str.toLowerCase());
// Extract the amount of this string "Please give Rs 1000"
const str3 = "Please give Rs 1000";
console.log(Number.parseInt(str3.slice(-4)));
// Try to change 4th character of a given string.
// Can't do as Strings are immutable
