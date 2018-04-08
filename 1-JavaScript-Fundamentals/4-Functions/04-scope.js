/*  
        SCOPE...  

    Scope refers to the variables you have access to at various 
    levels in your application.  the  { } are there to help you 
    define scope in your files. There are two important types of scope 

    1) local 
        

    2) global
    A variable declared outside a function becomes a Global, it can
        be accessed anywhere.. 

 */
 

 // Global 

 var carName = 'Volo';

// code here can use the carName.. 

function myFunction(){
    // code inside this function can use the variable
    carName = 'lamborghini';
    console.log(carName);
}
