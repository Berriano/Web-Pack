'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


// ------------------- HIGHER ORDER/ FIRST CLASS FUNCTION ---------------------- //

//! FIRST CLASS functions = all functions are values

//! HIGHER ORDER functions receive another function as an argument (like eventListeners),
//!	and can also return a new function


// --------------------------------- Callbacks --------------------------------- //

//! ** callbacks can use functions as arguments


//! remove all the gaps in a string

const oneWord = function(str){


	return str.replaceAll(' ','').toLowerCase();

}

// console.log(oneWord('Hello everyone, how are you?'));

///? helloeveryone,howareyou?


const upperFirstWord = function(str){


//! split string to an array

// const splitStr = str.split(' ');

// console.log(splitStr);

///? ['Hello', 'everyone,', 'how', 'are', 'you?']



//! destructure array into first variable, then the rest kept as an array

// const [first,...rest] = splitStr;

// console.log(first,...rest);

///? Hello everyone, how are you?



//! OR chained......

const [first,...rest] = str.split(' ');

return [first.toUpperCase(), ...rest].join(' ');

};


// console.log(upperFirstWord('Hello everyone, how are you?'));


///? HELLO everyone, how are you?




// ---   Higher order function that passes a function as an argument  ---- ////



//! use a transformer function that takes a string and a function as arguments



const transformer = function(str, fn){


//! where to call the function ( fn is now the upperfirstword)
//! and pass the string to the function


	console.log(`Transformed string: ${fn(str)}`);
	console.log(`Original string: ${str}`);


	//! functions also have a .name property


	console.log(`Transformed by: ${fn.name}`);

}


//! only pass in the value of the function (no parenthese)


transformer('Javascript is the best', upperFirstWord);


///?   Transformed string: JAVASCRIPT is the best
///? 	 Originalstring: Javascript is the best
///?   Transformed by: upperFirstWord



transformer('Javascript is the best', oneWord);


///? Transformed string: javascriptisthebest
///?  Original string: Javascript is the best
///?  Transformed by: oneWord




/// Example of using a callback function


const high5 = () => console.log(`✋`);

const arr = ['Mark','Jarvie','Sophie','Jem'];

//! for each element in the array - call the high5 function

arr.forEach(high5);

//! FOREACH IS THE HIGHER ORDER FUNCTION - HIGH5 IS THE CALLBACK FUNCTION

///? 4 ✋ 



/// ABSTRACTION - CREATING FUNCTIONS TO HIDE LOWER ORDER DETAILS    				 
/// AS ITS A LOT OF DETAIL WHICH ISNT RELEVANT AND SHOWS ONLY REQUIRED DETAIL



/// CREATED A SIMPLE CALLBACK FUNCTION


const addTenPerc = num => num * 1.15;

const totalBefore = 100;

const cBackFunc = function(totalbefore,totalwithtax){

	console.log(`Total before tax: $${totalbefore}.
Total after tax $${Math.round(totalwithtax(totalbefore))}.`);
console.log('by Mark Beresford');
}

cBackFunc(totalBefore,addTenPerc);

