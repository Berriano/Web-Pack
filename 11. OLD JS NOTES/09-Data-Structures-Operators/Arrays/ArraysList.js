'use strict';





// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



//----------------------------------------- ---------------------------------------//
//-------------------------- WHICH ARRAY METHOD TO USE ----------------------------//
//----------------------------------------- ---------------------------------------//



// ------------------------ TO MUTATE AN EXISTING ARRAY ------------------------ //




/// Add to original


///?	.push (to the end)

///?	.unshift ( to the start)


/// Remove from original


///?	.pop ( from end)

///?	.shift ( from start)

///?	.splice ( indexed start, end)


/// Others


///?	.revesre ( reverses )

///?	.sort ( sorts numerically or alphabetically )

///?	fill ( fills array)




//---------------------------- RETURN A NEW ARRAY ------------------------------ //



///? .map ( computes from originl using a loop)

///?	.filter( creates a new filtered version based on conditions)

///?	.slice( takes a slice from the original)

///?	.concat( adds one array to another creating a new array)

///?	.flat( flattens the original upto one layer deep)

///? .flatMap ( same as above adding a callback function)





// -------------------------------- ARRAY INDEXING ----------------------------- //



/// returns index

///?	 indexOf ( searches based on a value )

///? findIndex ( searches based on a condition )

/// returns element

///?	find ( searches and returns the array based on a condition in a callback) 






// --------------------------- TEST ARRAY RETURN BOOLEAN --------------------------- //


///?	includes( tests by value)

///?	some ( test condition with a callback for an element)

///?	every ( test condition with a callback for all elements)


/// transform into string

///?	join ( joins the array based on separator and returns a string)


/// transform to a single value


///? reduce (current plus next = total )


/// to just loop an array

///? forEach ( returns undefined, only for using callback functions on whole array)





// ---------------------------------------- --------------------------------------- //
// --------------------------------- Array methods -------------------------------- //
// ---------------------------------------- ----------------------------------------//



let arr = ['a','b','c','d','e'];




// --------------- slice() ----------------- //




/// slice from index 2, to the end of the array
/// doesnt mutate original arr, returns new array;

// console.log(arr.slice(2)); ///?['c','d','e'];

///define end poarameter which is not included in the output

// console.log(arr.slice(2,4)); ///? ['c','d'];


/// use negative to copy from the end, to the end of the array

// console.log(arr.slice(-2)); ///? ['d','e'];

/// -1 is always last element in array

// console.log(arr.slice(-1)); ///? ['e'];

/// use minus as end parameter, 
/// slices from index 1 to index -1(1 from end)
/// the minus 1 element IS included in the array

// console.log(arr.slice(1,-1)); ///?['b','c','d'];

/// no parameters return exact same array...the same as [...arr];
/// use slice() if chaining methods together;

// console.log(arr.slice()); ///?['a','b','c','d','e'];






// ---------------- splice() --------------- //






/// main difference between slice and splice = splice mutates original array;


/// same as before with slice();

///? console.log(arr.splice(2)); ///? ['c','d','e'];
/// but now original array is this, as splice() mutates original

///?console.log(arr); ///?['a','b']; 

/// use splice to remove last element of array

///?arr.splice(-1); ///?['a','b','c','d'];

/// use second parameter to remove more items - splice(index start, amount to remove)

// arr.splice(1,2); ///? new array- ['a','d','e'], removes ['b','c'] from array







// ----------------- reverse() ----------------- //






/// to reverse array

arr = ['a','b','c','d','e'];

const arr2 = ['j','i','h','g','f'];

// console.log(arr2.reverse()); ///? ['f','g','h','i','j'];

/// and reverse WILL mutate the original array

// console.log(arr2); ///? ['f','g','h','i','j'];






// ---------------- concat() -------------------//




/// WILL NOT mutate original arrays, return new array
const letters = arr.concat(arr2);
// console.log(letters);

/// same as...
// console.log([...arr, ...arr2]);





// ---------------- join() --------------------//




/// returns a string with a specified separator

// console.log(letters.join('-')); ///? a-b-c-d-e-f-g-h-i-j




// ---------------- includes() ----------------//





/// checks to see if array include a 'value' and returns true or false

console.log(arr.includes('d')); 

// true





// -------------------------------- forEach method ---------------------------------//




let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, value] of movements.entries()){ ///? use .entries for array[index,value]
  if (value > 0){
    console.log(`Movement ${index +1} : you deposited ${value}`)
  }
  else {
 ///? Math.abs removes - sign(absolute);
    console.log(`Movement ${index +1} You withdrew ${Math.abs(value)}`)
  }
}


/// forEach


/// loop over array and in each iteration execute the callback function
/// passes current element of array as argument - (movement like const movement above);

/// so basically 'forEach element in array- do following function'

console.log('--------------forEach method ----------------');
console.log(" so basically, \n forEach element in array- \n do following function ");

movements.forEach(function(movement){

  if (movement > 0){
    console.log(`you deposited ${movement}`)
  }
  else {
    console.log(`You withdrew ${Math.abs(movement)}`) ///? Math.abs removes - sign(absolute);
  }
});

/// using forEach method to gain access to current index


/// parameter naming unimportant BUT THE ORDER IS..........
/// function(current element, current index, entire array)

console.log('\n----- Using parameters for index and value -------');

movements.forEach(function(el, i, arr){

  if (el > 0){
    console.log(`Movement ${i +1} : You deposited ${el}`)
  }
  else {
    ///? Math.abs removes - sign(absolute);
    console.log(`Movement ${i +1} : You withdrew ${Math.abs(el)}`) 
  }
}
);

/// Only use forEach loop IF you dont need to continue/break out of loop, els euse for....of loop






// ------------- forEach on maps and sets --------------- //



///map


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


currencies.forEach(function(value,key,map){
// console.log(`${key} : ${value} `);

})

///set

const currenciesUnique = new Set (['USD', 'GBP', 'USD','EUR' ]);
// console.log(currenciesUnique);

/// will not work because sets dont have indexes

 currenciesUnique.forEach(function(value,key,map){
//  console.log(`${key} : ${value}`);
 })
 ///? USD : USD, GBP : GBP, EUR : EUR;




// -------------------------------- Advanced array methods -------------------------------- //



// --------------------------------- MAP / FILTER / REDUCE ---------------------------------//




//-- *See note on website





// ---------- MAP ---------//


/// loops over array and, for each iteration, returns new array based on function code.
/// parameters work the same as forEach (element, index, array)


const euroToUsd = 1.1;

/// convert to u.s dollars using map

const movementsUSD =  movements.map(mov => mov * euroToUsd);

// console.log(movements); /// original array
// console.log(movementsUSD); /// map() array


/// even use arrow function

const arrowUsd = movements.map( mov => mov * euroToUsd)

// console.log(arrowUsd); /// arrow => map()


/// same map() array function as for...of loop
/// except no function used

const movementsUSDfor = [];

for(const mov of movements){
  movementsUSDfor.push(mov* euroToUsd);
}
// console.log(movementsUSDfor); /// same as map() array


/// Javascript is based on functional programming, so use functions where possible!






// ------------- Using map(element,index, array) --------------- ///


const movementDescriptions = movements.map((mov, i ,arr) => {

if(mov > 0){
  return `Movement ${i +1}: You deposited ${mov}`
}
else {
  return `Movement ${i +1}: You withdrew ${Math.abs(mov)}`;
}
/// returning places the returned value into the map(NEW) array - movementDescriptions

})

// console.log(movementDescriptions);

/// simplified

const movementDescriptionsLit = movements.map((mov, i) =>

               `Movement ${i +1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
		)

// console.log(movementDescriptionsLit);





// ------------- Using map() and forEach() method in for UserNames --------------- /


// BANKIST APP

// Data
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
    
   

///?     const user = 'Steven Thomas Williams';

// /// convert name into lowercase,
// /// and then separate strings by space between strings

// /// SideNote: split takes a string and returns an array which is why,
// /// tolowercase returns string;split takes string and returns array,
// /// then you can call map method on array!!

///? const username = 	user
///? 			.toLowerCase()		/// converts string to lowercase string
///?			.split(' ')			/// returns single array of strings
///? 			.map(name => name[0])	/// for each string in array, return first letter
///? 			.join('');			/// join letters together and returns the string

///? console.log(username);



/// now put code into a function


const createUserName = function(user){

	const username = 	user
	.toLowerCase()		/// converts string to lowercase string
	.split(' ')			/// returns single array of strings
	.map(name => name[0])	/// for each string in array, return first letter
	.join('');			/// join letters together and returns the string

	return username;		/// always now return the function variable;


};


///? will just return mb as only 1 parameter
createUserName('Mark Beresford','Jarvie Beresford');






/// to createUserName for more than one user


let accounts = [account1, account2, account3, account4];

const createNewUserName = function(accountsArray){ ///array parameter

	accountsArray.forEach( objAcc => 	/// for each object in accounts array
	
	objAcc.username = objAcc.owner 	/// create new obj:username property,
							/// using object:owner property, then.....

		.toLowerCase()			/// converts string to lowercase string
		.split(' ')				/// returns single array of strings
		.map(name => name[0])		/// for each string in array, return first letter
		.join('')
)
};


createNewUserName(accounts); 	 /// call function to allocate the username and..
// console.log(accounts);		 /// will now show new property of username:(initials);




/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);





// --------------------------- Filter() method -------------------------- //





// movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///filter out all withdrawals to return just deposits

const deposits =  movements.filter(function(mov){

	return mov >0;

});
/// filter() returns an array
// console.log(deposits);


/// Javascripts functional programming ethos means,
/// dont use for...of loop on arrays if possible,
/// use functions where possible(including chaining functions
///  which isnt possiblev with for...of loop) .......
/// or even simplify functions

const arrowDeposits =  movements.filter(mov => mov > 0);

// console.log(arrowDeposits);


/// challenge for withdrawals

const withdrawArr = movements.filter( withdraw => withdraw < 0);
// console.log(withdrawArr);





// ----------------------- Reduce() ------------------- //





// movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/// reduce to total all elements to one value

///parameters for reduce - (currentElement, currentIndex, array )

/// currentElement = accumalator (snowball)
/// current index = current value


const total =  movements.reduce(function(acc, current, arr){

///	 total of previous values ⬇  , ⬇ current index value
				return acc + current
		} , 0 ///? ⬅ initial value of acc in first iteration - 
			///?	if empty will start with first element in array!!
);

// console.log(total); /// all array elemenets added up


/// simpler form

const balance  = movements.reduce((a,b) => a + b , 1000 ); /// added an initial value of 1000

const average  = movements.reduce((a,b) => a + b ) / movements.length; /// average of array

// console.log(balance);
// console.log(average);





// ----------------------------- Find() method ------------------------ //






///finds an element of the array

/// similar to filter except find() only....
/// returns first element in array that condition matches AND ....
/// returns only the element itself eg string/ number, NOT an array


/// only use when you are trying to find one thing(specific,like a persons name)!!!

// console.log(movements);

/// find first element in array that over 0

const firstWithdraw =  movements.find(mov => mov > 0);
// console.log(firstWithdraw)

/// find first element in array that under 0

const firstDeposit =  movements.find(mov => mov < 0);
// console.log(firstDeposit)




// ----------------- Find property in using find() method --------------- //






/// an array containing multiple objects
//  const accounts = [account1, account2, account3, account4];


//  const account2 = {
//  	owner: 'Jessica Davis',
//  	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//  	interestRate: 1.5,
//  	pin: 2222,
//      };



/// iterate thru accounts array(which contains multiple objects)
/// to find acc.owner: "Jessica Davis"

const objAcc = accounts.find( acc => acc.owner === "Jessica Davis");
// console.log(objAcc);

/// challenge to convert into for...of loop

for(const name of accounts){
	if (name.owner === 'Jessica Davis'){
		console.log(name);
		
	}
}


/////////////////////////////////////////////////





// --------------------------------- findIndex() ------------------------------ //




/// to find the index of an element in an array



// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');
// const accounts = [account1, account2, account3, account4, account5, account6, account7];

/*
btnClose.addEventListener('click', function(e){

	e.preventDefault();


	if (currentAccount.username === inputCloseUsername.value &&
		currentAccount?.pin === Number(inputClosePin.value))
							{

	const indexFind = accounts.findIndex(acc => acc.username === currentAccount.username)
	
				accounts.splice(indexFind,1);

				containerApp.style.opacity = 0;

				labelWelcome.textContent = "Log in to get started";
		}

				inputClosePin.value = inputCloseUsername.value = "";
	}
)

*/




// ------------------------------ some() and every() ------------------------------ //





movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/// use includes to test for a certain value for equality

// true
///? console.log(movements.includes(-400));

//false
///? console.log(movements.includes(-410));




// ----  some() ---- //





/// use some to test for a condition using a callback func


/// any deposits over 5000
//false
const depFalse = movements.some(mov => mov > 5000 );

/// any deposits over 0
//true
const depTrue = movements.some(mov => mov > 0 );
///? console.log(depFalse, depTrue);

/// any deposits that equal 450
// true
const depEqual = movements.some(mov => mov === 450 );
///?console.log(depEqual);




// ------ every() ------- //





/*
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


*/
/// test if every value passes condition above 0;
///?  console.log(movements.every(mov => mov > 0 ));
//false

/// test if every value in account4 passes condition above 0
///?  console.log(account4.movements.every(mov => mov > 0 ));
//true





// ---- using pre-defined function ------ ///
// ------- as a callback function -------  //




const aboveZero = mov => mov > 0 ;

///?  console.log(movements.every(aboveZero));






// ----------------------- flat() and flatMap() -------------------------- //




// --- flat() -- //





/// new addition to js 2019

///combines nested arrays to one array in a new array


 arr = [[1,2,3] , [4,5,6], 7,8 ];

let flattedArr = arr.flat();

///? console.log(arr);

///? console.log(flattedArr);

let deepArr = [ [[1,2] ,3] , [4, [5,6] ], 7,8 ];

/// flat() only goes one level deep 

let flatDeepArr = deepArr.flat();

///?  console.log(flatDeepArr);
///?  [ [1,2] ,3 , 4, [5,6] , 7,8 ]

/// flat takes a number as an argument to 
/// indicate how many levels deep to go

let flatDeepArrTwo = deepArr.flat(2);

/// now returns the one array
///?  console.log(flatDeepArrTwo);




/// use with map and reduce to get the total movements from
/// accounts array

accounts = [account1, account2,account3, account4];



const accountMovements = accounts.map(acc =>  acc.movements)
																 .flat()
																 .reduce((a,b) => a+b);

///?  console.log(accountMovements);

/// flat and map were comminly used together so.....
/// flatMap was introduced





// ---------- flatMap() ------------ //





/// still uses the same priciple as map() so,
/// will need a callback method but.....
/// flatMap will flatten 1 level deep arrays into one

const accountMovements2 = accounts.flatMap(acc =>  acc.movements)
																 	.reduce((a,b) => a+b);

///?  console.log(accountMovements2);






// ------------------------- sort() method ------------------------- //






/// mutate original string - alphabetically

const owners = ['Jonas'	, 'Zach', 'Adam', 'Mark'];

console.log(owners.sort());

///mutated
console.log(owners);


/// sorts nmubers as a string,
///? console.log(movements.sort());


/// to sort numbers numerically, give it a callback func
/// sort is similar to reduce (a , b) = (curr, next val) except....
/// it compares the 2... is a bigger than b, if so b goes first.

/// return if ( a-b > 0 ) A,B
/// return if ( a-b < 0 ) B,A




/// Ascending order... small to large

///?  movements.sort((a , b) => {
///?		if (a > b)  return 1 ;
///?		if (b > a)	return -1
///?	});
///?	console.log(movements);

/// simplified

movements.sort((a , b) => a-b);

console.log(movements);




/// descending order... large to small

///?	movements.sort((a , b) => {
///?		if (a > b)  return -1 ;
///?		if (b > a)	return 1
///?	});
///?	console.log(movements);

/// simplified

	movements.sort((a , b) => b-a);

	console.log(movements);




// ------------------------- Creating and filling arrays ------------------------  //






/// create a new array with a specified amount of empty spaces 

	 const x = new Array (7);
	///?  console.log(x); //[empty x 7]

///  only method to be called on an empty array is the fill() method






// ------- fill() ----- //






/// fill mutates the original array

x.fill(1);

// /?console.log(x); //[1,1,1,1,1,1,1]

/// can specify a a start parameter (3)

x.fill(2,3);

///? console.log(x); //[1,1,1,2,2,2,2]

/// can also specify an end parameter (6)

x.fill(3, 4, 6);

///? console.log(x); //[1,1,1,2,3,3,2]

/// can mutate an existing array

const arrMeth = [1, 2, 3, 4, 5, 6, 7];

arrMeth.fill(7, 4, 6);

///? console.log(arrMeth); // [1,2,3,4,7,7,7]
/// will only fill the spaces already available, cannot add on to the end






// ------ Array.from -------- //






/// use the Array constructor to create first array - [1,1,1,1,1,1,1]

const y = Array.from({length:7} , () => 1);

console.log(y); // [1,1,1,1,1,1,1]
///? cleaner method

/// specify length, current iteration, & index.. so index +1 as it starts @ 0;

///? const z = Array.from({length:7} , (curr, i ) => i+1);

/// replace curr with _ as it doesnt get used

const z = Array.from({length:7} , ( _ , i ) => i + 1 );


console.log(z);






// -- challenge - 100 dice rolls ---- //





///? generate array with 100 random dice rolls

const diceArr  = Array.from({length:100},
	
		(num) => 	num = Math.trunc(Math.random() *6) +1) 

console.log(diceArr);






// ------- Creating Arrays From other things -------- //






/// new method using callback function as second paramerter of Array.from

/// set the eventHandler to use on an account

 ///? labelBalance.addEventListener('click', function(){

 /// create UI variable

///? 	const movUI  = 

/// use Array.from to create a new array using querySelectorALL
/// to access the nodelist then convert nodelist to an array using
/// the .movements_value (as the variable)

///? 				Array.from(document.querySelectorAll('.movements__value'),

/// use callback function on element in movements_value to...
/// get element textContent, then replace the dollar sign to nothing

///? 			//	 el =>el.textContent.replace('$', '')

/// would need converting to a number as its a string   
///									⬇		(															)	
///?        el = Number(el.textContent.replace('$', ''));

///? 	);

/// log to console the variable , with the typeof for checking
	
///? 	console.log(movUI, typeof movUI[1]);
///? 	}
///? 	)



/// original method
// const type = mov > 0 ? 'deposit' : 'withdrawal'

// 		const html = `<div class="movements__row">
// 			<div class="movements__type movements__type--${type}">${i +1} ${type}</div>
///? 			<div class="movements__value">$ ${mov}</div>
// 		</div>`;


/// needs to be done inside account, 
/// so attach to balance label;

 ///? labelBalance.addEventListener('click', function(){

///? 	const movUI  = Array.from(document.querySelectorAll('.movements__value'));

	/// use map as movUI is now an array to get the text content
	/// then call replace in map func, to lose the currency symbol
	/// finally convert string to number
	
	// const getNodeValue = movUI.map( el => Number(el.textContent.replace('$', '')));
	
	/// so this creates a new array using map

///? 	console.log(getNodeValue, typeof getNodeValue[1]);
///? }
///? )





/// second parameter of Array.from can be a callback function, so...

/*
labelBalance.addEventListener('click', function(){


const movUI  = 
			Array.from(document.querySelectorAll('.movements__value'),
			 el => Number(el.textContent.replace('$', ''))
);

console.log(movUI);
}
)



*/