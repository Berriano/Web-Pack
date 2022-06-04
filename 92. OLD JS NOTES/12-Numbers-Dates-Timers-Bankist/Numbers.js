'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// ----------------------------------- Numbers ------------------------------- //




// console.log(23 ===23.000);

// ///? true


// console.log(1/10)

// ///? 0.1


// console.log(3/10);

// ///? 0.3


// console.log(0.1 + 0.2);


// ///? 0.30000000000000004


// console.log(0.1 + 0.2 === 0.3);


// ///? FALSE ??



// /// different way to convert a string to a number


// console.log(Number('23'));

// console.log(+'23');  // type coersion





// ----------------------------- Parsing -------------------------------------- //




// -------------- parseInt() ------------- //




/// extracting the number from a string, getting rid of any characters


// console.log(Number.parseInt('30px'));

///? 30


//! will only work if the string starts with a number


// console.log(Number.parseInt('e23'));

///? NaN




/// Using radix argument



//! a second argument can be passed, called the radix

//! base 10 is the commonly used radix


// console.log(Number.parseInt('30px', 10));



//! binary argument is 2


// console.log(Number.parseInt('11px',2))


///?  3 (binary)





// -------------------- parseFloat() ------------------------ //




/// to read decimals, or values from a string (esp from CSS)



//! only parseFloat can read the decimal part


// console.log(Number.parseInt('2.5rem'));


///? 2


// console.log(Number.parseFloat('2.5rem'));


///?  2.5



// -------------------------- isNaN() ----------------------------- //




//! Only use this to check if value is Not a Number



console.log(Number.isNaN(20));


///? false as it is a number 

console.log(typeof(20));

///? number


console.log(Number.isNaN('20'));


///? false


console.log( typeof('20'));


///? string


console.log(Number(+'Mark'));


///? NaN


console.log(Number.isNaN(+'Mark'));


///? true



//! there is a better method for checking



// ----------------------------- isFinite() ------------------------------- //



/// Always use this method for checking if something is a number



//! for checking if something is a real number, not a string




console.log(Number.isFinite(20));


///? true


console.log(Number.isFinite(2.5));


///? true




console.log(Number.isFinite('20'));


///? false (its NaN)



console.log(Number.isFinite('20px'));


///? false


console.log(Number.isFinite(+'20X'));


///? false




// --------------------------- isInteger() ------------------------------- //




/// for checking is something is an integer



console.log(Number.isInteger(20));


///? true



console.log(Number.isInteger(23.0));


///? true


console.log(Number.isInteger('mark'));


///? false



