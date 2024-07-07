// let obj = {
//     a:1,
//     b:"Harry"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal;  // sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log(name, "Object is Created");

    }

    eats() {
        console.log("Animal Eats");
    }
    jumps() {
        console.log("Animal Jumps");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        this.name = name
        console.log("Object is created and he is a lion....");
    }

    // niche ka eats method lion ke liye pura alag hogya matlab jab pehle lion class ne jab animal class ko extends kiya tha tab lion class ke andar animal class ke methods bhi aagye the lekin phir lion me usi eats() method ke andar changes kiye aur animal class ka eats method apne liye override kardia

    eats() {
        super.eats() // super keyword ka use karne se vo upar ke classes ko bhi check karega ki uske andar koi eats method hai ya nahi agar hoga to dono hi eats() runs hojayenge lekin agar super class me koi eats() method nahi hoga to vo error retun karega aur niche ka lion class ka bhi eats method run nahi karega
        console.log("Lion Eats and Rawrs");
    }
}

let a = new Animal("Bunny");
console.log(a);

let l = new Lion("Sher")
console.log(l);

//getter and setter

class User {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._name = value;
    }
}

let user = new User("John");
console.log(user.name); // john

user = new User(""); // Name is too short 

// Static Methods

class Vehicle {
    constructor(name){
        this.name = Vehicle.capitalize(name)
    }
    run(){
        alert("Vehicle " + this.name + " is running");
    }
   static capitalize(name){
        return name.charAt(0).toUpperCase() + name.substr(1,name.length)
    }
}
 
j = new Vehicle("audi")
j.run()