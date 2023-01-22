let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
// Matches
console.log(id1.matches(".class"));
console.log(id2.matches(".box"));
// Closest
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1"));
// Contains
console.log(id1.contains(sp1)); //true
console.log(sp1.contains(sp1)); //true
console.log(sp1.contains(id1)); //False
