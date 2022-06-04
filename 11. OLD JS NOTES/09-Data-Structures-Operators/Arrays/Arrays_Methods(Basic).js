'use strict';



let arr = ['a', 'b', 'c', 'd', 'e'];



// ---------------------------------- Array methods -------------------------------- //




// ----------------------------- Previous Array methods ---------------------------- //



//////////      push(), unshift(), pop(), shift(), indexOf(), includes()      /////////



/// push()

///? adds array elements to the end of an array


/// unshift()

///? adds array elements to the start of an array


/// pop()


///? removes the last element from an array



/// shift()


///? removes the first element from an  array


/// indexOf()


///? returns the first index at which a given element can be found in an array


/// includes()


///?  determines whether an array includes a certain value among its entries
///?  returning true or false as appropriate





// -------------------------------- slice() method ---------------------------------- //



//! start slice from first parameter, and return a new array



const startSlice = arr.slice(2);


// console.log(startSlice);


///? ['c', 'd', 'e']



//! add a second parameter as an end point



const startAndEndSlice = arr.slice(1,3);


// console.log(startAndEndSlice);


//! will not include 3rd indexed item


///?  ['b', 'c']



//! using a negative begin parameter will start from the end



const startAtEnd = arr.slice(-2);


// console.log(startAtEnd);


///?	 ['d', 'e']

//! will extract the last 2 elements




/// To get the last element of an array


const lastEl = arr.slice(-1);

// console.log(lastEl);

///? 	[e]




/// Using positive and negative indexes


//! slice from index 1 to last index


const posNeg = arr.slice(1,-1);


// console.log(posNeg);


///?  ['b', 'c', 'd']



/// To create a shallow copy of an array


//! As slice always returns a new array, you can create a shallow copy


const shallowCopy = arr.slice();


// console.log(shallowCopy);


///?  ['a', 'b', 'c', 'd', 'e']






// --------------------------------- splice() ------------------------------------- //



let newArr = ['a', 'b', 'c', 'd', 'e'];



//! Splice method is similar to slice EXCEPT it mutates original array



 const splicing = newArr.splice(2);


// console.log(splicing);


///? 	['c', 'd', 'e']


// console.log(newArr);


///? ['a', 'b']




//! Negative splicing


newArr = ['a', 'b', 'c', 'd', 'e'];


//! counts back from the end, then slices to the end


const spliceEnd = newArr.splice(-3);


// console.log(spliceEnd);


///?  ['c', 'd', 'e']




/// 2nd parameter is to set the amount to take out


//! SECOND PARAMETER WORKS DIFFERENT TO SLICE


newArr = ['a', 'b', 'c', 'd', 'e'];



const amountToDelete = newArr.splice(1,3);


// console.log(amountToDelete);


//! so from element 1, take out 3 elements

///?  ['b', 'c', 'd']




// -------------------------------- reverse() ----------------------------------- //


//! simply reverese the array


newArr = ['a', 'b', 'c', 'd', 'e'];

let newArr2 = ['f', 'g', 'h', 'i'];



let reversedArr = newArr2.reverse();


//! mutates the original array


// console.log(newArr2);

///? ['i', 'h', 'g', 'f']



// console.log(reversedArr);

///? ['i', 'h', 'g', 'f']




// --------------------------------- concat() ------------------------------------ //



//! Used to add 2 arrays together first.concat(second).



newArr = ['a', 'b', 'c', 'd', 'e'];

newArr2 = ['f', 'g', 'h', 'i'];


const letters = newArr.concat(newArr2);


// console.log(letters);


///?  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']



//! Works the same as spread operator



const spreadLetters = [...newArr, ...newArr2];


// console.log(spreadLetters);


///? ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']


//! NEITHER METHOD MUTATES ORIGINAL ARRAYS




// ---------------------------------- join() -------------------------------------- //


//! joins all the elements in an array together, 
//! spaced with the specified separator (use spreadLetters in example),
//! and return a string!!



//! join letters, spaced with a plus sign(+), as a string


const joinedArr = spreadLetters.join('+');


// console.log(joinedArr);


///? a+b+c+d+e+f+g+h+i






// ------------------------------------ at() -------------------------------------- //



let numArr = [23, 11, 64];



//! Basically array 'at' position 0


const numAt = numArr.at(0);

console.log(numAt);

///?  23 



/// Get element at last position in array




//! original method


const lastOld = numArr[ numArr.length -1 ];


console.log(lastOld);


///? 64 




//! Or slice() method

numArr = [23, 11, 64];


const sliceLastArr = numArr.slice(-1)[0];

console.log(sliceLastArr);

///? 64 




/// Use the at() method


//! New at() method can be used for chaining, and on strings


numArr = [23, 11, 64];


const lastNew = numArr.at(-1);


console.log(lastNew);


///? 64 



//! Used on a string

const myName = 'Mark';

console.log(myName.at(0));

///? M 





