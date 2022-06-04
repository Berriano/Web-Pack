'use strict';

// ---------------------------------- For loop ------------------------------ //


/// standard for loop

for (let rep =1;rep<= 10 ; rep++){

///?	console.log(`Lifting weights repetition ${rep}`);
}

///? logs reps 1-10


/// Looping Arrays


const mark	= [
	'Mark',
	'Berry',
	2021 - 1976,
	'WebDev',
	['Barn','Brad','Dave'],
];

/// log all elements to console, with typeof variable

for (let i=0;i<mark.length;i++){

///? 	console.log(mark[i], typeof mark[i]);
}


/// pass the mark array element types to a new array


const types = [];


///?  for (let i=0;i<mark.length;i++){

///?  types[i] = typeof mark[i];
///?  }	
///?  console.log(types);


/// or the push. method (better way)


for (let i=0;i<mark.length;i++){

	types.push(typeof mark[i]);
}

///? console.log(types);


/// practical example

/// calculate ages by birthYear

const birthYears = [1998,2009,1976,1974,1944];

const ages = [];

for(let i=0;i<birthYears.length;i++){

	ages.push(2021 - birthYears[i]);
}

///? console.log(ages);



// ---- "Continue" and "Break" statements ---- //


// const mark	= [
// 	'Mark',
// 	'Berry',
// 	2021 - 1976,
// 	'WebDev',
// 	['Barn','Brad','Dave'],
// ];



//-- continue -- //
/*


for (let i=0;i<mark.length;i++){

/// if the typeof current element isnt a string
/// then continue but dont execute next code block
/// just continue to next loop iteration

	 if(typeof mark[i] !== 'string') continue;
	 {
/// execute this code if the typeof element is a string
		 console.log(mark[i], typeof mark[i]);
	 }
}	



// -- break -- //



for (let i=0;i<mark.length;i++){

	/// if the typeof current element isnt a string
	/// then stop
	
		 if(typeof mark[i] !== 'string') break;
		 {
	/// execute this code if the typeof element is a string until
	/// the loop hits an element that is not a string,
	/// then stop
			 console.log(mark[i],typeof mark[i]);
		 }
	}	

*/

// ---- looping backwards ---- //

/*


// const mark	= [
// 	'Mark',
// 	'Berry',
// 	2021 - 1976,
// 	'WebDev',
// 	['Barn','Brad','Dave'],
// ];

///? mark length = 5, but there is no index 5
///? so mark.length-1 = 4, so mark[4] is the start

for(let i = mark.length-1;i >= 0; i--){

	///? console.log(mark[i]);
}

/// loop inside a loop

for (let exercise = 1; exercise < 4; exercise++){

	console.log(`----------------Start Exercise ${exercise} -------------------`);

	/// loop inside loop(loop 2 is part of the first loop)

		for (let rep =1; rep < 6; rep++){

			console.log(`Lifting weigth rep ${rep}`);

			/// when finished first loop (1 above/ 6 inside loop), start loop 2 above
			/// then another 6 inside loop etc
		}
}

*/

//---------------------------------- While loop -------------------------------------- //


/// declare variable first

let rep = 1

/// set conditions for loop


/// how many times

while (rep <= 10){

/// what to do

	console.log(
		`Lifting weight rep ${rep}`
	);

/// how to increase

	rep++;
}



/// random dice roll

let dice = Math.trunc(Math.random() *6)+1;
console.log(dice);

/// so while the dice is not 6

while(dice !==6){

///log the statment to the console	

console.log(`you rolled a ${dice}`);


/// then reassign dice value for next loop

	dice = Math.trunc(Math.random() *6)+1;

/// if new dice is 6 log statment to console,
/// then start new loop(but dice will be 6 so it will stop)
/// because dice !==6 not be true

	if(dice === 6){
		console.log(`Its a ${dice} - Game Over`);
	}

}

/// if first iteration is 6 the loop will not run
/// so only use while loop when a counter is not needed

