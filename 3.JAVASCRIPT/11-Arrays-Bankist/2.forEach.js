// ----------------------------------- Arrays ---------------------------------- //
// --------------------------------- forEach () -------------------------------- //



'use strict';



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




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
// You Withdrew $130
// You deposited $70
// You deposited $1300





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
// Transaction 5 : You Withdrew $130
// Transaction 6 : You deposited $70
// Transaction 7 : You deposited $1300



/// FOREACH WILL LOOP OVER THE ENTIRE ARRAY AND CANNOT BREAK OUT (LIKE CONTINUE AND BREAK)

console.log('');





// --------------------------------- forEach () -------------------------------- //
// --------------------------- with maps() and sets() -------------------------- //

console.log('----------------------------- Maps and Sets -----------------------------');
console.log('');



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


