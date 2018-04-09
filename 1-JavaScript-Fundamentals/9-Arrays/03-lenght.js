// LENGTH
// The length of an array is the total number of elements within the array. A blank array has a length of 0. An array with an element at the 0 index has a length of 1. The length is always 1 higher than the last index number. Array.length is a built-in property of the array that returns the length.
// var listOfHotPeppersEatenByContestants = [3, 4, 2, 10, 3, 5];

// //Prints out the length of the array
// console.log(listOfHotPeppersEatenByContestants.length); //6


// listOfHotPeppersEatenByContestants[listOfHotPeppersEatenByContestants.length] = 12; //[3, 4, 2, 10, 3, 5, 12]
// //You can append the array like this:
// console.log(listOfHotPeppersEatenByContestants.length); //7


// //PUSH is easier though
// listOfHotPeppersEatenByContestants.push(21); //[3, 4, 2, 10, 3, 5, 12, 21]
// console.log("7 is now the last spot: " + listOfHotPeppersEatenByContestants[7]);

// console.log(listOfHotPeppersEatenByContestants.length); //8

// //Removing an element from the array
// listOfHotPeppersEatenByContestants.pop(); //[3, 4, 2, 10, 3, 5, 12]
// console.log(listOfHotPeppersEatenByContestants.length); //7
// Knowing the length of an array is critical for iterating over it for actions such as printing the contents, checking for blank indexes, and knowing when to stop looping through it. More on this will be covered in the next module.
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
//                 03-length.js <----You will be working in this file.
// Practice
// Create an array and populate it. Print the length to the console.
// Use the methods discussed in the previous module to add and remove items from the array. Print the length of the array to the console each time.
// BONUS CHALLENGE
// Try to loop over the array and print each element to the console. HINT: Try a for loop!