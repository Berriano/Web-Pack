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





// ------------------------- Menu Fade Animation ------------------------------ //



/// Select the parent element for the links AND the logo


const nav = document.querySelector('.nav');




nav.addEventListener('mouseover', function (event) {


	if (event.target.classList.contains('nav__link')) {


		/// make the mouseover'd element the link variable


		const link = event.target;


		/// find ALL the siblings of the link, using qs on the nav to find descendants


		const siblings = link.closest('.nav').querySelectorAll('.nav__link');


		/// find the logo using the img tag


		const logo = link.closest('.nav').querySelector('img');



		siblings.forEach(sibling => {

			if (sibling !== link) {

				sibling.style.opacity = 0.5;
			}

			logo.style.opacity = 0.5;

		})
	}
})



nav.addEventListener('mouseout', function (event) {


	if (event.target.classList.contains('nav__link')) {

		const link = event.target;

		const siblings = link.closest('.nav').querySelectorAll('.nav__link');

		const logo = link.closest('.nav').querySelector('img');


		siblings.forEach(sibling => {

			if (sibling !== link) {

				sibling.style.opacity = 1;
			}

			logo.style.opacity = 1;

		}
		)
	}
})







// ----------------------------  Tabbed Component  ------------------------------ //





tabsContainer.addEventListener('click', function (e) {


	const clicked = e.target.closest('.operations__tab');

	if (!clicked) return;

	tabs.forEach(tab => tab.classList.remove('operations__tab--active'));

	clicked.classList.add('operations__tab--active');

	tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));

	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');



})








// ------  Page Navigation - with event delegation  ------ //



/// Scroll to link





navLinks.addEventListener('click', function (e) {


	e.preventDefault();



	if (e.target.classList.contains('nav__link')) {


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

