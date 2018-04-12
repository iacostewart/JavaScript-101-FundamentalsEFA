// CONST
// Another ES6 addition was the const keyword. const stands for constant, which can be deceptive to developers. Let's look at a few rules of constants in JavaScript.
// const must be initialized upon declaration
// Like var and let, the const keyword is a container. However, const values must be initialized when they are declared. Consider the following:
// const constNumber;
// constNumber = 10;
// console.log(constNumber); //Error missing initializer in const declaration
// Here we have a declaration for a const, but we don't have an initiaztion with the declaration. Something like this would be accurate and work properly:
// //This works:
// const constWithInitializer = 'Initializing as a string';
// console.log(constWithInitializer);
// Immutability
// This is the hard part of const. So for booleans, strings, and numbers, we will break the app if we try to change it by reassignment:
// const constWithInitializer = 'Initializing as a string';
// console.log(constWithInitializer);

// //Reassigning the value
// //This will throw an error
// constWithInitializer = "New value";
// console.log(constWithInitializer);
// Value is mutable
// We can, however, manipulate the value of the string, meaning we can take the constWithInitializer variable and call methods on it. Let's use the concat() method:
// const constWithInitializer = 'Initializing as a string';
// console.log(constWithInitializer);

// const ok = ", ok?";
// console.log(constWithInitializer.concat(ok));
// This is also something that we can demonstrate with arrays. Creating a const variable doesn’t mean that the assigned value becomes immutable. Check out the following:
// const singers = ['Jagger', 'Plant', 'McCartney', 'Lennon']
// console.log(singers);

// singers.push('Cobain')
// console.log(singers)
// The previous example shows that even though the singers reference couldn’t be changed, the array itself can indeed be modified.
// What we can't do is create an entirely new reference to a whole different array. The following would break:
// singers = ['Clapton'];
// console.log(singers);
// Using var would allow us to do this:
// var guitarists = ['Page', 'Hendrix', 'Clapton'];
// console.log(guitarists);

// guitarists = ['King'];
// console.log(guitarists);
// More Practice
// To further examine this idea of mutability and immutability, let's get a little more practice with const and look at it from another angle with a little more complex example. First, let's give you the code for this section:
// //1
// const favoriteFoods = ['apples', 'beets', 'cauliflower', 'dairy'];

// //3
// const diet = checkFoodList(favoriteFoods);

// //4
// const shortNames = diet.checkForShorterNames();
// console.log("Short names:", shortNames)

// //5
// const longNames = diet.checkForLongerNames();
// console.log("Long names:", longNames);

// //2
// function checkFoodList(items) {
//   return {
//     checkForShorterNames: () => items.filter(item => item.length <= 6),
//     checkForLongerNames: () => items.filter(item => item.length > 6)
//   }
// }
// We created the favoriteFoods array as a const.
// We created a method called checkFoodList. That method returns two different methods checkForShorterNames & checkForLongerNames. These methods do some basic filtering. (Note: these methods are using arrow functions.)
// We create another const called diet. We store the result of passing in the favoriteFoods array into checkFoodList. This way we can call the methods on the diet constant.
// The diet constant now has access to the two methods, and we create another const called shortNames to store the result of running checkForShorterNames().
// We create another const called longNames to store the result of running checkForLongerNames() that will be used to store the result of calling the method on diet.
// The point here is threefold:
// Get a little more practice with programming logic and passing data around from container to container.
// Understand that const values can change and be broken up in different ways, it's just that they can't be reinitialized.
// More Practice
// Write a similar, almost verbatim chunk of code to the one above, called filterSingerNames. The function will return a function that filters singer names that are 4 letters long or under, and it will return a function that will return a function that filters singer names that are five letters or more.

// lets look at containers, var , let , const. Of these three containters 
// which ones need to have thier values initialized when they are declared. 

    