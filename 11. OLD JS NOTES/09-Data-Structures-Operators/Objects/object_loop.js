'use strict';


const foodTypes = ['fish', 'vegan', 'dessert', 'steak']

const currentOwnerInfo = {

	owner: 'Mark Berry',

	previousRestaurants:{

		[foodTypes[0]]:'Berrys Plaice',
		[foodTypes[2]]:'Berrys and cream'

	}
};

/// openingHours pulled out for lecture

const openingHours =  {
	thu: {
		open: 12,
		close: 22,
	},
	fri: {
		open: 11,
		close: 23,
	},
	sat: {
		open: 0, // Open 24 hours
		close: 24,
	},
};





// ------------------------------- Object Looping -------------------------------- //


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


//! **  All keys, values and ebtries turn the Object into an Array  **



/// Object.keys() 

//! property names


//! use for..of loop on object, insert the object into the keys() method

for (const day of Object.keys(openingHours)){

// console.log(day);

};

///? thu , fri , sat



/// set Object.keys() to a variable



const properties = Object.keys(openingHours);

// console.log(properties);

///? returns an array of the property names  ['thu', 'fri', 'sat']



//! So you can now use the properties variable to loop over

for (const day of properties){

	// console.log(day);
}



/// Build a string using the Object and for...of loop


// const properties = Object.keys(openingHours);


let openStr = `We are open on ${properties.length} days: `;


for ( const day of properties){

	openStr += `${day},`;
	
//! so openStr = We are open on 3 days: fri, - 1st loop +
//!  							We are open on 3 days: fri, sat, 2nd loop +
//!                We are open on 3 days: fri, sat, sun,  3rd loop
//!  END LOOP

}

// console.log(openStr);



/// Object values

//! property vlues


for (const day of Object.values(openingHours)){

	// console.log(day);
}


//! OR...


const values = Object.values(openingHours);

for (const vals of values){

	console.log(vals);

}


/// Object entries

//! property names and values together


const entries = Object.entries(openingHours);

// console.log(entries);

// for (const x of entries){

// 	console.log(x);


// }


/// DESTRUCTURING ON OBJECT FOR...OF LOOP  TO GET THE OBJECT PROPERTY AND VALUES

//! REMEMBER : entries turn object into an array(except the  contained Object)
//! so when destructuring, it will be an array, so use sq brackets on outer array
//! but curly brackets on inner Object - (always console.log to check)

// const entries = Object.entries(openingHours);

// console.log(entries);


// for (const [day,{open,close}] of entries){

// 	console.log(`We open on ${day} at ${open}:00 hrs and close at ${close}:00 hrs`);
// }


// ---------------------------- From challenge ------------------------------- //


const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	// x:"draw",
	players: [
	[
	'Neuer',
	'Pavard',
	'Martinez',
	'Alaba',
	'Davies',
	'Kimmich',
	'Goretzka',
	'Coman',
	'Muller',
	'Gnarby',
	'Lewandowski',
	],
	[
	'Burki',
	'Schulz',
	'Hummels',
	'Akanji',
	'Hakimi',
	'Weigl',
	'Witsel',
	'Hazard',
	'Brandt',
	'Sancho',
	'Gotze',
	],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
	'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
	team1: 4.33,
	x: 2.55,
	team2: 2.5,
	},
	};




///? 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

//  Odd of victory Bayern Munich: 1.33
//  Odd of draw: 3.25
//  Odd of victory Borrussia Dortmund: 6.5

///? Get the team names directly from the game object, don't hardcode them 
///? (except for "draw").


const winners = Object.entries(game.odds);
// console.log(winners);

// for (const [team,odd] of winners){


// 	console.log(game[team] ? `Odd of victory  ${game[team]} : ${odd}`
// 												 : `odd of draw ${odd}`);


// }

///?  4. Bonus: Create an object called 'scorers' which contains the names of the
///?  	players who scored as properties, and the number of goals as the value. 


const players = Object.values(game.scored);

let scorers = {};

for ( const player of players){

			if(scorers[player]){

//!	 if scorers include current player

			scorers[player]++;

//!	then add 1
	}

			else scorers[player] = 1;

//! else scorers.player = 1

}

console.log(scorers);

