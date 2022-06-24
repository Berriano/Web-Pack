//---------------------------------- Functions --------------------------------- //
//------------------------------  Call and Apply ------------------------------- //


'use strict';



/// create a function to use on all objects (cannot use arrow function with THIS keyword)


/// use function to book a flight and push booking to airline object




const book = function(flightNum, person) {

    console.log(
        `${person} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`
    );

		this.bookings.push({flight:`${this.iataCode}${flightNum}`,person})

}



const lufthansa = {

    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],

		/// external book function

    book,



		/// add a booking function called booked to an object, 
		/// then assing to  a variable to use  on other objects using the call() method

		//! * see booked variable below


		booked(flightNum, person) {

			console.log(
					`${person} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`
			);
			

			/// push the booking to the objects bookings array
	
			this.bookings.push({flight:`${this.iataCode}${flightNum}`,person})

	
	}	

}



/// call the external booking function


lufthansa.book(456, 'Mark Berry')
lufthansa.book(478, 'Dave Bezza')



const eurowings = {

    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    book,

}


const swiss = {

    airline: 'Swiss',
    iataCode: 'LX',
    bookings: [],
    book,

}



/// call the function on the eurowings object ONLY IF THE FUNCTION IS IN THE OBJECT



eurowings.book(234,'Dave Beraz');


// Dave Beraz booked a seat on Eurowings flightEW234


console.log(eurowings);


// 0: {flight: 'EW234', person: 'Dave Beraz'}



// ------------------------------ Call() method -------------------------------- //



const booked = lufthansa.booked;



/// call the function with the call method when borrowing a function from an object

/// THIS WORKS WHEN THE FUNCTION IS NOT IN THE OBJECT


//! the this keyword is replaced by the first arguement


booked.call(eurowings, 987, 'Jaja Binks');


console.log(eurowings);


// Jaja Binks booked a seat on Eurowings flightEW987

// bookings: 0: {flight: 'EW987', person: 'Jaja Binks'}





/// can still be called on lufthansa



book.call(lufthansa, 666, 'Jaja Binks');


console.log(lufthansa);


// 0: {flight: 'LH456', person: 'Mark Berry'}
// 1: {flight: 'LH478', person: 'Dave Bezza'}
// 2: {flight: 'LH666', person: 'Jaja Binks'}




///  create a new swiss object and call the function




book.call(swiss, 987, 'Jaja Berry');


// Jaja Berry booked a seat on Swiss flightLX987


console.log(swiss);


// 0: {flight: 'LX987', person: 'Jaja Berry'}






// ------------------------------ apply() method -------------------------------- //



/// similar to call except it has to take an array as the flight arguments



/// create an array with the flight data



const flightData = [456,'berry bezza'];


book.apply(swiss,flightData);


// berry bezza booked a seat on Swiss flightLX456



//! no real need to use this as if we have the data in an array, we can spread into call()



book.call(eurowings, ...flightData);


// berry bezza booked a seat on Eurowings flightEW456




