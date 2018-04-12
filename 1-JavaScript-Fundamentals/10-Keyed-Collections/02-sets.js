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

/* 
    the Set object lets you store unique values of any type. 
    primitive 
    object refrences.. 

    const set1 = new Set([1,2,3,4,5]);

    console.log(set1.has(1));

    console.log(set1.has(2));
    
    console.log(set1.has(6));
    


                *** syntax *** 

        new Set([iterable]); 

        **** return Value *** 
        a new Set object 


    set objects are collections of values. 
    iterate throught the elements of a set in insertion order. 
    a value in the set in the set may only occur once; 
    it is unique in the Set's collection. 

    Properties.... 

    set.lenght 
        the value of the length property is 0 

    get set[@@species]
        the constructor function that is used to create derived objects. 

    Set.prototype 
        Represents the prototype for the Set constructor. Allows the addition of properties to all Set objects. 

    *****  Set instances *** 

    All set instances iherit from Set.prototype. 




    */

    var mySet = new Set();

    mySet.add(1);
    mySet.add(2);
    mySet.add(5);
    mySet.add('hippos are always hungry');
    // var o = {a: 1,b: 2};
    // mySet.add(o);

    
    var myArray = ['value1', 'value2', 'value3','value1'];



    var testSet = new Set();

        testSet.add(20);
        testSet.add(44);
        testSet.add(12);
        testSet.add(20);

    // if we where to console.log(mySet);
    //  what would you expect would print out? 
