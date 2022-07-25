// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


const message = document.createElement('div');

const header = document.querySelector('.header');



message.classList.add('cookie-message');

message.innerHTML = 'We use cookies to annoy you . <button class="btn btn--close-cookie">Got It!</button>';

header.append(message);




// --------------------------- Delete Elements --------------------------- //



/// add an eventlistener to the created message above using the innerHTML class


document.querySelector('.btn--close-cookie').addEventListener('click', function () {


	/// remove the created element using element.remove()


	message.remove();


})