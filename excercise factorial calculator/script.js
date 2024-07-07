// factorial of a number using for loop

// let fact = 1;
// for (let index = 1; index <= 6; index++) {
//     fact *= index;
// }
// console.log(fact);


// codewithharray solution using reduce
let a = 6;
let c;

function factorial(number) {
    let arr = Array.from(Array(number + 1).keys());
    console.log(arr.slice(1,));
    c = arr.slice(1,).reduce((a, b) => {
        return a * b;
    })
}

factorial(5);

console.log(c);