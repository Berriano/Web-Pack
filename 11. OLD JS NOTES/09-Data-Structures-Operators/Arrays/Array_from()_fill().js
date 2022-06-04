'use strict';

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////   New Array Stuff under Bank App ///////////////////////////
////////////////////////////////////////////////////////////////////////////////////////


//! BANIST STUFF NEEDED FOR ARRAY NEW FUNCTIONALITY


// ----------------------------------------- ------------------------------------------//
// ----------------------------------- BANKIST APP ----------------------------------- //
// ----------------------------------------- ----------------------------------------- //




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


// ---------------------------------- LECTURES ----------------------------------- //



const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const accounts = [account1, account2, account3, account4];




// ------------------------- Implementing sort function ----------------------- //
// ----------------------- into displayMovements function --------------------- //


const displayMovements = function(movement, sort = false){

	containerMovements.innerHTML = '';

	const movs = sort ? movements.slice().sort((a, b) =>  a -b ) : movements;

		movs.forEach(function(mov,i){

		const type = mov > 0 ? 'deposit' : 'withdrawal';


			const html = ` 

			<div class="movements__row">

				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

				<div class="movements__value">$ ${mov}</div>

			</div>`


			containerMovements.insertAdjacentHTML("afterbegin", html);
				
	}
 );
}


	
// ----------- Calculate and print Balance to UI using reduce() method ----------- //


const calcPrintBalance = function(currAcc){

	currAcc.balance = currAcc.movements.reduce( (acc,mov) => acc + mov ,0);
	
	labelBalance.textContent = `$ ${currAcc.balance}` ;
	
	}
	


// ----- Display Summary - Deposits / Withdrawals / Interest totals in UI ----- //


const calcDisplaySummary = function(currAcc){


	const incomes = currAcc.movements.filter(mov => mov > 0)

											 .reduce((acc,curr) => acc + curr, 0);

labelSumIn.textContent = `$ ${incomes}`;



const outgoings = currAcc.movements.filter(mov => mov < 0)


											 .reduce((acc,curr) => acc + curr, 0);


labelSumOut.textContent = `$ ${outgoings}`;



const interest = currAcc.movements.filter(mov  => mov > 0  )


											.map( dep => (dep * currAcc.interestRate)/100)

											.filter(dep => dep >=1 )

											.reduce((acc,curr) => acc + curr, 0)


labelSumInterest.textContent = `$ ${Math.round(interest)}`;

}



// ------------------------------- Create User Names ----------------------------- //



const createUserName =  function(accountsArray){

accountsArray.forEach( (acc) => acc.username = 

											acc.owner.toLowerCase()	
				
												.split(" ")
												.map( uName => uName[0] )
												.join('')
		)
	
}
 
createUserName(accounts)


// --------------------------------- Implement Login ------------------------------ //


let currentAccount;



btnLogin.addEventListener('click',function(e){

					e.preventDefault();

	currentAccount = accounts.find(

										acc => acc.username === inputLoginUsername.value
		)


// ----------------------- Display UI and welcome message ---------------------- //

if(currentAccount?.pin === Number(inputLoginPin.value)){


									labelWelcome.textContent = 


									`Welcome back ${currentAccount.owner.split(' ')[0]}`;

containerApp.style.opacity = 100;




inputLoginUsername.value = inputLoginPin.value = '';

inputLoginPin.blur();


displayMovements(currentAccount.movements);

calcPrintBalance(currentAccount)

calcDisplaySummary(currentAccount)


	}
 }
)
const updateUI = function (acc){

displayMovements(acc.movements);

calcPrintBalance(acc);

calcDisplaySummary(acc)

}





///////////////////////////////////////////// ////////////////////////////////////
/////////////////////////////////////////////// //////////////////////////////////







// ------------------------------ Array Fill() ---------------------------- //




//! fill

const x = new Array(7);

//! creates empty array with 7 spaces

///? [empty × 7]


//! first parameter is ehat to fill with
//! second parameter is index start
//! third parameter is index finish


x.fill(1,3,5);


// console.log(x);

	
///? [empty × 3, 1, 1, empty × 2]







// ----------------------------------- Array from() --------------------------- //



//! create an a array using the from() function (not method)


//! first argument is the Arraylike, iterable, or object to convert to array
//! second argument is a callback function which works like map(element,index,array)
//! and iterates like map()

//! ( just return 1 for this)



const y = Array.from({length:7}, () => 1 );


// console.log(y);


///?  [ 1, 1, 1, 1, 1, 1, 1 ]



//! callabck function to add 1 each iteration


const z = Array.from({length:7},  ( _ , i )  =>  i +  1 );


// console.log(z);



//! log each iteration + 1


// const i = Array.from({length: 10}, ( _ , i) => { 
	
// 												let it = i + 1 ;
												
// 												console.log(it);
//  }
// );





/// using array methods on a nodelist



//! convert nodelist to array using Array.from() to be able to use array methods



//! use querySelectorAll and class name to get all DOM elements for that class


// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));


// console.log(movementsUI);




//! to apply code, it need attaching to event Handler (balance-label)




labelBalance.addEventListener('click',function(){


	// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));



//! DOM elements now an array, so can call methods on it


	// const removeDollar = movementsUI.map(el => Number(el.textContent
	// 																.replace('$', "")
	// 																.trim()));

	// console.log(removeDollar);



	
//! instead of doing this, we can use the callback parameter of Array.from

//! Array.from(nodelist to convert, mapFunction



const movementsUI = Array.from(document.querySelectorAll('.movements__value'),

			(	el => Number(el.textContent.replace('$', ""))
			)
		);

		console.log(movementsUI);
		
})

///? [1300, 70, -130, -650, 3000, -400, 450, 200]

