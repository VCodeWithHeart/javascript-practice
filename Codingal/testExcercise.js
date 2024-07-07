// WAP tp reverse a string and state if it is Palindrome
// Send it to on email : ishat.preet@codingal.com

let entered = "madaM";
entered = entered.toLowerCase();
let store = entered;
let rev = "";

for (let i=entered.length-1; i>= 0; i--) {
    rev += entered[i];
}

console.log(rev);

if (rev == entered) {
    console.log("it's palindrome");
}
else{
    console.log("it's not palindrome");
}