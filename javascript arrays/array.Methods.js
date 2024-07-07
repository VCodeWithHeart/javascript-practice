let myArr = [2,4,6,8,10,8,6,4,2];
// length
// console.log(myArr.length);

// // indexing
// console.log(myArr.at(-2)); // this will work for negative indexing

//console.log(myArr[-1]); // this will not work for negative indexing

// let str = myArr.toString(); // converts an array into string

// console.log(str);
// console.log(typeof str);

// console.log(myArr.pop()); // removes the last element from an array and returns the new array

// console.log(myArr);

// console.log(myArr.push(99)); // pushes new element to the last of an array and returns the new array

// console.log(myArr);

let myid = [1,5,10,15];


// console.log(myid.join("-")); // uses a separator to separate an array items

let friendid = [20,25,30,35];

// console.log(myid.concat(friendid));

// console.log(friendid.includes(30)); returns boolean after checking the values are present in the given array or not

// console.log(friendid);

// console.log(friendid.delete); // Using delete() leaves undefined holes in the array. | Use pop() or shift() instead.

let management = ["Manager", "assistant manager", "CBO", "CEO", "CMO"];

// console.log(management.shift());
// console.log(management.pop());

// shift() and pop() both are very similar the diff is the shift removes the first element while the pop removes the last element from an array

// console.log(management.unshift("Company Ka Malik"));
// console.log(management.push("CO Founder"));

// console.log(management);

// unshift() and push() both are very similar the diff is the unshift adds the element from the first while the push adds the element from the lastfrom an array

// The copyWithin() method overwrites the existing values.

// The copyWithin() method does not add items to the array.

// The copyWithin() method does not change the length of the array.



// let my_Arr = [[1,2],[3,4],[5,6]];

// let newArr = my_Arr.flat();

// console.log(newArr);

let compare = (a,b) => {
    return b - a; // descending order
   // return a - b; // ascending order

}

// let hashcodes = [2,44,65,"Z","A",5,"B",0];

// console.log(hashcodes.sort()); // sort karta hai alphabetically 1 se start hone waale saare number phir 2 se phir 3 se id dosen't matter phir vo 1 se start hone wala no 100 aur 2 se start hone wala number 22 hi kyu na ho | RUN THIS CODE TO SEE THE RESULT

// how to sort in ascending order ?
// we have use an optional compare function with sort

// let nums = [75,84,87,98,148,2,1,0,35,45,55,17];

// nums.sort(compare);
// // sort method changes an existing array
// console.log(nums);

// let num = [75,84,87,98,148,2,1,0,35,45,55,17];

// num.reverse()
// // reverse method changes an existing array
// console.log(num);

// Splice and slice

// let nextExArr = [22,23,57,89,97,14,56,2];

// let deletedVal = nextExArr.splice(2,3,1001,1002,1003,1004); // returns deleted values
// // Start, deletedvalues, insertvalues

// console.log(nextExArr);
// console.log(typeof deletedVal);


// let Exnums = [55,65,165,360,141,142,148,55,55];

// let newExnums = Exnums.slice(2,6);

// console.log(newExnums);

// does not change the existing array creates an new array

console.log(Array.isArray("Hitesh"));

let convArr = Array.from("Hitesh");
console.log(typeof convArr);