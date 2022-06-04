'use strict';

/// selecting elements

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');


score0El.textContent = 0;
score1El.textContent = 0;

/// Variables 

let scores = [0,0];

let currentScore = 0;
let activePlayer = 0;

/// boolean so game can be finished

///? playing = true whilst game is on

let playing = true;

/// DRY functions



function switchPlayer(){

					document.getElementById(`current--${activePlayer}`).textContent = 0;
					activePlayer = activePlayer === 0 ? 1 : 0 ;
					currentScore = 0;
					player0El.classList.toggle('player--active');
					player1El.classList.toggle('player--active');
					}




/// dice functionality

///? Create a class in CSS (.hidden{display:none})


///? Create an element using the dice class

const diceEl = document.querySelector('.dice');


///? Add the 'hidden' CSS to the dice element using classlist.add
///? to hide the dice 

diceEl.classList.add('hidden');




//-- 1. Generate random dice roll -- //



///? Select 'Roll Dice' button

const diceBtn = document.querySelector('.btn--roll');



///? add event to button

diceBtn.addEventListener('click', function(){


// ---------- 5. end game added !! -------- //

///? from below

///? add a boolean to state whether game is playing or not

// let playing = true;


///? add if/else to decide what to do
///? if playing is is true or false


if(playing){ 

	///? or if playing === true
	
	//! execute the following code block

///? Use Math trunc and random


const dice =  Math.trunc(Math.random()*6)+1;



// -- 2. Display dice -- //


///? remove hidden class to reveal dice pic again


diceEl.classList.remove('hidden');


///? use element.src= (newPIC.PNG) to change pic of pic


diceEl.src = (`dice-${dice}.png`)



// -- 3. Check if 1 rolled and switch player if true -- //



// -- 3.1 Check if 1 rolled -- //


///? if dice is not a 1 (!==1)


if(dice !== 1){



// -- 3.2 Display current score -- //


///? set a variable for currentScore out of eventListener * see variables
///? add dice value to current score


currentScore += dice;


///? display current score using activeplayer variable with the elements id
///? along with setting the textContent to currentScore


document.getElementById(`current--${activePlayer}`).textContent = currentScore;

}

// -- 3.3 Switching player -- //


else{

///? create variable called activePlayer

// let activePlayer = 0;   **see variables


///? set activePlayer score back to 0

document.getElementById(`current--${activePlayer}`).textContent = 0;


//////////////// DRY!!!! -- refactor player switch as its reusable code ////////////////

///!so instead of this

/*
///? use ternary operator to set the player in the else statement(i.e when dice ===1 )

activePlayer = activePlayer === 0 ? 1 : 0 ;

///?  basically if active player = 0 then become 1
///?  else become 0(because it must have been 1)


///? reset current score to 0

currentScore = 0;


///?  to get the CSS background to change you have to switch the class name
///?  from the current player to the next player (player--active)

// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');

///? use classlist.toggle to add the class if its not there....
///? but will remove it, if it is there


player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
*/


//! --------------------  ** Use this : -----------------------//

		switchPlayer();

		//! --- --- //
			}
		}
	


}	//! 5. end game? finishes here for roll dice btn

)
// -- 4. 'Hold' button -- //


///? query selected button - add event listener


const holdBtn = document.querySelector('.btn--hold');


holdBtn.addEventListener('click' , function(){

// ---------- 5. end game added here too !! -------- //


if(playing){

// -- 4.1 Add current score to activeplayer score -- //
// ------- and check for winner (100 points) ------- //


///? use scores array [0,0] from variables and activePlayer value 
///? to index array, then add the current score to the score at that index


			scores[activePlayer] += currentScore;
//!	scores[1] = scores[1] + currentScore  ( if activePLayers is 1)



///? Display accumalated Score


document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]


///? Check if score is >= 100


if(scores[activePlayer] >= 100){


///? set playing to false if there is a winner


playing = false;


///? select the player active class and add the player winner class


document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');


///? select the player active class and remove the player active class


document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');


///? add hidden style to dice to hide it again


diceEl.classList.add('hidden');
}

///? so if no winner yet run the else block code

else{

//////////////// DRY!!!! -- refactor player switch as its reusable code ////////////////

//! so instead of this
/*
///? reset current score back to 0

document.getElementById(`current--${activePlayer}`).textContent = 0;

currentScore = 0;

///? change active player

activePlayer = activePlayer === 0 ? 1 : 0 ;


///? toggle player CSS

player0El.classList.toggle('player--active');
player1El.classList.toggle('player--active');
*/

//! --------------------------------  ** Use this : -------------------------------- //


	switchPlayer();
		}
		//! --- --- //
	}

} //! 5. end game ends here too

)


// -------------- Start 'New Game'  ----------- //
// ------- Basically reset everything --------- //


const newGameBtn = document.querySelector('.btn--new');


/// This code can be re-used as an initial game and a new game function

//! made into function below - DRY!!!!!

// newGameBtn.addEventListener('click',  function(){

// 	score0El.textContent = 0;
// 	score1El.textContent = 0;

// player0El.classList.remove('player--winner');
// player1El.classList.remove('player--winner');
// player1El.classList.remove('player--active');
// player0El.classList.add('player--active');

// 	scores = [0,0];
// 	currentScore = 0;
// 	activePlayer = 0;
// 	current0El.textContent = 0;
// 	current1El.textContent = 0;
// 	playing = true;

// });


/// Sooo create a function and pass it into the event Handler 
/// (can also be used to start the game too, but dont worry about that )


const newGameFunc = function(){

	score0El.textContent = 0;
	score1El.textContent = 0;

	player0El.classList.remove('player--winner');
	player1El.classList.remove('player--winner');
	player1El.classList.remove('player--active');
	player0El.classList.add('player--active');

	scores = [0,0];
	currentScore = 0;
	activePlayer = 0;
	current0El.textContent = 0;
	current1El.textContent = 0;
	playing = true;

}

/// and pass it into newGameBtn event handler

newGameBtn.addEventListener('click', newGameFunc);