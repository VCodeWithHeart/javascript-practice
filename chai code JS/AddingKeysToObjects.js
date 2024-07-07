// const obj = const obj = {
//     name: "vivank",
//     add : "apartment"
// }
// let phone = 12354
// obj = phone

// console.log(obj);

// above code will give you errors


// correct way to add or assign keys in objects

const obj = {
    name: "vivank",
    add : "apartment"
}

obj.phone = 12589745

obj["salary"] = 120000

Object.assign(obj, {profession: "Software engineer"})

console.log(obj);

// Excercise

// program to create a word-meaning dictionary of 5 words


// const dict = {
//     khush: "Happy",
//      chinta: "tension",
//      dukhi: "sad",
//      tej: "fast",
//      dhima: "slow"
     
// }

// console.log(dict);
