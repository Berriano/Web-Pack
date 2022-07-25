// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


// --------------------- Creating / inserting elements ----------------------- //



/// .insertAdjacentHTML already covered in previous DOM section




// ---------- createElement() ------------- //



/// create a div element(DOM Object)



const message = document.createElement('div');




/// add a class to it


message.classList.add('cookie-message');




/// add some text to it using textContent



// message.textContent = "We use cookies to annoy you";




/// add some html using innerHTML



message.innerHTML = 'We use cookies to annoy you . <button class="btn btn--close-cookie">Got It!</button>';




/// select header elememt and prepend message to it



const header = document.querySelector('.header');


///? header.prepend(message);


//! prepend inserts it as the first child in the header



/// append message to it


// header.append(message);


//! prepend inserts it as the last child in the header


//! MESSAGE IS LIVE IN THE DOM, SO CANNOT EXIST MORE THAN ONCE -
//! SO LAST COMMAND WILL BE APPLIED LIKE CSS





// -------- using before and after -------- //



/// will not insert inside the header but before/afetr it



/// insert element BEFORE the header element


header.before(message);



/// insert element AFTER the header element


header.after(message);




