// Prototypes 
// not really used tbh
// special property called of object that is either null or references another object

// when we try to read a property  from a prototype and its missing, Javascript automatically takes it from the prototype this is called "Prototypal Inheritance"
let a = {
    name2: "Harry",
    language: "JavaScript",
    run: () => {
      alert("self run")
    }
  }
  console.log(a)
  
  
  let p = {
    run: () => { //method of obj p
      alert("run")
    }
  }
  
  p.__proto__ = {
    name: "Jackie"
  }
  
  a.__proto__ = p
  a.run()
  console.log(a.name) //will find in the prototype 