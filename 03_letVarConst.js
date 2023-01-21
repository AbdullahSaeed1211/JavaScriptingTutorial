// var Pre ES6 ( ecma script ) standard avoided nowadays

let a = "Python";
let b = 45; //declaration
b = 55; // updated
let c = null;
let d = undefined;

// var is globally scoped
// var can be redeclared
// let and const are block scoped
{
  let b = "this";
  console.log(b);
}
// let can be updated but not redeclared
// const can neither be updated nor redeclared
// const must be intialized during declaration
const author = "Me";
// let author = 5 --> will give error as author can't be redeclared
// also js lightly typed language don't need to end with a ;
