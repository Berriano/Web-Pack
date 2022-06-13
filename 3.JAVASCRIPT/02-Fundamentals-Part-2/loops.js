//-------------------------- Fundamentals Part 2 ---------------------------//



// -------------------------------    Loops   ------------------------------//
// ------------------------------------ ------------------------------------//




//-------- for loop --------- //



//   for (start counter; amount of times; incrementation)


//! start at 1;  do until rep reaches 10;  going up by 1 each time

//! code block to execute on each iteration inside {}



for (let rep = 1; rep <= 5; rep++) {


    ///?  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);


}



console.log("");







///  logging array elements to the console 



year = 2022;

birthPlace = 'Weymouth';

myFriends = ['Barn', 'Brad', 'Art']



let markArray = ['Mark', 'Beresford', year - 1976, birthPlace, myFriends];



for (let i = 0; i < markArray.length; i++) {


    ///? console.log(markArray[i]);


}


///  create a new array from an iteration of another array



let typeArray = [];


for (let i = 0; i < markArray.length; i++) {

    typeArray.push(typeof markArray[i])

}



///?  console.log(typeArray);





/// calculate new value from an array, and push that value to a new array



year = 2022;


const birthYears = [1998, 1974, 1976, 2009];

const newAges = [];



for (let i = 0; i < birthYears.length; i++) {

    newAges.push(year - birthYears[i]);



}


console.log(ages);




// ---- continue and break ----- //



/// continue



const typeString = ['23', 32, 49, 'Mark', true, 'Bundaberg']




console.log('------------ ONLY STRINGS -------------');


//! to continue looping even if the typeof is false


//! if typeof is not a string - continue



for (let i = 0; i < typeString.length; i++) {

    if (typeof typeString[i] !== 'string') continue;

    console.log(typeString[i], typeof typeString[i]);

}




console.log('---------- BREAK ON NUMBER -------------');


//!  break - when first number is found (number wont be included)



for (let i = 0; i < typeString.length; i++) {

    if (typeof typeString[i] === 'number') break;

    console.log(typeString[i], typeof typeString[i]);

}







//------ looping backwards -------- //




year = 2022;

birthPlace = 'Weymouth';

myFriends = ['Barn', 'Brad', 'Art']


markArray = ['Mark', 'Beresford', year - 1976, birthPlace, myFriends];


//!  the length will be 5 BUT the last index is 4 as it starts at 0

//! keep iteration going to include 0, so greater or equal to 0

//! take off 1 each iteration



for (let i = markArray.length - 1; i >= 0; i--) {


    // console.log(i, markArray[i]);


}





// --------- Loop inside a loop -------- //


/// Start 1

/*   




for(let exercise = 1; exercise < 4 ; exercise++ ){


	console.log(`------------ Start excercise ${exercise} -------------`);
	
	for(let rep = 1; rep < 6 ; rep++){
		
	console.log(`Exercise ${exercise} : Weigths repetition ${rep}`);
}

console.log(`------------- End excercise ${exercise} --------------`);
console.log(`------------------- Break  -----------------`);



}

*/

/// end 1






// -------------------- While loop ------------------ //



for (let rep = 1; rep <= 5; rep++) {

    ///?  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);


}





///  While loop


//! define counter value outside loop 



let rep = 1;


while (rep <= 10) {

    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);

    rep++;


}




///  while loop dependant on a random variable instead of a counter




/// random dice game


let dice = Math.trunc(Math.random() * 6) + 1;



while (dice !== 6) {

    console.log(`You rolled a ${dice}`);

    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {

        console.log(`You rolled a 6 - GAME OVER!!`);

    }

}








// --------------------------- Coding Challenge ---------------------------//
// ----------------------------- ---- 4 -----  ----------------------------//



const calcTipNew = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;




const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];


const tipsNew = [];

const totalsNew = [];




for (let i = 0; i < billsNew.length; i++) {

    tipsNew.push(calcTipNew(billsNew[i]));

    totalsNew.push(billsNew[i] + tipsNew[i]);

}


console.log(billsNew);
console.log(tipsNew);
console.log(totalsNew);




let newTotal = 0;


const calcAverage = function(arr) {

    for (let i = 0; i < arr.length; i++) {

        newTotal += arr[i];

    }

    return newTotal / arr.length;

}



console.log(calcAverage(billsNew));

