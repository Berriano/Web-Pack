// ----------------------------------- Arrays ---------------------------------- //
// ---------------------------------- filter() --------------------------------- //



'use strict';




const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




/// filter out the deposits from the movements array into a new array



const deposits = movements.filter(mov => mov > 0);


//  [200, 450, 3000, 70, 1300]





/// filter out the withdrawals from the movements array



const withdrawals = movements.filter(mov => mov < 0);


// [-400, -650, -130]





/// filter out the first 3 transactions



const firstThree = movements.filter((mov,i) => i <= 2);


// [200, 450, -400]






