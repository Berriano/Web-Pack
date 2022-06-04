'use strict';




// -------------------------------- Array filter() ------------------------------- //



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


//! Filter works the same as map() with parameters and callback function
//! and returns a new array



/// Filter for deposits only


//! filter will only return values that pass the condition (or = true)
//! and returns a new array of those values

///? As a normal function


const filterDeposits = movements.filter(function(mov){

							return	mov > 0;
	}
);


///? as an arrow function


const arrowFilterDeposits = movements.filter(mov =>	mov > 0);


// console.log(filterDeposits);
// console.log(arrowFilterDeposits);




/// challenge to create an array of withdrawals


const withdrawals = movements.filter(mov => mov < 0);


// console.log(withdrawals);




// -------------------------------- Array reduce() ------------------------------- //


movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//! reduce() works slightly different than map and filter;

//! The 1st parameter in reduce is the accumalator (snowball), or sum
//! The 2nd parameter is the current value;

//! So, the accumalator + current value;

//! The 3rd is a index and 4th the array

//! after the function code you can specify specified an initial value 

//! ACCUMALATED WILL ALWAYS BE 0 ON FIRST ITERATION UNLESS SPECIFIED


//! First question when using reduce should be - 
//!  	"WHAT IS THE PURPOSE OF THE ACCUMALATOR VALUE ?? "


/// normal function for reduce()



console.log(`------------------------ Normal function ----------------------`);


const reduceMovements = movements.reduce(function(acc, curr, i ,arr) {
										
// console.log(

// 	`Current iteration : ${i+1}\n Current value : ${curr} \n Total so far : ${acc+curr}`
// 				); 
				
				return acc+curr ; } , 0 );

// console.log(reduceMovements);


console.log(`--------------------- Basic Arrow Function -------------------`);





/// Basic arrow function




const basicArrow = movements.reduce( (acc,curr) => acc + curr , 0 );


// console.log(basicArrow);




/// arrow function with cLogs




console.log(`---------------- Arrow Function with cLogs ------------------- `);

// console.log(movements);

const arrReduce = movements.reduce(
	
	(acc, curr, i) => {
		
		// console.log(`Iteration: ${i}: Accumalated : ${acc}\n `);

		return acc + curr ;} ,0

		)

// console.log(arrReduce);



/// *** See Bankist app for movement/ balance totals (calcPrintBalance)




/// Find maximum value using reduce()



movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



const maxMovements = movements.reduce(

	
	( acc, mov )   =>  	mov > acc ?	 mov	:  acc	)


// console.log(maxMovements);




// ----------------------------- Chaining these methods ----------------------------- //


movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//! so long as the callback function returns an array, methods can be chained



/// convert deposits to GBP



let toGBP = 0.55



const totals = movements.filter( mov => mov > 0)
												.map( dep => dep * toGBP)
												.reduce((acc, curr, i, arr) => acc + curr, 0);

//! reduce() returns the value(not an array), so chain stops!

// console.log(totals);

																

/// Debugging


//! When Debugging , curly braces need to be used as you will be
//! running more than 1 line of code, also then return the outcome


toGBP = 0.55


const totalsDebug = movements.filter( mov => mov > 0)


//! Use array parameter to debug as you go;

												.map( (dep, i, arr) => {


//! The log will show the current array map is iterating;

													// console.log(arr);


//! then continue to code block

													return dep * toGBP}

												)
												.reduce((acc, curr, i, arr) => acc + curr, 0);


// console.log(totalsDebug);