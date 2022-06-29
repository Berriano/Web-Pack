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




//--  display movements --//




const displayMovements = function(movements) {

    document.querySelector('.movements').innerHTML = "";

    movements.forEach(function(mov, i) {

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




const displayBalance = function(movs) {

    const balance = movs.reduce((acc, mov) => acc + mov, 0);

    labelBalance.textContent = '€' + balance;

}






//-  display summary --//




const displaySummary = function(currAcc) {


    const incomes = currAcc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumIn.textContent = ` ${incomes}€`;



    const out = currAcc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);

    labelSumOut.textContent = ` ${Math.abs(out)}€`;



		/// Can now set the interest rate to currentAccount

    const interest = currAcc.movements

        .filter(mov => mov > 0)
        .map(deposit => (deposit * currAcc.interestRate) / 100)
        .filter((int) => int >= 1)
        .reduce((acc, int) => acc + int, 0);

    labelSumInterest.textContent = `${interest}€`


}





//-- create username --//




const createUserName = function(accs) {

    accs.forEach(function(acc) {

        acc.username = acc.owner.toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');

    })

};


createUserName(accounts);






// ---------------------------- 5. Create login ---------------------------- //




/// For a login to work, you need a global variable,                           
/// to hold all the account data outside of any function to be re-used anywhere

//! Now that a currentAccount has been created, it can be used to calculate the 
//! interest rate for each account in the displaySummary



let currentAccount;



/// the event handler for the login


/// form element buttons default behavior is to reload the page when clicked


/// Use the event parameter to stop the default behavior of an event - 
/// Prevent default on the (e) argument                                


btnLogin.addEventListener('click', function(e) {

    e.preventDefault();



    /// now find the account owner from the accounts array, 
    /// using the inputLoginUsername.value,                 
    /// and store in the currentAccount variable            



    currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);



    /// to login, check the pin matches the currentAccount pin


    //! Use optional chaining so no errors appear if account doesnt exist


    if (currentAccount?.pin === Number(inputLoginPin.value)) {





//-- Display the UI and message, movements, summary and balance of the current account --//



			// -- Show UI message -- //


				
        /// split the owner name into an array, then take the array element at index[0]

        //! This should always give ou the first name

				/// add name to the welcome message



        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`



			 	/// reveal UI on correct login by setting css .app opacity to 100



				containerApp.style.opacity = 100;



				/// clear input fields when logged in by setting both fields to an empty string



				inputLoginUsername.value = inputLoginPin.value = "";

				//! this makes loginUsername the same as loginPin (which is an empty string)


				/// blur pin field cursor using DOM method - (see DOM events on chrome bookmarks)


				inputLoginPin.blur();




				// -- Display movements, summary and balance  -- //



				/// call all the display methods and pass in the movements, 
				/// as this is what they use to calculate what to display   



				displayBalance(currentAccount.movements);

				displayMovements(currentAccount.movements);



				/// now pass in the whole account as we want more than just the movements


				displaySummary(currentAccount);

				console.log(currentAccount);



    }

})