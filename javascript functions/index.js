// function name(naam) {
//     console.log("hey " + naam + " you are nice!")
//     console.log("hey " + naam + " you are looking good!")
//     console.log(naam + " your cricketing skills are way too awesome!")
//     console.log(naam + " need 8 runs in 5 balls")

// }

// name("Vikas")


// function sum(a,b) {
//     console.log("the sum of a and b is " + a / b);
//     console.log("the sum of a and b is " + a * b);
//     console.log("the sum of a and b is " + a - b);
//     console.log("the sum of a and b is " + a + b);
//     console.log("the sum of a and b is " + a % b);
// }

// sum(10,2)


function sum(a, b, c = 3) { // c is a default parameter
    // console.log(a + b);
    return a + b + c
}

result = sum(10, 2) // a and b is compulsory we must pass both a and b for the function to work 
result1 = sum(10, 2, 1) // c was optional so we can change it if we pass any value


console.log("the sum of a and b is", result);
console.log("the sum of a and b is", result1);

const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(64);
func1(74);