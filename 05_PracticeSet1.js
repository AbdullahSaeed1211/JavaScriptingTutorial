// Q1 - Create a variable of type string and add a number to it
let a = "Zoro ";
let b = "5";
console.log(a + b);

//Q2 - using type of operator find out the date type of a+b in Q1
console.log(typeof (a + b));

//Q3 - Create a const obj in Js , can you change it to hold a number later
const obj = {
  names: "Luffy",
  ship: "TheThousandSunny",
};
// cannot be changed to hold a number later

// Q4 - Add new key
obj["Friend"] = "Shubham";
obj["idk"] = "Jimbei";
console.log(obj);

// Q5 - Create a english dictionary
const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "state of freedom from emotional disturbance or anxiety",
  yakka: "work, specially hardwork.",
};
console.log(dict.yakka);
console.log(dict["yakka"]);
console.log(dict)