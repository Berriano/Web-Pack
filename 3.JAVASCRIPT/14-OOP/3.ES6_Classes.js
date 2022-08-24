'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





//------------------------------------  ES6 Classes ---------------------------------- //



/// class expression


const PersonClExp = class {

	constructor() {


	}


};




/// class declaration


class PersonClDec {


	constructor() {


	}


}



/// new person


class PersonCl {


	constructor(firstName, birthYear) {

		this.firstName = firstName;
		this.birthYear = birthYear;


	}

	/// adding methods adds the function to the prototype and not the constructor 
	/// when using ES6 classes

	//! so will not show in the berry object, but the property can be accessed


	calcAge() {

		console.log(2022 - this.birthYear);

	}


	/// added from below

	greet() {

		console.log(`Hey ${this.firstName}`);

	}


}




const berry = new PersonCl('Mark', 1976);


// PersonCl {firstName: 'Mark', birthYear: 1976}


berry.calcAge();


// 	41

console.log(berry);

// 		PersonCl {firstName: 'Mark', birthYear: 1976}
// 		birthYear: 1976
// 		firstName: "Mark"
// 		[[Prototype]]: Object
//!		calcAge: ƒ calcAge()
// 		constructor: class PersonCl
// 		[[Prototype]]: Object




/// adding methods to an already existing prototype



PersonCl.prototype.greet = function () {

	console.log(`Hey ${this.firstName}`);

}


berry.greet();


// Hey Mark

//! Can also be added to the class above like the calcAge()





/// Rules of ES6 classes



//! 1. classes are not hoisted

//! 2. Classes are first class citizens(expressions)

//! 3. Classes are executed in strict mode


