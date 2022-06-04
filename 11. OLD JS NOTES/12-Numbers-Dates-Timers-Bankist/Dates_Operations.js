'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// -----------------------------  Numbers / Dates --------------------------------- //

// ---------------------- Performing Operations with Dates ------------------------ //




/// Using Timestamps (milliseconds)



const future = new Date(2037, 10, 19 ,15, 23);



//! convert date to a number



const futureNum = Number(future)


console.log(futureNum);


///? 2142220980000




//! Or..


console.log(+futureNum);


///? 2142220980000




/// function for number of days between 2 dates



//! use Math.abs() as it will return a positive number even when negative(-10 = 10)


const calcDaysPassed = (date1, date2) => Math.abs((date2-date1)/1000/60/60/24);


const calcDaysPassedjonas = (date1, date2) => Math.abs((date2-date1)/(1000*60*60*24));





//! days between dates



const days1 = calcDaysPassed(new Date(2019,11,19), new Date(2021,11,19));


///?  731



const days1jonas = calcDaysPassedjonas(new Date(2019,11,19), new Date(2021,11,19));



///?  731


console.log(days1, days1jonas);





const days2 = calcDaysPassed(new Date(2019,11,19), new Date(2023,11,19));



///?  1461



const days2jonas = calcDaysPassedjonas(new Date(2019,11,19), new Date(2023,11,19));



///?  1461



console.log(days2,days2jonas);




//! adding hours and minutes



const days3jonas = calcDaysPassedjonas(new Date(2019,11,19,10,54), new Date(2023,11,19));



console.log(days3jonas);



///? 1460.5458333333333