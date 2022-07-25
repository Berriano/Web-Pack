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




// ----------------------------All Events Page -------------------------------- //



const alink = document.querySelector('a');




// ----------------------------- mouseenter --------------------------------- //



/// event happens when the 'mouse enters' a certain element



// ----- onmouseenter way (OLDER) ----- //



///? alink.onmouseenter = (e) => alert('onmouseeneter way is OLDER!!');




// ----  addeventListener way (NEWER) ----- //



//!           COMMENTED OUT FOR LATER EXERCISES          //!


// alink.addEventListener('mouseenter', function (e) {

// 	alert('addeventlistener:You hovered the link element!')

// 	//! only alerts on first link element


// })



//! MULTIPLE FUNCTIONS CAN BE ADDED TO ADDEVENTLISTENER
//! ONLY THE LAST ONMOUSE EVENT IS APPLIED




// ---------------------  RemoveEventListener --------------------- //



const stylesHeading = document.querySelector('.styles');


/// Add removeEventlistener to its own function so when it gets called, it runs...
/// then removes itself


const stylesAlert = (e) => {

	alert('Styles has been hovered!!');

	stylesHeading.removeEventListener('mouseenter', stylesAlert)

}


stylesHeading.addEventListener('mouseenter', stylesAlert)





// -------------- Use setTimeout() and remove event together -------------- //



const para = document.querySelector('.paraRemove');


const paraAlert = function (e) {

	alert('You hovered the paragraph');

}


para.addEventListener('mouseenter', paraAlert);


setTimeout(() => para.removeEventListener('mouseenter', paraAlert), 5000);


//! you can hover the paragraph for 5 seconds to call the event, then it will be removed





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


	/// this keyword applies to navLink


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

	/// USE 3RD PARAMETER SETT O TRUE TO ACTIVATE CAPTURING - WILL THEN HAPPEN FIRST 
	/// WHEN CLICK TRAVELS DOWN FRO THE DOCUMENT, WHILST 1 AND 2 GET IT FROM BUBBLING PHASE

	//! ALSO STOPS THE PROPAGATION FROM 1

	// , true

)


//! the target is where the click originated,
//! currentTarget is the location of the eventHandler


///  e.currentTarget === this 


