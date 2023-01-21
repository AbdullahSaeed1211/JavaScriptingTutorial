// Expressions and operators

//a fragment of code that produces a value is called an expression\
// eg
77; // throws no error is an expression

console.log("Arithmetic Operators in js");
let a = 45;
let b = 4;
console.log("a+b=", a + b);
console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b); // will give exact decimal val {11.25}
console.log("a%b=", a % b);
console.log("a**b=", a ** b);
console.log("a++=", a++);
console.log(a);
console.log("++b=", ++b);
console.log(b);

console.log("Assignment Operators in js");
z = 8;
console.log((z += 1));
console.log((z -= 1));
console.log((z *= 1));
console.log((z /= 1));
console.log((z %= 1));
console.log((z **= 1));

console.log("Comparison Operators");
x = 6;
x2 = 7;
console.log(x == x2); //false
console.log(x != x2); //true

c = 24;
c2 = "24";
console.log(c === c2); //false
console.log(c !== c2); //true

console.log(x >= x2); //false
console.log(x <= x2); //true

console.log("Logical Operators")
// && -> AND
// || -> OR