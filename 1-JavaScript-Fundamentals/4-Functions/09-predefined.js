/*
        Predefined Functions 

        Predefined functions are built into JavaScript language and made readily available for us to use. 
*/

//isNaN() is a pre-defined function that checks to see if something is not a number. 
alert('predefined connected');
function bankDepositAmount(money) {
    if (isNaN(money)) {
        return 'not a number!';
    }
    return money + ' was deposited into your accoutn.';
}

// calling the function

var depositOne = bankDepositAmount(1200);
var depositTwo = bankDepositAmount('one Hundred');

// print the result. 


/*
            parseInt()

        Another commonly used predefined function is parseInt().  this method is used when you want to convert a string number "6" to an integer 6. 
    */

function convertStringToNumber(x) {
    var parsedNumber = parseInt(x);
    return parsedNumber;
}
var numberOne = convertStringToNumber('1');
var numberTwo = convertStringToNumber('2');
console.log(numberOne);
console.log(numberTwo);


// blending the two together, 
/*
    if we're taking input from a user in the form of a string and we want them to enter numbers, what about checking to be 
    sure they enter a number. For instance, if a user enters XYZ, instead of an actual number.  We would need to check to be sure that they
    have entered a number. Let's take that same function and check to make sure that we have parsed a number. 
    consider the additional logic below. see if you can answer the question of what happens when we print numberThree. 

*/

function convertStringToNumber(x){
    var parsedNumber = parseInt(x);
    if (isNaN(parsedNumber)) {
        return "sorry, that is not a number"
    }
    return parsedNumber;
}

var numberOne = convertStringToNumber('1');
var numberTwo = convertStringToNumber('2');
var numberThree = convertStringToNumber('xyz');

console.log(numberOne);
console.log(numberTwo);
console.log(numberThree);