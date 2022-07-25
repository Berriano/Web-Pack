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




// ----------------------------  Attributes  -------------------------- //



/// select the element to access its attributes


const logo = document.querySelector('.nav__logo');


/// use attribute name on the element to see its property


console.log(logo.height);


// 40 (40px)


console.log(logo.alt);


// Bankist logo - alt="Bankist logo" 



/// to get class have to use className


console.log(logo.className);


// nav__logo




/// use getAttribute() to access non-standard attributes

//! see added designer in html logo


console.log(logo.getAttribute('designer'));


// Berry




// ------------------  Set Attributes on html elements  ------------------ //



/// similar to setting attributes in  html



logo.className = "nav__new-logo";


//! changes css class and adds those styles




/// change the style of the ALL heading classes using forEach loop



const changeHeadings = document.querySelectorAll('.heading');

changeHeadings.forEach(heading => heading.className = 'heading__new');




// ------- Using the setAttribute() method -------- //



logo.setAttribute('id', 'new__logo-id')


// in the DOM html - id="new__logo-id"






// ------  Image src will get the url for the image in the html  ------- //


console.log(logo.src);

//! give absolute url


// http://127.0.0.1:5500/DOM%20and%20Events/2.Style_Attributes_Classes/img/logo.png


//! JS can only read standard attributes set in html


/// to get the src from the html - use getAttribute()



console.log(logo.getAttribute('src'));


// img/logo.png


//! give html url code




/// the same works for href links


const link = document.querySelector('.footer__link');


/// absolute url

console.log(link.href);

// http://127.0.0.1:5500/DOM%20and%20Events/2.Style_Attributes_Classes/2.Attributes.html#section--1

//! give absolute url




/// html code


console.log(link.getAttribute('href'));

// #section--1


//! gives id as written in html






// ---------------------    Data Attributes    --------------------- //



/// can only be used on html attributes that start with data
/// i.e data-version-number - as in the html



console.log(logo.dataset.versionNumber);

// 3.0

//! the data- (set) needs to be camelCase

