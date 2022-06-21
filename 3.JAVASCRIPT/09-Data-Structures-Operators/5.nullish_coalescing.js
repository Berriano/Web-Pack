// ------------------------------ Nullish coalescing ------------------------------ //
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


    orderPizza: function(mainIng, ...otherIngs) {

        console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);


    }

};




// ------------------------------ Nullish coalescing ------------------------------ //
// ------------------------------- ---------------- ------------------------------- //



restaurant.numGuests = 0;



///  short cicuit version WHICH doenst work!!



const guests2 = restaurant.numGuests || 10;

console.log(guests2);

//! INCORRECT //

// 10 as 0 is a falsy value




/// the need for nullish coalescing


//! only accepts null and undefined as falsy values ( 0 and " " are classed as truthy)


const guestCorrect =  restaurant.numGuests ?? 10;

///?  this.numGuests = true( 0 ) so continue operation


console.log(guestCorrect);

// 0


console.log(restaurant);