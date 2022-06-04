'use strict';




// --------------------------------- BANKIST APP ----------------------------------- //


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

/////////////////////////////////////////////////

// Functions



// ----------------------- Movement Date function -------------------------------- //


//! Create a function for all date code


const formatMovementDate = function(date){


const calcDaysPassedjonas = (date1, date2) => 

															Math.round(Math.abs((date2-date1)/(1000*60*60*24)));

//! assign calcDaysPassed function with argument TODAYS DATE and MOVEMENT DATE


// const date = new Date(acc.movementsDates[i])

// const displayDate = formatMovementDate(date)


const daysPassed = calcDaysPassedjonas(new Date(), date)

console.log(daysPassed);

if(daysPassed === 0) return 'Today';
if(daysPassed === 1) return 'Yesterday';

// if(daysPassed === 3) return '3 days ago';

if(daysPassed <= 7) return `${daysPassed} days ago`;


const moVday = `${date.getDate()}`.padStart(2,0);


const moVmonth = `${date.getMonth()+1}`.padStart(2,0);


const moVyear = date.getFullYear();

return `${moVday}/${moVmonth}/${moVyear}`;



}





const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {


    const type = mov > 0 ? 'deposit' : 'withdrawal';




//! code added to function above


/// Adding movements.date to the html string using the existing forEach loop


//! still needed in foreach loop


const date = new Date(acc.movementsDates[i])

const displayDate = formatMovementDate(date)


// const moVday = `${date.getDate()}`.padStart(2,0);



// const moVmonth = `${date.getMonth()+1}`.padStart(2,0);



// const moVyear = date.getFullYear();


// const calcDaysPassedjonas = (date1, date2) => Math.abs((date2-date1)/(1000*60*60*24));


///////////////////////////////////////////////////////////////////////////////






	const html = `

		<div class="movements__row">


			<div class="movements__type movements__type--${type}">${i + 1} ${type}</div>

			<div class="movements__date">${displayDate}</div>

			<div class="movements__value">${mov.toFixed(2)}€</div>
		

		</div>

    `;





    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};








const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////////////////////////////////////////////////////


let currentAccount;



// ----------------------------- API Internationlization --------------------------- //



//! internationalization API (new Intl.datetimeFormat()) 
//! can use this instaed of ' Adding correct date and time ' section below


const now = new Date();


labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);





// --------------------------------------------- -------------------------------------
// Event handlers


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

		

// ------------------------- Adding correct date and time --------------------------- //



	// const now = new Date();

	// const day = `${now.getDate()}`.padStart(2,0);

	// const month = `${now.getMonth()}`.padStart(2,0);

	// const year = now.getFullYear();
	
	
	// const hour = now.getHours();

	// const min = now.getMinutes();


	// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;



// ------------------------------------------ ---------------------------------------- //




    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);







// ----------------------- Adding the date to the transfer ---------------------------- //




currentAccount.movementsDates.push(new Date());
receiverAcc.movementsDates.push(new Date());




// ----------------------------------------------- ------------------------------------- //




    // Update UI
    updateUI(currentAccount);
  }
});




btnLoan.addEventListener('click', function (e) {
  e.preventDefault();


	/// math.floor to round loan amount down


  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);





// ----------------------- Adding the date to the loan ---------------------------- //




currentAccount.movementsDates.push(new Date());





// ----------------------------------------------- ------------------------------------- //

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});





btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES





// ----------------------------------- Numbers ------------------------------- //
// -------------------------------      Dates        ------------------------- //






/// Create a date (5 ways)



/// 1. just new Date()


const rightnow = new Date();


// console.log(rightnow);



///? Wed Dec 15 2021 08:25:34 GMT+1000 (Australian Eastern Standard Time)




/// 2. Use a string


const date = new Date('Dec 15 2021 08:25:55');


// console.log(date);


///? Wed Dec 15 2021 08:25:55 GMT+1000 (Australian Eastern Standard Time)




/// 3. write a string


const xmasDay = new Date('december 25,2021');

// console.log(xmasDay);


//! using written strings can be unreliable (unless written by JS)




/// 4. Using an array/object


// account1.movementsDates: ['2019-11-18T21:31:17.178Z']

//! Z = GMT;


const fromAccount = new Date(account1.movementsDates[0]);


// console.log(fromAccount);


///? Tue Nov 19 2019 07:31:17 GMT+1000 (Australian Eastern Standard Time)



/// 5. Using numbers 



const sophieDate = new Date(2022,2,18,14,25,30);



// console.log(sophieDate);



///? Fri Mar 18 2022 14:25:30 GMT+1000 (Australian Eastern Standard Time)



//! Js will autocorrect to next day if ,for example 31/11




///  UNIX TIME


//! uses milliseconds


const unixTime = new Date(0);


// console.log(unixTime);



///? Thu Jan 01 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)



//! create a date 3 days after start of unix time
//! (num of days, hrs, mins , seconds, milliseconds)


const threedays = new Date(3 * 24 * 60 * 60 *1000 );


// console.log(threedays);





/// TimeStamp



//! timestamp of day number 3 after unix time


// console.log(3 * 24 * 60 * 60 *1000);



///? 259200000





/// Methods to work with dates



const future = new Date(2037 , 11 , 25 , 23 , 15);


// console.log(future);




/// getFullYear()



// console.log(future.getFullYear());



///? 2037




/// getMonth()

//! zeroBased(11 is 12)


// console.log(future.getMonth());



///? 11 (december)




/// getDate() 


//! is for the day




// console.log(future.getDate());



///? 25



/// getDay()



//! is for the day of the week (zeroBased = 0 is sunday)



// console.log(future.getDay());



///? 5  (friday)




/// getHours()



// console.log(future.getHours());



///? 23



/// getMinutes()




// console.log(future.getMinutes());



///?  15




/// getSeconds()



// console.log(future.getSeconds());



///? 0



/// get a string from variable



// console.log(future.toISOString());



///? 2037-12-25T13:15:00.000Z




/// GET THE TIMESTAMP (Milliseconds passed since 1970)





// console.log(future.getTime());



///? 2145359700000




/// Create a date based on milliseconds (TIMESTAMP)




const milliDate = new Date(2145359700000);



// console.log(milliDate);



///? Fri Dec 25 2037 23:15:00 GMT+1000 (Australian Eastern Standard Time)





/// Current Timestamp



const dateNow = Date.now();



// console.log(dateNow);
// 


///? 1639523424850



// console.log(new Date(1639523424850));



///?  Wed Dec 15 2021 09:10:24 GMT+1000 (Australian Eastern Standard Time)





/// Set() dates 


//! Can you same  methods as future.get....();


// console.log(future.setFullYear(2021));


// console.log(future);


///?  Sat Dec 25 2021 23:15:00 GMT+1000 (Australian Eastern Standard Time)




//! set a new month


const setNewMonth = future.setMonth(6);


// console.log(future);



// -------------------------- Adding current time / date --------------------------- //





const today = new Date();


// labelDate.textContent = now;


//!  day / month / year



/// PadStart() so 0 is shown instead of empty space (24hr clock)



// const day = `${today.getDate()}`.padStart(2,0);



// const month = `${today.getMonth()+1}`.padStart(2,0);



// const year = today.getFullYear();



// const hours = `${today.getHours()}`.padStart(2,0);



// const minutes = `${today.getMinutes()}`.padStart(2,0);



// labelDate.textContent =`${day}/${month}/${year}  ${hours}:${minutes}`




// --------------------- Adding the date to the transfer / loan ---------------------- //



//! just this or loan

// currentAccount.movementsDates.push(new Date());


//! plus this for transfer


// receiverAcc.movementsDates.push(new Date());




// ----------------------------------------------- ------------------------------------- //