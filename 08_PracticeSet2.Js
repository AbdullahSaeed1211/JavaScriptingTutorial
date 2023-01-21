// Use logical operators to find wheter the age of a person lies between 10 and 20
// let age = prompt("what is your age?")
let age = 17;
age = Number.parseInt(age);
// if(age>10 && age<20){
//     console.log("Your age lies between 10 and 20")
// }
// else{
//     console.log("your age doesn't lie b/w")
// }

// Demonstarte switch case statements
switch (age) {
  case 11:
    console.log("Your age is 11");
    break;
  case 12:
    console.log("Your age is 12");
    break;
  case 13:
    console.log("Your age is 13");
    break;
  case 14:
    console.log("Your age is 14");
    break;
  case 15:
    console.log("Your age is 15");
    break;
  case 16:
    console.log("Your age is 16");
    break;
  default:
    console.log("default");
}

// find whether a number is divisble by by 2 and 3
let num=2567
if(num%2==0 && num%3==0 ){
    console.log("Divisible")
}
else{
    console.log("Isn't Divisible")
}
// find either a number is divisble by by 2 and 3
let num1=2567
if(num1%2==0 || num1%3==0 ){
    console.log("Divisible")
}
else{
    console.log("Isn't Divisible")
}
// print you can drive or not based on age being 18 using the ternary operator
let age2 = 13;
console.log("you can",(age2<18?"Not Drive":"Drive"))