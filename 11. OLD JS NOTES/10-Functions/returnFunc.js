'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


// --------------------- Functions Returning Functions ------------------------- //


const greet = function(greeting){

	return function(name){
		console.log(`${greeting} ${name}`);
	}
}

//! greeterHey = Hey(function(name) {	console.log(`Hey ${name}`})


const Hey =  greet('Hey');


//! greet returns a new function that is stored into greeterHey
//! greeterHey is now just the function(name){console.log(` Hey ${name}`);
//! so when you call greeterHey(mark) mark becomes name

Hey('Mark')  

///? Hey Mark

Hey('Jarvie')

///? Hey Jarvie



//! can all be done in one already

greet("Gday")("Sophie");

///? Gday Sophie


/// arrow funtion

const arrowGreet = greeting => name => console.log(`${greeting} ${name}`);


arrowGreet("Good morrow")("Fair maiden");


///? Good morrow Fair maiden
