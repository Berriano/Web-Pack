'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


// ---------------------------- PASSING ARGUMENTS ------------------------------ //
// --------------------------- Values vs Reference ----------------------------- //



const flight = 'LH234';

const mark = {

	name: 'Mark Beresford',
	passport: 11235200,

};


/// Check-in function


const checkIn = function(flightNum, passenger){

//! changes that a function can do
//! should change a parameter in a function, this is just an example

flightNum = 'LH999';  

passenger.name = 'Mr ' + passenger.name;


//! check if passport number is correct

if(passenger.passport === 11235200){

	console.log('Checked In 👍');
}
else {console.log(" Wrong Passport 👎")}

};


checkIn(flight, mark)



// console.log(flight);

//! LH234 (unchanged) as flightNum is just a copy of the original value - 
//! flightNum = flight... just a copy


console.log(mark);

//! name:'Mr Mark Beresford' (changed) as passenger object was changed in the function




/// Real life example of issues with 2 functions calling the same object



const newPassport = function(person){

	person.passport = Math.trunc(Math.random() * 1000000000);


};




//! new function call


newPassport(mark);

console.log(mark);

///? {name: 'Mr Mark Beresford', passport: 838240255 } passport number changed
///? because new function call changes object



//! use old function AFTER new function call


checkIn(flight, mark);

console.log(mark);

///? wrong passport and 
///? {name: 'Mr Mr Mark Beresford', passport: 838240255 } UPDATED PASSPORT NUMBER


