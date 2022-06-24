//---------------------------------- Functions --------------------------------- //
//----------------------------- returning functions ---------------------------- //



'use strict';

//! THE PURPOSE OF THE GREET FUNCTION IS TO HAVE MANY GREETINGS AVAILABLE, 
//! TO USE WITH AS MANY NAMES AS YOU WISH



/// a function that stores a greeting and returns a function with the greeting stored



const greet = function(greeting) {


    /// this function strores the passed greeting and then waits for the name to be called

    return function(name) {

        console.log(`${greeting} ${name}`);

    }
}



greet('hey');


//! greet('hey') is just a function with hey stored inside



/// now call the function with a greeting, the variable is the returned function below:


const greetGday = greet(`G'day`);


//! greetGday is now : function(name){console.log(`G'day ${name}`)}



/// now call the greetGday function with a name


greetGday('Mark');


// G'day Mark


greetGday('Jarvie');

// G'day Jarvie




//!  greet('hello') is now a function, so can be called as a function with an arguement

greet('Hello')('Dave');


// Hello Dave





/// re-write greet function as arrow function returning an arrow function



const greetArrow = greeting => name => console.log(`${greeting} ${name}`);


greetArrow('Whats up')('Bezza')



