// alert('connected')//

/*
    Global vs. Local Scope

Global = a piece of code is accessible througout the entire program.
    this could be a Var a clod block a fuction. 

Local = a piece of code is only avialable within a limited part of the program. 
    this coudl also be a variable / function or more. 
    * notice the curly braces. This is a defining factor of various levels of Scope.
*/


// Global scope 
// var x = "outside"//

{
    //local scope
  //  let y = "inside"; //
    
}

// console.log(x);//
// console.log(y);//

/*
        Practice: 
    1) Create and assign values to the two variables, one with the var keyword and one with the let keyword.
    2) Print the variables to the console. 
    3) Add a code block to your code. Inside the block create and assign a variable 
        called "isnide" with the   let keyword, then print it to the console. 
    4) Outside of the block of code, print the "inside" variable to the console. 
        What happens? the Reason for this will be covered more in-depth in the next module.

*/

/*
        Spoiler alert... the let declaration inside the codeblock wont print to the console.
        it give an Error " Uncaught ReferenceError: y is not defined " y was the variable
        that was palced inside the code block. 

*/
