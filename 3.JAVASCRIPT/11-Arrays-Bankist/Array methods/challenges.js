// ----------------------------------- Arrays ---------------------------------- //



'use strict';


// -------------------- dogs challenges 1----------------- //



const checkDogs = function(dogsJulia, dogsKate) {



    const dogsJuliaShallow = dogsJulia.slice();

    const dogsJuliaArr = dogsJuliaShallow.slice(1, -2);

    const bothDogs = dogsJuliaArr.concat(dogsKate);


    bothDogs.forEach(function(dog, i) {

        if (dog >= 3) {

            console.log(`Dog number ${i +1} is an adult and is ${dog} years old`);

        } else {

            console.log(`Dog number ${i +1} is still a puppy 🐶`);
        }
    });

    // console.log(bothDogs);

}




checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);



// -------------------- dogs challenges 2 ----------------- //





const calcAverageHumanAge = ages => ages
        .map(age => age <= 2 ? 2 * age : 16 + age * 4)
        .filter(age => age >= 18)
        .reduce((acc, curr, i, array) => acc + curr / array.length, 0);





console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));