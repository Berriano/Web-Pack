'use strict';


// ------------------------------ FUNCTIONS(){} -------------------------------- //


// ------------------------ Call, Apply, Bind Methods -------------------------- //


//! airline booking system with afunction object which uses properties form the object
//! using the this.keyword and also uses parameters 

const lufthansa = {

		airline:'Lufthansa',
		iataCode:'LH',
		bookings:[],


//! parameters are external / this.properties are internal (Inside Object)


		book(flightNum, passenger){

		console.log(

		`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		
		);


	//! push a new object containing flight and name to bookings array 

		this.bookings.push({flight:`${this.iataCode}${flightNum}`, passenger})


	}
}



//! 	call the book function using flighthNum, name arguments 
//! 	and object variable which the this.keyword applies to


lufthansa.book(239,'Mark Beresford');


///?  Mark Beresford booked a seat on Lufthansa flight LH239


lufthansa.book(235,'John Smoth')


///? John Smoth booked a seat on Lufthansa flight LH235


// console.log(lufthansa);

///? bookings:	  0: {flight: 'LH239', name: 'Mark Beresford'}
///?							1: {flight: 'LH235', name: 'John Smoth'}





/// Booking function to keep code DRY!!




const bookingFunc = function(flightNum, passenger){

	console.log(
		`${passenger} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
		);
	this.bookings.push({flight:`${this.iataCode}${flightNum}`, passenger});
	}


//! OR.......EVEN DRY..errr


const book = lufthansa.book;




/// new airline EuroWings with external function for booking




const eurowings = {

	airline: 'eurowings',
	iataCode: 'EW',
	bookings:[],

	//! instead of copying the booking function from one object to the next,
	//! create an external function which can be called on any object:- see above


	//! insert the external function

	// book,


};



// eurowings.book(345,'Bez Berry')


///? Bez Berry booked a seat on eurowings flight EW345


// console.log(eurowings);


///?  bookings: 0: {flight: 'EW345', passenger: 'Bez Berry'}



// eurowings.book(23,"Dave Triffle")






// -------------------- Use Call, Apply, and Bind Methods ------------------- //



								// -------------- Call() Method ------------- //



//! Call() method allow you to acces a function with the this.keyword used,
//! and add your own this.keyword as the first parameter, without adding the 
//! function to the object



///	 use the call method to explicitly select eurowings as the this.keyword      
/// 	in the book.method without adding the book function to the eurowings object



//! readily assigned function from the lufthansa object to a variable (book)

// const book = lufthansa.book; 


// eurowings.book(315,'Mark Berry') //! no need for this with call()


//! first parameter after call, is the this keyword, assigning
//! eurowings as the this keyword in the function


// book.call(eurowings, 315 , 'Mark Berry');

///? Mark Berry booked a seat on eurowings flight EW315

// console.log(eurowings);

//! no book function in the eurowings object anymore

///?	bookings: [ {flight: 'EW315', passenger: 'Mark Berry'} ] 



book.call(lufthansa, 315, " Dave Perry")

///? Dave Perry booked a seat on Lufthansa flight LH315

// console.log(lufthansa);



/// another new airline to use book function wihtout holding it in the object


//! must hold airline, iataCode, bookings[] properties for function to work

const swiss = {

	airline: 'SwissAir',
	iataCode: 'SW',
	bookings:[],

};



book.call(swiss, 999, 'Jonas Schmetters');


///? Jonas Schmetters booked a seat on SwissAir flight SW999


// console.log(swiss);


///? bookings : [ 0: {flight: 'SW999', passenger: 'Jonas Schmetters'} ]





									// ------------- Apply() Method ------------ //


// const book = lufthansa.book; 


//! apply method doesnt use values after the this keyword,
//! it uses an array of arguments.


const flightDataArray = [315,'Berry Berryaman'];


// book.apply(swiss,flightDataArray);


///? Berry Berryaman booked a seat on SwissAir flight SW315


// console.log(swiss);


///? bookings: [ 1: {flight: 'SW315', passenger: 'Berry Berryaman'} ]


//! ** apply() method not used anymore **
 //! 		as you can do the same with call() and the spread operator...


book.call(eurowings, ...flightDataArray);


///? Berry Berryaman booked a seat on eurowings flight EW315


// console.log(eurowings);


///? bookings: [1: {flight: 'EW315', passenger: 'Berry Berryaman'} ]




									// -------------- Bind() ------------- //



// const book = lufthansa.book; 


//! Bind allow you to manually set the this keyword for any function call
//! then creates a new function with the this.keyword set to the specified object


const bookEW =  book.bind(eurowings)


//! eurowings has been binded to the variable function

//! now you can call the function, specifically now for eurowings


bookEW(666,'berry man')


///? berry man booked a seat on eurowings flight EW666


// console.log(eurowings);


///? bookings: [ 2: {flight: 'EW666', passenger: 'berry man'} ]




//! now you can do the same with all the airlines



const bookSW = book.bind(swiss);


bookSW(333, 'Jarvis Berry');


///? Jarvis Berry booked a seat on SwissAir flight SW333


// console.log(swiss);


///? bookings: [ 2: {flight: 'SW333', passenger: 'Jarvis Berry'} ]



/// Bind other arguments to a function other than this keyword


//! not only bind airline but also the flight number


const bookEW666 = book.bind(eurowings, 666);


bookEW666('Santa Claus');


//! now santa will be booked specifically on
//! eurowings - flight EW666


///? Santa Claus booked a seat on eurowings flight EW666


// console.log(eurowings);


//! and here he is....


///? booking:[ 3: {flight: 'EW666', passenger: 'Santa Claus'} ]



/// this.keyword with event listeners


//! new property to lufthansa object - 300 planes


lufthansa.planes = 300;


//! function to buy planes


lufthansa.buyPlanes = function(){

//! this.keyword is the btn

	console.log(this);

	this.planes++

	console.log(this.planes);
}

//! querySelect btn

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes)

//! the this keyword is attached to the btn not the lufthansa.buyplanes property

///? NaN and btn 


//! THIS KEYWORD IS ATTACHED TO THE FUNCTION CALLING IT, 
//! SO THE EVENTLISTENER IS THE HIGHER ORDER FUNCTION CALLING IT


//! To assign the this.keyword to a property, use bind() as it just binds the keyword
///! without calling it ...(which is what call() does!!).


document.querySelector('.buy').addEventListener(
															'click', lufthansa.buyPlanes.bind(lufthansa))


///? planes: 301 - c.log(this)

///? 301  - c.log(this.planes)



/////   Partial application using bind()  /////


//! preset parameters and return a new function with bind();


const addTax = (rate, value) => value + value * rate;


console.log(addTax(0.15,200));


///? 230



//! Hardcode a rate into a function parameter
//! null for the first parameter as its always set to the this.keyword,
//! then set the rate


const addVAT = addTax.bind(null,0.18);


//! now you only need to call function with the value parameter


console.log(addVAT(200));


///? 236




/// Challenge - function returning function on above example NOT using bind()...



const newTax = rate => value =>  value + value * rate;


const newVat = newTax(0.17);

console.log(newVat(200));

console.log(newTax(0.15)(200));