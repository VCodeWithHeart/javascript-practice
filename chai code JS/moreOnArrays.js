// Working with Multidimensional arrays

var ary = [
    ["Harry", 18, "Male", "B.Com"],
    ["Sunny", 19, "Male", "BCA"],
    ["Sarah", 20, "Female", "BCA"],
    ["Tom", 17, "Male", "BA"]
];

// ary.forEach(i => {
//     console.log(i);
// });

// for (const i of ary) {
//     console.log(i);
// }

// Practicing arrays in js

// const myArr = [0,1,2,3,4,5,true,"hitesh"]

// const myArr = [0,1,12,3,4,51]
// console.log(myArr[2]);

// const myHeros = ["shaktiman", "krrish"]

// const myArr2 = new Array(1,2,35,45,68)

// console.log(myArr2[3]);

// myArr2.push(6)

// console.log(myArr2);

// myArr2.pop()

// console.log(myArr2);

// myArr2.unshift(9) // adds element from start of an array (opposite side of push)

// myArr2.shift() // removes element from start of an array (opposite side of pop)

// console.log(myArr2.includes(9));
// console.log(myArr2.indexOf(35));

// console.log(myArr2);

// const newArr = myArr2.join()

// console.log(myArr2);
// console.log(newArr); // joins the array in the form of string

// slice, splice

const myArr2 = new Array(1,2,3,4,5)

console.log("A ", myArr2);

const myn1 = myArr2.slice(1, 3)  // it does not includes the last range also means 1 to 2 only


console.log(myn1); // returns slice

console.log("B ", myArr2); // not changes the original array (deep copy)


const myn2 = myArr2.splice(1, 3) // it includes the last range also means 1 to 3 including 3

console.log(myn2); // returns deleted elements

console.log("C ", myArr2); // changes the original array (shallow copy)
