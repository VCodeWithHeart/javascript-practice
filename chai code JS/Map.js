const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)

// const newNums = myNums.map( (num) => { return num + 10 }) scope open karoge to return likhna hota hai

// const newNums = myNums.forEach( (num) => // using forEach loop
//     console.log(num + 10);
//    return num + 10;
// });


// CHAINING METHOD

const newNumers = myNums
    .map( (num) => num * 10)
    .map( (num) => num + 1)
    .filter( (num) => num >= 40) // true ir false works on condtitons

console.log(newNumers);

// tempLiList.forEach(ele => {
//     console.log(ele)
// });