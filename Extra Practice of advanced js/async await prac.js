// async function harray() {
//     console.log(true + 1);
// const response = await fetch('https://api.github.com/users')
// console.log("before response");
// const users = await response.json()
// console.log("users resolved");
// return users

// return "harray"
// }

// console.log("before calling harray");
// let a = harray()
// console.log("after calling harray");
// console.log(a);
// a.then(data => console.log(data))
// console.log("last line of this js file");

// hum kisi function ko async bana sakte hai aur uske baad uske andar promises ko await kar sakte hai

// async function harry() {

//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("Delhi Weather on the screen")
//             resolve("Delhi: 27 Deg")
//         }, 5000);
//     })

//     let bangloreWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("Banglore Weather on the screen")
//             resolve("Banglore: 21 Deg")
//         }, 2000);
//     })
//     // delhiWeather.then(alert)
//     // bangloreWeather.then(alert)

//     console.log("fetching delhi weather please wait..");   
//     let delhiW = await delhiWeather
//     console.log("fetched delhi weather is " + delhiW);

//     console.log("fetching banglore weather please wait..");
//     let bangloreW = await bangloreWeather
//     console.log("fetched banglore weather is " + bangloreW);
//     return(delhiW,bangloreW)
// }

// console.log("welcome to weather control room");

// let a = harry()

// a.then((value)=>{
//     console.log(value)
// })

// writing async functions for my understanding only here

// async function dailyLife(){

// let task1 = await    setTimeout(() => {
//         console.log("eat");

//     }, 5000);

// let task2 = setTimeout(() => {
//         console.log("sleep");

//     }, 7000);

// let task3 = setTimeout(() => {
//         console.log("wake");

//     }, 2000);

//     return task1,task2,task3

// }

// dailyLife()


// async function dailyLife() {

//     let partOfLife = new Promise((resolve, reject) => {
//         console.log("Promise PENDING!!!");
//         setTimeout(() => {    
//         resolve("Promise RESOLVED")
//         },3000);
//     })
    
//     return partOfLife
// }

// dailyLife().then((value)=>{
//     console.log(value);
// })