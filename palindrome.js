let num = 101;
let store = num;
let digit;
let rev = 0;

while (num != 0) {

    digit = num % 10; // 101%10 = 1 |  10%10 = 0 | 1%10 = 1
    rev = (rev * 10) + digit; // 0*10 + 1 = 1 | 1*10 + 0 = 10 | 10*10 + 1 = 101
    num = Math.floor(num / 10); // 101/10 = 10 | 10/10 = 1 | 1/10 = 0

}

console.log(rev);

if (store == rev) {
    console.log("Palindrome");
}
 else {
    console.log("Palindrome not");
}



// ARMSTRONG NUMBER CODE

// let num = 407;
// let store = num;
// let digit;
// let arm = 0;

// while (num != 0) {

//     digit = num % 10;
//     arm += digit**3; // main line
//     num = Math.floor(num / 10);

// }

// console.log(arm);

// if (store == arm) {
//     console.log("Armstrong");
// }
//  else {
//     console.log("Armstrong not");
// }
