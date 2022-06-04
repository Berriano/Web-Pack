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

		
	orderPizza: function(mainIngrediant,...otherToppings){

			console.log(mainIngrediant, otherToppings);
		}
};

// ---------------------------- Loop Arrays ------------------------------- //


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


/// destructure arrays to create one big array


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);


// --  for...of loop (simpler version of the for... loop)  -- //


/// loop thru the big array


for (const item of menu) {

// console.log(item); 

}
//! no need for {curly brackets} for 1 line of code

///? lists array items in there original format (unpacks array)




// --  Variable.entries()  -- //



/// for indexing values use variable.entries()



// console.log([...menu.entries()]);


//! creates an array of arrays for each element,
//! with the [indexNum,'element'] as a list



for (const item of menu.entries()){
	// console.log(item);
}


//! creates an array for each element with the [indexNum,'element'] 
//! from the [menu.entries()] array, as a list


/// without Destructuring


for (const item of menu.entries()){

	console.log(`${item[0]+1} : ${item[1]}`);

}

//! item[0] and item[1] refers to [0,'focaccia'] indexing [0] being the indexNum

///? list of  1: Focaccia
///?					2: Bruchetta
///? 					3: Garlic Bread  etc,etc



/// WITH Destructuring


for (const [index,element] of menu.entries()){

	console.log(`${index} : ${element}`);
}


//! OR

/// different layout

for (const [index,element] of menu.entries()){

	console.log(`Index No:${index+1} - Element: ${element}`);
}





