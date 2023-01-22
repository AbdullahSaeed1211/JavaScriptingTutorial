// let ctitle = document.getElementsByClassName("card-title")[0];
// ctitle.style.color = "red";
// Can also access by element ID
// let ctitle = document.getElementById("id-name")[0];
let ctitles = document.querySelectorAll(".card-title");
ctitles[0].style.color="blue";
ctitles[1].style.color="red";
ctitles[2].style.color="green";
console.log(ctitles);
