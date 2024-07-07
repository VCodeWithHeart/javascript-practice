// var ary = [1,11,4,9,16];
var ary = [
    {fname: "yahoo", lname:"baba"},
    {fname: "monu", lname:"ashwini"},
    {fname: "yash", lname:"singh"},
];

var b = ary.map(test)
console.log(b);

function test(x) {
    return x.fname + " " + x.lname;
}