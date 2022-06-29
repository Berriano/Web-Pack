// ----------------------------------- Arrays ---------------------------------- //
// --------------------------------- forEach () -------------------------------- //



'use strict';



const movements = [200, 450, -400, 3000, -650];




// --------------------------------- forEach () -------------------------------- //

console.log('----------------------------- forEach ()  -----------------------------');




/// the forEach method need a callback function to tell it what to do forEach element




/// loop thru movements array logging deposits and withdrawals using the mov parameter


//!  the mov parameter represents each element in the movemnets array




movements.forEach(function(mov) {
	
	mov > 0 ? console.log(`You deposited $${mov}`) :
	
	console.log(`You Withdrew $${Math.abs(mov)}`);
	

});


// You deposited $200
// You deposited $450
// You Withdrew $400
// You deposited $3000
// You Withdrew $650





///  accessing the index number and the array using the paramerters of the forEach loop



//! 1st prameter = current element
//! 2nd prameter = current index number
//! 3rd prameter = entire array



movements.forEach(function(mov, i, array) {
	
	mov > 0 ? console.log(`Transaction ${i} : You deposited $${mov}`) :
	
	console.log(`Transaction ${i} : You Withdrew $${Math.abs(mov)}`);
	
	
});



// Transaction 0 : You deposited $200
// Transaction 1 : You deposited $450
// Transaction 2 : You Withdrew $400
// Transaction 3 : You deposited $3000
// Transaction 4 : You Withdrew $650



/// FOREACH WILL LOOP OVER THE ENTIRE ARRAY AND CANNOT BREAK OUT (LIKE CONTINUE AND BREAK)






// --------------------------------- forEach () -------------------------------- //
// --------------------------- with maps() and sets() -------------------------- //

console.log('----------------------------- Maps and Sets -----------------------------');



const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);




// --------------- Maps() ---------------- //



/// maps follow the same principle as arrays using element,index,array


//! 1st prameter = current value
//! 2nd prameter = current key property
//! 3rd prameter = entire map



currencies.forEach(function(value, key, map){
	
	
	console.log(`${key}:${value}`);
	
})



//  USD:United States dollar
//  EUR:Euro
//  GBP:Pound sterling




// --------------- Sets() ---------------- //



const currenciesUnique = new Set(['USD','GBP','USD','AUD','GBP']);



/// sets have a slightly different way of working as the dont have keys/indexes



//! use an underscore as an underScore symbol of something to be ignored


currenciesUnique.forEach(function(value, _ ,set){

console.log(value);

})


// USD
// GBP
// AUD




// ------------- forEach with the map function and other methods ---------- //




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




const createUserName = function(accs) {


	/// on the accounts passed in, for each account


	accs.forEach(function(acc) {


			/// create a username property which is calculated by a callback function
			/// used on the account.owner string 


			acc.username = acc.owner.toLowerCase()
					.split(' ')
					.map(name => name[0])
					.join('');

	})
	

	//!  no need to return anything as foreach has already created the username,
	//!  and no value is created

}


/// So, forEach of the accounts in the array,           
/// a username is created based on the callback function


createUserName(accounts);



console.log(account1,account2);


