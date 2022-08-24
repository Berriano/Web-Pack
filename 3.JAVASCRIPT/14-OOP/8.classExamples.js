'use strict';


//------------------------------------------- OOP ------------------------------------ //
//------------------------------------------- --- ------------------------------------ //





// ----------------------------------  Classes Examples  ----------------------------- //





class Account {



	constructor(owner, currency, pin) {

		this.owner = owner;
		this.currency = currency;
		this.pin = pin;



		/// create a property that doesnt include a parameter

		this.movements = [];

		this.locale = navigator.language;



		/// even add plain values with out proprties


		console.log(`Thanks for opening an account, ${this.owner} :)`);



	}


	/// create a deposit and withdrawal method

	//! called public interface


	deposit(val) {

		this.movements.push(val)
	}



	withdrawal(val) {

		/// use the deposit method as methods can use other methods

		this.deposit(-val)

	}

}




/// create an account from the Account classs



const acc1 = new Account('Mark', 'AUD', 2102);




/// adding values to the movements array the bad way ⏬



// acc1.movements.push(250);
// acc1.movements.push(-150);




/// adding values to the movements array the good way by using the methods ⏬


acc1.deposit(500);


acc1.withdrawal(250);


// movements: (2) [500, -250]


console.log(acc1);