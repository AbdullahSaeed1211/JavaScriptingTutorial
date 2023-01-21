// prompt("hey what's your name");
// alert("Hey!");
a = "45";
a = Number.parseInt(a);
console.log(a);
console.log(typeof a);
if (a > 0) {
  //   alert("This is a valid age");
  console.log("This is a valid age");
}
else if (a < 9) {
  console.log("you are a kid");
}
else if (a >= 9 && a<18) {
  console.log("you are a kid but can drive after 18 y/o");
}
else {
  //   alert("This is an invalid age");
  console.log("This is an invalid age");
}
//  switch case 
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}
// ternary operator
age=22
console.log("you can",(age<18?"Not Drive":"Drive"))