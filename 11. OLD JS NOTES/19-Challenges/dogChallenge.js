'use strict';


const checkDogs = function(dogsJulia, dogsKate){


	/// shallow julia

			
	const shallowJulia =	dogsJulia.slice();

	
	/// slice julia cats

	
	const sliceJulia = shallowJulia.slice(1,-2);


	/// join julia sliced and kates


	const joinedDogs = [...sliceJulia, ...dogsKate];


	///  loop and log if its an adult or a puppy

	joinedDogs.forEach(function(dogAge,i){

		dogAge >= 3 
		
		? console.log(`Dog number ${i+1} is an adult, as its ${dogAge} years old`)
		: console.log(`Dog number ${i+1} is still puppy, as its only ${dogAge} years old 🐶`)
		 
	 }
 )				
};

// checkDogs( [9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);




/// challenge 2 



const calcAverageHumanAge = function(dogAge){


/// use map to apply calculation of humanAge 


const humanAge = dogAge.map((dog) => 	dog <= 2 ? dog * 2 : 16 + dog * 4)


/// filter the dogs over 18 


											 .filter((dogAge) => dogAge > 18);

/// find avergae using reduce	 

const averageHumanAge = humanAge.reduce((acc,curr) => acc + curr , 0)/humanAge.length;

// console.log(humanAge);

// console.log(averageHumanAge);

};

calcAverageHumanAge(  [5, 2, 4, 1, 15, 8, 3]);


/// challenge 3



const calcAverageHumanAgeArrow = 

      					dogAge =>	dogAge.map((dog) => 	dog <= 2 ? dog * 2 : 16 + dog * 4)
																.filter((dog) => dog > 18)
																.reduce((acc,curr,_,arr) => 


/// Only way to chain a reduce() average....


//! current element/arr.length = accumalator

//! accumalator + (current element/arr.length) = accumalator

//! accumalator + (current element/arr.length) = accumalator... and so on


																	acc + curr/arr.length, 0);
	

// console.log( calcAverageHumanAgeArrow(  [5, 2, 4, 1, 15, 8, 3]));





// --------------------------------- Last Challenge ------------------------------ //




const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
	];
 


// 	1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
// 			the recommended food portion and add it to the object as a new property. Do 
// 			not create a new array, simply loop over the array. Forumla: 
// 			recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
// 			food, and the weight needs to be in kg



dogs.forEach(dog => dog.recFood = Math.round(dog.weight** 0.75 * 28));

console.log(dogs);


// 2. Find Sarah's dog and log to the console whether it's eating too much or too 
// 		little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
// 		the owners array, and so this one is a bit tricky (on purpose) �



const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));


console.log(dogSarah);


const sarahsDogEating = console.log(

`Sarahs dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'too Much' : 'too little'}`

);



// 3. Create an array containing all owners of dogs who eat too much 
// 		('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
// 		('ownersEatTooLittle').


const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recFood)
															.flatMap(dog =>dog.owners) ;



const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);


// 4. Log a string to the console for each array created in 3., like this: "Matilda and 
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
// too little!"

console.log(`${ownersEatTooLittle.join(' & ')}'s dogs eat too little `);
console.log(`${ownersEatTooMuch.join(' & ')}'s dogs eat too much `);


console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);


// 5. Log to the console whether there is any dog eating exactly the amount of food 
// that is recommended (just true or false)


console.log(dogs.some(dog => dog.curFood === dog.recFood));


// 6. Log to the console whether there is any dog eating an okay amount of food 
// (just true or false)


console.log(dogs.some(dog => dog.curFood <= dog.recFood*1.1 
															&& dog.curFood >= dog.recFood*0.9 ));




// 7. Create an array containing the dogs that are eating an okay amount of food (try 
	// to reuse the condition used in 6.)

const okArray = dogs.filter(dog => dog.curFood <= dog.recFood*1.1 
	&& dog.curFood >= dog.recFood*0.9 );


	console.log(okArray);

	// 8. shallow copy sorted by recfood

const shallowDogs = dogs.slice().sort((a, b) =>  a.recFood - b.recFood );


console.log(shallowDogs);


