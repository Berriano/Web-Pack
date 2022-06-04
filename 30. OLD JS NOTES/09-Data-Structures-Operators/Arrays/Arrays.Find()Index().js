'use strict';


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
// ---------------------------------- Array Find() ------------------------------- //



const accounts = [account1, account2, account3, account4];


let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



//! 	Use the find() method to retrieve one element (the first) of an array, 
//! 	that meets the condition, set by a callback funtion,
//! 	and returns that element(not an array)


/// finds first element


const findsFirstElement = movements.find(mov => mov < 0);


console.log(findsFirstElement);


//! first element less than 0 is -400


///? -400



/// find an object, in an array, based on a property in that object



//! acc is a parameter for the accounts array, to represent each account
//! owner is a property in the accounts array
//! find() returns the object the property:value matches (account.owner)



//! USE A UNIQUE SEARCH CRITERIA TO FIND A MATCH FOR THE CONDITION
//! e.g owner === 'Jessica Davis'


const account = accounts.find( acc => acc.owner === 'Jessica Davis');


console.log(account);


///? {owner: 'Jessica Davis', movements: Array(8), interestRate: 1.5, pin: 2222}




/// ** Implement login in Bankist App script





// ------------------------------- Array findIndex() ----------------------------- //





/// works the same as find execpt it returns the index where the element is


//! use to delete something from an array/object


const index = accounts.findIndex(acc => acc.owner === 'Jessica Davis');


console.log(index);


///? 1


//! splice out at the index number, 1 element


accounts.splice(index, 1);


console.log(accounts);

///? Jessica davis remove from objects/array
