// ------------------------     GUESS NUMBER   ----------------------------//
// ------------------------         Game       ----------------------------//


'use strict';



let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;

document.querySelector('.guess').value = "";




///  refactoring functions



const displayMessage = function(message) {

    document.querySelector('.message').textContent = message;

}








document.querySelector('.check').addEventListener('click', function() {


        const guess = Number(document.querySelector('.guess').value);


        if (!guess) {


            /// refactored message


            // document.querySelector('.message').textContent = '⛔ No Number!! ';


            displayMessage('⛔ No Number!! ');




        } else if (guess === secretNumber) {


            /// refactored message


            // document.querySelector('.message').textContent = '✅ Correct Number!!';


            displayMessage('✅ Correct Number!!');





            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;


            if (score > highScore) {

                highScore = score;

                document.querySelector('.highscore').textContent = highScore;
            }



            // ----- refactored code ------ //


            //! THIS


            /// when guess is wrong instead of 2 blocks of high or low 



        } else if (guess !== secretNumber) {


            if (score > 1) {


                /// refactored message with big expression


                displayMessage(guess > secretNumber ? 'TOO HIGH!!' : 'TOO LOW!!');


                // document.querySelector('.message').textContent = guess > secretNumber ? 'TOO HIGH!!' : 'TOO LOW!!';




                score--;

                document.querySelector('.score').textContent = score;


            } else {



                /// refactored message


                // document.querySelector('.message').textContent = 'You Lost!!';


                displayMessage('You Lost!!');


                document.querySelector('.score').textContent = 0;

            }

        }

    }

);



//! REPLACES THIS


// else if (guess > secretNumber) {



//     if (score > 1) {


//         document.querySelector('.message').textContent = 'TOO HIGH!!';

//         score--;

//         document.querySelector('.score').textContent = score;


//     } else {

//         document.querySelector('.message').textContent = 'You Lost!!';

//         document.querySelector('.score').textContent = 0;

//     }


// } else if (guess < secretNumber) {



//     if (score > 1) {

//         document.querySelector('.message').textContent = 'TOO LOW!!';

//         score--;

//         document.querySelector('.score').textContent = score;


//     } else {

//         document.querySelector('.message').textContent = 'You Lost!!';

//         document.querySelector('.score').textContent = 0;

//     }

// }


//! End






// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Challlenge 1   -----------------------------//



document.querySelector('.again').addEventListener('click', function() {


    score = 20;


    secretNumber = Math.trunc(Math.random() * 20) + 1;


    /// refactored message


    // document.querySelector('.message').textContent = 'Start guessing...!!';


    displayMessage('Start guessing...!!');



    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})