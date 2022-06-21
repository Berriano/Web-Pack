// ------------------------------  Object Literals   ------------------------------ //
// ------------------------------- ---------------- ------------------------------- //


'use strict';


///  Adding objects to an object literal



/// add the separated openingHours back to the restaurant object just by adding the property




/// use expressions to compute weekdays


const weekDays = [ 'mon', 'tue', 'wed', 'thu', 'fri', 'sat',' sun' ];



const openingHours = {


	/// destructure array weekdays into object


    [weekDays[3]]: {

        open: 12,
        close: 22,
    },		

    [weekDays[4]]: {
        open: 11,
        close: 23,
    },		

    [weekDays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },		
};		

console.log(openingHours);




const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],


    /// add opening hours


    openingHours,



    /// ES6 object functions remove the need for function and semi-colon



    // order: function(starter, main) {

    //     return [this.starterMenu[starter], this.mainMenu[main]];

    // },



    order(starter, main) {

        return [this.starterMenu[starter], this.mainMenu[main]];

    },


    orderDelivery({

        time = 'Not Specified',
        address = 'Picked-up from restaurant',
        starterIndex,
        mainIndex,

    }) {
        console.log(`Order Received @ ${time}: ${this.starterMenu[starterIndex]} and a ${this.mainMenu[mainIndex]} to be delivered to ${address}. Many Thanks!!`);

    },

    ///  Old way                                                   
		
		
    orderPasta: function(ing1, ing2, ing3) {
			
			console.log(`Pasta with ${ing1}, ${ing2}, and ${ing3}.ENJOY!!`)
			
    },
		
		
		
    orderPizza: function(mainIng, ...otherIngs) {
			
			console.log(`Pizza topping of ${mainIng}, with ${otherIngs}`);
			
			
    }

		///                                                           
	};