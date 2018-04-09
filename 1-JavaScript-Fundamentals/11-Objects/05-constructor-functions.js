// CONSTRUCTOR FUNCTIONS
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 11-Objects
//                 01-properties.js
//                 02-enumeration.js
//                 03-initializers.js 
//                 04-constructor-function.js <----You will be working in this file.
// You've seen a few times that objects can be created from models. The actual name for this is a "constructor function"; literally, a function that constructs an object. You will be using these quite often in the future, especially once you reach React.js and the Angular framework. For now, just another review.
// function Person(name, age){
//     //Note that the argument aligns with the RHS(Right Hand Side) 
//     //The variable created will take the place of this
//     this.name = name;
//     this.age = age;
// }

// var paul = new Person("Paul", 41);
// console.log(paul.name);

// var sophie = new Person("Sophie", 5);
// var ava = new Person("Ava", 15);

// console.log(sophie.name);
// Practice
// Re-create the people objects from the previous module, but this time use a constructor function. Then put them in an array.
// Print the properties of each person to the console. However, this time iterate through the array and group the properties together by type, like this:
// Age: Ted - 20
// Age: Paul - 41
// Age: Aaron - 30
// Eye Color: Ted - brown
// Eye Color: Paul - brown
// Eye Color: Aaron - black
// etc...
// Bonus Challenge
// Come up with another challenge or two on your own based around objects. Slack them to the instructor.