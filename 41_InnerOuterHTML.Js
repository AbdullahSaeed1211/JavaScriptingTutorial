// Console.log
// shows the element DOM Tree
console.log(document.getElementsByTagName("span")[0]);
// Console.dir
// shows the element as an object with its properties
console.dir(document.getElementsByTagName("span")[0]);

// Node name and tag name
let x = document.getElementsByTagName("span")[0];
console.log(x);
let y = document.getElementsByTagName("span")[0];
console.dir(y);
console.log(document.body.firstChild.nodeName);
console.log(document.body.firstElementChild.nodeName);

// Inner HTML
// Valid for only element nodes for others do .data or .value
first.innerHTML; //gets
// Can also set HTML
first.innerHTML = "<i>italic tag</i>"; //sets
document.body.firstChild.data;
document.body.firstChild.nodeValue;

// OuterHTML
// also has inner html
second.outerHTML; //gets
// // can also set HTML
second.innerHTML = "<div>now a div</div>"; //sets

// Text Content
// Provides only text without any tags
console.log(document.body.textContent);

// Hidden Property
// type hidden in the open tag
first.hidden=false;