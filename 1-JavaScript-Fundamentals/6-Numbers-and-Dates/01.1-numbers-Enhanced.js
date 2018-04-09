// NUMBERS (ENHANCED)
// JavaScript implements all numbers in the double-precision 64-bit binary format IEEE 754. This basically means that JS incorporates all the numbers between -(253) -1 to 253 - 1. There is no specific type for numbers.
// JavaScript is both able to represent floating-point numbers, as well as the symbolic value of Infinity, -Infinity, and NaN (Not a Number). Basically, JS has in its library a vast supply of integers that are at the disposal of the developer.

// You can use numberic literals for the following: decimal, binary, octal, and hexadecimal.
// Decimal Numbers
// Note: decimal literals can start with 0, followed by another decimal digit; however, if EVERY number following the 0 is LESS THAN 8, the number is parsed as an octal number.
// 1234567890
// 1150

// // Use caution when starting a number with a 0

// // Parsed as a decimal

// 0888 // 888

// // Parsed as an octal

// 0777 // 511 - parsed as octal in non-strict mode
// Binary Numbers
// Binary number syntax incorporates a leading 0, followed by the letter 'B' (upper or lower case - b or B). The appropriate numbers following should be either 0 or 1.
// If the following numbers are not zero or one, a SyntaxError is thrown.

// var a = 0b10000000000000000000000000000000; // 2147483648
// var b = 0b01111111100000000000000000000000; // 2139095040
// var c = 0B00000000011111111111111111111111; // 8388607
// Octal Numbers
// Octal number syntax begins with a 0, and is followed by digits ranging between 0 and 7.

// var n = 0755; // 493
// var m = 0644; // 420
// Strict mode in ES2015 (or higher) forbids octal syntax; rather, if desired, the developer must prefix an octal number with a zero, followed by the letter 'O' (0o).

// // for ES2015

// var a = 0o10; // 8
// Hexadecimal Numbers
// Hexadecimal numbers incorporate alpha-numberic digits to convey specific numeric values. The syntax uses a 0, followed by the letter 'X' (upper or lower case - x or X). The range of the digits must be the following: 0123456789ABCDEF; if it is outside this range, a SyntaxError is thrown.

// 0xFFFFFFFFFFFFFFFFF // 295147905179352830000
// 0x123456789ABCDEF   // 81985529216486900
// 0XA                 // 10
// Exponentiation

// 1E3   // 1000
// 2e6   // 2000000
// 0.1e2 // 10