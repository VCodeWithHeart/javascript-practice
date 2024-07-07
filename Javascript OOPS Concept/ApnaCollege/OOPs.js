// This method of creating objects is known as direct way of creating objects
const student = {
    fullName: "Shradhha Khapra",
    marks: 94.4,
    printMarks: function () {
        console.log("marks = ", this.marks); // student marks

    }
}


const employee = {
    calcTax() {
        console.log("tax rate is 10%");

    }
}

const karanArjun1 = {
    salary: 50000

}
const karanArjun2 = {
    salary: 50000

}
const karanArjun3 = {
    calcTax() {
        console.log("tax rate is 15%");

    },
    salary: 50000

}

// karanArjun3 mein uske khud ke pass calcTax() method hai to kya hoga usne jo reference kia hai vo wala ya phir iske khud ke andar jo calcTax() method hai vo use hoga?

// aise case mein agar aap us same name wale method ko call karoge to phir vo khud ke andar jo method hai usko call karega.

karanArjun1.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;

//__proto__ is a reference to an object it can be null or mostly in cases it will be the reference (address) to an object

// ye __proto__  karne se ye ek object ko ya uske methods ko refrence karke kisi doosre object me dal deta hai aur phir uske prototype me se usko access kar sakte hai. ye objects ka use kar rha hai lekin iska kaam dekhe to bilkul inheritance wale concept jaisa hi hai extends keyword wala kaam ye kar raha hai jaise employee wali object ki method ko karanArjun wali object ke andar reference kia (inherit) kia.

// the other way of creating objects is thorugh classes

// class is template or blueprint for creating objects so that we can create similar objects using class

// object is an instance of class

class ToyotaCar {
    constructor(brand, mileage) {
        // console.log("creating new Object");
        this.brand = brand
        this.mileage = mileage
    }
    start() {
        console.log("Start");

    }

    stop() {
        console.log("Stop");

    }

    owner(fullName) {
        this.fullName = fullName
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner")

let lexus = new ToyotaCar("lexus", 10);
// lexus.setBrand("lexus")
lexus.owner("Martyn Ford")

// constructor
// automatically invoked by new
// initializes an Object
// object ke creaction ke time pe hi agar hum kuch kaam karwana chahate hai ya kuch chizo ko initialize karwana chahate hai tab hum constructor ka use karte hain.

// INHERITANCE IN JS

// inheritance is passing down properties and methods from parent class to child class

class Person {

    constructor(name) {
        this.species = "homo sapiens"
        this.name = name
        console.log("Hey i am parent constructor");
    }

    hello() {
        console.log('hello i am a person and a engineer');
    }

    eat() {
        console.log('EAT');

    }



    // sleep() {
    //     console.log("sleep");

    // }
    // work() {
    //     console.log("I do nothing");

    // }
}

class Engineer extends Person {
    constructor(branch){
        console.log("Hey i am child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch
        console.log("Hey i am child constructor Over an Out");
        
    }
    work() {
        super.eat(); // pehle eat karega phir work karega
// eat method engineer class ke andar nahi hain aur isiliye agar hume super class ke methods ko use karna hai toh hume super keyword ka use krna padega :- kabhi kabhi aisa bhi hota hai ki apko koi kaam karwane se pehle apne suepr class ke constructors ko call karna pade ya usme se kisi method ko run karna pade tab ye super keyword bohot kaaam ata hai
        console.log("work solve problems build something");

    }
}

class Doctor extends Person{
    constructor(name){
        super(name);
    }
}

// agar parent aur child dono hi classes ke methods same name se hai to humesa child class ka method run hoga but agar hum particular class ka hi method run karana chahate hai to hume usi class ke liye ek new obj baana hoga ex - let doc = new doctor() tab doctor class ka hi work method run hoga - Yahi concept Method Overriding ka hota hai


let engObj = new Engineer("Chemical Engineer")
let docObj = new Doctor("Marvin Austin")

// SUPER KEYWORD

// The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.