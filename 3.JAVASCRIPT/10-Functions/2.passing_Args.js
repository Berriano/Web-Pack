//---------------------------------- Functions --------------------------------- //
//----------------------------  Passing Arguements  ---------------------------- //



'use strict';



/// passing a primitive value (string), and a reference value (object)


const flight = 'LH234';

const mark = {

    passengerName: 'Mark Beresford',
    passportNum: 112352

}





const checkin = function(flightNum, passenger) {

    //! dont change parameter values in a function

    flightNum = "LH345";

    passenger.passengerName = `Mr ${passenger.passengerName}`

    if (passenger.passportNum === 112352) {

        console.log('Checked In!!');
    } else {

        console.log('wrong passport??');
    }


}



checkin(flight, mark)




/// the primitive value cannot be changed, the function just makes a copy of it


console.log(flight);

// LH234

//! doesnt get changed because its primitive (cannot change the value of a string)




/// the object values are changed


console.log(mark);

// {passengerName: 'Mr Mark Beresford'}

//! has been changed to Mr, because its a reference type - object(only changes after function call)





//-----  Change passport number and call the checkin function --------- //



const passportNumChange = function(person){

	person.passportNum = Math.trunc(Math.random()*10000000);

}



/// call the passportNumberChange function on the mark object


passportNumChange(mark);



/// now when u checkin, you will have a different passport number


checkin(flight,mark)


// wrong passport??



///  mark object has changed - but only after the function calls


console.log(mark);


// {passengerName: 'Mr Mr Mark Beresford', passportNum: 7234535}