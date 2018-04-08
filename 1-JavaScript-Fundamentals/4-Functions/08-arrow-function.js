/* 
    Arrow Functions

    Key points
    1) An arow function expression has a shorter syntax compared to function expressions
    2) Lexically binds the  this   value.( we will talk about this later in react);
    3) Arrow functions are always anonymous. 

*/

alert('ArrowFuncions Connected');

/* 
            When we study react, youll see arrow functions all over the place. One big benefit is that they make the code more terse and compact. 
            lets look at an example. here's a regular addition function. Notie that we declare the function, we call it 
            and store the value in the exampleOne variable. 



    */

    function addNumbers(x,y) {
        return x + y;

    }
    var exampleOne = addNumbers(2, 6);
    console.log(exampleOne);

    // same function written with the arrow syntax... 

    var addTwoNumbers = (x, y) => x +y
    var exampleTwo = addTwoNumbers(2,1);
    console.log(exampleTwo);


// notice that the function is shorter syntax.. 2... its an anonymous function expression 3..... it uses the => operator. With

/*

/*
    One Param Rule 
    a good rule to know when using Arrow Functions is the one parameter rule. If you only have one parameter, you dont need parenthesis: 
    
    var sayHey = name => "Hey " + name;
     var exampleThree = sayHey("Kenn"); 
      console.log(exampleThree);
*/
// var couch = ''
var couch = dog => "yup.. I peed on the couch" + " "+ 'love,'+ ' '+ dog
var whoPeed = couch('leroy');
console.log(whoPeed)


