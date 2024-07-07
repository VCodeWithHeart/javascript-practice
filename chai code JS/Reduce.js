const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval ${currval}`);
//     return acc + currval;
// }, 0) // reduce using function

// reduce using arrow function

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

const shoppingCart = [

{
    itemName: "Js Course",
    price: 2999
},
{
    itemName: "App Development",
    price: 5999
},
{
    itemName: "Python Course",
    price: 999
},
{
    itemName: "Data Science Course",
    price: 12999
}

]

const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(priceToPay);