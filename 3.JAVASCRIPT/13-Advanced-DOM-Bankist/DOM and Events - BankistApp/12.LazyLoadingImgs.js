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




// -------------------------  Lazy Loading Images ------------------------- //




/// start by selecting all the images

//! use sq brackets like in CSS that selects multiple of the same - attribute selector


const imgTargets = document.querySelectorAll('img[data-src]');

//! so, images with the attribute data-src



/// callback for imgObserver


const loadImg = function (entries, observer) {

	const [entry] = entries;



	/// if imgs are not intersecting then stop callback function



	if (!entry.isIntersecting) return;



	/// replace the img src="img/digital-lazy.jpg" WITH data-src="img/digital.jpg"

	/// the current element being intersected's src = the data-src(using dataset) 



	entry.target.src = entry.target.dataset.src;



	/// remove lazy img blur not by removing the class immediatley (because of slow internet)


	// entry.target.classList.remove('lazy-img')


	/// but using the 'load' event to remove the lazy img class once its loaded


	entry.target.addEventListener('load', function (e) {

		entry.target.classList.remove('lazy-img');

	})


	//! this will not remove the blur until the good image is completley loaded



	/// stop the observer obsering the images


	observer.unobserve(entry.target);



}



/// optoins for imgObserver


const options = {

	root: null,
	threshold: 0,

	/// set root-margin so images load before ethey appear on screen

	rootMargin: '200px'

	//! images will load 200px under the viewport


}




/// use the observer to get the img details


const imgObserver = new IntersectionObserver(loadImg, options)



/// loop imgs and call observer on each for each of the imgs details



imgTargets.forEach(img => {


	imgObserver.observe(img);



})





























// ----------------------  Reveal sections on scroll----------------------- //




const allSections = document.querySelectorAll('.section');



const revealSection = function (entries, observer) {


	const [entry] = entries;

	// console.log(entry);

	if (!entry.isIntersecting) return;

	entry.target.classList.remove('section--hidden');

	observer.unobserve(entry.target);


}


const sectionObserver = new IntersectionObserver(revealSection, {

	root: null,
	threshold: 0.15

})



allSections.forEach(function (section) {

	sectionObserver.observe(section);

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

