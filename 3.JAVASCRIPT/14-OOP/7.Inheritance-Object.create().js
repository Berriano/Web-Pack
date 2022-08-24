'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ----------------------------------    INHERITANCE    ------------------------------ //





//-------- Inherit between classes using Object.create() ------------ //


const PersonProto = {

	calcAge() {

		console.log(2022 - this.birthYear);

	},

	init(firstName, birthYear) {

		this.firstName = firstName;
		this.birthYear = birthYear;

	}


}




/// create a student proto to create new students using the PersonProto prototype



const StudentProto = Object.create(PersonProto);




/// Use the StudentProto to create a student prototype adding more specific parameters




StudentProto.init = function (firstName, birthYear, course) {


	PersonProto.init.call(this, firstName, birthYear)

	this.course = course;


}


//! you have to include init original parameters, then the specific parameters






/// adding methods to StudentProto




StudentProto.introduce = function () {

	console.log(`I'm ${this.firstName}, and I'm studying ${this.course}.`);
}







const mark = Object.create(StudentProto);


//! mark inherits all StudentProto and PersonProto



mark.init('Mark', 1976, 'Web development')



mark.calcAge();


mark.introduce();


console.log(mark);