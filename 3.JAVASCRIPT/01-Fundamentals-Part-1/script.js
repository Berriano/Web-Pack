//-----------------------------  FUNDAMENTALS--1  ----------------------------//



//--------------------------  Values and Variables  ------------------------//


/// Start 1

/*

let js = "amazing";

// if(js === "amazing") console.log("JS is fun!!");




let firstName = "Mark";

// console.log(firstName);



/// Uppercase for constants - variables that will never change



let PI = 3.1415;



/// Descriptive variable names




let myFirstJob = "Builder";


let myCurrentJob = "Web Developer";


console.log(myCurrentJob);



///  END 1

*/



//--------------------------  Values and Variables  ------------------------//
//--------------------------       Assignment       ------------------------//




let country = "Australia";

let continent = "Oceania";

let population = 25;

// console.log(country,continent,population)






//--------------------------       Data types       ------------------------//




///  Start 2


/*

/// Number - numbers


let age = 23;

console.log(typeof age);

// number



/// String - letters ""


let myFirstName = "mark";


console.log(typeof myFirstName);

// string


/// Boolean - true of false


let fullAge = true;
let myAge = false;

let javascriptIsFun = true;



console.log(javascriptIsFun);

// true

console.log(typeof javascriptIsFun);

// boolean



/// Undefined - not defined yey


let children;


console.log(typeof children);

// undefined



/// null - empty object value


let empty = null;


console.log(typeof empty);


// object




/// bigint - large numbers



let largeNum = BigInt(323233252233);

console.log(largeNum);


// 323233252233n




///  re-assign variable 


javascriptIsFun = false;


console.log(javascriptIsFun);


// false


console.log(typeof javascriptIsFun);


// boolean





///  re-assign undefined variable 



children = 'none';



console.log(children);


// none


console.log(typeof children);


// string





///  null bug  


console.log(typeof null);


// object  - null is not an object

*/


///  End 2




//--------------------------       Data Types       ------------------------//
//--------------------------       Assignment       ------------------------//




let isIsland = true;

let language;

// console.log(typeof isIsland, typeof population, typeof country, typeof language)







//--------------------------   let, var and const   ------------------------//


/// start 3

/*


///  mutate variables with let



let age = 30;

age = 31;

console.log(age);


//  31



///  variables that will never change - ie d.o.b  use const 



const birthDate = "21 February 1976";


console.log(birthDate);


// 21 February 1976



///  dont use var 


*/

/// End 3


//--------------------------   let, var and const   ------------------------//
//--------------------------       Assignment       ------------------------//
//--------------------------   let, var and const   ------------------------//
//--------------------------       Assignment       ------------------------//


language = "English";


// isIsland = true;  ERROR as its a const variable






//--------------------------    Basic Operators    ------------------------//



/// Start 4 


/*

//-----  Arithmetic operators  ------ //




/// Use minus and DRY concept for DoB



let year = 2022;


const markAge = year - 1976;

const jarvieAge = year - 1974;


// console.log(markAge , jarvieAge);




/// use different calculations with the same variable, at the same time



// console.log(markAge/2 , jarvieAge/10 , 5 ** 3);


//  23  ,  4.8  ,  125 ( 5 * 5 * 5)




/// using plus to add 2 strings together



const firstName = "Mark";

const lastName = "Beresford";


// console.log(firstName +  " " + lastName);





//-----  Assignment operators  ------ //




/// equals 



let x = 10 + 5; //! 15


/// plus-equal



x += 10; //! 25  x = x + 10



/// times- equals



x *= 4; //! 100  x = x * 4




///  plus-plus


x++; //! 101 x = x + 1



/// minus-minus


x--; //! 100  x = x -1



// console.log(x);





//------- Comparison operators --------- //




/// > greater than



const ageGreater = markAge > jarvieAge;


// console.log(ageGreater);


// false as markAge is not greater than jarvieAge


/// < less than



const ageLess = markAge < jarvieAge;


// console.log(ageLess);


// true as markAge is less than jarvieAge


///  >= greater or equal to



const ageGreaterEqual = markAge >= jarvieAge;


// console.log(ageGreaterEqual);


// false as markAge is not greater or equal to jarvieAge



/// <= less or equal to



const ageLessEqual = markAge <= jarvieAge;


// console.log(ageLessEqual);


// true as markAge is less than or equal to jarvieAge


*/


///  End 4







//----------------   Operator Precedence ------------------ //



///  Start 5 


/*



/// declare 2 undefined variables together


let x, y;


x = y = 25 - 10 - 5;


console.log(x, y);


// 10 10 - minus has higher precedence so gets worked out first left to right,then
// the equals get worked out right to left




const jemAge = 2022 - 1998;

const sophieAge = 2022 - 2009;


///? const averageAge = jemAge + sophieAge / 2;


console.log(jemAge, sophieAge);


// 24 13


///? console.log(averageAge);


// 30.5 because division is done in order of precedence - so use parentheses


const averageAgeCorrect = (jemAge + sophieAge) / 2;


console.log(averageAgeCorrect);

// 18.5





//--------------------------    Basic operators     ------------------------//
//--------------------------       Assignment       ------------------------//



*/



/// end 5


//  country = "Australia";
//  continent = "Oceania";
//  population = "25 Million";



// let halfCountry = population;

// halfCountry++;

// console.log(halfCountry);


// const finlandPop = 6;


// console.log(population > finlandPop);


// const avgPop = 33;


// console.log(population < avgPop);


// console.log(country + ' is in ' + continent + ' and its ' + population + ' million people speak ' + language);







//--------------------------   String / Template   ------------------------//
//--------------------------        Literals       ------------------------//



/// Start 6


/*



const firstName = 'Mark';

const job = 'Web Developer';

const birthYear = 1976;

const year = 2022;

const mark = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job;



///?  Normal way

console.log(mark);




///  Template literal way



const markNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;


console.log(markNew);



///  Template literal normal string



const normalString = `Just a normal string!!`

console.log(normalString);




///  Template literal multi-line string



const multiLineOld = 'String with \n\
multi-lines';


console.log(multiLineOld);



const multiLineNew = `String
with
multi-
lines`;


console.log(multiLineNew);



*/

/// End 6


//--------------------------   String / Template   ------------------------//
//--------------------------        Assignment     ------------------------//




// console.log(`${country} is in ${continent} and its ${population} million people speak ${language}`);





//--------------------------        If / else        ------------------------//
//--------------------------        Statement        ------------------------//




/// Start 7

/*




const age = 14


if (age >= 18) {
	
	console.log(`You are old enough to start driving 😁`)
	
} else console.log(`You still have ${18 - age} years to wait 😒`);






const birthYear = 1976;


//!  If century is DECLARED inside the if/else code block, it will not be accesible OUTSIDE the code block


let century;


if (birthYear <= 2000) {
	
	//! re-assign century IF statement is true
	
	century = 20;
	
} else {
	
	//! ELSE re-assign century here
	
	century = 21;
}


console.log(century);



///  End 7

*/



//--------------------------        If / else        ------------------------//
//--------------------------        Assignment       ------------------------//



// if (population > 33) {

//     console.log(
//         `${country}'s population is above average ⬆`)
// } else {
//     console.log(`${country}'s population is ${33 - population} below average ⬇`)
// }




//--------------------------    Type conversion    ------------------------//
//--------------------------                       ------------------------//


/// Start 8


/*




/// Number() to manually convert strings to numbers


const inputYear = "1976";

console.log(Number(inputYear));


///?  1976 as a number 

///?  (inputyear variable remains a string unless assigned to a different variable)


const inputYearConverted = Number(inputYear);


console.log(inputYearConverted, typeof inputYearConverted);



///? inputYearConverted  'number'




/// String() to manually convert numbers to strings



const convertBack = String(inputYearConverted);


console.log(convertBack, typeof convertBack);


///?  1976 string






//--------------------------      Type coercion    ------------------------//
//--------------------------                       ------------------------//




///  When JS automaticaaly converts on its own




/// To strings



//! The + operator converts any numbers to strings



console.log("I am " + 46 + " years old");


//! The 46 is converted to a string to make a complete string - same with template literals


console.log('23' + '10' + 3);


// 23103    The 3 is turned into a string 




/// To numbers



//!  The minus operator converts strings to numbers



console.log('23' - '10' - 3);


// 10    the 23 and 10 are turned into numbers





//! The * operator converts any strings to numbers 


console.log('23' * '10' * 3);


// 690    the 23 and 10 are turned into numbers




//! The / operator converts any strings to numbers 


console.log('23' / 10);


// 2.3   The 23 is converted to a number



let n = '1' + 1;  //  "11" - string

n -= 1;   // 11 - 1 = 10  - number

console.log(n);








let numPlusString = 2 + 3 + 4 + "5";


console.log(numPlusString);


// 2 + 3 = 5 :  5 + 4 = 9 : 9 + '5'  =  95



*/


///  End 8




//--------------------------      Boolean logic    ------------------------//
//--------------------------                       ------------------------//




/// Start 9


/*



///  Falsey


///? the 5 falsey values


///?  0, "" , undefined , null , NaN


//!  ALL other values are truthy



///  Boolean function


//! Used rarely as js uses type coercion


console.log(Boolean(0));

// false

console.log(Boolean(undefined));

// false


console.log(Boolean("Mark"));

// true

console.log(Boolean(""));

// false

console.log(Boolean(1976));

// true

console.log(Boolean("Bundaberg"));

// true


console.log(Boolean({}));


// true




const money = 0;



if (money) {

    console.log(`WOW.... ur rich 💵💵💵`);

} else {

    console.log(`Get a job loser 👎`)

}





let height;


if (height) {

    console.log(`YAY height is defined`)

} else {

    console.log(`Height is UNDEFINED`)

}






//--------------------------   Equality operators  ------------------------//
//--------------------------                       ------------------------//



/// Strict equality



const age = 18;


if (age === 18) console.log(`You just became an adult`);


// You just became an adult




/// loose equality



//! does type coercion


const ageNew = '18';


if (ageNew == 18) console.log(`You just became an adult`);


// You just became an adult



///  a prompt will always return a string, so any input numbers need converting


const favNum = Number(prompt('What is your favourite number?'));


if (favNum === 7) {

    console.log(`Great number  - "${favNum}"`)

} else if (favNum === 21) {

    console.log(`${favNum} is also a great number`)

} else console.log(`SHIT NUMBER 💩💩💩💩`)




/// Different operator (not!) 


//! strict version

if (favNum !== 23) console.log(`Why not 23? STRICT`);




//! loose version



if (favNum != 23) console.log(`not 23---LOOSE!!`);





//--------------------------      	 Equality        ------------------------//
//--------------------------        Assignment       ------------------------//




let numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));


if (numNeighbours === 1) {
	
	console.log(`Only 1 border!`);
	
} else if (numNeighbours > 1) {
	
	console.log(`More than 1 border`);
	
} else console.log(`No borders`);




*/

///  End 9




//--------------------------         Boolean         ------------------------//
//--------------------------       		Logic          ------------------------//



///  Start 10

/*


let hasDriversLicense = true;

let hasGoodVision = false;



///   &&   AND operator: 



console.log(hasDriversLicense && hasGoodVision);


//  false




/// 	||   OR operator



console.log(hasDriversLicense || hasGoodVision);



// true




/// 	! 	 NOT operator



console.log(hasDriversLicense && !hasGoodVision);


// true -  hasdriverslicence = true  and NOT-hasGoodVision = true




hasGoodVision = true;




// if (hasDriversLicense && hasGoodVision) {

//     console.log(`Sarah can Drive!!`)

// } else console.log(`Someone else should drive`);


let isTired = true;




///  AND + NOT together




if (hasDriversLicense && hasGoodVision && !isTired) {

    console.log(`Sarah can Drive!!`)

} else console.log(`Someone else should drive`);






//--------------------------   Boolean  Logic  ------------------------//
//--------------------------     Assignment    ------------------------//




country = "Australia";

continent = "Oceania";

population = 25;

language = "English";

isIsland = false;



if (language === 'English' && population < 50 && !isIsland) {

    console.log(`You should live in ${country}:)`)

} else console.log(`${country} does not meet your criteria :(`)



/// End 10

*/




//--------------------------          Coding         ------------------------//
//--------------------------        Challenges       ------------------------//




//-----------------------------  Challenge 1  ---------------------------- //

//---- Start --- //

/*



/// variable set 1



let markHeight = 1.69;
let johnHeight = 1.95;

let markMass = 78;
let johnMass = 92;




/// variable set 2



// let markHeight = 1.88;
// let johnHeight = 1.76;

// let markMass = 95;
// let johnMass = 85;






///  Formulas



let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;


let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);



//-------------------------------  Challenge 2  -------------------------- //


//! Use actual condition (markBMI > JohnBMI) instead of markHigherBMI - easier to read


// if (markBMI > johnBMI) {

//     console.log(`Marks BMI(${markBMI}) is higher than Johns BMI(${johnBMI})`)

// } else {
//     console.log(`Johns BMI(${johnBMI}) is higher than Marks BMI(${markBMI})`)
// }



*/

//-----  END  ----- //






//-------------------------------  Challenge 3  ------------------------- //




let dolphinsAverage1 = (96 + 108 + 89) / 3;
let dolphinsAverage2 = (97 + 112 + 101) / 3;
let dolphinsAverage3 = (300) / 3;

let koalasAverage1 = (88 + 91 + 110) / 3;
let koalasAverage2 = (109 + 95 + 123) / 3;
let koalasAverage3 = (300) / 3;


console.log(dolphinsAverage1, koalasAverage1);
console.log(dolphinsAverage2, koalasAverage2);
console.log(dolphinsAverage3, koalasAverage3);



/// test 1



if (koalasAverage1 > dolphinsAverage1 && koalasAverage1 >= 100) {

    console.log(`Koalas WIN!!`)

} else if (koalasAverage1 < dolphinsAverage1 && koalasAverage1 >= 100) {

    console.log(`Dolphins WIN!!`)

} else if (koalasAverage1 <= 100 && dolphinsAverage1 <= 100) {

    console.log(`BOTH TEAMS FAIL!!!!`)

} else console.log(`No Winner - - Game TIED!!`)


/// test 2




if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {

    console.log(`Koalas WIN!!`)

} else if (koalasAverage2 < dolphinsAverage2 && dolphinsAverage2 >= 100) {

    console.log(`Dolphins WIN!!`)

} else if (koalasAverage2 <= 100 && dolphinsAverage2 <= 100) {

    console.log(`BOTH TEAMS FAIL!!!!`)

} else console.log(`No Winner - - Game TIED!!`)


/// test 3



if (koalasAverage3 > dolphinsAverage3 && koalasAverage3 >= 100) {

    console.log(`Koalas WIN!!`)

} else if (koalasAverage3 < dolphinsAverage3 && dolphinsAverage3 >= 100) {

    console.log(`Dolphins WIN!!`)

} else if (koalasAverage3 < 100 && dolphinsAverage3 < 100) {

    console.log(`BOTH TEAMS FAIL!!!!`)

} else console.log(`No Winner - - Game TIED!!`)




//------------------ Continued on next script  -------------------- //