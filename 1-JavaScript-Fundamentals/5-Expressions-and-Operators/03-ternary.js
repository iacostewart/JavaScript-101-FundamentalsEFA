/*
            Ternary 

            the Ternary operator is shorthand method of writing conditions statments (if/else).. the syntax for ternary 
            operator is: 

            (x > ) ? y : z 
 
                    in this example the conditional statment is x > 0 . if the conditional statment is true then the value y will print to the console. 
                    if it is false, the value z will print instead. this is the same as.. 

                    if (x > 0) {
                        return y
                    } else {
                        return z 
                    }


            Using Multiple Ternary Operators 

    you can string together several ternary operator statements in place of if/else statments.. 

    example.. 
            */
           //conditional statment 

           if (x == 0) {
            console.log("hello");
        } else if (x < 0) {
            console.log("hi");
        } else if {
            console.log("goodbye");
        }
        

        // Ternary operators 

        console.log((x ==0 ) ? 'hello' : (x < 0) ? "hi" : "goodbye");

                // in this example if the first is true (x == 0 ) the "hello" is returned.. if its false it moves on to the seccond 
                    // ternary operator if x is less than 0 the first option 'hi' is returned, if it is greater than 0 'goodbye' is returned. 