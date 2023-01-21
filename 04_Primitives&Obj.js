// 7 primitive data types in js
// NNSSBBU
// Null Number Symbol String Boolean Bigint Undefined
// Objects are key value pairs {Non-Primitive Data type}

// Primitve Data types
let a = null;
let b = 345;
let c = true;
let d = BigInt("5677") + BigInt("4");
let e = "String";
let f = Symbol("I am a symbol");
let g = undefined; // same as let g;

console.log(a, b, c, d, e, f, g);
console.log(typeof a); // Null
console.log(typeof b); // Number(int)
console.log(typeof c); // Boolean
console.log(typeof d); // BigInt
console.log(typeof e); // String
console.log(typeof f); // Symbol
console.log(typeof g); // undefined

// Non-Primitive Data Type
// Objects in Js 
// Similar to Dictionary in Python
const item = {
  "Luffy": true,
  "Zoro": false,
  "Jimbei": 67,
};
console.log(item["Jimbei"])
// Key Value pair for easy lookups, mapping , etc.

