//-------------------------- Fundamentals Part 2 ---------------------------//



/// Strict mode : help identify bugs in console


'use strict';


/// Start 1

/*

// ----------------------------- Functions  ------------------------------//
// ---------------------------------- ------------------------------------//



/// Simple function


function logger(name) {

    console.log(`My name is ${name}`);

}


///? logger('Mark');

// My name is Mark

///? logger('Jarvie');

// My name is Jarvie





///  Fruit blender function



//! set the function / name / and parameters


function fruitBlender(apples, oranges, bananas) {


    //! create a variable to hold the value to be returned for the function


    const juice = `Juice with ${apples} apples, ${oranges} oranges and ${bananas} bananas`;


    //! return that value to the function


    return juice;

}




//! create a variable to hold the value returned in the function (the juice expression)


const appleJuice = fruitBlender(4, 0, 0);

console.log(appleJuice);

// Juice with 4 apples, 0 oranges and 0 bananas




//! Re-use the function to get different values


const orangeJuice = fruitBlender(3, 0, 0);

console.log(orangeJuice);

// Juice with 3 apples, 0 oranges and 0 bananas




const bananaJuice = fruitBlender(2, 0, 0);

console.log(bananaJuice);

// Juice with 2 apples, 0 oranges and 0 bananas





const multiVitaminJuice = fruitBlender(1, 3, 2);

console.log(multiVitaminJuice);

// Juice with 1 apples, 3 oranges and 2 bananas





// ----------------------------- Functions  ------------------------------//
// ---------------------------   Assignment  -----------------------------//





function describeCounrty(country, population, capitalCity) {

    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;

}



const england = describeCounrty('England', 65, 'London');

console.log(england);



const australia = describeCounrty('Australia', 25, 'Canberra');

console.log(australia);



const philippines = describeCounrty('Philippines', 105, 'Manila');

console.log(philippines);









// ----------------------------- Functions  ------------------------------//
// ---------------------------- Declaration ------------------------------//



//! declaration is like a statement



function calcAge1(birthyear) {


    //!  for single value functions - use return instead of saving to variables

    return 2022 - birthyear;

}


//! store the calculated returned value to a variable


const myAge = calcAge1(1976);


console.log(myAge);



//!  A DECLARATION CAN BE CALLED BEFORE IT APPEARS IN THE CODE






// ----------------------------- Functions  ------------------------------//
// ---------------------------- Expression  ------------------------------//



//! expressions is a value (expression not statement)



const calcAge2 = function(birthyear) {

    return 2022 - birthyear;

}


const age2 = calcAge2(1974);


console.log(age2);



//!  AN EXPRESSION CANNOT BE CALLED BEFORE IT APPEARS IN THE CODE - ONLY AFTER







// ----------------------------- Functions  -------------------------------//
// ---------------------------   Assignment 2 -----------------------------//





///  declaration



function percentageOfWorld1(population) {
	
	return (population / 7900 ) * 100;
	
}





const uk1 = percentageOfWorld1(70);

console.log(uk1);



const nz1 = percentageOfWorld1(5);

console.log(nz1);



const usa1 = percentageOfWorld1(350);

console.log(usa1);





/// expression



const percentageOfWorld2 = function(population){
	
	return (population / 7900 ) * 100;
	
}




const uk2 = percentageOfWorld2(70);

console.log(uk2);



const nz2 = percentageOfWorld2(5);

console.log(nz2);



const usa2 = percentageOfWorld2(350);

console.log(usa2);



*/


/// End 1




// ----------------------------- Functions  -------------------------------//
// -----------------------------    Arrow     -----------------------------//


/// Start 2

/*

//!  Arrow functions are still expressions


///?    variable  / parameter  / expression    


const calcAge3 = birthYear => 2022 - birthYear;


const myAge = calcAge3(1976);


// console.log(myAge);




///  Calculate years until retirement



const yearsUntilRetire = birthYear => {

    const age = 2022 - birthYear;
    const retire = 70 - age;
    return retire;

}




const markRetire = yearsUntilRetire(1976);

// console.log(markRetire);



const jarvieRetire = yearsUntilRetire(1974);

// console.log(jarvieRetire);




const nameRetire = (birthYear, firstName) => {

    const age = 2022 - birthYear;
    const retire = 70 - age;
    return `${firstName} will retire in ${retire} years`;
}


const markRetire2 = nameRetire(1976, 'mark');


console.log(markRetire2);

console.log(nameRetire(1974, 'Jarvie'));





// -------------------------   Arrow Functions ----------------------------//
// -----------------------------  Assignment   ----------------------------//





const percentageOfWorld3 = population => (population / 7900) * 100;


const india = percentageOfWorld3(1150);

console.log(india);




const percentageOfWorld4 = (country, population) => {

    const percentage = (population / 7900) * 100;

    return `${country}'s population is ${Math.trunc(percentage)}% of the whole world`;

}



const china = percentageOfWorld4('China', 1500);

console.log(china);




// ----------------------------- Functions  ------------------------------//
// ------------------------- CALLING Functions  --------------------------//




///  friut processor that also cuts pieces of fruit



const cutPieces = fruit => fruit *4;



function fruitProcessor(apples, oranges) {


	//! calls the outer function for slicing the fruit with the specified amount in parameter


	const applePieces = cutPieces(apples);

	const orangePieces = cutPieces(oranges);


	//! now inserts the pieces of fruit

	
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;

	return juice;

}



//! call the function with 4 apples which will be cut into 16 pieces by the outer function


const appleSmoothie = fruitProcessor(4,0);


console.log(appleSmoothie);





// -------------------- Functions calling Functions -----------------------//
// -----------------------------  Assignment   ----------------------------//




// const percentageOfWorld3 = population => (population / 7900) * 100;


const describePopulation = (country, population) => {

	const percentage = percentageOfWorld3(population);

	return `${country} has ${population} million people, which is about ${(percentage.toFixed(1))}% of the world`

}


const brazil = describePopulation('Brazil', 215);


console.log(brazil);


const russia = describePopulation('Russia', 160);


console.log(russia);


const indonesia = describePopulation('Indonesia', 245);

console.log(indonesia);





// --------------------------- Functions Review ---------------------------//
// ----------------------------- ------------  ----------------------------//




const ageCalc = function(birthYear) {
	
	return 2022 - birthYear;
	
}




const yearsTilRetirement = (birthYear, firstName) => {
	
	const age = ageCalc(birthYear);
	
	const retire = 70 - age;
	
	if (retire >= 0) {
		
		return `${firstName} will retire in ${retire} years`;
		
	} else return `${firstName} has retired!`
	
}


const markRetiring = yearsTilRetirement(1976, "Mark");

const mumRetiring = yearsTilRetirement(1944, "Mum");

console.log(markRetiring);

console.log(mumRetiring);








// --------------------------- Coding Challenge ---------------------------//
// ----------------------------- ---- 1 -----  ----------------------------//




/// functions




const calcAverage = (a, b, c) => (a + b + c) / 3;



const checkWinner = function(dolphins, koalas) {

	if (dolphins >= 2 * koalas) {
		
		return `Dolphins win (${dolphins} vs ${koalas})`

	} else if (koalas >= 2 * dolphins) {

		return `Koalas win (${koalas} vs ${dolphins})`
		
	}
	
	else return `NO WINNER!!!`
}





/// variables



const averageDolphins = calcAverage(44, 23,71.);
const averageKoalas = calcAverage(65, 54 ,49);



console.log(averageDolphins);
console.log(averageKoalas);



const winner = checkWinner(averageDolphins, averageKoalas);

const randomWinner = checkWinner(1221, 655)

console.log(randomWinner);




/// End 2

*/