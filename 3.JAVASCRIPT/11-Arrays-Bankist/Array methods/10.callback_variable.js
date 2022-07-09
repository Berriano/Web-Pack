// ----------------------------------- Arrays ---------------------------------- //
// ------------------------- callback function variable  ----------------------- //



'use strict';


let movements = [200, 450, 400, 3000, 650, 130, -40, 1300];




/// Use a callback function in a variable to keep code DRY 



const OverZero = mov => mov > 0;




const anyOverZero = movements.some(OverZero);

console.log(anyOverZero);


// true



const allOverZero = movements.every(OverZero);

console.log(allOverZero);


// fasle



const filterAllOverZero = movements.filter(OverZero);


// [200, 450, 400, 3000, 650, 130, 1300]







