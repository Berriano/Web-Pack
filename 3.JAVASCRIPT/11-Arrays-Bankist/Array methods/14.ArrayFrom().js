
// ---------------------------------- Array.from() -------------------------------- //

//////------------------------  ---------------------- ------------------------ //////

'use strict';

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


const accounts = [account1, account2, account3, account4];


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




// ---------------------------------- Array.from() -------------------------------- //


//! can be used instead of new Array and fill method



/// creates a new array from a specified {length: num} or expression, 
/// and a callback function for each iteration of the length or expression


// Array.from(arrayLike, (element) => { /* ... */ } )
// Array.from(arrayLike, (element, index) => { /* ... */ } )




const onePlusOne = Array.from({ length: 10 }, () => 1 + 1);


// (10) [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]

//! an array 10 elements long, filled on each iteration with 1 + 1 = 2





/// the callback function is the same as the map method (current el, index, array)



// const oneToLength = Array.from({ length: 15 }, (curr, i, arr) => i + 1);


//! as we dont use some of the parameters, we can use underscore, or leave of the end



const oneToLength = Array.from({ length: 15 }, (_, i) => i + 1);


// (15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]






// -------------- Convert Iterables to arrays using Array.from() ------------- //


////////////////////////        USE BANKIST APP          /////////////////////////




/// will only work on DOM elements not html so use an element to click the iterable



labelBalance.addEventListener("click", function () {



	/// get the movements from the DOM and put into an array


	///? const movementsDOM = Array.from(document.querySelectorAll('.movements__value'));



	/// gives us the entire movment inc the currency sign


	// 		<div class="movements__value">4 000€</div>

	// (8) [div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value, div.movements__value]



	/// now you can call the map method as its now an array and remove the currency sign


	///? const newMovement = movementsDOM.map(el => el.textContent.replace('€', ""));


	// (8) ['1300', '70', '-130', '-650', '3000', '-400', '450', '200']






	//! THE WHOLE PROCESS CAN BE PUT INTO THE ARRAY.FROM() CONSTRUCTOR


	/// the result from the  expression for the 1st parameter, and the callback for the 2nd


	const movementsDOM = Array.from(document.querySelectorAll('.movements__value'),
		el => el.textContent.replace('€', ""));


	console.log(movementsDOM);


	// (8) ['1300', '70', '-130', '-650', '3000', '-400', '450', '200']

})































const updateUI = function (acc) {


	displayBalance(acc);

	displayMovements(acc.movements);

	displaySummary(acc);

}


const displayMovements = function (movements, sort = false) {

	document.querySelector('.movements').innerHTML = '';

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {


		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const html = `
		
		<div class="movements__row">		
		
				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>		
				<div class="movements__value">${mov}€</div>		
											
		</div>`;

		document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);

	});
};


const displayBalance = function (currAcc) {

	currAcc.balance = currAcc.movements.reduce((acc, mov) => acc + mov, 0);

	labelBalance.textContent = `${currAcc.balance}€ `;

};



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



btnClose.addEventListener('click', function (e) {

	e.preventDefault();

	if (

		inputCloseUsername.value === currentAccount.username &&
		Number(inputClosePin.value) === currentAccount.pin) {

		const index = accounts.findIndex(acc => acc.username === currentAccount.username);

		accounts.splice(index, 1);

		containerApp.style.opacity = 0;

	}

	inputCloseUsername.value = inputClosePin.value = '';


})


btnLoan.addEventListener('click', function (e) {

	e.preventDefault();

	const amount = Number(inputLoanAmount.value);

	if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {

		currentAccount.movements.push(amount);

		inputLoanAmount.value = '';

		updateUI(currentAccount);

	}


})


let sorted = false;


btnSort.addEventListener('click', function (e) {

	e.preventDefault;

	displayMovements(currentAccount.movements, !sorted)

	sorted = !sorted;

})

