'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ----------------------------------    INHERITANCE    ------------------------------ //





//-------- Inherit between classes using ES6 classes ------------ //



let year = 2022;



class PersonCl {


	constructor(fullName, birthYear) {

		this.fullName = fullName;
		this.birthYear = birthYear;


	}



	calcAge() {

		console.log(year - this.birthYear);

	}


	get age() {

		return year - this.birthYear;

	}

	set fullName(name) {

		// console.log(name);

		if (name.includes(' ')) {

			this._fullName = name;

		}

		else console.log(`${name} is not a fullname`)

	}


	get fullName() {

		return this._fullName;

	}





}




const berry = new PersonCl('Mark Beresford', 1976);


berry.calcAge();





/// Create Student Class only from PersonCl




class StudentCl1 extends PersonCl { }




const mark1 = new StudentCl1('Mark', 1976);


console.log(mark1);


// Mark is not a fullname
// StudentCl1 {birthYear: 1976}



const markFull = new StudentCl1('Mark Beresford', 1976);


console.log(markFull);


// StudentCl1 {_fullName: 'Mark Beresford', birthYear: 1976}




/// Create Student Class from PersonCl and add parameters




class StudentCl2 extends PersonCl {


	constructor(fullName, birthYear, course) {


		/// instead of using the constructor.call(this, other params) , use the super() function

		//! super is the constructor function of the parent class from extends above(PersonCl)



		/// pass in the parameters from the parent constructor only


		super(fullName, birthYear)


		//! super sets the this keyword to the subclass to the fullname and birthyear


		this.course = course;


	}


	introduce() {

		console.log(`My name is ${this.fullName}, and I'm studying ${this.course}`);

	}


	calcAge() {

		console.log(`I'm ${year - this.birthYear} years old but feel more like ${year - this.birthYear + 10}. Too OLD!!`);
	}




}



const mark2 = new StudentCl2('Mark Beresford', 1976, 'Web Development')


console.log(mark2);


// StudentCl2 {_fullName: 'Mark Beresford', birthYear: 1976, course: 'Web Development'}


mark2.introduce();


// My name is Mark Beresford, and I'm studying Web Development



/// access the calcAge method from the parent class



mark2.calcAge();


// 46




/// override calcAge method to a specifc child class by adding it to the child


//! now mark2 uses the calcAge from studentCL, basicaly overides it


// I'm 46 years old but feel more like 56. Too OLD!!