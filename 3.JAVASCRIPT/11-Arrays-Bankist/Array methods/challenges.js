// ----------------------------------- Arrays ---------------------------------- //



'use strict';


// -------------------- dogs challenges 1----------------- //



const checkDogs = function (dogsJulia, dogsKate) {



	const dogsJuliaShallow = dogsJulia.slice();

	const dogsJuliaArr = dogsJuliaShallow.slice(1, -2);

	const bothDogs = dogsJuliaArr.concat(dogsKate);


	bothDogs.forEach(function (dog, i) {

		if (dog >= 3) {

			console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);

		} else {

			console.log(`Dog number ${i + 1} is still a puppy 🐶`);
		}
	});

	// console.log(bothDogs);

}




checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// -------------------- dogs challenges 2 ----------------- //





const calcAverageHumanAge = ages => ages
	.map(age => age <= 2 ? 2 * age : 16 + age * 4)
	.filter(age => age >= 18)
	.reduce((acc, curr, i, array) => acc + curr / array.length, 0);





console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));




// -------------------- dogs challenges 4 ----------------- //




const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];




/// 1



dogs.forEach(dog => dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28));



/// 2



const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));


console.log(sarahDog);




if (sarahDog.curFood > (sarahDog.recommendedFood * 1.1)) {

	console.log(`Sarahs Dog is eating too much`);
};

if (sarahDog.curFood < (sarahDog.recommendedFood * 0.9)) {

	console.log(`Sarahs Dog is not eating enough`);

}



/// 3


const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood * 1.1).map(dog => dog.owners);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.recommendedFood * 0.9).map(dog => dog.owners);;


console.log(dogs);

console.log(ownersEatTooMuch);

console.log(ownersEatTooLittle);




/// 4




ownersEatTooLittle.forEach(owner => console.log(`${owner.join(' & ')}'s dog eats too little`));

ownersEatTooMuch.forEach(owner => console.log(`${owner.join(' & ')}'s dog eats too Much`));





/// 5




const ownersEatCorrect = dogs.some(dog => dog.curFood === dog.recommendedFood);

console.log(ownersEatCorrect);



/// 6

const ownersEatClose = dogs.some(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);

console.log(ownersEatClose);


///7

const ownersEatCloseArr = dogs.filter(dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1);

console.log(ownersEatCloseArr);


///8



const dogsShallow = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);





console.log(dogsShallow);

