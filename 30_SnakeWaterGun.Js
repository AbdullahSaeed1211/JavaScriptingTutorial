// USe Js to create a game of snake water and gun
// inputs S W & G against pc randomly generated S W G
// Declare winner on output declaring win or loss and
// use confirm and prompt
// Gun beat snake
// water beat gun
// snake beat water
// 1=Snake
// 2=Water
// 3=Gun
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

let bot = getRandomIntInclusive(1, 3);
bot = Number.parseInt(bot);
let win = () => {
  alert("You Win!");
};
let draw = () => {
  alert("Draw!");
};
let lose = () => {
  alert("You Lose!");
};
let again = true;
while ((again = true)) {
  let inp = prompt("Type either S(Snake) W(Water) or G(Gun)");
  inp = inp.toUpperCase();
  if (inp === "S" || inp === "W" || inp === "G") {
    if (inp === "S" && bot === 1) {
      console.log(draw());
    } else if (inp === "S" && bot === 2) {
      console.log(lose());
    } else if (inp === "S" && bot === 3) {
      console.log(win());
    } else if (inp === "W" && bot === 1) {
      console.log(lose());
    } else if (inp === "W" && bot === 2) {
      console.log(draw());
    } else if (inp === "W" && bot === 3) {
      console.log(win());
    } else if (inp === "G" && bot === 1) {
      console.log(win());
    } else if (inp === "G" && bot === 2) {
      console.log(lose());
    } else if (inp === "G" && bot === 3) {
      console.log(draw());
    } else {
      again = confirm("Play Again?");
    }
  } else {
    console.log(alert("Incorrect Input"));
    again = confirm("Try Again?");
  }
}
