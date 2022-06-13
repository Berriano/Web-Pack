// Remember, we're gonna use strict mode in all scripts now!
'use strict';



const tempsArr = [12, 5, -5, 0, 4];



const printForecast = function(arr) {	

    let string = '...';

    for (let i = 0; i < arr.length; i++) {

        string += ` ${arr[i]} degrees in ${i + 1} days ... `;

    }
		
    return string;

}


console.log(printForecast(tempsArr));