// // alert('connected')

// /*          ********** TYPES ***********

// JavaScript has seven different data-types: 
//     * boolean : Binary data-type. True or False. 
//     * null : keyword that denotes a null value. this is not a 0 its just an absense of value. 
//     * undefined : a data-type that has not been defined with a value. 
//     * number : a numerical data-type.  
//     * string : any combination of characters to be read as text. 
//     * symbol : used to make an anonymous object properties. 
//     * object : container that can hold multiple data-type values. 
 
// ***** Examples of each ****** 
// */ 
// // boolean 
// let a = true;
// console.log(a);

// //null 
// let b = null; 
// console.log(b);

// //undefined 
// let c;
// console.log(c);

// // number 
// let d = 17; 
// console.log(17);

// //string 
// let e = 'hello World';
// console.log(e);

// symbol 

// const MY_KEY = symbol();
// const obj = {
//     [MY_kEY]: 123 
// };

// object 
// let f = {
//     hello: 'test',
//     number: 13
// };
// console.log(f.hello);
// console.log(f.number);

/*    
          ******** Dynamically-typed *********     
          
          JavaScript is a dynamically-tped language, so variables
          can hold what ever we tell them to. 
          
          let x = 19;  // this is a intager or a number 

          let x = 'tree' // this is a string 

          let x =  false  /// this a boolean 

          other languages are more selective in how you set things up. javaScript gives you a more flexable playGround. 

          */


//  ********** Practice ***************

/*
    1) create a variable for each type and print each to the console. 

    2) create a new variable and assign it. Use typeof keyword to print 
        the data-type to the variable to the console.    //consoel.log(typeof x); 
    
    3) Change the value of that variable to a different data-type, then use typeof again. 
        notice how the type of the variable changes. How could this be utalized in a progarm.?

*/


var frank = 'fish'; 

console.log(typeof(frank))// this could be used in a function, as a tipping point for a new function to run. depending on if the typeof response. 

