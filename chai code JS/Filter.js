// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4; // explicit return
//     
// using {} inside arrow function we have started a scope so we have to return it now using return

// })

// const newNums = myNums.filter( (num) => num > 4)

// console.log(newNums);

// ------ Doing the same thing using forEach (without filter) -------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = []

// myNums.forEach( (num) => {
//     if (num>4) {
//         newNums.push(num)
//     }
// } )

// console.log("new nums are", newNums);

// ------- PRACTICE EXCERCISE ------

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Science', publish: 1987, edition: 2014 },
    { title: 'Book Three', genre: 'Non-Fiction', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Fiction', publish: 1992, edition: 2009 },
    { title: 'Book Five', genre: 'History', publish: 1998, edition: 2008 },
    { title: 'Book Six', genre: 'Non-Fiction', publish: 1991, edition: 2015 },
    { title: 'Book Seven', genre: 'Science', publish: 1995, edition: 2013 },
    { title: 'Book Eight', genre: 'History', publish: 1997, edition: 2019 }
]

// const userBooks = books.filter( (bk) => bk.genre === 'History')

// const userBooks = books.filter( (bk) => bk.publish > 1995) // aise bhi kar sakte hain (mujhe ye aasaan laga)

const userBooks = books.filter( (bk) => {return bk.publish > 1995})

console.log(userBooks);