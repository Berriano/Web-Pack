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




// --------------------------- mouseenter -------------------------------- //



const alink = document.querySelector('a');



/// event happens when the 'mouse enters' a certain element



// ----- onmouseenter way (OLDER) ----- //



///? alink.onmouseenter = (e) => alert('onmouseeneter way is OLDER!!');




// ----  addeventListener way (NEWER) ----- //



alink.addEventListener('mouseenter', function (e) {

	alert('addeventlistener:You hovered the link element!')

	//! only alerts on first link element


})



//! MULTIPLE FUNCTIONS CAN BE ADDED TO ADDEVENTLISTENER
//! ONLY THE LAST ONMOUSE EVENT IS APPLIED


