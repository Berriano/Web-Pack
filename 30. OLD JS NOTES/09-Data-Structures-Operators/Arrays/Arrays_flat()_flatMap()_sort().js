'use strict';




// ------------------------- Array flat() and flatMap() ----------------------- //



const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};



const accounts = [account1, account2];



/// flat()



//! no callback function needed
//! removes 1 level of arrays to make a whole array
//! ** will not do more than 1 level


let movements = [[200, 450, -400] , [3000, -650, -130, 70, 1300]];


const flatMovements = movements.flat();


console.log(flatMovements);


///?  [200, 450, -400, 3000, -650, -130, 70, 1300]


const multipleArrays = [[200, 450], [-400] , [3000, -650] ,
											 [-130], [70, 1300], [100,200,300,400]];


const flatMultiples = multipleArrays.flat()
;


console.log(flatMultiples);



///? [200, 450, -400, 3000, -650, -130, 70, 1300, 100, 200, 300, 400]


//! use parameter to go another level deep (flat(2) -  max of 2 )


const arrDeep = [ [1, 2 , [ 3, 4 ] , 5 ], [6, 7] , 8];


const flatDeeper = arrDeep.flat(2);


console.log(flatDeeper);


///? [1, 2, 3, 4, 5, 6, 7, 8]







/// ** bank app to calculate all bank movements using flatMap()


/// Chaining together



const chained = accounts.map(acc => acc.movements)
												.flat()
												.reduce((acc,curr) => acc + curr,0);


console.log(chained);



// ------------------------------- flatMap() ------------------------------------ //



//! flattens but need a callback for the condition of the map
//! flatMap only goes 1 level deep



const flatMapChained = accounts.flatMap(acc => acc.movements)
															 .reduce((acc,curr) => acc + curr,0);


console.log(flatMapChained);





// --------------------------------- sort() ------------------------------------- //



/// sort() strings



//! Use sort to sort array alphabetically, mutate and return the original array


const owners = ['Mark', 'Jonas', 'Jarvie','Sophie','Jem'];


//! doesnt need saving to variable as it mutates original


owners.sort();


console.log(owners);


///? ['Jarvie', 'Jem', 'Jonas', 'Mark', 'Sophie'];




/// sort() numbers in ascending order


//! sort will sort numbers alphabetically, by using the first digit


//! SO THIS IS NOT WORKING

movements = [200, 450, -400 , 3000, -650, -130, 70, 1300];


movements.sort();


console.log(movements);

//! counts like this

///     -1    -4   -6   1      2     3    4    7  
///?  [-130, -400, -650, 1300, 200, 3000, 450, 70] 




//! THIS IS WORKING


//! use a callback function - (curr value and next value)
//! think of (a,b) as consecutive numbers



///? if a > b - switch order (1 is greater than 0)
///? if b > a - keep order	( -1 is less than 0)


//! if 1 is returned - switch order
//! if -1 is returned - keep order because this means b is greater than a


movements.sort((a, b) =>  a > b ? 1 : -1 )


console.log(movements);




/// BEST SOLUTION                                 



//! SIMPLIFIED TO ......


movements.sort((a, b) =>  a -b )



///? [-650, -400, -130, 70, 200, 450, 1300, 3000]



///                                                




/// Descending order still needs the longer callback


movements.sort((a, b) =>  a < b ? 1 : -1 )


console.log(movements);


///?  [3000, 1300, 450, 200, 70, -130, -400, -650]



/// *** use sort method in Bankist app

