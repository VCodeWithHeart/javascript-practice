// console.log("this is a string");
let a = "Vikram";
// console.log(a[2]);

// console.log(a.length)

// let his_name = "harry";
// let friend = "rohan";

// console.log("His name is " + his_name + " his friend's name is " + friend)

// template literal syntax

// console.log(`his name is ${his_name} and his friend's name is ${friend}`);

// console.log("hello \"vikas\" how are you")

// console.log(`hello "manoj" how are you doing`)

// let myname = "ShivMohanShiv"
// console.log(myname.toUpperCase())

// // let Myname = "ManMohan"
// console.log(myname.toLowerCase())

// console.log(myname.slice(1,4))
// console.log(myname.slice(4))

// console.log(myname.replace("Shiv","Man")) // it replace first occurrence of the Shiv in string

// console.log(myname.concat(a, "Ash"))

// let x = " Mahi Bhai"
// console.log(x)
// console.log(x.trim())

// // strings are immutable these functions created a new string but the existing string cannot be changed

// console.log(myname)
// console.log(myname.charAt(1))

// console.log(myname.indexOf("iv"))

// console.log(myname.startsWith("sh"))
// console.log(myname.endsWith("iv"))

let str = `Let's Go "Vikas" on a ride `;

console.log(str.split(" ")); // split separates string using separator the separator can be (,) (|) () here the separator is spaces

let otherstr = "Let's Go \"Vikas\" on a ride, Vikas:- Ok Mandeep!";

console.log(otherstr.replace("Vikas","Arun")); // replaces first occurence of Vikas with Arun

console.log(otherstr.replaceAll("Vikas","Arun")); // replaces all occurences of Vikas with Arun
console.log("\n");
console.log(str.repeat(4));

let exstr1 = "     Hello Viraj     ";
let exstr2 = exstr1.trim();

console.log(exstr1.length)
console.log(exstr2.length) // trim method is used to remove white spaces from the string

console.log((exstr1.trimStart()).length);
// trimStart trims only starting part and trimEnd trims only ending part of the string

console.log((exstr1.trimEnd()).length);

console.log("\n");

let newstr = "Vim";

let padstr = newstr.padEnd(6,"bar");
// same padStart
console.log(padstr);

let stra = "Apple Banana Cherry";

let part = stra.substring(6,12); // 6 se 12 ke bich me
// substring is same as slice but in here we tak starting and ending values less than 0 are treated as 0 in substring.
console.log(part);

let Exsubstr = stra.substr(6,12); // 6 ke baad aur 12 me jitne he vo

console.log(Exsubstr);

let meg = "shark";

console.log(meg.at(2)); // at() is a newer addition to JavaScript compared to charAt() . According to MDN, both charAt() and at() are valid, but at() is more "succinct and readable". The ability to use negative indexes makes your code more concise since you can do things like myString.at(-2) instead of myString.

console.log(meg[1]); // property access method with square and index