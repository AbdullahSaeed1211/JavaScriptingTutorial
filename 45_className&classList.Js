// sets classNames for an element
first.className = "red text-col";

// prints all current classes
first.classList;

// removes particular class
first.classList.remove("red");

// adds a specific class to class List
first.classList.add("yellow");

// can also use toggle() method to toggle through
first.classList.toggle("red")

// contains() method can check for availabilty of a specific class in an element
first.classList.contains("yellow") //returns bool true or false