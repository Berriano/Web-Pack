// -------------------------------  Dates -------------------------------- //
// ------------------------------- ------- ------------------------------- //



'use strict';



// ------------------------- Create a new Date() ------------------------- //




//-- 1.



/// using the time as of now


const now = new Date();


///? console.log(now);


// Sun Jul 17 2022 12:49:49 GMT+1000 (Australian Eastern Standard Time)


//! will give the date and time as of now




///--2.



/// passing a string into the function



const stringDate = new Date(' Jul 21 2022 12:51:26');


///? console.log(stringDate);


// Thu Jul 21 2022 12:51:26 GMT+1000 (Australian Eastern Standard Time)


//! give the exact time specified




//-- 3.



/// setting a date into the function


const xmasEve = new Date('December 24,2022');


///? console.log(xmasEve);


// Sat Dec 24 2022 00:00:00 GMT+1000 (Australian Eastern Standard Time)







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





//-- 4.



/// getting the date from an object



const secondMovement = new Date(account1.movementsDates[1]);

///? console.log(secondMovement);


// Mon Dec 23 2019 17:42:02 GMT+1000 (Australian Eastern Standard Time)





//-- 5.



/// passing in the year / month / day / hour / minute / second


//! the month is 0 based so january is 0, february is 1 etc



const myBday = new Date(1976, 1, 21, 23, 44);


///? console.log(myBday);


// Sat Feb 21 1976 23:44:00 GMT+1000 (Australian Eastern Standard Time)






//-- 6.



/// overflow of days carries over


const thirtyFeb = new Date(2022, 1, 30);

///? console.log(thirtyFeb);


// Wed Mar 02 2022 00:00:00 GMT+1000 (Australian Eastern Standard Time)





// ------------------------ -- Unix time (timestamp) --------------------------- //




/// unix time = 1/1/1970



const unix = new Date(0);

//! 0 milliseconds after unix time


///? console.log(unix);


// Thu Jan 01 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)




/// converting to milliseconds


//! days * hours * minutes * seconds * milliseconds



const twoDaysAfterUnix = new Date(2 * 24 * 60 * 60 * 1000);


//! timestamp = 2 * 24 * 60 * 60 * 1000


///? console.log(twoDaysAfterUnix);


// Sat Jan 03 1970 10:00:00 GMT+1000 (Australian Eastern Standard Time)




/// timestamp


const oneDay = 1 * 24 * 60 * 60 * 1000;


///? console.log(oneDay);


// 86400000 milliseconds after 1/1/1970 = 2/1/1970






// ------------------------- Working with dates -------------------------------- //



///  new date() creates an object in which functions can be called on


const future = new Date(2022, 11, 31, 23, 59, 59, 500);


console.log(future);


// Sat Dec 31 2022 23:59:59 GMT+1000 (Australian Eastern Standard Time)



// ----- getFullYear() ----- //



const fullYear = future.getFullYear();


console.log(fullYear);


// 2022


//!  Never use getYear(), always use getFullYear()





// ----- getMonth() ----- //



const getMonth = future.getMonth();


console.log(getMonth);


// 11 (zero-based)





// ----- getDate() ----- //




const getDate = future.getDate();


//! actually gets the day number, as getDay() gets the day number in the week(*see below)


console.log(getDate);


// 31




// ----- getday() ----- //



const getDay = future.getDay();


console.log(getDay);


// 6  - Saturday





// ----- getHours() ----- //



const getHours = future.getHours();


console.log(getHours);


// 23





// ----- getMinutes() ----- //



const getMinutes = future.getMinutes();


console.log(getMinutes);



// 59




// ----- getSeconds() ----- //



const getSeconds = future.getSeconds();


console.log(getSeconds);


// 59




// ----- getMilliSeconds() ----- //



const getMilliSecs = future.getMilliseconds();


console.log(getMilliSecs);


// 500





// --------------------- toISOString() ------------------------------ //



/// To create a string like in the accounts object for movementDates


const convertToISO = future.toISOString();


console.log(convertToISO);



// 2022-12-31T13:59:59.500Z




// --------------------- getTime() ------------------------------ //




/// get the timeStamp (milliseconds past 1/1/1970)



const futureTimeStamp = future.getTime();



console.log(futureTimeStamp);


// 1672495199500



//! can use this time stamp to get the date again



const useTimeStamp = new Date(1672495199500)


console.log(useTimeStamp);


// Sat Dec 31 2022 23:59:59 GMT+1000 (Australian Eastern Standard Time)



//! OR......



const useTimeStampVariable = new Date(futureTimeStamp);


console.log(useTimeStampVariable);


// Sat Dec 31 2022 23:59:59 GMT+1000 (Australian Eastern Standard Time)





// ---------------------- Date.now() ------------------------------ //



/// get the timestamp of now



const timeStampNow = Date.now();



console.log(timeStampNow);


// 1658100525492







// ------------  Setting the date values on the object  ------------ //





///  use set instead of get to set the values of the object



future.setFullYear(2030);


console.log(future);


// Tue Dec 31 2030 23:59:59 GMT+1000 (Australian Eastern Standard Time)


//! can be done with all the get() methods above


//! REMEMBER - CHANGING ANY VALUE COULD AFFECT OTHER VALUES LIKE
//! CHANGING THE YEAR WILL ALSO CHANGE THE DAY





// ------------   ------------ //




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