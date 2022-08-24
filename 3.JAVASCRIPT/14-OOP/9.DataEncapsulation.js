'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ---------------------------------- Data Encapsulation ----------------------------- //




class Account {





	constructor(owner, currency, pin) {



		this.owner = owner;
		this.currency = currency;


		/// protected proprties

		this._pin = pin;
		this._movements = [];



		this.locale = navigator.language;

		console.log(`Thanks for opening an account, ${this.owner} :)`);


	}


	deposit(val) {

		this._movements.push(val)
	}


	withdrawal(val) {

		this.deposit(-val)

	}


	_approveLoan(val) {

		return true;

	}


	requestLoan(val) {


		if (this._approveLoan(val)) {

			this.deposit(val);

			console.log('Loan Approved');

		}

	}

}




const acc1 = new Account('Mark', 'AUD', 2102);



acc1.deposit(500);

acc1.withdrawal(250);

acc1.requestLoan(1000);


console.log(acc1);


