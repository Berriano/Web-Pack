'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


			// ------------------------- Closures -------------------------- //


									// ------- Closure challenge 2 -------- //




///?	1. Take the IIFE below and at the end of the function, attach an event listener that
///? 	changes the color of the selected h1 element ('header') to blue, each time
///? 	the body element is clicked. Do not select the h1 element again!



(function () {

	const header = document.querySelector('h1');

			header.style.color = 'red';


	//! once h1 turns red, this function is removed from call stack


				document.querySelector('body').addEventListener('click', 
				
						function(){ 


	//! yet this function still has access to the header variable, which is now gone as
	//! it was removed when the function was removed from the call stack


									header.style.color = 'blue';})
		}
	)();


//! 8/10





