// ------------------------------      STRINGS   ---------------------------------- //
// ----------------------------------  --------- ---------------------------------- //


'use strict';




const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';




const airline = 'TAP Air Portugal';

const plane = 'A320';



///  use sq brackets to get letter at position


plane[0];


// A

plane[1];


// 3  as a string



//! can be done directly

'Hello' [1];

// e




// ----- string.length ------ //



airline.length;


// 16



//! can be done directly

'Hello'.length;


// 5




// ------------------------------      STRINGS   ---------------------------------- //
// ----------------------------------  Methods ------------------------------------ //


//! ALL STRING METHODS ARE CASE SENSITIVE EXCEPT TO UPPER AND LOWER CASES


//---------- indexOf() ----------- //


///  gives the first occurance of the letter


airline.indexOf('r');


// TAP Air Portugal =  6




/// can search for words in the strings


airline.indexOf('Portugal');


// TAP Air Portugal = 8 (starts at 8)





//---------- lastindexOf() --------- //


///  gives the last occurance of the letter


airline.lastIndexOf('r');


// TAP Air Portugal =  10




// ------------- slice() ------------ //



/// slice(start)



airline.slice(4);


// Air Portugal (from position 4 to the end)


//! strings cannot be mutated, so methods on string always return a new string




/// slice(start,end)

//! dont need to put an end if not needed


airline.slice(4, 7);

//  Air  (stops at 7 and doesnt include position 7)




///  extract first word of a string



airline.slice(0, airline.indexOf(' '));


// TAP



///  extract last word of a string


airline.slice(airline.lastIndexOf(' ') + 1);

//! add the + 1 to remove the space before the word




/// start to extract from the end using negative value



airline.slice(-2)

// al


airline.slice(-4)

// ugal



/// using positive start and negative end



airline.slice(1, -1)


// AP Air Portuga



// ------------ String function for checking middle seat --------------- //




const checkMiddleSeat = function(seat) {

    seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ?
        console.log(`You have a middle seat`) :
        console.log(`Your seat is by the window`);

}


checkMiddleSeat('11E')
checkMiddleSeat('11C')
checkMiddleSeat('11B')





// ------------ toLowerCase() ------------ //


/// transform the whole string to lowercase



airline.toLowerCase();


// tap air portugal





// ------------ toUpperCase() ------------ //


/// transform the whole string to Uppercase



airline.toUpperCase();


// TAP AIR PORTUGAL




//------------------  fixing the formatting of a name -------------------- //



const passenger = 'mArK';



/// transform whole string to lower case


const passengerLower = passenger.toLowerCase();


// mark



/// then transform the first letter to uppercase and add the rest of the lowercase string


const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);


// Mark





//------------------  Comparing login to email details -------------------- //




const email = 'beresford85@gmail.com';

const loginEmail = '  BeresFord85@Gmail.COM  ';




/// Always convert to lowercase to start



const emailLower = loginEmail.toLowerCase();


// __beresford85@gmail.com__





// ---------------- trim() ---------------- //



/// remove spaces at both ends with trim()


const trimmedEmail = emailLower.trim();


// beresford85@gmail.com




/// posible to do chaining with the methods as the value is returned immediately



const normalizeEmail = loginEmail.toLowerCase().trim();


// beresford85@gmail.com





// -------------- replace() --------------- //


/// creates a brand new string so can be chained, and only replaces first occurance


const priceGB = '£205,999';


/// replace a character with another - 1st is the char to replace, 2nd is the replacement

//! chaining is possible


const priceUS = priceGB.replace('£', '$').replace(',', '.');


//  $205.999





// -------------- replaceAll() --------------- //


/// to replace all occurances


const announcement = 'Plane boarding at Door 23.... Door 23!';


announcement.replaceAll('Door', 'Gate')


// Plane boarding at Gate 23.... Gate 23!






// -------------------------- Boolean String Methods -------------------------- //

//! only return true or false





// ----------- includes() ----------- //




const airplane = 'A320neo';


airplane.includes('A320')


// true



airplane.includes('Boeing');


// false





// ----------- startsWith() ------------ //



airplane.startsWith('A32');


// true



airplane.startsWith('B22');


// false





// ------------- endsWith() ------------- //


const porsche = 'Porsche 911 turbo';


/// is it a turbo?


console.log(porsche.endsWith('turbo'));


// true 




/// is it a 911 turbo?


console.log(porsche.includes('911') && porsche.endsWith('turbo'));


// true




/// is it a Fiat 911 turbo?


console.log(porsche.startsWith('Fiat') && porsche.includes('911') && porsche.endsWith('turbo'));


// false




/// is it a porsche 911 turbo?


console.log(porsche.startsWith('Porsche') && porsche.includes('911') && porsche.endsWith('turbo'));


// true



// ----------------- Practical exercise for includes --------------------- //




const checkBaggage = function(item) {

    const baggage = item.toLowerCase();


    if (baggage.includes('knife') || baggage.includes('gun')) {

        console.log('You cannot board!!');

    } else console.log(`Welcome aboard :)`);
};




checkBaggage('i Have a GUn An a knife');

// You cannot board!!


checkBaggage('i Have a sandwiches santa');


// Welcome aboard :)


checkBaggage('i Have a gun but i wont kll anone....i promise');


// You cannot board!!








// ----------------------------------   Split   ----------------------------------- //
// ----------------------------------  and Join  ---------------------------------- //






// -------------------- Split() -------------------- //


//! USED WITH join() on arrays and strings


/// splits a string by a specified divider, and puts the elements into an array



const str = 'a+very+nice+string!';


const splitArr = str.split('+');


//  ['a', 'very', 'nice', 'string!']





const fullName = 'Mark Beresford';


const splitName = fullName.split(" ");


//  ['Mark', 'Beresford']





/// use destructuring to assign variable names after spliting into an array



const [firstName, lastName] = fullName.split(" ");


// console.log(firstName, lastName);


// Mark Beresford




// --------------- join() ---------------- //




/// use an array with strings and variables, and join() using a space




const nameStr = ['Mr', firstName, lastName.toUpperCase()].join(' ');


// console.log(nameStr);


// Mr Mark BERESFORD 



// const capitalizeName = function(names) {

//     let newNames = [];

//     const namesArr = names.split(" ");

//     for (const n of namesArr) {

//         newNames.push(n[0].toUpperCase() + n.slice(1));

//     }

//     return newNames.join(" ");

// };




const capitalizeName = function(name) {

    const names = name.split(" ")

    let arr = [];

    for (const n of names) {

        arr.push(n.replace(n[0], n[0].toUpperCase()))

    }

    return arr.join(" ");

};


console.log(capitalizeName('mark berry'));
console.log(capitalizeName('jarvie berry'));









// ----------------------------------   Padding  ---------------------------------- //
// --------------------------------- start and end  ------------------------------- //





// --------------- padStart() --------------- //



/// padStart (length of whole string, character to pad with)




const message = 'Go to gate 23!';


message.padStart(25, '+')


//! length of whole string is 25 then, 25 - length of original string(14) = 11 +'s

// +++++++++++Go to gate 23!




console.log('Mark'.padStart(25, "+"));


//! length of whole string is 25 then, 25 - length of original string(4) = 21 +'s

// +++++++++++++++++++++Mark





// ----------------- padEnd() --------------- //



/// padEnd (length of whole string, character to pad end with to make length of whole string)



message.padStart(25, '+').padEnd(30, "+")


// +++++++++++Go to gate 23!+++++


//! padend length - padstart length = num of "+"'s



console.log('Mark'.padStart(25, "+").padEnd(35, "+"));


// +++++++++++++++++++++Mark++++++++++


//! makes 10 +'s @ end






// ----------------------- function for masking creditCard ------------------------ //



const maskCreditCard = function(number) {

	
	/// convert a number to a string
	
	
	const str = number + '';
	
	//! number + a string will produce a string
	
	

	/// slice the last 4 digits off then pad that string to the same length as the original 
	/// string with the *'s
	
	
	const maskedNum = str.slice(-4).padStart(str.length, "*");
	
	
	/// return the value instead of console.logging
	
	return maskedNum;


	
	
	
}

console.log(maskCreditCard(873642837682376));

console.log(maskCreditCard(76988642837682376));

console.log(maskCreditCard(8736428376971976));






// ----------------------- function for planes in line ------------------------ //



const planesInLine = function(n){

	console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);

}


planesInLine(5);

// There are 5 planes in line ✈✈✈✈✈



planesInLine(15);

// There are 15 planes in line ✈✈✈✈✈✈✈✈✈✈✈✈✈✈✈





