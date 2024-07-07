// Dates

let myDate = new Date()

// console.log(myDate.toString());

// console.log(String(myDate)); // ignore just for understanding
// console.log(typeof(String(myDate))); same as above

// console.log(myDate.toDateString());

// console.log(myDate.toJSON());

// console.log(myDate.toISOString());

// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,4,22)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate = new Date(2024, 4, 22, 5, 3, 12)

let myCreatedDate = new Date("05-22-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // Date.now() gives a milli seconds value from date 1st jan 1970

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())

// console.log(Math.floor(Date.now()/1000)); converting it into seconds

let newDate = new Date()

// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getHours());
//console.log("new date ke month", newDate.getMonth() + 1); // month 0 se count karta hai isiliye yaahan par + 1 ka use kiya hai read karne me easy hojayega

// `${newDate.getDate()} and the time is ${newDate.getHours()}`

let printfulldayname = newDate.toLocaleString('default', {
    weekday: "long"
    // timeZone: ''
})

console.log(printfulldayname);