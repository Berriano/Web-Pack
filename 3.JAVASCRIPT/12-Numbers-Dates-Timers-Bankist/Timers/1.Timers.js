// -------------------------------  Timers ------------------------------- //
// ------------------------------- ------- ------------------------------- //



'use strict';




// --------------------------- setTimeout() ----------------------------- //






/// callback function is the 1st parameter, and time in milliseconds is 2nd parameter



//! 1 sec is 1000 milliseconds


// setTimeout(() => console.log('hey'), 2000);


//! code continues to execute while timer is counting down e.g


//! this will run once, after the specified time



/// 'waiting' will be logged to the console 3 seconds before 'hey' arrives


console.log('waiting....');




// ----- Using parameters and arguments with setTimeout() ---- //



/// set the parameters, then any arguements passed after the time will be the parameters


// setTimeout((engineSize, color) => {

// 	console.log(`Here is your Ferrari with the ${engineSize} litre engine,
// and in ${color}`);
// }, 4000, 5, 'red');




// --------- Using clearTimeout() ---------- //




const ingredients = ['ham',
	'cheese',
	'olives'
];



const pizzaTimer = setTimeout((ing1, ing2, ing3) => {

	console.log(`Here is the pizza with ${ing1},${ing2} and ${ing3}`);

}, 3000, ...ingredients);


/// so if ingredients includes olives - stop the timer and dont execute


if (ingredients.includes('olives')) {

	clearTimeout(pizzaTimer)
}






// --------------------------- setInterval() ------------------------------ //




/// the timer on the setInterval method executes the callback function every amount of
/// milliseconds set


/// show the time every minute in the console


setInterval(

	function () {

		const now = new Date();

		console.log(now);
	}, 60000
)