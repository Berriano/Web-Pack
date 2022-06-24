//---------------------------------- Functions --------------------------------- //
//-------------------------------- Bind() method ------------------------------- //


'use strict';




const lufthansa = {

    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],


    booked(flightNum, person) {

        console.log(
            `${person} booked a seat on ${this.airline} flight${this.iataCode}${flightNum}`
        );

        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            person
        })


    }

}



const booked = lufthansa.booked;



const eurowings = {

    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],


}


const swiss = {

    airline: 'Swiss',
    iataCode: 'LX',
    bookings: [],

}


//----------------------------- Using the Bind() method ------------------------- //



/// bind() creates a new function, 
/// by binding the this keyword to the booked function by setting it as the first parameter


//! bind(new this keyword, any argument,any argument etc etc)



const bookEW = booked.bind(eurowings);



bookEW(456, 'Berry Bezza');


console.log(eurowings);


// bookings: Array(1)

// 0: {flight: 'EW456', person: 'Berry Bezza'}


/// can specify the arguments already to be specific to a certain value



const bookLH456 = booked.bind(lufthansa, 456);



/// so when its called, the airline number is already set


bookLH456('Mr Beresford');

// Mr Beresford booked a seat on Lufthansa flightLH456


bookLH456('Sophie Pudge')

// Sophie Pudge booked a seat on Lufthansa flightLH456


console.log(lufthansa);

// bookings: Array(2)

// 0: {flight: 'LH456', person: 'Mr Beresford'}
// 1: {flight: 'LH456', person: 'Sophie Pudge'}





// ---------------------- using bind() with event listeners ----------------------- //



/// the this keyword gets assigned to the actual button and not the function assigned,
/// as the function assigned is not calling it.




/// assign a planes property with a avalue of 300


lufthansa.planes = 300;

console.log(lufthansa);

// {airline: 'Lufthansa', iataCode: 'LH', bookings: Array(2), planes: 300}



/// create an object.function to add a plane to the planes value


lufthansa.buyPlane = function() {

    this.planes++;

    console.log(this.planes);

}


/// attach to page 'buy new plane' btn


// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

//! this way doesnt work as the this keyword is attached to the btn event function


/// the only way to get it to work is buy binding the this keyword to the click function


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


console.log(lufthansa);


// after 2 clicks - planes: 302






// ------------------ Partial application using blind() --------------------- //



/// simple function for calculating 10% GST


const addTax = (gst, value) => value + value * gst;


console.log(addTax(0.1, 6000));

// 7200



/// but we know that gst will always be set at 10% so...


/// partial application creates a new function with the value set

//! The first parameter is always the this keyword, so set to null to be ignored


const addGst = addTax.bind(null, 0.1);

console.log(addGst(1000));

// 1100


console.log(addGst(798));

// 877.80



// ---- extra challenge - rewrite using function returning function practice ---- //




const addNewTax = function(rate) {

    return function(value) {
        value + value * rate
    }
};


const tenPercent = addNewTax(0.1);

console.log(tenPercent(1000));


///  bind method is basically the same as functions returning functions