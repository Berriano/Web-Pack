// ----------------------------------- Arrays ---------------------------------- //
// ---------------------------------- Methods ---------------------------------- //


'use strict';


const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



let arr = ['a', 'b', 'c', 'd', 'e'];





// --------------------------   slice( start, end ) --------------------------- //




/// returns a sliced section of an array to a new a array



/// with a start parameter


const slicedArr1 = arr.slice(2);


// ['c', 'd', 'e']



/// with an start and end parameter (end is not included in array)



const slicedArr2 = arr.slice(2, 4);


// ['c', 'd']



/// negative start parameter copies from the ned of the array



const slicedArrEnd = arr.slice(-2);


//  ['d', 'e']



/// negative end parameter ends that value from the end




const slicedArrNegEnd = arr.slice(1, -1);


// ['b', 'c', 'd']





/// create a shallow copy of an array by setting no parameters



const shallowCopySlice = arr.slice();


// ['a', 'b', 'c', 'd', 'e']






// -----------------   splice( start , amount of elements )  ------------------- //




/// like slice() but mutates the original array



arr = ['a', 'b', 'c', 'd', 'e'];


arr.splice(2);


// (2) ['a', 'b']





///  mainly used to remove the last element of an array



arr = ['a', 'b', 'c', 'd', 'e'];


arr.splice(-1)


// (4) ['a', 'b', 'c', 'd']






///  set a srating position and an amount of elements to remove



arr = ['a', 'b', 'c', 'd', 'e'];


arr.splice(1, 3);


// (2) ['a', 'e']







// ------------------------------   reverse ()  ------------------------------ //




/// reverses the original array (mutates original array)



arr = ['a', 'b', 'c', 'd', 'e'];


arr.reverse();


// (5) ['e', 'd', 'c', 'b', 'a']


console.log(arr);





// ------------------------------  concat() --------------------------------- //




/// to join 2 arrays together into a new variable 



arr = ['a', 'b', 'c', 'd', 'e'];


let arr2 = ['f', 'g', 'h', 'i', 'j'];



const newAlphaArr = arr.concat(arr2);


// (10) ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']


//! the array specified first has the second added to the end of it, same as spread operator







// --------------------------------- join() --------------------------------- //




/// converts the array to a string, and elements are separated by what is specified in ()




const joinedByDash = newAlphaArr.join('-');


// a-b-c-d-e-f-g-h-i-j




console.log(joinedByDash);





// ----------------------------- new at() method ------------------------------- //



arr = ['a', 'b', 'c', 'd', 'e'];



/// can use at method instead of using sq bracket notation



///?  console.log(arr[0]);


// a


const newAt = arr.at(0);


// a




/// old ways of getting the last element of an array



const lastEl1 = arr[arr.length-1];

// e as a string



const lastEl2 = arr.slice(-1);

// [e] in an array, add [0] to end to get the value




//! the at() method


const lastEl3 = arr.at(-1);


// e as a string



const secondLastEl1 = arr.at(-2);


// d as a string



