// String Methods
let name = "Luffy is the King of Pirates";
console.log(name.lenght);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(2, 4)); //4th index not included
console.log(name.slice(2)); //2nd index toend of string
console.log(name.replace("Luffy", "Strawhat"));
console.log(name.trim()); // removes white spaces from the string
let zoro = "Zoro";
console.log(name.concat(" is a friend of ", zoro, " Yes"));

// Strings are immutable
let fr = "Paaji";
// console.log(fr[0]);
// console.log(fr[1]);
// console.log(fr[2]);
// console.log(fr[3]);
// console.log(fr[4]);
for (let i = 0; i < fr.length; i++) {
  console.log(fr[i]);
}
// Strings can be concatenated usiong the + operator
