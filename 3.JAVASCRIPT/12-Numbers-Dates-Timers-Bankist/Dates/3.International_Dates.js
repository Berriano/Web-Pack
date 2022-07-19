// ---------------------------- International  ---------------------------- //
// ------------------------------   Dates  -------------------------------- //



'use strict';


/// Date and time without API 



const labelDate = document.querySelector('.date');
const labelDateUS = document.querySelector('.date-US');
const labelDateGB = document.querySelector('.date-GB');


const now = new Date();


const minute = `${now.getMinutes()}`.padStart(2, 0);;

const day = `${now.getDate()}`.padStart(2, 0);

const hour = `${now.getHours()}`.padStart(2, 0);

const month = `${now.getMonth() + 1}`.padStart(2, 0);

const year = now.getFullYear();


const date = `${day}/${month}/${year}  Time: ${hour}:${minute}`


labelDate.textContent = date;





//--------------------------- Experimenting with API ---------------------------- //




// -------- Adding the date ----------- //



const nowAPI = new Date();



/// INTL.DateTimeFormat() function


//! Pass in the language then country as a string e.g 'en-US' 



labelDate.textContent = new Intl.DateTimeFormat('en-AU').format(nowAPI);




// --------- Adding the time ---------- //



/// create an object and add time properties set to numeric


const options = {

	hour: 'numeric',
	minute: 'numeric',


	//! This will only add the time, so need to add date properties


	day: 'numeric',

	///  can set the month/year/day to long or 2-digit / or numeric

	month: 'long',
	year: 'numeric',
	weekday: 'long'

}


/// add the options object to the DateTimeFormat as a second argument 


labelDateUS.textContent = new Intl.DateTimeFormat('en-US', options).format(nowAPI);





// ------------- Getting the info from the browser ------------------ //



/// to get the browser information, set a variable to navigator.language



const locale = navigator.language;


console.log(locale);


// en-US


/// then use the variable instead of setting language manually



labelDateGB.textContent = new Intl.DateTimeFormat(locale, options).format(nowAPI);