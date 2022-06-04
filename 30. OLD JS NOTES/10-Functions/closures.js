'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


			// ------------------------- Closures -------------------------- //




/// **  A closure makes a function remember all the variables that existed at the 
///	functions birthPlace- secureBooking is the birthPlace of the returned function



//! A closure is a function that preserves the outer scope in its inner scope.


//! Closures give you access to an outer function’s scope from an inner function



//! A closure gives a function access to its parent function, 
//! even after the parent function has returned.
//! The function keeps a reference to its ouuter scope, which preserves any variables
//! in that function



///  Creating a closure 



//! function to create a closure


const secureBooking = function(){

		let passengerCount = 0;

				return function(){

						passengerCount++;

							console.log(`${passengerCount} passengers`);
				
		}

}


const booker = secureBooking(); 



//! booker is essentially the value of this function


///? 			function(){

///?				passengerCount++;

///?						console.log(`${passengerCount} passengers`);



//! every time securebooking is called - passengerCount++ is called,
//! but let passengerCount isnt, so it doesnt reset, but gets added to


//! closure doesn't reset the passengerCount as its preserved in booker,
//! because the function booker calls has access to passengerCount in its scope



// booker()  ///? 1 passengers
// booker()  ///? 2 passengers
// booker()  ///? 3 passengers
// booker()  ///? 4 passengers



/// Closure examples



let innerFunc;

const mainFunc = function(){

							const preservedVar = 45;

										innerFunc	=	function(){

												console.log( preservedVar * 2 );

				}
};



//! Calling mainFunc assigns 45 to preservedVar,
//!	 and sets the global innerFunc variable to the innerfunc function


// mainFunc();

//! mainFunc has now finished its execution

//! now, we call innerFunc(), which keeps a reference to the preservedVar variable


// innerFunc();

//! the preservedVar is referenced in the innerFunc, 
//!	so even though the mainFunc has finished execution, we can still access it!!


const secondAssign = function(){

							const preservedVar2 = 500;

										innerFunc = function(){

												console.log(preservedVar2 *3);

								
								}
};



// mainFunc();



// innerFunc();


// console.dir(innerFunc);


///?  Closure (mainFunc) {preservedVar: 45}


//! re-assigning innerFunc


// secondAssign();


// innerFunc();



/// inspect variable environment



// console.dir(innerFunc);


//! closure re-assigned to preservedVar2


///? 	Closure (secondAssign) preservedVar2: 500






/// Example:  Passengers boarding using setTimeout() and closure 



//! setTimeout example


///? requires a function to execute, after the specified timer (1000 = 1 second)


/*
setTimeout(function(){

			console.log('TIMER');

}, 2000)

*/

/// set a variable outside of the scope chain and inside


const perGroup = 1000;


//! the function will use the internal variable  there isnt one ,
//! it will search up the scopre chain until it find one



const boardPassengers = function(numPassengers, wait){

						const perGroup = numPassengers / 3;

							setTimeout(function(){

								console.log(`We are now boarding ${numPassengers} passengers`);

								console.log(`There are 3 groups, each with ${Math.round(perGroup)} passengers`);

							}, wait * 1000)


									console.log(`Will start boarding in ${wait} seconds`);


};

//! board 3 groups with 60 passenger , shown after 5 seconds

// boardPassengers(180,5);


///? setTimeout creates a closure over the boardPassengers variable 
///? (perGroup,numPassengers and the wait parameters), so it can still access them
///?  after the function call has ended, and has been removed from the call stack.


// ------- Closure challenge 2 -------- //




///?	1. Take the IIFE below and at the end of the function, attach an event listener that
///? 	changes the color of the selected h1 element ('header') to blue, each time
///? 	the body element is clicked. Do not select the h1 element again!



(function(){
	
	const header = document.querySelector('h1');
	
	header.style.color = 'red';

	header.addEventListener('click', function(){
		header.style.color = 'blue';

	})
})



