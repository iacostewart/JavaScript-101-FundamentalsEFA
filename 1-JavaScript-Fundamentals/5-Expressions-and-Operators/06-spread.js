/*
    Spread 

    the spread operator was introduced with ES6, and is 
    represented by an ellipse (...). Spread allows for multiple 
    items to be inot an 
    array or a function. we will cover the array portion in more depth
    later, so for now well focuse on the function uses. 



    new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);


    This function can contain up to a total of 7 parameters. 
    Imagine having to use that function over and over and 
    over, writting it every single time. Using the spread 
    operator, we can put all the parameters into an array 
    and inject it straight into the function:
    
let params = [2018, 2, 28, 16, 30, 0, 0];
let date = new Date(...params);
 */



