// METHODS
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//              └── 11-Objects
//                 07-methods.js <----You will be working in this file.
// You can create your own methods as properties of an object. Simply name the method, then provide its function. These methods are called in the same way that other properties are called.
// Making a method
// One of the previous models had a bonus challenge for taking a word and capitalizing the first letter, then printing the result to the console. Let's make that a method of an object.
// let obj = {
//     //the given input becomes name
//     capitalize: function(name) {
//         let newName = ""; //newName is a blank string where the letters from name will be entered
//         for (let i = 0; i < name.length; i++) {
//             if (i == 0) {
//                 newName += name[0].toUpperCase(); //the first letter of name is capitalized, then added to the string newName
//             } else {
//                 newName += name[i].toLowerCase(); //each subsequent letter is made lowercase, then added the string newName
//             }
//         }
//         console.log(newName);
//     } 
// }
// We call the method by obj.capitalize('aaron'), with the result being 'aaron'.
// Practice
// Create an object with a method that would multiply an input by 2, then print the result to the console.
// Add another method to the object performs some function. Use comments to explain what the method does and show an example.
// Bonus challenge
// Make an object with a method that creates an array of numbers from 1 to a given input, then print the numbers to the console in both ascending and descending order.