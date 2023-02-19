class Employee{
    constructor(name){
        this.name=name
        console.log(`constructor inside Employee`)
    }
    login(){
        console.log(`${this.name} has logged in`)
    }
    logOut(){
        console.log(`${this.name} has logged out`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} Leaves- Auto Approved`)
    }
}

let emp1 = new Employee("luffy")

class Programmer extends Employee{
    // by default the following constructor is created by the JS engine in the child class
    // constructor(){
    //     super(...args)
    // }
    constructor(name){ // must call super in order to run before using this keyword
        super(name)
        this.name=name
        console.log(`this is a newly written constructor for the programmer class`) 
    }
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4)//runs request leaves of parent method
        console.log(`One extra is granted `)
    }
}
let emp2 = new Programmer("zoro")
emp1.login()
emp2.login()
emp1.requestLeaves(8)
emp2.requestCoffee(16)
emp2.requestLeaves()
emp1.logOut()
emp2.logOut()