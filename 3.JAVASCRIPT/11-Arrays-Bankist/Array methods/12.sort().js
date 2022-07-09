// ----------------------------------- Arrays ---------------------------------- //
// ------------------------------------ sort() ----------------------------------//



'use strict';



const owners = ['Mark', 'Jarvie', 'Jem', 'Sophie', 'Merv', 'Sooty', 'Adam'];


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



/// To sort alphabetically, use simple sort method to mutate orginal array



owners.sort();


console.log(owners);


// ['Adam', 'Jarvie', 'Jem', 'Mark', 'Merv', 'Sooty', 'Sophie'] 




/// to sort numbers, this method doesnt work



///? movements.sort();


console.log(movements);


// [-130, -400, -650, 1300, 200, 3000, 450, 70]


//! sorting is based on strings no numbers






// -------------------  NUMBER	SORT METHOD EXPLANATION   --------------------- //


//! if number is positive b gets returned, if its negative a gets returned



//! EXAMPLE [200,100,400,250] = A = 200, B= 100 (200-100) = POSITIVE NUMBER

//! SO SWITCH A AND B [100,200,400,250] NOW COMPARE AGAIN UNTIL NEGATIVE

//! [100,200,400,250] - (100-200) = NEGATIVE NUMBER SO LEAVE AND COMPARE NEXT

//! (200-400) = NEGATIVE NUMBER SO LEAVE AND COMPARE NEXT

//! (400-250) = POSITIVE NUMBER SO SO SWITCH A AND B

//! [100,200,250,400] = NOW WHEN ALL COMPUTATIONS = NEGATIVE NUMBER - COMPLETE!






/// for ascending numbers:



movements.sort((a, b) => a - b)


console.log(movements);


// [-650, -400, -130, 70, 200, 450, 1300, 3000]




/// for descending numbers:


//! switch the a and b


movements.sort((a, b) => b - a)


console.log(movements);


// [3000, 1300, 450, 200, 70, -130, -400, -650]



//! HOW SORT CONVERTS STRINGS TO NUMBERS


const stringTest = '23' - '10';

// 13  number string - number string = number



