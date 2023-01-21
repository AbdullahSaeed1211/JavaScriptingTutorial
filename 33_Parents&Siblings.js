// DOM Collections
// Read only
// They can be iterated using for.. of loop
// They are live
// Siblings are nodes that are children of the same parent
// for example <html> & <body> are siblings of the same parent
console.log(document.body.firstChild);
a = document.body.firstChild;
console.log(a.parentNode);
// element will only return if the parent is an valid element else it will return null
console.log(a.parentElement);
console.log(a.firstChild.nextSibling);
