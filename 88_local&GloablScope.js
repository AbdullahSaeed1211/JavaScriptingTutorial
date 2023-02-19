// Local global and block scope\
// let & const = block scoped
// var= global scoped
// variable passed outside a function or block becomes global scoped
let p = 9;
function ax() {
  let a = 8;
  console.log(p);
  console.log(a);
}

ax();
console.log(p);
console.log(a);
