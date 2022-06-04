'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// ----------------------------------- Numbers ------------------------------- //
// ----------------------------------- BigInt() -----------------------------  //



//! the biggest number js can safely represent


const biggestNum = 2 ** 53 -1;


// console.log(biggestNum);


///?  9007199254740991


//! OR....

const maxNumber = Number.MAX_SAFE_INTEGER;


// console.log(maxNumber);



///?  9007199254740991



const maxUnsafeNumber = Number.MAX_SAFE_INTEGER +2;


// console.log(maxUnsafeNumber);


///?  9007199254740992  is wrong(+2 not +1)





/// ES2020 introduced BigInt()




// console.log(4325345346456456456363636346346346436);


///? 4.3253453464564563e+36



//! add n to end to create BigInt


// console.log(4325345346456456456363636346346346436n);


///? 4325345346456456456363636346346346436n



//! Or use BigInt function


const BigInteger = BigInt(4325345346456456456363636346346346436);


// console.log(BigInteger);


//! number too big for BigInt??


///? 4325345346456456329329220645227069440n



const bigSum = 35795874398574398573984n * 100000000n;


// console.log(bigSum);


//! works


///? 3579587439857439857398400000000n




/// Comparisons



//! CANNOT MIX BIGINT WITH OTHER TYPES unless doing comparisons



const hugeInt = 99999999999999999999n;


const num = 200;


// console.log(hugeInt > num);


///? true




/// Comparing values



// console.log(20n === 20);

// console.log(typeof 20n);

///? false  (no type coersion)

///? BigInt




// console.log(20n == 20);


///? true  (type coersion)


// console.log(20n == '20');


///? true  (type coersion)



//! Math Methods wont work on bigint numbers


// console.log(Math.sqrt(20n));


///?  Cannot convert a BigInt value to a number at Math.sqrt 




/// Division



//! Division will return closest BigInt (similar to truncing)


console.log(10n / 3n);


///? 3n



console.log(10n / 4n);


///? 2n



console.log(10 / 3);


///? 3.3333333333333335
