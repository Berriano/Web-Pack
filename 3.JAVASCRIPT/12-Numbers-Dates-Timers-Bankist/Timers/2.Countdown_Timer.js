// -----------------------------  Countdown  ----------------------------- //
// -------------------------------  Timers ------------------------------- //



'use strict';


const labelTimer = document.querySelector('.timer');


// ----------------------------- Logout timer ------------------------------ //



/// create a function for the logout timer


const startLogoutTimer = function () {



	/// set timer to 5 minutes


	let time = 10;



	/// name the timer function to be able to use clearInterval()

	const timer = setInterval(function () {

		/// calculate minutes and seconds


		const min = String(Math.floor(time / 60)).padStart(2, '0');

		//! 100 / 60 = 1.66666 etc


		const sec = String(Math.floor(time % 60)).padStart(2, 0);

		//! 100 / 60 = 1 with 40 remainder
		//! 99 / 60 = 1 with 39 remainder
		//! 98 / 60 = 1 with 38 remainder etc etc...



		/// In each call, print the remaining time to UI


		// const labelTimer = document.querySelector('.time');


		/// create a template literal with the values from min and sec


		labelTimer.textContent = `${min}:${sec}`;



		/// when reaches 0 , stop time


		if (time === 0) {

			clearInterval(timer);

			labelTimer.style.opacity = 0;
		}



		/// decrease time by 1 second


		time--;


		/// Call time every second

	}, 1000);



}

/// call the function in the login event listener


startLogoutTimer();