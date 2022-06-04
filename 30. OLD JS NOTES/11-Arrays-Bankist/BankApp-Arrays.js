'use strict';





// ----------------------------------------- ------------------------------------------//
// ----------------------------------- BANKIST APP ----------------------------------- //
// ----------------------------------------- ----------------------------------------- //




// Data
const account1 = {

  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-12-13T23:36:17.929Z',
    '2021-12-17T10:51:36.790Z',
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


const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,

	movementsDates: [
    '2019-10-01T13:15:33.035Z',
    '2019-10-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-12-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,

	movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-11-25T14:18:46.235Z',
    '2020-12-05T16:33:06.386Z',
    '2020-04-15T14:43:26.374Z',
    '2020-12-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
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


//! parameter currAcc = currentAccount = acc.find(condition) from accounts


// ------------------------------------- CODE ------------------------------------ //


//!  ALWAYS PASS THE DATA A FUNCTION NEEDS INTO ITS PARAMETERS, 
///! RATHER THAN GLOBAL VARIBALES

//! 


// ---------------------- Display movements using forEach()  ---------------------- //


//! has been copied and modified below to add sort function, \
//! but original code has been kept and commented out for reference


/*

const displayMovements = function(movement){



		/// clear the starter hard-coded html data


		//! use the innerHTML command on the movements class,
		//! to set the data to empty string

		// const containerMovements = document.querySelector('.movements');


		 containerMovements.innerHTML = '';



		/// Start the forEach loop on the argument set in function call


		// displayMovements(account1.movements) -

		// movements: [200, 450, -400, 3000, -650, -130, 70, 1300]


		
		movement.forEach(function(mov,i){



		/// Set Deposit or Withdrawal type, to display in movements



		const type = mov > 0 ? 'deposit' : 'withdrawal';

	

		/// create a new html to replace the existing hard-coded data



		//! replace 2 deposits with index number fo movement
		//! and replace hard-coded 'deposit' with the 'type' variable

		//! <div class="movements__type movements__type--'deposit'">'2 deposit'</div>



		///?<div class="movements__type movements__type--${type} "> ${i + 1} ${type}</div>



	  //! mov is each of current element [200, 450, -400, 3000, -650, -130, 70, 1300]

		///? <div class="movements__value">€${mov}</div>



		/// create literal template to add to existing html <div>



		const html = ` 

			<div class="movements__row">

				<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

				<div class="movements__value">$ ${mov}</div>

			</div>`




		/// Now add the 'html' template to the web page using insertAdjacentHTML()



		//! use the querySelected element

		// const containerMovements = document.querySelector('.movements');

		//! add the new 'html' element after the <div class="movements"> starts
		//!  with ('afterbegin' , html ) - ( position, variable )
	

					containerMovements.insertAdjacentHTML("afterbegin", html);
					
		}
	 );
	}
	

	//! ------------------ Using the const html =`${variable}` ------------------ //



	///?	 It's removing the whole Html content first in this line
	///?	 containerMovements.innerHTML = '';

	///?	 and then adding new Html code in this line
	///?	 containerMovements.insertAdjacentHTML('afterbegin', html);

	///?	 So, it's adding new lines after movement class begins



	//! select all the html content


	// console.log(containerMovements.innerHTML);


	//! --------------------------------- ---------------------------------------- //

*/


// ------------------------- Implementing sort function ----------------------- //
// ----------------------- into displayMovements function --------------------- //



//! add sort parameter to displayMovements function and set to false, so they 
//! are ordered as they appear in the array



const displayMovements = function(movement, sort = false){

	containerMovements.innerHTML = '';


	/// sort movements


//! create a variable for movements, and how to sort them
//! make a copy of the original movements, using the slice() method, then set..
//! if true =  use the condition movements.slice().sort((a, b) =>  a -b )
//! else use the original movements.


	const movs = sort ? movements.slice().sort((a, b) =>  a -b ) : movements;


//! now use the movs variable of movements for the forEach loop and not the original...
	

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





/// Print overall balance in UI




//! create a function to total movement and show on UI



const calcPrintBalance = function(currAcc){


	//! create a property on the accounts for the account balance, to use as a prpperty
	//! i.e currAcc.balance:3140 and then ....

	//! use reduce method to total all movements from current account



	currAcc.balance = currAcc.movements.reduce( (acc,mov) => acc + mov ,0);



	//! Use the 'currAcc.balance' value on the UI with the labelBalace QuerySeletor

	
	labelBalance.textContent = `$ ${currAcc.balance}` ;


	
	}
	



// ----- Display Summary - Deposits / Withdrawals / Interest totals in UI ----- //




//! create a function and pass in the currentAccount to be able to use 
//! multiple properties from the object


const calcDisplaySummary = function(currAcc){



/// Deposits


//! filter out movements below 0


	const incomes = currAcc.movements.filter(mov => mov > 0)


//! total movements above 0 together


											 .reduce((acc,curr) => acc + curr, 0);



//! use labelSumIn to show balance in UI


// const labelSumIn = document.querySelector('.summary__value--in');


labelSumIn.textContent = `$ ${incomes}`;



/// Withdrawals



//! filter out movements above 0


const outgoings = currAcc.movements.filter(mov => mov < 0)


//! total movements below 0 together


											 .reduce((acc,curr) => acc + curr, 0);


//! use labelSumOut to show balance in UI

// const labelSumOut = document.querySelector('.summary__value--out');



labelSumOut.textContent = `$ ${outgoings}`;




/// Interest



//! filter out all movements above 0


const interest = currAcc.movements.filter(mov  => mov > 0  )


//! apply map method for calculating interest for currentAccount


											.map( dep => (dep * currAcc.interestRate)/100)


//! filter out interests that are less than $1


											.filter(dep => dep >=1 )


//! reduce() to total final interest 			


											.reduce((acc,curr) => acc + curr, 0)



//! use labelSumInteres to show balance in UI


// const labelSumInterest = document.querySelector('.summary__value--interest');


labelSumInterest.textContent = `$ ${Math.round(interest)}`;

}




/// Call the calcDisplaySummary functionin the Display UI function



// calcDisplaySummary(account1.movements);



// ------------------------------- Create User Names ----------------------------- //



//! accounts array is the parameter for any array

const createUserName =  function(accountsArray){

	//! forEach account in the array add a username property based on...

accountsArray.forEach( (acc) => acc.username = 

						//! converting account.owner to lowercase	

							acc.owner.toLowerCase()	
						
						//! splitting by space

												.split(" ")
						
						//! using a map function to take first letter of each splitted element

												.map( uName => uName[0] )

						//! join as a string with no gaps

												.join('')
		)
	
}


//! call function to actually add the usernames property

createUserName(accounts)

// console.log(accounts);





// --------------------------------- Implement Login ------------------------------ //



///? querySelectors


// const btnLogin = document.querySelector('.login__btn');

// const inputLoginUsername = document.querySelector('.login__input--user');

// const inputLoginPin = document.querySelector('.login__input--pin');



//! define a value for the account to login to:


let currentAccount;


/// LOGIN FUNCTION ATTACHED TO LOGIN BTN


btnLogin.addEventListener('click',function(e){


//! When a form button is clicked, the page re-loads

//! to disable this, use (e) - event parameter with e.preventDefault();

//! prevent form from submitting



					e.preventDefault();



	//! assign to the variable the find(condition) based on the login input matching 
	//! the username e.g acc.username:'js' === inputLoginUsername.value'js'



	currentAccount = accounts.find(

										acc => acc.username === inputLoginUsername.value
		)




/// match the currentAccount PIN with the input PIN


	// const inputLoginPin = document.querySelector('.login__input--pin');


///?  	if(currentAccount.pin === Number(inputLoginPin.value)){
///? 	}


	///? this section so far covers matching username and pin



	//! if the username doesnt match, the pin wont be read, an error will be returned
	//! to stop the error, use optional chaining(?.) 
	//! no error returned



	///?  if(currentAccount?.pin === Number(inputLoginPin.value)){}




// ----------------------- Display UI and welcome message ---------------------- //




if(currentAccount?.pin === Number(inputLoginPin.value)){



/// Welcome message



// const labelWelcome = document.querySelector('.welcome');


//! to display welcome message, get the label and add textContent


									labelWelcome.textContent = 



//! add the message using template literal and add the current owners name,

//! then split the name by space - ['Jonas', 'Schmedtmann'],

//! then take the first name [0] (zero index)


									`Welcome back ${currentAccount.owner.split(' ')[0]}`;




/// Displaying UI



// const containerApp = document.querySelector('.app');


//! set the css of the .app class to 100( as its already 0)



containerApp.style.opacity = 100;



/// Clear username and pin input fields after signing in 


//! username = loginPin, which = empty string, so PIN = empty string and 
//! username = PIN (which is now an empty string)


inputLoginUsername.value = inputLoginPin.value = '';

//! Remove blinking cursor using blur() method


inputLoginPin.blur();




//// This whole block of 3 functions can be made DRY as it gets re-used ////



/// Display Movements


//! use function created earlier


displayMovements(currentAccount.movements);



/// Display Balance


//! use function created earlier and pass in current account property


calcPrintBalance(currentAccount)



/// Display Summary


//! use function created earlier and pass in the whole current account
//! as the function uses .movements and .interestRate from the object


calcDisplaySummary(currentAccount)


/* end of if block */	}
/* end of eventListener function*/
})


/////////////////////////////////////////// //////////////////////////////////////


/// UPDATE UI  



//! Update UI (DRY function) with new parameters and arguments
//! e.g acc can = account


const updateUI = function (acc){


displayMovements(acc.movements);

calcPrintBalance(acc);

calcDisplaySummary(acc)

}


///? use function in transfer money event listener



///////////////////////////////////////////// ////////////////////////////////////




// --------------------------- Transfer money ---------------------------- //


//! Event handlers

// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const btnTransfer = document.querySelector('.form__btn--transfer');


btnTransfer.addEventListener('click', function(e){

	//! to prevent form submission


			e.preventDefault();


//! set a variable for the amount as a value ( must always convert to Number() )


	const amount  = Number(inputTransferAmount.value);



//! use find() for the username entered, to find the account then,
//! store the value of the account to transfer to, in a variable


	const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);



//! clear transfer fields when btn clicked



	inputTransferTo.value = inputTransferTo.value = "";



///  Check if transfer is possible



		//! enough funds in account and amount is higher than 0

				if( amount > 0 && currentAccount.balance >= amount

		//! that the receiver account exist(?.) and isnt the current account

											 && receiverAcc?.username !== currentAccount.username
					)
					{
						
								receiverAcc.movements.push(amount);
								currentAccount.movements.push(-amount);


								//! update UI

									updateUI(currentAccount)

					}
				}
		)

		//! push the movements to, and from the correct accounts





// ---------------------------- Close Account ------------------------------ //



// const btnClose = document.querySelector('.form__btn--close');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');




btnClose.addEventListener('click', function(e){

	e.preventDefault();

		if(inputCloseUsername.value === currentAccount.username &&
			
			+inputClosePin.value === currentAccount.pin

			)
			{

			const index = accounts.findIndex(acc => acc.username === currentAccount.username);

			accounts.splice(index,1);

			

			//! reset screen to login


			containerApp.style.opacity = 0;

			
			inputCloseUsername.value = inputCloseUsername.value = "";


			inputClosePin.blur();
			inputCloseUsername.blur();


			labelWelcome.textContent = "Log in to get started";

			}
})



// ------------------------------- Loan function --------------------------------- //

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();


	/// math.floor to round loan amount down

	
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});



// -----------------------------   Sort function ------------------------------ // 



// const btnSort = document.querySelector('.btn--sort');


//! sort function only works to sort if true, no false set


//! set variable to false, as array starts as unsorted


let sorted = false;


btnSort.addEventListener('click', function(e){

e.preventDefault();

//! when its clicked the function call will change the sort parameter from
//! sorted(fasle), to not sorted( which will be true (which = sort movements))
//! and if sorted true it will change it back to false
//! (i.e the opposite of what sorted currently is)

displayMovements(currentAccount.movements, !sorted)


//! change variable from what it is, to the opposite of what it is
//!(from true to false, or from false to true)

sorted = !sorted;




})





// ------------------- Calculate all movemnets of all accounts -------------------- //



///  Combine all the movements of all accounts to one variable 



//! get all the movements into one array


const allAccounts = accounts.map(mov => mov.movements);


console.log(allAccounts);


///? an array of all the movement arrays



//! condense all movement array into one array removeing 1 layer


const allMoves = allAccounts.flat();


console.log(allMoves);


///? combines all movements into 1 array in 1 level


//! add all movements together



const totalMoves = allMoves.reduce((acc,curr) => acc + curr,0);


console.log(totalMoves);


///? 17840



/// Chaining together



		const chained = accounts.map(acc => acc.movements)
														.flat()
														.reduce((acc,curr) => acc + curr,0);


console.log(chained);




/// ---- flatMap() ---- //



const flatMapChained = accounts.flatMap(acc => acc.movements)
																.reduce((acc,curr) => acc + curr,0);


console.log(flatMapChained);
