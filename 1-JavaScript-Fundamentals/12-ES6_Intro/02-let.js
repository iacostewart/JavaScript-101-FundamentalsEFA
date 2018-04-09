// LET
// One of the major releases of ES6 was the let keyword. In this module we'll go into deeper discussion about the let keyword. Many people get asked about this difference in job interviews, and many new(and seasoned) developers are fuzzy on the question. Let's discuss the let keyword with some examples.
// Let is a container
// let is an alternative to var. It works like var in one sense: let is a container used to hold some value, just like var. For instance, these two are the same in the sense that they both hold a number variable:
// var someNum = 10;
// let someOtherNum = 5;
// This container-like aspect is the main similarity between the two keywords.
// Block Scoping
// The difference is let follows block scoping rules instead of the default lexical scoping rules. Talking deeper about scope and lexical scoping will be something we do in the near future, but let's get a cursory look at what this means with some code.
// {
//     var demo = 1;
// }
// //1
// console.log("Var demo:", demo);

// {
//     let demoTwo = 5;
// }
// //2
// console.log("Let demo:", demoTwo);
// Notice that the top example with var will print to the console. That's because With let you can get to a deeper level of scope by just opening another pair of curly braces. This means you don’t need entirely new functions to get a new scope like you would with var. Instead, a simple {} block will do.
// Try it again with two curly braces, first with var:
// {{ var twoLevelsIn = 'Two levels in'; }}
// console.log(twoLevelsIn) // <- Two levels in
// Then, with let:
// {{ let twoLevelsInWithLet = 'Two levels in'; }}
// console.log(twoLevelsInWithLet) // <- Break
// This is what we mean when we say let is block scoped. The curly braces will define the scope of where let is visible.
// Conditionals
// Let's look at a few practical examples using conditional statements, for a little more practice. First, let's look at an example with var:
// //var
// var x = 8;
// if(x === 8){
//     var y = 7;
// }
// console.log("Var:", y);
// Then, let's look at the same thing with let:
// let xyz = 8;
// if(xyz === 8){
//     let yy = 7;
// }
// console.log("Let:", yy);
// Simply put, because yy is block scoped, it is not visible outside of the curly braces of the conditional statement.
// For Loops
// This is especially handy when working with for loops. To keep the value of i protected and within the bounds of each specific for loop is handy. Notice the difference here, first with var:
// for (var ii = 0; ii < 2; ii++) {
// console.log(ii)
// // <- 0
// // <- 1
// }
// //This will work.
// console.log("Outside with var:", ii)
// Then, look at let with for loops:
// for (let i = 0; i < 2; i++) {
//     console.log(i)
//     // <- 0
//     // <- 1
//   }
//   //This won't work:
// //  console.log("Outside with let:", i)
// Functions
// Let's look at var and let with functions. If you don't already know, because of what we call lexical scoping, a variable var declared inside a function is not available outside the scope of the function:
// function isLoggedIn(password) {
//     if (password === '123abc') {
//       var login = "You are logged in!";
//     }
//     return login;
// }
// //This would break.....
// console.log(login);
// Variables declared inside of the scope of function declarations are kept within the scope of that function. However, notice that the login variable is available outside of the scope of the if statement: return login. Here we can return that variable because variables can be seen and used outside of conditional statements. Call and print the result of the functions a couple times below the code:
// function isLoggedIn(password) {
//     if (password === '123abc') {
//       var login = "You are logged in!";
//     }
//     return login;
// }
// //Add these calls:
// var x = isLoggedIn('123abc')
// console.log(x);
//   // <- true
// var y = isLoggedIn('two')
// console.log(y);
//   // <- undefined because it doesn't meet the `var login` requirements fro the `password` variable.
// Now, play with changing one thing. Change the var login to let login:
// function isLoggedIn(password) {
//     if (password === '123abc') {
//       let login = "You are logged in!";
//     }
//     return login;
//   }
// var x = isLoggedIn('123abc')
// console.log(x);
// What happens when we run the function and print the value of x this time? We get an error. Why? We have entered the correct password in the parens: var x = isLoggedIn('123abc').
// We get an error because the login variable is no longer available outside the scope of the if statement inside the function because let can not be seen by outer blocks. Hence, it can't be returned by the function because it isn't available.
// Let in the Outermost block
// One common answer to this situation might be to declare let variables in the top of the scope, the outermost curly that is needed, and at the top of the code block. Copy the following example:
// function isLoggedIn(password) {
//     let login = "Please log in with a correct password";
//     if (password === '123abc') {
//       login = "You are logged in!";
//     }
//     return login;
//   }
// var x = isLoggedIn('123abc')
// console.log(x);
// In this example, we've moved the success variable to the top of the block and outside the conditional statement. The variable can now be seen inside the conditional statement and returned.
// Practice
// To get more practice with let and using let to set scope, try the following:
// Write a function called checkCreditCard.
// The function takes in a cardNumber parameter.
// The function has a let statement with a placeholder string that asks users to 'Please enter a valid card'.
// There is a simple conditional statement that checks if the card is equal to '4242424242424242'.
// If it is equal to that number, print: "Card passed".
// Return the status variable.
// Run the app with both the correct number and with the wrong number.