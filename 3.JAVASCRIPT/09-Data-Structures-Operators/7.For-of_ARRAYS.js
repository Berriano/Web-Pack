// ------------------------------  For-of loop   ------------------------------ //
// -------------------------------    Arrays    ------------------------------- //


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


	numGuests: 10,


	order: function(starter, main) {

			return [this.starterMenu[starter], this.mainMenu[main]];

	},


	orderDelivery: function({

			time = 'Not Specified',
			address = 'Picked-up from restaurant',
			starterIndex,
			mainIndex


	}) {

			console.log(`Order Received @ ${time}: ${this.starterMenu[starterIndex]} and a ${this.mainMenu[mainIndex]} to be delivered to ${address}. Many Thanks!!`);

	},


	orderPasta: function(ing1, ing2, ing3) {

			console.log(`Pasta with ${ing1}, ${ing2}, and ${ing3}.ENJOY!!`)

	},


	orderPizza: function(mainIng, ...otherIngs) {

			console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);


	}

};




//!  no need for counters or conditions



///  get all meals from both menus into an array


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];


/// basic for of loop


//! item is each element in the menu array


// for (const item of menu) {

//    console.log(item);

// }

//!  gives a list of the items contained in the array as a list of strings




/// continue and break still valid





// ----------------- Array.entries() --------------------- //



/// get the current index of each item using array.entries()



// for (const item of menu.entries()) {

//    console.log(item);

// }

//! returns an array of arrays in which entries() gives each element its index number 

//! i.e [ [0, 'Focaccia'] [1, 'Bruschetta'] [2, 'Garlic Bread'] etc etc ]



///? console.log(...menu.entries());

// (2) [0, 'Focaccia'] (2) [1, 'Bruschetta'] (2) [2, 'Garlic Bread'] 
// (2) [3, 'Caprese Salad'] (2) [4, 'Pizza'] (2) [5, 'Pasta'] (2) [6, 'Risotto']




/// menu list with item number


// for (const item of menu.entries()){

//     //! item at position 0 on each item iteration - 
//     //! [0,'focaccia] = the number in each iteration 

//     //! item at position 1 on each item iteration - 
//     //! [0,'focaccia] = the string in each iteration 


//     //! FOR ALL THE ITEMS IN MENU.ENTRIES


//    console.log(`${item[0]} : ${item[1]}`);
	
// 	}


// 0 : Focaccia    1 : Bruschetta    2 : Garlic Bread    3 : Caprese Salad   ETC  ETC



/// ⬆ the old method without destructuring



/// ⬇ the NEW method with destructuring

for(const [i,el] of menu.entries()){

	console.log(`${i +1} : ${el}`);

}

