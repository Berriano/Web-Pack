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


	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring

	
// ----------------------------- Destructuring Objects Pt 2 --------------------------- //
// ------------------------------ Objects with functions ------------------------------ //


//! continued from below


/// create a method for object destructuring

/// passing an object into the function as an argument for immediate destructure
/// of the object

//! use exact property names used when calling the function for parameters(in any order) and
//! wrap in curly brackets

/// these property names becomre variables which are destructured from object

//! address has a default parameter

orderDelivery : function({address = 'Pick-up',mainIndex,starterIndex,time}){

//! parameters [mainIndex, starterIndex] so 2 and 1- so below is this.mainMenu[2]

	console.log(

//! STUDY FORMAT OF THIS.MAINMENU[MAININDEX]

		`Order time: ${time},
Delivery to : ${address}. 
Order details - 
Starter: ${this.starterMenu[starterIndex]}  ///? argument passed in [starterIndex = 2]
Main: ${this.mainMenu[mainIndex]}`); 				///? argument passed in u[mainIndex = 2]
}

};

/// using orderDelivery function

restaurant.orderDelivery({

	//! specify options for function

	time: '22:30',
	address: '4 Shailers',

	//! use object properties from restaurant

	mainIndex: 2,
	starterIndex: 1,
}
);

/// using default value in object function


restaurant.orderDelivery({

	time: '18:30',

	//! NO ADDRESS PROVIDED SO DEFAULT PARAMETER ACTIONED

	mainIndex: 1,
	starterIndex: 2,

}
);

/// using order function

const myOrder =	restaurant.order(2,1);

//  console.log(myOrder);

///? ['Garlic Bread' , 'Pasta' ]




// ------------------------- Destructuring Objects ----------------------------- //


//! ** SIDE NOTE - OBJECTS ARE NOT ITERABLE LIKE STRINGS, MAPS, ARRAYS ETC


/// To destructure Objects - use curly braces { };


//! Use exact property names to destructure

//! no order on objects so no need for gaps 


const {name,categories, openingHours} = restaurant;


//  console.log(name, categories, openingHours);

///? 	Classico Italiano , ['Italian' , 'Pizzeria' , 'Vegetarian' , 'Organic']
///? 	{thu:{...}, fri{...}, sat{...}}



/// Setting different property names, use semi-colon after current property


const{ name: restaurantName, openingHours: hours, categories: tags,} = restaurant;

//  console.log(restaurantName, hours, tags);

///? 	Classico Italiano , ['Italian' , 'Pizzeria' , 'Vegetarian' , 'Organic']
///? 	{thu:{...}, fri{...}, sat{...}}



/// Set Default values using an empty array, whilst changing property names


//! Default values are useful so we dont get undefined (falsy values)


const {menu = [] , starterMenu:starters = [] } = restaurant;

// console.log(menu,starters);

///?` menu = [] (default value, because it doesnt exist)

///? starters =  ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'] ...
///? because it exists as starterMenu, but we changed the property name



/// Mutating variables while destructuring Objects 
//! (assigning to already declared variables)


let a = 111;
let b = 999;

const obj = { 
					a: 23,
					b: 7,
					c: 14,
				};

//// cannot do this

///? let {a,b} = obj;

//! it will try to assign new variables and give an error

/// to get it to work dont assign with const or let
/// and wrap in paretheses

({a,b} = obj);

// console.log(a,b);

///? a = 23, b = 7



////////   Nested Objects  {openingHours} ///////

//! no need to use restaurant : openingHours as already set above
//! const {name,categories, openingHours} = restaurant;

const {thu} = openingHours;

// console.log(thu);

///? {open: 12, close: 22}

const { fri:{open,close} } = openingHours;

// console.log(open, close);

///? open = 11, close = 23


/// changing property names whilst destructuring nested objects


const { sat: {open:openingTime, close:closingTime} } = openingHours;

console.log(openingTime, closingTime);

///?  0 24


//! ** see destructuring objects pt2 above
