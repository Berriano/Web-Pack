// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';



// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {

	e.preventDefault();

	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');



};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');


};


// -----------   Modal EventListeners   -------------- //



btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});






// -------------------- Smooth Scrolling -------------------- //



const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.getElementById('section--1');




// ------------------------------ OLDER METHOD ------------------------------- //





/// getBoundingClientRect() gives the values of the section1 rectangle on the
/// current viewport

//! i.e (in px) x-coords from left, y-coords from top, width, height, distance from top/btm


btnScrollTo.addEventListener('click', function (e) {



	const s1Coords = section1.getBoundingClientRect();


	//! gives us the co-ordinates of section 1

	console.log(s1Coords);



	/// then use those co-ordinates to scroll to the line across the page



	///? window.scrollTo(s1Coords.left, s1Coords.top);


	//! onclick, the window will scroll to the top/left coords of section 1	



	/// The main problem here is the coords are relative to the viewport, not the document
	///  so .... if the page has scrolled already, the values will be off


	/// to counteract this, add the pageYoffset to the top coords





	// ----------------------------- Scrolling ---------------------------------- //



	console.log(window.pageYOffset, s1Coords.top + window.pageYOffset);


	//! s1coords.top + window.pageYoffset =  currentPosition + current vh
	//! total should always come to 628



	///? window.scrollTo(s1Coords.left, s1Coords.top + window.pageYOffset);




	/// EXPLANATION OF SCROLLTO()


	///? 1.) Section 1 has current X and Y coordinates (0px, 628px)

	///? 2.) pageXOffset and pageYOffset are (0px, 0px). Because they are not moved yet.

	///? 3.) scroll up 100px, new value will be (0px, 528px) for step1 & (0px, 100px) for step2.

	///? 4.) when you do window.scrollTo (0px(step1) + 0px(step2) , 528px(step1) + 100px(step2))

	///? 5.) so the total you are scrolling window.scrollTo (0px , 628px).

	///? (so, in conclusion, Whatever you have loose in step1, you are gaining the same value with help of step2).






	// --------------------  Use Object parameters {options}  -------------------- //




	///? top: Specifies the number of pixels along the Y axis to scroll the window or element.


	///? left: Specifies the number of pixels along the X axis to scroll the window or element.


	///? behavior: Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).




	/// So instead of above scrollTo() method, use the options object as arguemnets


	/*
	window.scrollTo({

		left: s1Coords.left + window.pageXOffset,

		top: s1Coords.top + window.pageYOffset,

		behavior: 'smooth'

	});

*/

	// --------------------  NEWER / EASIER / QUICKER METHOD  -------------------- //



	section1.scrollIntoView({ behavior: 'smooth' });




})