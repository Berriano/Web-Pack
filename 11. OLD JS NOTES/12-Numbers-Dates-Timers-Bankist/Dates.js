'use strict';




// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

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
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
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
// ----------------------------------- Numbers ------------------------------- //
// -------------------------------      Dates        ------------------------- //






/// Create a date (5 ways)



/// 1. just new Date()


const now = new Date();


// console.log(now);



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



const day = `${today.getDate()}`.padStart(2,0);



const month = `${today.getMonth()+1}`.padStart(2,0);



const year = today.getFullYear();



const hours = `${today.getHours()}`.padStart(2,0);



const minutes = `${today.getMinutes()}`.padStart(2,0);



// labelDate.textContent =`${day}/${month}/${year}  ${hours}:${minutes}`



