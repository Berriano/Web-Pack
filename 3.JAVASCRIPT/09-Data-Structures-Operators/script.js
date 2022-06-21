// ------------------------------  Object Literals   ------------------------------ //
// ------------------------------- ---------------- ------------------------------- //


'use strict';

// // Data needed for a later exercise

// const flights =
//     '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section



const weekDays = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat',' sun' ];




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




/// object function calls




console.log(restaurant);


const myOrder = restaurant.order(3, 1);

console.log(myOrder);



restaurant.orderDelivery({

    time: '22:30',
    address: '4 Shailers Cct',
    starterIndex: 1,
    mainIndex: 0,

});



restaurant.orderDelivery({

    starterIndex: 1,
    mainIndex: 0,

});


const ingredients = [

    // prompt(`Ingredient 1?`),
    // prompt(`Ingredient 2?`),
    // prompt(`Ingedient 3?`)

];


restaurant.orderPasta(...ingredients);

restaurant.orderPizza('chicken', 'onion', 'cheese');