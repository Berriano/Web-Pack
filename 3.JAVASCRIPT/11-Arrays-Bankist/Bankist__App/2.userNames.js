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




const displayMovements = function(movements) {


    document.querySelector('.movements').innerHTML = "";

    movements.forEach(function(mov, i) {

        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
		
		<div class="movements__row">
		
		<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
		
								<div class="movements__value">€${mov}</div>
									
								</div>`;

        document.querySelector('.movements').insertAdjacentHTML('afterbegin', html);

    });

};


displayMovements(account1.movements);






//----- 2. Usernames ------- //



/// create a username for each account using the owner name initials


/// create a function that takes an array of accounts


const createUserName = function(accs) {


    /// on the accounts passed in, for each account


    accs.forEach(function(acc) {


        /// create a username property forEach account, which is calculated by a 
				/// callback function used on the account.owner string                   


        acc.username = acc.owner.toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');

    })


    //!  no need to return anything as foreach has already created the username,
		//!  and no value is created

}


/// So, forEach of the accounts in the array,           
/// a username is created based on the callback function


//  const accounts = [account1, account2, account3, account4];


createUserName(accounts)


console.log(accounts);