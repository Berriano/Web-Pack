// ---------------------------------  Spread  --------------------------------- //
// ------------------------------    Operator --------------------------------- //
// -------------------------------  functions  -------------------------------- //


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



    /// function that accepts multiple arguements, use the spread operator to pass them


    orderPasta: function(ing1, ing2, ing3) {

        console.log(`Pasta with ${ing1}, ${ing2}, and ${ing3}.ENJOY!!`)

    }


};




/// orderPasta function that accepts multiple arguements, use promt to create



const ingredients = [

    // prompt(`Ingredient 1?`),
    // prompt(`Ingredient 2?`),
    // prompt(`Ingedient 3?`)

];




/// use spread operator to unpack and pass them



restaurant.orderPasta(...ingredients);







// ---------------------------------  Spread  --------------------------------- //
// ------------------------------    Operator --------------------------------- //



// ------------------------- Arrays ------------------------ //



//! spead operator can be used on ALL iterables -

//!	arrays
//!	strings
//!	maps
//!	sets

//!	NOT Objects................... UNTIL ES6

///! Basically unpacks the element of its values into an array or a function,
//! so [sq brackets] have to be used



/// expand array into a new array which already has values to make 1 array


const arr = [4, 5, 6];

const newArr = [1, 2, 3, ...arr];

///? console.log(newArr);

// (6) [1, 2, 3, 4, 5, 6]




/// get elements from an existing array and add an item to it



const newMenu = [...restaurant.mainMenu, 'Gnocci'];

///? console.log(newMenu);

// (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']




/// shallow copy of array


const mainMenuCopy = [...restaurant.mainMenu];

///? console.log(mainMenuCopy);

// (3) ['Pizza', 'Pasta', 'Risotto']




/// join 2 arrays


const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

///? console.log(allMenu);


// ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']



//! spead operator can be used on ALL iterables -

//!	arrays
//!	strings
//!	maps
//!	sets



// ----------------------- Strings ------------------------ //




/// unpack (expand) a string


const mark = 'Mark';

const letters = [...mark, 'Berry']

///?  console.log(letters);

//  ['M', 'a', 'r', 'k', 'Berry']






// ----------------------- Objects ------------------------ //



//!	NOT Objects................... UNTIL ES6



///  Using spread operator on an object, make a shallow copy and use copy to mutate



const restaurantCopy = {...restaurant};


///? console.log(restaurantCopy);


//{name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}




///  adding properties and values with the spread operator on an object


const restaurantNew = {...restaurant, founder:'Berry'};


console.log(restaurantNew);


// categories: (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']
// founder: "Berry"
// location: "Via Angelo Tavanti 23, Firenze, Italy"
// etc,etc,etc

