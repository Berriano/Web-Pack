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




// ------------------------------ Styles ---------------------------- //



/// js styles are classed as inline styles, which take priority


/// element.style then camelCase style-property = "String"



message.style.backgroundColor = "#373";


//! div background turns green



/// message.style.width = "120%";


//! width set to 120% of the container





/// can only get the properties of styles set inline



console.log(message.style.backgroundColor);

// rgb(51, 119, 51)




console.log(message.style.fontFamily);

// (empty line)




/// to get styles of an element from the CSS


//! will give the styles that represented in the DOM - not neseccarliy from the CSS



const messageColor = getComputedStyle(message).color;


console.log(messageColor);


// rgb(0, 0, 0)




// ------------------- Adding values to computedStyles ------------------- //


/// set the styles on the element



message.style.width = Number.parseFloat(getComputedStyle(message).width, 10) - 400 + 'px';


//! convert the computed style to a decimal number(parseFloat), at 10 redix...

//! add the 40 to this number, then convert back to a string using + 'string'


// 68.1818px string






// ---------------  Accessing root custom varibale in js   ---------------- //



/// the CSS root is the same as the js.document

/// use setProprty('custom-variable-name','new-style') on the documentElement



document.documentElement.style.setProperty('--color-tertiary-darker', '#444')



