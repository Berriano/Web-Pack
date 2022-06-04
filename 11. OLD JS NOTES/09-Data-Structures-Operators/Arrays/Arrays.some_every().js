'use strict';




// ---------------------------- Array some() and every() --------------------------- //




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


// ------------------------------ some(callback) method ---------------------------- //



let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//! some is similar to includes() except includes only checks for equality;


const hasTwoHundred = movements.includes(200);


console.log(hasTwoHundred);


///? true




/// some() 




//! check for a specified element/value using a condition in a callbaack function
//! has SOME() of what your looking for...


//! Check for any deposit on an account


const anyDeposit = movements.some(mov => mov > 0);


console.log(anyDeposit);


///?  true


const overFiveGrand = movements.some(mov => mov > 5000);


console.log(overFiveGrand);


///? false



/// ** Request loan in Bankist App




// ---------------------------- Every() method -------------------------------- //



//! similar to some, except every only returns true if ALL elements/values
//!  meet the condition.



/// every() 



const allDeposit = movements.every(mov => mov > 0);


console.log(allDeposit);


///? false   some are withdrawals



const allNumbers = movements.every(mov => mov.typeof === 'number' || ',');


console.log(allNumbers);


///? true  --  every element is a number or comma



/// Separate callBack


//! arrow function which can be re-used

const newDepositVar = mov => mov > 0;


const newDeposit = movements.every(newDepositVar)


console.log(newDeposit);


///? false


//! arrow function that can be re-used


const newNumbers = num => num.typeof === 'number' || ',';


const allNewNumbers = movements.every(newNumbers);


console.log(allNewNumbers);


///? true

