// Getters Setters and InstanceOf operator
// classes may include getters and setters to get & set the computed properties
class Animal {
    constructor(name) {
            this._name = name;
    }
    fly() {
            console.log("I am flying")
    }
    get name(){
            return this._name
    }
    set name(newName){
            this._name = newName
    }
}
class rabbit extends Animal{
    eatCarrot(){
        console.log(`Eating carrot`)
    }
}

let dog = new Animal("jimmy");
dog.fly()
dog._name = "bruno"
console.log(dog.name)
// first the name property is changed to _name to avoid name collision with the getter & setter then the getter uses the get keyword as shown above
// instance of operator allows to check whether an object belongs to a certain class
console.log(dog instanceof Animal) //returns true
let c=76
console.log(c instanceof Animal) //returns false
// Returns true if object belongs to the class or any other class inheriting from it
let bunny = new rabbit
console.log(bunny instanceof Animal) // true as object is inherited from Animal
console.log(bunny instanceof rabbit) // true as object is from rabbit