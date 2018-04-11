// STRING LITERALS
// A string is a data-type in JavaScript that represents text. "This sentence is a string." 'So is this one.' Whenever you log into a website, your username and password are read as strings. Strings are one of the basic building blocks that you will find yourself using over and over and over.
// How to create a string
// A string is a group of characters enclosed in quotations. In JavaScript, unlike some other languages, you can use single or double quotes for a string, but they cannot be used together. There are many different ways to create and use strings:
// let x = "This is a string.";
// let y = 'This is also a string.';
// console.log("This is printing a string to the console.");
// let z = "This is NOT a string, and will cause an error';
// Strings are used for everything from printing to the console to displaying error messages to asking for input from the user and more.
// String Concatenation
// The + operator acts differently with strings than it does with numbers. Rather than add two numbers together, it simply smashes the two strings into one, like so:
// let a = "StringA"
// let b = "StringB"
// console.log(a + b) //"StringAStringB"
// console.log("Hello " + b) //"Hello StringB"
// console.log(a + 'text' + b) //"StringAtextStringB"
// String Indexes
// Each character in a string is assigned an index, starting with 0 for the first character. Some methods allow you to access a specific string character to add, remove, or change it. The next module will show some of these in action. So in the case of let x = "Hello World!", console.log(x(0)) will print the character "H" to the console.
// Escaping Strings
// Occasionally there will be times when you want to include special characters within a string to perform a specific function. Using a backslash (\) within a string tells the compiler that the next character is not part of the string, and to treat it differently. Consider the following:
// console.log('Mary's father said "I don't want you to work there!"');


//Given the following code will this print to the console, true or false? 



console.log('\'Warning don\'t look under Kenn\'s coffee cup\'');
                            //or 
console.log("'Warning dont't look under Kenn's coffee cup'");
     // ^ since we use differnet "" on the outsde we dont confuse JavaScript. 
     console.log(`'Warning don't look under Kenn's coffee cup'`);



     //


// If you attempt to run this string, it will throw an error because of the apostrophes in the words Mary's and don't. The program things that that is the end of the string. Using the backslash will tell the program to ignore the apostrophe and to allow the code to execute properly:
// console.log('Mary\'s father said "I don\'t want you to work there!"');
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
//                 01-string-literals.js <----You will be working in this file.
// Practice
// Create two string variables, print them to the console, then concatenate them together and print the result.
// Create a variable with the string "STRINGS ARE COOL". Print only the characters that are vowels.
// Write a short (3-5 sentence) paragraph about anything you want and print it to the console. Escape the string if necessary.