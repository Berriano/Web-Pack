// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const message = document.createElement('div');
const header = document.querySelector('.header');

message.classList.add('cookie-message');

message.innerHTML = 'We use cookies to annoy you . <button class="btn btn--close-cookie" >Got It!</button>';

header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', function () {

	message.remove();

});




// -------------------------- Event Propagation --------------------------- //



/// generate random number



const randomNum = function (min, max) {

	let num = Math.floor(Math.random() * (max - min + 1) + min);

	return num;
}



// ----------------- generate random color ------------------------ //


const randomCol = () => `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(0, 255)})`;


const randomCol1 = randomCol();






// ----  Change background colors using parent element eventlisteners  ---- //




/// select all the parent elements of the link, including the link



const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');
const navLink = document.querySelector('.nav__link');



// ----- BUBBLING EVENTS ----- //



/// 1. CLICKING ON THE LINK WILL CALL ALL 3 EVENTS NAVLINK, NAVLIST AND NAV

//! UNLESS YOU STOP PROAGATION(BASICALLY PUT A WALL UNDERNEATH SO CLICK DOESNT PASS THRU)


navLink.addEventListener('click', function (e) {

	this.style.backgroundColor = randomCol();

	console.log('Link', e.target, e.currentTarget);

	// e.stopPropagation();


})



/// 2. CLICKING ON THE LIST AREA WILL CALL ALL JUST 2 EVENTS
/// THE NAVLIST AND NAV


navList.addEventListener('click', function (e) {

	this.style.backgroundColor = randomCol();

	console.log('Container', e.target, e.currentTarget);

	// e.stopPropagation();

})



// ------ CAPTURING EVENTS ------ //



/// 3. CLICKING ON THE NAV AREA WITH JUST TRIGGER THE NAV AREA EVENT


nav.addEventListener('click', function (e) {

	this.style.backgroundColor = randomCol();

	console.log('nav', e.target, e.currentTarget);
}

	/// USE 3RD PARAMETER SET TO TRUE TO ACTIVATE CAPTURING - WILL THEN HAPPEN FIRST 
	/// WHEN CLICK TRAVELS DOWN FRO THE DOCUMENT, WHILST 1 AND 2 GET IT FROM BUBBLING PHASE

	//! ALSO STOPS THE PROPAGATION FROM 1

	, true

)


//! the target is where the click originated,
//! currentTarget is the location of the eventHandler


///  e.currentTarget === this 


