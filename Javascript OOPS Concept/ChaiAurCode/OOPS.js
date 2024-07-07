// object literal example - object is a collection of methods and properties
const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`your username is ${this.username}`);
        console.log("your current context is:", this);
        
    }

}

console.log(user["username"]);
//console.log(user.getUserDetails());
// console.log("your global context is:",this);

// const promise1 = new Promise()
// const date = new Date()

function User(username,loginCount,isLoggedIn) {
    this.username - username
    // left side wala variable hai aur right side wala value hai jo function se ayega vo this.username me store hojayega
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    // return this // ye implicitly define hojata hai
}

const userOne = new User("hitesh", 1, true)

// Working Mechanism

// step 1 new obj is created
// step 2 constructor function call hota hai new keyword ke jariye jitne bhi arguments hote hai unko uske andar pack karta hai aur dedeta hai
// step 3 this keyword hai jitne bhi arguments hai inject hoojate hai
// step 4 function ke andar mil jate hai

const userTwo = new User("Chai aur Code", 1, false)

// new keyword ka use karne ka matlab ki hum ek nayi copy mang rahe hai function ki nahi to vo humare userTwo ya jitne bhi user honge sabhi ki values ko last user se override kardega

// console.log(userOne.isLoggedIn,userOne.username);
console.log(userOne.constructor);
// khudi ka reference deta hai yaani user ka


