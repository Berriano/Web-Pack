// ------------------------     GUESS NUMBER   ----------------------------//
// ------------------------         Game       ----------------------------//


'use strict';



let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highScore = 0;



document.querySelector('.guess').value = "";



const displayMessage = function(message) {

    document.querySelector('.message').textContent = message;

}





document.querySelector('.check').addEventListener('click', function() {


        const guess = Number(document.querySelector('.guess').value);


        if (!guess) {

            displayMessage('⛔ No Number!! ');

        } else if (guess === secretNumber) {


            displayMessage('✅ Correct Number!!');


            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';

            document.querySelector('.number').textContent = secretNumber;


            if (score > highScore) {

                highScore = score;

                document.querySelector('.highscore').textContent = highScore;
            }



        } else if (guess !== secretNumber) {


            if (score > 1) {


                displayMessage(guess > secretNumber ? 'TOO HIGH!!' : 'TOO LOW!!');

                score--;

                document.querySelector('.score').textContent = score;


            } else {


                displayMessage('You Lost!!');

                document.querySelector('.score').textContent = 0;

            }

        }

    }

);




document.querySelector('.again').addEventListener('click', function() {


    score = 20;


    secretNumber = Math.trunc(Math.random() * 20) + 1;


    displayMessage('Start guessing...!!');


    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})