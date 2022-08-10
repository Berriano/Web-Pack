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


const slider = document.querySelector('.slider');


// slider.style.transform = `scale(0.35) translateX(-1300px)`;
// slider.style.overflow = 'visible';




// ----------------------------   Slider  ---------------------------- //


const slides = document.querySelectorAll('.slide');

const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');


/// Assign the current slide to a number/ variable



let curSlide = 0;



/// set maximun amount of slide to know when it ends


const maxSlides = slides.length;



/// translate each slide by 100% each (1 = 100%, 2 = 200% etc)



// slides.forEach((slide, index) =>


// 	slide.style.transform = `translateX(${index * 100}%)`


// )

//! AS THIS TRANSLATE CODE ⬆ IS REUSED A LOT, PUT INTO ITS OWN FUNCTION


//! Then call the function at the start to replace this foreach callback *



/// Reusable slider function


const gotoSlide = function (numSlide) {


	slides.forEach((slide, index) =>


		slide.style.transform = `translateX(${(index - numSlide) * 100}%)`


	)

}


//! *

gotoSlide(0);



/// Right click slider




btnRight.addEventListener('click', function () {


	/// when clicked - 

	/// code block to set current slide number


	if (curSlide === maxSlides - 1) {

		curSlide = 0;

		//! to start the loop over again

	}



	/// else increase current slide by 1



	else curSlide++;



	// slides.forEach((slide, index) =>


	// 	slide.style.transform = `translateX(${(index - curSlide) * 100}%)`


	// )


	//! replace foreach block with the reusable function and curslide arguemnet


	gotoSlide(curSlide);


}


)



/// for the btnLeft - decraese the curslide value



btnLeft.addEventListener('click', function () {


	if (curSlide === 0) {

		curSlide = maxSlides - 1;
	}


	else curSlide--;

	gotoSlide(curSlide);

})






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