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




// ----------------------  Sticky Navigation  (ACTUAL) ----------------------- //



/// navigation becomes sticky when header is out of view

///! condition ⬇

const stickyNav = function (entries) {

	/// an entry is made when the threshold is triggered -  so save to a variable


	const [entry] = entries;

	console.log(entry);


	/// use the variable to check whether the element is intersecting the viewport



	if (!entry.isIntersecting)

		nav.classList.add('sticky');

	else
		nav.classList.remove('sticky');



};


//! options 



const observerOptions = {

	root: null,
	threshold: [0],

	///  root margin add/minuses an amount of pixels to the threshold
	///  to start before/after the threshold is reached

	rootMargin: `-${nav.getBoundingClientRect().height}px`

	//! 90px is the nav height -  to keep dynamic use dynamic variable
}




const headerObserver = new IntersectionObserver(stickyNav, observerOptions);


/// observe on header

headerObserver.observe(document.querySelector('.header'));


//! takes the condition and options and applies to header



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

