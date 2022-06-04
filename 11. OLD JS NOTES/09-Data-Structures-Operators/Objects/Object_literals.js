'use strict';


// ---------------------------- Object Literals ------------------------ //



// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object



	/// array for restaurant types

const foodTypes = ['fish', 'vegan', 'dessert', 'steak']


	/// create an object outside the main object

const currentOwnerInfo = {
	owner: 'Mark Berry',

	previousRestaurants:{

	/// use array of restaurant types as property names, with indexing	

		[foodTypes[0]]:'Berrys Plaice',
		[foodTypes[2]]:'Berrys and cream'

	}
};



const restaurant = {

	/// add the variable to the object using the variable name,

		currentOwnerInfo,

		///? currentOwnerInfo properties and values added to main Object;


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

///? old way of functions in objects

	// order: function(starterIndex, mainIndex){
	// 	return [this.starterMenu[starterIndex], 
	// 					this.mainMenu[mainIndex]];
	// },


/// ES6 way of functions in objects           

	order(starterIndex, mainIndex){
		return [this.starterMenu[starterIndex], 
						this.mainMenu[mainIndex]];
	},

///? no function keyword or semi-colon:

///////////////////////////////////////////////


	orderDelivery : function({address = 'Pick-up',mainIndex,starterIndex,time}){

		console.log(
		`Order time: ${time},Delivery to : ${address}.Order details - 
	Starter: ${this.starterMenu[starterIndex]} Main: ${this.mainMenu[mainIndex]}`); 			
	},

	orderPasta: function(ing1, ing2, ing3){

	console.log(`Here is your Pasta with ${ing1}, ${ing2}, ${ing3}. ENJOY!!!!`);
		},

		
	orderPizza: function(mainIngrediant,...otherToppings){

			console.log(mainIngrediant, otherToppings);
	}
};

console.log(restaurant);

