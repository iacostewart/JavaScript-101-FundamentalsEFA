// REGULAR EXPRESSIONS
// Regular expressions are not something you need to learn and master as a beginner. We just want you to get a preliminary understanding of Regular Expressions, also referred to as 'regexp'.
// The most common use of regular expressions is to find matching sequences of characters in searches. Usually this pattern is used by string searching algorithms for "find" or "find and replace" operations on strings.
// Two Ways to Create a RegExp
// Literal
// var findElevenFifty = /elevenfifty/;
// Constructor Function
// var re = new RegExp('JavaScript Rules!');
// A sample
// Here's the issue: The writers of our website have written all the copy with us being listed as Eleven Fifty Consulting rather than Eleven Fifty Academy. We need to do two things:
// Find all the instances of Eleven Fifty Consulting.
// Replace all of them with Eleven Fifty Academy.
// We'll break this down into small chunks. Here's a sample string to work with:
// var efaString = `Eleven Fifty Consulting is for people, not profit. We believe in developing you,
//     the whole you.That’s why our coding academy programs are designed to help you discover 
//     and develop your strengths. At Eleven Fifty Consulting, it’s not just about developing the 
//     coding skills. We work with our students to develop the soft skills that employers are 
//     looking for in employees. We believe a new educational alternative is the solution to the 
//     growing technology skills gap. Our immersive learning programs develop polished entry-level
//     professionals in weeks not years. We understand you’re looking to launch or change your career 
//     now. Results shouldn’t take years or cost you tens of thousands of dollars. We’re the coding 
//     academy focused on you.    We believe our job isn’t done until graduates find thiers. As a 
//     coding academy, we partner with employers to craft our curriculum and we measure our success 
//     by the placement and progression of our students. With our internship and apprenticeship programs, 
//     you gain real-world and hands-on experiences and set yourself up for future employment success.?`;
// Notice how we're using backticks in that string instead of quotes. This is not part of regular expressions. Backticks are an ES6 feature that allows us to write multi-line strings without having to use any escape characters. We'll use this efaString in all of the following examples.
// Match Function
// Next, we'll write a function that checks for the word consulting.
// function checkStringForMatch(sampleString) {
//     var patternOne = /Consulting/g;
//     var result = sampleString.match(patternOne);
//     console.log(result);
// }
// checkStringForMatch(efaString);
// Notice, the patternOne variable inside the function? That is a simple regular expression. That dictates the sequence of characters that we are trying to match. So the first variable, sets up the sequence that we're looking for. The g on the end dicates that we'll be looking globally, throughout the whole string sequence.
// The second variable takes the sampleString that is passed in and calls the .match() method. The argument that we pass in to that method is the regular expression pattern that we are looking for. The match method does the work of taking the regular expression and it looks for matches inside of the string that is passed into the function.
// Finally, we log the result.
// replace() method
// Next, lets write a method that actually does the work of replacing 'Consulting' with 'Academy':
// function replaceConsulting(sampleString){
//     var patternOne = /Consulting/g;
//     var patternTwo = "Academy";
//     var newString = sampleString.replace(patternOne, patternTwo)
//     console.log(newString);
// }

// replaceConsulting(efaString);
// Here we see a similar process. We look for patternOne globally. We set up another variable, a simple string variable, that will be what we used to replace the incorrect text. Then, we have a newString variable that takes the sampleString and calls the replace() method.
// Replace takes two arguments: the pattern to be found, and the pattern to use as a replacement.
// In the end, we console.log the new string.
// More practice
// Our writers also get confused on the word 'their', spelling it thier. Write a function that takes in the efaString, finds any incorrect spellings of 'their', and replaces it with the proper spelling.