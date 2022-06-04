'use strict';

// -------------------------- Guess my Number -------------------------------- //

/// define elements to change

const messageText  = document.querySelector(".message");

/// refactor messageText into a function

const displayMessage = message => messageText.textContent = message;


const numberBox = document.querySelector('.number');
const scoreBox = document.querySelector('.score');
const againBtn = document.querySelector('.again');
let highestScore = 	document.querySelector('.highscore')

let score = 20;
let highScore = 0;

let secretNumber  = Math.trunc(Math.random()*20) +1;

scoreBox.textContent = score;


document.querySelector(".check")
														 .addEventListener('click', function(){
														
					const guess = 	Number(document.querySelector('.guess').value);

				
///? when no number

					if(!guess){
							displayMessage("No Number 🛑");	
						}

///? when guess is correct

 					else if (guess === secretNumber){

							displayMessage("Correct Guess ✅");

							numberBox.textContent = secretNumber;

						if(score > highScore)	{ highScore = score;

							highestScore.textContent = highScore;
						}

///? use querySelector for CSS styling on background


document.querySelector('body').style.backgroundColor = "#00FF00"


///? use querySelector for CSS styling on number box


			numberBox.style.width = '30rem'


 						}

// ///? when guess is too high

// 						 else if (guess > secretNumber){

// 						if(score >= 1){

// 									messageText.textContent = "Too High";

// 									scoreBox.textContent = score--;
// 					}
// 					else {
// 						scoreBox.textContent = score--;

// 						messageText.textContent = "You Lost 👎";

// 						scoreBox.textContent = '0';
// 					}
// 				}

// ///? when guess is too low

// 					else if (guess < secretNumber){

// 						if(score >= 1){

// 							messageText.textContent = "Too Low";

// 							scoreBox.textContent = score--;

// 							}
// 							else{ 

// 								scoreBox.textContent = score--;

// 									messageText.textContent = "You Lost 👎";

// 									scoreBox.textContent = '0';
// 						}
// 					}					
// 					}
					
	
// )


// --------------------------- Re-Factoring the code ------------------------------ //


///? when guess is wrong

else if (guess !== secretNumber){

		if(score > 1){
	
				guess > secretNumber 

				?	displayMessage("Too High")

				: 	displayMessage( "Too Low");
	
					scoreBox.textContent = --score;
	}
	else {
		scoreBox.textContent = --score;
	
		displayMessage("You Lost 👎");
	
		scoreBox.textContent = '0';
		}
	}
}
)


///? refactoring the display message


/// se define elements section



///?   reset game

againBtn.addEventListener('click', function(){

	score = 20;
	secretNumber  = Math.trunc(Math.random()*20) +1;

	numberBox.textContent = "?";
	scoreBox.textContent = score;
	document.querySelector('.guess').value = "";
	document.querySelector('body').style.backgroundColor = "#222"
	numberBox.style.width = '15rem'
	
	displayMessage('Start Guessing...');

})
