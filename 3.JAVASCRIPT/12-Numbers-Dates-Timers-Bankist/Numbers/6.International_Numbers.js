// ------------------------------- Numbers ------------------------------- //
// -----------------------  Internationalization   ----------------------- //


'use strict';



/// Format numbers to specific country using new Intl.NumberFormat()



const num = 3454567889.99;




/// USA number


const numUS = new Intl.NumberFormat('en-US').format(num);


console.log(numUS);


// 3,454,567,889.99



/// German Number



const numGER = new Intl.NumberFormat('de-DE').format(num);


console.log(numGER);


// 3.454.567.889,99




/// Syria Number




const numSY = new Intl.NumberFormat('ar-SY').format(num);


console.log(numSY);


// ٣٬٤٥٤٬٥٦٧٬٨٨٩٫٩٩





/// Browser Location



const numBROWSER = new Intl.NumberFormat(navigator.language).format(num);


console.log(numBROWSER);


// 3,454,567,889.99






// ---------------- Using Options Object on Numbers ------------------- //




const options = {

	style: 'unit',
	unit: 'mile-per-hour'

}



const numOptions = new Intl.NumberFormat(navigator.language, options).format(num);


console.log(numOptions);


// 3,454,567,889.99 mph



const numGERMph = new Intl.NumberFormat('de-DE', options).format(num);


console.log(numGERMph);


// 3.454.567.889,99 mi/h




// ----- OTHER UNITS CAN BE USED (celsius,percent,currency) ----- //



/// celsius


const optionsTemp = {


	style: 'unit',
	unit: 'celsius'

}



const numGERTemp = new Intl.NumberFormat('de-DE', optionsTemp).format(25);


console.log(numGERTemp);


// 25 °C



/// Percentage



const optionsPercent = {

	style: 'percent'

}


const numGERPercent = new Intl.NumberFormat('de-DE', optionsPercent).format(25);


console.log(numGERPercent);


// 2.500 %



const numUSPercent = new Intl.NumberFormat('en-US', optionsPercent).format(25);


console.log(numUSPercent);


// 2,500%




/// currency


//! currency hads to be set manually as its not set by the browser

//! usegrouping sets if the style should be used = true


const optionsCurr = {

	style: 'currency',
	currency: 'USD',
	// useGrouping: false

}



const numUSCurrency = new Intl.NumberFormat('en-US', optionsCurr).format(25);

console.log(numUSCurrency);


// $25.00



