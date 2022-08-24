'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ----------------------------------    INHERITANCE    ------------------------------ //





//-------- Inherit between classes using constructor functions ------------ //



let year = 2022;



const Person = function (firstName, birthYear) {

	this.firstName = firstName;
	this.birthYear = birthYear;

}



Person.prototype.calcAge = function () {

	this.age = year - this.birthYear;

}




// ---- Create a student ---- //




/// pass in same parameters as parent class adding extra parameters specific to student



// const Student = function (firstName, birthYear, course) {

// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// 	this.course = course;


// }


// ---- Create a student using the Person class ---- //



/// instaed of repeating the code, call the function inside the class using the call method


//! Revisit the call method for info on this keyword



const Student = function (firstName, birthYear, course) {


	Person.call(this, firstName, birthYear)

	this.course = course;


}




/// Create the Student.prototype object, and link the person.prototype classes


Student.prototype = Object.create(Person.prototype);


//! this adds the calcAge function to the student prototype




Student.prototype.introduce = function () {

	console.log(`My name is ${this.firstName}, and I'm studying ${this.course}`);

}




const berry = new Student('Mark', 1976, 'Web Development');



berry.introduce();


// My name is Mark, and I'm studying Web Development




berry.calcAge();


console.log(berry);


//Student {

//  firstName: 'Mark',
// 	 birthYear: 1976,
// 	 course: 'Web Development',
//!  age: 46

// }



console.log(berry.__proto__);


///?   Person {introduce: ƒ}
///?   introduce: ƒ ()

///?   [[Prototype]]: Object
///?   calcAge: ƒ ()
///?   constructor: ƒ (firstName, birthYear)
///?   [[Prototype]]: Object



//! This show the prototype for berry as person not student because of
//! Student.prototype = Object.create(Person.prototype);



console.dir(Student.prototype.constructor);


// ƒ Person(firstName, birthYear)



/// to fix


Student.prototype.constructor = Student;


console.dir(Student.prototype.constructor);


// ƒ Student(firstName, birthYear, course)

