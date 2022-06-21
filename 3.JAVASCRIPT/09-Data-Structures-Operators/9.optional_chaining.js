// ------------------------------    Optional     ------------------------------ //
// -------------------------------   Chaining    ------------------------------- //


'use strict';


///  object functions 


const order = function(starter, main) {

	return [this.starterMenu[starter], this.mainMenu[main]];

};


const orderDelivery = function({

	time = 'Not Specified',
	address = 'Picked-up from restaurant',
	starterIndex,
	mainIndex


}) {

	console.log(`Order Received @ ${time}: ${this.starterMenu[starterIndex]} and a ${this.mainMenu[mainIndex]} to be delivered to ${address}. Many Thanks!!`);

};


const orderPasta = function(ing1, ing2, ing3) {

	console.log(`Pasta with ${ing1}, ${ing2}, and ${ing3}.ENJOY!!`)

};


const orderPizza = function(mainIng, ...otherIngs) {

	console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);


};



/// objects literals



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



const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	openingHours,

	order,

	orderDelivery,

	orderPasta,

	orderPizza,


};




// ------------------------------    Optional     ------------------------------ //
// -------------------------------   Chaining    ------------------------------- //



/// use optional chaining if you dont know if a property exists


/// property1?.property2 = only if property1 exist will property2 be read 

//! a property exists if its not null or undefined ONLY



///? console.log(restaurant.openingHours.mon.open);

// returns an error



console.log(restaurant.openingHours.mon?.open);

// undefined as monday doesnt exist



console.log(restaurant.openingHours.thu?.open);

// 12 = because thu exists and open is 12




/// optional chaining can be used more than once 


console.log(restaurant.openingHours?.thu?.open);

// 12 = but checks if openingHours exist too




/// To use a variable name(day) as a property name use [square brackets] 


const days = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat','sun' ];

//! objectName[expression] instead of objectName.property - bracket notation

///? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation


for(const day of days){

	//! use nullish as sat has 0 as value


const open = restaurant.openingHours[day]?.open ?? 'Closed';

const close = restaurant.openingHours[day]?.close ?? 'Closed';

console.log(`On ${day} we open at ${open}, and close at ${close}`);


}



///  using with functions


//! checks if the function exist first



console.log(restaurant.order?.(1,2) ?? 'function does not exist');


// (2) ['Bruschetta', 'Risotto']  because the function exist


console.log(restaurant.orderRisotto?.(1,2) ?? 'function does not exist');


// function does not exist - as the function isnt real





///  using on arrays




/// check if array is empty



const user = [{userName:'Mark',userAge:2022 - 1976,email:'berry@youth.com'},
{userAge:2022 - 1974,email:'dave@youth.com'}];


console.log(user[0]?.userName ?? 'Username empty');

//  Mark

console.log(user[1]?.userName ?? 'Username empty');




// user name empty
