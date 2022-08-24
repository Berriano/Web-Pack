'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// -------------------------------- Setters and Getters ------------------------------ //



// -------- Setters and getters on object literals -------- //



const account = {

	owner: 'Mark',
	movements: [100, 200, 350, 500, 675],



	get latest() {

		/// get the last movement from this object

		return this.movements.pop();

	},


	/// set a movemnet on the object



	set latest(mov) {

		this.movements.push(mov);

	}



}



console.log(account.latest);

// 675


/// when using a setter, use the property.method = value 
///  (not like a traditional function call)


account.latest = 150;


console.log(account.movements);


// [100, 200, 350, 500, 150] bcus 650  was popped of the end


console.log(account);


//! So the 'get' actually GETS the value whilst the 'set' actually  SETS the value







// ----------------------  Setters and getters on classes ----------------------- //





class PersonCl {


	constructor(firstName, birthYear) {

		this.firstName = firstName;
		this.birthYear = birthYear;


	}


	// calcAge() {

	// 	console.log(2022 - this.birthYear);

	// }



	greet() {

		console.log(`Hey ${this.firstName}`);

	}



	/// use get to find the age of the object PersonCl


	get age() {

		return 2022 - this.birthYear;

	}



	/// use set to add a fullname on a fullname property


	set fullName(name) {

		if (name.includes(' ')) {

			this.fullName = name;
		}
		else alert(`${name} is not a fullname`)
	}




}




const berry = new PersonCl('Mark', 1976);




/// use the object.property to calculate the objects function


console.log(berry.age);


// 46



/// age is added alsmost as a property


console.log(berry);




// ---------------- Setting fullName on constructor -------------------- //




class PersonFullName {


	constructor(fullName, birthYear) {

		this.fullName = fullName;
		this.birthYear = birthYear;


	}




	greet() {

		console.log(`Hey ${this.firstName}`);

	}



	/// use get to find the age of the object PersonCl


	get age() {

		return 2022 - this.birthYear;

	}



	/// use set to add a fullname on a fullname property


	set fullName(name) {

		console.log(name);

		if (name.includes(' ')) {

			/// as fullName already exist - confilct occurs (use _fullname instead)

			this._fullName = name;

		}

		else console.log(`${name} is not a fullname`)

	}

	/// the set fullName(name) will return a proeprty of _fullName, so use get to rename

	get fullName() {

		return this._fullName;
	}


}


const markBerry = new PersonFullName('Mark Beresford', 1976)


console.log(markBerry);


// PersonFullName {_fullName: 'Mark Beresford', birthYear: 1976}


/// fullName is computed like age, and set like a property which can be accesed like a prop


// birthYear: 1976
// _fullName: "Mark Beresford"
// age: 46
// fullName: "Mark Beresford"



console.log(markBerry.fullName);


// Mark Beresford



console.log(markBerry._fullName);


// Mark Beresford


/// try creating a person object with only a first name



const dave = new PersonFullName('Dave', 1985);


// Dave is not a fullname



console.log(dave);



// PersonFullName {birthYear: 1985}


//! No name given


