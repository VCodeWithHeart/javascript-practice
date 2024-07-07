const mySym = Symbol("key1")

const newJsUser = {
    name: "Hitesh",
    0: 18,
    "full name": "Hitesh Chaudhary",
    // now there is no way to access this with newJsUser.full name or newJsUser."full name" is incorrect you will have to use square brackets here newJsUser["full name"]

    // mySym: "myKey1",

    [mySym]: "myKey1", // while referring to the symbol datatype this is the correct way

    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(newJsUser.email);

// key values are processed as string if not defined as number here email is processed as string so we can access it without using "" while trying with newJsUser["name"]

// console.log(newJsUser["email"]);

// console.log(newJsUser[0]);

// console.log(newJsUser["full name"]);
// console.log(typeof newJsUser.mySym); // while using this syntax check line no 9  with this | here it is a string

// console.log(typeof mySym); // here it is a symbol 

// console.log(newJsUser[mySym]);

// console.log(typeof newJsUser[mySym]);

newJsUser.email = "hey@gmail.com";

// console.log(newJsUser["email"]);

//Object.freeze(newJsUser); // it will not produce error but changes will not propage after this

// newJsUser.email = "yippee@gmail.com"; now not changing
console.log(newJsUser["email"]);



console.log(newJsUser);

newJsUser.greeting = function(){
    console.log("Hello this is greet");
}

newJsUser.greetingTwo = function(){
    console.log(`Hello this is greet, ${this.name}`);
}

console.log(newJsUser.greeting());
console.log(newJsUser.greeting);

console.log(newJsUser.greetingTwo());

