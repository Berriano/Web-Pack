// ----------------------------------- Arrays ---------------------------------- //
// ---------------------------------- reduce() --------------------------------- //



'use strict';



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];




/// reduce( accumalator , current element, current index, current array)



//! accumalator = total sum so far, set initial value to 0;
//! current element = curretn element in array
//! curretn index = current index number
//! current array = the whole of the actual array being looped




/// use reduce to calculate the balance of the account,              
/// by adding the current value to the accumalator on each iteration 




///? const balance = movements.reduce((acc, acc) => acc + curr);




/// after the callback function , you can specify the initial value of the accumalator
/// usually set to 0 as is below                                                      




const balance = movements.reduce((acc, curr) => acc + curr , 0);


// 3840






/// get the max value from the movements array




const highestValue = movements.reduce(function(acc,curr){


	if(acc > curr) {return acc}

	else return curr;
	
}, movements[0])

console.log(highestValue );
