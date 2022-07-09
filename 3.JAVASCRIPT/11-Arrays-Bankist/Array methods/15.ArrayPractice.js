
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




// ------------------------------- Array Practice ----------------------------- //




// -- Add up all deposit in the bank -- //



/// use flatmap,filter and reduce methods to get all movemnets from each acount and add them



const allDeposits = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0);


// 25180

console.log(allDeposits);





// --  count deposits over or equal to 1000 -- //


/// easier way


const overOneThousand = accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000).length;


console.log(overOneThousand);




/// reduce way




const overOneReduce = accounts.flatMap(acc => acc.movements).reduce((count, curr) => curr >= 1000 ? count + 1 : count, 0);


console.log(overOneReduce);


//! make sure initial value is set to zero on reduce way






// -- using increment / decrement -- //



/// position ++ before or after variable


//! use before(prefix) variable to add to it immediately


const overOneReduceIncrement = accounts.flatMap(acc => acc.movements).reduce((count, curr) => curr >= 1000 ? ++count : count, 0);



console.log(overOneReduceIncrement);








// ---- create an object using reduce for deposits and withdrawals ---- //




const sums = accounts.flatMap(acc => acc.movements).reduce(


	(sum, curr) => {

		/// set a ternary operator for either objects

		curr > 0 ? sum.deposits += curr : sum.withdrawals += curr;

		/// return the accumalator

		return sum;

	}, { deposits: 0, withdrawals: 0 }



);


console.log(sums);


// {deposits: 25180, withdrawals: -7340}



/// destructure object immediatly using exactly the same properties



const { withdrawals, deposits } = accounts.flatMap(acc => acc.movements).reduce(


	(sum, curr) => {


		/// set a ternary operator for either objects


		// curr > 0 ? sum.deposits += curr : sum.withdrawals += curr;



		//! can be done using bracket notation expression to set property value


		sum[curr > 0 ? 'deposits' : 'withdrawals'] += curr;



		/// return the accumalator

		return sum;

	}, { deposits: 0, withdrawals: 0 }



);


console.log(deposits, withdrawals);


// 25180  -7340






// ----- create exceptions to capitalization of strings ------ //


/// refactor code as reusable function


const capitalize = str => str[0].toUpperCase() + str.slice(1)



/// a function which converts the first letter of a word to capital, except for some words




const convertTitleCase = function (str) {


	const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with', 'is'];


	/// convert to lowrcase 


	const titleCase = str.toLowerCase()


		/// then make string into an array, separated by the space


		.split(" ")


		/// the use map method for each word in the array, and use callback function
		/// and check if word is included in exceptions


		.map(word => exceptions.includes(word) ? word : capitalize(word))


		/// the join back together as a string


		.join(' ');


	console.log(titleCase);

	return capitalize(titleCase);


	//! so returns the whole string with the first letter




}


console.log(

	capitalize('hello, my name is mark')
);


console.log(
	convertTitleCase('is my name is Mark?')
);






const capitalizeDeclaration = str =>

	str[0].toUpperCase() + str.slice(1);






console.log(

	capitalizeDeclaration('hello , evryone my name is...')
);





////////////////////////////////////////////////////////////////////////////////////////////



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

