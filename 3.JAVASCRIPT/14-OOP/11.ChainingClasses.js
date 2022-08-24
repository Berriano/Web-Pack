'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //



// ----------------------------------  Chaining classes  ---------------------------- //



class Account {



	locale = navigator.language;

	#movements = [];

	#pin;


	constructor(owner, currency, pin) {


		this.owner = owner;
		this.currency = currency;
		this.#pin = pin;

		console.log(`Thanks for opening an account, ${this.owner} :)`);


	}


	getMovements() {

		return this.#movements;

	}


	deposit(val) {

		this.#movements.push(val);
		return this;
	}


	withdrawal(val) {

		this.deposit(-val);
		return this;

	}


	requestLoan(val) {


		if (this._approveLoan(val)) {

			this.deposit(val);

			console.log('Loan Approved');

		};

		return this;

	}


	_approveLoan(val) {

		return true;

	}

}



const acc1 = new Account('Mark', 'AUD', 2102);


acc1.deposit(500);
acc1.withdrawal(250);
acc1.requestLoan(1000);



// ----------------------------------  Chaining classes  ---------------------------- //


/// To be able to chain methods, the code in the actual method blocks need to be returned



acc1.deposit(1000).requestLoan(20000).withdrawal(12000);

console.log(acc1);


///?  #movements: Array(6)

///?  0: 500
///?  1: -250
///?  2: 1000
///?  3: 1000
///?  4: 20000
///?  5: -12000

///?  length: 6