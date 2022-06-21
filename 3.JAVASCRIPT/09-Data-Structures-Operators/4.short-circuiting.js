// ------------------------------- Short circuiting ------------------------------- //
// ------------------------------- ---------------- ------------------------------- //



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


		orderPizza:function(mainIng, ...otherIngs){

			console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);
		
		}





};




// ---  OR ||   --- //



/// using short circuiting instaed of ternary operator on object


const guests1 = restaurant.numGuests ? restaurant.numGuests : 10 ;

//! if this.numGuests is true - return it - else this.numGuests = 10




///  short cicuit version


const guests2 = restaurant.numGuests || 10 ;

//! this.numGuests = true, then return it (short circuit) / else continue





// ---  AND &&  --- //



if(restaurant.orderPizza){
	
restaurant.orderPizza('chicken','Cheese','onion');
	
}

//!  IF this.orderPizza exists then execute code




///  short cicuit version


restaurant.orderPizza && restaurant.orderPizza('chicken','Cheese','onion');


//! this.orderPizza is true,  then call function / else short circuit




// ------------------------------- Short circuiting ------------------------------- //
// ------------------------------- ---------------- ------------------------------- //





/// short circuit evaluation



///  OR ||


//! returns the first truthy value or the last falsy if no truthy


console.log(3 || 'Mark');

// 3


console.log("" || 'Mark');

// Mark


console.log(true || 0);

// true


console.log(undefined || 0);

// 0



console.log(undefined || 0 || 23 || null) ;


// 23





/// AND && 


//! returns the first falsy value or the last truthy if no falsy



console.log( 23 && null);

// null


console.log('hello' && 23);

// 23

console.log( undefined && null);

// undefined

console.log( 'mark' && 23 && null );

// null