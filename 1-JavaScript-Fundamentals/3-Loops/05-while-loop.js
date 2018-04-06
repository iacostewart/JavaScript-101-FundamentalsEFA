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

alert('connected');

var score = 0;
    // Set a condition in parens 
while( score < 20 ) {
    // Set an increment operation 
    score ++; 
    //print to the console.
console.log("score: ", score);

}

//Another Example 

var age = 0; 

while(age <= 50){
    age+=10;
    console.log("Age:" + age);
}if (age === 50 ){
    console.log("half way there")
     while(age <= 100 ) {
    age+=10;
    console.log("Age:" + age)
     } elseif(age === 100 ) {
    console.log("I made it!")}};
