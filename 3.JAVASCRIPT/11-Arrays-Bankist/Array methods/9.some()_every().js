// ----------------------------------- Arrays ---------------------------------- //
// ------------------------------ some() & every()   --------------------------- //



'use strict';


let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




// ---------------------------- The some() method  ----------------------------- //



/// some() returns true or false for any element meets condition on the callback function 





/// is there any element over 0 


const anyOverZero = movements.some(mov => mov > 0);


// true




/// is there any element over 5000 


const anyOverFiveThousand = movements.some(mov => mov > 5000);


// false




/// is there any element that is 3000 



const anyThreeThousand = movements.some(mov => mov === 3000);


// true


//! if you want to check for equality, use the includes() method





// ---------------------------- The every() method  ----------------------------- //



movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



/// every() returns true or false if all elements meet condition  on the callback function 



const allOverZero = movements.every(mov => mov > 0);


// false





movements = [200, 450, 3000, 650, 130, 1300];


const allOverFifty = movements.every(mov => mov > 0);


// true 





