console.log("hello variables")

var a = 5;
var b = 6;
var c = "Harry";
var _a = "shubman";
// var 55a = "baman"; is a invalid variable name cannot start with numbers
// variable names are case sensitive in javascript

console.log(a+b+8);

console.log(typeof a, typeof b, typeof c);

// var is globally scoped
// let or const is block scope

{
    // var a = 66; var is globally scoped so it will outside the braces also changing the var a = 66 everywhere in the code

    let a = 66;
    // let is block scoped so it will only work within the block (braces)
    console.log(a);

}
console.log(a);

let z = "Vikas singh";
const y = true;
let w = undefined;
let v = null;
let f = 124.788;

console.log(z,y,w,v,f);

console.log(typeof z,typeof y,typeof w,typeof v, typeof f);

let o = {
    name: "Vikas",
    "job code": 5600,
    "is_handsome": true
};

console.log(o);
o.salary = "100crores";
console.log(o);

