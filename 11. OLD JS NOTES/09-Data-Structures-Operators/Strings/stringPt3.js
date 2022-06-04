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


// --------------------------- String Methods() Pt3 --------------------------------- //




// -- split()-- //


//! split string into multiple parts based on a divider



const str = 'A+very+nice+string';

const splitStr = str.split('+');


//! divide string by +


// console.log(splitStr);


//! returns an array of strings separated from original string using the +


///? 	['A', 'very', 'nice', 'string']



//! split name by space separator


const myName = 'Mark Beresford';

const splitName = myName.split(' ');


// console.log(splitName);


//! returns an array of 2 elements - split by the space string


///? ['Mark', 'Beresford']




/// Use destructuring with split() method



const [firstName, lastName] = myName.split(' ');


//! destructures the split array into its strings
//!  and assign to variables firstName and lastName.


// console.log(firstName, lastName);




// -- join() -- //


// const myName = 'Mark Beresford';


//! joins all parts of an array, by a string separator


const spacedName =  ['Mr', firstName, lastName.toUpperCase()].join(' ');


// console.log(spacedName);


///? 	Mr Mark BERESFORD


const dashedName =  ['Mr', firstName, lastName.toUpperCase()].join('-');


// console.log(dashedName);


///? 	Mr-Mark-BERESFORD



/// Function to capitalize name

//! creat an empty array outside the function to push elements to.


let arr =[];

const capitalizeName = function(name){

const nameSplit =	name.split(' ');

		for (const names of nameSplit){

			arr.push(names[0].toUpperCase() + names.slice(1));			
	}
};

capitalizeName('sophie rose beresford')

const joinedCapitalName = arr.join(' ');


// console.log(joinedCapitalName);


///?  Sophie Rose Beresford



/// using replace() instead of slice()



const replaceName = function(name){

	const names = name.split(' ');
	const newArr = [];

	for (const n of names){

			newArr.push(n.replace(n[0], n[0].toUpperCase()))
			}

	console.log(newArr.join(' '));

}



// replaceName('jarvie amparo beresford');




// ---------------------------------- Padding ------------------------------------- //



// -- padStart() -- //



//! padStart(total length of string, charachter to pad with to make the total length )

//! message is 14 characters long


const message = 'Go to gate 23!';


//! make string 25 characters long, so pad with 11 +'s


const paddedMessage = message.padStart(25, '+');


// console.log(paddedMessage);

///?	 +++++++++++Go to gate 23!


const berryName = 'Mark';


const myNameWithLotsOfDashes = berryName.padStart(50, '-');


// console.log(myNameWithLotsOfDashes);



// -- padEnd() -- //



//! padEnd (total length of string, charachter to pad with to make the total length )


const endPadName = berryName.padEnd(10,'+');

// console.log(endPadName);

///?  Mark++++++



/// using both together


//! padstart specifies the length of the pad with the current string
//! padEnd specifies the total length of the string, and fills what padstart hasnt,
//! with the specified character


///? padstart - make string 30 characters to the end of the current string
///? and fill with '/' character.

///? padEnd make the 30 characters now 40 characters and pad the end(last 10 characters),
///? with the '|' character


const bothPadded = berryName.padStart(30,'/').padEnd(40,'|');


// console.log(bothPadded);

///?  //////////////////////////Mark||||||||||




/// Practical example



/// hide creditcard digits



const maskCreditCard = function(number){



//! convert a number to a string
//! number + string = a string   e.g 11 + '11' = 1111

const str = number + '';


//! get last 4 characters of a string 

const last = str.slice(-4);

// console.log(last);

///? 5838


//! return the last string padded at the start with *, to the length of the str

return last.padStart(str.length, '*')

///? padstart(8, '*') make last 8 characters long and pad the start with **** , + 5838 


}

// console.log(maskCreditCard(44555838));  //! this is the example
// console.log(maskCreditCard(44555556878));
// console.log(maskCreditCard(4455555833543));
// console.log(maskCreditCard(445558234314378));





// -- repeat() -- //


//! repeat(number of times to repeat)


const weatherMessage = 'Bad weather...All Departures delayed...';

const repeatedWeatherMsg = weatherMessage.repeat(3);

//! makes 1 big string with same message repeated 3 times

// console.log(repeatedWeatherMsg);


///? Bad weather...All Departures delayed...Bad weather...
///? All Departures delayed...Bad weather...All Departures delayed...





/// repeat function


const planesWaiting = function(n){

	console.log(`There are ${n} planes waiting in line... ${`✈`.repeat(n)}`);
}


// planesWaiting(6);

///? There are 6 planes waiting in line... ✈✈✈✈✈✈

// planesWaiting(10)

///? There are 10 planes waiting in line... ✈✈✈✈✈✈✈✈✈✈

// planesWaiting(17)

///? There are 17 planes waiting in line... ✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈

