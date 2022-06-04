'use strict';



const days = ['mon', 'tues', 'wed','thu','fri','sat','sun']


const foodTypes = ['fish', 'vegan', 'dessert', 'steak']


const currentOwnerInfo = {

	owner: 'Mark Berry',

	previousRestaurants:{

		[foodTypes[0]]:'Berrys Plaice',
		[foodTypes[2]]:'Berrys and cream'

	}
};


const restaurant = {

	currentOwnerInfo,

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


	order(starterIndex, mainIndex){
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

		
	orderPizza: function(mainIngrediant,...otherToppings){

			console.log(mainIngrediant, otherToppings);
	}
};


// ---------------------------- Optional Chaininig ------------------------------- //


//! Example 

///?  property?.value ?? 'if property doesnt exist'

///? check if property exist?. and use the value or ?? return following string

//! if no value( or specifically a nullish value - null or undefined)- continue




/// using optional chaining to check if a property exists


if(restaurant.openingHours.fri){
	// console.log(
		restaurant.openingHours.fri.open
		// );
}

///? logs 11 as it exists and is open on fri at 11


/// check if openingHours exist and mon exists

if(restaurant.openingHours && restaurant.openingHours.mon){
	console.log(restaurant.openingHours.mon.open);
}

///? doesnt exists so nothing is returned

// console.log(restaurant.openingHours.mon.open);

///? will give an error message

/// With Optional chaining (?.) check if monday exists(not null or undefined)

// console.log( restaurant.openingHours.mon?.open);

///? returns undefined as property doesnt exist



///? Multiple Optional chaining
// console.log(

restaurant.openingHours?.mon?.open;

//! check if opeing Hours exists, if it dies check if mon exists;
//! return undefined if either doesnt exist or return value they both does exist

// );

/// Practical example



// const days = ['mon', ' tues', 'wed','thu','fri','sat','sun']



/// using for loop with optional chaining and loop value



for (const day of days ){


//!  for an object and array in a loop cannot use loop variable with dot notation
//! 	WILL NOT WORK!!!(
///? restaurant.openingHours.day
//!  )

//! HAVE TO USE THE LOOP VALUE AS A SQUARE BRACKET VALUE [loop vaiable]

// console.log(
		
restaurant.openingHours[day];

	///? logs opening times for the existing properties and undefined for the rest

// );

}

/// Working example of for...of loop above


for (const day of days){

	//! loop each day and add opening time, but if undefined add closed

	/// ALSO use nullish ?? as saturdays value is 0

	const open = restaurant.openingHours[day]?.open ?? 'closed';

	console.log(`On ${day} we are open at ${open}`); 
}





/// Optional chaining on methods

//! check if order() exists, if so run order() if not (??) return string

console.log(

restaurant.order?.(0,1) ?? 'Method does not exist'

);

///?	['Focaccia', 'Pasta']


//! Non-existent function

console.log(

	restaurant.orderRisotto?.(0,1) ?? 'Method does not exist'
	
	);

///?  Method does not exist



/// Optional chaining on arrays


const users	 = [
	{
		name: 'Mark',
		email:'berry@gmail.com',
	},
	{
		email:'cheskals.com'
	}
];



console.log(

		users[0]?.name ?? 'user property empty'

);

///? returns Mark


console.log(

	users[1]?.name ?? 'user property empty'

);

///? returns user property empty