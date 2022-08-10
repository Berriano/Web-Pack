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





// ----------------------------  DOMContentLoaded ---------------------------- //



//! * See Jonas video and HTML script


document.addEventListener('DOMContentLoaded', function (e) {

	console.log('HTML Parsed and DOM tree built', e);
})




// ----------------------------   Slider ---------------------------- //


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




const prevSlide = function () {

	if (curSlide === 0) {

		curSlide = maxSlides - 1;
	}


	else curSlide--;

	gotoSlide(curSlide);

	activeDot(curSlide);

}





const nextSlide = function () {


	if (curSlide === maxSlides - 1) {

		curSlide = 0;

	}

	else curSlide++;


	gotoSlide(curSlide);

	activeDot(curSlide);



}




document.addEventListener('keydown', function (event) {


	console.log(event);


	if (event.key === 'ArrowLeft') prevSlide();


	event.key === 'ArrowRight' && nextSlide();


})




const dotContainer = document.querySelector('.dots');


const createDots = function () {


	slides.forEach(function (_, index) {


		dotContainer.insertAdjacentHTML('beforeend',

			`<button class="dots__dot" data-slide="${index}"></button>`)



	})


}


createDots();




dotContainer.addEventListener('click', function (event) {

	if (event.target.classList.contains('dots__dot')) {

		const slide = event.target.dataset.slide;

		gotoSlide(slide);

		activeDot(curSlide);

	}
})




const activeDot = function (slide) {

	document.querySelectorAll('.dots__dot').forEach(function (dot) {

		dot.classList.remove('dots__dot--active');


		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');


	})

}




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