'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// ------------------------------- Numbers Math() ------------------------------ //




/// square root


// console.log(Math.sqrt(25));


///?  5



//// cubic root


// console.log(27 ** (1/3));


///? 3




/// Maximum value



// console.log(Math.max(5,18,21,11));


///? 21




//! type coersion


// console.log(Math.min(5,'18',21,'11'));


///? 5




/// Minimum value


// console.log(Math.min(5,18,21,11));


///? 5



//! type coersion


// console.log(Math.min(5,'18',21,'11'));
// 

///? 5



//! NaN


// console.log(Math.min(5,'18px',21,'11rms'));


///? NaN




/// PI



// console.log(Math.PI);


///?  3.141592653589793




/// random numbers



// console.log(Math.random()*6);




/// remove decimal



// console.log( Math.trunc(Math.random()*6) +1 );
 



/// function to create random number


const randomInt = (min, max)  =>	Math.floor(Math.random() *  (max - min) + 1 ) + min;


// console.log( randomInt(4,8));


///? breakdown ....  0.3 * (8-4) +1 + 4 = 6.2 ( trunc = 6)





/// Rounding Intergers



//! to remove any decimal part


// console.log(Math.trunc(23.55));



///? 23



//! to round to nearest integer


// console.log(Math.round(23.55));



///? 24



//! to round up


// console.log(Math.ceil(23.55));


///? 24



//! to round down


// console.log(Math.floor(23.55));


///? 23



//! ALL METHOD DO TYPE COERSION



// console.log(Math.ceil('23.3333'));


///? 24


/// Using Negative Numbers



//! trunc and floor do the same thing, except with negative numbers


// console.log(Math.trunc(-23.55));

///? -23


// console.log(Math.floor(-23.55));


///? -24


//! mathy.floor is more accurate in this situation as -23.55 rounded down is -24




/// Rounding decimals



//! toFixed(num) for rounding to nearest integer

//! RETURNS A STRING !!!

//! On a number call the toFixed method , and use num for amount of decimal places


console.log((2.7).toFixed(0));


///? 3  (string) 


console.log((2.7).toFixed(3));


///? 2.700  (string)


console.log((2.345).toFixed(2));


///? 2.35  (string)



console.log(+(2.456).toFixed(2));


///? 2.46 (number)