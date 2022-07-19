// ------------------------------- Numbers ------------------------------- //
// --------------------------- Math & Rounding --------------------------- //




// --------- Math.sqrt(num) ---------- //


/// square root as my own function


const rooted = num => console.log(Math.sqrt(num));



rooted(9)


// 3  (3x3)


rooted(16)


// 4  (4x4)





// --------- Math.max( range of nums) ---------- //




/// highest number in a  range of numbers



Math.max(2, 4, 6, 20);


// 20





/// can pass in a string as does type coersion




Math.max(2, 4, '40', 5, '25', 30);


// 40






/// parsing wont work




Math.max(2, 4, 5, '25', 30, '40px');


// NaN








// --------- Math.min( range of nums) ---------- //





/// lowest number in a  range of numbers



Math.min(2, 4, 5, 30);


// 2






/// lowest number in a  range of numbers and strings



Math.min('2', 4, '5', 30);


// 2






// --------- Math.PI() ---------- //


/// using Pi



const circle = Math.PI * Number.parseFloat('10px');

const areaCircle = circle ** 2;

console.log(areaCircle);






// --------- Math.random() ---------- //



/// genrates a random number between 0 - 1



console.log(Math.random());


// 0.16146350969570245

// 0.5971086780066721

// etc etc




// --------- Math.trunc() ---------- //




/// removes the remainder after the decimal place



console.log(Math.trunc(1.999));

// 1

console.log(Math.trunc(3.9));

// 3

console.log(Math.trunc(6.11111));

// 6





//----------- generate random number between 2 values -------------- //




const randomNum = (min, max) => console.log(Math.floor(Math.random() * (max - min) + 1) + min);


// math.random = 0.15 * (10-5)
// = 1.15 * 5
// = 0.75 + 1
// = 1.75 + 5
// = 6.75.trunc
// = 6


randomNum(5, 10)







//  ---------------------  Ways to round integers  -------------------- //




/// math.trunc above





// --------- Math.round() ---------- //




/// rounds to the nearest integer



console.log(Math.round(23.3));


// 23


console.log(Math.round(23.6));



// 24





// --------- Math.ceil() ---------- //



/// will round up no matter the decimal number



console.log(Math.ceil(23.3));


// 24


console.log(Math.ceil(23.7));


// 24





// --------- Math.floor() ---------- //




/// will round down no matter the decimal number



console.log(Math.floor(23.7));


// 23



console.log(Math.floor(23.3));


// 23



//! ALL ROUNDING METHODS USE TYPE COERCION




console.log(Math.round('23.6'));


// 24


console.log(Math.ceil('23.3'));


// 24


console.log(Math.floor('23.7'));


// 23


//!  FLOOR WORKS BETTER THAN TRUNC AS IT ALSO WORKS WITH NEGATIVE NUMBERS


console.log(Math.trunc(-23.7));

// (-23)


console.log(Math.floor(-23.7));


// (-24)





// --------- .toFixed() ---------- //



/// toFixed sets the amount of decimal placed to round to  AND then returns a STRING!!


//! number has to be in parentheses



const threeDecimalPlace = (2.678889).toFixed(3);


console.log(threeDecimalPlace, typeof threeDecimalPlace);


//  2.679  string



/// convert toFixed to a number add the + sign



const threeDecimalPlaceNum = +(2.678889).toFixed(3);



console.log(threeDecimalPlaceNum, typeof threeDecimalPlaceNum);


//   2.679  'number'





