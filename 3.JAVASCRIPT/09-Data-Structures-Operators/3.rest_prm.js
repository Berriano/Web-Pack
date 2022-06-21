// ---------------------------- Rest Parameters --------------------------- //
// ---------------------------- --------------- --------------------------- //

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



    /// object functions




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




    /// rest parameter function


		orderPizza:function(mainIng, ...otherIngs){


			console.log(mainIng);

			// mainIng gets stored as a value

			console.log(otherIngs);
			
			// otherIngs get stored as an array

			console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);
		
		}




};




///  function calls 




restaurant.orderPizza('chicken','onion','cheese');


// chicken

// ['onion', 'cheese']

// Pizza topping of chicken, with onion,cheese



restaurant.orderPizza('chicken');


// chicken

//  []

// Pizza topping of chicken, with 



restaurant.orderPizza('onion','cheese');


// onion

// ['cheese']

// Pizza topping of onion, with cheese



restaurant.orderPizza('chicken','onion','cheese','mushroom','capsicum');


// chicken

// ['onion', 'cheese', 'mushroom', 'capsicum']

// Pizza topping of chicken, with onion,cheese,mushroom,capsicum





// ---------------------------- Rest Parameters --------------------------- //
// ---------------------------- --------------- --------------------------- //



//!  rest operator packs (THE REST OF THE) elements into an array when destructuring...
//! - the opposite of spread



///    rest goes on left side of =     |     spread goes on right side of =  





// -------------------------- Destructuring with ---------------------------//
// ---------------------------- Rest Parameters --------------------------- //




// -----------------------  Arrays  --------------------- //




const restArr = [1, 2, 3, 4, 5];


const [a, b, ...leftovers] = restArr;


console.log(a, b, leftovers);


//  1 2  [3, 4, 5] 



//!  rest parameter must be the last assignment, and can only be used once


/// use rest and spread together



///? get bruschetta and garlic bread



const [, bruschetta, gb, ...remainingMenu] = [...restaurant.starterMenu, ...restaurant.mainMenu];


console.log(bruschetta, gb, remainingMenu);


// Bruschetta Garlic Bread  ['Caprese Salad', 'Pizza', 'Pasta', 'Risotto']




// ---------------------------- Objects ---------------------------- //



/// get just the week days from the openinghours object


const {
    sat,
    ...weekdays
} = restaurant.openingHours;


console.log(weekdays);


// {thu: {…}, fri: {…}}

// fri: {open: 11, close: 23}
// thu: {open: 12, close: 22}



console.log(weekdays.fri);


// {open: 11, close: 23}



// --------------------------   Functions with   ---------------------------//
// ---------------------------- Rest Parameters --------------------------- //




/// add any amount of numbers together



//! the rest parameter passes in the arguements as an array e.g  add( [2, 3] )



const add = function(...numbers) {

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];

    }

    return sum;

};



console.log(add(2, 3));

// 5

console.log(add(3, 4, 5));

// 12




//!  THE REST IS THE PARAMETERS AND THE SPREAD IS THE ARGUEMENTS



/// rest



///? const add = function(...numbers) { code }


console.log(add(12, 36, 456, 1234));

// 1738




/// spread



const spreadArr = [12, 36, 456, 1234];


console.log(add(...spreadArr));

// 1738