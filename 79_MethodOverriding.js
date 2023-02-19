class Employee{
    constructor(name){
        this.name=name
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