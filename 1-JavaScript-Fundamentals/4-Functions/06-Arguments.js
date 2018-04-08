/* 
    Arguments..   

    A a parameter is a varialbe in a method definition. when a method is called,
    the argumetns are the data you pass into the methods parameters. 
    to say this again, a parameter is the variable in the declaration 
    of the function. An argument is the actual value of this variable that gets
    passed to a function. 

*/

// sample code... 
// lets created a function with three parameters: 
alert('arguments connected');
function addThree( a, b, c ) {;
    return a + b + c;
}   

// lets pass in arguments to satisfy those parameters: 

console.log(addThree(1,2,3));
console.log(addThree(4,5,6));


/* 
    A few more rules on arguments and functions: 
    1) Extra agruments get ignored... console.log(addThree(1,2,3,4));

    2) if an argument hasent been provided, its NaN. 
    console.log(addThree(1,2));
*/

/* 
    The arguments Object.... 
    the argumetns object is a local variable available witin all (non-arrow) functions. you can refer to a functions argumetns within the function 
    by using the arguments object.  arguments is a keyword, and it is an arry-like, which means that the object is indexed, starting at 0.     
*/

function demoFunction(x,y) {
    // console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[1]);
}