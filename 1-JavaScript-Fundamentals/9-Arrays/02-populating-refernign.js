// POPULATING AND REFERRING
// This module will teach you how to add values to an array and refer to those values within functions. There will be other methods available later than the ones discussed here.
// Populating an array
// Previously, you've seen how to add values to an array when it is created. There are a few methods available to add or remove additional elements to the array later:
// Method	Purpose
// pop()	Removes the last element from the array. Other values are not affected
// push()	Adds the given value to the end of the array. Other values are not affected
// shift()	Removes the first element from the array. Other values have their index decreased by 1
// unshift()	Adds the given value to the beginning of the array. Other values have their index increased by 1
// Here are a couple of examples:
// let newArray = ["green", "blue", "yellow"];
// newArray.push("purple"); //['green', 'blue', 'yellow', 'purple']
// newArray.pop("purple"); //['green', 'blue', 'yellow']

// newArray.unshift("red"); //['red', 'green', 'blue', yellow']
// newArray.shift("red"); //['green', 'blue', 'yellow']
// Referring to elements in an array
// When referring to items in an array, the index of the item is used to pull out the value inside of it. To use the previous example, newArray[0] would return "green". You can replace the value of an element by manually declaring a new value:
// newArray[1] = "white"; //['green', 'white', 'yellow']
// There are methods available to target specific indexes of arrays to insert, remove, or modify the contents. We'll expand futher on those in a later module.
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
//                 02-populating-referring.js <----You will be working in this file.
// Practice
// Create 4 arrays of 4 elements each. Print to the console the first element of the first array, the second element of the second array, the third element of the third array, and the fourth element of the fourth array.
// Create a blank array. Use the methods above to add and remove items from the array. Print the contents of the array after each action.