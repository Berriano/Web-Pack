// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const navLinks = document.querySelector('.nav__links');


const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const nav = document.querySelector('.nav');

const header = document.querySelector('.header');




// ----------------------  Reveal sections on scroll----------------------- //



/// assign all sections


const allSections = document.querySelectorAll('.section');



/// callback - what to do with entry results

//! Instances of IntersectionObserverEntry are delivered to an IntersectionObserver callback in its entries parameter; 


const revealSection = function (entries, observer) {


	//! this is an entry 

	//! IntersectionObserverEntry {time: 86.29999999701977, rootBounds: DOMRectReadOnly, boundingClientRect: DOMRectReadOnly, intersectionRect: DOMRectReadOnly, isIntersecting: false, …}



	/// assign the intersectionobserver entry results to an array by destructuring


	const [entry] = entries;

	console.log(entry);


	/// use the array to find the target, and say if it isnot intersecting - return(stop)


	if (!entry.isIntersecting) return;

	/// else -


	/// use the classlist to manipulate the target i.e add/remove - hidden/show etc

	entry.target.classList.remove('section--hidden');


	/// once target is triggered and class is removed - 
	/// unobserve the element using observer parameter 


	observer.unobserve(entry.target);


}


/// observer method


const sectionObserver = new IntersectionObserver(revealSection, {

	root: null,
	threshold: 0.15

})



/// loop over sections


allSections.forEach(function (section) {


	/// call observer on each section


	sectionObserver.observe(section);


	/// then add the hidden class to each section


	section.classList.add('section--hidden');


}
)




// ----------------------  Sticky Navigation  (ACTUAL) ----------------------- //




const stickyNav = function (entries) {


	const [entry] = entries;

	if (!entry.isIntersecting)

		nav.classList.add('sticky');

	else
		nav.classList.remove('sticky');


};


const observerOptions = {
	root: null,
	threshold: [0],
	rootMargin: `-${nav.getBoundingClientRect().height}px`

}



const stickyNavObserver = new IntersectionObserver(stickyNav, observerOptions)


stickyNavObserver.observe(header);



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

