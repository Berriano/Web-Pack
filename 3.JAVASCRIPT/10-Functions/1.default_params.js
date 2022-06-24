//---------------------------------- Functions --------------------------------- //
//------------------------------ Default parameters ---------------------------- //


'use strict';


const bookings = [];



/// default parameters / values set in function parameters


const createBooking = function(


    flightNum,

    numPassengers = 1,

		/// can also use PREVIOUS parameters to calculate

    price = 199 * numPassengers

) {

    const booking = {

        flightNum,
        numPassengers,
        price

    }

    bookings.push(booking);

}




createBooking('LH208')

console.log(bookings);

//  {flightNum: 'LH208', numPassengers: 1, price: 199}





createBooking('LH208',4)

console.log(bookings);

// {flightNum: 'LH208', numPassengers: 4, price: 796}






/// to skip a paramter in the function call, use undefined


createBooking('LH208',undefined,500)

console.log(bookings);

//  {flightNum: 'LH208', numPassengers: 1, price: 500}
