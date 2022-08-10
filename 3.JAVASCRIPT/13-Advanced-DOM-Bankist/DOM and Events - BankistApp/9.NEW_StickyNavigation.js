// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');

const navLinks = document.querySelector('.nav__links');


const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const nav = document.querySelector('.nav');




// ------------------------  Sticky Navigation  (NEW) ------------------------- //


//! New which uses intersectionObserver API



// -------------------- Create new intersectionObserve ------------------------ //
// --------------- pass in a callback function and object of options ---------- //



/// create a call back to be used in the API, setting the classList to the element


const obsCallback = function (entries, observer) {


	entries.forEach(entry => console.log(entry)

	)
}




// --------------------------------- Options ------------------------------- //




//-- root:


/// The element that is used as the viewport for checking visibility of the target.
/// Must be the ancestor of the target.
/// Defaults to the browser viewport if not specified or if null.



//-- threshold:


/// Either a single number or an array of numbers which indicate at what percentage of 
/// the target's visibility the observer's callback should be executed. 
//(intersection ratio)


const obsOptions = {

	root: null, 		// set to null for whole viewport

	// threshold: 0.1 	
	threshold: [0, 0.2]

	//  the callback is triggered when the values are reached coming into the view, 
	//  and out of the view

	//! intersection is false when none of the section is in the viewport


};




// ------------------- Observer method stored in a variable ------------------ //



/// use the callback and the options in the API


const observer = new IntersectionObserver(obsCallback, obsOptions)





// ------------------------- set observe to the section ---------------------- //



observer.observe(section1);








/// navigation becomes sticky when header is out of view



observer.observe(document.querySelector('.header'));







// ----------------------- Passing Handler Arguements ------------------------- //




const handleHover = function (event) {


	if (event.target.classList.contains('nav__link')) {


		const link = event.target;

		const siblings = link.closest('.nav').querySelectorAll('.nav__link');

		const logo = link.closest('.nav').querySelector('img');


		siblings.forEach(sibling => {

			if (sibling !== link) {

				sibling.style.opacity = this;

			}

			logo.style.opacity = this;

		})
	}

}


nav.addEventListener('mouseover', handleHover.bind(0.5))


nav.addEventListener('mouseout', handleHover.bind(1))




// ----------------------------  Tabbed Component  ------------------------------ //




tabsContainer.addEventListener('click', function (e) {


	const clicked = e.target.closest('.operations__tab');

	if (!clicked) return;

	tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

	clicked.classList.add('operations__tab--active');

	tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));

	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');



})





// -----------------  Page Navigation - with event delegation  ----------------- //



navLinks.addEventListener('click', function (e) {


	e.preventDefault();



	if (e.target.classList.contains('nav__link')) {


		const id = e.target.getAttribute('href');

		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

	}

})




// ----------------------------  Smooth Scrolling  ---------------------------- //




btnScrollTo.addEventListener('click', function (e) {

	const s1Coords = section1.getBoundingClientRect();

	section1.scrollIntoView({ behavior: 'smooth' });



})




// -------------------------   Modal EventListeners   ------------------------- //




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

