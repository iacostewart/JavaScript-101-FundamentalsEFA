/* 
    Closure.... no its not just for relationships... ''


    Rules of closures
    1) a closure gives you access to the variables set in a function after the function has compleated and returned. 
    2) helps keep variables from getting pushed into global scope. 
    3) provides a degree of protection. Variable cant be overwritten. 



    Global variables... 

note that bellow that he function is returning another function: 

*/

// function addSquares(a,b) {
//      function square(x) {
//          return x * x;
//      }
//      return square(a) + square(b);
// }

// var a = addSquares(2,3);
// var b = addSquares(3,4);
// var c = addSquares(4,5);
alert('closures connected');

// more sample code. 

// function printName(first, last) {
//     var intro = 'my name is ';
    
//     function makeFull() {
//         return intro + first + ' ' + last;
//     }
//     return makeFull();
// }
// var d = printName("paul", "o'Connor");
// console.log(d);
