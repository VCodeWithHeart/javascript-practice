// Stack and Heap Memory

// Stack (primitive), and Heap (non-primitive)

let myName = "Vikas"

let anotherName = myName
anotherName = "ChaiaurCode"

console.log(anotherName);
console.log(myName);

// Non = Primitive type

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "one@google.com"

console.log(userOne.email);
console.log(userTwo.email);

console.log("----------------Multi Dim Array--------------------");


// let studentsdocs = [
//     //  0       1     2
//     ["Vikas", 21, 7285878879],
//     ["Manoj", 25, 6285878879],
//     ["Manav", 20, 9285878879],
//     ["Munnu", 26, 8285878879]
// ]

// console.log(studentsdocs[1][0]);
// console.log(studentsdocs[2][1]);

// for (let i = 0; i < 2; i++) {
//     console.log(studentsdocs[i]);
// }
