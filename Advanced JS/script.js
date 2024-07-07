// IIFE

async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

(async function main() {
    // var a1
    console.log(a1);
    
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // let [x,y,...rest] = [1,5, 7,8,9,10]
    // console.log(x,y,rest);

    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj
    // object destructuring = jab hume kabhi kisi bade object me se sirf 2-3 values saath me chahiye hoti hai tab hum object un values ko ek object me nikal sakte hain
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0], arr[1], arr[2]));
    console.log(sum(...arr));
    
var a1 = 5
})()

// Spread Syntax
function sum(a, b, c) {
    return a + b + c
}

 // hoisitng

