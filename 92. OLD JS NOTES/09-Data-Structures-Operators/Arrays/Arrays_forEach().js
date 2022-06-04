'use strict';




// -------------------------------- Array ForEach() -------------------------------- //



//! forEach is a higher order function which need a call back function to
//! be executed on an array, and will only apply a function to an array


let movements = [200, 450, -400,];


//! for of example to loop movemennts

console.log('\n----------------------- For..of loop ----------------------------');

for ( const mov of movements){

	if(mov >0){
		console.log(`Deposited ${mov}`);}
		else{
			console.log(`Withdrew ${mov}`);
		}
}


//! You do not need to call a forEach method, it calls itself 
//! it will:
//! 				1. loop over the array
//!					2. on each iteration, execute the callback function
//!					3. as it calls the callback function, it will assign the current
//!						 element as an argument, so you can specify this argument as a parameter


console.log('\n------------------------- ForEach Method ---------------------------');

movements = [200, 450, -400,];



//! forEach loop over movements



movements.forEach( function(mov){

										if(mov >0){
											console.log(`Deposited ${mov}`);}
											else{
												console.log(`Withdrew ${mov}`);
		}
	}
)


///? The first iteration is 200, so 200 = mov in the code block

///? 	if 200 > 0 log `Deposited 200` else log 'Withdrew 200'

///? then on to 450 with the same process until th elast element is done







// ------------------ forEach (current element,index and array) ------------------- //



//! forEach passes in the (current element,index and array) in that order,
//!  which can be specified in the callback function parameters


//! FOR..OF ORDER IS INDEX, CURRENT ELEMENT

//! FOREACH ORDER IS CURRENT ELEMENT, INDEX, ARRAY



//! MAIN DIFFERENCE BETWEEN THE LOOPS IS -


//! 					" YOU CANNOT BREAK OUT OF A FOREACH LOOP"





/// Using indexes with the forEach loop 




console.log('\n------------------------ ForEach Indexing ---------------------------');



movements = [200, 450, -400,];



//! to make index start at 1, add 1 to index( zero-based)


movements.forEach( function(mov, index, array){

					if(mov >0){
						
						console.log(`Movement ${index+1} : Deposited ${mov}`);}
						
					else{
							
						console.log(`Movement ${index+1} : Withdrew ${mov}`);
	}
 }
);




// -------------------------- ForEach with Maps and Sets ------------------------ //



/// forEach with Map()


//! new.Map([keys,values])


console.log('\n----------------- ForEach with new Map() --------------------------');


const currencies = new Map([

  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],

]);

//! similar set up as array but instead of 
//!	(element, index, array) it's (value, key, map)
 


currencies.forEach(function(value,key,map){

						console.log(`${key} : ${value} `);


})



/// forEach with Set()



//! new.Set([keys,values])


console.log('\n----------------- ForEach with new Set() --------------------------');



const currenciesUnique =  new Set(['USD','GBP','EURO','GBP','USD', 'GBP','EURO']);


console.log(currenciesUnique);


//! key has no value as sets have no key (its actually part of the foreach loop)

// currenciesUnique.forEach(function(value,key,map){

//! Use an underscore as key parameter is redundant (throwAway variable)

currenciesUnique.forEach(function(value, _ ,map){

	console.log(`${value} : ${value}`);
});


