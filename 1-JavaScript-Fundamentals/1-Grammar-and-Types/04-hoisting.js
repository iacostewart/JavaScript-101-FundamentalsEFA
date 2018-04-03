/* 
    Hoisting:
      * Feature of JavaScript where a variable may be accessible
            outside of the code block. 
        * powerful but can also be a large security risk. 
    this module will intrudece the idea fo "block scope"    
*/

/*
    What is Hosting? 
        * variables declared with var or without a keyword at all. 
            are HOISTED or lifted to the top fo the code in which it is scoped
            when the code is compiled.
         
*/

 // example: //

//  console.log(x);

//  var x = 7;

 //    ****** i coldent get this to work  it gave me an "undefined" lol... so it knows it exists.. just dosent know the value. //  

    // ** introduced in ES 2015 let and const where intruduced to block scope.. to combat scope leakage.// 

// example // 
 
    // console.log(a);
    //     var a = 22;
    //     console.log(a); 

    //     {
    //         var y = 12;
    //         console.log(y)

    //     }
    // console.log(y);

    // console.log(w);
    // var w = 220


/*
    Feature of Block Scope: 
        * variables with the same name are not treated as the same variable. 
           consider the following.. 
           

*/

    // let x = 5;
    // console.log(x); // this is targeting the x value declared outside the code block  

// {
//     let x = 7;
//     console.log(x); // while this has the same name and value, it has no idea that the other
//                     // variable exists. When its told to log the value, It logs the only value it knows about. 
// }

//console.log(x); // this is looking at the one declaired above the code block not the block its self.
// since that variable is declared as 'let' its restricted to exist in only the code block.


/* ***************  Practice section *********************** */
/*
1 ) create a variable using each of the three keywords.
    const let var
    assign each of them a value. 

2 ) inside a code block, create two additional variables useing the var and let keywords. 

3) print to the console the values of each variable. What happens? why? 
        ** what: the log konws about the outside values, but not the one inside that is declared
            as let. 
        **why: the declariations for let and const are only local declarations. since they are being declared inside
            a block the outside world dosent know they exist. If the console.log's where
            called inside the function block it would then know the values. 
4) come up with an example of scope leak, and find a way to prevent the leak from happening. 
// */
// const a = 1;
// let b = 2; 
// var c = 3;
// {
//     var d = 4; 
//     let e = 5; 
//     const f = 6;
// }
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

/* scope leak example 
        varaiables with values that would exist somewhere else int the app. these values could collide and cause unexepected and difficult erros. 

*/