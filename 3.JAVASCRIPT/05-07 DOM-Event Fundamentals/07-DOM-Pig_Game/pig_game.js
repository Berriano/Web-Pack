// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Fundamentals   -----------------------------//


'use strict';



// ---- Selecting elements  ---- //



const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');

const btnRoll = document.querySelector('.btn--roll');

const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');

const player1El = document.querySelector('.player--1');





///  get element by id


const score0El = document.getElementById('score--0');

const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');

const current1El = document.getElementById('current--1');



/// DRY functions


///?  switch player


const switchPlayer = function() {


    activePlayer = activePlayer === 0 ? 1 : 0;

    currentScore = 0;


    player0El.classList.toggle('player--active');

    player1El.classList.toggle('player--active');



}



///? initialization function



let playing;

let currentScore;

let activePlayer;

let scores;



const init = function() {


    /// set scores to zero



    score0El.textContent = 0;

    score1El.textContent = 0;


    /// create a currentscore which can be updated 



    currentScore = 0;



    /// create an activePLayer score to add to the player playing



    activePlayer = 0;




    ///  Use an array to hold current scores for both players



    scores = [0, 0];



    ///  set game to playing at start




    playing = true;




    ///  create a CSS 'hidden' class to hide dice





    /// reset values for game end 



    diceEl.classList.add('hidden');


    current0El.textContent = 0;
    current1El.textContent = 0;


    diceEl.classList.add('hidden');

    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');


}



/// initialize game


init();





// -------------------------- Roll dice function ---------------------------- //




btnRoll.addEventListener('click', function() {


    /// only execute code if playing = true


    if (playing) {




        /// 1. generate random dice roll



        let dice = Math.trunc(Math.random() * 6) + 1;



        /// 2.  display dice



        diceEl.classList.remove('hidden');



        //! CHANGE THE SRC OF THE IMAGE DISPLAYED

        diceEl.src = `dice-${dice}.png`;




        /// 3. check if roll is 1


        if (dice !== 1) {


            ///?  ADD DICE TO CURRENT SCORE


            currentScore += dice;


            ///?  DISPLAY CURRENT SCORE ON ACTIVE PLAYER 


            document.getElementById(`current--${activePlayer}`).textContent = currentScore;



            ///?  SWITCH TO NEXT PLAYER


        } else {



            /// set the currentscore back to zero if 1 is rolled



            document.getElementById(`current--${activePlayer}`).textContent = 0;



            /// change active player


            // } else if (activePlayer === 0) {

            //     activePlayer = 1;

            // } else if (activePlayer === 1)

            //     activePlayer = 0;


            //! SIMPLIFIED

            activePlayer = activePlayer === 0 ? 1 : 0;


            /// set current score at 0 for new player



            currentScore = 0;



            /// toggle active player class



            player0El.classList.toggle('player--active');

            player1El.classList.toggle('player--active');


        }

    }

});




// ------------------------- Hold score function ---------------------------- //



btnHold.addEventListener('click', function() {


    if (playing) {




        ///?  Add current score to players


        scores[activePlayer] += currentScore;

        // scores[0] = scores[0] + currentscore


        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];



        ///?  check if score is 100


        if (scores[activePlayer] >= 10) {


            playing = false;

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');


            diceEl.classList.add('hidden');


            ///?   switch player

        } else switchPlayer();

    }

})



// -------------------------  New game function ---------------------------- //



btnNew.addEventListener('click',  init);



