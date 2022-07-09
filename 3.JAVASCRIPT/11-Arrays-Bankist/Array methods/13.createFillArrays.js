// ----------------------------------- Arrays ---------------------------------- //
// --------------------------------fill()  ----------------------------------//



'use strict';


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




//  ----------------------    Create new arrays   -----------------------  //



/// create a new array with array constructor


const oneArr = new Array(7);

//! doesnt create newArr = [7]; !!



/// creates an empty array with 7 empty spaces containing nothing
/// (when only 1 arguement passed)


// (7) [empty × 7]





// ------------------------------- fill() -------------------------------- //




/// fill the empty array with a value, this will mutate the original



///?   oneArr.fill(1);


// (7) [1, 1, 1, 1, 1, 1, 1];





/// specify what to fill with, and where to fill from



///?  oneArr.fill(1, 3);


// (7) [empty × 3, 1, 1, 1, 1]





/// specify what to fill with, and where to fill from, and where to stop



oneArr.fill(1, 3, 5);


// (7) [empty × 3, 1, 1, empty × 2]






// ------ fill method can also be used on current arrays ----- //




/// fill movements with 1000 from position 3 to position 6


// movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



movements.fill(1000, 3, 6)



//  (8) [200, 450, -400, 1000, 1000, 1000, 70, 1300]


//! fill replaces the curretn values


