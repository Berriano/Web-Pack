//-----------------------------  FUNDAMENTALS--1  ----------------------------//
//-----------------------------     Continued     ----------------------------//



// --------------------------   Switch Statement  ----------------------------//
// -------------------------------- ------------------------------------------//


/// Start 1

/*



//! case = switch arguement/parameter



let gameType = 'sports';

// gameType = 'builder';



switch (gameType) {

    case 'sports':
        console.log(`This is a sports game`);
        break;


    case 'builder': //! will yield the same result as strategy

    case 'strategy':
        console.log(`This is a strategy game`);
        break;


    case 'fps':
        console.log(`This is a first person shooter game`);
        break;




    case 'action':
        console.log(`This is an action game`);
        break;


    default:
        console.log(`This is not a game type`);



}






// --------------------------   Switch Statement  ----------------------------//
// -----------------------------    Assignment  ------------------------------//




let language = prompt(`Enter language`);



switch (language) {

    case 'chinese':

    case 'mandarin':
        console.log(`MOST number of native speakers`);
        break;

    case 'spanish':
        console.log('2nd most native speakers');
        break;

    case 'english':
        console.log(`3rd place`);
        break;


    case 'hindi':
        console.log(`Number 4`);
        break;

    case 'arabic':
        console.log(`5th most spoke language`);
        break;

    default:
        console.log(`Great language too!!`)

}



/// End 1

*/


// --------------------------    Statements and   ----------------------------//
// -----------------------------   Expresions   ------------------------------//



//!  An expression produces a value


let sum = 3 + 4;


//! A statement is just a block of code that produces no value but has expressions inside
//! i.e if/else and switch



///  expression


3 + 4;

1991;

true && false && !false;



/// statement


if (23 > 10) {

    const str = `23 is bigger`; // `23 is bigger` is an expression

}


//!  A STATEMENT IS LIKE A COMPLETE SENTENCE; WHERE AS AN EXPRESSION IS THE WORDS!
//! Statements tend to end with a ;






// ---------------------------    Conditional   ----------------------------//
// -----------------------------   Operator   ------------------------------//



//!  condition ? if : else = expression (will give a value at the outcome)


///? only 1 if or else can be given


let age = 23;

// age = 17;


const drink = age >= 18 ? `beer 🍺` : `water 💧`;


// console.log(`I am ${age} and would like to drink ${drink}`);


/// OR



// console.log(`I am ${age} and would like to drink ${age >= 18 ? `beer 🍺` : `water 💧`}`);







// -------------------------    Conditional operator  ------------------------//
// -----------------------------    Assignment  ------------------------------//





let country = "Australia";

let population = 25;

let continent = "Oceania";


let language = "English";

let isIsland = false;



// country = "England";

// population = 65;




console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);






// -------------------------  Code challenge ------------------------//
// -----------------------------   4   ------------------------------//




let bill = 500;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was $${bill} the tip was $${tip}, and the total value was $${bill + tip}`)