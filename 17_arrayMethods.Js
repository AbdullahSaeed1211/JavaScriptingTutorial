// Array Methods
let num = [1, 2, 3, 4, 5];
console.log(typeof num);
let b = num.toString(); //Converts Array items to string
let c = num.join("_");
console.log(c);
console.log(typeof c);
let r = num.pop(); // removes last items and changes last item in the SAME Array
console.log(num, r);
let r2 = num.push(12);
console.log(num, r2);
let r3 = num.shift();
console.log(r3); // Removes first element and returns the element also Changes real array
let r4 = num.unshift(98); //adds an element to start of array and returns new element length
