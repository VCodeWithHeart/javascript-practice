// Map Filter Reduce In Js

// let arr = [45, 23, 21]

// let a = arr.map((value, index, array) => {
//     console.log(value, index, array);
//     return value + 1
// })

// console.log(a);

// map hum tab use karte hain jab hume ek naya array banana hota hai aur foreach hum tab use karte hai jab hume kuch operation perform karna hota hai tab

// ye sabhi functions humare original array ko modify nahi karte hai

// FILTER METHOD IN JS

// let arr2 = [45,0,2,3,5]

// let a2 = arr2.filter((value)=>{
//     return value<10
// })

// console.log(a2);

// REDUCE IN JS

let arr3 = [1, 2, 3, 4, 5, 6, 8]
let newarr3 = arr3.reduce((h1, h2) => {
    // h1 pehli value
    // h2 doosri value
    return h1 + h2
})

// console.log(newarr3);

// ONE MORE WAY TO WRITE REDUCE IS

// let arr3 = [1,2,3,4,5,6,8]
// const reduce_func = (h1,h2)=>{
//     return h1 + h2
// }

// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3);


// MORE PRACTICE ON MAPS

// const numbers = [1, 2, 3, 4, 5]
// const squares = numbers.map(square)
// const cubes = numbers.map(cube)

// console.log(squares);
// console.log(cubes);


// function square(element) {
//     return Math.pow(element, 2)
// }


// function cube(element) {
//     return Math.pow(element, 3)
// }

// const students = ["spongebob", "Patrick", "Squidward", "sandy"]
// const studentsUpper = students.map(upperCase)

// function upperCase(ele) {
//     return ele.toUpperCase();
// }

// console.log(studentsUpper);

// function lowerCase(element){
//     return element.toLowerCase()
// }

// const studentsLower = students.map(lowerCase)

// console.log(studentsLower);

// const dates = ["2024-1-10", "2023-4-19", "2024-2-28", "2026-02-24"]
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);
// function formatDates(element) {
//     const parts = element.split("-")
//     // console.log(parts);

//     return `${parts[1]}/${parts[2]}/${parts[0]}`
// }









const myarray = [20, 30, 40, 50]
const newArr = myarray.reduce(addition)
console.log(newArr);


function addition(ele1, ele2) {
    return ele1 + ele2
}

console.log(myarray.filter((ele)=> ele>30)) // filter

// const mapIsOG = myarray.map((element, index)=>{
//     return element * index
// })

// console.log(mapIsOG);
