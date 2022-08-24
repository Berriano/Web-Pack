'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





//--------------------------------  Constructor Functions ---------------------------- //




/// Start Constructor Function with Capital Letter


//! Not possible to Constructor function with Arrow function


const Person = function (firstName, birthYear) {


	/// Instance properties


	this.firstName = firstName;
	this.birthYear = birthYear;



}



/// call constructor function with 'new' keyword



new Person('jonas', 1992);




/// What happens when new Constructor function is called


//! 1. A new object created {}

//! 2. When the functioin is called, the this keyword is the object

//! 3. The new object is then linked to the prototype

//! 4. The function returns the object







/// Instances of Person



const mark = new Person('Mark', 1976);


// Person {firstName: 'Mark', birthYear: 1976}



const jarvie = new Person('Jarvie', 1974);


// Person {firstName: 'Jarvie', birthYear: 1974}





/// Check for instances (Boolean)



console.log(mark instanceof Person);


// true




// -------- Constructor function Methods ---------- //



const Person2 = function (firstName, birthYear) {


	this.firstName = firstName;
	this.birthYear = birthYear;


	/// (never create methods INSIDE constructor functions)



}