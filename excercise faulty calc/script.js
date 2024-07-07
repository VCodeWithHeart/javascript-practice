// faulty calculator

let a = prompt("Enter any number for a: ");
let c = prompt("Choose any operator from +,-,*,/,**");
let b = prompt("Enter any number for b: ");

let random = Math.random();
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

console.log(random);

if(random > 0.1){
    // perform correct calculation
    alert(`the result is ${(eval(`${a} ${c} ${b}`))}`);
}
else{
    // perform incorrect calculation
    c = obj[c];
    alert(`the result is ${(eval(`${a} ${c} ${b}`))}`);
}


// my solution of faulty calculator

// let a = Number(prompt("Enter any number for a: "));
// let c = prompt("Choose any operator from +,-,*,/,**");
// let b = Number(prompt("Enter any number for b: "));

// let z = Math.random()

// console.log(z);

// if (z < 0.1) {


//     switch (c) {

//         case "+":

//             console.log(a - b)

//             break;

//         case "-":

//             console.log(a / b)

//             break;

//         case "*":

//             console.log((a + b))

//             break;

//         case "/":

//             console.log(a ** b)

//             break;

//         default:
//             break;
//     }

// }
// else {

//     switch (c) {

//         case "+":

//             console.log(a + b)

//             break;

//         case "-":

//             console.log(a - b)

//             break;

//         case "*":

//             console.log(a * b)

//             break;

//         case "/":

//             console.log(a / b)

//             break;

//         case "**":

//             console.log(a ** b)

//             break;

//         default:
//             break;
//     }

// }
