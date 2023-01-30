// Sets timeout on alert function of interval of 5000ms or 5secs here
const sum = (a, b) => {
  console.log("yes I am running" + (a + b));
  a + b;
};

setTimeout(sum, 1000, 1, 2);
// sum is a function to run, 1000 is the delay in ms, 1 & 2 here are operands

let a = setTimeout(function () {
  alert("Inside of Set Timeout", 5000);
});
let b = prompt("Do you want to run the set timeout");
if ("no" == b) {
  //cancels the set timeout
  clearTimeout(a);
}
console.log(a);
// here a is  TimerId

// set interval method has a similar syntax as setTimeout
// set Timeout executes once when the time specified is reached while setInterval repeats on an interval
setInterval(function () {
  alert("setInterval");
},3000);
// will execute the alert every 3 seconds