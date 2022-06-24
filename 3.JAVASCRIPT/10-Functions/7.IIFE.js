//---------------------------------- Functions --------------------------------- //
//----------------------------------   IIFE    --------------------------------- //


'use strict';



/// immediately invoked function expression is function that only runs once 


/// if it was a normal function:


const runOnce = function(){
	
	console.log('I will run once(when called), and never run again');
	
}


runOnce();

//! this CAN be run again if we wanted




//----------------------------------   IIFE    --------------------------------- //



/// to run a function once WITHOUT it being saved anywhere:



//! wrap whole function in parenthese to stop error


(function(){
	
	console.log('I will run once(when called), and never run again');

	
	//! to call it - add parentheses to the end

})();




/// arrow function example 


(()=> console.log('I will run once(when called), and never run again'))();





/// any content inside an IIFE cannot be accesed outside the function(scope)


//! is private(encapsulted)


(function(){

	const add2 = 2+2;

	console.log(add2);

})();


// 4


///? const addAnother2 = 2 + add2;

// add2 is not defined



//! IIFE are not used much to protect variables anymore as craeting a block works


{

	const add4 = 4+4;

	console.log(add4);

}

// 8


///? console.log(add4);


// add4 is not defined


