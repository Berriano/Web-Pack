'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


// ------------ IIFE (Immediatley Invoked Function Expressions) ---------------- //



//! a function that is only executed once and never again



const runOnce = function(){

	console.log('This can run again');
}

runOnce();


//! can still be called again



/// for a function that can only be called once



//! dont assign a variable or give it a name


///? 	 function(){

///? 	 	console.log('This will never run again');
///? 	 }



//! then wrap in parentheses



///?	 (function(){

///?	 	console.log('This will never run again');
///?	 })



//! Then add parentheses () to the end


		(function(){

			console.log('This will never run again');
		})();



/// same with arrow function



(() => console.log('This arrow function will never run again'))();


//! same principle as above




/// Keeping variables secure inside IIFE - Data Encapsulation


//! All data encapsulated in side of scope is private;

//! the scope restricts access to IIFE variables

const year = 2021;


(function(){

const myPrivateBirthYear = 1976;

console.log(`My age is ${year - myPrivateBirthYear} years old`);

})();



//! myAge variable cannot be accessed anywhere in code
//! but year can as its part of the global scope


// console.log(myPrivateBirthYear);

///? myPrivateBirthYear is not defined




///   Variables declared inside a block cannot be accessed from outside
///   unless var is used  



{

const insideInside = `I'm logged from inside`;

const insideOutside = `I'm logged from outside`;


var insideOutsideVar = `I'm logged from ouside with var`


console.log(insideInside);

}


///? I'm logged from inside


// console.log(insideOutside);


//! Uncaught ReferenceError: insideOutside is not defined



//! Can access var = variables from outside block


console.log(insideOutsideVar);


///? I'm logged from ouside with var



