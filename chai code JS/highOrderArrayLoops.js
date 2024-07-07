// for of loop

// myArr = [1,5,9,7,6,1]

// for (const i of myArr) {
//     console.log(i);
// }

// const greetings = "Hello world!";

// for (const val of greetings) {
//     console.log(`Char is : ${val}`);
// }

// Maps


// const map = new Map()

// map.set('IND', "India")
// map.set('USA', "United States Of America")
// map.set('FR', "France")
// map.set('IND', "India")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ":", value);
// }

// Objects
const myObj = {
    Name: "henry",
    Surname: "cavil",
    "Mo No": +784356895
}

// console.log(myObj["Mo No"]);


// for (const [key, value] of myObj) {
//     console.log(key, ":", value);
// }

// for of loop object pe nahi lagega

const myObject = {
    languages: "Hindi",
    languages2: "English",
    languages3: "Hebrew",
    languages4: "Gujarati"
}

// console.log(myObject);

// for (const key in myObject) {

//     console.log(`${key} in ${myObject[key]}`);

// }

const programming = ["js", "python", "java", "cpp"]

// for (const lang in programming) {

//     console.log(programming[lang]);

// }

// const map = new Map()
// map.set('IND', "India")
// map.set('USA', "United States Of America")
// map.set('FR', "France")
// map.set('IND', "India")

// // map is no iterable

// for (const key in map) {
//     console.log(key);
// }

// Foreach

const coding = ["js", "java", "python", "swift", "ruby", "cpp"]

// coding.forEach(ele => {
//     console.log(ele);
// });

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( function (ele, index, arr) {
//     console.log(ele, index, arr);
// });


const mycoding = [

    {
        lang: "C#",
        langfile: "cs"
    },

    {
        lang: "python",
        langfile: "py"
    },

    {
        lang: "ruby",
        langfile: "rb"
    },

    {
        lang: "C++",
        langfile: "cpp"
    }

]

mycoding.forEach(function (item) {
    console.log(item.langfile);
})

