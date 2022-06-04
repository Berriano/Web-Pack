'use strict';


// -------------------------------- Array Practice ------------------------------ //


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

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const accounts = [account1, account2, account3, account4];


// ---------------------------------------- ---------------------------------------- //





/// total all deposits



const allMoveDeps = accounts.flatMap(acc => acc.movements)
														.filter(mov => mov > 0)
														.reduce((acc,curr) =>  acc + curr,0);

console.log(`$ ${allMoveDeps}`);




/// deposits at least 1000




const depThousand = accounts.flatMap(acc => acc.movements)
														.filter(dep => dep >= 1000).length;


console.log(depThousand);


/// same using reduce



const sameWithReduce = accounts

										.flatMap(acc => acc.movements)
									
//! if the current value is over 1000, add 1 to count, else dont										

										.reduce((count,curr) => (curr >= 1000 ? ++count :count ) ,0	);

console.log(sameWithReduce);						





/// use reduce to create a new object of deposits and withdrawals





//! use either variable or destructure straight away


// const sums = accounts

const {deposits, withdrawals} = accounts

						.flatMap(acc => acc.movements)


						.reduce((sums, curr) => {


//! if current value is over 0, initial value deposits object + current value


						curr > 0 ? sums.deposits += curr


//! else add cuurent value to sums.withdrawals 


											: sums.withdrawals += curr;


							return sums;
						}, 
	

//! initial value is set to an object, which can be accessed using accumalator parameter

						{deposits: 0 , withdrawals: 0} );



// console.log(sums);


///?  deposits: 25180, withdrawals: -7340}


console.log(deposits, withdrawals);


///?   25180   -7340



/// convert string to capitalization with exceptions




const convertTitleCase = function(title){



//! create a function that takes a string and capitalizes first letter



	const capitalization = str => str[0].toUpperCase() + str.slice(1);



	const exceptions = ['a', 'an' , 'the' , 'but', 'on', 'in', 'or', 'with', 'and'];




	//! checks whole string argument and converts each element based on titlecase i.e....
	

	//! converts to whole string to lowercase
	//! splits it by space
	//! on each element runs map function,
	//! then joins whole string back toghether based on map function
	//! then runs the captilization function again on the return of the map function and....
	//! converts the first letter to uppercase




	const titleCase = title.toLowerCase().split(' ')


	//! if current word is in exceptions array the return that word


										.map(word => exceptions.includes(word) ? word 


	//! else use function on the word


										:	capitalization(word))


	//! and join array back to a string using space
	

										.join(' ')
																	
	;

//! converts returned string from map to first word uppercase


	return capitalization(titleCase);


};

console.log(convertTitleCase('The hunger games'));
console.log(convertTitleCase('The HunGer GAmes tWo'));
console.log(convertTitleCase('THE hunger GAMES thrEE'));
console.log(convertTitleCase('The and hunger AND gAMES'));