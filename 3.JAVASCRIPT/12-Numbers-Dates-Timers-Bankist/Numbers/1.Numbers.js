// ------------------------------- Numbers ------------------------------- //
// ------------------------------- ------- ------------------------------- //



'use strict';


//// Base 10


console.log(2 + 2 === 4.0);


// true


/// convert string to a number - easy way




const numTwenty = +"20";

console.log(typeof numTwenty);


// number








// ------------------------------- Numbers ------------------------------- //
// ------------------------------- methods ------------------------------- //





// ------ parseInt ------ //



/// gets the number from a string



const getNum = Number.parseInt('30px');


//! string needs to start with a number


// 30



// -- radix -- //


/// radix is a second parameter specifying base number(usually 10 : 0-9)


//! 2 is binary


const getNumRadix = Number.parseInt('30px', 10);


console.log(getNumRadix);





// ------ parseFloat ------ //



/// to read the decimal number from a string



const nonDecimalNum = Number.parseInt('2.5rem');

console.log(nonDecimalNum);

// 2




const decimalNum = Number.parseFloat('2.5rem');


console.log(decimalNum);


// 2.5





// ------ isNaN ------ //





/// to check if a value is not a number - NaN



//! only true is returned if value is NaN




const isANum = Number(20)

console.log(isANum);

// 20


const isNotANum = Number.isNaN(20)

console.log(isNotANum);

// false






const isNotANum3 = Number('hi' + 'string')

console.log(isNotANum3)

// NaN


console.log(isNaN(isNotANum3));

// true





// ------ isFinite ------ //


/// only returns true if value is a real Number



const isNumFinite = Number.isFinite(20)


console.log(isNumFinite);


// true  -20



const isStringFinite = Number.isFinite('20');


console.log(isStringFinite);


// false - NaN



//!  BEST WAY TO CHECK IF A VALUE IS A REAL NUMBER IS isFinte() METHOD







// ------ isInteger ------ //



/// when using only integers



console.log(Number.isInteger(20));


// true


console.log(Number.isInteger(2.5))


// false  as its a decimal


