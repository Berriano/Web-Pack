// ------------------------    DOM and Event    ----------------------------//
// --------------------------   Fundamentals   -----------------------------//



'use strict';



//--------------------------  querySelector() ------------------------------//



/// to select class and id tags and return the first element
/// for the given CSS selector



console.log(document.querySelector('.message'));


//   <p class="message">Start guessing...</p>





//---------------------  querySelector().textContent ------------------------//




///  to then get the text content of the element



console.log(document.querySelector('.message').textContent);


//   Start guessing...



///  to then set the text content of the element



document.querySelector('.message').textContent = 'Correct Number!!';


console.log(document.querySelector('.message'));



///  select the div element in the html with the class 'number' 



document.querySelector('.number').textContent = 13;



///  select the div element in the html with the class 'score' 



document.querySelector('.score').textContent = 10;



///  to get the value of the input field element



document.querySelector('.guess').value;



///  to set the value of the input field element



document.querySelector('.guess').value = 23;



///  to get the DOM manipulated value of the input field element set above



console.log(document.querySelector('.guess').value);





//--------------------------  addEventListener ----------------------------//





///  select the 'check' button class and add the eventListener


/// pass in the type of event i.e 'click'


/// specify the reaction to the click event by defining a function (event handler)


//! the function only gets called when the click event happens


//!  ANY VALUE FROM A UI OR INPUT FIELD IS USUALLY A STRING, SO CONVERT TO A NUMBER



document.querySelector('.check').addEventListener('click',


    function() {


        ///  when check is clicked, the input field value is saved to guess variable


        const guess = Number(document.querySelector('.guess').value);



        /// If guess value is 0(falsy) change .message=textContent to 'no number' 


        if (!guess) {

					document.querySelector('.message').textContent = '⛔ No Number '

        }






    });