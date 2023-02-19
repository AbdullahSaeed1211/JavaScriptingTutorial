//  refers to the process where by the interpreter appears to move the declarations to the top of the code before execution
// variables can thus be referenced  before they are declared in javascript

// let a;
// Following two lines will run successfully due to JavaScript hoisting
console.log(a)
greet()
var greet = function() {
  console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)
//  JS only hoists declarations not initializatons  variable will be undefined till the line where it's initialization is reached