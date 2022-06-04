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
      open: 0,
      close: 24,
    },
  },
};


//////////////////////// Example Object Array for practice //////////////////////////


let year = 2021;


const mark ={

	name : 'Mark Berrry',
	age : year - 1976,
	placesLived : [
							'Weymouth',
							'Bournemouth',
							'Portsmouth',
							'Bundaberg'
	],
	friends:[
						'Barn',
						'Brad',
						'Rees',
						'Bradley'
	],
	family:[
				'Jarvie',
				'Jem',
				'Sophie'
	],

	friendsAndFamily: function(friend,family){

		return [this.friends[friend], this.family[family]];
	},


	daysWork: {
    tues: {
      start: 8,
      finish: 14,
    },
    wed: {
      start: 8,
      finish: 14,
    },
    thur: {
      start: 8,
      finish: 14,
    },
  },
};



// ----------------------------- Array Destructuring ----------------------------- //


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#array_destructuring



//! ES6 feature

/// Unpack values from an array into separate variables


const arr = [2,3,4];

/// modern way to get values and assign to separate variables


const[a,b,c] = arr;

///? a=2. b=3, c=4



///	Get first and second array values from object


 const [wife, son, daughter] = mark.family;

//  console.log(wife, son, daughter);

 ///? Jarvie Jem Sophie



///	Get first and third array values from object by leaving a gap



let [first, ,third] = mark.placesLived;

// console.log(first,third);

///? first = Weymouth , third = Portsmouth



/// Switching variables using destructuring


[first, third] = [third, first];

// console.log(third);

///? now third is Weymouth



/// Destructure using a function in an object

/// create a function in object


///? friendsAndFamily: function(friend,family){

///? 	return [this.friends[friend], this.family[family]];

///? }

//! returns an array using the function parameters(friend,family)
//! and the object array this.friends and this.family then
//! the index numbers given when function is called

const markFandF = mark.friendsAndFamily(1,1);

// console.log(markFandF);

///? ['Brad' , 'Jem'] Brad = friend[1] - Jem = family[1].




/// Now destructure the array


let [friend, family] = markFandF;

// console.log(friend, family, typeof friend);

///? brad , jem , string



/// Use destructuring on nested arrays


const nested = [1, 2, [3, 4], 5];

const [i, ,j] = nested;

// console.log(i,j, typeof i,typeof j);

///? 1, [3, 4] 'number' , 'object



/// need to do destructuring inside destructuring


const [x, , [y, z]] = nested;

// console.log(x,y,z);

///? 1, 3, 4

const [m, , [, n]] = nested;

// console.log(m,n);

///? m = 1, n = 4


/// Default values for destructuring


const newArr = [8,9];

// const [p,q,r] = newArr;

// console.log(p,q,r);

///? p = 8, q = 9, r = undefined
///? so we use default values incase of undefined

const [p = 1, q = 1,   r= 1] = newArr;

///? console.log(p,q,r);

///? p = 8, q = 9, r = 1

