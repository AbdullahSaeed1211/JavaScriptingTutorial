// nothing much in this video except handling events within HTML tags
// further DOM manipulation using Js wil be explained in the next file

//same as handler used in the html tag itself but this will overwrite the html handler
let a = document.getElementsByClassName("container")[0];
a.onClick = () => {
  let b = document.getElementsByClassName("container")[0];
  b.innerHTML = "hello World";
};
