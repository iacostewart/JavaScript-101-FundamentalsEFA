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



// replace() 
/* 
    The replace() method returns a new string with some or all matches of a pattern. 
        replaced by a replacement. 
        the pattern can be a string 
        the pattern can be a RegExp
        the replacement can be a string or a function to be called for each match. 

        **** note ****
            the orgional string will remain unchanged. 

        syntax 

            str.replace(regexp|substr, newSbustr|function)
                
                regexp (pattern)
                    A RegExp object or literal. this is the match, or matches to be replaced with newSubStr or the value 
                    returned by the specified function. 
                
                sbstr (pattern)
                    A string that is to be repalces by newSubStr. It is treated as a verbatium sting
                        its not intreperted as a regular expression. only the first occurrence will be replaced. 
                newSubStr (replacement) 
                    the String that repalces the substring specified by the specified regexp or 
                    substr parameter. 

                function ( replacement )
                    a function to be invoked to create the new subsring to be used to 
                    repalce the matches to the given regexp or substr.

            *** the return value ***
                A new String with some of or all of teh matches of a pattern replaced
                by a replacement. 

            


*/





var str = "one trout, two trout, red trout, blue trout."

function testingMatch(sampleString) {
    var patternOne = /trout/g;
    var result = sampleString.match(patternOne);
    console.log(result);
}
testingMatch(str);



function testtest(str){
    results = str.replace(/trout/g, "fish");
    console.log(results);
}




function replaceTestingMatch(sampleString) {
    var patternOne = /trout/g;
    var patternTwo = "Fish"
    var newString = sampleString.replace(patternOne, patternTwo)
    console.log(newString);

}
replaceTestingMatch(str)



var slangStr = 'how r u doing idk brb'

function fixTheSlang(sampleString) {
    var slang1 = / r /g;
    var correct1 = ' are ';
    var slang2 = /u/g;
    var correct2 = 'you';
    var slang3 = /idk/g;
    var correct3 = 'I don\'t know';
    var slang4 = /brb/g;
    var correct4 = 'I will be right back';
  var fixedStupid = sampleString.replace(slang1,correct1).replace(slang2,correct2).replace(slang3, correct3).replace(slang4, correct4);
  console.log(fixedStupid);
}
fixTheSlang(slangStr);