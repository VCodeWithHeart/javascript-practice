class Employee {
    constructor() {
        console.log("Welcome to Claire Tech Company");
    }
    login() {
        console.log("Employee has logged in");
    }
    logout() {
        console.log("Employee has logged out");
    }

    requestLeaves(leaves) {
        console.log(`Employee has requested ${leaves} leaves - Auto approved`);

    }

}

class Programmer extends Employee {
    requestCoffee(x) {
        console.log(`Employee has requested ${x} Coffees`);

    }
    // overriding method (requestLeaves) from the base class (Employee)
    requestLeaves(leaves) {
        super.requestLeaves(4)
        console.log("one extra is granted");
        
        // console.log(`Employee has requested ${leaves + 1} leaves (One Extra)`);

    }

}

let e = new Employee()
e.login()
e.requestLeaves(3)