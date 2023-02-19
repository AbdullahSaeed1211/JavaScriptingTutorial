//  static methods are used to implement function that belong to a class as a whole and not to any particular object
//  doesn't work for a particular obj
class Animal {
    constructor(name) {
      this.name = Animal.capitalize(name)
    }
    walk() {
      console.log("Animal " + this.name + " is walking")
    }
    static capitalize(name) {
      return name.charAt(0).toUpperCase() + name.substr(1, name.length)
    }
  }
  
  j = new Animal("jack")
  j.walk()
  // console.log(j.capitalize("thisa")) // --- > this doesnt work