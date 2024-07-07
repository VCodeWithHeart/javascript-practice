console.log("Learning Array")

let arr = [1,2,4,5,7]

// console.log(arr, typeof(arr));

// console.log(arr.length)

// arrays are mutable you can change them

// arr[0] = 5666;
// console.log(arr[0])

// console.log(arr)

// convert array into a string using toString method
console.log(arr.toString());

console.log(arr.join(" and "));

// removing the last element of the array
a = [1,2,3,4,5,6];
console.log(a.pop()); // returns the popped element
console.log(a);

// Most imp push method used to insert element in the end of an array

a.push(100);
console.log(a);

a.push("vikram");

console.log(a.shift());
console.log(a);
console.log(a.unshift("mark"));
console.log(a);

// shift jo hai vo pop ka bhai hota hai
// unshift jo hai vo push ka bhai hota hai;

// delete operator deletes an array element
delete a[6];
console.log(a);

// concat method used to join given arrays
let a1 = [1,2,3,4,5];
let a2 = [5,4,3,2,1];
let a3 = [9,8,7,6,5];
// this method doesn't change the existing values of a1 that's why i printed b1 by assigning this concat method to it.
let b1 = a1.concat(a2,a3);
console.log(b1);

// sorts an array
let unproper = [9,8,2,7,5,1];
console.log(unproper.sort());

// splices two elements of this array from index 2
let numbers = [1,2,3,4,5];
console.log(numbers)
console.log(numbers.splice(2,2));

// splices two elements of this array from index 2 and adds 2 and 23 at their place

console.log(numbers.splice(1,1,2,23));
console.log(numbers);

// slice() method slices out a piece from an array an creates a new array






