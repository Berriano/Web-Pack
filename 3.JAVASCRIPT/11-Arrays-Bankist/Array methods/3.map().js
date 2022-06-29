// ----------------------------------- Arrays ---------------------------------- //
// -----------------------------------  map() ---------------------------------- //



'use strict';



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




// ------------------ convert movements to usd using map() -------------------- //



const euroToUsd = 1.1;



/// create a new variable to hold the new array that map() returns

//! return is needed on the map() method



const usdConverted = movements.map(function(mov) {


    return Math.trunc(mov * euroToUsd);


})


//! each element in the movements array gets the callback function applied to it,
//! and put in a new array 



//  [220, 495, -440, 3300, -715, -143, 77, 1430]


// movements = [200, 450, -400, 3000, -650, -130, 70, 1300];   UNCHANGED





// ---------- convert movements to GBP using map() and arraow function ----------- //




const euroToGBP = 1.3;


const convertedGBP = movements.map(mov => Math.trunc(mov * euroToGBP));


// [260, 585, -520, 3900, -845, -169, 91, 1690]






// ----------------------- return a new array of strings ------------------------ //
// ---------------- using the element, index, array parameters  ----------------- //




const movementDescription = movements.map((mov, i ) =>

    `Movement ${i} : You ${mov > 0 ? 'deposited' : 'withdrew '} $${mov}`

);



//! creates a new array wit the returned strings as each element


//  ['Movement 0 : deposit $200', 'Movement 1 : deposit $450', 'Movement 2 : withdraw $-400', 'Movement 3 : deposit $3000', 'Movement 4 : withdraw $-650', 'Movement 5 : withdraw $-130', 'Movement 6 : deposit $70', 'Movement 7 : deposit $1300']





//--- create a username taking only the initials from the account.owner values ---//



const user = 'Steven Thomas Williams';



/// chain in order of how the method called returns the element



const userName = user.toLowerCase().split(' ').map(name => name[0]).join('');



//! 1. toLowercase() returns a string.

//! 2. split() splits the string into an array(by the separator), and returns it.

//! 3. map() applies the callback function to the array and then returns a new array.

//! 4. join() can then join the array elements, and return a string.




/// final version in a function



const createUserName = function(user) {

    const userName = user

        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');

				console.log(userName);

				return userName; // for the function to work properly

}


createUserName(user);


// stw



