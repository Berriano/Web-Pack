'use strict';

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';




// ----------------------------------- STRINGS ------------------------------------ //

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String



const airline =		'TAP Air Portugal';

const plane = 'A320';


// console.log(plane[0]);

///? A 

// console.log('B737'[0]);

///? B 

const airLength = airline.length;

// console.log(airLength);

///? 16 


// ------------------------------ String Methods() --------------------------------- //



// -- indexOf() -- //


//! case-sensitive

//! position a certain letter appears first in a string (zero-based)


const position = airline.indexOf('P');

// console.log(position);

///? 2 	(TAP Air Portugal)



const wordPosition = airline.indexOf('Air');

// console.log(wordPosition);

///? 4 	(TAP Air Portugal)



// -- lastIndexOf() -- //


//! position a certain letter appears last in a string (zero-based)


const lastPosition = airline.lastIndexOf('P');


// console.log(lastPosition);

///? 8 	(TAP Air Portugal)




// -- slice() -- //


const slicer = airline.slice(4);

// console.log(slicer);

//! returns a sub-string (new string)

///? Air Portugal 	(TAP Air Portugal) 



const slicerEnd = airline.slice(4,7);

// console.log(slicerEnd);

//! doesn't include end number value

///? Air




/// Extracting the first word


//! slice(0) for the start and indexOf - first occurance of - ' ' ;

const extract = airline.slice(0, airline.indexOf(' '));

// console.log(extract);



/// Extracting the last word


const lastExtract = airline.slice(airline.lastIndexOf(' ') +1 );

// console.log(lastExtract);

//! without the +1 it will add the space

///?  Portugal 	(TAP Air Portugal) 



/// slicing from the end

const endSlice = airline.slice(-3);

// console.log(endSlice);

///? gal	(TAP Air Portugal) 



/// slice from start point to end point

const partSlice = airline.slice(1,-1);

// console.log(partSlice);

///? AP Air Portuga		(TAP Air Portugal) 





/// Function to log if seat is an ailse seat or windows seat


// B and E are middle seats


const checkMiddleSeat = function(seat){

	const s = seat.slice(-1);
	
		s === 'B' || s === 'E' ? console.log('This is a middle seat 😋') 
													 : console.log('This is an ailse seat 😁');

};

//! function calls

// checkMiddleSeat('11A');
// checkMiddleSeat('12B');
// checkMiddleSeat('13C');
// checkMiddleSeat('14D');
// checkMiddleSeat('15E');





