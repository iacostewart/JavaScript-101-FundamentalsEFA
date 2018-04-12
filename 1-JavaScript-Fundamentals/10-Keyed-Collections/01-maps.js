// MAPS
// Maps are a new data-structure object introduced in ES6. The easiest way to understand a map is to imagine it as a hybrid between an array and an object, taking elements of both and merging them together.
// Differences between an array, an object, and a map
// In an array, the key-value relationship is always defined as a numerical index followed by a value. The key will always be a number; there is no way around it. In an object, the key is always a string, followed by a value. Again, there is no way to change this. A map, however, allows the key to be any data-type, providing flexibility that the other options do not. A map can be created like this:
// let newMap = new Map();
// newMap.set("car", "ford");
// newMap.set("car", "chevy");
// newMap.set(2, "names");
// newMap.size; //3
// The size property easily calculates the size of the map, whereas an object's size must be tracked manually. In addition, a for-of loop can be used to print all the elements of a map quickly and in order:
// for (let [key, value] of newMap) {
//     console.log(key + " " + value);
// }
// /* prints:
//     'car', 'ford'
//     'car', 'chevy'
//     2, 'names'
// */
// For additional information about maps, and to see its various methods and functions, see the Mozilla docs here
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
//                 01-maps.js <----You will be working in this file.
// Practice
// Create an array with 4 elements. Then create a map and an object with the same elements and print all three to the console.
// Think about the differences between a map, and object and an array. What are some advantages and disadvantages of each? Why might you want to use one over the others?


/*
                *** map *** 

    The map object hods key-value pairs. Any value (both objects and primitive values
        may be used as either a key or a value. 

Syntax... 
    
        new map([iterable]) 

        parameters 
            iterable 

                an arror or other iterable object whoes elements are key-value pairs. (arrays with two elements, eg [[1, 'one'], [2, two]])
            each key-value pair is added to the new map; null values are treated as undefined. 



    Description 
    a map object iterates its elements in insertion order. 
    a for...of loop returns an array of [key, value] for each iteration. 



    */

    // var myMap = new Map(); 

    // var KeyString = 'a string',
    // keyObj = {},
    // keyFunc = function() {};

    // // setting the values 
    // myMap.set(KeyString, "value associated with 'a string;");
    // myMap.set(KeyObj, 'value associated with keyObj');
    // myMap.set(keyFunc, 'value associated with keyFunc');

    // myMap.size; //3 

    // // getting the values 

    // myMap.get(KeyString); // "value associated with a string".. 


    /// 
    ///     for..of loop:




//     var myMap = new Map();

//     myMap.set(1, 'one');
//     myMap.set(2, 'two');
//     myMap.set(3, 'three'); 
    
//     for (var [ key, value ] of myMap) {
//         console.log(key + ' = ' + value);

//     }




//   let arr = [1,2,3,4];



//   let plus5 = arr.map((val, i, arr) => {
//       return val + 5; 
//   })
//   console.log(plus5);
    

