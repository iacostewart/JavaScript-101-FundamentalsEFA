// CREATING FUNCTIONS
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 11-Objects
//                 01-properties.js
//                 02-enumeration.js
//                 03-initializers.js 
//                 04-constructor-function.js 
//                 05-create.js <----You will be working in this file.
// Object.create() is a built-in method that allows you to create a new instance of an object from a currently-existing object. It allows you to make multiple objects with the same properties without having to make a constructor function first. After it has been created, you can assign new values to the properties if you want to.
// Object.create
// We can use .create to make a new person without having to use a constructor:
// var paul = {
//     name: "Paul",
//     age: 41
// };

// var sophie = Object.create(paul);
// var ava = Object.create(paul);
// This process can be time-consuming, especially if the object has several properties that need to be changed. See what happens if we use the original Person object:
// let Aaron = {
//     age: 30,
//     height: '70in',
//     hairColor: 'brown',
//     eyeColor: 'black',
//     glasses: true
// };

// let Kaylea = Object.create(Aaron);

// //Object Kaylea has the same properties of object Aaron, so we have to maually change each property
// Kaylea.age = 26;
// Kaylea.height = "66in";
// Kaylea.hairColor = 'black';
// Kaylea.eyeColor = "brown";
// Kaylea.glasses = false;
// Imagine having to make a person object for everyone in the class this way. Now imagine if there were 10 properties instead of 5, and that you have 500 users a day each making a person object. You can see how much extra time this takes. If the object you are creating has a small number of properties, or the property values will be the same as the original, the create method can be very useful. If there are more than a couple of properties or there are a large number of objects to be created, however, it will generally be easier to use a constructor function.
// Practice
// Make a new object, then use Object.create() to create copies of it.
// Come up with some situations where the create method would be easier to use than the constructor function.