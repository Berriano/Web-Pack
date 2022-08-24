'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //




// ----------------------------------  Summary  ---------------------------- //




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



class Student extends Person {


	university = 'Camebridge University';

	#studyHours = 0;
	#course;

	static numSubjects = 10;




	constructor(fullName, birthYear, startYear, course) {


		super(fullName, birthYear);

		this.startYear = startYear;

		this.#course = course;


	}



	introduce() {

		console.log(`My name is ${this.firstName}, and I'm studying ${this.course}`);

	}



	study(h) {

		this.#makeCoffee();
		this.#studyHours += h;

	}



	#makeCoffee() {

		return 'Here is a coffee to help you wake up';

	}



	get testScore() {

		return this._testScore;

	}



	set testScore(score) {

		this._testScore = score < 20 ? score : 0;

	}



	static printCurriculum() {

		console.log(`There are ${this.numSubjects} subjects`);

	}


}




const student1 = new Student('Mark Beresford', 1976, 2020, 'Web Development');

student1.testScore = 19;

console.log(student1);