// ------------------------------- Numbers ------------------------------- //
// ------------------------- Numeric Separator  -------------------------- //


'use strict';



/// As large numbers can be hard to read, use an underscore to break them up




const diameter = 287_460_000_000;


console.log(diameter);


// 287460000000



const price = 39_999;


console.log(price);


// 39999




/// can only place underscores between numbers



const PI = 3.14_15;


console.log(PI);


// 3.1415



//! Errors


// const PI = 3.1415_;

// const PI = 3._1415;

// const PI = 3.__1415;

// const PI = 3_.1415;

// const PI = _3.1415;




/// will not work on strings converted to numbers



const stringNumberNoUnderscore = Number('230000')


console.log(stringNumberNoUnderscore);


// 230000



const stringNumberUnderscore = Number('230-000')


console.log(stringNumberUnderscore);


// NaN



/// will not work on strings converted by parseInt



const stringToParseInt = parseInt('230_000');


console.log(stringToParseInt);


// 230