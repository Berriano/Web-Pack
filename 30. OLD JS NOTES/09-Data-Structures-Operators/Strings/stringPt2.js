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



// -- toLowerCase() -- //


const airlineLower = airline.toLowerCase();

// console.log(airlineLower);

///? 	tap air portugal


// -- toUpperCase() -- //


const airlineUpper = airline.toUpperCase();

// console.log(airlineUpper);


///? TAP AIR PORTUGAL



/// Fix capitalization in name 


const myName = 'barTHOlemEW';


//! first step is always to convert everything to lowercase


const convertName = myName.toLowerCase().slice(1);


//! artholemew

const fixName = myName[0].toUpperCase() + convertName;

//! myName[0] = b to uppercase = B  + artholemew = Bartholemew

// console.log(fixName);


/// function to Fix capitalization in name 


const fixCapitals = function(name){


const newName = 	name.toLowerCase().slice(1);
const fixedName =	name[0].toUpperCase() + newName;
	return fixedName;

}


// console.log( fixCapitals('MarK'));
// console.log( fixCapitals('daVId'));
// console.log( fixCapitals('jaRVIE'));




/// Comparing emails


//! compare a login email to its email name

const email = 'helloberry.email.com';

const loginEmail = '  HElloBeRRy.email.com    ';

const lowerEmail = loginEmail.toLowerCase();


// -- trim() -- //

//! continued from above

//! use trim to remove whitespace from start and end 


const trimmedEmail = lowerEmail.trim();


// console.log(trimmedEmail);


///? helloberry.email.com



/// chaining string methods


const normalizedEmail = loginEmail.toLowerCase().trim();


///? helloberry.email.com


// 	normalizedEmail === email ? console.log('You are logged in') 
// 												 		: console.log('Wrong email.... Try again!!');



//! ES6 has trimStart() and trimEnd()




// -- replace() -- //


//! replace only replaces first occurance


const priceGB = '£299,999';

// console.log(priceGB);

///? £299,999

//! use chaining as a string is returned

const priceAU = priceGB.replace('£', '$').replace(',','.');

// console.log(priceAU);

///? $299.999




/// replace entire words


//! replace only replaces first occurance


const announcement = 'All passengers report to boarding door 23. Boarding door 23!';

// console.log(announcement);

///? All passengers report to boarding door 23. Boarding door 23!



const replaceFirstDoor = announcement.replace('door', 'gate');

// console.log(replaceFirstDoor);

///? All passengers report to boarding gate 23. Boarding door 23!




// -- replaceAll() -- //

//! continued form above


const replaceAllDoors = announcement.replaceAll('door', 'gate');

// console.log(replaceAllDoors);

///? All passengers report to boarding gate 23. Boarding gate 23!





// ------------- Boolean Methods -------------- //





// -- includes() -- //


const newPlane = 'Airbus A320neo';


const planeIncludes = newPlane.includes('A320');

// console.log(planeIncludes);

///? true


const planeNotIncludes = newPlane.includes('Boeing')

// console.log(planeNotIncludes);

///? false





// -- startsWith() -- //



const planeStartsWith = newPlane.startsWith('AirBus');

// console.log(planeStartsWith);

///? true




/// Check if plane belongs to new airbus family

//! new airbus family starts with 'Airbus' and ends with 'neo'.

// const newPlane = 'Airbus A320neo';


// newPlane.startsWith('Airbus') && newPlane.includes('neo') 
// 															 ? console.log('Welcome to the family') 
// 															 : console.log('Not part of the family');


//! OR......


// -- endsWith() -- //


//! replace includes() with endsWith()


//	 newPlane.startsWith('Airbus') && newPlane.endsWith('neo') 
// 																 ? console.log('Welcome to the family') 
// 																 : console.log('Not part of the family');



/// function for checking plane


const planeChecker = function(aeroplane){

	aeroplane.startsWith('Airbus') && aeroplane.endsWith('neo') 
	? console.log('Welcome to the family') 
	: console.log('Not part of the family');

}

//! check with function calls

// planeChecker('Airbus 342neo');
// planeChecker('Airbus 342trinity');
// planeChecker('Boeing 747');
// planeChecker('Airbus 320neo');


/// practice exercise


/// check items of baggage


const checkItems = function(item){

//! IMPORTANT - convert everything to lowercase!!

const items = item.toLowerCase().trim();

items.includes('knife') || item.includes('gun') 
													? console.log('Are you mad, arrest this person!!')
													: console.log('Welcome Aboard');


}

// checkItems('Guns and ammo with a knife');
// checkItems('socks and pants');
// checkItems('choccys and a swiss army Knife');



