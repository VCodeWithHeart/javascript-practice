// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => {
//     return num + 10
// })

// console.log(newNums);


// CHAINING

// const newNums = myNums
//     .map((num) => num * 10)
//     .map((num) => num + 1)
//     .filter( (num) => num>= 40)

//     console.log(newNums);

// REDUCE

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "interview course",
        price: 499
    },

    {
        itemName: "py course",
        price: 1499
    },

    {
        itemName: "mobile course",
        price: 999
    }
]

const Ptopay = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(Ptopay);