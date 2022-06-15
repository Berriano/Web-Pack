// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Fundamentals   -----------------------------//



'use strict';



//--------------------------  querySelector() ------------------------------//



/// to select class and id tags and return the first element
/// for the given CSS selector



console.log(document.querySelector('.message'));


//   <p class="message">Start guessing...</p>





//---------------------  querySelector().textContent ------------------------//




///  to then get the text content of the element



console.log(document.querySelector('.message').textContent);


//   Start guessing...



///  to then set the text content of the element



document.querySelector('.message').textContent = 'Start guessing...!!';


console.log(document.querySelector('.message'));



///  select the div element in the html with the class 'number' 



///? document.querySelector('.number').textContent = 13;



///  select the div element in the html with the class 'score' 



document.querySelector('.score').textContent = 20;






//---------------------  querySelector().value ------------------------//




///  to get the value of the input field element



document.querySelector('.guess').value;



///  to set the value of the input field element to empty string



document.querySelector('.guess').value = "";



///  to get the DOM manipulated value of the input field element set above



console.log(document.querySelector('.guess').value);






//----------------------------- Game Logic ----------------------------- //


///  keep score variable



let score = 20;



///  generate random secret number


let secretNumber = Math.trunc(Math.random() * 20) + 1;


/// keep highscore variable


let highScore = 0;



/// for development - show the number in place of the ? 


// document.querySelector('.number').textContent = secretNumber;





//--------------------------  addEventListener ----------------------------//






///  select the 'check' button class and add the eventListener


/// pass in the type of event i.e 'click'


/// specify the reaction to the click event by defining a function (event handler)


//! the function only gets called when the click event happens


//!  ANY VALUE FROM A UI OR INPUT FIELD IS USUALLY A STRING, SO CONVERT TO A NUMBER



document.querySelector('.check').addEventListener('click',


    function() {


        ///  when check is clicked, the input field value is saved to guess variable


        const guess = Number(document.querySelector('.guess').value);



        /// If guess value is 0(falsy) change .message=textContent to 'no number' 


        if (!guess) {

            document.querySelector('.message').textContent = '⛔ No Number!! '

        }


        /// If guess value is correct, change .message=textContent to 'correct number' 
        //
        //
        else if (guess === secretNumber) {

            document.querySelector('.message').textContent = '✅ Correct Number!!';



            /// change CSS background color using style and camelCase 


            //! (value must be a string)



            document.querySelector('body').style.backgroundColor = '#60b347';



            /// change CSS width using style and camelCase


            //! (value must be a string)


            document.querySelector('.number').style.width = '30rem';


            /// show secret number

            document.querySelector('.number').textContent = secretNumber;



						///  set highscore


						if(score > highScore){

							highScore = score;

							document.querySelector('.highscore').textContent = highScore;
						}


        }


        /// If guess value is too high, change .message=textContent to 'too high' 


        //
        else if (guess > secretNumber) {

            if (score > 1) {


                document.querySelector('.message').textContent = 'TOO HIGH!!';


                /// reduce the score by 1


                score--;


                /// display the score


                document.querySelector('.score').textContent = score;

            } else {

                /// lost the game

                document.querySelector('.message').textContent = 'You Lost!!';

                document.querySelector('.score').textContent = 0;


            }

        }

        /// If guess value is too low, change .message=textContent to 'too low' 


        //
        else if (guess < secretNumber) {

            if (score > 1) {


                document.querySelector('.message').textContent = 'TOO LOW!!';


                /// reduce the score by 1


                score--;


                /// display the score


                document.querySelector('.score').textContent = score;



            } else {


                /// lost the game

                document.querySelector('.message').textContent = 'You Lost!!';


                document.querySelector('.score').textContent = 0;


            }

        }

    }
);




// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Challlenge 1   -----------------------------//



document.querySelector('.again').addEventListener('click', function() {


    score = 20;


    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...!!';

    document.querySelector('.number').textContent = '?';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = "";

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

})