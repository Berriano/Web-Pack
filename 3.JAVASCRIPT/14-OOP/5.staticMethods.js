'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ---------------------------------   Static Methods   ------------------------------ //






class Person {


	constructor(firstName, birthYear) {

		this.firstName = firstName;
		this.birthYear = birthYear;


	}
}


const mark = new Person('Mark', 1976);


console.log(mark);




/// adding a static function to the person constructor



Person.hey = function () {

	console.log('Hey There 🙋‍♂️');
};




/// call the function



Person.hey();


// Hey There 🙋‍♂️






// ------------------ Class static ------------------- //





class PersonFullName {


	constructor(fullName, birthYear) {

		this.fullName = fullName;
		this.birthYear = birthYear;


	}


	// --- instance methods --- //


	greet() {

		console.log(`Hey ${this.firstName}`);

	}




	get age() {

		return 2022 - this.birthYear;

	}




	set fullName(name) {


		if (name.includes(' ')) {

			this._fullName = name;

		}

		else console.log(`${name} is not a fullname`)

	}



	get fullName() {

		return this._fullName;

	}

	//---- static methods --- //


	/// use the 'static' keyword to add to class


	static hey() {

		console.log('Hey There 🙋‍♂️');

		console.log(this);

	}


}


PersonFullName.hey();


// Hey There 🙋‍♂️

// this keyword is entire class





const markBerry = new PersonFullName('Mark Beresford', 1976)


console.log(markBerry);




