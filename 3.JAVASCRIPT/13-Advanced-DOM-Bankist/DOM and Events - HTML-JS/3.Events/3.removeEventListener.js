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



// ----------------------  RemoveEventListener()  --------------------- //



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


