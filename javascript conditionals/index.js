console.log("hello i am conditional tutorial")

let age = 79;
let grace = 1;

console.log(age ** grace); //square (power of) exponentiaton

if (age == 18) {
    console.log("you can drive");
}
else if (age > 78) {
    console.log("you are too old to drive");
}
else {
    console.log("you cannot drive");
}

let a = 11;
let b = 8;

let c = a > b ? (a + b) : (b - a); // ternary operator

console.log(c);

// translates to:
// if (a>b) {
//     let c = a + b
//     console.log(c);
// }
// else {
//     let c = b - a
//     console.log(c);
// }


