'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





//------------------------------------  Prototypes  ---------------------------------- //





const Person = function (firstName, birthYear) {

	this.firstName = firstName;
	this.birthYear = birthYear;

}



const mark = new Person('Mark', 1976);


// Person {firstName: 'Mark', birthYear: 1976}





// ---------- Adding functions to constructors using prototypal inheritance ---------- //



let year = 2022;



Person.prototype.calcAge = function () {

	this.age = year - this.birthYear;

}

//! IF THE THIS.AGE ISNT ADDED THE MARK OBJECT STILL HAS ACCESS TO THE CALCAGE FUNCTION
//! THRU PROTOTYPAL INHERITANCE




/// calcAge is added to Person constructor (but will need calling on each object)



mark.calcAge();


//  Person {firstName: 'Mark', birthYear: 1976, age: 46}






// ---------------- isPrototypeOf() ----------------- //


/// if you have code that can only function when dealing with objects descended 
/// from a specific prototype chain (Especially if using functions from that constructor)



console.log(Person.prototype.isPrototypeOf(mark));


// true





// ------------- Setting properties on prototype ----------- //




Person.prototype.species = 'Homo Sapiens';


console.log(mark.species);


// Homo Sapiens - Although doesnt show as a property in the object





// ------------------- HasOwnProperty() ------------------- //



/// to check if the object contains the actual property



console.log(mark.hasOwnProperty('firstName'));


// true


console.log(mark.hasOwnProperty('species'));


// false





// -------------------------------- Prototype Chain ------------------------------- //




// -------- __proto__ --------- //



/// proto is the prototype used by the created objects




const markProto = mark.__proto__;




// {species: 'Homo Sapiens', calcAge: ƒ, constructor: ƒ}


//! this is what contains all the functions and methods used by the mark object


// Person {firstName: 'Mark', birthYear: 1976, age: 46}


//! to produce the mark object above ⬆





/// find the prototype of mark.prototype



const markProtoProto = mark.__proto__.__proto__;



// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, etc etc etc etc}


//! finds the Object.prototype (top of the chain - any further returns null)





/// finding the constructor of the Person



const personConstructor = Person.prototype.constructor;



// ƒ (firstName, birthYear) {

// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

// }




// ---------------------------- Prototype of Arrays -------------------------- //




const arr = [1, 2, 3, 4, 5];


const arrProto = arr.__proto__;


///  lists every method arrays use


// [constructor: ƒ, at: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, etc etc etc] 


console.log(arrProto === Array.prototype);


// true




const arrProtoProto = arr.__proto__.__proto__;


// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, etc etc etc etc}


//! finds the Object.prototype (top of the chain - any further returns null)





/// using the array.prototype to set methods on any array



const arraySet = [2, 2, 3, 3, 4, 2, 1, 5, 6, 6, 67, 8, 5,];



///  Add a new method (unique) to the array constructor
///  to be used on the arrayset that returns it as a new Set()


Array.prototype.unique = function () {

	return [...new Set(this)]

};

//! all arrays can call the unique method!



const newSet = arraySet.unique();


// [2, 3, 4, 1, 5, 6, 67, 8]



const arrNewSet = [5, 5, 5, 5, 6, 7, 8].unique();


//  [5, 6, 7, 8]




//! DONT ADD NEW METHODS AS FUTURE JS MAY USE THE NAME
//!  AND YOUR CODE WILL INHERIT THAT METHOD





