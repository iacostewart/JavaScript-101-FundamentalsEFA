/*

        Left Hand Side.. 

        in javascript 


        new 

        new is a keyword that lets a user create an object based off of a 
        user-designed model. the model must be reated first as a function.. 

        example. 
 */

 function Game(score, winner, loser) {
     this.score = score;
     this.winner = winner; 
     this.loser = loser; 

 }



// this.score refers to the property of the object being created, 
// while score refers to the parameter being passed into the funcion. 
// we can create a new game object with the following: 

let SBLII = new Game(41-33, "philadelphia Eagles", "New England Patriots");

console.log(SBLII.loser);

// Super 

// sometimes the information inside of an object is so large we 
// store it inside another Object within the first. nesting.. 

let news = {
     story 1: "headline",
     story 2: "important", 
     
        weather: {
            tomorrow: "sunny",
            wednesday: "rain"
        }, 
        
        sports: {
            baseball: 'home run!',
            football: 'Touchdown!'
        }, 
        function thowToComercial( segment, time) {
            console.log("we'll be back with " + segment + " in " + time + "minutes after this short break.");
        }
}


/* 
    Super allows the chidlren to access fuctions of the parent. when we have nested functions. the scope wont
    allow them to break outside of their box, the parents can call this.throwToComerical('weather', 3);
    but if a function is burried down another level it must use the super.thorwToComerical('weather', 3);


Practice
Create a function to be used as a model for today's date, then use that model 
to create an object called today.
Add a property to the today object called tomorrow (let today.tomorrow = ...).
Using the news example from above, add the propery localNews to the object, 
then have the sportscaster go to commercial, teasing the local news coming up in 3 minutes.
    */