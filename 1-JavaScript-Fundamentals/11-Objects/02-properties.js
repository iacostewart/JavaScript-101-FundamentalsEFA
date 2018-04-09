// PROPERTIES
// File Location
// We will be working in the following file:
//     javascript-library
//         └── 0-PreWork
//         └── 1-Fundamentals
//             └── 11-Objects
//                 01-properties.js <----You will be working in this file.
// In the pre-work, you learned about how to create an object and assign it properties. This is just a review.
// An object with no properties
// var empty_object = {};
// Object Literal with two properties
// Look at the code below.
// var movie = {
//     //These are properties
//     name : "The Godfather",
//     director: "Martin Scorsese"
// };
// Use . to access the properties.
// console.log(movie.name); 
// console.log(movie["name"]);//No one does this, but you can.
// //Quotes are optional around property names
// var band = {
//     "name" : "Weird Al Yankovic",
//     "numberAlbums": 1,
// };

// console.log(band.name);
// console.log(band.numberAlbums);
// Nested properties
// You also saw in the left had side module how objects can be nested. Arrays can also nested inside objects.
// var netflix = {
//     id: 1,
//     name: "",
//     seasonInfo: {
//         episodeInfo : [
//             { episode: 1, episodeName: "Hey Paul"},
//             { episode: 2, episodeName: "Yes Paul"}
//         ]
//     }
// };

// console.log("All data:", netflix);
// console.log("Just season info: ", netflix.seasonInfo);
// console.log("Episode Number: ", netflix.seasonInfo.episodeInfo[0].episode);
// We could loop over the episode info array like this
// for (var container in netflix.seasonInfo.episodeInfo.episodeName){
//     console.log(netflix.seasonInfo.episodeInfo[container].episodeName);
// }
// Challenges
// Create an object with several properties. Print each to the console.
// Add an array as a property and loop over its elements. Print them to the console.
// Recall that objects can be created from a model. Create a model asking for a person's age, height, eye color, hair color, and whether or not they wear glasses (make this a boolean value). Then create yourself as an object with that model.
