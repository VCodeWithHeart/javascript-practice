// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('async task is completed');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function() {
//     console.log('Promise Consumed');

// })

// // new Promise(function (resolve, reject) {
// //     setTimeout(function() {
// //         console.log('Async task 2');
// //         resolve()  
// //     },1000)
// // }).then(function() {
// //     console.log('Async 2 resolved');

// // })

// // const Promisethree = new Promise(function(resolve,reject){
// //     setTimeout(function(){
// //         resolve({username: "Chai", email: "chai@example.com"})
// //     }, 1000);
// // })

// // Promisethree.then(function(user){
// // console.log(user);

// // })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "hitesh", password: "123" })
//         }
//         else {
//             reject("ERROR: Something went wrong")
//         }

//     })
// })

// promiseFour
// .then((user) => {
//     console.log(user);
//     return user.username;
// })
// .then((username) => {
//     console.log(username);
// })
// .catch(function (error) {
//     console.log(error);

// }).finally(() => 
//     console.log('Promise is either resolved or rejected')
//     )

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "Javascript", password: "123" })
//         }
//         else {
//             reject("ERROR: JS went wrong")
//         }

//     })
// })

// // async await syntax

// async function consumePromiseFive(){
//   try{
//     const response = await promiseFive
//   console.log(response);
// }
// catch(error){
//     console.log(error);

// }

// }

// consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E: ', error);

//     }

// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => { 
//         return response.json() 
//     })
//     .then((data) => {
//         console.log(data);
        
//     })
//     .catch((error) => console.log(error))








