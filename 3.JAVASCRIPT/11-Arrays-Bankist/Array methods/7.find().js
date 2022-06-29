// ----------------------------------- Arrays ---------------------------------- //
// ----------------------------------  find()  --------------------------------- //



'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




/// The find method returns the first element in an array that meets the condition set



const firstWithdraw = movements.find(mov => mov < 0);


/// -400


//! not an array returned but the first ELEMENT







// --- Use find to find an object in the array based on a property in the object --- //




const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};



const account2 = {
	owner: 'Jessica Anne Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};



const accounts = [account1, account2];




/// find the jessica davis account



const jessDavisAcc = accounts.find(acc => acc.owner === 'Jessica Anne Davis');



// {owner: 'Jessica Anne Davis', movements: Array(8), interestRate: 1.5, pin: 2222}



/// find() is used to find 1 element