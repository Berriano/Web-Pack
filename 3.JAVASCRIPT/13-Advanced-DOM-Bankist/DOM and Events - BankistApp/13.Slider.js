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

const allSections = document.querySelectorAll('.section');

const imgTargets = document.querySelectorAll('img[data-src]');






// --------------------  Slider / Carousel Component  -------------------- //




// ----------------------------   Slider Pt 1 ---------------------------- //


const slider = document.querySelector('.slider');

const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');



let curSlide = 0;


const maxSlides = slides.length;



const gotoSlide = function (numSlide) {

	slides.forEach((slide, index) =>

		slide.style.transform = `translateX(${(index - numSlide) * 100}%)`


	)

}



gotoSlide(0);



btnRight.addEventListener('click', function () {


	if (curSlide === maxSlides - 1) {

		curSlide = 0;

	}

	else curSlide++;


	gotoSlide(curSlide);
	activeDot(curSlide);

}

)


btnLeft.addEventListener('click', function () {


	if (curSlide === 0) {

		curSlide = maxSlides - 1;
	}


	else curSlide--;

	gotoSlide(curSlide);

	activeDot(curSlide);

})





// ----------------------------   Slider Pt 2 ---------------------------- //




/// function for previous slide from code above(btnLeft)



const prevSlide = function () {

	if (curSlide === 0) {

		curSlide = maxSlides - 1;
	}


	else curSlide--;

	gotoSlide(curSlide);

	activeDot(curSlide);

}



/// function for next slide from code above(btnRight)



const nextSlide = function () {


	if (curSlide === maxSlides - 1) {

		curSlide = 0;

	}

	else curSlide++;


	gotoSlide(curSlide);

	activeDot(curSlide);



}





/// set a keyboard event using the document


document.addEventListener('keydown', function (event) {


	console.log(event);


	if (event.key === 'ArrowLeft') prevSlide();



	/// use short circuting


	event.key === 'ArrowRight' && nextSlide();


})





/// Use the empty div created in the html called 'dots' to add the dots to the page



const dotContainer = document.querySelector('.dots');



/// Use a function to create the dots



const createDots = function () {


	/// so foreach slide create a dot



	//! only need the index 

	slides.forEach(function (_, index) {


		dotContainer.insertAdjacentHTML('beforeend',

			`<button class="dots__dot" data-slide="${index}"></button>`)



	})


}


createDots();


/// use event delegation to add click to container, but only called when dot is clicked



dotContainer.addEventListener('click', function (event) {

	if (event.target.classList.contains('dots__dot')) {

		/// set the slide number to a variable {possible to use destructuring- but havent!!}

		const slide = event.target.dataset.slide;

		gotoSlide(slide);

		activeDot(slide);

	}
})



/// highlight the active image with a different dot



const activeDot = function (slide) {

	document.querySelectorAll('.dots__dot').forEach(function (dot) {

		dot.classList.remove('dots__dot--active');


		/// use dataset as a querySelector using sq brackets

		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');


	})

}


//! FUNCTION NEED TO BE CALLED ON THE NEXT/PREV SLIDE EVENT AND WHEN PAGE LOADS WITH 0 

activeDot(0);








// -------------------------  Lazy Loading Images ------------------------- //



const loadImg = function (entries, observer) {

	const [entry] = entries;


	if (!entry.isIntersecting) return;

	entry.target.src = entry.target.dataset.src;


	entry.target.addEventListener('load', function (e) {

		entry.target.classList.remove('lazy-img');

	})


	observer.unobserve(entry.target);


}


const options = {

	root: null,
	threshold: 0,
	rootMargin: '200px'


}


const imgObserver = new IntersectionObserver(loadImg, options)


imgTargets.forEach(img => {

	imgObserver.observe(img);

})






// ----------------------  Reveal sections on scroll----------------------- //




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

