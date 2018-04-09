// ARRAY METHODS
// As mentioned earlier, some of the methods used for strings also work with arrays. Here are some of them:
// Method	Function
// concat()	Puts multiple arrays together and returns a single array
// includes()	Returns true if the given value is found in the array. Otherwise, returns false
// indexOf()	Returns the first index location of the given character in the array if present. Returns -1 if not found.
// lastIndexOf()	Returns the last index location of the given character in the array if present. Returns -1 if not found.
// Here are some others that are commonly used:
// map()
// Map takes an array, applies a callback function to each element, and returns the result as a new array.
// var numbers = [0,1,2,3,4,5,6,7,8,9];
// let numbersTwo = numbers.map(x => x * 3) //takes each of the elements of the array and multuplies them by 3
// console.log(numbersTwo); //[0, 3, 6, 9, 12, 15, 18, 21, 24, 27]
// slice()
// Slice makes a copy of a part of the array

// var numbers = [0,1,2,3,4,5,6,7,8,9];
// console.log(numbers);

// //First number is start.
// //Second number is end. It will not print the end.
// var numbersTwo = numbers.slice(0,3);
// console.log(numbersTwo);

// //We made a shallow copy, so the 
// //original array is still in tact.
// console.log(numbers);

// var numbersThree = numbers.slice(4,9);
// console.log(numbersThree);
// splice()
// Splice allows elements to be added or removed from an array
// let newArray = ['a', 'b', 'c', 'd', 'e']
// console.log(newArray); //[a, b, c, d, e]

// newArray.splice(0, 2, 'abc'); //first number is the start index, second number is the number of elements to remove (optional), 3rd parameter is the value to place at the start index
// console.log(newArray); //['abc', 'c', 'd', 'e']

// newArray.splice(3, 1)//removes 1 element at index 3; in this case 'e'
// console.log(newArray); ////['abc', 'c', 'd']

// newArray.splice(1, 'xyz'); //adds the string 'xyz' at index 1
// console.log(newArray); //['abc', 'xyz', 'c', 'd']
// For additional information, and more built-in methods and functions, see the Mozilla docs here
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 1-Grammar-and-Types
//             └── 2-ControlFlow-and-ErrorHandling
//             └── 3-Loops
//             └── 4-Functions
//             └── 5-Expressions-and-Operators
//             └── 6-Numbers-and-Dates
//             └── 7-StringMethods
//             └── 9-Arrays
//                 01-array-review.js
//                 02-populating-referring.js
//                 03-length.js 
//                 04-iterating.js 
//                 05-methods.js <----You will be working in this file.
// Practice
// Play around with some of the methods above. Come up with a challenge and post it in the slack channel. See how many of your classmate's challenges you can solve.