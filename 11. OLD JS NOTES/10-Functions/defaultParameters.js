'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //



// -- Default Parameters -- //



/// Booking function


///? create an array to push the bookings to 


const flightBookings = [];


///? create the function


//!without default parameters

// const createBooking = function(flightNum, numPassengers, price){


//! with default parameters (numPassengers =1, price = 199)

const createBooking = function(flightNum, numPassengers = 1, price = 199){



///?  create an object to push bookings to the array

const booking = {


	//! to create a property simply add the property with a comma

	flightNum,
	numPassengers,
	price,
	}


	console.log(booking);


	///? push the booking


	flightBookings.push(booking);

};


//! create booking with just a flight number


createBooking('LH123')


//! without default parameters

///? {flightNum: 'LH123', numPassengers: undefined, price: undefined}


//! with default parameters

///? {flightNum: 'LH123', numPassengers: 1, price: 199}



//! to override defaults simply add an argument to the function call

createBooking('LH123', 100, 299)

///? {flightNum: 'LH123', numPassengers: 100, price: 299}


//! BOOKING FUNCTION WITH EXPRESSIONS IN PARAMETERS

const flightBookingsEXP = [];

const createBookingEXP =  
				
		function(flightNum, numPassengers = 1, 

			//! include an expression in parameter to give total price
			//!	(parameter has to set be before price)

											price = 199 * numPassengers ){

					const bookingEXP = {
						
							flightNum,
							numPassengers,
							price,
							}
							console.log(bookingEXP);

							flightBookingsEXP.push(bookingEXP);
}

createBookingEXP('LH123',100);

///? {flightNum: 'LH123', numPassengers: 100, price: 19900}


//! to leave an argument blank, enter 'undefined' and default will be used;


createBookingEXP('LH123', undefined, 1000);

///? {flightNum: 'LH123', numPassengers: 1, price: 1000}