/*
    Calling Fuctions 

    Rules 
    1) functions can be called reursively (inside itself)
    2) functions can be called inside other functions. 


    */ 

    // example 

    // alert('3 connected');
    // //1 
    // function getSquare(number){
    //     return number * number; 

    // }
    // //2 
    // getSquare(5);
    // console.log(getSquare(5));

    // Hoisting Review 
    /* 
        Functions must be in the scope when they are called, but the function 
        declaration can be hoisted. 
        */ 

        // console.log(addNumbers(5,7));

        // function addNumbers(a, b) { return a + b }

    /*  the scope of a function is the function in whic it is declared, 
    or the entire program if it is declared at the top level.*/ 

    /*    Remeber that funcdtion expression cant be hoisted, hoisting only works
    when the funcion is defined  ... example.... funcion nuncName(){}. this 
    code will be hoisted. but notHoisted(){} this one is an expression and it wont 
    be hosited.*/

// //2 
// console.log(addNumbers(5,7));

// //1

// var addNumbers = function(a,b) {
//     return a + b;
// }


// Recursion.....    

/*
    A recursive function calls itself, This demo could be done
    with a while loop but for demo purposes this works: 

 */

// var timer = function(seconds){
//     if (seconds > 0){
//         console.log(seconds);
//         return timer(seconds-1);
//     }else{
//         return seconds;
//     }
// };
// timer(10);