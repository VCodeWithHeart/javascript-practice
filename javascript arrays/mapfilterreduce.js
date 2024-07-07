// MOST IMP CONCEPTS Map(), Filter(), Reduce()

let arr = [1, 3, 5, 7, 13];

// let newarr = [];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
//     console.log(newarr[index]);
// }

// easy why of doing it
let newArr = arr.map((e, index, array) => {
    return e ** 2;
})
console.log(newArr);

// filtering values from an array
const greaterThanSeven = (e) => {
    if (e > 7) {
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven));

// reduce method reduces an array to a single value

let arr2 = [1,2,3,4,5,6]

const red = (a,b) => {
    return a+b;
}

console.log(arr2.reduce(red));

console.log(Array.from("Harry"));

