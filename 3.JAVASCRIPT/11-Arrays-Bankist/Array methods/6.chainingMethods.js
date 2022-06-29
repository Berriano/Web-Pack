// ----------------------------------- Arrays ---------------------------------- //
// ------------------------------ Chaining methods ----------------------------- //



'use strict';



const euroToUSD = 1.4;


const euroToGBP = 1.2;


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];






// --- Filter out all the deposits and convert them to USD then add them all up -- //




const convertedUSD = movements
    .filter(mov => mov > 0)
    .map(mov => Math.trunc(mov * euroToUSD))
    .reduce((acc, curr) => acc + curr);



// 5522


//! chaining is only possible if the previous method returns an array






// --------- Debugging chaining ----------- //




/// use the array parameter in each chain to see if the array returned previously is correct




const convertedGBP = movements

    .filter(mov => mov > 0)


		/// check the array on the map() method to check the filter() returned array


    .map((mov,i,arr) => {
			
			console.log(arr);

			//! return needed as curly brackets used

			return mov * euroToGBP;		

		})
		
		.reduce((acc, curr) => acc + curr);


console.log(convertedGBP);