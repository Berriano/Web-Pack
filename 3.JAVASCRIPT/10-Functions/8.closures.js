//---------------------------------- Functions --------------------------------- //
//----------------------------------  Closures --------------------------------- //


'use strict';

//! a closure makes a function remember all the variables that existed at the functions birthplace, and keeps them secure


const secureBooking = function() {

    let counter = 0;

    return function() {

        counter++;

        console.log(counter);

    }
}




const counterPlusOne = secureBooking();


//! counterPlusOne is the returned - function() counter++ ; 

//! BUT - it has to remember the counter variable to be able to work,
//! so it stores it as the value it knows each time:

//! counter = 0 +1
//! counter = 1 +1
//! counter = 2 +1

//! THIS IS THE CLOSURE


counterPlusOne();

// 1

counterPlusOne();

// 2 

counterPlusOne();

// 3



/// check scopes in cl.dir for the variable environment


console.dir(counterPlusOne);




// ---------------------------- Youtube explanation ------------------------------ //


//! A CLOSURE IS A FUNCTION HAVING ACCESS TO THE PARENT SCOPE, 
//! EVEN AFTER THE PARENT FUNCTION HAS CLOSED!!



///  global scope


let x = 1;


const parentFunction = function() {


    /// local scope of function

    let myValue = 2;


    console.log(x);

    console.log(myValue);



    const childFunction = function() {


        console.log(x += 5);

        console.log(myValue += 1);


    }


    return childFunction;


}

parentFunction();

// 1 x;

// 2 myValue;



const result = parentFunction();



/// result is now the returned childFunction


result();

// 6 , 3

result();

// 11 , 4

result();

// 16 , 5


// ------------------------ Best example of closure ------------------------ //




const credits = (function(num) {

    let credits = num;

    console.log(`initial credits: ${credits}`);


    return function() {

        credits--;

        if (credits > 0) console.log(`playing game, ${credits} remaining`);

        if (credits <= 0) console.log(`${credits} remaining: Game over!!`);

    }
})(3);


credits();

credits();

credits();




// --------------------- board passengers closure function --------------------- //




const boardPassengers = function(numPass, wait) {

	const perGroup = numPass / 3;


	setTimeout(function() {
			console.log(`We are now boarding all ${numPass} passengers`);
			console.log(`There are 3 groups of ${perGroup} passengers`);
	}, wait * 1000)


	console.log(`Start boarding in ${wait} seconds`);

}



boardPassengers(180, 3)


