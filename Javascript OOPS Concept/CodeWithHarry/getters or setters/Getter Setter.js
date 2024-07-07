class Animal {
    constructor() {
        this._name = name
    }

    fly() {
        console.log("i am flying")
    }

    get name() {
        return this._name
    }

    set name(newName){
        this._name = newName
    }
}

let a = new Animal("BruBru")
a.fly()
console.log(a.name);
a.name = "Mark"
console.log(a.name);

console.log(a instanceof Animal);
