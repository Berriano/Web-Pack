//////------------------------  BANKIST APP ------------------------ //////
//////------------------------  ----------- ------------------------ //////

'use strict';

// Data

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};



const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};



const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};



const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};




// Array of the account objects


const accounts = [account1, account2, account3, account4];


// Elements


const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');


const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');


const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');


const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');



////////////////////////////////////////////////////////////////////////////////////////




// -- Display UI function -- //



const updateUI = function (acc) {


	displayBalance(acc);

	displayMovements(acc.movements);

	displaySummary(acc);

}




//--  display movements --//



const displayMovements = function (movements) {



	document.querySelector('.movements').innerHTML = '';

	movements.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `
		
		<div class="movements__row">		
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>		
		<div class="movements__value">${mov}€</div>									
		</div>`;

		document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);
	});
};




//-- display balance --//


const displayBalance = function (currAcc) {


	currAcc.balance = currAcc.movements.reduce((acc, mov) => acc + mov, 0);

	labelBalance.textContent = `${currAcc.balance}€ `;


};




//-  display summary --//



const displaySummary = function (currAcc) {


	const incomes = currAcc.movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);


	labelSumIn.textContent = ` ${incomes}€`;



	const out = currAcc.movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);


	labelSumOut.textContent = ` ${Math.abs(out)}€`;



	const interest = currAcc.movements

		.filter(mov => mov > 0)
		.map(deposit => (deposit * currAcc.interestRate) / 100)
		.filter(int => int >= 1)
		.reduce((acc, int) => acc + int, 0);


	labelSumInterest.textContent = `${interest}€`;


};




//-- create username --//



const createUserName = function (accs) {

	accs.forEach(function (acc) {

		acc.username = acc.owner
			.toLowerCase()
			.split(' ')
			.map(name => name[0])
			.join('');
	});
};



createUserName(accounts);



// -- Create login -- //



let currentAccount;


btnLogin.addEventListener('click', function (e) {

	e.preventDefault();

	currentAccount = accounts.find(

		acc => acc.username === inputLoginUsername.value

	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {

		labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]

			}`;



		containerApp.style.opacity = 100;

		inputLoginUsername.value = inputLoginPin.value = '';

		inputLoginPin.blur();


		updateUI(currentAccount);


	}
});



// ----------------------- 6. Money transfer ------------------------ //



btnTransfer.addEventListener('click', function (e) {


	e.preventDefault();


	const amount = Number(inputTransferAmount.value);



	const recieverAccount = accounts.find(

		acc => acc.username === inputTransferTo.value

	);

	console.log(recieverAccount, amount);


	if (

		amount > 0 &&

		recieverAccount &&

		currentAccount.balance >= amount &&

		recieverAccount?.username !== currentAccount.username) {



		currentAccount.movements.push(-amount);

		recieverAccount.movements.push(amount);

		inputTransferAmount.value = inputTransferTo.value = '';


		updateUI(currentAccount)

	}

});




// ------------------------ 7. Close account ----------------------------- //




/// attach event handler to close account button



btnClose.addEventListener('click', function (e) {


	e.preventDefault();



	if (

		/// confirm the account username and pin macth the currentaccount


		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin) {



		///  use the findIndex method to match the index number of the account,
		///  to the accounts array using a callback function



		const index = accounts.findIndex(acc => acc.username === currentAccount.username);



		/// use that index number to splice out the account from the array


		accounts.splice(index, 1);

		//! account at index number remove 1 element



		/// fade screen to welcome screen


		containerApp.style.opacity = 0;


		console.log(accounts);



	}


	/// clear the input fields


	inputCloseUsername.value = inputClosePin.value = '';

})





