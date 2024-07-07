function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 540))

const user = {
    username: "hitesh",
    prices: 139
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "Sam",
    price: 1548
})

const myNewArray = [200,400,100,600]

function returnSecVal(getArr) {
    return getArr[1]
}

// console.log(returnSecVal(myNewArray));
console.log(returnSecVal([200,400,100,600]));

