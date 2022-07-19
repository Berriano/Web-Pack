// -------------------------------  Dates -------------------------------- //
// ----------------------------   Operations  ---------------------------- //



'use strict';



// -------------  Subtracting dates to calculate number of days ---------- //



const future = new Date(2022, 11, 31, 23, 59, 59);




/// convert to a number will transform it into a timestamp


///? const numFuture = Number(future);


//! easier way


const numFuture = +future;


console.log(numFuture);


// 1672495199000




// -- Use a function to calculate -- //


let oneYear = new Date(2023, 11, 31, 23, 59, 59);


//! to convert to minutes - divide by (1000 * 60))
//! to convert to hours - divide by (1000 * 60 * 60))
//! to convert to days - divide by (1000 * 60 * 60 * 24))

//! USE MATH.ABS SO IT DOESNT MATTER WHICH VALUE IS FIRST




const calcDaysPassed = function (date1, date2) {

	let sum = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));

	return sum;

};




/// call the function using the 2 dates


const calcDays = calcDaysPassed(future, oneYear);


console.log(calcDays);


// 365 




/// call the function using the 2 string dates


///? how many days until my Bday


const numDaysBday = calcDaysPassed(new Date(2023, 1, 21, 23, 44), new Date());


console.log(numDaysBday);


// 218.49701390046297