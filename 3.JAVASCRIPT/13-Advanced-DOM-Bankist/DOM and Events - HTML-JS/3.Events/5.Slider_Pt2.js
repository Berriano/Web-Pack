// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const message = document.createElement('div');
const header = document.querySelector('.header');

const navList = document.querySelector('.nav__list');

const h1 = document.querySelector('h1');

const spanner = document.querySelector('.h1--span');


message.classList.add('cookie-message');





// message.innerHTML = 'We use cookies to annoy you . <button class="btn btn--close-cookie" >Got It!</button>';

// header.append(message);

// document.querySelector('.btn--close-cookie').addEventListener('click', function () {

// 	message.remove();

// });



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

		activeDot(curSlide);

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




// ------------------------ More Styling of page  ---------------------- //


h1.firstElementChild.style.color = 'cyan';

h1.lastElementChild.style.color = 'pink';


spanner.closest('.header').style.backgroundColor = 'rgb(208,191,255)'

spanner.closest('.header').style.backgroundColor = 'var(--gradient-primary)';


const allSiblings = navList.parentElement.children;


[...allSiblings].forEach(el => {


	if (el !== navList) {

		el.style.transform = 'translate(100px,200px)';

	}

})