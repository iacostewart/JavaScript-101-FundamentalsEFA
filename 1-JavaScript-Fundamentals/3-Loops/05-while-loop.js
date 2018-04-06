/* 
    While Statement Loops

    The while Loop executes its statements as the designated condition (i.e n < 3 ) reads as TRUE.
    If the condition reads FALSE, the statemtn within the loop stops executing and control passes on. 

    the condition is checked before the statent ( i.e  n++; x += n; ) is executed, at 
    which point, the condition is checked again. 

    if the condition returns FALSE, execution stops and contol passes on before the statement
    is executed. 
    To execute multiple statments, use a block statemnt ({....}) to group. 
*/

// while loops

// create a variable 

// alert('connected');

// var score = 0;
//     // Set a condition in parens 
// while( score < 20 ) {
//     // Set an increment operation 
//     score ++; 
//     //print to the console.
// console.log("score: ", score);

// }

// //Another Example 


// for loop vs do while loop

//for loop

var cars = [ 'BMW', 'Volvo', 'Saab', 'Ford'];
// var i = 0;
// var text = '';

// for  (;cars[i];) {
//     text += cars [i] = '<br>';
//     i++; 
// }




var u = 0; 
var text2 = '';

while (cars[u]) {
    text2 += cars[u] + '<br>';
    u++;
  }
  console.log(text2);