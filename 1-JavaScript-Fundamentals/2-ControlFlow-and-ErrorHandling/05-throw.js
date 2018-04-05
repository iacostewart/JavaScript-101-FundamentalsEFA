/* 

*********THROW********* 
 
the Throw statemnt throws and exception. 
the execution of the code will stop, and the code 
will move on to the next catch block. 

if now catch block exists among caller functions, the program
will stop running. 



*/
alert('connected');

function addNumbers(a, b) {
    if ( isNaN(a) || isNaN(b)) {
        throw "One of the parameters is not a number";
    } else {
        return a + b; 
    }
}

try {
     addNumbers(10, 'ken')
}
catch(error) {
    console.log(error);
}
/* this essentially does an check stop durring a funciton.. its double checking that the data entered
is the valid data types we are looking for. If everyting is cool. then we can proced to the intended else
section. 

the throw is basically alerting us to an issue. to keep the app from dieing. 
*/

