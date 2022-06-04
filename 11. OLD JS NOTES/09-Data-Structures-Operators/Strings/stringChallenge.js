'use strict';

// ----------------------------------- STRINGS ------------------------------------ //


///? inserted DOM elements

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));


 ///? selected elements

const btn = document.querySelector('button');


btn.addEventListener('click',function(){


	//! assign text in text area to a variable

	
	const text = document.querySelector('textarea').value;


	
//! split all text by newline( where there is a new line)


	const rows = text.split('\n');


	
	//! loop thru the rows applying the code block to each row
	//! need index and row to be able to add ticks

	for(const [i,row] of rows.entries()){


	
	//! destructure into 2 variables (first word and second word),
	//! the apply code of - convert to lowercase / trim whitespace from both ends/
	//! split into 2 by replacing underscore with a whitespace


	const [first, second] = row.toLowerCase().trim().split('_');



//! output the string - firstwordSecondword - 
//! replacing firstletter to firstletter uppercase
	
	const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;



//! use padding to add ticks ✅ with the index i+1

	console.log(`${output.padEnd(20)}${`✅`.repeat(i+1)}`);

		}
	 }
	)


// ------------------------- String Practice (its needed) ------------------------- //




const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const upperFunc = str =>	str.slice(0,3).toUpperCase()




	for(const flight of flights.split('+')){

		const [type,from,to,time] =  flight.split(';');

		const finalStr = `${type.startsWith('_Delayed') ? '🔴' :' '}${type.replaceAll('_', ' ')} ${upperFunc(from)} ${upperFunc(to)} (${time.replace(':', 'h')})`.padStart(50);
		console.log(finalStr);
}









