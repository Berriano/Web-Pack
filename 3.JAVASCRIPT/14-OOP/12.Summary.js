'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //




// ----------------------------------  Summary  ---------------------------- //




/// Things to remember


//!	Classes are synthetic sugar over constructor functions
//!	They are not Hoisted
//!	They are first class citizens
//!	Can only be executed in strict mode





// --------------  Parent Class  -------------- //




class Person {


	constructor(fullName, birthYear) {

		this.fullName = fullName;
		this.birthYear = birthYear;


	}


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



	static hey() {

		console.log('Hey There 🙋‍♂️');

		console.log(this);

	}



}





// ------------- Child Class -------------- //




/// extends - sets the inheritance from the Person(parent) class to the Student(child) class

//! this also sets up the prototype chain from the Parent to the child


class Student extends Person {




	/// public fields, similar to properties defined in the constructor

	//! this sets the university to 'Camebridge'


	university = 'Camebridge University';




	/// Private fields, not accesible outside of the class(can be used internally)

	//! too ensure data privacy



	#studyHours = 0;
	#course;




	/// static publics field only available on the class



	static numSubjects = 10;





	/// Constructor method 



	constructor(fullName, birthYear, startYear, course) {



		/// super must be called first to be able to be use the this. keyword

		//! Only on the child class (not needed on the parent)


		super(fullName, birthYear);




		/// instances available on the created student object (more personalised to Student)


		this.startYear = startYear;




		/// redefining a private field with personilsed data


		this.#course = course;


	}



	/// normal public method



	introduce() {

		console.log(`My name is ${this.firstName}, and I'm studying ${this.course}`);

	}




	/// referencing private field method



	study(h) {

		this.#makeCoffee();
		this.#studyHours += h;

	}





	/// private method



	#makeCoffee() {

		return 'Here is a coffee to help you wake up';

	}





	/// getter method

	//! to get a value from an object by writing a propety instead of writing a method 

	///? Student.testScore  -  to run the method



	get testScore() {

		return this._testScore;

	}





	/// setter method


	//! if the property name is the same as a cuurent property, 
	//! use underscore before the name, and return it in the getter method


	set testScore(score) {

		this._testScore = score < 20 ? score : 0;

	}



	/// static method


	//! a static method is only available on the class, and can only access static values




	static printCurriculum() {

		console.log(`There are ${this.numSubjects} subjects`);

	}


}




const student1 = new Student('Mark Beresford', 1976, 2020, 'Web Development');


student1.testScore = 19;



console.log(student1);