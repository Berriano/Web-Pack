'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },


	order: function(starterIndex, mainIndex){
		return [this.starterMenu[starterIndex], 
						this.mainMenu[mainIndex]];
	},


	orderDelivery : function({address = 'Pick-up',mainIndex,starterIndex,time}){

		console.log(

`Order time: ${time},
Delivery to : ${address}. 
Order details - 
Starter: ${this.starterMenu[starterIndex]}  
Main: ${this.mainMenu[mainIndex]}`); 			
	},



// -------------------------- Spread operator function -------------------------- //

orderPasta: function(ing1, ing2, ing3){

console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}. ENJOY!!!!`);
	}
};


//! create an array of prompts for the 3 different arguments to be passed

///?  const ingredients = [
///?  	prompt('Ingredient 1'),
///?  	prompt('Ingredient 2'),
///?  	prompt('Ingredient 3'),
	
///?  ];

// console.log(ingredients);

///? ingrediants = [ing1, ing2, ing3 ]


//! use the spread operator for all 3 ingredients


///? restaurant.orderPasta(...ingredients)


///?   Here is your Pasta with ing1, ing2, ing3. ENJOY!!!!



///							⬆							⬆							⬆							⬆														
///		**  See function above for spread operator example															
// ---------------------------------- Spread Operator ------------------------------ //
// ------------------------------------- ARRAYS ------------------------------------ //


//! SPREAD OPERATORS CAN ONLY BE USED ON OBJECTS TO COPY OR ADD.

//! YOU CAN ONLY USE SPREAD OPERATOR WHEN BUILDING AN ARRAY OR ...
//! WHEN WE PASS VALUES INTO A FUNCTION


/// Using the spread operator to create a new array
/// from an existing array, with elements added.


const arr = [7,8,9];

//! using the following puts the old array inside a new array

const wrongArr = [1,2,arr]

// console.log(wrongArr);

///? [1, 2, [7, 8, 9]]




/// create new array with arr elements and new elements using spread operator

const newArr = [1,2,...arr]

// console.log(newArr);

///? [1, 2, 7, 8, 9] as Array Object




/// log individual elements of an array

// console.log(...newArr);

///? 1 2 7 8 9 (as numbers)

//! useful whe passing individual elements into a function(...newArr){};




/// Create a New Menu from Object above



// restaurant.mainMenu: ['Pizza', 'Pasta', 'Risotto']

//! get the original menu with spread operator,
//! then add the additional elements to create a new array

//! const variable = [] -  will always create a new array

const newMenu = [...restaurant.mainMenu, 'Gnocci', 'Spagetti']

// console.log(newMenu);

///? ['Pizza', 'Pasta', 'Risotto', 'Gnocci', 'Spagetti']


//! Differences between destructuring and spread operator is...

//! 1. Takes ALL the elements from the array.
//! 2. Doesn't create new variables.
//! 3. Only use spread operator when you need values separated by commas.




/// Create shallow copy of array (easiest method) or slice();


const mainMenuCopy = [...restaurant.mainMenu];

// console.log(mainMenuCopy);




/// join 2 arrays or more


const joinArrs = [...restaurant.mainMenu,...restaurant.starterMenu, ...newArr];

// console.log(joinArrs);

///?	[ 'Pizza', 'Pasta', 'Risotto', 'Focaccia', 'Bruschetta',
///?		'Garlic Bread', 'Caprese Salad', 1, 2, 7, 8, 9 ]




/// Use the spraed operator on a string to make an array of the string letters



const myName = 'Mark';

const letters = [...myName];

// console.log(letters);

///? ['M', 'a', 'r', 'k']


//! or....


const lettersAndSpaces = [...myName, ,' ', 'S.'];

// console.log(lettersAndSpaces);

///? ['M', 'a', 'r', 'k', empty, ' ', 'S.']


//! ERROR 

// console.log(`${...str} Beresford`);

///? template literal only expects 1 element 




// -- ?? Objects ?? -- //


/// Create a new Object from the original restaurant Object....
/// and add in some additional data 



const newRestObj = {...restaurant, founder: 'Berry', yearFounded: 1976};

// console.log(newRestObj);

///? founder:Berry and yearFounded added to a copy of original Object


/// Shallow copy of Object


const restaurantCopy = {...restaurant};

///? exact copy of restaurant Object



/// add/change properties  and values to COPY of Object

restaurantCopy.name = "Berry's Plaice";
restaurantCopy.style = "Fish Restaurant";

console.log(restaurantCopy);

///? name changed to Berry's Plaice and style:Fish restaurant added
