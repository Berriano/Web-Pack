// ------------------------------- Numbers ------------------------------- //
// -------------------------       BigInt()     -------------------------- //


'use strict';




/// MAX SAFE INTEGER is the largest number js can use without using bigInt()


const maxNum = Number.MAX_SAFE_INTEGER;


// 9007199254740991



const inaccurateNumber = maxNum + 2;


console.log(inaccurateNumber);


//! should be....

// 9007199254740993



//! but its....

// 9007199254740992





// ------- Using BigInt() and n -------- //




const bigNumWrong = 4328762438762478364782364782364872364;


console.log(bigNumWrong);


// 4.3287624387624786e+36





const bigNumright = 4328762438762478364782364782364872364n;


console.log(bigNumright);


// 4328762438762478364782364782364872364n


//! OR....



const bigNumright2 = BigInt(43287624387628);


console.log(bigNumright2);


// 43287624387628n


//! bigInt function can only do up to a certain Big Number






// ------- Using BigInt() and n with operations -------- //




const bigSum = 1234567n * 100000000n;


console.log(bigSum);


// 123456700000000n





//! cannot mix bigInt with regular numbers



const huge = 12324354364575675n;


const regular = 1000;


// console.log(huge * regular);




//! Error: Cannot mix BigInt and other types

//! conversion to bigint is needed



console.log(huge * BigInt(regular));


// 12324354364575675000n





// ------- Exceptions ------- //



/// mixiing bigInt with regular numbers 



console.log(20n > 14);

// true




/// type coersion wont work


console.log(20n === 20);

// false




/// but regular comparison will


console.log(20n == 20);

// true



console.log(11n / 3n);


// 3n - cuts off the decimal part as its an integer

