// Q1 WAP using prompt function to take input of agae as a value
// from the user and use alert to tell if he can drive

// Q2 use confirm to ask the user if he want's to see the prompt again

// Q3 log error if age is negative
let b = true;
do {
  let a = prompt("Enter your age");
  a = Number.parseInt(a);
  if (age <= 0) {
    console.error("Please enter a valid age");
    break;
  } else {
    if (a >= 18) {
      alert("You may drive");
    } else {
      alert("You can't arrive come back in " + (18 - a) + " Years");
    }
    b = confirm("Do you want to see the prompt again?");
  }
} while ((b = true));

// Q4 change url to google.com is age > 4
let num = prompt("Enter a number");
num = Number.parseInt(num);
if (num > 4) {
  location.href = "https://google.com";
}
// Q5 change background color to red or yellow depending on the input
let color = prompt("Enter page bg color");
document.body.style.background = color;
