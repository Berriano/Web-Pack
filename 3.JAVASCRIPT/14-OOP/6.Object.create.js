'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ---------------------------------   Object.create   ------------------------------ //



/// re-create the person object


const PersonProto = {

	calcAge() {

		console.log(2022 - this.birthYear);

	},


}


/// create a new object that is linked to the person prototype


const jarvie = Object.create(PersonProto);


console.log(jarvie);


jarvie.name = 'Jarvie';
jarvie.birthYear = 1974;


jarvie.calcAge();

// 48





/// create objects programatically




const PersonProtoProgram = {

	calcAge() {

		console.log(2022 - this.birthYear);

	},

	init(firstName, birthYear) {


		this.firstName = firstName;

		this.birthYear = birthYear;

	}


}



const dave = Object.create(PersonProtoProgram);

dave.init('Dave', 1999);

dave.calcAge();


console.log(dave);