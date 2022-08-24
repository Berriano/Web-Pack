'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ---------------------------------- Private class fields ---------------------------- //



//! public fields
//! private fields
//! public methods
//! private methods

//! (Plus there is the static versions)






class Account {




	// ------------------------  Public fields (instances) -------------------- //



	///? looks like a variable but no const/let needed



	locale = navigator.language;



	/// instead of this in the constructor.....


	// this.locale = navigator.language;


	//! Public fields dont get added to the prototype as they are instances






	// ---------------------- Private fields (instances) ------------------------- //



	/// to make properties un-accesable from the outside, use the # key



	#movements = [];


	// this._movements = [];


	//! all the movement properties the need the # key before them





	/// for private fields needed in the constructor, set them with the # key outside like 
	/// a normal undefined variable



	#pin;


	//! This can them be accesed inside the constructor nut with a private class



	constructor(owner, currency, pin) {


		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;


		console.log(`Thanks for opening an account, ${this.owner} :)`);


	}



	// ---------------------------- Public Methods ------------------------------- //





	getMovements() {

		return this.#movements;

	}


	deposit(val) {

		this.#movements.push(val)
	}


	withdrawal(val) {

		this.deposit(-val)

	}


	requestLoan(val) {


		if (this._approveLoan(val)) {

			this.deposit(val);

			console.log('Loan Approved');

		}

	}


	// ----------------------------- Private Methods ---------------------------- //



	/// to make methods private, simply add the # key like the private fields





	// 	#approveLoan(val) {

	// 		return true;

	// 	}


	//! not quite implemented fully yet, so still use




	_approveLoan(val) {

		return true;

	}

}




const acc1 = new Account('Mark', 'AUD', 2102);



acc1.deposit(500);

acc1.withdrawal(250);

acc1.requestLoan(1000);


console.log(acc1);




/// #movements / #pin property unaccesable


// console.log(acc1.#movements);

// console.log(acc1.#pin);



/// but movemnets can still be accesed via the getMovements method



console.log(acc1.getMovements());



/// after #approveLoan  made private method


acc1.requestLoan(2000);


// acc1.#approveLoan(150);

//! returns private field error

console.log(acc1.getMovements());