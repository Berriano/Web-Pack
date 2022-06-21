// ------------------------------ Destructuring ------------------------------- //
// --------------------------------- ------ ----------------------------------- //


'use strict';



const restaurant = {

    nameEstablishment: 'Classico Italiano',
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


    /// function to order from the starter and main menus


    order: function(starter, main) {

        //!  return an array of incliuding restaurant.starterMenu and restaurant.mainMenu 
        //!  at the positions called 

        return [this.starterMenu[starter], this.mainMenu[main]];

    },



    /// pass in an object of options to a function as an argument


    ///?  orderDelivery: function(obj) {

    ///?      console.log(obj);

    ///?  }



    /// use destructuring IN the parameters to set them as variables for use in the function


    //! SET DEFAULTS IN THE PARAMETERS IF IT WILL BE EMPTY

    orderDelivery: function({

        time = 'Not Specified', 								 // default parameter
        address = 'Picked-up from restaurant',   // default parameter
        starterIndex,
        mainIndex

    }) {

        console.log(`Order Received @ ${time}: ${this.starterMenu[starterIndex]} and a ${this.mainMenu[mainIndex]} to be delivered to ${address}. Many Thanks!!`);


    }


};




// -------------------------  Functions and Objects  -------------------------- //
// ------------------------------ Destructuring ------------------------------- //



console.log('----------------------Function Objects ---------------------');




const myOrder = restaurant.order(3,1);

console.log(myOrder);


// (2) ['Caprese Salad', 'Pasta']




restaurant.orderDelivery({
	
	time: '22:30',
	address: '4 Shailers Cct',
	starterIndex: 1,
	mainIndex: 0,
	
});


// Order Received @ 22:30: Bruschetta and a Pizza to be delivered to 4 Shailers Cct. 
// Many Thanks!!




restaurant.orderDelivery({
	
	starterIndex: 1,
	mainIndex: 0,
	
});


// Order Received @ Not Specified: Bruschetta and a Pizza to be delivered to 
// Picked-up from restaurant. Many Thanks!!






// --------------------------------- Objects ---------------------------------- //
// ------------------------------ Destructuring ------------------------------- //



console.log('------------------------- Objects ------------------------');




/// as objects can be in any order and are not indexed, 
/// they can be selected in any order, but the names must match exactly



const {
    nameEstablishment,

    openingHours,

    categories

} = restaurant;



///? console.log(nameEstablishment);

// Classico Italiano - nameEstablishment

///? console.log(openingHours);

// {thu: {…}, fri: {…}, sat: {…}} - openingHours

///? console.log(categories);

// (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] - categories




/// reassign property names to your own



const {

    nameEstablishment: restaurantName,

    openingHours: hours,

    categories: tags

} = restaurant;



///? console.log(restaurantName);


// Classico Italiano - nameEstablishment


///? console.log(hours);


// {thu: {…}, fri: {…}, sat: {…}} - openingHours


///? console.log(tags);


// (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] - categories






///  default values



//! give properties a different name and a default value


const {
    menu = [], starterMenu: starters = [], mainMenu: mains = []
} = restaurant;



///? console.log(menu);


// []


///? console.log(starters);


// (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']


///? console.log(mains);


// (3) ['Pizza', 'Pasta', 'Risotto']





///  switching variables (mutating)



let d = 111;

let e = 999;

const obj = {
    d: 23,
    e: 7,
    f: 14
};


//! to overide the existing variables, wrap in parentheses


({
    d,
    e
} = obj);


///? console.log(d, e);


// 23 7





/// nested objects



//! get open and close times for friday + reassign close name to closingTime


const {
    fri: {
        open,
        close: closingTime
    }
} = restaurant.openingHours


///? console.log(open);

// 11

///? console.log(closingTime);

// 23
















// ---------------------------------  Array  ---------------------------------- //
// ------------------------------ Destructuring ------------------------------- //


// console.log('------------------------- Arrays ------------------------');



const arr = [1, 2, 3];



/// to destructure the array

const [a, b, c] = arr;

///? console.log(a, b, c);

// 1 2 3




///  get first 2 array properties from an object


const [first, second] = restaurant.categories;

///? console.log(first, second);

// Italian Pizzeria




///  get first and third array properties from an object (leave a gap)


const [thirst, , third] = restaurant.categories;

///? console.log(thirst, third);

// Italian Vegetarian




///  switching variables


let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];

///? console.log(main, secondary);

// Vegetarian Italian




/// function return array and then destructure


///?  call the function

///? console.log(restaurant.order(2, 0));


// (2) ['Garlic Bread', 'Pizza']


//!  call the function, destructure the staterCourse and mainCourse values into 
//!  the starterCourse and mainCourse variables


let [starterCourse, mainCourse] = restaurant.order(2, 0);


///? console.log(starterCourse, mainCourse);


// Garlic Bread Pizza  - destructured





///  nested array destructuring



const testValuesNested = ['Mark', 'Jarvie', ['Jem', 'Sophie']];


// get Mark and Sophie


const [mark, , [, sophie]] = testValuesNested;


///? console.log(mark, sophie);

// Mark Sophie



///  default values for when the array lengths are unknown


const num = [8, 9]


const [x = 1, y = 1, z = 1] = num;


///? console.log(x, y, z);


// 8 9 1