// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.getElementById('section--1');




// ----------------------------  Tabbed Component  ------------------------------ //




// -- select components -- //



const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');



// ----------------------------  Functionality ---------------------------- //




// ------------ Selecting each tab -------------- //




/// add the event handler to the container NOT to each tab



tabsContainer.addEventListener('click', function (e) {


	/// because of the span element, we cannot just select the e.target to click - 
	/// we have to use closest(.operations__tab) as span element has a different class


	// console.log(e.target);


	//! When btn text clicked - operations__tab class can be selected, BUT..
	//! when the span element is clicked, no class is selected



	/// closest method gets the closest specified parent class to the clicked event target



	const clicked = e.target.closest('.operations__tab');

	//! selects the button element instead of the span element


	// console.log(clicked);



	/// if the container is clicked it will search for the operations__tab class, which will 
	/// not exist and return null - 



	// ---- Use Gaurd clause --- //


	//! Older way


	// if (clicked) {

	// 	/// add the active classlist to the clicked element

	// 	clicked.classList.add('operations__content--active');


	// } else return;



	//! Modern way

	/// if clicked is falsy, then return (stop)


	if (!clicked) return;



	/// remove active tab from all tab elements when clicked



	tabs.forEach(tab => tab.classList.remove('operations__tab--active'))



	/// and then add the active class only to the clicked element



	clicked.classList.add('operations__tab--active');



	// ----------------------  Activating content area  -------------------------- //



	// console.log(clicked.dataset.tab);


	/// dataset = the data attribute in the html(data-tab for this) 
	/// then after the dot is whats after the dash (tab for this)


	//! e.target-operation__tab.data"set".tab="1,2,3"



	/// make sure the active class is removed from the elements



	tabsContent.forEach(tab => tab.classList.remove('operations__content--active'));



	/// using querySelector, select the operations__content--${num} for the selected tab


	//! when clicking the target, the data-tab number gets assigned to the querySelector


	/// then add the active class to it using classlist.add



	document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');





})












// ------  Page Navigation - with event delegation  ------ //



/// Scroll to link


const navLinks = document.querySelector('.nav__links');


navLinks.addEventListener('click', function (e) {


	e.preventDefault();

	console.log(e.target);

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

