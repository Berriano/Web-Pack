// ----------------------------------- Arrays ---------------------------------- //
// --------------------------    flat() and flatMap()   ------------------------ //



'use strict';




// --------------------- flat() -------------------- //




const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];



///  flatten a 1 deep nested array to just 1 array

//! No callback function needed


const flatted = arr.flat();


// [1, 2, 3, 4, 5, 6, 7, 8, 9]





/// when array is more than 1 level deep




const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8, 9];


const flattedDeepWrong = arrDeep.flat();


//  [Array(2), 3, 4, Array(2), 7, 8, 9]

//! because flat default is flat(1) which is only 1 level deep



/// specify the arguemnet to 2


const flattedDeep = arrDeep.flat(2);


// [1, 2, 3, 4, 5, 6, 7, 8, 9]






// ---------------   Calculate the total of all 3 arrays together   ---------------- //



const wages1 = { wages: [1000, 1100, 1250, 1200, 950] };

const wages2 = { wages: [200, 250, 150, 80] };

const wages3 = { wages: [30, 80, 60, 45, 105, 215] };



const wages = [wages1, wages2, wages3];



const totalWages = wages.map(wage => wage.wages);

//! returns a nested array of each of the wage arrays


// 0: (5) [ [1000, 1100, 1250, 1200, 950]
// 1: (4) [200, 250, 150, 80]
// 2: (6) [30, 80, 60, 45, 105, 215] ]




/// put into 1 array


const flattenWages = totalWages.flat();


// [1000, 1100, 1250, 1200, 950, 200, 250, 150, 80, 30, 80, 60, 45, 105, 215]




/// add all together



const totalAllWages = flattenWages.reduce((acc, curr) => acc + curr, 0);


// 6715




/// Methods chained


const chainedTotal = wages
	.map(wage => wage.wages)
	.flat()
	.reduce((acc, curr) => acc + curr, 0);



console.log(chainedTotal);


// 6715




// -------------------- flatMap() ------------------ //




/// same as before but flat and map are together as a method(map)



const chainedFlatMapTotal = wages
	.flatMap(wage => wage.wages)
	.reduce((acc, curr) => acc + curr, 0);


// 6715
	

//! FlatMap only goes 1 level deep so flat has to be used for 2 levels










