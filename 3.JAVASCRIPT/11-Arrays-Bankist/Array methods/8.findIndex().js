// ----------------------------------- Arrays ---------------------------------- //
// --------------------------------- findIndex() --------------------------------//



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




const accounts = [account1, account2, account3, account4];




// ----------------------  find an account and delete it ----------------------- //



let currentAccount = account2.owner;


console.log(currentAccount);


// Jessica Davis



/// get the index number first


const index = accounts.findIndex(acc => acc.owner === currentAccount);


console.log(index);

// 1



/// use splice to remove the account by using the index number found from findIndex


accounts.splice(index, 1);

//! accounts - remove from index number 1, 1 element


console.log(accounts);


// 0: {owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111}
// 1: {owner: 'Steven Thomas Williams', movements: Array(8), interestRate: 0.7, pin: 3333}
// 2: {owner: 'Sarah Smith', movements: Array(5), interestRate: 1, pin: 4444}
