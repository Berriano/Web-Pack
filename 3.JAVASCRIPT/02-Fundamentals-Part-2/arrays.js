//-------------------------- Fundamentals Part 2 ---------------------------//


'use strict';


// -----------------------------   Arrays   ------------------------------//
// ---------------------------------- ------------------------------------//


/// Start 1


/*

/// multiple variable method


// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3	= 'Peter';

// console.log(friend1,friend2,friend3);




/// Array method



const friends = ['Michael', 'Steven', 'Peter'];


///? console.log(friends);


//  ['Michael', 'Steven', 'Peter']


///? console.log(friends[0]);


//  Michael



///  Array length



friends.length;


// 3



///  get last value of an array



const lastValue = friends[friends.length - 1];


//!	 lastValue =  friends[2];


// peter   : length is 3 - last value is [2] so minus 1



/// replace array value manually



friends[2] = 'Jay';


// ['Michael', 'Steven', 'Jay']



//! const arrays can be mutated even though const is used



/// an array with my information



let year = 2022;

let birthPlace = 'Weymouth';

let myFriends = ['Barn', 'Brad', 'Art']


const mark = ['Mark', 'Beresford', year - 1976, birthPlace, myFriends];


// (5) [
//  'Mark', 'Beresford', 46, 'Weymouth', Array(3) ⬇ ['Barn', 'Brad', 'Art']
//  ]


///? console.log(mark);




///  Using functions with arrays


const calcAge = birthYear => 2022 - birthYear;


const ourYears = [1990, 1976, 1999, 2009, 1974];




const age1 = calcAge(ourYears[0]);

console.log(age1);

// 32



const age2 = calcAge(ourYears[1]);


console.log(age2);

// 46


//! last indexed age


const age3 = ourYears[ourYears.length - 1];


console.log(age3);

// 48


const ages = [calcAge(ourYears[0]), age2, calcAge(ourYears[ourYears.length - 1])]

console.log(ages);



// End 1


*/




// -----------------------------   Arrays   ------------------------------//
// ---------------------------   Assignment   ----------------------------//



const populations = [65, 25, 365, 1500];



if (populations.length === 4) console.log(`The arrays has 4 elements`);

else console.log(`The array does not have 4 elements`);




const percentageWorld = population => (population / 7900) * 100;


const percentages = [percentageWorld(populations[0]), percentageWorld(populations[1]), percentageWorld(populations[2]), percentageWorld(populations[3])];


console.log(percentages);



// (4) [0.8227848101265823, 0.31645569620253167, 4.620253164556963, 18.9873417721519]






// -----------------------------   Arrays   ------------------------------//
// ----------------------------   Methods    -----------------------------//




const towns = ['Bmouth', 'Wmouth', 'BdBerg'];





//--  push() --//

///  adds element to end of the array



towns.push('Brissy');


console.log(towns);


// (4) ['Bmouth', 'Wmouth', 'BdBerg', 'Brissy']






//-- unshift() --//

///  adds element to start of the array



towns.unshift(`Pompey`);


console.log(towns);


// (5) ['Pompey', 'Bmouth', 'Wmouth', 'BdBerg', 'Brissy']






//--  pop() --//

/// removes the last element of the array

//! ...and returns the removed element



const lastTown = towns.pop();


console.log(lastTown);


//  Brissy



console.log(towns);


// (4) ['Pompey', 'Bmouth', 'Wmouth', 'BdBerg']






//--  shift() --//

/// removes the first element of the array

//! ... and returns the removed element


const firstTown = towns.shift();



console.log(firstTown);


//  Pompey


console.log(towns);


//  (3) ['Bmouth', 'Wmouth', 'BdBerg']






//--  indexOf() --//

/// to find the position of an element 

//!  ...index no. returned [1] as digit



console.log(towns.indexOf('Wmouth'));


//  1


//! -1 will be returned if element is not in the array






//--  includes() --//

/// returns true or false if element is included or not



console.log(towns.includes('BdBerg'));


//  true


console.log(towns.includes('Sydney'));


// false





//! includes() does not do type coercion


towns.push('23');




if (towns.includes(23)) {
	
	console.log(`23 the string is included`);
	
} else console.log('23 is a number and not included');


// 23 is a number and not included





if (towns.includes('23')) {
	
	console.log(`23 the string is included`);
	
} else console.log('23 is a number and not included');


// 23 the string is included






// -----------------------------   Arrays   ------------------------------//
// ---------------------------   Assignment   ----------------------------//




const neighbours = ['Wales','Scotland'];



neighbours.push('Utopia');

console.log(neighbours);

// (3) ['Wales', 'Scotland', 'Utopia']




neighbours.pop();

console.log(neighbours);

// (2) ['Wales', 'Scotland']




if(!neighbours.includes('Germany')){
	
	console.log(`Probably not a central European Country`);
	
}




const wales = neighbours.indexOf('Wales');

console.log(wales);

neighbours[0] = 'Whales';

console.log(neighbours);






// --------------------------- Coding Challenge ---------------------------//
// ----------------------------- ---- 2 -----  ----------------------------//





