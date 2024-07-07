// let a = Number(prompt("Enter first Number"))
// let b = Number(prompt("Enter second Number"))

let a = prompt("Enter First Number")
let b = prompt("Enter Second Number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not Allowed")
}
let sum = parseInt(a) + parseInt(b)

// We can also throw error our custom error
// or we can also handle errors using try catch

function main() {
    try {
        console.log("The sum is ", sum * x);
        return true
    } catch (error) {
        // console.log("Error aa gaya Bhai");
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);

        return false

    } finally {
        console.log("files are being closed");

    }
    // finally jo hota hai vo functions ke andar return keyword ke baad bhi chal jata hai
}

// let body = document.querySelector("body")

// let d = document.body.addEventListener('keypress', function(e){
//     console.log(e)
//     console.log("Body is clicked")
// })