'use strict';




// -------------------------------- Array map() ------------------------------- //



const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};



const accounts = [account1, account2];


let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



//! map() applies the callback function, then returns a new array



/// Convert currency using map()


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/// exchangeRate variable


const audToGBP = 0.55;


/// map() method for converting currency

//! loops over each movements.element(mov) and multiplies it by 0.55,
//! then returns the outcome to a new array;

//! rounding is just an extra for readabilty


const covertedToGBP =  movements.map( (mov) => Math.round(mov * audToGBP) );


/// returns new array


// console.log(movements);

//! original stays intact

///? [200, 450, -400, 3000, -650, -130, 70, 1300]


// console.log(covertedToGBP);

//! returns new array

///? [110, 248, -220, 1650, -358, -71, 39, 715]



/// map() also uses index and array as parameters, same as forEach


//! dont c.log , we want to just return the values to the new array map() creates


movements = [200, 450, -400, 3000]


			const movDescriptions =  movements.map(
				
					(mov,i) => 

					`Movement ${i+1} : You ${ mov > 0 ? 'deposited' : 'withdrew' } ${mov}`
				
			)


// console.log(movDescriptions);


///?  ['Movement 1 : You deposited 200', 'Movement 2 : You deposited 450',
///?  'Movement 3 : You withdrew -400', 'Movement 4 : You deposited 3000']


