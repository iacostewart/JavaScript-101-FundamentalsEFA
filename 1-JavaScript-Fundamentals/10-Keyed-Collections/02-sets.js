// SETS
// Sets were also introduced in ES6, and a similar to arrays. Both use numbers as keys, both are collections of values, and you can convert an array to set and vice-versa. There are a few differences, however, than can make it easier to use one over the other.
// Differences between sets and arrays
// An array can hold an infinite number of values with no limitations on a value. A set, however, will only allow a value to appear once, making duplicate values impossible. This can be both advantageous and detrimental to a program depends on the circumstances. Trying to search through an array for a specific value can be quite slow and can cause issues when looking at the same value in different keys. Searching through a set is faster, and will prevent the program from unexpectedly returning the wrong key. However, repeating data points and values appear in many different data sources. Using a set with names of students in a classroom or for keeping statistics would be nearly impossible, as those duplicate data values would be thrown away.
// In addition, sets can be searched through and modified using the value, as opposed to using the index for an array. This prevents having to search for the key in advance.
// Converting between a set and an array
// An existing array can be converted to a set using the Set constructor method. However, any duplicate values will be discarded:
// let x = [0, 1, 2, 2, 3, 3];
// let setX = new Set(x); //0, 1, 2, 3
// Going from a set to an array can be done with the Array.from() method or by using a spread operator:
// let y = [];
// y.from(setX);
// //OR
// [...setX]
// //Both will return the array [0, 1, 2, 3]
// For additional information, and to see the various properties and methods associated with sets, please see the Mozilla docs here
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
//             └── 10-Keyed-Collections
//                 01-maps.js 
//                 02-sets.js <----You will be working in this file.
// Practice
// Create an array with 4 values, a set with the same values, and print both to the console.
// Create another array with duplicate values, convert it to a set, then convert it back to an array. Print the result of each action.
// Think about the relationship between an array and a set. Are there other advantages or disadvantages for each? Why might you use one rather than the other?