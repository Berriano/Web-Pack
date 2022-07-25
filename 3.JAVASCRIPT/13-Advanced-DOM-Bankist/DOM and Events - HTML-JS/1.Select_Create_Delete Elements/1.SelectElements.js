// --------------------------  DOM and Event Advanced  ------------------------- //
// --------------------------------- -------------- ---------------------------- //


'use strict';


// ----------------------- More ways to select elements ------------------------- //





// -------------------------- documentElement --------------------------- //



/// documentElement selects the entire html

//! used for setting css on the whole page


const docExample = document.documentElement;


console.log(docExample);

// <html>
// <head>...</head>
// <body>...</body>
// </html>





// ------- document.head or documenmt.body for each of the sections ------ //



const docBody = document.body;


console.log(docBody);


// <body>...</body>


const docHead = document.head;


console.log(docHead);


// <head>...</head>



/// to select all sections


const allSections = document.querySelectorAll('.section');

console.log(allSections);


// NodeList(2) [section.section, section.section]





/// to select sections by id


const idEl = document.getElementById('section--3');


console.log(idEl);


// returns the element selected by id





// ---------------------- getElementsByTagName() --------------------------- //



/// gets the specific elements specified i.e button and returns a html collection
/// NOT a nodelist (which is updated when the dom changes)



const allPs = document.getElementsByTagName('p');


console.log(allPs);


// HTMLCollection(5) [p.para, p.para, p.para, p.para, p.para]


//! selects all paragraphs and classNames/ids as a html collection



const allSecs = document.getElementsByTagName('section');


console.log(allSecs);


// HTMLCollection(4) [section.section, section.section, section#section--3, section.notOne, section--3: section#section--3]


//! selects all sections and classNames/ids as a html collection




// ---------------------- getElementsByClassName() --------------------------- //



/// gets the specific elements specified by classname i.e btn and returns a html collection
/// NOT a nodelist (which is updated when the dom changes)


const headingClass = document.getElementsByClassName('heading');

console.log(headingClass);

// HTMLCollection(2) [h1.heading, h1.heading]
