//----------------------------------Higher order-------------------------------- //
//---------------------------------- Functions --------------------------------- //


'use strict';




//----------------------------------  Callback  -------------------------------- //
//---------------------------------- Functions --------------------------------- //



//! callback functions are called by another function, so dont use parenthese



/// a function to replace all the spaces in a string and converts lowercase



const oneWord = function(str) {

    return str.replaceAll(' ', '').toLowerCase();

}


console.log(oneWord('Hello EveryOne How Are You?'));

// helloeveryonehowareyou?




/// a function to convert the first word of a string to uppercase



const upperFirstWord = function(str) {

    const [splitted, ...others] = str.split(' ');

    return [splitted.toUpperCase(), ...others].join(' ');


}


console.log(upperFirstWord('hello everyone how are you'));

// HELLO everyone how are you



/// the functions have properties



console.log(upperFirstWord.name);

// upperFirstWord


console.log(upperFirstWord.length);

// 1






// ------  transformer - higher order function ( takes a function as an arg ) ----- //



const transformer = function(str, func) {


    console.log(`This is the original string ${str}`);



    /// call the callback function inside the higher order function with the str argument


    console.log(`This is the transformed string ${func(str)}`);



    console.log(`This is the function name ${func.name}`);


}




/// call the transormer function with a function as the func parameter



transformer('Javascript is the best!!', upperFirstWord)


// This is the original string Javascript is the best!!


// This is the transformed string JAVASCRIPT is the best!!


// This is the function name upperFirstWord





transformer('Javascript is the best!!', oneWord)


// This is the original string Javascript is the best!!

// This is the transformed string javascriptisthebest!!

// This is the function name oneWord







/// my own callbacks function system



const ageBracket = function(age) {


    switch (true) {

        case age < 12:

            return (`Being ${age} -`);



        case age > 12 && age < 18:

            return (`Being ${age} -`);


        case age >= 18 && age < 65:

            return (`Being ${age} -`);

        case age >= 65:

            return (`Being ${age} -`);

        default:
            return ('Not an age!!')


    }

}





const checkAge = function(num, func) {


    num >= 18 && num < 65 ? 
		
		console.log(`This ride is for 18 years and over - ${func(num)} you are allowed on: ENJOY!!`) 
		
		: console.log(`Sorry ${func(num)} - you are too ${num < 18 ? 'young':'old'} for this ride: SORRY!!`);



}


checkAge(65, ageBracket)