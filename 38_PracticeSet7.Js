// create a navbar and change color of it's first element to red
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// create a table without tbody
// Create an element with 3 children Now change change the color of it's first and last element to green
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

//write a code to change background of all li tags to cyan
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});
// which of the following is used to look for the farthest that amtches a given css selector
// ans->none