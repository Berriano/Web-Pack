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


/* // Spread operator

 const ingredients = [
 	prompt('Ingredient 1'),
 	prompt('Ingredient 2'),
 	prompt('Ingredient 3'),
  ];

console.log(ingredients);

ingrediants = [ing1, ing2, ing3 ]

restaurant.orderPasta(...ingredients)
*/




// ----------------------------- Short Circuiting && || ?? ------------------------ //


//- || or operator returns FIRST TRUTHY VALUE

/// || - or operator can use any data type and return any data type 

//! can be used like an if/else statement

// console.log( 3 || 'mark' );

///? returns first truthy value (short circuits)


// console.log(true || 0);

///? true ( first truthy value);

// console.log(false || true);

///? true


// console.log(undefined || null);

///? returns LAST FALSEY VALUE IF NO TRUTHY VALUE


/// use with Object properties

/// long version

restaurant.numGuest = 23;


 const guests1 =  restaurant.numGuest ? restaurant.numGuest : 10 ;

///? console.log(guests1);


/// short circuiting version


const guest2 = restaurant.numGuest || 10;

// console.log(guest2);

///? if numGuests is true(its 23 so its true), return the truthy value else return 10;

//! will not work if numGuest = 0 as its a falsey value




// ---- && operator ----- //


// -- && - and operator returns FIRST FALSEY VALUE


// console.log(0 && 'Mark');


///? returns 0 as its the first falsey value

// console.log('mark' && 45);

///? if both are truthy then it returns the LAST FALSEY value

// console.log('mark' && 'berry' && undefined && null && 45);

///? undefined is returned as its the firts falsey value


/// Practical example 


//! instead of  if statement

///? if restaurant.orderPizza exists then execute code block

// if(restaurant.orderPizza){
// 	restaurant.orderPizza('chicken','mushroom','sweetcorn');
// }

///? chicken ['mushroom', 'sweetcorn']


//! use short circuiting

///? && - if first statement is true, continue to second and exectute last
///? truthy value or first falsey

// restaurant.orderPizza && restaurant.orderPizza('ham','mushroom','sweetcorn')


///? ham  ['mushroom', 'sweetcorn']




// ----- ??  Nullish coalescing operator ----- //

// - ?? Nullish values - Null and undefined (not 0 or '') //


restaurant.numGuestNull = null;
restaurant.numGuestNotNull = 23;

//! only non-nullish values will short circuit evaluation
//! so if value is null or undefined - evaluation will continue


/// if numGuest is undefined or null,
/// then only second evaluation would be executed

const guestNull = restaurant.numGuestNull ?? 10;

// console.log(guestNull);

///? value is null so second part is executed


const guestNotNull = restaurant.numGuestNotNull ?? 10;

// console.log(guestNotNull);

///? values is not null so short circuits and returns value numGuestNotNull = 23




// ----------------- Logical Operators with Short Circuiting ---------------- //


const rest1 = {

	name:'La Piazza',
	numGuest: 20,
}

const rest2 = {

	name:'Pizzaria',
	owner: ' Paulo Rossi',
}




// ------------------------ ||= OR Logical operator ------------------------- //


rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;


// console.log(rest1);

//! numGuest is true so return the value

///? {name: 'La Piazza', numGuest: 20}


// console.log(rest2);

//! numGuest is false(doesnt exist), continue evaluation - add property and value

///? {name: 'Pizzaria', owner: ' Paulo Rossi', numGuest: 10}


/// Using Logical operator with || OR

rest1.numGuest ||= 10;

//! if rest1.numGuest exists - return value(FIRST TRUTHY) else return 10

rest2.numGuest ||= 10;

//! if rest2.numGuest exists - return value(FIRST TRUTHY) else return 10...
//! (doesnt exist so add property AND value)

// console.log(rest1);

///? same result as above

// console.log(rest2);

///? same result as above




// ----------------------  ??= Nullish Logical Operator ---------------------- //

//! Null or Undefined



const rest3 = {

	name:'Pizzaria',
	numGuest: 0,
	owner: ' Paulo Rossi',
};




///? rest3.numGuest ||= 10;


///? console.log(rest3);

//! will set numGuest to 10 because 0 is a falsy value;

///? {name: 'Pizzaria', numGuest: 10, owner: ' Paulo Rossi'}



/// use ??= nullish logical operator


rest3.numGuest ??= 10;


// console.log(rest3);

///? {name: 'Pizzaria', numGuest: 0, owner: ' Paulo Rossi'}





// ------------------------- && AND Logical Operator ------------------------ //



/// use && = AND logical operator

//! returns first falsey value and stops

rest1.owner &&= 'Anon';
rest2.owner &&= 'Anon';
rest3.owner &&= 'Anon';

//! if rest3.owner is false - return it and stop , 
//! if not continue and set owner to 'Anon' 

console.log(rest1);

//! no owner so it was false, no change

///? {name: 'La Piazza', numGuest: 20}

console.log(rest2);

//! is true, so replace with anon

///? {name: 'Pizzaria', owner: 'Anon', numGuest: 10}

console.log(rest3);

//! is true, so replace with anon

///? {name: 'Pizzaria', numGuest: 0, owner: 'Anon'}