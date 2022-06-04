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
		`Order time: ${time},Delivery to : ${address}.Order details - 
	Starter: ${this.starterMenu[starterIndex]} Main: ${this.mainMenu[mainIndex]}`); 			
	},

	orderPasta: function(ing1, ing2, ing3){

	console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}. ENJOY!!!!`);
		},



/* // Spread operator

 const ingredients = [
 	prompt('Ingredient 1'),
 	prompt('Ingredient 2'),
 	prompt('Ingredient 3'),
  ];

console.log(ingredients);

ingrediants = [ing1, ing2, ing3 ]

restaurant.orderPasta(...ingredients)

  // Here is your Pasta with ing1, ing2, ing3. ENJOY!!!!

*/


// ------------------------ Rest parameter function ---------------------- //



//! Rest parameter condense into an array the leftover elements,
//! where single elements are passed into a function whereas,
//! Spread operator spreads an array in to function arguments


orderPizza: function(mainIngrediant,...otherToppings){

console.log(mainIngrediant, otherToppings);

}
};

restaurant.orderPizza('Tomatoes', 'Cheese','Mushrooms');

///? Tomatoes  ['Cheese', 'Mushrooms']

restaurant.orderPizza('Chillis','Chicken', 'Cheese','Mushrooms'); 

///? Chillis  ['Chicken', 'Cheese', 'Mushrooms']

restaurant.orderPizza('Ham', 'Cheese','Mushrooms','Pineapple','Peppers');

///? Ham  ['Cheese', 'Mushrooms', 'Pineapple', 'Peppers']




///					⬆								⬆											⬆								⬆									
///													Rest operator function																	
// ------------------------- Rest pattern and parameters ------------------------ //


/// ...rest Collects multiple elements and condense them into an array
/// spread unpacks elements, while rest packs elements into an array  

/// ...spread is used on the right hand side of the = sign
/// ...rest is used on the left hand side of the = sign


// ---------------------------------- Arrays ----------------------------------- //


//- Destructuring -//



const [a,b,...restArr] = [1, 2, 3, 4, 5];

// console.log(a,b,restArr);

///? 1 2 [3, 4, 5]
//! a and b are unpacked and the rest are assigned to restArr


/// Use-Case with restaurant Object and spread operator


//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//! rest element must be the last element, and there must be only one!

const [pizza , , risotto, ...otherFoods] = 

//! as there is a gap 'Pasta' will be missed

													[...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(pizza, risotto, otherFoods);


///? Pizza Risotto  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
//! Pasta missed but where otherFoods starts, the rest is copied



// -------------------------------- Objects --------------------------------- //


/// Create a new Object, just for weekdays, from restaurant Object

//! ...weekdays collects the '...rest' of the properties and values

const {sat, ...weekdays} = restaurant.openingHours;

// console.log(weekdays);



//- Functions - //


/// Setting rest parameters for an un-specified amount of arguments


const add = function(...numbers){

	// console.log(numbers);

}

add(2, 3)
add(5, 3, 7, 2)
add(5, 3, 8, 15, 20, 7, 2)

//! rest operator compresses elements into an array

///?  [2, 3]
///?  [5, 3, 7, 2]
///?  [5, 3, 8, 15, 20, 7, 2]


/// AddSum function


//! use rest parameter to unpack the array argument


const addSum = function(...numbers){

	let sum = 0;

for(let i=0;i<numbers.length;i++){

	sum += numbers[i];
} 
return sum;
}

// console.log(addSum(2, 3));  								///?  5
// console.log(addSum(5, 3, 7, 2));						///?  17
// console.log(addSum(5, 3, 8, 15, 20, 7, 2)); ///?	60



/// Using a variable as a parameter


const x = [25,50,75];

// console.log(addSum(...x));

//! make sure you spread the array otherwise its just an array


