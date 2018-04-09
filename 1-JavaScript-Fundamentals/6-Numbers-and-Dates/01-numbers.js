// Unlike many other programming languages, JavaScript does not define different types of numbers, like: integers, short, long, floating-point, etc. Instead, JavaScript incorporates a wide variety of numberic literals available for the developer. To learn more, click here.
// Precision
// Integers (numbers WITHOUT a period exponent notation) are accurate up to 15 digits.

// var precise = 999999999999999;   // precise will be 999999999999999
// var rounded = 9999999999999999;  // rounded will be 10000000000000000
// The maximum decimal places for any given number is 17, however floating point arithmetic is not always fully accurate.

// var closeButNoCigar = 0.2 + 01; // closeButNoCigar will be 0.30000000000000004
// To solve this precision problem, it helps to multiply each value, and then divide.

// var numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // numbersAreHard will be 0.3!
// Numbers Vs. Strings
// JavaScript uses the + operator for both addition of numbers and concatenation for strings.

// // numbers

// var numberOne = 10;
// var numberTwo = 20;
// var addition = numberOne + numberTwo // addition will be 30

// // strings

// var stringOne = '10';
// var stringTwo = '20';
// var concat = stringOne + stringTwo // concat will be '1020'
// The value within a string are NOT interpreted by JS; if you have numbers within a string that you want to add, be aware that JS will simply concat, or slam the two values side by side, rather than perform the necessary math.
// Number Object
// JavaScript has a built in number object that has properties for numberical constants (maximum, value, NaN, infinity, etc.). You cannot change the values of these properties.

// // Number objects

// Number.MAX_VALUE // The largest representable number
// Number.MIN_VALUE // The smallest representable number
// Number.NaN // Special 'not a number' value
// Number.NEGATIVE_INFINITY // Special negative infinite value; returned on overflow
// Number.POSITIVE_INFINITY // Special positive infinite value; return on overflow
// Number.EPSILON // Difference between one and the smallest value greater than one that can be represented as a Number
// Number.MIN_SAFE_INTEGER // Minimum safe integer in JS
// Number.MAX_SAFE_INTEGER // Maximum safe integer in JS

// // Number methods

// Number.parseFloat() // Parses a string argument and returns a floating point number 
// Number.parseInt() // Parses a string argument and returns an integer of the specified radix or base
// Number.isFinite() // Determines whether the passed value is a finite number
// Number.isInteger() // Determines whether the passed value is an integer
// Number.isNaN() // Determines whether the passed value is NaN
// Number.isSafeInteger() // Determines whether the provided value is a number that is a safe integer

// // Number prototypes

// Number.prototype.toExponential() // Returns a string representing the number in exponential notation
// Number.prototype.toFixed() // Returns a string representing the number in fixed-point notation
// Number.prototype.toPrecision() //Returns a string represe