// ITERATING
// Iteration is the act of repeating an action. With arrays, you'll usually be iterating to print some or all elements, or searching for a particular value or values. There are several different loops that can be used to accomplish this task. For the purposes of these examples, we will use the following array:
// let newArray = ['a', 'b', 'c', 'd', 'e'];
// for Loop
// for (let i = 0; i < newArray.length; i++) //i increases after each iteration; forces the loop to break once i reaches the value of newArray.length
// {
//     console.log(newArray[i]); //prints the value of the element at index i each iteration
// }
// while Loop
// while (let i < newArray.length)
// {
//     console.log(newArray[i]);
//     i++; //i increases after printing each time
// }
// forEach method
// //standard syntax
// newArray.forEach(function(index) {
//     console.log(index);
// });

// //arrow function
// newArray.forEach(index => console.log(index));
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
//                 04-iterating.js <----You will be working in this file.
// Practice
// Create a new array with 5 elements. Use each of the above to print each element to the console.
// Create a new blank array. Use one of the types of loops to iterate over the first array and push each value into the second array.
// Try to iterate over the first array with a do/while loop. Print each element to the console.