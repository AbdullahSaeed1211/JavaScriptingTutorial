let first = document.getElementById("first");
// Gets Attribute .getAttribbute("name")
let a = first.getAttribute("class");
console.log(a);
// checks whether element has an attribute
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("id"));
console.log(first.hasAttribute("hidden"));
first.setAttribute("hidden", "true");
console.log(first.hasAttribute("hidden"));
first.setAttribute("hidden", "false");
first.setAttribute("Class", "heyo heye");
// Remove attribute
// first.removeAttribute("class");
// Prints attributes
console.log(first.attributes);

// data- * attributes
// you can create custom attributes,
// but the ones starting woth "data-" are reserved for programmers use.
console.log(first.dataset);
console.log(first.dataset.player);
console.log(first.dataset.game);
