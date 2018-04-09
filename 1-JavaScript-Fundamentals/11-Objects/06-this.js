// THIS
// The this keyword is one of the toughest things for newcomers to wrap their heads around. Let's take our time and just do a little bit for now.
// File Location
// Let's do a little more practice:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 11-Objects
//                 08-this.js <----You will be working in this file.
// Grammar Refresher
// Many people start learning about the this keyword with a refresher on Pronouns and Antecedents in English. Let's take that approach and go way back to grade school. Consider the following sentence:
// Carolyn had to take her cute cat to the vet yesterday.
// Remember that a pronoun is a word that replaces a noun. In the example sentence, 'her' is our pronoun.
// The antecedent is the word that the pronoun refers back to. In this example sentence the antecedent would be 'Carolyn'.
// this in coding
// We have a similar concept in coding with the 'this' keyword. Let's look at a sample chunk of code:
// //1
// function Player(name, points){
//     this.name = name;
//     this.points = points;
// }

// //2
// var paul = new Player("Paul", 100);
// var quincy = new Player("Quincy", 104);

// //3
// console.log(paul.name); //Paul
// console.log(quincy.name);//Quincy
// So in the above code, here's what we've done:
// We've created an Object Constructor Function that can create new instances of Player. It can create new Player objects.
// We've created two instances of the objects and passed in values into the arguments.
// We are console logging the name value of each of those separate objects.
// this
// But what about The this keyword? Analyzing #1 a little bit more, consider these things:
// There are two parameters name and points.
// These values get passed to the RHS inside the function, as noted below:
// lhs         rhs
// this.name = name`
// this.name will store those values on the lhs for each individual object. this.name is working like a pronoun, and it's antecedent is the object that the particular instance refers to. That's confusing, so let's talk about that in concrete terms:
// When we print console.log(quincy.name), the this keyword is referring to the Player instance called quincy.
// When we print console.log(paul.name), the this keyword is referring to Player instanced called `paul.
// If we keep creating new instances of those objects, this we refer to the current object when it is called and the . operator is used to access the specific property values for that object.
// Key Takeaway
// In general this refers to the current object, to the calling object.
// There are a lot more rules and nuances to deal with here, but this should be enough to get you started.
// Practice
// Write a constructor function called Band that takes in two parameters: name and genre.
// Use what you've learned with the this to align the left hand side with the value of the right hand side.
// Use the constructor function to create two new objects.
// Print the name and genre for both of those objects.