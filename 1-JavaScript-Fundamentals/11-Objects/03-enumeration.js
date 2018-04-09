// ENUMERATION
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 11-Objects
//                 01-properties.js
//                 02-enumeration.js <----You will be working in this file.
// What is Enumeration?
// What is enumeration for objects? There is an attribute on all properties in an array called "enumerable." Objects in javascript are by default enumerable, meaning that they show up in for...in loops. There are ways to make properties on an object non-enumerable, thereby preventing them from showing up when you use a for...in loop, making them partially hidden, which can occasionally be useful. The vast majority of properties will be enumerable, and unless you have a good reason to change this, it's recommended that you keep them that way. In the challenge below, there is information that will show you how to make things non-enumerable if you wish.
// Enumerating properties
// var country = {
//     capital : "Tegucigalpa",
//     name: "Honduras",
//     mainExport: "Bananas"
// };
// //Since everything is enumerable, our for in loop should be able to find everything.
// for (var property in country){
//     console.log(property + ' : ' + country[property]);
// }
// /*
// capital : Tegucigalpa
// name : Honduras
// mainExport : Bananas
// */
// Practice
// Create an object with properties. Use a for...in loop on it.
// Challenge
// Research the methods Object.keys() and Object.getOwnPropertyNames() on MDN. Try to use them with your object.