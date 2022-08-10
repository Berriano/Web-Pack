// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';




const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');




// -------------------------  Event Delegation  --------------------------- //




// -------------  Page Navigation  - without event delegation  ------------ //



/*


/// select all the navigation links



document.querySelectorAll('.nav__link').forEach(function (el) {


	/// add eventListener to each link


	el.addEventListener('click', function (e) {


		/// stop the default scrolling


		e.preventDefault();


		/// get the href attribute of the current element in the foreach loop
		/// and store in a variable

		//! #section--1
		//! #section--2
		//! #section--3


		const id = this.getAttribute('href');


		/// select each individual id, and smooth scroll to it

		//! #section--1
		//! #section--2
		//! #section--3


		document.querySelector(id).scrollIntoView({ behavior: 'smooth' })


		//! THIS WAY ADDS AN EVENTLISTENER TO EACH OF THE ELEMENTS - 
		//! INCREASING THE AMOUNT OF CODE USED (NOT DRY) !!!



	})
})



*/



// -------------  Page Navigation  - with event delegation  ------------ //


/// Add event listener to common parent element i.e <ul class="nav__links">


const navLinks = document.querySelector('.nav__links');


navLinks.addEventListener('click', function (e) {


	e.preventDefault();


	/// Determine which element (link) originated (called) the event when clicked
	/// using e.target

	console.log(e.target);

	// <a class="nav__link" href="section--(1,2,3)">text</a>



	// ----- Matching startegy for each link ----- //

	/// (and not the empty space inside <ul class="nav__links">)


	if (e.target.classList.contains('nav__link')) {



		/// get the href attribute of each event.target and store in a variable


		const id = e.target.getAttribute('href');

		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

	}

})





// -------------------- Smooth Scrolling -------------------- //



/// learn more link


btnScrollTo.addEventListener('click', function (e) {

	const s1Coords = section1.getBoundingClientRect();

	section1.scrollIntoView({ behavior: 'smooth' });



})




// ---------------   Modal EventListeners   ----------------- //



/// Modal window



const openModal = function (e) {

	e.preventDefault();

	modal.classList.remove('hidden');
	overlay.classList.remove('hidden');



};

const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');


};



btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


document.addEventListener('keydown', function (e) {
	if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal();
	}
});

