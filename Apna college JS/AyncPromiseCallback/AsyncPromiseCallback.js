// async await >> Promises >> Callback HEll

// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 2000);

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");

// }, 4000);

// console.log("three");
// console.log("four");


// CALL BACK
// callback ko bina parenthesis ke pass karte hai sirf uska naam use karke

// function sum(a,b){
//     console.log(a+b);

// }

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b)
// }

// calculator(5,4, sum)

// Asynchronous call back

// const hello = () => {
//     console.log("hello");

// }

// setTimeout(hello,2000);

// CALLBACK HELL

function getData(dataId) {
    // function taking time to return data

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success")
            // if (getNextData) {
            //     getNextData();
            // }
            // getNextData()
        }, 2000)
    })
}


// Callback Hell
    
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
//         })
//     })
// })

// Doing the same thing by using PROMISES CHAIN

// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//      console.log(res)
//     })
//  })

// getData(1)
// .then(() => {
//     return getData(2);
// })
// .then(() => {
//     return getData(3)
// })

// Doing the same thing using Async Await

async function getAllData() {
    console.log("getting data1");
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
}

// IIFE :- Immediately Invoked Function

(async function() {
    console.log("getting data1");
    await getData(1);
    console.log("getting data2");
    await getData(2);
    console.log("getting data3");
    await getData(3);
    console.log("getting data4");
    await getData(4);
})();



// getData(1)

//data1 //2s
//data2 //2s
//data3 //2s

// PROMISES

// Promise ke 3 states hote hain
// pending
// resolved
// rejected

// promise 2 handlers leta hai resolve and reject

// in promise resolve and reject are callbacks that are created by JS itself

// let promise = new Promise((resolve,reject) => {
//     console.log("i am a promise");
//     // resolve("Success")
//     reject("Some Error Occurred")

// })

// function getData(dataId, getNextData) {
//     // function taking time to return data

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data", dataId);
//             // resolve("SUCCESS")
//             // reject("ERROR")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     })
// }

// PROMISE GOOD EXAMPLE WITH THEN AND CATCH

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         // resolve("success")
//         reject("network error")
//     })

// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("Promise Fullfilled", res);

// })

// promise.catch((err) => {
//     console.log("Promise Reject", err);

// })


// Promise Chaining

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success")
        }, 4000)
    });
}

// ye upar ka kaam API kar rahi hoti hai hum bas uske upar .then lagake data lelete hai

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2");
            resolve("Success")
        }, 4000)
    });
}

// ye upar ka kaam API kar rahi hoti hai hum bas uske upar .then lagake data lelete hai

// let p1 = asyncFunc()
// console.log("fecthing data 1...");
// p1.then((res)=>{
//     console.log(res);

// })

// let p2 = asyncFunc2()
// console.log("fecthing data 2...");
// p2.then((res)=>{
//     console.log(res);

// })

// aisa syntax likhne se dono data saath me mil rahe the kyuki dono promise saath me parallely (background) me run ho rahe the

// lekin agar hum chahte hain ki humara ek kaam hone ke baad hi dooosra kaam ho uske liye hum promise chaining ka concept use kar sakte hai ek .then ke piche doosra .then lagake

// let p1 = asyncFunc()
// console.log("fecthing data 1...");
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching Data 2...");
//     let p2 = asyncFunc2()
//     p2.then((res) => {
//         console.log(res);

//     })
// })

// let's msake this syntax more simpler

// console.log("fetching data 1...");

// asyncFunc().then((res) => {
//     console.log(res);
//     console.log("fetching data 2...");
//     asyncFunc2().then((res) => {
//         console.log(res);

//     })
// })

async function hello() {
    console.log("hello")
}

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve("Success Status: ", 200)
        }, 2000);

    })
}

async function getWeatherData() {
    await api(); // 1st call
    await api(); // 2nd call
}

