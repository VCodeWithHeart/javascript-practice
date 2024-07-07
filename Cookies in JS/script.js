// console.log(document.cookie);
document.cookie = "name=vikas";
console.log(document.cookie);
// name or name2 2 alag alag cookie rahegi cookies humesa add hoti hai lekin jab 2 ya usse jyada cookies ke keys same ho to vo override hojati hai
document.cookie = "name2=vikas11332244";
document.cookie = "name=lucifer";
// ye lucifer wale example me naem key same hai aur mera name = vikas wala cookie override hoke lucifer hojayega
console.log(document.cookie);

// encodeURIComponent

// cookies me agar hum khud key ya values set karte time agar hum semicolon ; ka use karte hain to vo uske aage ki values ko nahi leta hai aur isiliye hum endodeURIComponent ka use karte hain iska use karne se vo koi bhi values ko as a string leleta hai 

// decodeURIComponent

// SYNTAX :- decodeURIComponent("")

//aur usko encode kardeta hai aur phir usko decode akrne ke liye hume decodeURIComponent ka use karna padta hai

let key = prompt("Enter your key")
let value = prompt("Enter your value")

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie);
