//////------------------------    Numbers    ---------------------- //////
//////------------------------   Section   ------------------------ //////

'use strict';

// Data

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300, 1500, 1000],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		'2019-11-18T21:31:17.178Z',
		'2019-12-23T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2022-07-13T14:11:59.604Z',
		'2022-07-14T14:11:59.604Z',
		'2022-07-15T14:11:59.604Z',
		'2022-07-17T17:01:17.194Z',
		'2022-07-18T23:36:17.929Z',
		'2022-07-19T10:51:36.790Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////

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




function updateUI(acc) {


	displayBalance(acc);

	displayMovements(acc);

	displaySummary(acc);

}





const calcDaysPassed = function (date1, date2) {

	let sum = Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

	return sum;

};





const formatMovementDate = function (date, locale) {


	const daysPassed = calcDaysPassed(new Date(), date)



	if (daysPassed === 0) {
		return `Today`;
	}

	if (daysPassed === 1) {
		return `Yesterday`;
	}

	if (daysPassed <= 7) {

		return `${daysPassed} days ago`
	}

	else {

		return new Intl.DateTimeFormat(locale).format(date);

	}


}



const formatCurrrency = function (value, locale, currency) {

	return new Intl.NumberFormat(locale, {

		style: 'currency',

		currency: currency,
	}
	).format(value);


}






const displayMovements = function (acc, sort = false) {

	document.querySelector('.movements').innerHTML = '';

	const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

	movs.forEach(function (mov, i) {


		const type = mov > 0 ? 'deposit' : 'withdrawal';

		const date = new Date(acc.movementsDates[i]);

		const displayDate = formatMovementDate(date, acc.locale);

		const formattedMov = formatCurrrency(mov, acc.locale, acc.currency);


		const html = `
		
		<div class="movements__row">				
				
			<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>	
							
			<div class="movements__date">${displayDate}</div>
											
			<div class="movements__value">${formattedMov}</div>		
														
		</div>`;


		document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);


	});
};




const displayBalance = function (currAcc) {

	currAcc.balance = currAcc.movements.reduce((acc, mov) => acc + mov, 0);

	labelBalance.textContent = formatCurrrency(currAcc.balance, currAcc.locale, currAcc.currency)


};





const displaySummary = function (currAcc) {


	const incomes = currAcc.movements
		.filter(mov => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);


	labelSumIn.textContent = formatCurrrency(incomes, currAcc.locale, currAcc.currency);



	const out = currAcc.movements
		.filter(mov => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);


	labelSumOut.textContent = formatCurrrency(out, currAcc.locale, currAcc.currency);


	const interest = currAcc.movements

		.filter(mov => mov > 0)
		.map(deposit => (deposit * currAcc.interestRate) / 100)
		.filter(int => int >= 1)
		.reduce((acc, int) => acc + int, 0);


	labelSumInterest.textContent = formatCurrrency(interest, currAcc.locale, currAcc.currency);

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



let currentAccount, timer;



const startLogoutTimer = function () {


	const tick = function () {


		const min = String(Math.floor(time / 60)).padStart(2, 0);
		const sec = String(Math.floor(time % 60)).padStart(2, 0);


		labelTimer.textContent = `${min}:${sec}`;


		if (time === 0) {

			clearInterval(timer);

			labelWelcome.textContent = 'Log in to get started';

			containerApp.style.opacity = 0;

		}


		time--;


	}



	let time = 300;

	tick();

	const timer = setInterval(tick, 1000);

	return timer;


}





btnLogin.addEventListener('click', function (e) {

	e.preventDefault();




	currentAccount = accounts.find(

		acc => acc.username === inputLoginUsername.value

	);

	if (currentAccount?.pin === Number(inputLoginPin.value)) {

		labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]

			}`;



		containerApp.style.opacity = 100;



		const now = new Date();


		const options = {

			hour: 'numeric',
			minute: 'numeric',
			day: 'numeric',
			month: 'numeric',
			year: 'numeric'

		}


		labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);


		inputLoginUsername.value = inputLoginPin.value = '';

		inputLoginPin.blur();


		if (timer) {

			clearInterval(timer);
		}


		timer = startLogoutTimer();


		updateUI(currentAccount);


	}
});




btnTransfer.addEventListener('click', function (e) {


	e.preventDefault();


	const amount = +inputTransferAmount.value;

	const recieverAccount = accounts.find(

		acc => acc.username === inputTransferTo.value

	);


	if (

		amount > 0 &&

		recieverAccount &&

		currentAccount.balance >= amount &&

		recieverAccount?.username !== currentAccount.username) {



		currentAccount.movements.push(-amount);

		recieverAccount.movements.push(amount);

		inputTransferAmount.value = inputTransferTo.value = '';

		currentAccount.movementsDates.push(new Date());

		recieverAccount.movementsDates.push(new Date());


		updateUI(currentAccount)


		clearInterval(timer);


		timer = startLogoutTimer();



	}

});




btnClose.addEventListener('click', function (e) {

	e.preventDefault();


	if (

		inputCloseUsername.value === currentAccount.username &&
		+inputClosePin.value === currentAccount.pin) {


		const index = accounts.findIndex(acc => acc.username === currentAccount.username);

		accounts.splice(index, 1);

		containerApp.style.opacity = 0;

	}

	inputCloseUsername.value = inputClosePin.value = '';


})





btnLoan.addEventListener('click', function (e) {

	e.preventDefault();


	const amount = Math.floor(inputLoanAmount.value);


	if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {



		setTimeout(function () {

			currentAccount.movements.push(amount);

			inputLoanAmount.value = '';

			currentAccount.movementsDates.push(new Date());


			clearInterval(timer);

			timer = startLogoutTimer();

			updateUI(currentAccount);

		}, 3000
		)

	}

})



let sorted = false;


btnSort.addEventListener('click', function (e) {

	e.preventDefault;


	displayMovements(currentAccount, !sorted)

	sorted = !sorted;


});



