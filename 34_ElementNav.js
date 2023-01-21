const changeBodyRed = () => {
  document.body.firstElementChild.style.background = "red";
};
let b = document.body;

// shows first child like #text etc
console.log("First child of b is: ", b.firstChild);
// shows first element
console.log("First element child of b is: ", b.firstElementChild);
// changeBodyRed();

