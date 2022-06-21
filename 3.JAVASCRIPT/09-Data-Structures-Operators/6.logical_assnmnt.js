// ------------------------------ Logical assignment ------------------------------ //
// -------------------------------     Operators    ------------------------------- //


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





// ------------------------------ Logical assignment ------------------------------ //
// -------------------------------     Operators    ------------------------------- //



const restaurant1 = {

    name: 'Pompey Puddings',
    numGuests: 20,

}

const restaurant2 = {

    name: 'Bournemouth Bakery',
    owner: 'Berry',

}



///  test for number of guest, if no property or value, then set to 10


//! so if true then leave, false then set to 10



restaurant1.numGuests = restaurant1.numGuests || 10;

///? console.log(restaurant1);

// {name: 'Pompey Puddings', numGuests: 20}



///?  restaurant2.numGuests = restaurant2.numGuests || 10;

///?  console.log(restaurant2);

// {name: 'Bournemouth Bakery', owner: 'Berry', numGuests: 10}




//------ logical OR ||= operator  ------ //


/// short circuits on the first truthy or last falsy and returns that value



// restaurant2.numGuests = restaurant2.numGuests || 10;


//! is the same as......


restaurant2.numGuests ||= 20;


//! KIND OF LIKE += OPERATOR


///? console.log(restaurant2);


// {name: 'Bournemouth Bakery', owner: 'Berry', numGuests: 20}






//------ logical Nullish ??= operator  ------ //



const restaurant3 = {

    name: 'Bundy Bakery',
    owner: 'Bezza',
    numGuests: 0,

}


///?  restaurant3.numGuests ||= 20;

///?  console.log(restaurant3);

// {name: 'Bundy Bakery', owner: 'Bezza', numGuests: 20} 

//! guest is 0(falsy) so 20 gets assigned even tho guest is 0!!




/// nullish operator when values are empty or 0



restaurant3.numGuests ??= 20;


///? console.log(restaurant3);


// {name: 'Bundy Bakery', owner: 'Bezza', numGuests: 0}





//------ logical Nullish &&= operator  ------ //



/// short circuits on the first falsy or last truthy and returns that value



///? const restaurant1 = {

///? 	name:'Pompey Puddings',
///? 	numGuests:20 }


///?  restaurant1.owner = restaurant1.owner && '<ANON>';

///?  console.log(restaurant1);

// {name: 'Pompey Puddings', numGuests: 20, owner: undefined}

//! undefined as it returns the first falsy value





///? restaurant1.owner = restaurant1.owner && '<ANON>';


restaurant1.owner &&= '<Anon>';

console.log(restaurant1);

// {name: 'Pompey Puddings', numGuests: 20}

//! no undefined returned





///?  restaurant3.owner = restaurant3.owner && '<ANON>';

restaurant3.owner &&= '<Anon>';


console.log(restaurant3);

// {name: 'Bundy Bakery', owner: '<Anon>', numGuests: 0}