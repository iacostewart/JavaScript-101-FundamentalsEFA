/*
Typeof 

typeof is a reserved keyword in javaScript that does exzctl
what it says. it returns the typ of the value in question. 
the proper syntax is typeof x 

consider the following 

let x = 2; 
let y = 'hello';
let z = false; 


practice 
1) in typeof.js create several varialbels and give them differnet value types. 
use typeof on each to pring the type to the conosle.

2) write a program, that has different outcomes depending on the type
of value used. you can use if/else, switch , or ternary operators. for and extra challenge do all 3. 
 */








 

 var mainStreet = [{houseNumber: 770, basement: true, bedrooms: 3, bathrooms: 1, twoStory: false, fence: true, driveway: 'gravel'},
              {houseNumnber: 772, basement: false, bedrooms: 5, bathrooms: 2, twoStory: true, fence: false, driveway: 'brick'}];







              console.log(mainStreet[0]);


   mainStreet.unshift({houseNumber: 774, basement: true, bedrooms: 5, twoStory: true, fence: false, driveway: 'asphalt' })






   for (let i = 0; i < mainStreet.length; i++)
{
    console.log(mainStreet[i]); 
}

var indOf = [];

console.log(indOf.indexOf(1));


var abc = ['a','b','c','d'];
console.log(abc.indexOf());