// ------------------------------  Object Looping    ------------------------------ //
// ------------------------------- ---------------- ------------------------------- //


'use strict';


const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', ' sun'];




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


/// objects



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





// ------------------------------  Object Looping    ------------------------------ //
// ------------------------------- ---------------- ------------------------------- //




// -------- object.keys(property) ----------- //



/// object.keys get the property names and puts into an array



const properties = Object.keys(openingHours);


console.log(properties);


//  ['thu', 'fri', 'sat']




/// use a string to print to the console number of days open and the days open



let openStr = `We are open ${properties.length} days a week on:  `


for(const day of properties){
	
	openStr += `${day}, `;
	
}


console.log(openStr);


// We are open 3 days a week on: thu, fri, sat, 






// -------- object.values(property) ----------- //



/// object.values get the property value and puts into an array



const values = Object.values(openingHours);


console.log(values);


//  [ 0: {open: 12, close: 22}
//    1: {open: 11, close: 23}
//    2: {open: 0, close: 24} ]





// -------- object.entries(property) ----------- //



/// object.entries get the property name and value and puts into an array



const entries = Object.entries(openingHours);


console.log(entries);



//! use entries to be able to loop over the object



for (const [day, {open, close} ] of entries){

	//! key is a value in the array, but open close is an object - need destructuring

	console.log(`On ${day} we open at ${open} and close at ${close}`);


}




///  challenge

/// print to console using loop

//  { Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2 }


const game = {

    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
		'Hummels'	]

}



/// define an empty object

let scorers = {};



/// loop the game.scored object

for(const name of Object.values(game.scored)){



	//! if scorers-name exists =  true then add 1 to value

	//! OR

	//! create scorers-name and set value to 1

scorers[name]++ || (scorers[name] =  1) ;

//! THE NAME WILL BE FALSE AT FIRST SO THE PROPERTY WILL BE ADDED WITH A VALUE OF 1


}


/// EXTRA 

/// how to add values to properties

scorers.player = 10;

scorers.nationality = "English";


console.log(scorers);

