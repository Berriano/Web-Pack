// ----------------------------------  Maps   ------------------------------------- //
// ------------------------------- ---------------- ------------------------------- //


'use strict';



/// Map is a collection of keyed(paired) data items, just like an Object. 
/// But the main difference is that Map allows keys of any type.



/// create an empty map


const rest = new Map();




// ------- set() -------- //



/// to add paired values to a map


rest.set('name', 'Berrys Plaice');


///?  console.log(rest);


//  {'name' => 'Berrys Plaice'}



//! use any data type

rest.set(1, 'Bundaberg');


///?  console.log(rest);


//  {'name' => 'Berrys Plaice', 1 => 'Bundaberg'}



/// the set method returns the updated map immediatly, so sets can be chained


rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23);


///?  console.log(rest);

// {'name' => 'Berrys Plaice', 1 => 'Bundaberg', 'categories' => Array(4), 'open' => 11, 'close' => 23}



/// using booleans as values


rest.set(true, 'We are open');
rest.set(false, 'We are closed');


console.log(rest);

// 0:		 {"name" => "Berrys Plaice"}
// 1:		 {1 => "Bundaberg"}
// 2:		 {"categories" => Array(4)}
// 3:		 {"open" => 11}
// 4:		 {"close" => 23}
// 5: 	 {true => "We are open"}
// 6:		 {false => "We are closed"}




// ------- get() -------- //



/// use get with the pair name to retrieve the pair value



console.log(rest.get('name'));


//  Berrys Plaice]


// console.log(rest.get(true));


// We are open





/// using map to see if shop is open


const time = 13;


rest.get(time > rest.get('open') && time < rest.get('close'));


//! time = 13


//! if time > 11(open) = true  then equals  rest.get(true) = {true => "We are open"}

//! if time < 11(open) = false  then equals  rest.get(false) = {false => "We are closed"}





// ------- has() -------- //



/// to check if the map has a value



console.log(rest.has('open'));


// true






//------- delete()-------- //



///  delete a pair by the key value



rest.delete(1);

console.log(rest);


// {'name' => 'Berrys Plaice', 'categories' => Array(4), 'open' => 11, 'close' => 23, true => 'We are open', …}


//! 1 bundaberg has been deleted





//------- size-------- //


/// get the size of the map


console.log(rest.size);

// 6




//------- clear-------- //



///  to clear the map


// rest.clear;




/// using arrays in maps


rest.set([1, 2], 'test');


console.log(rest);


// 5: {false => "We are closed"}

// 6: {Array(2) => "test"}

// 		key: (2) [1, 2]

// 		value: "test"


//! the key is the array, but cannot be accessed because of the heap

console.log(rest.get([1, 2]));


// undefined



/// to use and get an array as a key -  set the array to an expression


const arr = [1, 2];


rest.set(arr, 'test');


console.log(rest.get(arr));


// test





/// convert object to a map




const openingHours = {

    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },

};



const hoursMap = new Map(Object.entries(openingHours));


console.log(hoursMap);


//	 0: 	{"thu" => Object}
//	 1: 	{"fri" => Object}
//	 2: 	{"sat" => Object}






// ----------------------------------  Maps   ------------------------------------- //
// -------------------------------  Iteration  ------------------------------------ //



//----------------- Quiz App ------------------- //



///  setting a map with key pairs set already using an array of arrays


const question = new Map([

    ['Question', 'What is the best coding language ever?'],
    [1, 'C++'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again']

]);


///?  console.log(question.get('Question'));




/// use loop with destructuring on map and log the answers to the console


for (const [key, value] of question) {

    if (typeof key === 'number') {

        ///?  console.log(`Answer ${key} : ${value}`);
    }


}


// const answer = Number(prompt('Answer: 1,2 or 3'));
const answer =3;



/// long way


// if (answer === 3) {

//     console.log(question.get(true));

// } else console.log(question.get(false));



/// my short way


console.log(question.get(answer === question.get('correct')));





/// convert a map back to an array



const backToArr = [...question];


console.log(backToArr);


console.log(backToArr[1]);

// 1: (2) [1, 'C++']