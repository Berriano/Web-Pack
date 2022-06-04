'use strict';



//! ** use for maps

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





// ------------------------------------ Sets -------------------------------------- //

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


//! SIMILAR TO ARRAYS


// -- create a new set -(has to be an iterable) -- //

///? array of strings

const ordersSet = new Set(
	
	['pasta', 'pasta','pizza','pasta', 'macaroni','pizza','pasta', 'macaroni']

	);


// console.log(ordersSet);

/// returns an object of each item name, not every element

///? {'pasta', 'pizza', 'macaroni'}



///? a string


// console.log(new Set ( 'Mark' ));


///? {'M', 'a', 'r', 'k'}



// -- Uses for sets -- //



// -- .size  -- //


// console.log(ordersSet.size);

///? 3



// -- .has -- //


// console.log(ordersSet.has('pizza'));

///? true



// -- .add -- //


// console.log(ordersSet.add('Garlic Bread'));

///? {'pasta', 'pizza', 'macaroni', 'Garlic Bread'}



// -- .delete -- //



ordersSet.delete('pizza');

// console.log(ordersSet);

///? {'pasta', 'macaroni', 'Garlic Bread'}



// -- clear -- //


// ordersSet.clear();

// console.log(ordersSet);


/// Sets are iterable so for...of loops are possible


for (const order of ordersSet){

	// console.log(order);
}

///? pasta   macaroni   Garlic Bread


/// Practical use for Sets


//! to remove duplicates from arrays



const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter','Chef', 'Waiter'];


const staffUnique = new Set(staff);


// console.log(staffUnique);



{'Waiter', 'Chef', 'Manager'}



//! to then create an array from the set using spread and sq brackets


const staffUniqueArr = [...new Set(staff)];


// console.log(staffUniqueArr);


///? ['Waiter', 'Chef', 'Manager']




/// to get the size of the set


// console.log(new Set(

// ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter','Chef', 'Waiter']).size

// );

///? 3



/// count how many characters there are in a string set


// console.log(new Set('MarkBeresford').size);


///? 10







// ----------------------------------- Maps ----------------------------------- //


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map


//! SIMILAR TO OBJECTS EXCEPT ANY TYPE OF KEY CAN BE USED NOT JUST NUMBERS AND STRINGS


///?  Map sign is  => 


const rest = new Map();


// -- .set  -- //


//! similar to add -  used to add to a map


rest.set('name', 'Classico');

rest.set('1', 'Florence');

rest.set('2', ' London');

// console.log(rest);


///? {'name' => 'Classico', '1' => 'Florence', '2' => ' London'}


//! when set is used it updates the map its called on and also return the map


// console.log(rest.set('3', 'Bundaberg'));


///? {'name' => 'Classico', '1' => 'Florence', '2' => ' London', '3' => 'Bundaberg'}



/// set can be chained

rest.set('categories',
					['pasta', 'pasta','pizza','pasta', 'macaroni','pizza','pasta', 'macaroni'])
		.set('pizza Toppings',['cheese','tomato','ham','chicken'])
		.set('pasta flavours', ['cheese','tomato', 'creamy'])
		.set('open', 11)
		.set('close', 23)
		.set(true,'we are open')
		.set(false,'we are closed');

// console.log(rest);




// --- get -- //


console.log(rest.get(rest.get('open') === 11));  ///? or a variable that === 11

///? 'we are open'


/// to retrieve data from the map method 

//! when retrieving data syntax has to be exact, === to;

// console.log(rest.get('name'));

///? Classico

// console.log(rest.get(true));

///? we are open

// console.log(rest.get(3));


///? return undefined


// console.log(rest.get('3'));


///? return Bundaberg



/// use-case for maps

//! pass a condition into the get() method, to get a map.set()

const time =21;

const openORclosed = rest.get(time > rest.get('open') && time < rest.get('close'));

// console.log(openORclosed);

///? we are open



// -- has-- //


//! to check a map for a value


// console.log(rest.has('categories'));

///? true

// -- delete -- //

// rest.delete('2');

// console.log(rest);


// -- size -- //

// console.log(rest.size)

///? 10


// -- clear -- //

// rest.clear();


/// using larger keys for maps


const best = new Map();

const arr = [1,2,3];

best.set(arr, 'Test');

// console.log(best);


//! TO GET THE KEY YOU CANNOT USE JUSTR THE ARRAY = [1,2,3],
//! YOU HAVE TO USE THE VARIABLE NAME arr.

// console.log(best.get(arr));

///? Test


// console.log(best.get([1,2,3]));

///? undefined



//! you can even use maps with query selectors

best.set(document.querySelector('h1'), 'Heading');
// console.log(best);



// ------------------------ Convert Object to Map  ------------------------------- //


//! Use iteration instead of set() to create a new map
//! using an array of arrays

//! keys, values

/// QUIZ


const question = new Map(

	[
		['Question', 'What is the best programming language in the world?'],
		[	1,  'C'],
		[2, 'Java'],
		[3, 'JavaScript'],
		['correct', 3],
		[true, 'correct'],
		[false, 'try again'],

	]
);

// console.log(question);

///? same structure is returned as Object.entries() i.e Array of Arrays


//! So you can easily convert from Object to Maps using Object.entries()


const hoursMap	 =  new Map( Object.entries(openingHours) );


// console.log(hoursMap);




// ------------------------------ Map Iteration --------------------------- //


//! destructure map using for...of loop with sq brackets []

//! similar to objects except no need for object.entries() as maps are iterable




	//! log the question first

// console.log(question.get('Question'));


for(const [ key, value ] of question){
	
	//! only print an element if the key is a number

	//  if(typeof key === 'number'){console.log(`Answer ${key} : ${value}`);}



}

///? const answer = +prompt('Your answer');

//! use the boolean key to print the correct message

// answer === 3 ? console.log(question.get(true)) 
// 						 : console.log(question.get(false));


/// The Jonas Method	 ///



//! 1.  question.get('correct') 

///? correct , 3 (so the value is 3)



//! 2. question.get('correct) === answer;

///? 	does answer === 3 - if so return true;

///? 	so basically, question.get('correct) === answer = true



//! 3. question.get(question.get('correct) === answer);

///? 	means -  question.get(true) which is [true, 'correct'] so correct

///? 	so - question.get(true) returns 'correct'.

///? 	and -	question.get(false) returns 'try again'



// console.log(question.get(question.get('correct') === answer));

//! CORRECT WAY TO USE MAP


// ----------------------- CONVERT A MAP BACK TO AN ARRAY --------------------- //


const convertMapToArr = [...question];

// console.log(convertMapToArr);


//! get the entries, keys and values if needed in a proper array using ...spread


const entries = [...question.entries()];

// console.log(entries);


const keys = [...question.keys()];

// console.log(keys);


const values = [...question.values()];

// console.log(values);

//! convert to a array as a set 


const setArr = [...new Set(rest.values())];

// console.log(setArr);